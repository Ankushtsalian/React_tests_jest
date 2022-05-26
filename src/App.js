import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import SidebarModal from "./Sidebar/Modal/SidebarModal";
import Home from "./component/Home";
import Menu from "./Menu/Menu";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Sidebar" element={<SidebarModal />} />
          <Route path="/Menu" element={<Menu />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
