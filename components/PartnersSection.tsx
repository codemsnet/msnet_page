'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  { name: 'DHL', src: '/assets/images/trusts/dhl.png' },
  { name: 'Ambassade du Brésil', src: '/assets/images/trusts/bresil_ambassade.png' },
  { name: 'AGETIC', src: '/assets/images/trusts/logo_long_agetic.png' },
  { name: 'Ministère Éducation', src: '/assets/images/trusts/minis_education.png' },
  { name: 'Ministère Femme & Enfant', src: '/assets/images/trusts/minis_femme_enfant.png' },
  { name: 'SMDT', src: '/assets/images/trusts/smdt.png' },
];

export default function PartnersSection() {
  return (
    <section className="py-20">
      <div className="w-full mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Ils nous font confiance
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
            Partenaires & institutions de référence
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Un écosystème d&apos;acteurs publics et privés qui misent sur notre expertise pour accélérer
            leur transformation digitale.
          </p>
        </motion.div>

        <div className="relative mt-10 overflow-hidden rounded-3xl bg-white/90 backdrop-blur border border-slate-100 shadow-lg">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            {/* Première ligne qui défile */}
            <div className="flex gap-28">
              <div className="flex gap-28 py-12 animate-marquee">
                {[...logos, ...logos].map((logo, idx) => (
                  <div key={`first-${logo.name}-${idx}`} className="shrink-0 flex items-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={320}
                      height={128}
                      onMouseEnter={(e) => {
                        const tooltip = document.createElement('div');
                        tooltip.textContent = logo.name;
                        tooltip.style.position = 'absolute';
                        tooltip.style.background = 'rgba(30,41,59,0.95)';
                        tooltip.style.color = '#fff';
                        tooltip.style.padding = '4px 12px';
                        tooltip.style.borderRadius = '6px';
                        tooltip.style.fontSize = '0.95rem';
                        tooltip.style.fontWeight = 'bold';
                        tooltip.style.pointerEvents = 'none';
                        tooltip.style.zIndex = '50';
                        tooltip.style.top = `${
                          e.currentTarget.getBoundingClientRect().bottom + window.scrollY + 8
                        }px`;
                        tooltip.style.left = `${
                          e.currentTarget.getBoundingClientRect().left + window.scrollX
                        }px`;
                        tooltip.className = 'partner-tooltip';
                        document.body.appendChild(tooltip);
                      }}
                      onMouseLeave={() => {
                        document.querySelectorAll('.partner-tooltip').forEach((el) => el.remove());
                      }}
                      className="h-24 w-auto object-contain drop-shadow-md"
                      priority={idx < logos.length}
                    />
                  </div>
                ))}
              </div>

              {/* Deuxième ligne identique pour l'effet de boucle */}
              <div className="flex gap-28 py-12 animate-marquee">
                {[...logos, ...logos].map((logo, idx) => (
                  <div key={`second-${logo.name}-${idx}`} className="shrink-0 flex items-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={320}
                      height={128}
                      onMouseEnter={(e) => {
                        const tooltip = document.createElement('div');
                        tooltip.textContent = logo.name;
                        tooltip.style.position = 'absolute';
                        tooltip.style.background = 'rgba(30,41,59,0.95)';
                        tooltip.style.color = '#fff';
                        tooltip.style.padding = '4px 12px';
                        tooltip.style.borderRadius = '6px';
                        tooltip.style.fontSize = '0.95rem';
                        tooltip.style.fontWeight = 'bold';
                        tooltip.style.pointerEvents = 'none';
                        tooltip.style.zIndex = '50';
                        tooltip.style.top = `${
                          e.currentTarget.getBoundingClientRect().bottom + window.scrollY + 8
                        }px`;
                        tooltip.style.left = `${
                          e.currentTarget.getBoundingClientRect().left + window.scrollX
                        }px`;
                        tooltip.className = 'partner-tooltip';
                        document.body.appendChild(tooltip);
                      }}
                      onMouseLeave={() => {
                        document.querySelectorAll('.partner-tooltip').forEach((el) => el.remove());
                      }}
                      className="h-24 w-auto object-contain drop-shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
