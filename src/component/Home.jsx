import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <Link to="/">Home</Link>
        <Link to="/Navbar">Navbar</Link>
        <Link to="/Sidebar">Sidebar</Link>
        <Link to="/Menu">Menu</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
