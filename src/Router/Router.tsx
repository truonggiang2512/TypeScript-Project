import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootTemplate from "../Template/RootTemplate";
import Profile from "../Page/Profile/Profile";
import Admin from "../Page/Admin/Admin";
import Detail from "../Page/Detail/Detail";
import Home from "../Page/Home/Home";
import Error from "../Component/Error/Error";
import Search from "../Page/Search/Search";
import JobType from "../Page/JobType/JobType";
import storage from "../Utils/storage";
import Login from "../Page/Auth/Login/Login";
import Register from "../Page/Auth/Register/Register";
const isLogin = storage.get("isLogin");
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
        path: "/home",
        element: <Home />,
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
      {
        path: "/jobtype",
        element: <JobType />,
      },
      {
        path: "/login",
        element: isLogin == true ? <Profile /> : <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
