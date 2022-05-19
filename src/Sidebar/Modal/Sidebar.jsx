import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">Show Modal</button>
    </main>
  );
};

export default Sidebar;
