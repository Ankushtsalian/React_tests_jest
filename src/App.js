import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import SidebarModal from "./Sidebar/Modal/SidebarModal";
import Home from "./component/Home";
import Index from "./Menu/Index";
import Tabs from "./Tabs/Tabs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Sidebar" element={<SidebarModal />} />
          <Route path="/Menu" element={<Index />} />
          <Route path="/Tabs" element={<Tabs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
