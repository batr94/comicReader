import { useEffect } from 'react';

export default function useBackdrop(isOpen: boolean, blockScroll: boolean) {
  useEffect(() => {
    const isScrollBlocked = isOpen && blockScroll;
    document.body.style.overflow = isScrollBlocked ? 'hidden' : 'visible';

    return () => {
      document.body.style.overflow = 'visible';
    }
  }, [blockScroll, isOpen]);
}