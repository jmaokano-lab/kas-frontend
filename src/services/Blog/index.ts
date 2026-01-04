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
      credentials: "include",
      //   body: data,
    });

    const datas = await res.json();
    console.log(datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllBlogs = async () => {
  try {
    // if (search) url += `search=${encodeURIComponent(search)}&`;
    // if (status) url += `status=${status}`;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog-list`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};
