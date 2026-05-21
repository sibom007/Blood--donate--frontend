import axios from "axios";
import { TJwtUser } from "./types";
import { config } from "@/utils/config";

export const getNewAccessToken = async () => {
  const response = await axios.post(
    `${config.backendUrl}/refresh-token`,
    {},
    { withCredentials: true },
  );
  const newToken: string = response?.data?.data.accessToken;
  const user: TJwtUser = response?.data?.data.user;

  return { accessToken: newToken, user };
};

export const Logout = async () => {
  const response = await axios.post(
    `${config.backendUrl}/logout`,
    {},
    { withCredentials: true },
  );

  return { status: response.data.data };
};
