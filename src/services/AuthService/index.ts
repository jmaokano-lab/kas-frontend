"use server";
import { LoginPayload, PayloadData } from "@/types/User";
import { cookies } from "next/headers";

export const registerUser = async (userData: PayloadData) => {
  try {
    console.log(userData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();

    if (result.result === true) {
      (await cookies()).set("accessToken", result.access_token);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const loginUser = async (userData: LoginPayload) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    });

    const result = await res.json();

    if (result.result) {
      (await cookies()).set("accessToken", result.access_token);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getCurrentUser = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  console.log(token);
  if (!token) return console.log("No token found");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    credentials: "include",
  });
  // console.log(res)

  // if (!res?.statusText) return null;
  const data = await res.json();

  return data;
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
};
