import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root";
import Home from "../pages/home/Home";
import AllNews from "../pages/home/all-newss/AllNewses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <AllNews></AllNews>,
                        loader: () => fetch('https://dev.to/api/articles'),
                    }
                ]
            }
        ]
    },
]);

export default router