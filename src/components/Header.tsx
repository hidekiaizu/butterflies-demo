import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          aria-label="Butterflies home"
          className="block text-5xl font-black leading-none tracking-normal text-black sm:text-7xl lg:text-8xl"
        >
          Butterflies.
        </Link>
      </div>
    </header>
  );
}
