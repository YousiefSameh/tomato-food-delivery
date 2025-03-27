import { useAppDispatch, useAppSelector } from "@store/hooks";
import FoodItem from "./FoodItem";
import { useEffect } from "react";
import { actGetAllFood } from "@store/FoodList/FoodList.slice";

const FoodDisplay = ({ category }: { category: string }) => {
	const dispatch = useAppDispatch();
	const { foodList } = useAppSelector((state) => state.foodList);
	useEffect(() => {
		dispatch(actGetAllFood());
	}, [dispatch, foodList])
	return (
		<section className="pb-24 sm:pb-32" id="food-display">
			<h2 className="font-semibold" style={{ fontSize: "max(2vw, 24px)" }}>Top dishes near you</h2>
			<div className="grid mt-7.5 gap-7.5 gap-y-12.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
				{foodList.map((food, index) => {
          if (category !== "All" && food.category !== category) return null;
					return (
						<FoodItem
							key={index}
							_id={food._id}
							name={food.name}
							description={food.description}
							price={food.price}
							image={import.meta.env.VITE_BACKEND_URL + "/image/" + food.image}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default FoodDisplay;
