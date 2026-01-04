export const getAllTestimonials = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/testimonial`, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API failed:", res.status);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    return null;
  }
};
