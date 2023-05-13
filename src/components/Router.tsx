import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Dashboard from "./pages/Dashboard";
import Restaurant from "./pages/Restaurant";
import NotFound from "./pages/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path={":restaurant"} element={<Restaurant />} />
                </Route>
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
