import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto grid min-h-[78vh] max-w-[1800px] gap-10 px-4 pb-20 pt-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:items-end md:px-8 md:pb-28 lg:px-10">
        <div className="image-reveal relative aspect-[4/5] w-full overflow-hidden bg-white md:aspect-[5/4]">
          <Image
            src="/images/tee.jpg"
            alt="Give Her Butterflies tee photographed as the lead product for the drop."
            fill
            priority
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-contain"
          />
        </div>
        <div className="fade-up flex flex-col items-start gap-7 md:pb-10">
          <p className="text-xs font-semibold uppercase tracking-normal text-black">
            First drop
          </p>
          <h1 className="max-w-[9ch] text-[clamp(3.25rem,10vw,8.5rem)] font-black leading-[0.82] tracking-normal text-black">
            Give Her Butterflies.
          </h1>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#drop"
              className="quiet-action inline-flex min-h-12 items-center justify-center border border-black px-6 text-sm font-semibold tracking-normal text-black"
            >
              View Drop
            </a>
            <a
              href="#waitlist"
              className="quiet-action inline-flex min-h-12 items-center justify-center border border-black px-6 text-sm font-semibold tracking-normal text-black"
            >
              Notify Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
