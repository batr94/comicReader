import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import './Sidebar.css';
import clsx from 'clsx';

type SidebarProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  side?: "left" | "right";
  className?: string
};

function Sidebar({ children, isOpen, onClose, className, side = "left" }: SidebarProps) {
  const contentClasses = clsx(
    "sidebar-content",
    side === "left" ? "sidebar-content_side-left" : "sidebar-content_side-right",
    className,
  )

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="sidebar-overlay" />
        <Dialog.Content className={contentClasses}>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Sidebar;
