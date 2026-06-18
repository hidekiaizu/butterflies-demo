import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white">
      <div className="mx-auto flex min-h-16 max-w-[1800px] items-center px-4 sm:px-6 md:px-8 lg:px-10">
        <nav className="w-full" aria-label="Main navigation">
          <ul className="flex items-center justify-between text-sm font-semibold tracking-normal text-black">
            <li>
              <Link className="transition-opacity hover:opacity-55" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity hover:opacity-55"
                href="#"
                aria-label="Bag placeholder"
              >
                Bag
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
