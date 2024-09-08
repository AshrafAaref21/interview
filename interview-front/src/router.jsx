import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   path: "/details",
  //   element: <HomePage />,
  // },
  // {
  //   path: "/list",
  //   element: <HomePage />,
  // },
]);

export default router;
