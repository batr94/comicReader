import { useSelector, useDispatch } from 'react-redux';
import {
  setPage as setPageReducer,
  setPageList as setPageListReducer,
  nextPage as nextPageReducer,
  previousPage as previousPageReducer,
} from '../store/pageInfoSlice';
import { RootState } from '../store';

export default function usePageInfo() {
  const dispatch = useDispatch();
  const {
    currentPage,
    pageList,
    isFirstPage,
    isLastPage
  } = useSelector((state: RootState) => state.pageInfo);

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
    currentPage,
    isFirstPage,
    isLastPage,
    pageList,
    setPage,
    setPageList,
    nextPage,
    previousPage,
  };
}