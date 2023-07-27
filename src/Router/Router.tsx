import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootTemplate from "../Template/RootTemplate";
import Profile from "../Page/Profile/Profile";
import Admin from "../Page/Admin/Admin";
import Detail from "../Page/Detail/Detail";
import JobList from "../Page/JobList/JobList";
import Home from "../Page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootTemplate />,
    // errorElement: <ErrorPage />,
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
        path: "/joblist",
        element: <JobList />,
      },
    ],
  },
]);

export default router;
