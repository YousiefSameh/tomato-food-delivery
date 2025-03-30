import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
	actGetProductsByItems,
	cartItemChangeQuantity,
	cartItemRemove,
	cleanCartProductsFullInfo,
	getTotalCartAmountSelector,
} from "@store/cart/cart.slice";
import { useCallback, useEffect } from "react";

const useCart = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
  const { items, productsFullInfo } = useAppSelector(
    (state) => state.cart
  );

	const CalculateSubtoal = useAppSelector(getTotalCartAmountSelector)

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
	

	return {
    products,
		CalculateSubtoal,
    changeQuantityHandler,
    removeItemHandler,
		navigate,
  };
};

export default useCart;