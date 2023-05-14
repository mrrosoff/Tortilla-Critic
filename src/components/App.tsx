import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import Router from "./Router";

const App = () => {
    const theme = createTheme({
        palette: {
            mode: "dark",
            primary: { main: "#2BC903" },
            secondary: { main: "#0B8AAD" }
        },
        typography: {
            fontFamily: "Carlito, sans-serif",
            h1: {
                fontFamily: "Lobster, cursive",
                fontSize: 120
            },
            h2: {
                fontFamily: "Lobster, cursive"
            },
            h3: {
                fontFamily: "Lobster, cursive",
                fontSize: 38
            },
            h4: {
                fontSize: 30
            }
        }
    });

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
