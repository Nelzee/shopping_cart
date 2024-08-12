import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <li className="navbar_element">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar_element">
        <Link to="/shop">Shop</Link>
      </li>
      <li className="navbar_element">
        <Link to="/cart">Cart</Link>
      </li>
    </div>
  );
};

export default Navbar;
