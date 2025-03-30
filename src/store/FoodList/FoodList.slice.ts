import { createSlice } from "@reduxjs/toolkit";
import { IProduct, TLoading } from "@customTypes/index";
import actGetAllFood from "./act/actGetAllFood";

interface IFoodListState {
	foodList: IProduct[];
	loading: TLoading;
	error: string | null;
}

const initialState: IFoodListState = {
	foodList: [],
	loading: "idle",
	error: null,
};

const FoodListSlice = createSlice({
	name: "foodList",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(actGetAllFood.pending, (state) => {
			state.loading = "pending";
			state.error = null;
		});
		builder.addCase(actGetAllFood.fulfilled, (state, action) => {
			state.loading = "succeeded";
			state.foodList = action.payload.data;
		});
		builder.addCase(actGetAllFood.rejected, (state, action) => {
			state.loading = "failed";
			if (action.payload && typeof action.payload === "string") {
				state.error = action.payload;
			}
		});
	},
});

export { actGetAllFood };
export default FoodListSlice.reducer;
