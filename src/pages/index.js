import { lazy } from "react";

export const Application = lazy(() => import("./Application"));
export const Home = lazy(() => import("./home/Home"));
export const Login = lazy(() => import("./login/Login"));
export const Profile = lazy(() => import("./profile/Profile"));
export const Favorite = lazy(() => import("./favorite/Favorite"));
export const Accounts = lazy(() => import("./profile/Accounts"));
export const General = lazy(() => import("./profile/General"));
export const RequestData = lazy(() => import("./profile/RequestData"));
