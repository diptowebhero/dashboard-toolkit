import { createBrowserRouter } from "react-router-dom";
import Email from "./components/email/Email";
import Home from "./components/home/Home";
import DashboardLayout from "./layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "email",
        element: <Email />,
      },
    ],
  },
]);

export default router;
