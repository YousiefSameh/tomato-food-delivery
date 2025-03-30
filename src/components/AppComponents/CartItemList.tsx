import CartItem from "./CartItem";
import { IProduct } from "@customTypes/products.types";

type CartItemListProps = {
	products: IProduct[];
	changeQuantityHandler: (id: string, quantity: number) => void;
	removeItemHandler: (id: string) => void;
};

const CartItemList = ({
	products,
	changeQuantityHandler,
	removeItemHandler,
}: CartItemListProps) => {
	const renderItems = products.map((el) => (
		<CartItem
			key={el._id}
			{...el}
			changeQuantityHandler={changeQuantityHandler}
			removeItemHandler={removeItemHandler}
		/>
	));
	return <div>{renderItems}</div>;
};

export default CartItemList;
