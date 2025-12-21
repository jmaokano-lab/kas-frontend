import { cookies } from "next/headers";

export const getSingleBlog = async (id: string) => {
  const token = (await cookies()).get("accessToken")!.value;
  console.log(token);
  if (!token) return console.log("No token found");
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs${id}`, {
      method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      //   credentials: "include",
      //   body: data,
    });

    const datas = await res.json();
    console.log(datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllBlogs = async (
  search?: string,
  status?: string,
  currentPage?: number,
  perPage?: number
) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_BASE_API}/blogs?page=${currentPage}&per_page=${perPage}&`;

    if (search) url += `search=${encodeURIComponent(search)}&`;
    if (status) url += `status=${status}`;

    const res = await fetch(url, {
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};