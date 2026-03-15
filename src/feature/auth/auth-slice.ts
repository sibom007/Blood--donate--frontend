import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthPayload, AuthState, TJwtUser } from "./type";

const initialState: AuthState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login or refresh token response
    setCredentials(state, action: PayloadAction<AuthPayload>) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },

    // update user only (used when role changes or /auth/me fetch)
    setUser(state, action: PayloadAction<TJwtUser>) {
      state.user = action.payload;
    },

    // update only token (used by refresh token interceptor)
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },

    // logout
    clearAuth(state) {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { setCredentials, setUser, setAccessToken, clearAuth } =
  authSlice.actions;

export default authSlice.reducer;
