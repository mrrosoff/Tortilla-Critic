import aquaVerde from "./reviews/aquaverde";
import bocas from "./reviews/bocas";
import elTecho from "./reviews/eltecho";
import fogon from "./reviews/fogon";
import frontera from "./reviews/frontera";
import fuego from "./reviews/fuego";
import gracia from "./reviews/gracia";
import hatch from "./reviews/hatch";
import matador from "./reviews/matador";
import puesto from "./reviews/puesto";
import redStar from "./reviews/redstar";
import theLawn from "./reviews/thelawn";
import tonito from "./reviews/tonito";

export interface RestaurantReview {
    restaurantName: string;
    location: string;
    rating: number;
    cost: number;
    summary: string;
    fullReview: string;
    contactInformation: {
        address: string;
        website?: string;
        phoneNumber?: string;
        email?: string;
    };
    coverImage: string;
    images: any[];
}

const reviews: RestaurantReview[] = [
    aquaVerde,
    bocas,
    elTecho,
    fogon,
    frontera,
    fuego,
    gracia,
    hatch,
    matador,
    puesto,
    redStar,
    theLawn,
    tonito
];

export default reviews;
