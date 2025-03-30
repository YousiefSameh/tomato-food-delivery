import { useState } from "react";
import { useAppSelector } from "@store/hooks";
import { getTotalCartAmountSelector } from "@store/cart/selectors";
import API from "@services/api.services";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { IProduct } from "@customTypes/products.types";

const PlaceOrder = () => {
  const { token } = useAppSelector(state => state.auth);
  const { foodList } = useAppSelector(state => state.foodList);
  const { items } = useAppSelector(state => state.cart);
  const CalculateSubtoal = useAppSelector(getTotalCartAmountSelector);

  const [ data, setData ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]:value }));
  }

  const placeOrder = async (event: React.FormEvent) => {
    event.preventDefault();
    const orderItems: IProduct[] = [];
    foodList.map((item) => {
      if (items[item._id] > 0) {
        const itemInfo = { ...item, quantity: items[item._id] };
        orderItems.push(itemInfo);
      }
    })
    const orderData = {
      address: data,
      items: orderItems,
      amount: CalculateSubtoal + 2
    }
    try {
      const res = await API.post("/api/order/place", orderData, { headers: { token: token } });
      if (res.data.success) {
        const { session_url } = res.data;
        window.location.replace(session_url);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error("Error: " + error.response?.data.message);
      }
    }
  }

  return (
    <form onSubmit={placeOrder} className="place-order flex flex-col md:flex-row items-start justify-between gap-[50px] mt-[100px] mb-[50px]">
      <div className="place-order-left w-full" style={{maxWidth: "max(30%, 500px)"}}>
        <p className="title text-3xl font-semibold mb-[50px] text-center md:text-left">Delivery Information</p>
        <div className="mulit-fields flex gap-2.5">
          <input required className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" name="firstName" type="text" onChange={onChangeHandler} placeholder="First Name"/>
          <input required className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" name="lastName" type="text" onChange={onChangeHandler} placeholder="Last Name"/>
        </div>
        <input required className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" name="email" onChange={onChangeHandler} type="email" placeholder="Email" />
        <input required className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" name="street" onChange={onChangeHandler} type="text" placeholder="Street" />
        <div className="mulit-fields flex gap-2.5">
          <input required className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" name="city" onChange={onChangeHandler} type="text" placeholder="City"/>
          <input required className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" name="state" onChange={onChangeHandler} type="text" placeholder="State"/>
        </div>
        <div className="mulit-fields flex gap-2.5">
          <input required className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" name="zipcode" onChange={onChangeHandler} type="text" placeholder="Zip Code"/>
          <input required className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" name="country" onChange={onChangeHandler} type="text" placeholder="Country"/>
        </div>
        <input required className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" name="phone" onChange={onChangeHandler} type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right w-full" style={{maxWidth: "max(40%, 500px)"}}>
        <div className="cart-total">
          <h2 className="text-2xl font-semibold mb-5">Total Cart</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal: </p>
              <p>${CalculateSubtoal ? CalculateSubtoal : 0}</p>
            </div>
            <hr className="h-[1px] bg-[#e2e2e2] border-none my-2.5" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee: </p>
              <p>$10</p>
            </div>
            <hr className="h-[1px] bg-[#e2e2e2] border-none my-2.5" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <strong>Total</strong>
              <strong>${CalculateSubtoal ? CalculateSubtoal + 10 : 10}</strong>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full rounded-md bg-tomato px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-tomato/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomato uppercase cursor-pointer mt-10"
          >
            Proceed To Payment
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder