import { authKey } from "@/contants/authkey";
import { GetaccessToken } from "@/service/Action/Login";
import { getNewAccessToken } from "@/service/auth.services";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    return GetaccessToken(authKey)
      .then((accessToken) => {
        if (accessToken) {
          config.headers.Authorization = accessToken;
        }
        return config;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const config = error.config;
    if (error?.response?.status === 500 && !config.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      const accessToken = response?.data?.accessToken;
      config.headers["Authorization"] = accessToken;
      setToLocalStorage(authKey, accessToken);
      return instance(config);
    } else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.err?.statusCode || 500,
        message:
          error?.response?.data?.errorSources || "Something went wrong!!!",
        errorMessages: error?.response?.data?.message,
      };
      // return Promise.reject(error);
      return responseObject;
    }
  }
);

export { instance };
