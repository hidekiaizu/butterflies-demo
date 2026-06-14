export function WaitlistSection() {
  return (
    <section id="waitlist" className="border-t border-black/10 bg-white py-20 sm:py-28">
      <div className="waitlist-reveal mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-10">
        <p className="mb-5 text-xs font-semibold uppercase tracking-normal text-black">
          Waitlist
        </p>
        <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,5.75rem)] font-black leading-[0.9] tracking-normal text-black">
          Be first to know when the drop goes live.
        </h2>
        {/* TODO: Connect this form to the waitlist backend or email provider before launch. */}
        <form className="mt-10 grid gap-3 sm:grid-cols-[1fr_auto]" action="#">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            className="min-h-14 w-full border border-black bg-white px-4 text-base font-semibold text-black outline-none transition-shadow duration-300 placeholder:text-black/45 focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="quiet-action min-h-14 border border-black bg-white px-7 text-sm font-semibold tracking-normal text-black"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
}
