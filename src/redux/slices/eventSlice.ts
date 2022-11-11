import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  eventInfo: {
    title: "",
    room: null,
    type: "",
    creator: {
      avatar: "",
      name: ""
    },
    isPrivate: 0,
    friends: []
  },
  step: 0
};

export const changeInfo = createAsyncThunk(
  "auth/changeEventInfo",
  async ({
    payload,
    callback
  }: {
    payload: {
      value: any,
      type: String
    };
    callback?: () => void;
  }) => {
    if (callback) callback();
    return payload;
  }
);

export const initEvent = createAsyncThunk(
  "auth/init",
  async () => {
    return initialState;
  }
);

export const goStep = createAsyncThunk(
  "auth/goStep",
  async ({
    payload,
  }: {
    payload: {
      stepNum: number
    };
  }) => {
    return payload;
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEventInfo(state, action: PayloadAction<any>) {
      state.eventInfo = {
        ...state.eventInfo,
        [action.payload.type]: action.payload.value
      }
    },
    setInitEvent(state, action: PayloadAction<any>) {
      state.eventInfo = initialState.eventInfo
      state.step = initialState.step
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeInfo.fulfilled, (state, action) => {
      if (action.payload) {
        eventSlice.caseReducers.setEventInfo(state, action);
      }
    });
    builder.addCase(initEvent.fulfilled, (state, action) => {
      if (action.payload) {
        eventSlice.caseReducers.setInitEvent(state, action);
      }
    });
    builder.addCase(goStep.fulfilled, (state, action) => {
      if (action.payload) {
        state.step = action.payload.stepNum;
      }
    });
  },
});

export const {
  actions: { setEventInfo, setInitEvent },
} = eventSlice;

export default eventSlice.reducer;
