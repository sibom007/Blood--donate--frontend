import { useMutation } from "@tanstack/react-query";
import { SignUpFormValues } from "../types";
import { api } from "@/utils/axiosInstance";

export const useSignUp = () => {
  return useMutation({
    mutationFn: async (payload: SignUpFormValues) => {
      const { data } = await api.post("/register", payload);
      return data;
    },
  });
};
