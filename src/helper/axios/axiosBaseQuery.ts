import { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";

import { instance as axiosInstance } from "./axiosInstance";
import { ApiError } from "./type";

type AxiosBaseQueryArgs = {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
  contentType?: string;
};

type AxiosBaseQueryError = {
  status?: number;
  data: ApiError | string;
};

export const axiosBaseQuery =
  ({ baseUrl = "" }: { baseUrl?: string } = {}): BaseQueryFn<
    AxiosBaseQueryArgs,
    unknown,
    AxiosBaseQueryError
  > =>
  async ({ url, method = "GET", data, params, headers, contentType }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...headers,
          "Content-Type": contentType ?? "application/json",
        },
      });

      return {
        data: result,
      };
    } catch (axiosError) {
      const err = axiosError as AxiosError<ApiError>;

      return {
        error: {
          status: err.response?.status,
          message: err.message,
          data: err.response?.data ?? err.message,
        },
      };
    }
  };
