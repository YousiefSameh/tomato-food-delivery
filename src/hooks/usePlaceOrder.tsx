import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import API from "@services/api.services";
import { getTotalCartAmountSelector } from "@store/Cart/selectors";
import { clearCartAfterPlaceOrder } from "@store/Cart/cart.slice";
import { isAxiosError } from "axios";
import { IProduct } from "@customTypes/products.types";
import { toast } from "react-toastify";

const usePlaceOrder = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { token } = useAppSelector((state) => state.auth);
	const { foodList } = useAppSelector((state) => state.foodList);
	const { items } = useAppSelector((state) => state.cart);
	const CalculateSubtoal = useAppSelector(getTotalCartAmountSelector);

	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		street: "",
		city: "",
		state: "",
		zipcode: "",
		country: "",
		phone: "",
	});

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const value = event.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};

	const placeOrder = async (event: React.FormEvent) => {
		event.preventDefault();
		const orderItems: IProduct[] = [];
		foodList.map((item) => {
			if (items[item._id] > 0) {
				const itemInfo = { ...item, quantity: items[item._id] };
				orderItems.push(itemInfo);
			}
		});
		const orderData = {
			address: data,
			items: orderItems,
			amount: CalculateSubtoal + 2,
		};
		try {
			const res = await API.post("/api/order/place", orderData, {
				headers: { token: token },
			});
			if (res.data.success) {
				const { session_url } = res.data;
				window.location.replace(session_url);
				dispatch(clearCartAfterPlaceOrder());
			}
		} catch (error) {
			if (isAxiosError(error)) {
				toast.error("Error: " + error.response?.data.message);
			}
		}
	};

	useEffect(() => {
		if (!token) {
			navigate("/cart");
		} else if (CalculateSubtoal === 0) {
			navigate("/");
		}
	}, [CalculateSubtoal, navigate, token]);
	return { placeOrder, CalculateSubtoal, onChangeHandler };
};

export default usePlaceOrder;
