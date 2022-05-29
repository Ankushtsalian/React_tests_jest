import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-nav">
      <div className="home">
        <button className="home-btn">
          <Link to="/">Stripe-Home</Link>
        </button>
        <button className="home-btn">
          <Link to="/Navbar">Navbar</Link>
        </button>
        <button className="home-btn">
          <Link to="/Sidebar">Sidebar</Link>
        </button>
        <button className="home-btn">
          <Link to="/Menu">Menu</Link>
        </button>
        <button className="home-btn">
          <Link to="/Tabs">Tabs</Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
