import { useParams } from "react-router-dom";

import { Box, Rating, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
        <Box width={"100%"} height={"100%"} position={"relative"}>
            <Box
                position={"relative"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                maxWidth={"55%"}
                sx={{ p: 6, zIndex: 1 }}
            >
                <Box display={"flex"}>
                    <Typography variant={"h1"}>{restaurantDetails.restaurantName}</Typography>
                    <Box pl={4} pt={8} alignSelf={"center"}>
                        <Rating
                            defaultValue={restaurantDetails.rating / 2}
                            size={"large"}
                            precision={0.5}
                            readOnly
                        />
                    </Box>
                </Box>
                <Box mt={-1} display={"flex"} alignItems={"center"}>
                    <Typography
                        sx={{ fontSize: 20 }}
                        onClick={() => (window.location.href = restaurantDetails.address)}
                    >
                        {restaurantDetails.location}
                    </Typography>
                    {restaurantDetails.website && (
                        <OpenInNewIcon
                            sx={{ ml: 2, fontSize: 20 }}
                            onClick={() => (window.location.href = restaurantDetails.website!!)}
                        />
                    )}
                </Box>
                <Typography pt={6} variant={"h4"}>
                    {restaurantDetails.summary}
                </Typography>
                <Typography pt={4} sx={{ fontSize: 20 }}>
                    {restaurantDetails.fullReview}
                </Typography>
                <Box>
                    {restaurantDetails.images.map((image) => (
                        <img src={image} />
                    ))}
                </Box>
            </Box>
            <img
                src={restaurantDetails.coverImage}
                style={{
                    position: "absolute",
                    opacity: 0.35,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />
        </Box>
    );
};

export default Restaurant;
