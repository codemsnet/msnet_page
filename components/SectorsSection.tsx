'use client';

import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiCreditCard, FiHeart, FiShield } from 'react-icons/fi';

const sectors = [
  {
    title: 'Gouvernement',
    icon: <FiShield className="h-5 w-5" aria-hidden />,
    bullets: [
      'Dématérialisation & e-gouvernement',
      'Suivi budgétaire, archivage légal',
      'Solutions Docu360, Diplomacy',
    ],
  },
  {
    title: 'Éducation',
    icon: <FiBookOpen className="h-5 w-5" aria-hidden />,
    bullets: [
      'Cyber School & numérisation académies',
      'Portails étudiants, GED, e-signature',
      'Programmes de formation premium',
    ],
  },
  {
    title: 'Santé',
    icon: <FiHeart className="h-5 w-5" aria-hidden />,
    bullets: [
      'e-Santé, Dossier médical partagé',
      'Pharma360 : stocks, ventes, dossier patient',
      'Statistiques sanitaires & intégrations',
    ],
  },
  {
    title: 'Secteur privé',
    icon: <FiBriefcase className="h-5 w-5" aria-hidden />,
    bullets: [
      'ERP métiers, automatisation, API',
      'Cloud souverain & services managés',
      'Branding, UX/UI, mobile & Web',
    ],
  },
  {
    title: 'Banques',
    icon: <FiCreditCard className="h-5 w-5" aria-hidden />,
    bullets: [
      'Conformité BCEAO, archivage légal',
      'Docu360 bancaire, workflows sécurisés',
      'Surveillance, audit et continuité',
    ],
  },
];

export default function SectorsSection() {
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
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Offres sectorielles
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
            Solutions verticales pour chaque secteur
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sectors.map((sector) => (
            <motion.article
              key={sector.title}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="rounded-2xl bg-white shadow-lg border border-slate-100 p-6 flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600">
                  {sector.icon}
                </span>
                {sector.title}
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                {sector.bullets.map((b) => (
                  <li key={b} className="flex gap-2 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm font-semibold text-slate-900">Sur devis & modulable</div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
