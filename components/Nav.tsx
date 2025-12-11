'use client';

import Image from 'next/image';
import Link from 'next/link';
// Assets in `public/` must be referenced by their public path.
// Importing from `public/` as modules doesn't work in Next.js.
import { useEffect, useState } from 'react';
import { navLinks } from './constants';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

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
        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="lg:hidden p-2 rounded-lg hover:bg-white/60 transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <Image src="/assets/icons/hamburger.svg" alt="Hamburger" width={25} height={25} />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-out ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden backdrop-blur bg-white/85 shadow-lg`}
      >
        <ul className="flex flex-col gap-4 px-6 pb-6 pt-2">
          {navLinks.map((item: { label: string; href: string }) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-2 py-2 text-base font-semibold text-[var(--msnet-navy)] hover:text-[var(--screen-blue)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
