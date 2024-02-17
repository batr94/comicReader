import { useEffect } from 'react'
import clsx from 'clsx';
import './Backdrop.css';

type BackdropProps = {
  children?: React.ReactNode,
  onClick?: () => void,
  open?: boolean,
  blockScroll?: boolean,
  className?: string,
}

const Backdrop = ({ children, ...props }: BackdropProps) => {
  const {
    onClick,
    className,
    open,
    blockScroll,
  } = props;

  useEffect(() => {
    const isScrollBlocked = open && blockScroll;
    document.body.style.overflow = isScrollBlocked ? 'hidden' : 'visible';

    return () => {
      document.body.style.overflow = 'visible';
    }
  }, [blockScroll, open])

  const classes = clsx(
    'backdrop',
    open && 'backdrop_opened',
    className
  );

  return (
    <div
      onClick={onClick}
      className={classes}
    >
      {children}
    </div>
  )
}

export default Backdrop