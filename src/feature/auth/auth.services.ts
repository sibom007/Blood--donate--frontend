import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/lib/local-storage";
import { toast } from "sonner";
import { TJwtUser } from "./type";
import { store } from "@/Redux/store";
import { authKey } from "@/lib/authkey";
import { setCredentials, clearAuth } from "@/feature/auth/auth-slice";
import { instance as axiosInstance } from "@/helper/axios/axiosInstance";

/* ---------------- STORE TOKEN ---------------- */

export const storeUserInfo = (accessToken: string) => {
  setToLocalStorage(authKey, accessToken);
};

/* ---------------- CHECK LOGIN ---------------- */

export const isLoggedIn = () => {
  const token = getFromLocalStorage(authKey);
  return !!token;
};

/* ---------------- LOGOUT ---------------- */

export const removeUser = async () => {
  try {
    const res = await axiosInstance({
      url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL!}/auth/logout`,
      method: "POST",
      withCredentials: true,
    });
    if (res.data.message === "done") {
      removeFromLocalStorage(authKey);
      store.dispatch(clearAuth());
      toast.success("Logout successful");
      window.location.href = "/sign-in";
    }
  } catch (error) {
    throw error;
  }
};

/* ---------------- GET TOKEN ---------------- */

export const getAccessToken = () => {
  return getFromLocalStorage(authKey);
};

/* ---------------- REFRESH TOKEN ---------------- */

export const getNewAccessToken = async () => {
  try {
    const response = await axiosInstance({
      url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL!}/auth/refresh-token`,
      method: "POST",
      withCredentials: true,
    });

    const newToken = response?.data?.accessToken;
    const user = response?.data?.user as TJwtUser;

    if (newToken) {
      if (user.tokenVersion === 1) {
        removeUser();
        window.location.href = "/sign-in";
      }
      storeUserInfo(newToken);

      // sync redux store
      store.dispatch(
        setCredentials({
          accessToken: newToken,
          user,
        }),
      );
    }

    return newToken;
  } catch (error: any) {
    if (error.message === "Invalid refresh token") {
      removeUser();
    }

    throw error;
  }
};
