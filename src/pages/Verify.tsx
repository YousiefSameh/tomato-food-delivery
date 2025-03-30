import { useEffect } from "react";
import { useAppSelector } from "@store/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "@services/api.services";

const Verify = () => {
  const navigate = useNavigate();
	const [ searchParams ] = useSearchParams();
  const { token } = useAppSelector(state => state.auth);
	const success = searchParams.get("success");
	const orderId = searchParams.get("orderId");
	const verifyPayment = async () => {
		const res = await API.post("/api/order/verify", { success: success, orderId: orderId }, { headers: { token: token } });
		if (res.data.success) {
      navigate("/myOrders");
		} else {
      navigate("/");
    }
	};
  useEffect(() => {
    verifyPayment();
  }, [])

	return (
		<div className="verify min-h-[60vh] grid">
			<div className="spinner w-[100px] h-[100px] place-self-center border-[5px] border-[#bdbdbd] border-t-tomato rounded-[50%] animate-[rotate_1s_infinite]"></div>
		</div>
	);
};

export default Verify;
