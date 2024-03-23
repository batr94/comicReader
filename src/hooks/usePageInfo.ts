import { useDispatch } from 'react-redux';
import {
  setPage as setPageReducer,
  setPageList as setPageListReducer,
  nextPage as nextPageReducer,
  previousPage as previousPageReducer,
} from '../store/pageInfoSlice';

export default function usePageInfo() {
  const dispatch = useDispatch();

  function setPageList(pageList: string[]) {
    dispatch(setPageListReducer(pageList));
  }

  function setPage(page: number) {
    dispatch(setPageReducer(page))
  }

  function nextPage() {
    dispatch(nextPageReducer());
  }

  function previousPage() {
    dispatch(previousPageReducer());
  }

  return {
    setPage,
    setPageList,
    nextPage,
    previousPage,
  };
}