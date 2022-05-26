import { Link } from "react-router-dom";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import "./sidebar.css";
import SidebarToggle from "./SidebarToggler";
const SidebarModal = () => {
  return (
    <>
      <SidebarToggle />
      <Modal />
      <Sidebar />
    </>
  );
};

export default SidebarModal;
