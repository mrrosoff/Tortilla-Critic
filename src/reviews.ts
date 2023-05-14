import AquaVerde from "./reviews/aquaverde";
import ElTecho from "./reviews/eltecho";
import Fogon from "./reviews/fogon";
import Frontera from "./reviews/frontera";
import Fuego from "./reviews/fuego";
import Gracia from "./reviews/gracia";
import Hatch from "./reviews/hatch";
import Matador from "./reviews/matador";
import Puesto from "./reviews/puesto";
import RedStar from "./reviews/redstar";

export interface RestaurantReview {
    restaurantName: string;
    rating: number;
    summary: string;
    fullReview: string;
}

const reviews: RestaurantReview[] = [
    AquaVerde,
    ElTecho,
    Fogon,
    Frontera,
    Fuego,
    Gracia,
    Hatch,
    Matador,
    Puesto,
    RedStar
];

export default reviews;
