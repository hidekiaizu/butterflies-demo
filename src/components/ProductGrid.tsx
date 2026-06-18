import Link from "next/link";
import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section id="drop" className="bg-white py-10 sm:py-16">
      <div className="mx-auto grid max-w-[1800px] grid-cols-[clamp(7rem,29vw,17rem)_minmax(0,1fr)] gap-3 px-3 sm:gap-6 sm:px-6 md:grid-cols-[clamp(10rem,20vw,20rem)_minmax(0,1fr)] md:px-8 lg:px-10">
        <div className="flex min-h-full justify-center">
          <Link
            href="/"
            aria-label="Butterflies home"
            className="sticky top-20 self-start text-[clamp(5.5rem,14vw,13rem)] font-black leading-[0.78] tracking-normal text-black [writing-mode:vertical-rl]"
          >
            Butterflies.
          </Link>
        </div>
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
