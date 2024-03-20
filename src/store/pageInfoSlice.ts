import { createSlice } from '@reduxjs/toolkit';

type SliceStateType = {
  currentPage: number;
  pageList: string[];
  isFirstPage: boolean;
  isLastPage: boolean;
}

const initialState: SliceStateType = {
  currentPage: 0,
  pageList: [],
  isFirstPage: true,
  isLastPage: false,
}

const pageSlice = createSlice({
  name: 'pagesInfo',
  initialState: initialState,
  reducers: {
    setPageList(state, action) {
      const newState: SliceStateType = {
        ...state,
        currentPage: 0,
        isFirstPage: true,
        isLastPage: action.payload.length === 0,
        pageList: action.payload
      }
      return calculatePageInfo(0, newState);
    },
    nextPage(state) {
      return calculatePageInfo(state.currentPage + 1, state);
    },
    previousPage(state) {
      return calculatePageInfo(state.currentPage - 1, state);
    },
    setPage(state, action) {
      return calculatePageInfo(action.payload, state);
    },
  }
});

function isPageExist(page: number, pagesCount: number): boolean {
  return page >= 0 && page < pagesCount;
}

function calculatePageInfo(page: number, state: SliceStateType) {
  const pagesCount = state.pageList.length;
  if (isPageExist(page, pagesCount) === false) {
    return state;
  }

  return {
    ...state,
    currentPage: page,
    isFirstPage: page === 0,
    isLastPage: page === pagesCount - 1,
  }
}

export const {
  setPageList,
  nextPage,
  previousPage,
  setPage,
} = pageSlice.actions;

export default pageSlice.reducer;