'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const points = [
  {
    title: 'Expertise locale & internationale',
    desc: 'Présence terrain et benchmarks globaux pour des déploiements réussis.',
    icon: '/assets/icons/card_icons/international.png',
  },
  {
    title: 'Souveraineté & sécurité',
    desc: 'Cloud souverain, conformité APDP/DataReg, chiffrement et audits.',
    icon: '/assets/icons/card_icons/security.png',
  },
  {
    title: 'Approche intégrée',
    desc: 'Tech + formation + conseil : un triptyque MSNET | ELIKIA | SCREEN.',
    icon: '/assets/icons/card_icons/guidance.png',
  },
  {
    title: 'Technologies modernes',
    desc: 'IA appliquée, automatisation, plateformes SaaS, UX/UI premium.',
    icon: '/assets/icons/card_icons/microchip.png',
  },
  {
    title: 'Capacité de déploiement',
    desc: 'Livraison de systèmes critiques pour États, banques, ONG et grandes entreprises.',
    icon: '/assets/icons/card_icons/deployment.png',
  },
  {
    title: 'Vision 2030',
    desc: 'Ambition de croissance (5+ milliards/an au Mali) et expansion CEDEAO.',
    icon: '/assets/icons/card_icons/binoculars.png',
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-us"
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
            <span className="h-2 w-2 rounded-full bg-[var(--screen-blue)]" /> Pourquoi nous choisir
            ?
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--msnet-navy)]">
            Les garanties MSNET | ELIKIA | SCREEN
          </h2>
          <p className="mt-4 text-[var(--text-main)] max-w-3xl mx-auto">
            Une offre intégrée, sécurisée et ambitieuse pour accompagner vos transformations
            nationales et sectorielles.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {points.map((p) => (
            <motion.article
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative overflow-hidden rounded-3xl bg-white/96 shadow-[0_18px_50px_rgba(11,40,66,0.08)] border border-[rgba(115,151,186,0.18)] p-7 flex flex-col gap-4 backdrop-blur-sm"
            >
              <div className="inline-flex items-center gap-3 text-[var(--msnet-navy)] font-semibold">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--msnet-sky)]/18 border border-[var(--msnet-sky)]/35">
                  <Image src={p.icon} alt={p.title} width={32} height={32} />
                </span>
                <span className="text-lg">{p.title}</span>
              </div>
              <p className="text-base text-[var(--text-main)] leading-relaxed">{p.desc}</p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-[var(--msnet-sky)] via-[var(--screen-blue)] to-transparent opacity-70" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
