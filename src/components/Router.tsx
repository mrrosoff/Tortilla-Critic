import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Restaurant from "./pages/Restaurant";
import NotFound from "./pages/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Dashboard />} />
                <Route path={"/:restaurant"} element={<Restaurant />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
