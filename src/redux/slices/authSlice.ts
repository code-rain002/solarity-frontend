import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCaller } from "utils/fetcher";
import { setProfile } from "./profileSlice";
import { startLoadingApp, stopLoadingApp } from "./commonSlice";
import socket from "utils/socket-client";
import { signMessage } from "utils/walletHelpers";

export interface CounterState {
  roomName: string;
  userName: string;
}

const initialState = {
  logged: false,
  loading: false,
  checkingSession: true,
};

type loginProps = {
  publicKey: any;
  walletType: "solana" | "ethereum";
  provider: any;
  onFinally?: () => void;
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
      });
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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
  },
});

export default authSlice.reducer;
