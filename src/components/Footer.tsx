export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-black">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-5 px-4 py-8 text-sm font-semibold tracking-normal text-white sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        <p>© 2025 Butterflies.</p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6">
            <li>
              <a className="transition-opacity hover:opacity-55" href="https://instagram.com">
                Instagram
              </a>
            </li>
            <li>
              <a className="transition-opacity hover:opacity-55" href="mailto:contact@butterflies.example">
                Contact
              </a>
            </li>
            <li>
              <a className="transition-opacity hover:opacity-55" href="#">
                Terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
