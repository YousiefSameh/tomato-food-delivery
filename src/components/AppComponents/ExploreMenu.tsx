import { menu_list } from "@frontendAssets/assets";

const ExploreMenu = ({category, setCategory}: { category: string, setCategory: React.Dispatch<React.SetStateAction<string>> }) => {
	return (
		<section className="flex flex-col gap-5" id="menu">
			<h1 className="text-4xl font-medium text-[#262626]">Explore Our Menu</h1>
			<p className="w-full md:max-w-[60%] columns-[#808]">
				Choose from a diserve menu featuring a delectable array of dishes
				crafted with the finest ingredients and culinary experitse. Our mission
				is to satisfy your cravings and elevate your dining experince, one
				delicious meal at a time.
			</p>
			<div
				className="flex justify-between items-center gap-7.5 text-center my-5 overflow-x-scroll lg:overflow-x-visible"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{menu_list.map((item, index) => {
					return (
						<article onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index}>
							<img src={item.menu_image} className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-all ${ category === item.menu_name ? "border-4 border-tomato" : "" }`} alt="Item Menu Image" />
							<p className="mt-2.5 text-[#747474] cursor-pointer" style={{fontSize: "max(1.4vw, 16px)"}}>{item.menu_name}</p>
						</article>
					);
				})}
			</div>
      <hr className="my-2.5 h-[2px] bg-[#e2e2e2] border-none"/>
		</section>
	);
};

export default ExploreMenu;
