"use client";

import RatingStars from "@/components/home/Products/RatingStar";
import { useCart } from "@/context/CartContext";
import { ProductDetails } from "@/types/Product";
import { useRouter } from "next/navigation";

type ProductInfoProps = {
  product: ProductDetails[];
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addToCart, buyNow } = useCart();
  const router = useRouter();
  const item = product[0]; // extract once

  if (!item) return null;

  return (
    <div className="col-span-3">
      <h1 className="text-3xl font-bold mb-3">{item.name}</h1>

      <RatingStars rating={item.rating} count={item.rating_count} />

      <p className="text-2xl font-semibold text-primary my-4">
        {item.main_price}
      </p>

      <p
        className="text-gray-600 mb-6"
        dangerouslySetInnerHTML={{
          __html: item.description || "<p>No description available</p>",
        }}
      />

      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-[#119d3e] text-white rounded-lg hover:opacity-90 cursor-pointer"
          onClick={() =>
            addToCart({
              id: item.id,
              name: item.name,
              price: item.calculable_price,
              image: item.thumbnail_image,
              quantity: 1,
            })
          }
        >
          Add to Cart
        </button>

        <button
          className="px-6 py-3 border rounded-lg border-[#119d3e] cursor-pointer"
          onClick={() => {
            buyNow({
              id: item.id,
              name: item.name,
              price: item.calculable_price,
              image: item.thumbnail_image,
              quantity: 1,
            });
            router.push("/cart");
          }}
        >
          Buy Now
        </button>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <span className="font-bold">Stock:</span> Available (
        {item.current_stock} {item.unit})
      </div>
    </div>
  );
};
