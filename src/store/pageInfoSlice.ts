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

function calculatePageInfo(page: number, state: SliceStateType) {
  if (!state.pageList[page]) {
    return state;
  }

  return {
    ...state,
    currentPage: page,
    isFirstPage: page === 0,
    isLastPage: page === state.pageList.length - 1,
  }
}

export const {
  setPageList,
  nextPage,
  previousPage,
  setPage,
} = pageSlice.actions;

export default pageSlice.reducer;