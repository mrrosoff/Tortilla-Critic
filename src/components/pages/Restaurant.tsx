import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import reviews from "../../reviews";

const Restaurant = () => {
    const { restaurant } = useParams();
    return (
        <Box display={"flex"}>
            <Box width={"50%"} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} style={{}}>
                    {restaurant}
                </Typography>
                <Typography variant={"h4"} style={{}}>
                    {reviews.find((item) => item.restaurantName === restaurant)!!.summary}
                </Typography>
                <Typography>
                    {reviews.find((item) => item.restaurantName === restaurant)!!.fullReview}
                </Typography>
            </Box>
            <Box pl={8}>images</Box>
        </Box>
    );
};

export default Restaurant;
