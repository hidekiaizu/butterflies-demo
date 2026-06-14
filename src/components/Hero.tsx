import { ProductImage } from "@/components/ProductImage";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-white px-5 pb-20 pt-8 sm:px-8 sm:pb-28 lg:px-12 lg:pt-14"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="max-w-xl">
          <p className="mb-5 text-sm font-bold uppercase leading-none tracking-normal text-black">
            Drop 001
          </p>
          <h1
            id="hero-heading"
            className="text-6xl font-black leading-[0.9] tracking-normal text-black sm:text-8xl lg:text-9xl"
          >
            Butterflies.
          </h1>
          <p className="mt-8 text-2xl font-black leading-tight tracking-normal text-black sm:text-4xl">
            Give Her Butterflies.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-[1.25fr_0.75fr] sm:items-end">
          <ProductImage
            src="/images/collage.jpg"
            alt="Butterflies streetwear product collage featuring the drop"
            className="aspect-[4/5] w-full"
            priority
          />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-1">
            <ProductImage
              src="/images/tee.jpg"
              alt="Give Her Butterflies tee styled for the product drop"
              className="aspect-[3/4] w-full"
            />
            <ProductImage
              src="/images/slides.jpg"
              alt="Butterflies slides styled for the product drop"
              className="aspect-[3/4] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
