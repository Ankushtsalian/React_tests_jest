import React, { useState, useContext, createContext } from "react";
import sublinks from "../Stripe/data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isStripeSidebarOpen, setIsStripeSidebarOpen] = useState(true);
  const [isStripeSubmenuOpen, setStripeSubmenuOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openStripeSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeStripeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openStripeSubmenu = () => {
    setIsModalOpen(true);
  };
  const closeStripeSubmenu = () => {
    setIsModalOpen(false);
  };
  const values = {
    openModal,
    openSidebar,
    closeModal,
    closeSidebar,
    isModalOpen,
    isSidebarOpen,
    isStripeSidebarOpen,
    isStripeSubmenuOpen,
    openStripeSidebar,
    closeStripeSidebar,
    openStripeSubmenu,
    closeStripeSubmenu,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//custom hook
export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
