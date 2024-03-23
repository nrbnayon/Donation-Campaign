import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Home from "../Pages/Home/Home";
import Root from "../Root";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNotFound />,
    element: <Root />,
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
