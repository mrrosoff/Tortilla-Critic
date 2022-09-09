import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import Layout from "./Layout";

const App = () => {
    const theme = createTheme({
        palette: {
            mode: "dark",
            primary: { main: "#2BC903" },
            secondary: { main: "#0B8AAD" }
        }
    });

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
