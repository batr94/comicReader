import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startListening } from './middlewares/listenerMiddleware';
import { setPageList } from './pageInfoSlice';
import { pagesList , ChapterType } from '../data';


startListening({
  predicate: (action, currentState, previousState) => {
    return currentState.chapterInfo.currentChapter?.id !== previousState.chapterInfo.currentChapter?.id
  },
  effect: (action, listenerApi) => {
    const { currentChapter } = listenerApi.getState().chapterInfo;

    if (currentChapter === null) {
      return;
    }

    const newPagesList = pagesList.find((page) => page.chapterId === currentChapter.id)?.pages ?? [];
    listenerApi.dispatch(setPageList(newPagesList));
  }
});

interface ChapterList {
  [key: ChapterType['id']]: ChapterType
}

type SliceStateType = {
  chapterList: ChapterList;
  currentChapter: ChapterType | null;
  isFirstChapter: boolean;
  isLastChapter: boolean;
};

const initialState: SliceStateType = {
  chapterList: {},
  currentChapter: null,
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
      if (state.currentChapter === null) {
        return state;
      }

      return calculateChapterInfo(state.currentChapter.nextChapterId, state);
    },
    previousChapter(state) {
      if (state.currentChapter === null) {
        return state;
      }

      return calculateChapterInfo(state.currentChapter.previousChapterId, state);
    },
  },
});

function setChapterListReducer(
  state: SliceStateType,
  action: PayloadAction<ChapterType[]>
) {
  const { payload: chapterList } = action;
  state.chapterList = chapterList.reduce((chapterList, chapter) => ({ ...chapterList, [chapter.id]: chapter }), {});
}

function setChapterReducer(
  state: SliceStateType,
  action: PayloadAction<number>
) {
  return calculateChapterInfo(action.payload, state);
}

function calculateChapterInfo(
  chapterId: number | null | undefined,
  state: SliceStateType
): SliceStateType {
  if (chapterId === null || chapterId === undefined) {
    return state;
  }

  const currentChapter = state.chapterList[chapterId];

  return {
    ...state,
    currentChapter: currentChapter ?? null,
    isFirstChapter: currentChapter?.previousChapterId === null,
    isLastChapter: currentChapter?.nextChapterId === null,
  };
}

export const {
  nextChapter,
  previousChapter,
  setChapterList,
  setChapter,
} = chapterSlice.actions;

export default chapterSlice.reducer;
