import { assets } from "@assets/assets";
import { Field, Label, Switch } from "@headlessui/react";
import useLogin from "@hooks/useLogin";

const Login = ({ setShowLogin }: { setShowLogin: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const { data, currentState, agreed, setAgreed, setCurrentState, onChangeHandler, submitHandler } = useLogin(setShowLogin);
	return (
		<div className="login-popup fixed z-50 w-screen h-screen top-0 left-0 bg-black/90 grid">
			<form
				action=""
				onSubmit={submitHandler}
				className="login-popup-container place-self-center bg-white text-[#808080] flex flex-col gap-6.5 py-6.5 px-7.5 rounded-lg text-sm animate-[fadeIn_0.5s] h-fit"
				style={{ width: "max(23vw, 330px)" }}
			>
				<div className="login-popup-title flex justify-between items-center text-black">
					<h2 className="text-2xl font-semibold">{currentState}</h2>
					<img
						src={assets.cross_icon}
						className="cursor-pointer"
						onClick={() => setShowLogin(false)}
						alt="Close Popup"
					/>
				</div>
				<div className="login-popup-inputs flex flex-col gap-5">
					{currentState === "Login" ? (
						<>
							<input
								id="email"
								name="email"
								onChange={onChangeHandler}
								value={data.email}
								type="email"
								autoComplete="email"
								placeholder="Enter Your Email ..."
								required
								className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-tomato"
							/>
							<input
								id="password"
								name="password"
								onChange={onChangeHandler}
								value={data.password}
								type="password"
								placeholder="Enter Your Password ..."
								className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-tomato"
							/>
						</>
					) : (
						<>
							<input
								id="name"
								name="name"
								onChange={onChangeHandler}
								value={data.name}
								type="text"
								autoComplete="given-name"
								placeholder="Enter Your Name ..."
								className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-tomato"
							/>
							<input
								id="email"
								name="email"
								onChange={onChangeHandler}
								value={data.email}
								type="email"
								autoComplete="email"
								placeholder="Enter Your Email ..."
								required
								className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-tomato"
							/>
							<input
								id="password"
								name="password"
								onChange={onChangeHandler}
								value={data.password}
								type="password"
								placeholder="Enter Your Password ..."
								className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-tomato"
							/>
						</>
					)}
				</div>
				<button
					type="submit"
					className="block w-full rounded-md bg-tomato px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-tomato/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomato cursor-pointer"
				>
					{currentState === "Sign Up" ? "Create an Account" : "Login"}
				</button>
				<Field className="flex items-start gap-x-2 -mt-4 sm:col-span-2">
					<div className="flex h-6 items-center">
						<Switch
							checked={agreed}
							onChange={setAgreed}
							className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomato data-checked:bg-tomato"
						>
							<span className="sr-only">Agree to policies</span>
							<span
								aria-hidden="true"
								className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
							/>
						</Switch>
					</div>
					<Label className="text-sm text-gray-600">
						By selecting this, you agree to our{" "}
						<a href="#" className="font-semibold text-tomato">
							privacy&nbsp;policy
						</a>
						.
					</Label>
				</Field>
				{currentState === "Login" ? (
					<p className="text-center">
						You have not an account,{" "}
						<span
							className="text-tomato cursor-pointer"
							onClick={() => setCurrentState("Sign Up")}
						>
							Create An Account
						</span>
					</p>
				) : (
					<p className="text-center">
						Already have an account,{" "}
						<span
							className="text-tomato cursor-pointer"
							onClick={() => setCurrentState("Login")}
						>
							Login
						</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default Login;
