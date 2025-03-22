import { useState } from "react";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/Cart/cart.slice";
import { assets } from "@frontendAssets/assets";

const Header = () => {
	const [menu, isMenu] = useState("home");
	const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
	return (
		<header className="py-5 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">	
			<div className="w-[80%] mx-auto flex justify-between items-center">
				<img src={assets.logo} alt="Logo" className="w-[120px] md:w-[140px] lg:w-[150px]" />
				<ul className="hidden sm:flex gap-5">
					<li
						onClick={() => isMenu("home")}
						className={
							menu === "home"
								? "pb-[2px] border-b-2 border-[#49557E] text-[#49557E] text-lg cursor-pointer"
								: "text-[#49557E] text-base md:text-lg cursor-pointer"
						}
					>
						<a href="#hero">Home</a>
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
					<img src={assets.search_icon} className="w-[20px] md:w-[22px] lg:w-fit" alt="Search Icon" />
					<div className="relative">
						<img src={assets.basket_icon} className="w-[20px] md:w-[22px] lg:w-fit" alt="basket icon" />
						<div className="dot absolute min-w-2.5 min-h-2.5 w-full h-full flex items-center justify-center bg-tomato -top-4 -right-4 rounded-full text-white text-sm md:text-lg">{totalQuantity}</div>
					</div>
					<button className="bg-transparent text-[15px] md:text-base text-[#49557E] border border-tomato py-[7px] px-[20px] md:py-2 md:px-6.5 lg:py-2.5 lg:px-7.5 rounded-[50px] cursor-pointer transition-colors hover:bg-[#fff4f2]">
						Sign in
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
