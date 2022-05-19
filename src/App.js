import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import SidebarModal from "./Sidebar/Modal/SidebarModal";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Sidebar" element={<SidebarModal />} />
      </Routes>
    </>
  );
}

export default App;
