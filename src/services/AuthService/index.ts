"use server"
import { cookies } from "next/headers";

export const registerUser = async (userData: React.FormEvent) => {
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

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
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
  if (!token) return console.log("No token found");
  console.log(token)

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/info`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) return null;
  const data = await res.json();

  return data;
};

export const logout = async () => {
  (await cookies()).delete("access_Token");
};

