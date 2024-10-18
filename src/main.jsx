import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import "./index.css";
import Error from "./Error.jsx";
import Home from "./Home.jsx";
import Discover from "./Discover.jsx";
import AroundYou from "./AroundYou.jsx";
import TopArtists from "./TopArtists.jsx";
import TopCharts from "./TopCharts.jsx";
import Artist from "./Artist.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "around-you",
        element: <AroundYou />,
      },
      {
        path: "top-artists",
        element: <TopArtists />,
      },
      {
        path: "top-charts",
        element: <TopCharts />,
      },
      {
        path: "artists/:id",
        element: <Artist />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
