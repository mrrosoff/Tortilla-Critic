import { useNavigate } from "react-router-dom";
import {
    Autocomplete,
    Box,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Unstable_Grid2 as Grid,
    IconButton,
    InputBase,
    Rating,
    Typography,
    useTheme
} from "@mui/material";
import { LocationOn, Search } from "@mui/icons-material";
import reviews, { RestaurantReview } from "../../reviews";
import { useState } from "react";

const Layout = () => {
    const [shownReviews, setShownReviews] = useState(reviews);

    return (
        <Box width={"100%"} height={"100%"} p={3.5} display={"flex"} flexDirection={"column"}>
            <SearchBox shownReviews={shownReviews} setShownReviews={setShownReviews} />
            <Box
                m={-1}
                mt={2.5}
                mb={0}
                height={"100%"}
                display={"flex"}
                flexWrap={"wrap"}
                overflow={"hidden"}
                sx={{ overflowY: "scroll" }}
            >
                {shownReviews.map((review) => (
                    <ReviewCard review={review} />
                ))}
            </Box>
        </Box>
    );
};

const SearchBox = (props: { shownReviews: any[]; setShownReviews: Function }) => {
    return (
        <Box maxWidth={"50%"} display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} alignItems={"center"} border={1} borderRadius={10}>
                <IconButton sx={{ p: 1.2, pl: 3, pr: 3 }}>
                    <Search />
                </IconButton>
                <Autocomplete
                    sx={{ pr: 3 }}
                    fullWidth
                    options={reviews}
                    getOptionLabel={(option: RestaurantReview) => option.restaurantName}
                    renderInput={(params: any) => <InputBase {...params} placeholder={"Search"} />}
                />
            </Box>
            <Box pt={1.5} display="flex">
                <Chip
                    size="small"
                    label="Rating Of At Least 4 Stars"
                    onClick={() => {}}
                    variant="outlined"
                />
                <Chip
                    sx={{ ml: 1 }}
                    size="small"
                    label="Best Chips"
                    onClick={() => {}}
                    variant="outlined"
                />
                <Chip
                    sx={{ ml: 1 }}
                    size="small"
                    label="Best Salsa"
                    onClick={() => {}}
                    variant="outlined"
                />
            </Box>
        </Box>
    );
};

const ReviewCard = (props: { review: any }) => {
    const navigate = useNavigate();
    return (
        <Card variant="outlined" sx={{ m: 1, minWidth: 325, maxWidth: 375 }}>
            <CardActionArea
                onClick={() => navigate("/" + props.review.restaurantName.toLowerCase())}
                sx={{ height: "100%" }}
            >
                <CardContent>
                    <Typography gutterBottom variant="h4" sx={{ fontSize: 22, fontWeight: 800 }}>
                        {props.review.restaurantName}
                    </Typography>
                    <Box color={"grey.500"} display={"flex"} alignItems={"center"} mt={-0.8} mb={1}>
                        <Rating
                            defaultValue={props.review.rating / 2}
                            size={"small"}
                            precision={0.5}
                            readOnly
                        />
                        <LocationOn sx={{ ml: 1.5, fontSize: 15 }} />
                        <Typography sx={{ ml: 0.8, fontSize: 15 }}>
                            {props.review.location}
                        </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        {props.review.summary}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Layout;
