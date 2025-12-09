'use client';

import Image from 'next/image';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const navLinks = [
  {
    title: 'Solutions MSNET',
    links: [
      { name: 'Cloud souverain', href: '#' },
      { name: 'Docu360 / Diplomacy', href: '#' },
      { name: 'Pharma360 / e-Santé', href: '#' },
      { name: 'Konekt Africa / Cyber School', href: '#' },
    ],
  },
  {
    title: 'Conseil & Formation (ELIKIA)',
    links: [
      { name: 'Gouvernance & audit', href: '#' },
      { name: 'Réingénierie des processus', href: '#' },
      { name: 'Formations premium', href: '#' },
      { name: 'Stratégies sectorielles', href: '#' },
    ],
  },
  {
    title: 'Design & Tech (SCREEN)',
    links: [
      { name: 'UX/UI & Web/Mobile', href: '#' },
      { name: 'Branding & motion', href: '#' },
      { name: 'Webflow premium', href: '#' },
      { name: 'ERP & intégrations', href: '#' },
    ],
  },
];

const socials = [
  {
    icon: <FiLinkedin className="h-4 w-4" aria-hidden />,
    href: 'https://www.linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: <FiFacebook className="h-4 w-4" aria-hidden />,
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    icon: <FiInstagram className="h-4 w-4" aria-hidden />,
    href: 'https://instagram.com',
    label: 'Instagram',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--msnet-navy)] text-slate-100 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="flex-1 min-w-[220px] space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/images/logo.png" alt="MSNET Group" width={160} height={42} />
            </div>
            <p className="text-base text-slate-200 leading-relaxed max-w-md">
              MSNET | ELIKIA | SCREEN — écosystème intégré : cloud souverain, data, IA,
              cybersécurité, design et delivery.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-100 border border-white/15 hover:bg-[var(--screen-blue)] hover:border-[var(--screen-blue)] transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-3 lg:pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {navLinks.map((col) => (
              <div key={col.title} className="space-y-3">
                <h4 className="text-lg font-semibold text-white">{col.title}</h4>
                <ul className="space-y-2 text-base text-slate-200">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:text-[var(--screen-blue)] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex-1 min-w-[220px] lg:pt-6 space-y-4">
            <h4 className="text-base font-semibold text-white">Contact direct</h4>
            <div className="text-base text-slate-200 space-y-1">
              <a href="mailto:contact@msnet.ml" className="hover:text-[var(--screen-blue)]">
                contact@msnet.ml
              </a>
              <div>
                <a href="tel:+22344373078" className="hover:text-[var(--screen-blue)]">
                  +223 44 37 30 78
                </a>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-base font-semibold text-[var(--screen-blue)] hover:text-white"
            >
              Nous contacter
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between text-base text-slate-200">
          <span>© {new Date().getFullYear()} MSNET | ELIKIA | SCREEN. Tous droits réservés.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[var(--screen-blue)]">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-[var(--screen-blue)]">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
