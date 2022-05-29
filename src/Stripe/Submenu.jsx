import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";

const Submenu = () => {
  const data = useGlobalContext();
  return <h2>submenu component</h2>;
};

export default Submenu;
