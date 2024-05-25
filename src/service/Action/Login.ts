"use server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { decodedToken } from "@/utils/jwt";

export const userLogin = async (data: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
  const userInfo = await res.json();
  if (userInfo.success === true) {
    cookies().set("accessToken", userInfo.data.accessToken);
    cookies().set("refreshToken", userInfo.data.refreshToken);
  }
  return userInfo;
};

export const userInfo = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = (await jwtDecode(accessToken)) as any;

    return {
      email: decodedData.email,
      role: decodedData.role,
      id: decodedData.id,
    };
  } else {
    return null;
  }
};

export const GetaccessToken = async (key: string) => {
  const accessToken = await cookies().get(key)?.value;
  return accessToken;
};
export const GetUserinfo = () => {
  const accessToken = cookies().get("accessToken")?.value;
  if (accessToken) {
    const decodedData: any = decodedToken(accessToken);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

export const logOut = async () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};
