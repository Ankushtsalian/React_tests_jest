import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";

const Submenu = () => {
  const { isStripeSubmenuOpen } = useGlobalContext();
  return (
    <aside
      className={`${
        isStripeSubmenuOpen ? "stripe-submenu show" : "stripe-submenu"
      }`}
    >
      SUYB
    </aside>
  );
};

export default Submenu;
