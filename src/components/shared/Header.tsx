import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cart.slice";
import { assets } from "@assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { authLogout } from "@store/auth/auth.slice";

const Header = ({ setShowLogin }: { setShowLogin: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { token } = useAppSelector(state => state.auth);
	const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
	const [menu, isMenu] = useState("home");
	
	const logout = () => {
		dispatch(authLogout());
		navigate("/");
	};

	return (
		<header className="py-5 fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
			<div className="w-[80%] mx-auto flex justify-between items-center">
				<Link to="/">
					<img
						src={assets.logo}
						alt="Logo"
						className="w-[120px] md:w-[140px] lg:w-[150px]"
					/>
				</Link>
				<ul className="hidden sm:flex gap-5">
					<li
						onClick={() => isMenu("home")}
						className={
							menu === "home"
								? "pb-[2px] border-b-2 border-[#49557E] text-[#49557E] text-lg cursor-pointer"
								: "text-[#49557E] text-base md:text-lg cursor-pointer"
						}
					>
						<Link
							to="/"
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						>
							Home
						</Link>
					</li>
					<li
						onClick={() => isMenu("menu")}
						className={
							menu === "menu"
								? "pb-[2px] border-b-2 border-[#49557E] text-[#49557E] text-base md:text-lg cursor-pointer"
								: "text-[#49557E] text-base md:text-lg cursor-pointer"
						}
					>
						<a href="#menu">Menu</a>
					</li>
					<li
						onClick={() => isMenu("mobile-app")}
						className={
							menu === "mobile-app"
								? "pb-[2px] border-b-2 border-[#49557E] text-[#49557E] text-base md:text-lg cursor-pointer"
								: "text-[#49557E] text-base md:text-lg cursor-pointer"
						}
					>
						<a href="#mobile-app">Mobile </a>App
					</li>
					<li
						onClick={() => isMenu("contact-us")}
						className={
							menu === "contact-us"
								? "pb-[2px] border-b-2 border-[#49557E] text-[#49557E] text-base md:text-lg cursor-pointer"
								: "text-[#49557E] text-base md:text-lg cursor-pointer"
						}
					>
						<a href="#contact-us">Contact </a>Us
					</li>
				</ul>
				<div className="flex items-center gap-5 md:gap-7.5 lg:gap-10">
					<img
						src={assets.search_icon}
						className="w-[20px] md:w-[22px] lg:w-fit"
						alt="Search Icon"
					/>
					<div className="relative">
						<Link to="/cart">
							<img
								src={assets.basket_icon}
								className="w-[20px] md:w-[22px] lg:w-fit"
								alt="basket icon"
							/>
						</Link>
						<div className="dot absolute min-w-2.5 min-h-2.5 w-full h-full flex items-center justify-center bg-tomato -top-4 -right-4 rounded-full text-white text-sm md:text-lg">
							{totalQuantity}
						</div>
					</div>
					{!token ? (
						<button
							onClick={() => setShowLogin(true)}
							className="bg-transparent text-[15px] md:text-base text-[#49557E] border border-tomato py-[7px] px-[20px] md:py-2 md:px-6.5 lg:py-2.5 lg:px-7.5 rounded-[50px] cursor-pointer transition-colors hover:bg-[#fff4f2]"
						>
							Sign in
						</button>
					) : (
						<div className="navbar-profile relative group">
							<img src={assets.profile_icon} alt="User Profile Icon" />
							<ul className="nav-profile-dropdown absolute right-0  hidden z-10 group-hover:flex flex-col items-start w-[135px] gap-2.5 bg-[#fff2ef] py-3 px-6.5 rounded-sm border border-tomato outline-2 outline-white">
								<li onClick={() => navigate("/myOrders")}  className="flex items-center gap-2.5 cursor-pointer hover:text-tomato">
									<img src={assets.bag_icon} className="w-5" alt="Bag Icon" />
									<p>Orders</p>
								</li>
								<hr className="w-full bg-[#acacac]" />
								<li
									className="flex items-center gap-2.5 cursor-pointer hover:text-tomato"
									onClick={logout}
								>
									<img
										src={assets.logout_icon}
										className="w-5"
										alt="Logout Icon"
									/>
									<p>Logout</p>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
