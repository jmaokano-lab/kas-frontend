import ProductCard from "../Card/ProductCard";

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
