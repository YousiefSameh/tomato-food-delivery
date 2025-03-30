import CartItemList from "@components/AppComponents/CartItemList";
import useCart from "@hooks/useCart";

const Cart = () => {
	const {
		products,
		CalculateSubtoal,
		changeQuantityHandler,
		removeItemHandler,
		navigate,
	} = useCart();
	return (
		<main className="my-[150px]">
			<div className="cart-items-container overflow-x-scroll sm:overflow-x-visible">
				<div className="cart-items min-w-[600px] max-w-[800px] md:max-w-full mx-auto">
					<div
						className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-neutral-500"
						style={{ fontSize: "max(1vw, 12px)" }}
					>
						<p>Items</p>
						<p>Title</p>
						<p>Price</p>
						<p>Quantity</p>
						<p>Total</p>
						<p>Remove</p>
					</div>
					<br />
					<hr className="h-[1px] bg-[#e2e2e2] border-none" />
					{products.length ? (
						<CartItemList
							products={products}
							changeQuantityHandler={changeQuantityHandler}
							removeItemHandler={removeItemHandler}
						/>
					) : (
						<p className="mt-4">Your Cart is empty</p>
					)}
				</div>
			</div>
			<div
				className="cart-bottom mt-[80px] flex flex-col-reverse md:flex-row justify-between"
				style={{ gap: "max(12vw, 20px)" }}
			>
				<div className="cart-total flex-1 flex flex-col gap-5">
					<h2 className="text-2xl font-semibold">Total Cart</h2>
					<div>
						<div className="cart-total-details flex justify-between text-[#555]">
							<p>Subtotal: </p>
							<p>${CalculateSubtoal ? CalculateSubtoal : 0}</p>
						</div>
						<hr className="h-[1px] bg-[#e2e2e2] border-none my-2.5" />
						<div className="cart-total-details flex justify-between text-[#555]">
							<p>Delivery Fee: </p>
							<p>${CalculateSubtoal ? 10 : 0}</p>
						</div>
						<hr className="h-[1px] bg-[#e2e2e2] border-none my-2.5" />
						<div className="cart-total-details flex justify-between text-[#555]">
							<strong>Total</strong>
							<strong>${CalculateSubtoal ? CalculateSubtoal + 10 : 0}</strong>
						</div>
					</div>
					<button
						onClick={() => navigate("/order")}
						className="block w-full rounded-md bg-tomato px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-tomato/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomato uppercase cursor-pointer"
					>
						Proceed To Checkout
					</button>
				</div>
				<div className="cart-promocode flex-1">
					<div>
						<p className="text-[#555]">
							If you have a promocode, Enter it here
						</p>
						<div className="cart-promocode-input mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-sm">
							<input
								type="text"
								className="bg-transparent outline-none border-none pl-2.5"
								placeholder="Enter Your Promocode ..."
							/>
							<button
								className="bg-tomato text-white py-3 px-1.5 cursor-pointer rounded-r-sm"
								style={{ width: "max(10vw, 150px)" }}
							>
								Apply
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Cart;
