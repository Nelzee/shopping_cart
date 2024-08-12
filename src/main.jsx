import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "shop", element: <Shop /> },
  { path: "cart", element: <Cart /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
