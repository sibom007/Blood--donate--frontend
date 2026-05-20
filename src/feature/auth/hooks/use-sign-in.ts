import { useMutation } from "@tanstack/react-query";
import { SignInFormValues } from "../types";
import { api } from "@/utils/axiosInstance";

export const useSignIn = () => {
  return useMutation({
    mutationFn: async (payload: SignInFormValues) => {
      const { data } = await api.post("/login", payload);
      return data;
    },
  });
};
