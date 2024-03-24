import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import CategoryDetails from "../Components/Categories/CategoryDetails";

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
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Home />,
      },
      {
        path: "/donation-details/:id",
        element: <CategoryDetails />,
      },
    ],
  },
]);

export default router;
