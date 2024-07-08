import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import {
  Accounts,
  Application,
  Favorite,
  General,
  Home,
  Login,
  Profile,
  RequestData,
} from "../pages";
import App from "../App.jsx";
=======
import { Application, Favorite, Home, Login, Profile } from "../pages";
>>>>>>> b23c16f4093e2740b54bca8a5b08b464ab2b655c
import Loading from "../components/loading/Loading.jsx";
import { Suspense } from "react";
import Book from "../pages/book/Book.jsx";
import LoginAsHostinger from "../pages/loginAs/LoginAsHostinger.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        {" "}
        <Application />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        ),
        children: [
          {
            path: "accounts",
            element: (
              <Suspense fallback={<Loading />}>
                <Accounts />
              </Suspense>
            ),
          },
          {
            path: "general",
            element: (
              <Suspense fallback={<Loading />}>
                <General />
              </Suspense>
            ),
          },
          {
            path: "request-data",
            element: (
              <Suspense fallback={<Loading />}>
                <RequestData />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/favorite",
        element: (
          <Suspense fallback={<Loading />}>
            <Favorite />
          </Suspense>
        ),
      },
      {
        path: "/book/hotel/2",
        element: (
          <Suspense fallback={<Loading />}>
            <Book />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/loginAsHostinger",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginAsHostinger />
      </Suspense>
    ),
  },
]);
