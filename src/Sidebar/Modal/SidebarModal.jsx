import { Link } from "react-router-dom";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import "./sidebar.css";
const SidebarModal = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Sidebar />
      <Modal />
    </>
  );
};

export default SidebarModal;
