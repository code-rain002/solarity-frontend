import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appLoading: true,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    startLoadingApp(state) {
      state.appLoading = true;
    },
    stopLoadingApp(state) {
      state.appLoading = false;
    },
  },
});

export const {
  actions: { startLoadingApp, stopLoadingApp },
} = commonSlice;

export default commonSlice.reducer;
