import { useParams } from "react-router-dom";

import { Box, Rating, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import reviews from "../../reviews";
import NotFound from "./NotFound";
import { LocationOn } from "@mui/icons-material";

const Restaurant = () => {
    const { restaurant } = useParams();
    const restaurantDetails = reviews.find(
        (item) => item.restaurantName.toLowerCase() === restaurant
    );

    if (!restaurantDetails) {
        return <NotFound />;
    }

    const { restaurantName } = restaurantDetails;
    return (
        <Box width={"100%"} height={"100%"} position={"relative"}>
            <Box
                position={"relative"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                maxWidth={"60%"}
                sx={{ p: 6, zIndex: 1 }}
            >
                <Box display={"flex"}>
                    <Typography
                        fontWeight={800}
                        fontSize={Math.min(120 * (12 / restaurantName.length), 120)}
                    >
                        {restaurantName}
                    </Typography>
                    <Box pl={4} pt={8} alignSelf={"center"}>
                        <Rating
                            defaultValue={restaurantDetails.rating / 2}
                            size={"large"}
                            precision={0.5}
                            readOnly
                        />
                    </Box>
                </Box>
                <Box mt={-2} display={"flex"} alignItems={"center"}>
                    <LocationOn sx={{ fontSize: 20 }} />
                    <Typography
                        ml={1}
                        fontSize={20}
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                            (window.location.href = restaurantDetails.contactInformation.address)
                        }
                    >
                        {restaurantDetails.location}
                    </Typography>
                    {restaurantDetails.contactInformation.website && (
                        <>
                            <Typography ml={4} fontSize={20}>
                                Website
                            </Typography>
                            <OpenInNewIcon
                                sx={{ ml: 1, fontSize: 20, cursor: "pointer" }}
                                onClick={() =>
                                    (window.location.href =
                                        restaurantDetails.contactInformation.website!!)
                                }
                            />
                        </>
                    )}
                </Box>
                <Typography pt={6} variant={"h4"}>
                    {restaurantDetails.summary}
                </Typography>
                <Typography pt={4} fontSize={20} maxWidth={"90%"}>
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
                    opacity: 0.25,
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
