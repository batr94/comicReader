import clsx from "clsx";
import useSidebarContext from "./useSidebarContext";
import "./SidebarContent.css";

const SidebarContent = ({
  children,
  side,
  className,
}: {
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
}) => {
  const { isOpen } = useSidebarContext();
  const classes = clsx(
    "sidebar-content",
    className,
    isOpen && "sidebar-content_opened",
    side === "right" && "sidebar-content_side-right"
  );

  return <aside className={classes}>{children}</aside>;
};

export default SidebarContent;
