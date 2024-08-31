import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import "../root.css";

const Root = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  return (
    <>
      <Navbar cartItems={cartItems} />
      {location.pathname === "/" && (
        <div className="hero">
          <h1>Welcome to out shop enjoy!</h1>
        </div>
      )}
      <Outlet context={{ cartItems, setCartItems }} />
    </>
  );
};

export default Root;
