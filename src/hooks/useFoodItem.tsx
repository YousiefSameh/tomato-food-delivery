import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToCart, cartItemRemove } from "@store/cart/cart.slice";
import { toast } from "react-toastify";
import API from "@services/api.services";
import { isAxiosError } from "axios";

const useFoodItem = (_id: string) => {
	const dispatch = useAppDispatch();
	const { token } = useAppSelector(state => state.auth);
	const { items } = useAppSelector((state) => state.cart);
	const [itemCount, setItemCount] = useState(items[Number(_id)] || 0);

	const handleAddToCart = async () => {
		if (itemCount < 9) {
			setItemCount(itemCount + 1);
			dispatch(addToCart(_id));
			try {
				const res = await API.post(
					"/api/cart/add",
					{ itemId: _id },
					{ headers: { token: token } }
				);
				return res.data.success;
			} catch (error) {
				if (isAxiosError(error)) {
					toast.error(error.response?.data.message);
				}
			}
		}
	};

	const handleRemoveFromCart = () => {
		setItemCount(itemCount - 1);
		dispatch(cartItemRemove(_id));
	};
	return { handleAddToCart, handleRemoveFromCart, itemCount };
};

export default useFoodItem;
