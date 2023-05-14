import { useNavigate } from "react-router-dom";

import { Box, Grid, Rating, Typography } from "@mui/material";

import reviews from "../../reviews";

const Dashboard = () => {
    return (
        <Grid container spacing={3}>
            {reviews.map((review, index) => {
                return <ReviewCard key={index} review={review} />;
            })}
        </Grid>
    );
};

const ReviewCard = (props: { review: any }) => {
    const navigate = useNavigate();
    return (
        <Grid item>
            <Box
                border={1}
                borderRadius={1}
                width={325}
                height={150}
                p={2}
                sx={{ ":hover": { boxShadow: "5px 5px 10px grey" } }}
                onClick={() => navigate("/" + props.review.restaurantName)}
            >
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant={"h5"}>{props.review.restaurantName}</Typography>
                    <Rating
                        defaultValue={props.review.rating / 2}
                        size={"small"}
                        precision={0.5}
                        readOnly
                    />
                </Box>
                <Typography pt={1}>{props.review.summary}</Typography>
            </Box>
        </Grid>
    );
};

export default Dashboard;
