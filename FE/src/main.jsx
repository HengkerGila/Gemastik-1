import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<MantineProvider withGlobalStyles withNormalizeCSS>
		<App />
	</MantineProvider>
	// <StrictMode>
	// </StrictMode>
);
