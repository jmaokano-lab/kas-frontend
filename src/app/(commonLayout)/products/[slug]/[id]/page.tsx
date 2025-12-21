import ProductGallery from "@/components/home/Products/ProductGallery";
import RatingStars from "@/components/home/Products/RatingStar";
import RelatedProducts from "@/components/home/Products/RelatedProduct";

import { getSingleProduct } from "@/services/Products";

type Props = {
  params: {
    slug: string;
    id: string;
  };
};

export default async function ProductPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  //   console.log(params);
  const { slug, id } = await params;

  const { data: product } = await getSingleProduct(id, slug);
  console.log(product.name);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Product Section */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <ProductGallery images={product?.photos} />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

          <RatingStars rating={product.rating} count={product.rating_count} />

          <p className="text-2xl font-semibold text-primary my-4">
            {product.main_price}
          </p>

          <p
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={{
              __html: product.description || "<p>No description available</p>",
            }}
          />

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90">
              Add to Cart
            </button>

            <button className="px-6 py-3 border rounded-lg">Buy Now</button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Stock: {product.current_stock} {product.unit}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts slug={product.slug} />
    </div>
  );
}
