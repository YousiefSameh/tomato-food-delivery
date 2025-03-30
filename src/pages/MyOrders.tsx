import useMyOrder from "@hooks/useMyOrder";
import { assets } from "@assets/assets";

const MyOrders = () => {
	const { data, fetchOrders } = useMyOrder();

	return (
		<div className="my-orders my-[50px]">
			<h2 className="text-3xl font-bold">My Orders</h2>
			<div className="my-orders-container flex flex-col gap-5 mt-7.5">
				{data.map((order, index) => {
					return (
						<div key={index} className="my-orders-order grid grid-cols-[1fr_2fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-x-[5px] md:gap-7.5 text-[11px] md:text-sm py-2.5 px-5 text-[#454545] border border-tomato">
							<img src={assets.parcel_icon} className="w-[50px]" alt="Parcel Icon" />
							<p>
								{order.items.map((item, index) => {
									if (index === order.items.length - 1) {
										return item.name + " x " + item.quantity;
									} else {
										return item.name + " x " + item.quantity + ", ";
									}
								})}
							</p>
							<p>${order.amount}.00</p>
							<p>items: {order.items.length}</p>
							<p><span className="text-tomato">&#x25cf;</span> <b className="text-[#454545] font-medium">{order.status}</b></p>
							<button onClick={fetchOrders} className="border-none py-3 rounded-sm text-[10px] md:text-sm bg-[#ffe1e1] text-[#454545] transition-colors cursor-pointer hover:bg-tomato hover:text-white">Track Order</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MyOrders;
