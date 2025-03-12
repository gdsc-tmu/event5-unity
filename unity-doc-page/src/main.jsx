import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TopPage from "./TopPage.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
