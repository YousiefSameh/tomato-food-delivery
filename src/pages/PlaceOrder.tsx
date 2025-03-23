import useCart from "@hooks/useCart";

const PlaceOrder = () => {
  const {CalculateSubtoal} = useCart();
  return (
    <form className="place-order flex flex-col md:flex-row items-start justify-between gap-[50px] mt-[100px] mb-[50px]">
      <div className="place-order-left w-full" style={{maxWidth: "max(30%, 500px)"}}>
        <p className="title text-3xl font-semibold mb-[50px] text-center md:text-left">Delivery Information</p>
        <div className="mulit-fields flex gap-2.5">
          <input className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" type="text" placeholder="First Name"/>
          <input className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" type="text" placeholder="Last Name"/>
        </div>
        <input className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" type="email" placeholder="Email" />
        <input className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" type="text" placeholder="Street" />
        <div className="mulit-fields flex gap-2.5">
          <input className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" type="text" placeholder="City"/>
          <input className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" type="text" placeholder="State"/>
        </div>
        <div className="mulit-fields flex gap-2.5">
          <input className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" type="text" placeholder="Zip Code"/>
          <input className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" type="text" placeholder="Country"/>
        </div>
        <input className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline outline-tomato rounded-sm" type="text" placeholder="Phone" />
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