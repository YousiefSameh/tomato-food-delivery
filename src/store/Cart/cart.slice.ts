import { createSlice } from "@reduxjs/toolkit";
import { getCartTotalQuantitySelector, getTotalCartAmountSelector } from "./selectors";

interface ICartState {
	items: { [key: number]: number };
}

const initialState: ICartState = {
	items: {},
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
		removeFromCart: (state, action) => {
			const id = action.payload;
			if (state.items[id] === 1) {
				delete state.items[id];
			} else {
				state.items[id]--;
			}
		},
		cartItemChangeQuantity: (state, action) => {
			state.items[action.payload.id] = action.payload.quantity;
		},
	},
});

export { getCartTotalQuantitySelector, getTotalCartAmountSelector };
export const { addToCart, removeFromCart, cartItemChangeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
