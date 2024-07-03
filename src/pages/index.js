import { lazy } from "react";

export const Application = lazy(() => import("./Application"));
export const Home = lazy(() => import("./home/Home"));
export const Login = lazy(() => import("./login/Login"));
export const Profile = lazy(() => import("./profile/Profile"));
export const Favorite = lazy(() => import("./favorite/Favorite"));
