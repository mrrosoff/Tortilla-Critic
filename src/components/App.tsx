import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";

import Router from "./Router";
import { useMemo } from "react";

const App = () => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? "dark" : "light",
                    primary: { main: "#2BC903" },
                    secondary: { main: "#0B8AAD" }
                },
                typography: {
                    fontFamily: "Carlito, sans-serif",
                    h1: {
                        fontSize: 120,
                        fontWeight: 800
                    },
                    h3: {
                        fontSize: 38
                    }
                }
            }),
        [prefersDarkMode]
    );

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
