import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> db10ef1a535a22f8c10e14ee292e845c1cfefa33
import {
  Accounts,
  Application,
  Favorite,
  General,
  Home,
  Login,
  Profile,
  RequestData,
  Hosts,
  Hosting,
  Clinics,
  Exercises,
} from "../pages";
<<<<<<< HEAD
=======


>>>>>>> db10ef1a535a22f8c10e14ee292e845c1cfefa33
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
        path: "/hosting",
        element: (
          <Suspense fallback={<Loading />}>
            <Hosting />
          </Suspense>
        ),
      },
      {
        path: "/hosts",
        element: (
          <Suspense fallback={<Loading />}>
            <Hosts />
          </Suspense>
        ),
      },
      {
        path: "/exercises",
        element: (
          <Suspense fallback={<Loading />}>
            <Exercises />
          </Suspense>
        ),
      },
      {
        path: "/clinics",
        element: (
          <Suspense fallback={<Loading />}>
            <Clinics />
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
