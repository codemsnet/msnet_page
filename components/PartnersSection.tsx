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
    <section className="py-20 bg-linear-to-b from-[var(--msnet-sky)]/12 via-white to-white">
      <div className="w-full mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--msnet-sky)]/15 text-[var(--msnet-navy)] text-sm font-semibold border border-[var(--msnet-sky)]/25">
            <span className="h-2 w-2 rounded-full bg-[var(--screen-blue)]" /> Ils nous font
            confiance
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--msnet-navy)]">
            Partenaires & institutions de référence
          </h2>
          <p className="mt-4 text-[var(--text-main)] max-w-2xl mx-auto">
            Un écosystème d&apos;acteurs publics et privés qui misent sur notre expertise pour
            accélérer leur transformation digitale.
          </p>
        </motion.div>

        <div className="relative mt-10 overflow-hidden rounded-4xl bg-white/95 backdrop-blur border border-[rgba(115,151,186,0.18)] shadow-[0_24px_70px_rgba(11,40,66,0.09)]">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <div className="flex items-center">
              <div className="flex gap-24 py-12 marquee-track">
                {[...logos, ...logos].map((logo, idx) => (
                  <div
                    key={`first-${logo.name}-${idx}`}
                    className="shrink-0 flex items-center justify-center h-28 w-52 sm:w-64"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={360}
                      height={160}
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
                      className="max-h-24 w-auto object-contain drop-shadow-md"
                      priority={idx < logos.length}
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-24 py-12 marquee-track marquee-track--alt">
                {[...logos, ...logos].map((logo, idx) => (
                  <div
                    key={`second-${logo.name}-${idx}`}
                    className="shrink-0 flex items-center justify-center h-28 w-52 sm:w-64"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={360}
                      height={160}
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
                      className="max-h-24 w-auto object-contain drop-shadow-md"
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
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marquee 24s linear infinite;
          min-width: max-content;
          flex-shrink: 0;
        }
        .marquee-track--alt {
          animation-delay: -12s;
        }
      `}</style>
    </section>
  );
}
