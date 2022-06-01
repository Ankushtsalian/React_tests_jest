import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import sublinks from "./data";

const Sidebar = () => {
  const { isStripeSidebarOpen, closeStripeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isStripeSidebarOpen
          ? "stripe-sidebar-wrapper show"
          : "stripe-sidebar-wrapper"
      }`}
    >
      <div className="stripe-sidebar">
        <button className="stripe-close-btn" onClick={closeStripeSidebar}>
          <FaTimes />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
// className={
//   `${isStripeSidebarOpen}`
//     ? "stripe-sidebar-wrapper show"
//     : "stripe-sidebar-wrapper"
// }
