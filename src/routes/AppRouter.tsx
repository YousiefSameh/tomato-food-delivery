import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Templates
import MainTemplate from "@templates/main.template";

// Pages
const Home = lazy(() => import("@pages/Home"));
const Cart = lazy(() => import("@pages/Cart"));
const PlaceOrder = lazy(() => import("@pages/PlaceOrder"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainTemplate />,
		children: [
			{
				index: true,
				element: (
					<Suspense>
						<Home />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: (
					<Suspense>
						<Cart />
					</Suspense>
				),
			},
			{
				path: "/order",
				element: (
					<Suspense>
						<PlaceOrder />
					</Suspense>
				),
			},
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
