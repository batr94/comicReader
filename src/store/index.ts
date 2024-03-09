import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pageInfoReducer from "./pageInfoSlice";
import chapterSlice from "./chapterSlice";
import menuSlice from "../components/Menu/menuSlice";
import { chapterListSidebarSlice } from '../components/chapter-list-sidebar';
import listenerMiddleware from "./middlewares/listenerMiddleware";

export const store = configureStore({
  reducer: {
    pageInfo: pageInfoReducer,
    menu: menuSlice,
    chapterInfo: chapterSlice,
    chapterListSidebar: chapterListSidebarSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
