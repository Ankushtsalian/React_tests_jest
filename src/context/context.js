import React, { useState, useContext, createContext } from "react";
import sublinks from "../Stripe/data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isStripeSidebarOpen, setIsStripeSidebarOpen] = useState(false);
  const [isStripeSubmenuOpen, setStripeSubmenuOpen] = useState(false);

  const [location, setLocation] = useState({});

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
    setIsStripeSidebarOpen(true);
  };
  const closeStripeSidebar = () => {
    setIsStripeSidebarOpen(false);
  };
  const openStripeSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setStripeSubmenuOpen(true);
  };
  const closeStripeSubmenu = () => {
    setStripeSubmenuOpen(false);
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
