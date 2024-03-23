import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";

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
    ],
  },
]);

export default router;
