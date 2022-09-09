import reviews from "../reviews/reviews";

const Layout = () => {
    return (
        <div>
            <div>
                <h1>Layout</h1>
            </div>
            <Reviews />
        </div>
    );
};

const Reviews = () => {
    return (
        <div>
            {reviews.map((review) => {
                return (
                    <div>
                        <h2>{review.restaurantName}</h2>
                        <p>{review.rating}</p>
                        <p>{review.comments}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Layout;
