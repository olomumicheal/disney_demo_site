import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import Details from "./component/Details/Details";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Login /> },
        { path: "/home", element: <Home /> },
        { path: "/detail/:id", element: <Details /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
