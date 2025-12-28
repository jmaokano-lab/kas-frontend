import ProductCard from "./Card/ProductCard";
import img1 from "../../assets/img/bg/client-bg1.jpg";
import { Product } from "@/types/Product";

interface Props {
  products: Product[];
}
const FeaturedProducts = ({ products }: Props) => {
  // const products = [
  //   {
  //     name: "Fresh Hilsa Fish",
  //     description: "Premium quality, fresh catch from the ocean.",
  //     main_price: 25.99,
  //     thumbnail_image: "/hilsha.webp",
  //     alt: "Fresh Hilsa Fish",
  //     links: {
  //       details: "/hilsha.jpg",
  //     },

  //     slug: "Tuna Steak",
  //   },
  //   {
  //     name: "Frozen Salmon",
  //     description: "Freshly frozen, high-quality salmon fish ",
  //     main_price: 18.99,
  //     thumbnail_image: "/fresh-fish.jpg",
  //     alt: "Frozen Salmon",
  //     links: {
  //       details: "/fresh-fish.jpg",
  //     },

  //     slug: "Tuna Steak",
  //   },
  //   {
  //     name: "Shrimp Pack",
  //     description: "Sweet and tender shrimp, frozen and ready to cook.",
  //     main_price: 15.49,
  //     thumbnail_image: "/carp.jpg",
  //     alt: "Shrimp Pack",
  //     links: {
  //       details: "/carp.jpg",
  //     },

  //     slug: "Tuna Steak",
  //   },
  //   {
  //     name: "Tuna Steak",
  //     description: "Fresh cut tuna steaks, perfect for grilling.",
  //     main_price: 22.75,
  //     thumbnail_image: "/tona.jpg",
  //     alt: "Tuna Steak",
  //     links: {
  //       details: "/tona.jpg",
  //     },

  //     slug: "Tuna Steak",
  //   },
  // ];

  return (
    <section
      className="py-12 px-4 bg-[#052F35] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/client-bg1.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center gap-1">
          <p className="h-1 w-10 bg-[#119d3e] rounded-2xl"></p>

          <p className="text-md  text-center items-center text-[#119d3e]  px-2">
            HEALTHY FISH
          </p>
          <p className="h-1 w-10 rounded-2xl bg-[#119d3e]"></p>
        </div>
        <h2 className="text-4xl text-white font-bold text-center text-White mb-8 px-2 mt-2">
          Featured Products
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
