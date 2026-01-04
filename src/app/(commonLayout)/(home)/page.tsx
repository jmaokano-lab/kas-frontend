import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import FeaturedProducts from "@/components/home/FeaturedProduct";
import Newsletter from "@/components/home/NewsLetter";
import StatsBar from "@/components/home/StartBar";
import Testimonial from "@/components/home/Testimonial";
import { getAllBlogs } from "@/services/Blog";
import { getAllCountries } from "@/services/Checkout";
import { getAllProducts } from "@/services/Products";
import { getAllTestimonials } from "@/services/Testimonial";
import { BlogData, BlogPost } from "@/types/Blog";
import { TestType } from "@/types/testimonials";
// export const dynamic = "force-dynamic";

const Home = async () => {
  let testimonials: TestType[] = [];
  let blogs: BlogData[] = [];

  try {
    const response = await getAllTestimonials();
    testimonials = response?.data ?? [];
    const res = await getAllBlogs();
    blogs = res?.data ?? [];
  } catch (error) {
    console.error("Testimonials failed:", error);
  }
  try {
    const res = await getAllBlogs();
    blogs = res?.blogs?.data ?? [];
  } catch (error) {
    console.error("Blog failed:", error);
  }

  const page = 1;
  const limit = 10;
  const query: { [key: string]: string | string[] | undefined } = {};
  // Send them to the backend API
  const { data: products } = await getAllProducts(page, limit, query);
  return (
    <div className="relative">
      <Banner />
      <StatsBar></StatsBar>
      <FeaturedProducts products={products}></FeaturedProducts>
      <Testimonial data={testimonials}></Testimonial>
      <Blog blogs={blogs}></Blog>
      <div className="absolute left-12 -bottom-36 z-10">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
