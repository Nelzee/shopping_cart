import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartItems }) => {
  return (
    <div className="navbar_container">
      <div className="navbar_link_container">
        <li className="navbar_element">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar_element">
          <Link to="/shop">Shop</Link>
        </li>
      </div>
      <div className="navbar_cart_container">
        <Link to="/cart">Cart:{cartItems?.length}</Link>
      </div>
    </div>
  );
};

export default Navbar;
