import React from "react";
import "./stripe.css";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { openStripeSidebar, openStripeSubmenu, closeStripeSubmenu } =
    useGlobalContext();

  const displaySubMenu = (e) => {
    //gives text in button ex:developer product company
    const page = e.target.textContent;
    //get location of button coordinates
    const tempBtn = e.target.getBoundingClientRect();
    //get center
    const center = (tempBtn.left + tempBtn.right) / 2;
    //get bottom
    const bottom = tempBtn.bottom - 3;
    openStripeSubmenu(page, { center, bottom });
  };

  const handleSubMenu = (e) => {
    if (!e.target.classList.contains("stripe-link-btn")) {
      closeStripeSubmenu();
    }
  };

  return (
    <nav className="stripe-nav" onMouseOver={handleSubMenu}>
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
            <button className="stripe-link-btn" onMouseOver={displaySubMenu}>
              products
            </button>
          </li>
          <li>
            <button className="stripe-link-btn" onMouseOver={displaySubMenu}>
              developers
            </button>
          </li>
          <li>
            <button className="stripe-link-btn" onMouseOver={displaySubMenu}>
              company
            </button>
          </li>
        </ul>
        <button className="stripe-btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
