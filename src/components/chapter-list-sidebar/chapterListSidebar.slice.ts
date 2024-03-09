import { createSlice } from '@reduxjs/toolkit';

type SliceStateType = {
  isOpen: boolean;
}

const initialState: SliceStateType = {
  isOpen: false,
};

const chapterListSidebarSlice = createSlice({
  name: 'chapterListSidebar',
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const { open, close } = chapterListSidebarSlice.actions;
export default chapterListSidebarSlice.reducer;