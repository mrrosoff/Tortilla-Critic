import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import reviews from "../../reviews";
import NotFound from "./NotFound";

const Restaurant = () => {
    const { restaurant } = useParams();
    const restaurantDetails = reviews.find(
        (item) => item.restaurantName.toLowerCase() === restaurant
    );

    if (!restaurantDetails) {
        return <NotFound />;
    }

    return (
        <Box display={"flex"}>
            <Box width={"50%"} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"}>{restaurantDetails.restaurantName}</Typography>
                <Typography variant={"h4"}>{restaurantDetails.summary}</Typography>
                <Typography pt={4}>{restaurantDetails.fullReview}</Typography>
            </Box>
            <Box pl={8}>images</Box>
        </Box>
    );
};

export default Restaurant;
