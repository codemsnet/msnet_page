'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Entity = {
  id: string;
  name: string;
  img: string;
  short: string;
  details?: string[];
};

const entities: Entity[] = [
  {
    id: 'msnet',
    name: 'MSNET',
    img: '/assets/images/logo.png',
    short:
      'MSNET est la branche technologique : développement logiciel, cloud, cybersécurité et IA appliquée — constructeur de systèmes critiques.',
    details: [
      'Cloud souverain, hébergement local/hybride',
      'Backup360 et DRP — continuité d’activité',
      'Sécurité avancée : chiffrement, monitoring',
    ],
  },
  {
    id: 'elikia',
    name: 'ELIKIA',
    img: '/assets/images/elikia.png',
    short:
      'ELIKIA : conseil, audit et formation — stratégie, gouvernance et renforcement de capacités pour institutions et entreprises.',
    details: [
      'Stratégie sectorielle et audits institutionnels',
      'Formation premium : leadership, cybersécurité, gestion de projet',
      'Gouvernance des données & conformité',
    ],
  },
  {
    id: 'screen',
    name: 'SCREEN',
    img: '/assets/images/screen.png',
    short:
      'SCREEN : ingénierie créative — développement Web & mobile, design UX/UI, branding et produits digitaux.',
    details: ['Développement Web & mobile', 'Design d’interfaces premium', 'Branding & multimédia'],
  },
];

const Hero = () => {
  const [selected, setSelected] = useState<Entity>(entities[0]);
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="w-full py-24 bg-linear-to-b from-[var(--msnet-sky)]/10 via-white to-white"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-2 flex flex-col lg:flex-row items-center gap-10 sm:gap-12">
        {/* Left column: content */}
        <div className="lg:w-2/5 space-y-6">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--msnet-navy)] bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
            <span className="h-2 w-2 rounded-full bg-[var(--screen-blue)]" /> Ecosystème intégré
          </p>
          <h1
            className={`text-4xl lg:text-[54px] font-extrabold leading-tight font-sans text-[var(--msnet-navy)] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } transition-all duration-700`}
          >
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[var(--msnet-sky)] to-[var(--screen-blue)]">
              MSNET, ELIKIA et SCREEN
            </span>
            <span className="block text-[var(--msnet-navy)] mt-3 text-xl lg:text-2xl">
              — un écosystème pour la modernisation digitale
            </span>
          </h1>

          <p className="text-lg text-[var(--text-main)] max-w-xl leading-relaxed">
            MSNET, ELIKIA et SCREEN constituent un écosystème intégré de technologies,
            d&apos;ingénierie digitale, de formation et de conseil stratégique. Ensemble, nous
            accompagnons États, grandes entreprises et institutions publiques dans la modernisation
            de leurs systèmes et opérations.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors duration-300 shadow-md"
            >
              <span>Nous contacter</span>
              <svg
                className="btn-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Link
              href="#more"
              className="text-sm text-[var(--msnet-navy)] hover:text-[var(--screen-blue)] transition-colors"
            >
              Voir nos solutions
            </Link>
          </div>
        </div>

        {/* Right column: large visual, overlapped */}
        <div className="lg:w-3/5 relative flex items-center justify-center max-sm:px-1">
          <div
            className={`absolute -left-8 max-sm:h-full max-sm:pb-20 -top-8 md:w-[550px] md:h-[515px] rounded-3xl bg-white/40 shadow-2xl border border-[var(--msnet-sky)]/30 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } transition-all duration-700`}
          />

          <div className="relative z-10 max-md:w-full w-[740px] md:h-[520px] max-sm:h-full max-sm:pb-10 -translate-y-4 sm:-translate-y-6 lg:-translate-y-12 flex items-center justify-center px-1 sm:px-2">
            <div
              className={`w-full max-sm:flex-col h-full rounded-3xl overflow-hidden bg-white shadow-2xl border border-[var(--msnet-sky)]/30 flex md:items-center max-sm:p-3 sm:p-4 ${
                isTransitioning ? 'opacity-80 scale-40' : 'opacity-100 scale-100'
              } transition-all duration-200`}
            >
              {/* Image area */}
              <div className="md:w-1/2 flex md:items-center md:justify-center md:p-4 bg-white max-sm:w-full max-sm:p-3">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={selected.img}
                    alt={selected.name}
                    width={520}
                    height={360}
                    className="object-contain max-h-full"
                  />
                </div>
              </div>

              {/* Info area - fixed size so card never changes */}
              <div className="md:w-1/2 p-6 md:p-7 flex flex-col md:justify-center gap-5 max-sm:gap-3 bg-transparent max-sm:p-4 max-sm:pt-6">
                <h3 className="text-3xl font-semibold text-[var(--msnet-navy)]">{selected.name}</h3>
                <p className="mt-1 text-lg text-[var(--text-main)] grow overflow-hidden leading-relaxed">
                  {selected.short}
                </p>

                {selected.details && (
                  <ul className="mt-1 text-base text-slate-700 list-disc list-inside space-y-1.5 overflow-auto">
                    {selected.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Thumbnails mapped (entities) - slightly overlapping the big image */}
          <div className="absolute -bottom-7 sm:-bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-3 sm:gap-4 z-20">
            {entities.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => {
                  // animate transition: briefly set flag, then change selected
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setSelected(e);
                    setIsTransitioning(false);
                  }, 180);
                }}
                aria-pressed={selected.id === e.id}
                className={`w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-lg border transition-transform focus:outline-none ${
                  selected.id === e.id
                    ? 'scale-105 ring-4 ring-[var(--screen-blue)]/60'
                    : 'hover:scale-105'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center p-1">
                  <Image
                    src={e.img}
                    alt={e.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --msnet-sky: #7397ba;
          --msnet-navy: #0b2842;
          --elikia-brown: #b5914a;
          --screen-blue: #24a1d6;
          --text-main: #374151;
        }
      `}</style>
    </section>
  );
};

export default Hero;
