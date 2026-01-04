"use server";
import { cookies } from "next/headers";

export const createShippingAddress = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  console.log(token);
  if (!token) return console.log("No token found");
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order/store`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      //   body: JSON.stringify(shippingData),
    });

    const result = await res.json();
    console.log("create shipping address", result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
