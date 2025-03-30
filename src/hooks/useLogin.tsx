import { useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { actAuthLogin, actAuthRegister } from "@store/auth/auth.slice";
import { toast } from "react-toastify";

const useLogin = (
	setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const dispatch = useAppDispatch();
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
			dispatch(actAuthLogin(data))
				.unwrap()
				.then(() => {
					toast.success("Login Done Successfully");
					setShowLogin(false);
				})
				.catch((error) => {
					if (error.success === false) {
						toast.error("Login failed: " + error.message);
					}
				});
		} else {
			dispatch(actAuthRegister(data))
				.unwrap()
				.then(() => {
					toast.success("Registeration Done Successfully");
					setShowLogin(false);
				})
				.catch((error) => {
					if (error.success === false) {
						toast.error("Registeration failed: " + error.message);
					}
				});
		}
	};
	return {
		data,
		currentState,
		agreed,
		setAgreed,
		setCurrentState,
		onChangeHandler,
		submitHandler,
	};
};

export default useLogin;
