import { ProductImage } from "@/components/ProductImage";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const buttonLabel =
    product.status === "available" ? "View Product" : "Coming Soon";

  return (
    <article className="group bg-white">
      <ProductImage
        src={product.image}
        alt={product.alt}
        className="aspect-[4/5] w-full"
      />
      <div className="pt-5">
        <div className="flex items-start justify-between gap-5">
          <h3 className="text-xl font-black leading-tight tracking-normal text-black">
            {product.name}
          </h3>
          <p className="shrink-0 text-sm font-black leading-tight tracking-normal text-black">
            {product.price}
          </p>
        </div>
        <button
          type="button"
          aria-label={`${buttonLabel}: ${product.name}`}
          className="mt-5 inline-flex h-11 w-full items-center justify-center border border-black bg-white px-5 text-sm font-black uppercase leading-none tracking-normal text-black transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}
