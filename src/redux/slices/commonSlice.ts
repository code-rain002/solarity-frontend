import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  appLoading: true,
  isMobile: false
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
    setIsMobile(state, action: PayloadAction<any>) {
      state.isMobile = action.payload;
    }
  },
});

export const {
  actions: { startLoadingApp, stopLoadingApp, setIsMobile },
} = commonSlice;

export default commonSlice.reducer;
