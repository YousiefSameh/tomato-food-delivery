import { assets } from "@assets/assets";

const Footer = () => {
	return (
		<footer className="footer text-[#d3d3d3] bg-[#323232] flex flex-col items-center gap-5 pt-[80px] pb-5">
			<div className="footer-container w-[80%] mx-auto">
				<div className="footer-content w-full grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-[80px]">
					<div className="footer-content-left flex flex-col items-start gap-5">
						<img src={assets.logo} alt="Logo" />
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
							obcaecati illo quia nam officiis reiciendis praesentium
							laboriosam. Sit sint perferendis, cumque, voluptatum accusantium
							adipisci rem, sunt beatae optio iste aspernatur!
						</p>
						<div className="footer-social-icons flex items-center gap-4">
							<img
								src={assets.facebook_icon}
								className="w-[40px] cursor-pointer"
								alt="social media (facebook) icon"
							/>
							<img
								src={assets.twitter_icon}
								className="w-[40px] cursor-pointer"
								alt="social media (twitter) icon"
							/>
							<img
								src={assets.linkedin_icon}
								className="w-[40px] cursor-pointer"
								alt="social media (linkedin) icon"
							/>
						</div>
					</div>
					<div className="footer-content-middle flex flex-col items-start gap-5">
						<h2 className="uppercase text-white text-2xl font-semibold ">
							Company
						</h2>
						<ul>
							<li className="mb-2.5">
								<a href="#hero">Home</a>
							</li>
							<li className="mb-2.5">
								<a href="#menu">Menu</a>
							</li>
							<li className="mb-2.5">
								<a href="#mobile-app">Mobile App</a>
							</li>
							<li className="mb-2.5">
								<a href="#contact-us">Contact Us</a>
							</li>
						</ul>
					</div>
					<div className="footer-content-right flex flex-col items-start gap-5">
						<h2 className="uppercase text-white text-2xl font-semibold ">
							Get In Touch
						</h2>
						<ul>
							<li className="mb-2.5">+20 123-456-7890</li>
							<li className="mb-2.5">contact@tomato.com</li>
						</ul>
					</div>
				</div>
				<hr className="h-0.5 my-10 bg-neutral-500 border-none" />
				<p className="footer-copyright text-center">
					Copyright 2025 &copy; tomato.com - All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
