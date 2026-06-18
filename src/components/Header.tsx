import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white">
      <div className="mx-auto flex min-h-16 max-w-[1800px] items-center justify-end px-4 sm:px-6 md:px-8 lg:px-10">
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm font-semibold tracking-normal text-black sm:gap-9">
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
