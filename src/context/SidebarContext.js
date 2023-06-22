import { createContext, useContext, useState } from "react";

const SidebarContext = createContext(true);

const SidebarProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <SidebarContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = () => {
  return useContext(SidebarContext);
};
export { useSidebar, SidebarContext, SidebarProvider };
