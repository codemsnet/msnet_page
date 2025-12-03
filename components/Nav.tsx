import Image from "next/image";
import Link from "next/link";
// Assets in `public/` must be referenced by their public path.
// Importing from `public/` as modules doesn't work in Next.js.
import { navLinks } from "./constants";

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-transparent">
      <nav className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={130}
            height={29}
          />
        </Link>
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((item: { label: string; href: string }) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal text-lg text-slate-600 hover:text-slate-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <Image
            src="/assets/icons/hamburger.svg"
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
