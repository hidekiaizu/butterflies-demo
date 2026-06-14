import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export function ProductGrid() {
  return (
    <section
      aria-labelledby="products-heading"
      className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-black pb-5">
          <h2
            id="products-heading"
            className="text-3xl font-black leading-none tracking-normal text-black sm:text-5xl"
          >
            Product Drop
          </h2>
          <p className="hidden text-sm font-black uppercase leading-none tracking-normal text-black sm:block">
            03 pieces
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
