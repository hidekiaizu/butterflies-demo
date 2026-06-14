import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section id="drop" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
