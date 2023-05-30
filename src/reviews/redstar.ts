import { RestaurantReview } from "../reviews";

const redStar: RestaurantReview = {
    restaurantName: "Red Star Taco Bar",
    location: "Fremont, Washington",
    rating: 4,
    cost: 3,
    summary: "A flavorful explosion in the mouth, with just the right amount of spice.",
    fullReview: `The chips came out warm, and that's about as far as the magic went. 
    The chips are thin and flavorless, with a texture that leaves you sad and unsatisfied. 
    The salsa tries to make you forget about your pain with a small burst of spice, but 
    unfortunately ends with a watery, flavorless mess.`,
    contactInformation: {
        address: "513 N 36th St, Seattle, WA 98103, United States",
        website: "https://www.redstartacobar.com/",
        phoneNumber: "206-471-5027",
        email: "redstartacobar@gmail.com"
    },
    coverImage:
        "https://static.wixstatic.com/media/04ef85_1d7ad93d93324f78abc2ef3ac01ca12c~mv2_d_5472_3648_s_4_2.jpg/v1/fit/w_2500,h_1330,al_c/04ef85_1d7ad93d93324f78abc2ef3ac01ca12c~mv2_d_5472_3648_s_4_2.jpg",
    images: []
};

export default redStar;
