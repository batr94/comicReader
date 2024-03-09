import { useDispatch } from 'react-redux';
import { close, open } from './menuSlice';

function useMenu() {
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(open());
  }

  const closeMenu = () => {
    dispatch(close());
  }

  return { openMenu, closeMenu };
}

export default useMenu;