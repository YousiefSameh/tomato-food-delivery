import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles
import "@styles/index.css";

// App Router
import AppRouter from "./routes/AppRouter";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</StrictMode>
);
