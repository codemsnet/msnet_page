'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiHeadphones } from 'react-icons/fi';
import ServiceCard from './ServiceCard';

export default function BenefitsSection() {
  return (
    <section
      id="catalogue"
      className="py-16 bg-linear-to-b from-[var(--msnet-sky)]/10 via-white to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--msnet-navy)] mb-4">
            Votre Expérience,{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[var(--msnet-sky)] to-[var(--screen-blue)]">
              Notre Engagement
            </span>
          </h2>
          <p className="text-[var(--text-main)] max-w-2xl mx-auto">
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
              icon={
                <Image
                  src="/assets/icons/card_icons/code.png"
                  alt="Web Dev"
                  width={150}
                  height={150}
                />
              }
              label="Développement Web & Applications"
              subtext="Conception d'applications Web et mobiles, intégrations API et plateformes sur-mesure."
              circleColor="rgba(36, 161, 214, 0.12)"
            />
            <ServiceCard
              icon={
                <Image
                  src="/assets/icons/card_icons/cloud-computing.png"
                  alt="Cloud"
                  width={150}
                  height={150}
                />
              }
              label="Cloud & Infrastructures"
              subtext="Cloud souverain, hébergement hybride, sauvegarde et continuité d'activité."
              circleColor="rgba(36, 161, 214, 0.12)"
            />
            <ServiceCard
              icon={
                <Image
                  src="/assets/icons/card_icons/quality-service.png"
                  alt="Cloud"
                  width={150}
                  height={150}
                />
              }
              label="Conseil, Audit & Formation"
              subtext="Gouvernance, audits institutionnels et formations certifiantes pour vos équipes."
              circleColor="rgba(36, 161, 214, 0.12)"
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
          <p className="text-[var(--text-main)] mb-2">Une question sur nos services ?</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--msnet-navy)] text-white rounded-xl font-semibold border border-[rgba(115,151,186,0.35)] shadow-lg hover:bg-[var(--msnet-navy)]/90 transition-colors duration-300">
            <FiHeadphones className="w-4 h-4" />
            Contacter notre équipe
          </button>
        </motion.div>
      </div>
    </section>
  );
}
