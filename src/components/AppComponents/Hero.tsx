import { assets } from "@assets/assets";

const Hero = () => {
	return (
		<section id="hero" className="h-[34vw] my-7.5 mx-auto relative">
			<img
				loading="lazy"
				src={assets.header_img}
				alt="Header Image"
				className="w-full h-full object-cover rounded-[15px]"
			/>
			<div
				className="absolute flex flex-col items-start gap-[1.5vw] lg:max-w-1/2 md:max-w-[45%] max-w-[55%] bottom-[10%] left-[6vw]"
				style={{ animation: "fadeIn 2s" }}
			>
				<h1
					className="font-medium text-white"
					style={{ fontSize: "max(4.5vw, 16px)" }}
				>
					Order your favorite food here
				</h1>
				<p className="text-white text-[1vw] hidden md:block">
					Choose from a diserve menu featuring a delectable array of dishes
					crafted with the finest ingredients and culinary experitse. Our
					mission is to satisfy your cravings and elevate your dining experince,
					one delicious meal at a time.
				</p>
				<button
					className="text-[#747474] font-semibold py-[2vw] px-[4vw] md:py-[1vw] md:px-[2.3vw] bg-white rounded-[50px]"
					style={{ fontSize: "max(1vw, 13px)" }}
				>
					View Menu
				</button>
			</div>
		</section>
	);
};

export default Hero;
