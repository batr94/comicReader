import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startListening } from './middlewares/listenerMiddleware';
import { setPageList } from './pageInfoSlice';
import { pagesList , ChapterType } from '../data';


startListening({
  predicate: (action, currentState, previousState) => {
    return currentState.chapterInfo.currentChapterIndex !== previousState.chapterInfo.currentChapterIndex
  },
  effect: (action, listenerApi) => {
    const { currentChapterIndex, chapterList } = listenerApi.getState().chapterInfo;
    const currentChapter = chapterList[currentChapterIndex];
    const newPagesList = pagesList.find((page) => page.chapterId === currentChapter.id)?.pages ?? [];
    listenerApi.dispatch(setPageList(newPagesList));
  }
});

type SliceStateType = {
  chapterList: ChapterType[];
  currentChapterIndex: number;
  isFirstChapter: boolean;
  isLastChapter: boolean;
};

const initialState: SliceStateType = {
  chapterList: [],
  currentChapterIndex: 0,
  isFirstChapter: false,
  isLastChapter: false,
};

const chapterSlice = createSlice({
  name: "chapter",
  initialState,
  reducers: {
    setChapterList: setChapterListReducer,
    setChapter: setChapterReducer,
    nextChapter(state) {
      return calculateChapterInfo(state.currentChapterIndex + 1, state);
    },
    previousChapter(state) {
      return calculateChapterInfo(state.currentChapterIndex - 1, state);
    },
  },
});

function setChapterListReducer(
  state: SliceStateType,
  action: PayloadAction<ChapterType[]>
) {
  state.chapterList = action.payload;
}

function setChapterReducer(
  state: SliceStateType,
  action: PayloadAction<number>
) {
  return calculateChapterInfo(action.payload, state);
}

function isChapterExist(chapterIndex: number, chaptersCount: number) {
  return chapterIndex >= 0 && chapterIndex < chaptersCount;
}

function calculateChapterInfo(
  chapterIndex: number,
  state: SliceStateType
): SliceStateType {
  const chaptersCount = state.chapterList.length;

  if (isChapterExist(chapterIndex, chaptersCount) === false) {
    return state;
  }

  return {
    ...state,
    currentChapterIndex: chapterIndex,
    isFirstChapter: chapterIndex === 0,
    isLastChapter: chapterIndex === chaptersCount - 1,
  };
}

export const {
  nextChapter,
  previousChapter,
  setChapterList,
  setChapter,
} = chapterSlice.actions;

export default chapterSlice.reducer;
