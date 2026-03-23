import { toast } from "sonner";
import { store } from "@/Redux/store";
import { authKey } from "@/lib/authkey";
import { clearAuth } from "./auth-slice";
import { removeFromLocalStorage } from "@/lib/local-storage";
import { instance as axiosInstance } from "@/helper/axios/axiosInstance";

/* ---------------- LOGOUT ---------------- */
export const Logout = async () => {
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
