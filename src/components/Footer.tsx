const footerLinks = ["Instagram", "Contact", "Terms"];

export function Footer() {
  return (
    <footer className="bg-white px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-black pt-6 text-sm font-black uppercase leading-none tracking-normal text-black sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 Butterflies.</p>
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline focus:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
