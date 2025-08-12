import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import ProjectDetails from "./components/ProjectDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App, 
  },
  {
    path: "/projects/:id",
    Component: ProjectDetails, 
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
