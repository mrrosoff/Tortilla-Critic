import { RestaurantReview } from "../reviews";

const puesto: RestaurantReview = {
    restaurantName: "Puesto",
    location: "San Diego, California",
    rating: 10,
    cost: 9,
    summary: "A delightfully structured chip experience.",
    fullReview: `Chips: perfection. Good texture, flavor, warmth. Destructured corn creates perfect rhythm on tongue.
    Salsa: spicy, flavorful, dark. Amazing flavor on the bumpiness of the chip.`,
    contactInformation: {
        address: "789 West Harbor Drive, San Diego, CA 92101",
        website: "https://www.eatpuesto.com/",
        phoneNumber: "(619) 233-8880"
    },
    coverImage:
        "https://lightstyle-inc.com/wp-content/uploads/2014/07/20140204_rnld_puesto_sd_0016b.jpg",
    images: []
};

export default puesto;
