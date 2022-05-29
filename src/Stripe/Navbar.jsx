import React from "react";
import "./stripe.css";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { openStripeSidebar, openStripeSubmenu, closeStripeSubmenu } =
    useGlobalContext();
  return (
    <nav className="stripe-nav">
      <div className="stripe-nav-center">
        <div className="stripe-nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button
            className="stripe-btn stripe-toggle-btn"
            onClick={openStripeSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="stripe-nav-links">
          <li>
            <button className="stripe-link-btn">products</button>
          </li>
          <li>
            <button className="stripe-link-btn">developers</button>
          </li>
          <li>
            <button className="stripe-link-btn">company</button>
          </li>
        </ul>
        <button className="stripe-btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
