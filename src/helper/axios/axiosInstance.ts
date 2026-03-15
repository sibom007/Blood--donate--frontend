import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { authKey } from "@/lib/authkey";
import { ApiError, ApiResponse } from "./type";
import { getFromLocalStorage } from "@/lib/local-storage";
import { getNewAccessToken } from "@/feature/auth/auth.services";

type RetryConfig = InternalAxiosRequestConfig & {
  sent?: boolean;
};

const instance = axios.create({
  timeout: 60000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/* ---------- REQUEST ---------- */

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getFromLocalStorage(authKey);

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/* ---------- RESPONSE ---------- */

instance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    const res = response.data;

    return {
      success: res.success,
      message: res.message,
      data: res.data,
    } as ApiResponse;
  },

  async (error: AxiosError<ApiError>) => {
    const config = error.config as RetryConfig;

    if (
      error.response?.data.message === "ACCESS_TOKEN_EXPIRED" &&
      error.response?.data.err?.statusCode === 401 &&
      !config?.sent
    ) {
      config.sent = true;

      try {
        // get new accessToken
        const accessToken = await getNewAccessToken();

        // Call api with new accessToken
        if (accessToken) {
          if (config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }

          return instance(config);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    const errData = error.response?.data;

    const normalizedError: ApiError = {
      success: false,
      message: errData?.message ?? "Something went wrong",
      errorSources: errData?.errorSources ?? [],
      stack: errData?.stack,
    };

    return Promise.reject(normalizedError);
  },
);

export { instance };
