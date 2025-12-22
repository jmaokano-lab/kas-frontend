"use client";

import { BaggageClaim, CircleArrowOutUpRight, Heart } from "lucide-react";
import Link from "next/link"; // Correct import
import Image from "next/image";
import { FC } from "react";
import { Product } from "@/types/Product";

type FeaturedProductProps = {
  product: Product;
};

const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className="absolute -left-1/2 transform translate-x-1/3 -bottom-full mb-2 p-2 text-sm text-[#119d3e]   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {text}
    </div>
  );
};

const ProductCard: FC<FeaturedProductProps> = ({ product }) => {
  const handleWishlist = () => {
    // Add to wishlist functionality (you can customize this)
    console.log(`${product.name} added to wishlist!`);
  };

  return (
    <div className="relative ">
      <div className="bg-gray-300 rounded-2xl p-2  hover:scale-105 duration-300  ">
        {/* Image */}
        <div className="relative group w-full h-52 overflow-hidden rounded-t-lg shadow-md">
          <Image
            src={product?.thumbnail_image || "/placeholder.png"}
            alt={product?.name || "Product image"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="absolute top-3.5 right-3 bg-white text-[#119d3e] rounded-full p-2 shadow-lg hover:bg-[#119d3e] hover:text-white transition"
          >
            <Heart size={20} />
            {/* <Tooltip text="Add to wishlist" /> */}
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-2 p-2 bg-white/50 rounded-b-2xl h-36 relative flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-700">
            {product.name.length > 25
              ? product.name.slice(0, 25) + "…"
              : product.name}
          </h3>
          {/* <p className="text-sm text-gray-500 mt-1">{product.name}</p> */}

          {/* Price */}
          <p className="text-lg font-semibold mt-2 text-[#5cd38d]">
            <span className="text-[#119d3e]"></span> {product.main_price}
          </p>

          {/* Buttons */}
          <div className="">
            <div className="flex justify-between items-center  mt-2  ">
              {/* Button 1: BaggageClaim Icon Button */}
              <Link
                href={product?.links?.details}
                className="flex items-center justify-center px-4 py-2 text-[#119d3e] rounded-lg hover:bg-[#0d7b2f] hover:text-white transition duration-300 group relative"
              >
                <BaggageClaim size={24} />

                {/* <Tooltip text="Add to card" /> */}
              </Link>

              {/* Button 2: CircleArrowOutUpRight Icon Button */}
              <Link
                href={
                  product.slug
                    ? `/products/${product.slug}/${product.user_id}`
                    : "/"
                }
                className="flex items-center justify-center ml-8 px-4 py-2 text-[#119d3e] rounded-lg hover:bg-[#0d7b2f] hover:text-white transition duration-300 group relative"
              >
                <CircleArrowOutUpRight size={24} />

                {/* <Tooltip text="Details" /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
