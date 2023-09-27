import { createBrowserRouter } from "react-router-dom";
import Donation from "../pages/Donation";
import Main from "../layout/Main";
import Statistic from "../pages/Statistic";
import NotFoundPage from "../pages/NotFoundPage";
import DonationDetailsPage from "../pages/DonationDetailsPage";
import { Suspense, lazy } from "react";
import HomeLoading from "../components/HomeLoading";
const HomePage = lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<HomeLoading />}>

                        <HomePage />
                    </Suspense>),
            },

            {
                path: "/donation",
                element: <Donation />,
            },
            {
                path: "/statistic",
                element: <Statistic />,
            },
            {
                path: "/detail/donation/:id",
                element: <DonationDetailsPage />,
            },

        ],
    },


    {
        path: "*",
        element: <NotFoundPage />
    }
]);
export default router;