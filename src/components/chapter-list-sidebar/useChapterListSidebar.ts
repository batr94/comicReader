import { useDispatch } from 'react-redux';
import { open, close } from './chapterListSidebar.slice';

export default function() {
  const dispatch = useDispatch();

  function openSidebar() {
    dispatch(open());
  }

  function closeSidebar() {
    dispatch(close());
  }

  return { openSidebar, closeSidebar };
}