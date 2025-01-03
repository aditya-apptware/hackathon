import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Registration Form

  const eventRef = useRef(null); // Ref for the menu
  const problemStatementsRef = useRef(null); // Ref for the menu
  const mentorsRef = useRef(null); // Ref for the menu
  const contactRef = useRef(null); // Ref for the menu

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
        eventRef,
        problemStatementsRef,
        mentorsRef,
        contactRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
