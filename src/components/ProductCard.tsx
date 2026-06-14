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
      className="product-card-reveal group bg-white"
      style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
    >
      <Link
        href={productHref}
        className="relative block aspect-[4/5] w-full overflow-hidden bg-white"
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
    </article>
  );
}
