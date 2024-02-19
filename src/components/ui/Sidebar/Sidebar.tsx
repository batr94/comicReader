import React from "react";
import { createPortal } from 'react-dom';
import SidebarContext from "./Sidebar.context";
import SidebarOverlay from "./SidebarOverlay";
import SidebarContent from "./SidebarContent";

type SidebarProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

function Sidebar({ children, isOpen, onClose }: SidebarProps) {
  const contextValue = {
    isOpen,
    onClose,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {
        createPortal(children, document.body)
      }
    </SidebarContext.Provider>
  );
}

Sidebar.Overlay = SidebarOverlay;
Sidebar.Content = SidebarContent;

export default Sidebar;
