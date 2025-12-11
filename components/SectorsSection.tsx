'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sectors = [
  {
    title: 'Gouvernement',
    icon: '/assets/icons/card_icons/gouv_data.png',
    bullets: [
      'Dématérialisation & e-gouvernement',
      'Suivi budgétaire, archivage légal',
      'Solutions Docu360, Diplomacy',
    ],
  },
  {
    title: 'Éducation',
    icon: '/assets/icons/card_icons/education.png',
    bullets: [
      'Cyber School & numérisation académies',
      'Portails étudiants, GED, e-signature',
      'Programmes de formation premium',
    ],
  },
  {
    title: 'Santé',
    icon: '/assets/icons/card_icons/sante.png',
    bullets: [
      'e-Santé, Dossier médical partagé',
      'Pharma360 : stocks, ventes, dossier patient',
      'Statistiques sanitaires & intégrations',
    ],
  },
  {
    title: 'Secteur privé',
    icon: '/assets/icons/card_icons/secteur_privee.png',
    bullets: [
      'ERP métiers, automatisation, API',
      'Cloud souverain & services managés',
      'Branding, UX/UI, mobile & Web',
    ],
  },
  {
    title: 'Banques',
    icon: '/assets/icons/card_icons/banque.png',
    bullets: [
      'Conformité BCEAO, archivage légal',
      'Docu360 bancaire, workflows sécurisés',
      'Surveillance, audit et continuité',
    ],
  },
];

export default function SectorsSection() {
  return (
    <section
      id="sectors"
      className="py-20 bg-linear-to-b from-[var(--msnet-sky)]/12 via-white to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--msnet-sky)]/15 text-[var(--msnet-navy)] text-sm font-semibold border border-[var(--msnet-sky)]/25">
            <span className="h-2 w-2 rounded-full bg-[var(--screen-blue)]" /> Offres sectorielles
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--msnet-navy)]">
            Solutions verticales pour chaque secteur
          </h2>
          <p className="mt-4 text-[var(--text-main)] max-w-3xl mx-auto">
            MSNET, ELIKIA et SCREEN couvrent les besoins clés des gouvernements, banques,
            entreprises privées, santé et éducation avec des plateformes souveraines et des
            expertises dédiées.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {sectors.map((sector) => (
            <motion.article
              key={sector.title}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative overflow-hidden rounded-3xl bg-white/96 shadow-[0_20px_60px_rgba(11,40,66,0.08)] border border-[rgba(115,151,186,0.18)] p-8 flex flex-col gap-5 min-h-[260px] backdrop-blur-sm"
            >
              <div className="inline-flex items-center gap-3 text-[var(--msnet-navy)] font-semibold">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--msnet-sky)]/16 border border-[var(--msnet-sky)]/35 shadow-inner">
                  <Image src={sector.icon} alt={sector.title} width={40} height={40} />
                </span>
                <span className="text-lg">{sector.title}</span>
              </div>
              <ul className="space-y-2.5 text-base leading-relaxed text-[var(--text-main)]">
                {sector.bullets.map((b) => (
                  <li key={b} className="flex gap-2 items-start">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--screen-blue)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm font-semibold text-[var(--msnet-navy)] flex items-center gap-2 mt-auto">
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--elikia-brown)]" /> Sur
                devis & modulable
              </div>

              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-[var(--msnet-sky)] via-[var(--screen-blue)] to-transparent opacity-60" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
