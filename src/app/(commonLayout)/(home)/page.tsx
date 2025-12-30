import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import FeaturedProducts from "@/components/home/FeaturedProduct";
import Newsletter from "@/components/home/NewsLetter";
import StatsBar from "@/components/home/StartBar";
import Testimonial from "@/components/home/Testimonial";
import { getAllProducts } from "@/services/Products";
import { getAllTestimonials } from "@/services/Testimonial";

const Home = async () => {
  const { data } = await getAllTestimonials();

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
      <Testimonial data={data}></Testimonial>
      <Blog></Blog>
      <div className="absolute left-12 -bottom-36 z-10">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
