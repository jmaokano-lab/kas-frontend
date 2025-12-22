import ProductGallery from "@/components/home/Products/ProductGallery";
import { ProductInfo } from "@/components/home/Products/ProductInfo";

import RelatedProducts from "@/components/home/Products/RelatedProduct";
import PageBanner from "@/components/shared/PageBanner";

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
  const { slug, id } = await params;

  const { data: product } = await getSingleProduct(id, slug);
  console.log("Details", product);

  return (
    <div>
      <PageBanner
        title="Details"
        pagePath="Home // Our Product Details"
      ></PageBanner>
      <div
        className="  pt-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/client-bg1.jpg')" }}
      >
        <div className="max-w-6xl mx-auto mt-8">
          {/* Product Section */}
          <div className=" grid lg:grid-cols-5 gap-10">
            <div className="col-span-2">
              {/* Image Gallery */}
              <ProductGallery images={product[0]?.photos} />
            </div>

            {/* Product Info */}
            <ProductInfo product={product}></ProductInfo>
          </div>

          {/* Related Products */}
          <RelatedProducts slug={slug} />
        </div>
      </div>
    </div>
  );
}
