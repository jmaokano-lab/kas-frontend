export const getAllTestimonials = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/testimonial`, {
      credentials: "include",
    });
    const data = await res.json();
    // console.log("testimonial", data);
    return data;
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    return null;
  }
};
