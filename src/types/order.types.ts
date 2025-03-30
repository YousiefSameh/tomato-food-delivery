interface IOrderItem {
	_id: string;
	name: string;
	description: string;
	image: string;
	category: string;
	price: number;
	quantity: number;
}

interface IOrder {
	_id: string;
	userId: string;
	items: IOrderItem[];
	amount: number;
	address: object;
	status: string;
	date: string;
	payment: boolean;
}

export { type IOrder, type IOrderItem };
