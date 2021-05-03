import React from "react";

import { Hidden } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { SnackbarProvider } from "notistack";

import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

const App = () => {
	const theme = createMuiTheme({
		palette: {
			type: "dark",
			primary: { main: "#2BC903" },
			secondary: { main: "#0B8AAD" }
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SnackbarProvider maxSnack={3} preventDuplicate>
				<Hidden mdUp>
					<MobileLayout />
				</Hidden>
				<Hidden smDown>
					<DesktopLayout />
				</Hidden>
			</SnackbarProvider>
		</ThemeProvider>
	);
};

export default App;
