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
import { TOKEN } from "../Utils/config";
import HomeAuth from "../Page/HomeAuth/HomeAuth";
import SearchType from "../Page/Search/SearchType";
const isLogin = storage.get("isLogin");
const token = storage.get(TOKEN);
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
        element: token ? <HomeAuth /> : <Home />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/detail/:jobDetailId",
        element: <Detail />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/searchtype",
        element: <SearchType />,
      },
      {
        path: "/jobtype",
        element: <JobType />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
