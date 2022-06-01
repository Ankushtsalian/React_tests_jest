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
        <div className="stripe-sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="stripe-sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
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
