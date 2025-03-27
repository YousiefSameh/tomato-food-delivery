import { useState } from "react";
import API from "@services/api.services";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

const useLogin = (setShowLogin: React.Dispatch<React.SetStateAction<boolean>>) => {
	const [currentState, setCurrentState] = useState("Sign Up");
	const [agreed, setAgreed] = useState(false);
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		if (currentState === "Login") {
			try {
				const response = await API.post("/api/user/login", data);
				if (response.data.success) {
					localStorage.setItem("token", response.data.token);
					toast.success(response.data.message);
					setShowLogin(false);
				}
			} catch (error) {
				if (isAxiosError(error)) {
					toast.error(error.response?.data.message);
				}
			}
		} else {
			try {
				const response = await API.post("/api/user/register", data);
				if (response.data.success) {
					localStorage.setItem("token", response.data.token);
					toast.success(response.data.message);
					setShowLogin(false)
				}
			} catch (error) {
				if (isAxiosError(error)) {
					toast.error(error.response?.data.message);
				}
			}
		}
	};
	return { data, currentState, agreed, setAgreed, setCurrentState, onChangeHandler, submitHandler };
};

export default useLogin;
