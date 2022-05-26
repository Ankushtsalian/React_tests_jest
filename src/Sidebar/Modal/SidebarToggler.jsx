import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";

const SidebarToggle = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default SidebarToggle;
