import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// Templates
import MainTemplate from "@templates/main.template";
import Loading from "@components/feedback/Loading";

// Pages
const Home = lazy(() => import("@pages/Home"));
const Cart = lazy(() => import("@pages/Cart"));
const PlaceOrder = lazy(() => import("@pages/PlaceOrder"));
const Verify = lazy(() => import("@pages/Verify"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainTemplate />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<Loading />}>
						<Home />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: (
					<Suspense fallback={<Loading />}>
						<Cart />
					</Suspense>
				),
			},
			{
				path: "/order",
				element: (
					<Suspense fallback={<Loading />}>
						<PlaceOrder />
					</Suspense>
				),
			},
			{
				path: "/verify",
				element: (
					<Suspense fallback={<Loading />}>
						<Verify />
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
