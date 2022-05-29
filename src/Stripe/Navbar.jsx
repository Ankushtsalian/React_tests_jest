import React from "react";
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
          <img src={logo} alt="stripe" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
