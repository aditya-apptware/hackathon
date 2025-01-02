import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Registration Form

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        openForm,
        closeForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
