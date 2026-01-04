"use server";
import { ShippingForm } from "@/types/Address";
import { ShippingAddress } from "@/types/Cart";
import { cookies } from "next/headers";

export const getAllCountries = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/countries`, {
      method: "GET",
      // credentials: "include",
      // headers: {
      //   Accept: "application/json",
      // },
      // cache: "no-store",
    });

    const datas = await res.json();
    console.log("countries", datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};
export const getAllState = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/states`, {
      method: "GET",
      credentials: "include",
      // headers: {
      //   Accept: "application/json",
      // },
      // cache: "no-store",
    });

    const datas = await res.json();
    console.log("states", datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};
export const getAllCities = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cities`, {
      method: "GET",
      // credentials: "include",
      // headers: {
      //   Accept: "application/json",
      // },
      // cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("cities", data);
    return data;
  } catch (error) {
    console.error("Fetch cities failed:", error);
    return [];
  }
};
export const getAllAreas = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/areas`, {
      method: "GET",
      credentials: "include",
      // headers: {
      //   Accept: "application/json",
      // },
      // cache: "no-store",
    });

    const datas = await res.json();
    console.log("areas", datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};
export const getAllStateByCountry = async (country_id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/states-by-country/{country_id}`,
      {
        method: "GET",
        credentials: "include",
        // headers: {
        //   Accept: "application/json",
        // },
        // cache: "no-store",
      }
    );

    const datas = await res.json();
    console.log("states", datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllAreasByCities = async (city_id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/areas-by-city/{city_id}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("cities", data);
    return data;
  } catch (error) {
    console.error("Fetch cities failed:", error);
    return [];
  }
};
export const getAllCitiesByState = async (state_id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/cities-by-state/{state_id}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("cities", data);
    return data;
  } catch (error) {
    console.error("Fetch cities failed:", error);
    return [];
  }
};
export const getUserShippingAddress = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  console.log(token);
  if (!token) return console.log("No token found");
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/shipping/address`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const datas = await res.json();
    console.log("shipping address", datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};

export const createShippingAddress = async (shippingData: ShippingForm) => {
  const token = (await cookies()).get("accessToken")?.value;
  console.log(token);
  if (!token) return console.log("No token found");
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/shipping/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(shippingData),
      }
    );

    const result = await res.json();
    console.log("create shipping address", result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const updateShippingAddress = async (shippingData: ShippingAddress) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/shipping/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(shippingData),
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
