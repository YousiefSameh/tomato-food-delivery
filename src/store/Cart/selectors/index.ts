import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

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

const getTotalCartAmountSelector = createSelector(
	(state: RootState) => state.cart.items,
	(state: RootState) => state.foodList.foodList,
	(items, foodList) => {
		let totalAmount = 0;
		for (const item in items) {
			const itemInfo = foodList.find((food) => food._id === item);
			if (itemInfo) {
				totalAmount += itemInfo.price * items[item];
			}
		}
		return totalAmount;
	}
);

export { getCartTotalQuantitySelector, getTotalCartAmountSelector };
