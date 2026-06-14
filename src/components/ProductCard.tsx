import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  const productHref = `/drop/${product.id}`;

  return (
    <article
      className="product-card-reveal group flex h-full flex-col gap-5 bg-white"
      style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
    >
      <Link
        href={productHref}
        className="relative aspect-[4/5] overflow-hidden bg-white"
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="product-media object-contain"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-bold leading-tight tracking-normal text-black">
            {product.name}
          </h3>
          <p className="text-sm font-semibold tracking-normal text-black">
            {product.priceLabel}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          <Link
            href={productHref}
            className="quiet-action inline-flex min-h-11 items-center justify-center border border-black px-4 text-xs font-semibold tracking-normal text-black"
          >
            View Details
          </Link>
          <a
            href="#waitlist"
            className="quiet-action inline-flex min-h-11 items-center justify-center border border-black px-4 text-xs font-semibold tracking-normal text-black"
          >
            Notify Me
          </a>
        </div>
      </div>
    </article>
  );
}
