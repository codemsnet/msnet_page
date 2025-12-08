'use client';

import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

export default function TestimonialSection() {
  const testimonials = [
    {
      // Unsplash query images (target portraits of Black people)
      avatar:
        'https://tse1.mm.bing.net/th/id/OIP.FU7JCrqZbRtpMyDr9DO43wHaJQ?cb=ucfimg2&ucfimg=1&w=1365&h=1706&rs=1&pid=ImgDetMain&o=7&rm=3',
      quote:
        "L'attention au détail et la qualité du produit ont largement dépassé nos attentes. Une équipe professionnelle et réactive.",
      name: 'Moussa D.',
      role: 'Directeur IT',
      rating: 4.5,
    },
    {
      avatar:
        'https://static.vecteezy.com/system/resources/thumbnails/039/370/688/small_2x/ai-generated-young-beautiful-woman-sitting-on-a-chair-in-her-office-female-ceo-on-brown-suit-smiling-portrait-view-free-photo.jpg',
      quote:
        'La solution déployée a transformé notre manière de travailler. Excellente gouvernance projet et formation adaptée.',
      name: 'Aïssata T.',
      role: 'Responsable Projet',
      rating: 4.7,
    },
    {
      avatar:
        'https://tse1.mm.bing.net/th/id/OIP.6GpWTWqI_guBRhcinRN0NwHaHh?cb=ucfimg2&ucfimg=1&w=918&h=933&rs=1&pid=ImgDetMain&o=7&rm=3',
      quote:
        'Design et ergonomie irréprochables — nos utilisateurs ont adopté la plateforme en quelques semaines.',
      name: 'Jean K.',
      role: 'Chef de produit',
      rating: 4.6,
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-[var(--msnet-sky)]/12 via-white to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--msnet-sky)]/15 text-[var(--msnet-navy)] text-sm font-semibold border border-[var(--msnet-sky)]/25">
            <span className="h-2 w-2 rounded-full bg-[var(--screen-blue)]" /> Témoignages
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[var(--msnet-navy)]">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-[var(--text-main)] max-w-2xl mx-auto">
            Découvrez des retours authentiques de nos clients sur leurs expériences de
            transformation digitale.
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
