import { useNavigate } from "react-router-dom";
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Chip,
    Unstable_Grid2 as Grid,
    IconButton,
    InputBase,
    Paper,
    Rating,
    Typography,
    useTheme
} from "@mui/material";
import { LocationOn, Search } from "@mui/icons-material";
import reviews, { RestaurantReview } from "../../reviews";
import { useState } from "react";

const Layout = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [shownReviews, setShownReviews] = useState(reviews);

    return (
        <Box width={"100%"} height={"100%"} p={4} display={"flex"} flexDirection={"column"}>
            <SearchBox shownReviews={shownReviews} setShownReviews={setShownReviews} />
            <Box mt={5} mb={5} overflow={"hidden"} sx={{ overflowY: "scroll" }}>
                <Grid container spacing={2}>
                    {shownReviews.map((review, index) => {
                        return (
                            <Grid key={index}>
                                <ReviewCard review={review} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

const SearchBox = (props: { shownReviews: any[]; setShownReviews: Function }) => {
    return (
        <Box maxWidth={"80%"} display={"flex"} flexDirection={"column"}>
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
        <Card variant="outlined" sx={{ minWidth: 350, maxWidth: 400 }}>
            <CardActionArea
                onClick={() => navigate("/" + props.review.restaurantName.toLowerCase())}
            >
                <CardContent>
                    <Typography gutterBottom variant="h4" sx={{ fontSize: 22, fontWeight: 800 }}>
                        {props.review.restaurantName}
                    </Typography>
                    <Box color={"grey.500"} display={"flex"} alignItems={"center"} mb={1}>
                        <LocationOn sx={{ fontSize: 15 }} />
                        <Typography sx={{ ml: 0.8, fontSize: 15 }}>
                            {props.review.location}
                        </Typography>
                    </Box>
                    <Rating
                        defaultValue={props.review.rating / 2}
                        size={"small"}
                        precision={0.5}
                        readOnly
                    />
                    <Typography variant="body2" color="text.secondary">
                        {props.review.summary}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Layout;
