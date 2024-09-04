import { StrictMode } from "react";
import { type Root, createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../public/assets/styles/reset.scss";

const rootElement: Root = createRoot(document.getElementById("root"));

rootElement.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
