import { useDispatch, useSelector } from 'react-redux';
import { open, close } from './chapterListSidebar.slice';
import { RootState } from '../../store';

export default function() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.chapterListSidebar);

  function openSidebar() {
    dispatch(open());
  }

  function closeSidebar() {
    dispatch(close());
  }

  return { isOpen, openSidebar, closeSidebar };
}