import { useEffect, useState } from "react";
import { useAppSelector } from "@store/hooks";
import { isAxiosError } from "axios";
import API from "@services/api.services";
import { IOrder } from "@customTypes/order.types";
import { toast } from "react-toastify";

const useMyOrder = () => {
  const { token } = useAppSelector((state) => state.auth);
    const [data, setData] = useState<IOrder[]>([]);
  
    type TResponse = {
      success: boolean;
      orders: IOrder[];
    };
  
    const fetchOrders = async () => {
      try {
        const res = await API.post<TResponse>(
          "/api/order/user-orders",
          {},
          { headers: { token: token } }
        );
        setData(res.data.orders);
      } catch (error) {
        if (isAxiosError(error)) {
          toast.error(error.response?.data.message);
        }
      }
    };
  
    useEffect(() => {
      if (token) {
        fetchOrders();
      }
    }, [token]);
  return { data, fetchOrders }
}

export default useMyOrder