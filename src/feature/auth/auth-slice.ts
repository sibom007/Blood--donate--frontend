import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthPayload, AuthState, TJwtUser } from "./type";

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login or refresh token response
    setCredentials(state, action: PayloadAction<AuthPayload>) {
      state.user = action.payload.user;
    },

    // update user only (used when role changes or /auth/me fetch)
    setUser(state, action: PayloadAction<TJwtUser>) {
      state.user = action.payload;
    },

    // logout
    clearAuth(state) {
      state.user = null;
    },
  },
});

export const { setCredentials, setUser, clearAuth } = authSlice.actions;

export default authSlice.reducer;
