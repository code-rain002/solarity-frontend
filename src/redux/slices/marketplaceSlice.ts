import { demoRooms } from './../../data/Marketplace';
import { showSuccessToast, showErrorToast, extractError } from './../../utils/index';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ACTIONS from "config/actions";
import { apiCaller, getErrorMessage } from "utils/fetcher";

export interface MarketplaceState {
  selectedRoom: any;
}

const initialState: MarketplaceState = {
  selectedRoom: demoRooms[0]
};

export const selectRoom = createAsyncThunk(
  "auth/selectRoom",
  async ({
    roomData,
    next,
  }: {
    roomData: any;
    next?: () => void;
  }) => {
    if (next) next()
    return roomData;
  }
);

export const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setRoom: (state, action: PayloadAction<any>) => {
      state.selectedRoom = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(selectRoom.fulfilled, (state, action) => {
      if (action.payload) {
        marketplaceSlice.caseReducers.setRoom(state, action);
      }
    });
  }
});

export const { setRoom } = marketplaceSlice.actions;

export default marketplaceSlice.reducer;
