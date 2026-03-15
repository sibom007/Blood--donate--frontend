import { baseApi } from "./api/baseapi";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/feature/auth/auth-slice";

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
});
