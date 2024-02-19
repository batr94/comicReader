import useSidebarContext from "./useSidebarContext";
import Backdrop from "../Backdrop/Backdrop";

function SidebarOverlay() {
  const { isOpen, onClose} = useSidebarContext();

  return (
    <Backdrop isOpen={isOpen} onClick={onClose} blockScroll />
  );
}

export default SidebarOverlay;
