import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Templates
import MainTemplate from "@templates/main.template";

// Pages
import Home from "@pages/Home";
import Cart from "@pages/Cart";
import PlaceOrder from "@pages/PlaceOrder";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainTemplate />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/order",
				element: <PlaceOrder />,
			},
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
