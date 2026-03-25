"use server";

import axios from "axios";
import { cookies } from "next/headers";

type LoginPayload = {
  email: string;
  password: string;
};

export async function loginAction(data: LoginPayload) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL!}/auth/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const result = res.data;
    const refreshToken = result.data.refreshToken;
    const accessToken = result.data.token;

    if (!refreshToken) {
      throw new Error("No token received");
    }

    // Set cookie
    cookies().set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return {
      message: result.message,
      user: result.data.user,
      accessToken,
    };
  } catch (error: any) {
    return {
      success: false,
      message:
        error?.response?.data?.message || error.message || "Login failed",
    };
  }
}
