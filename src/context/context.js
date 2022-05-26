import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const values = {
    openModal,
    openSidebar,
    closeModal,
    closeSidebar,
    isModalOpen,
    isSidebarOpen,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//custom hook
export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
