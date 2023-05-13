import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import reviews from "../../reviews/reviews";

const Restaurant = () => {
    const { restaurant } = useParams();
    return (
        <Box width={"100vw"} height={"100vh"} p={6}>
            <Typography variant={"h4"}>{restaurant}</Typography>
            <Box pt={4}>
                {reviews.find((item) => item.restaurantName === restaurant)!!.summary}
            </Box>
            <Box pt={4}>
                {reviews.find((item) => item.restaurantName === restaurant)!!.fullReview}
            </Box>
        </Box>
    );
};

export default Restaurant;
