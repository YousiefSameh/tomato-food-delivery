import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";
import Login from "@components/AppComponents/Login";
import { ToastContainer } from "react-toastify";

const MainTemplate = () => {
	const [ showLogin, setShowLogin ] = useState(false);
	return (
		<>
			{ showLogin && <Login setShowLogin={setShowLogin} /> }
			<div className="w-[80%] mx-auto">
				<Header setShowLogin={setShowLogin} />
				<div className="mt-[115px]">
					<Outlet />
				</div>
			</div>
			<Footer />
			<ToastContainer />
		</>
	);
};

export default MainTemplate;
