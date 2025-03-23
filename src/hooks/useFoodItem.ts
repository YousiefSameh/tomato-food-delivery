import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToCart, removeFromCart } from "@store/Cart/cart.slice";

const useFoodItem = (_id: string) => {
	const dispatch = useAppDispatch();
	const { items } = useAppSelector((state) => state.cart);
	const [itemCount, setItemCount] = useState(items[Number(_id)] || 0);

	const handleAddToCart = () => {
		if (itemCount < 9) {
			setItemCount(itemCount + 1);
			dispatch(addToCart(_id));
		}
	};

	const handleRemoveFromCart = () => {
		setItemCount(itemCount - 1);
		dispatch(removeFromCart(_id));
	};
	return {handleAddToCart, handleRemoveFromCart, itemCount};
};

export default useFoodItem;
