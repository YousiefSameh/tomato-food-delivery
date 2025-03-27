import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@customTypes/FoodList.types";
import { food_list } from "@assets/assets";

interface IFoodListState {
	foodList: IProduct[];
}

const initialState: IFoodListState = {
	foodList: food_list,
};

const FoodListSlice = createSlice({
	name: "foodList",
	initialState,
	reducers: {},
});

export default FoodListSlice.reducer;
