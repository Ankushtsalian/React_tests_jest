import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";

const Submenu = () => {
  const { isStripeSubmenuOpen, location } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${
        isStripeSubmenuOpen ? "stripe-submenu show" : "stripe-submenu"
      }`}
      ref={container}
    >
      SUYB
    </aside>
  );
};

export default Submenu;
