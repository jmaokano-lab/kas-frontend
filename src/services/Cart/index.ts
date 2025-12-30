export const getUserCart = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/carts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const datas = await res.json();
    console.log(datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};
export const getUserCartCount = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cart-count`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const datas = await res.json();
    console.log(datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};
export const getUserCartSummary = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/cart-summary`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
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
