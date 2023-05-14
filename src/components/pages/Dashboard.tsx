import { useNavigate } from "react-router-dom";
import {
    Box,
    Chip,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Rating,
    Typography,
    useTheme
} from "@mui/material";
import { Search } from "@mui/icons-material";
import reviews from "../../reviews";

const Layout = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <Box width={"100vw"} height={"100vh"} p={5} display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <SearchBox />
                <Box pl={8} sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    <Typography variant={"h3"} fontFamily={"Lobster, cursive"}>
                        Tortilla Critic
                    </Typography>
                </Box>
            </Box>
            <Box mt={5} mb={5} overflow={"hidden"} sx={{ overflowY: "scroll" }}>
                <Grid container spacing={3}>
                    {reviews.map((review, index) => {
                        return <ReviewCard key={index} review={review} />;
                    })}
                </Grid>
            </Box>
            <Box
                position={"absolute"}
                bottom={theme.spacing(3)}
                right={theme.spacing(3)}
                display={"flex"}
            >
                <Typography onClick={() => {}}>Source</Typography>
                <Typography sx={{ pl: 2 }} onClick={() => {}}>
                    Max Rosoff
                </Typography>
            </Box>
        </Box>
    );
};

const SearchBox = () => {
    return (
        <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} alignItems={"center"} border={1} borderRadius={10}>
                <IconButton sx={{ p: 1.2, pl: 3, pr: 3 }}>
                    <Search />
                </IconButton>
                <InputBase fullWidth placeholder="Search" />
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
        <Grid item>
            <Box
                border={1}
                borderRadius={1}
                width={325}
                height={200}
                p={2}
                onClick={() => navigate("/" + props.review.restaurantName.toLowerCase())}
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

export default Layout;
