import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import About from "./pages/About";
import TPO_Dashboard from "./pages/TPO_Dashboard";
import Login from "./pages/Login";
import Student_Dashboard from "./pages/Student_Dashboard";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/institute",
        element: <TPO_Dashboard />,
      },
      {
        path: "/student",
        element: <Student_Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
