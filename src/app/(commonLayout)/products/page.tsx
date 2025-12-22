import FilterSidebar from "@/components/home/Products/FilterSidebar";
import ProductGrid from "@/components/home/Products/ProductGrid";
import PageBanner from "@/components/shared/PageBanner";
import { getAllProducts } from "@/services/Products";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const Products = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = await searchParams;

  // Parse `page` and `limit` from query (fallback to default values)
  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 10;

  // Send them to the backend API
  const { data: products } = await getAllProducts(page, limit, query);
  console.log(products);
  return (
    <div>
      <PageBanner title="Products" pagePath="Home // Our Products"></PageBanner>

      <div
        className="bg-white max-w-7xl mx-auto  pt-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/client-bg1.jpg')" }}
      >
        <div className="grid grid-cols-12 gap-6 px-6 py-8">
          <aside className="col-span-12 md:col-span-3">
            <FilterSidebar />
          </aside>

          <section className="col-span-12 md:col-span-9">
            <ProductGrid products={products} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
