import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
	actGetProductsByItems,
	cartItemChangeQuantity,
	cartItemRemove,
	cleanCartProductsFullInfo,
	getTotalCartAmountSelector,
} from "@store/Cart/cart.slice";
import { toast } from "react-toastify";

const useCart = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { items, productsFullInfo } = useAppSelector((state) => state.cart);
	const [promocode, setPromocode] = useState("");
	const [appliedPromocodes, setAppliedPromocodes] = useState<string[]>([]);
	const [discount, setDiscount] = useState(0);
	const promocodeDiscounts: Record<string, number> = {
		SAVE10: 10,
		SAVE20: 20,
		SAVE30: 30,
	};

	const CalculateSubtoal = useAppSelector((state) =>
		getTotalCartAmountSelector(state)
	);

	const changeQuantityHandler = useCallback(
		(id: string, quantity: number) => {
			dispatch(cartItemChangeQuantity({ id, quantity }));
			return 0;
		},
		[dispatch]
	);

	const removeItemHandler = useCallback(
		(id: string) => {
			dispatch(cartItemRemove(id));
			return 0;
		},
		[dispatch]
	);

	const products = productsFullInfo.map((el) => ({
		...el,
		quantity: items[el._id],
	}));

	useEffect(() => {
		const promise = dispatch(actGetProductsByItems());
		return () => {
			promise.abort();
			dispatch(cleanCartProductsFullInfo());
		};
	}, [dispatch]);
	


	const applyPromocodeHandler = () => {
		if (promocode in promocodeDiscounts) {
			if (!appliedPromocodes.includes(promocode)) {
				setAppliedPromocodes((prev) => [...prev, promocode]);
				setDiscount((prev) => prev + promocodeDiscounts[promocode]);
				setPromocode("");
				toast.success("Promocode applied Successfully");
			} else {
				toast.error("Promocode already applied");
			}
		} else {
			toast.error("Invalid Promocode");
		}
	};

	return {
		products,
		CalculateSubtoal,
		discount,
		promocode,
		setPromocode,
		appliedPromocodes,
		changeQuantityHandler,
		removeItemHandler,
		applyPromocodeHandler,
		navigate,
	};
};

export default useCart;
