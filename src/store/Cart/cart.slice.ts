import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface ICartState {
  items: { [key: number]: number };
}

const initialState: ICartState = {
  items: {},
};

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    return totalQuantity;
  }
);

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
    }
  },
});

export { getCartTotalQuantitySelector };
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;