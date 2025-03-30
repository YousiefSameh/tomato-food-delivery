import { memo } from "react";
import { IProduct } from "@customTypes/products.types";

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
		const url = "http://localhost:4000/image/"
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
		const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
			const quantity = +event.target.value;
			console.log(quantity);
			console.log(_id);
			changeQuantityHandler(_id, quantity);
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
