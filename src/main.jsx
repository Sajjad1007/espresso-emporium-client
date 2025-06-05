import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthProvider from "./contexts/AuthProvider";
import Error from "./components/Error";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch(
            "https://espresso-emporium-server-6xb3fu8f6-sajjad1007s-projects.vercel.app/coffees"
          ),
        hydrateFallbackElement: (
          <div className="grid place-content-center w-full min-h-[calc(100vh-68px)]">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
      },
      {
        path: "add-coffee",
        Component: AddCoffee,
      },
      {
        path: "update-coffee/:id",
        Component: UpdateCoffee,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-6xb3fu8f6-sajjad1007s-projects.vercel.app/coffees/${params.id}`
          ),
        hydrateFallbackElement: (
          <div className="grid place-content-center w-full min-h-[calc(100vh-68px)]">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
      },
      {
        path: "coffee/:id",
        Component: CoffeeDetails,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-6xb3fu8f6-sajjad1007s-projects.vercel.app/coffees/${params.id}`
          ),
        hydrateFallbackElement: (
          <div className="grid place-content-center w-full min-h-[calc(100vh-68px)]">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
      },
      {
        path: "sign-in",
        Component: SignIn,
      },
      {
        path: "sign-up",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
