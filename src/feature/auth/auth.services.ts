import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/lib/local-storage";

import { TJwtUser } from "./type";
import { authKey } from "@/lib/authkey";
import { instance as axiosInstance } from "@/helper/axios/axiosInstance";
import { toast } from "sonner";

/* ---------------- STORE TOKEN ---------------- */

export const storeUserInfo = (accessToken: string) => {
  setToLocalStorage(authKey, accessToken);
};

/* ---------------- CHECK LOGIN ---------------- */

export const isLoggedIn = () => {
  const token = getFromLocalStorage(authKey);
  return !!token;
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

    const newToken = response?.data?.data.accessToken;
    const user = response?.data?.data.user as TJwtUser;

    return { accessToken: newToken, user };
  } catch (error) {
    throw error;
  }
};

/* ---------------- LOGOUT THE USER ---------------- */

export const removeUser = async () => {
  try {
    const res = await axiosInstance({
      url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL!}/auth/logout`,
      method: "POST",
      withCredentials: true,
    });
    if (res.data.message === "done") {
      removeFromLocalStorage(authKey);
      toast.success("Logout successful");
    }
  } catch (error) {
    throw error;
  }
};

