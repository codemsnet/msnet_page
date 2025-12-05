'use client';

import { motion } from 'framer-motion';
import { FiBook, FiCloud, FiCode, FiHeadphones } from 'react-icons/fi';
import ServiceCard from './ServiceCard';

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Votre Expérience,{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-orange-500">
              Notre Engagement
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous mettons tout en œuvre pour rendre votre shopping simple, sécurisé et agréable
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <div className="flex gap-6 overflow-x-auto py-4 px-2">
            <ServiceCard
              icon={<FiCode className="w-5 h-5 text-white" />}
              label="Développement Web & Applications"
              subtext="Conception d'applications Web et mobiles, intégrations API et plateformes sur-mesure."
              circleColor="#0ea5e9"
            />
            <ServiceCard
              icon={<FiCloud className="w-5 h-5 text-white" />}
              label="Cloud & Infrastructures"
              subtext="Cloud souverain, hébergement hybride, sauvegarde et continuité d'activité."
              circleColor="#7c3aed"
            />
            <ServiceCard
              icon={<FiBook className="w-5 h-5 text-white" />}
              label="Conseil, Audit & Formation"
              subtext="Gouvernance, audits institutionnels et formations certifiantes pour vos équipes."
              circleColor="#06b6d4"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-gray-100"
        >
          <p className="text-gray-700 mb-2">Une question sur nos services ?</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300">
            <FiHeadphones className="w-4 h-4" />
            Contacter notre équipe
          </button>
        </motion.div>
      </div>
    </section>
  );
}
