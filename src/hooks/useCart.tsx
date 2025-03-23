import { cartItemChangeQuantity, getTotalCartAmountSelector } from "@store/Cart/cart.slice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback } from "react";

const useCart = () => {
  const dispatch = useAppDispatch();
	const { items } = useAppSelector((state) => state.cart);
	const { foodList } = useAppSelector((state) => state.foodList);
  const CalculateSubtoal = useAppSelector(getTotalCartAmountSelector);
	const changeQuantityHandler = useCallback(
		(id: number, quantity: number) => {
			dispatch(cartItemChangeQuantity({ id, quantity }));
		},
		[dispatch]
	);
	const renderOptions = Array(9)
		.fill(0)
		.map((_, idx) => {
			const quantity = ++idx;
			return (
				<option value={quantity} key={quantity}>
					{quantity}
				</option>
			);
		});
  return {items, foodList, CalculateSubtoal, changeQuantityHandler, renderOptions};
}

export default useCart