import { Outlet, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Layout = () => {
    const navigate = useNavigate();
    return (
        <Box width={"100vw"} height={"100vh"} p={6}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                    variant={"h3"}
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                >
                    Tortilla Critic
                </Typography>
                <Typography>More By Max Rosoff</Typography>
            </Box>
            <Box pt={8}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
