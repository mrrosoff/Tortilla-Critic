import React from "react";

import { Box } from "@mui/material";

import reviews from "../../reviews/reviews";

const Layout = (props) => {
    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box>Tortilla Critic</Box>
            {reviews.map((review, index) => (
                <Box key={index} display={"flex"}>
                    <Box>{review.restaurantName}</Box>
                    <Box>{review.rating}</Box>
                    <Box>{review.comments}</Box>
                </Box>
            ))}
        </Box>
    );
};

export default Layout;
