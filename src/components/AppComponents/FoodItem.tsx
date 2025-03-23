import { memo } from "react";
import { type IProduct } from "@customTypes/FoodList.types";
import useFoodItem from "@hooks/useFoodItem";
import { assets } from "@frontendAssets/assets";

const FoodItem = memo(({ _id, name, description, price, image }: IProduct) => {
	const {handleAddToCart, handleRemoveFromCart, itemCount} = useFoodItem(_id);

	return (
		<article
			className="w-full m-auto rounded-2xl shadow-md transition-all"
			style={{ animation: "fadeIn 1s" }}
		>
			<div className="relative">
				<img className="w-full rounded-t-2xl" src={image} alt={name} />
				{!itemCount ? (
					<img
						className="w-9 absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
						onClick={handleAddToCart}
						src={assets.add_icon_white}
						alt="Add Item"
					/>
				) : (
					<div className="absolute bottom-[15px] right-[15px] flex items-center gap-2.5 p-[6px] -m-[4px] rounded-[50px] bg-white">
            <img className="w-7.5" onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="Reduce Count" />
            <span>{itemCount}</span>
            <img className="w-7.5" onClick={handleAddToCart} src={assets.add_icon_green} alt="Increase Count" />
					</div>
				)}
			</div>
			<div className="px-5 py-3">
				<div className="flex justify-between items-center pb-1">
					<p className="text-xl font-medium">{name}</p>
					<img
						className="w-[70px]"
						src={assets.rating_starts}
						alt="The Item's Rate"
					/>
				</div>
				<p className="text-[#676767] text-xs">{description}</p>
				<p className="text-tomato text-2xl font-medium my-2">${price}</p>
			</div>
		</article>
	);
});

export default FoodItem;
