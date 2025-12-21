export const getAllTestimonials = async () => {
  try {
    let url = `${process.env.NEXT_PUBLIC_BASE_API}/testimonial`;   
    const res = await fetch(url, {
      credentials: "include",
    });
    const data = await res.json();
    console.log("serverHooks",data)
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};