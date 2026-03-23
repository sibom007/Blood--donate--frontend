import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig } from "axios";
import { instance } from "./axiosInstance";
import { ApiError } from "./type";

export type AxiosBaseQueryArgs = {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
};

export type AxiosBaseQueryError = {
  status?: number;
  data: ApiError;
};

export const axiosBaseQuery =
  ({ baseUrl = "" }: { baseUrl?: string } = {}): BaseQueryFn<
    AxiosBaseQueryArgs,
    unknown,
    AxiosBaseQueryError
  > =>
  async ({ url, method = "GET", data, params }) => {
    try {
      const result = await instance({
        url: baseUrl + url,
        method,
        data,
        params,
      });

      return { data: result.data };
    } catch (error) {
      const err = error as AxiosError<ApiError>;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data!,
        },
      };
    }
  };
