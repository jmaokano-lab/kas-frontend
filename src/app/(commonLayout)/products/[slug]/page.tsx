import ProductGallery from "@/components/home/Products/ProductGallery";
import { ProductInfo } from "@/components/home/Products/ProductInfo";
import RelatedProducts from "@/components/home/Products/RelatedProduct";
import PageBanner from "@/components/shared/PageBanner";

import { getSingleProduct } from "@/services/Products";

type PageProps = {
  params?: Promise<any>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    return <div className="text-center py-20">Invalid product URL</div>;
  }
  console.log("Server params:", slug);

  const { data: product } = await getSingleProduct(slug);
  console.log("Details", product);
  const singleProduct = product?.[0];
  const categorySlug = product?.[0].category[0];

  if (!singleProduct) {
    return <div className="text-center py-20">Product not found</div>;
  }

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
              <ProductGallery images={singleProduct?.photos} />
            </div>

            {/* Product Info */}
            <ProductInfo product={product}></ProductInfo>
          </div>

          {/* Related Products */}
          <RelatedProducts slug={categorySlug?.slug} />
        </div>
      </div>
    </div>
  );
}
