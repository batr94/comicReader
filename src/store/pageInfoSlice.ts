import { createSlice } from '@reduxjs/toolkit';
import { ChapterType } from '../types/chapterType';

type SliceStateType = {
  chapterList: ChapterType[],
  currentChapter: ChapterType | null, 
  currentPage: number;
  pageList: string[];
  isFirstPage: boolean;
  isLastPage: boolean;
}

const initialState: SliceStateType = {
  chapterList: [],
  currentChapter: null,
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
    setChapterList(state, action) {
      state.chapterList = action.payload;
    },
    setCurrentChapter(state, action) {
      state.currentChapter = action.payload;
    }
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
  setChapterList,
  setCurrentChapter,
} = pageSlice.actions;

export default pageSlice.reducer;