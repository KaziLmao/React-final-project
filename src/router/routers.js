import Landing from "../pages/Landing";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import MyPosts from "../pages/MyPosts";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFoundPage from "../pages/NotFoundPage";
import React from "react";

export const privateRoutes = [
    {path: "/", element: <Landing/>, exact: true},
    {path: "/posts", element: <Posts/>, exact: true},
    {path: "/post/:id", element: <PostIdPage/>, exact: true},
    {path: "/myposts", element: <MyPosts/>, exact: true},
    {path: "/profile", element: <Profile/>, exact: true},
    {path: "/about", element: <About/>, exact: true},
    {path: "*", element: <NotFoundPage/>, exact: true}
]

export const publicRoutes = [
    {path: "/", element: <Landing/>, exact: true},
    {path: "/posts", element: <Posts/>, exact: true},
    {path: "/post/:id", element: <PostIdPage/>, exact: true},
    {path: "/about", element: <About/>, exact: true},
    {path: "/login", element: <Login/>, exact: true},
    {path: "/registration", element: <Register/>, exact: true},
    {path: "*", element: <NotFoundPage/>, exact: true}
]