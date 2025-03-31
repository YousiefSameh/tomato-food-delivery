import { memo } from "react";
import { IProduct } from "@customTypes/products.types";
import { useAppSelector } from "@store/hooks";
import API from "@services/api.services";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";

type CartItemProps = IProduct & {
	changeQuantityHandler: (id: string, quantity: number) => void;
	removeItemHandler: (id: string) => void;
};

const CartItem = memo(
	({
		_id,
		name,
		image,
		price,
		quantity,
		changeQuantityHandler,
		removeItemHandler,
	}: CartItemProps) => {
		const { token } = useAppSelector(state => state.auth);
		const url = "https://tomato-food-delivery-n3l8.onrender.com/image/";
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

		const changeQuantity = async (event: React.ChangeEvent<HTMLSelectElement>) => {
			const quantity = +event.target.value;
			changeQuantityHandler(_id, quantity);
			try {
				const res = await API.put("/api/cart/quantity", { itemId: _id, quantity: quantity }, { headers: { token: token } });
				return res.data;
			} catch (error) {
				if (isAxiosError(error)) {
					toast.error("Error: " + error.message);
					console.log(error);
				}
			}
		};

		return (
			<div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center cart-items-item my-2.5 text-black">
				<img src={`${url}${image}`} className="w-[50px]" alt={name} />
				<p>{name}</p>
				<p>${price}</p>
				<select
					className="bg-tomato text-gray-300 text-sm rounded-lg outline-tomato border border-tomato block w-1/2 p-2.5"
					value={quantity}
					onChange={changeQuantity}
				>
					{renderOptions}
				</select>
				<p>${price * Number(quantity)}</p>
				<button
					className="text-left cursor-pointer"
					onClick={() => removeItemHandler(_id)}
				>
					X
				</button>
			</div>
		);
	}
);

export default CartItem;
