import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCaller } from "utils/fetcher";
import { setProfile } from "./profileSlice";
import { startLoadingApp, stopLoadingApp } from "./commonSlice";
import socket from "utils/socket-client";
import { signMessage } from "utils/walletHelpers";
import { showErrorToast } from "utils";

export interface CounterState {
  roomName: string;
  userName: string;
}

const initialState = {
  logged: false,
  loading: false,
  checkingSession: true,
  userInfo: {
    solanaAddress: null,
    domain: null,
    title: null,
    links: {
      discord: { username: null, connected: false },
      twitter: { username: null, connected: false },
      github: { username: null, connected: false }
    },
    daos: [],
    profileImage: {}
  },
  step: 1,
};

type loginProps = {
  publicKey: any;
  walletType: "solana" | "ethereum";
  provider: any;
  onFinally?: any;
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ publicKey, walletType, provider }: loginProps, { dispatch }) => {
    let response = false;
    dispatch(startLoadingApp());
    try {
      const {
        data: { nonce },
      } = await apiCaller.post("/auth/login", {
        requestNonce: true,
        walletType,
        publicKey,
      });
      const signature = await signMessage(
        walletType,
        nonce,
        provider,
        publicKey
      );
      const {
        data: { profile },
      } = await apiCaller.post("/auth/login", {
        publicKey,
        walletType,
        requestNonce: false,
        signature,
      })
      dispatch(setProfile(profile));
      
      response = true;
    } catch (err) {}
    dispatch(stopLoadingApp());
    return response;
  }
);

export const logout = createAsyncThunk("auth/logout", async (_) => {
  try {
    await apiCaller.post("/auth/logout");
    return true;
  } catch {
    return false;
  }
});

export const checkSession = createAsyncThunk(
  "auth/checkSession",
  async (_, { dispatch }) => {
    let response = false;
    dispatch(startLoadingApp());
    try {
      if (!("socket" in window)) {
        (window as any).socket = socket();
      }
      const { data } = await apiCaller.get("/auth/check");
      dispatch(setProfile(data.profile));
      response = true;
    } catch {}
    dispatch(stopLoadingApp());
    return response;
  }
);

export const checkUser = createAsyncThunk(
  "auth/checkUser",
  async ({ publicKey, walletType }: { publicKey: any; walletType: "solana" | "ethereum"; }, { dispatch }) => {
    let response;
    dispatch(startLoadingApp());
    try {
      const {
        data: { exist },
      } = await apiCaller.post("/auth/userExist", {
        publicKey,
        walletType,
      });

      if (exist) {
        const payload = {
          value: publicKey,
          type: "solanaAddress"
        }
        dispatch(changeInfo({ payload: payload }))
      }

      response = exist;
    } catch (err) {
      console.log(err)
    }
    dispatch(stopLoadingApp());
    return response;
  }
);

export const changeInfo = createAsyncThunk(
  "auth/changeUserInfo",
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

export const goStep = createAsyncThunk(
  "auth/goStep",
  async ({
    payload,
  }: {
    payload: {
      stepNum: number
    };
  }) => {
    console.log("step", payload)
    return payload;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<any>) {
      state.userInfo = {
        ...state.userInfo,
        [action.payload.type]: action.payload.value
      }
    },
    setStep(state, action: PayloadAction<any>) {
      state.step = action.payload.stepNum
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.logged = action.payload;
    });
    builder.addCase(checkSession.fulfilled, (state, action) => {
      state.logged = action.payload;
      state.checkingSession = false;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      if (action.payload) {
        state.logged = false;
        window.location.reload();
      }
    });
    builder.addCase(changeInfo.fulfilled, (state, action) => {
      if (action.payload) {
        authSlice.caseReducers.setUserInfo(state, action);
      }
    });
    builder.addCase(goStep.fulfilled, (state, action) => {
      if (action.payload) {
        state.step = action.payload.stepNum;
      }
    });
  },
});

export const { setUserInfo, setStep } = authSlice.actions;

export default authSlice.reducer;
