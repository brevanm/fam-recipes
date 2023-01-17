import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDbData } from "./utils/firebase.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
