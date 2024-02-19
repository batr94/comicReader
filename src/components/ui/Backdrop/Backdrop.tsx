import { ReactNode } from "react";
import clsx from "clsx";
import useBackdrop from "./useBackdrop";
import './Backdrop.css';

type BackdropProps = {
  children?: ReactNode;
  onClick?: () => void;
  isOpen: boolean;
  blockScroll?: boolean;
  className?: string;
};

const Backdrop = ({
  children,
  onClick,
  isOpen,
  blockScroll = true,
  className,
}: BackdropProps) => {
  const classes = clsx(
    "backdrop",
    className,
    isOpen && "backdrop_opened",
  );

  useBackdrop(isOpen, blockScroll);

  return (
    <div onClick={onClick} className={classes}>
      {children}
    </div>
  );
};

export default Backdrop;
