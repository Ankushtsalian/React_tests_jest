import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "../../context/context";

const SidebarToggle = () => {
  const data = useGlobalContext();
  console.log({ data });
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">Show Modal</button>
    </main>
  );
};

export default SidebarToggle;
