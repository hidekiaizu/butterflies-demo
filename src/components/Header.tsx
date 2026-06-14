import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-5 px-4 py-5 sm:px-6 md:flex-row md:items-end md:justify-between md:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="Butterflies home"
          className="block text-[clamp(3rem,10vw,8.75rem)] font-black leading-[0.78] tracking-normal text-black"
        >
          Butterflies.
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm font-semibold tracking-normal text-black sm:gap-9">
            <li>
              <Link className="transition-opacity hover:opacity-55" href="/#drop">
                Drop
              </Link>
            </li>
            <li>
              <Link className="transition-opacity hover:opacity-55" href="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className="transition-opacity hover:opacity-55" href="/#waitlist" aria-label="Bag placeholder">
                Bag
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
