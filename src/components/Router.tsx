import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Restaurant from "./pages/Restaurant";
import NotFound from "./pages/NotFound";
import { Box, Typography, useTheme } from "@mui/material";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path={"/:restaurant"} element={<Restaurant />} />
                    <Route path={"*"} element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const Layout = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <Box width={"100vw"} height={"100vh"} position={"relative"}>
            <Box
                position={"absolute"}
                top={theme.spacing(3)}
                right={theme.spacing(3)}
                zIndex={2}
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
            >
                <Typography variant={"h4"} fontFamily={"Lobster, cursive"}>
                    Tortilla Critic
                </Typography>
            </Box>
            <Outlet />
            <Box
                position={"absolute"}
                bottom={theme.spacing(2)}
                right={theme.spacing(2)}
                zIndex={1}
                display={"flex"}
            >
                <Typography
                    sx={{
                        pl: 0.5,
                        fontSize: 12,
                        fontWeight: 800,
                        cursor: "pointer"
                    }}
                    onClick={() => (window.location.href = "https://maxrosoff.com")}
                >
                    more by Max Rosoff
                </Typography>
            </Box>
        </Box>
    );
};

export default Router;
