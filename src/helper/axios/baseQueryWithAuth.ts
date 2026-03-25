import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError } from "axios";

import { authKey } from "@/lib/authkey";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { setToLocalStorage } from "@/lib/local-storage";
import { setCredentials, clearAuth } from "@/feature/auth/auth-slice";
import { getNewAccessToken, removeUser } from "@/feature/auth/auth.services";
import { ApiError } from "./type";
import { TJwtUser } from "@/feature/auth/type";

/* ---------- TYPES ---------- */

type AxiosBaseQueryArgs = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  data?: unknown;
  params?: Record<string, unknown>;
};

type AxiosBaseQueryError = {
  status?: number;
  data: ApiError;
};

type RefreshResponse = {
  accessToken: string;
  user: TJwtUser;
};

/* ---------- REFRESH LOCK ---------- */

let refreshPromise: Promise<RefreshResponse> | null = null;

/* ---------- BASE QUERY ---------- */

const rawBaseQuery = axiosBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
});

/* ---------- MAIN QUERY ---------- */

export const baseQueryWithAuth: BaseQueryFn<
  AxiosBaseQueryArgs,
  unknown,
  AxiosBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  if ("error" in result && result.error) {
    const status = result.error.status;
    const message = result.error.data?.message;

    const isExpired = status === 401 || message === "ACCESS_TOKEN_EXPIRED";

    if (isExpired) {
      try {
        // prevent multiple refresh calls
        if (!refreshPromise) {
          refreshPromise = getNewAccessToken().finally(() => {
            refreshPromise = null;
          });
        }

        const refreshData = await refreshPromise;

        //  refresh failed
        if (!refreshData?.accessToken) {
          throw new Error("Refresh failed");
        }

        //  store token
        setToLocalStorage(authKey, refreshData.accessToken);

        //  update redux
        api.dispatch(
          setCredentials({
            user: refreshData.user,
          }),
        );

        // retry request
        result = await rawBaseQuery(args, api, extraOptions);
      } catch (err) {
        const error = err as AxiosError<ApiError>;

        const message = error.response?.data?.message;
        const statusCode = error.response?.data?.err?.statusCode;

        if (message === "INVALID_REFRESH_TOKEN" && statusCode === 401) {
          await removeUser();
          api.dispatch(clearAuth());
          if (typeof window !== "undefined") {
            window.location.href = "/sign-in";
          }
        }
      }
    }
  }

  return result;
};
