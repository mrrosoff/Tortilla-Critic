import React, { useState } from "react";

import { Avatar, Box, Paper } from "@mui/material";

import SocialButtonList from "./SocialButtons";
import Profile from "../assets/images/profile.jpg";

const LinksAndMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{ position: "relative" }}>
            <Links open={open} setOpen={setOpen} />
            <Box sx={{ position: "absolute", top: 65, right: 0 }}>
                {open && (
                    <Paper style={{ width: 310 }}>
                        <SocialButtonList />
                    </Paper>
                )}
            </Box>
            <Avatar
                alt="Max Rosoff"
                src={Profile}
                onClick={() => setOpen(!open)}
                style={{
                    width: 45,
                    height: 45,
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: "#FFFFFF",
                    position: "absolute",
                    top: 0,
                    right: 0
                }}
            />
        </Box>
    );
};

const Links = (props: any) => {
    return (
        <Box sx={{ position: "absolute", top: 0, right: 80, display: "flex" }}>
            <a
                href={"https://github.com/mrrosoff/Tortilla-Critic"}
                target="_blank"
                style={{ paddingRight: 20, color: "#FCFCFC", fontSize: 20 }}
            >
                Source
            </a>
            <a
                style={{ margin: 0, color: "#FCFCFC", fontSize: 20 }}
                onClick={() => props.setOpen(!props.open)}
            >
                More
            </a>
        </Box>
    );
};

export default LinksAndMenu;
