import { Outlet } from "react-router-dom";
import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";

const MainTemplate = () => {
	return (
		<>
			<div className="w-[80%] mx-auto">
				<Header />
				<div className="mt-[115px]">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default MainTemplate;
