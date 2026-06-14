import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductDetailPreviewProps = {
  product: Product;
};

export function ProductDetailPreview({ product }: ProductDetailPreviewProps) {
  return (
    <section id={product.id} className="border-t border-black/10 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-start md:px-8 lg:px-10">
        <div className="image-reveal relative aspect-[4/5] overflow-hidden bg-white">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
        <div className="detail-reveal md:sticky md:top-44">
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-black">
            Product detail preview
          </p>
          <h2 className="text-[clamp(2.5rem,6.6vw,6.75rem)] font-black leading-[0.84] tracking-normal text-black">
            {product.name}
          </h2>
          <p className="mt-7 max-w-xl text-lg font-medium leading-snug text-black">
            {product.description}
          </p>
          <p className="mt-5 text-sm font-semibold tracking-normal text-black">
            {product.priceLabel}
          </p>
          <fieldset className="mt-9">
            <legend className="mb-3 text-xs font-semibold uppercase tracking-normal text-black">
              Size selector placeholder
            </legend>
            <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className="quiet-action flex h-11 min-w-11 items-center justify-center border border-black px-3 text-sm font-semibold text-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>
          <div id="bag" className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href="/#waitlist"
              className="quiet-action inline-flex min-h-12 items-center justify-center border border-black px-5 text-sm font-semibold tracking-normal text-black"
            >
              Notify Me
            </Link>
            <button
              type="button"
              disabled
              className="inline-flex min-h-12 cursor-not-allowed items-center justify-center border border-black px-5 text-sm font-semibold tracking-normal text-black opacity-35"
            >
              Checkout coming soon
            </button>
          </div>
          <Link
            href="/#drop"
            className="quiet-action mt-6 inline-flex text-sm font-semibold text-black"
          >
            Back to Drop
          </Link>
        </div>
      </div>
    </section>
  );
}
