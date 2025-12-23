import { getRelatedProducts } from "@/services/Products";
import Image from "next/image";
import Link from "next/link";

type RelatedProductsProps = {
  slug: string;
};

const RelatedProducts = async ({ slug }: RelatedProductsProps) => {
  const { data: product } = await getRelatedProducts(slug);
  console.log("related slug", product);
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {product?.slice(0, 4).map((p: any) => (
          <Link
            key={p.id}
            href={`/products/${p.slug}/${p.user_id}`}
            className="border rounded-lg p-3 hover:shadow-lg"
          >
            <div className="relative w-full h-48">
              <Image
                src={p.thumbnail_image}
                alt={p.name}
                fill
                className="object-cover rounded"
              />
            </div>

            <h3 className="mt-3 font-semibold truncate">{p.name}</h3>

            <p className="text-[#119d3e] font-bold">{p.unit_price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default RelatedProducts;
