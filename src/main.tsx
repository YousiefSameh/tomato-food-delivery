import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles
import "@styles/index.css";

// App Router
import AppRouter from "./routes/AppRouter";

// Redux
import { store, persistor } from "@store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppRouter />
			</PersistGate>
		</Provider>
	</StrictMode>
);
