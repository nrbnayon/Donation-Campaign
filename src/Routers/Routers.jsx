import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import CategoryDetails from "../Components/Categories/CategoryDetails";
import Donations from "../Pages/Donation/Donations";
import Statistics from "../Pages/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donations />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/donation-details/:id",
        element: <CategoryDetails />,
      },
    ],
  },
]);

export default router;
