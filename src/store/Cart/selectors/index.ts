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
	[
		(state: RootState) => state.cart.items,
		(state: RootState) => state.foodList.foodList
	],
	(items, foodList) => {
		if (!items || Object.keys(items).length === 0 || Object.values(items).every(quantity => quantity === 0)) {
			console.log("Cart is empty or quantities are zero.");
			return 0;
		}
		return Object.entries(items).reduce((totalAmount, [itemId, quantity]) => {
			const itemInfo = foodList.find((food) => food._id === itemId);
			if (!itemInfo) {
				console.warn(`Item with ID ${itemId} not found in foodList.`);
			}
			return itemInfo ? totalAmount + itemInfo.price * quantity : totalAmount;
		}, 0);
	}
);

export { getCartTotalQuantitySelector, getTotalCartAmountSelector };
