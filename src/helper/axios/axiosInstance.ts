import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getFromLocalStorage } from "@/lib/local-storage";
import { authKey } from "@/lib/authkey";
import { ApiError, ApiResponse } from "./type";

export const instance = axios.create({
  timeout: 60000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/* ---------- REQUEST ---------- */
instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getFromLocalStorage(authKey);

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/* ---------- RESPONSE ---------- */
instance.interceptors.response.use(
  (res: AxiosResponse<ApiResponse>) => res,

  (error: AxiosError<ApiError>) => {
    return Promise.reject(error);
  },
);
