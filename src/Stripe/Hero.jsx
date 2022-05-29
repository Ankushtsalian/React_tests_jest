import React from "react";
import { useGlobalContext } from "../context/context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const DATA = useGlobalContext();
  return <h2>hero component</h2>;
};

export default Hero;
