"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Entity = {
  id: string;
  name: string;
  img: string;
  short: string;
  details?: string[];
};

const entities: Entity[] = [
  {
    id: "msnet",
    name: "MSNET",
    img: "/assets/images/logo.png",
    short:
      "MSNET est la branche technologique : développement logiciel, cloud, cybersécurité et IA appliquée — constructeur de systèmes critiques.",
    details: [
      "Cloud souverain, hébergement local/hybride",
      "Backup360 et DRP — continuité d’activité",
      "Sécurité avancée : chiffrement, monitoring",
    ],
  },
  {
    id: "elikia",
    name: "ELIKIA",
    img: "/assets/images/elikia.png",
    short:
      "ELIKIA : conseil, audit et formation — stratégie, gouvernance et renforcement de capacités pour institutions et entreprises.",
    details: [
      "Stratégie sectorielle et audits institutionnels",
      "Formation premium : leadership, cybersécurité, gestion de projet",
      "Gouvernance des données & conformité",
    ],
  },
  {
    id: "screen",
    name: "SCREEN",
    img: "/assets/images/screen.png",
    short:
      "SCREEN : ingénierie créative — développement Web & mobile, design UX/UI, branding et produits digitaux.",
    details: [
      "Développement Web & mobile",
      "Design d’interfaces premium",
      "Branding & multimédia",
    ],
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
      className="w-full py-24 bg-gradient-to-b from-blue-50/60 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-2 lg:px-2 flex flex-col lg:flex-row items-center gap-12">
        {/* Left column: content */}
        <div className="lg:w-2/5 space-y-6">
          <p className="text-sm font-semibold text-orange-400 uppercase tracking-wide">
            Ecosystème intégré
          </p>
          <h1
            className={`text-4xl lg:text-5xl font-extrabold leading-tight font-serif ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } transition-all duration-700`}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">
              MSNET, ELIKIA et SCREEN
            </span>
            <span className="block text-slate-700 mt-2 text-lg lg:text-xl">
              — un écosystème pour la modernisation digitale
            </span>
          </h1>

          <p className="text-lg text-slate-700 max-w-xl">
            MSNET, ELIKIA et SCREEN constituent un écosystème intégré de
            technologies, d&apos;ingénierie digitale, de formation et de conseil
            stratégique. Ensemble, nous accompagnons États, grandes entreprises
            et institutions publiques dans la modernisation de leurs systèmes et
            opérations.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button type="button" className="btn-primary">
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
              className="text-sm text-slate-600 hover:underline"
            >
              Voir nos solutions
            </Link>
          </div>
        </div>

        {/* Right column: large visual, overlapped */}
        <div className="lg:w-3/5 relative flex items-center justify-center">
          <div
            className={`absolute -left-8 -top-8 w-[550px] h-[515px] rounded-3xl bg-white/20 dark:bg-neutral-900/70 shadow-2xl border border-blue-50 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } transition-all duration-700`}
          />

          <div className="relative z-20 w-[740px] h-[520px] -translate-y-6 lg:-translate-y-12 flex items-center justify-center">
            <div
              className={`w-full h-full rounded-3xl overflow-hidden bg-white shadow-2xl border border-blue-50 flex items-center ${
                isTransitioning
                  ? "opacity-80 scale-95"
                  : "opacity-100 scale-100"
              } transition-all duration-300`}
            >
              {/* Image area */}
              <div className="w-1/2 flex items-center justify-center p-4 bg-white">
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
              <div className="w-1/2 p-4 flex flex-col justify-center gap-6">
                <h3 className="text-2xl font-semibold text-sky-700">
                  {selected.name}
                </h3>
                <p className="mt-3 text-lg text-slate-700 grow overflow-hidden">
                  {selected.short}
                </p>

                {selected.details && (
                  <ul className="mt-3 text-lg text-slate-500 list-disc list-inside space-y-1 overflow-auto">
                    {selected.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Thumbnails mapped (entities) - slightly overlapping the big image */}
          <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-40">
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
                    ? "scale-105 ring-4 ring-sky-300"
                    : "hover:scale-105"
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
    </section>
  );
};

export default Hero;
