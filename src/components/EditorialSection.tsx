export function EditorialSection() {
  return (
    <section
      aria-labelledby="editorial-heading"
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 border-y border-black py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
        <h2
          id="editorial-heading"
          className="min-w-0 max-w-3xl break-words text-3xl font-black leading-tight tracking-normal text-black sm:text-6xl"
        >
          A minimal streetwear drop built around nostalgia, bold type, and soft
          emotion.
        </h2>

        <div
          aria-hidden="true"
          className="min-w-0 break-words text-6xl font-black leading-[0.82] tracking-normal text-black sm:text-[8rem] lg:justify-self-end lg:[writing-mode:vertical-rl]"
        >
          Butterflies.
        </div>
      </div>
    </section>
  );
}
