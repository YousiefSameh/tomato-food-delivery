import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByItems from "./act/actGetProductsByItems";
import {
	getCartTotalQuantitySelector,
	getTotalCartAmountSelector,
} from "./selectors/index";
import { IProduct, TLoading } from "@customTypes";

interface ICartState {
	items: { [key: string]: number };
	productsFullInfo: IProduct[];
	loading: TLoading;
	error: null | string;
}

const initialState: ICartState = {
	items: {},
	productsFullInfo: [],
	loading: "idle",
	error: null,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const id = action.payload;
			if (state.items[id]) {
				state.items[id]++;
			} else {
				state.items[id] = 1;
			}
		},
		cartItemChangeQuantity: (state, action) => {
			state.items[action.payload.id] = action.payload.quantity;
		},
		cartItemRemove: (state, action) => {
			delete state.items[action.payload];
			state.productsFullInfo = state.productsFullInfo.filter(
				(el: IProduct) => el._id !== action.payload
			);
		},
		cleanCartProductsFullInfo: (state) => {
			state.productsFullInfo = [];
		},
		clearCartAfterPlaceOrder: (state) => {
			state.items = {};
			state.productsFullInfo = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(actGetProductsByItems.pending, (state) => {
			state.loading = "pending";
			state.error = null;
		});
		builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
			state.loading = "succeeded";
			state.productsFullInfo = action.payload;
		});
		builder.addCase(actGetProductsByItems.rejected, (state, action) => {
			state.loading = "failed";
			if (action.payload && typeof action.payload === "string") {
				state.error = action.payload;
			}
		});
	},
});

export {
	getCartTotalQuantitySelector,
	getTotalCartAmountSelector,
	actGetProductsByItems,
};

export const {
	addToCart,
	cartItemChangeQuantity,
	cartItemRemove,
	cleanCartProductsFullInfo,
	clearCartAfterPlaceOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
