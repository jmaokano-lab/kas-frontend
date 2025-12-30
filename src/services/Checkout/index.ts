import { ShippingAddress } from "@/types/Cart";

export const getAllCities = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cities`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
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
export const getAllCountries = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/countries`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
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
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const datas = await res.json();
    console.log("states", datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};
export const getUserShippingAddress = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/shipping/address`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const datas = await res.json();
    console.log(datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};

export const createShippingAddress = async (shippingData: ShippingAddress) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/shipping/create`,
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
