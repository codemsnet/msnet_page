'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiGlobe, FiLayers, FiShield, FiTrendingUp, FiZap } from 'react-icons/fi';

const points = [
  {
    title: 'Expertise locale & internationale',
    desc: 'Présence terrain et benchmarks globaux pour des déploiements réussis.',
    icon: <FiGlobe className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Souveraineté & sécurité',
    desc: 'Cloud souverain, conformité APDP/DataReg, chiffrement et audits.',
    icon: <FiShield className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Approche intégrée',
    desc: 'Tech + formation + conseil : un triptyque MSNET | ELIKIA | SCREEN.',
    icon: <FiLayers className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Technologies modernes',
    desc: 'IA appliquée, automatisation, plateformes SaaS, UX/UI premium.',
    icon: <FiCpu className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Capacité de déploiement',
    desc: 'Livraison de systèmes critiques pour États, banques, ONG et grandes entreprises.',
    icon: <FiTrendingUp className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Vision 2030',
    desc: 'Ambition de croissance (5+ milliards/an au Mali) et expansion CEDEAO.',
    icon: <FiZap className="h-5 w-5" aria-hidden />,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Pourquoi nous choisir ?
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
            Les garanties MSNET | ELIKIA | SCREEN
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Une offre intégrée, sécurisée et ambitieuse pour accompagner vos transformations
            nationales et sectorielles.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {points.map((p) => (
            <motion.article
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="rounded-2xl bg-white shadow-lg border border-slate-100 p-6 flex flex-col gap-3"
            >
              <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600">
                  {p.icon}
                </span>
                {p.title}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{p.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
