'use client';

import Image from 'next/image';
import Link from 'next/link';
// Assets in `public/` must be referenced by their public path.
// Importing from `public/` as modules doesn't work in Next.js.
import { useEffect, useState } from 'react';
import { navLinks } from './constants';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled ? 'bg-white/65 shadow-lg backdrop-blur' : 'bg-white/25 backdrop-blur'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/images/logo.png" alt="Logo" width={120} height={36} />
        </Link>
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((item: { label: string; href: string }) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal text-[15px] font-medium text-[var(--msnet-navy)] hover:text-[var(--screen-blue)] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <Image src="/assets/icons/hamburger.svg" alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
