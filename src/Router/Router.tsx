import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootTemplate from "../Template/RootTemplate";
import Profile from "../Page/Profile/Profile";
import Admin from "../Page/Admin/Admin";
import Detail from "../Page/Detail/Detail";
import Home from "../Page/Home/Home";
import Error from "../Component/Error/Error";
import Search from "../Page/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootTemplate />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
