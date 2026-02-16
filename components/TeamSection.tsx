'use client';

import { motion } from 'framer-motion';
import TeamCard from './TeamCard';

const team: {
  name: string;
  role: string;
  bio: string;
  photo: string;
  socials: { platform: 'linkedin' | 'instagram' | 'facebook'; url: string }[];
}[] = [
  {
    name: 'Fatoumata Keïta',
    role: 'CEO & Strategy',
    bio: 'Vision, partenariats et transformation pour nos clients publics et privés.',
    photo: '/assets/images/faces/gettyimages-686389490-612x612.jpg',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
    ],
  },
  {
    name: 'Mamadou Traoré',
    role: 'CTO & Cloud',
    bio: 'Architecture, sécurité et delivery de plateformes critiques.',
    photo: '/assets/images/faces/gettyimages-1673644196-612x612.jpg',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'facebook', url: 'https://facebook.com' },
    ],
  },
  {
    name: 'Aïssata Diallo',
    role: 'Design & Produit',
    bio: 'Expériences utilisateur premium, branding et storytelling produit.',
    photo: '/assets/images/faces/gettyimages-1194465573-612x612.jpg',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-linear-to-b from-[var(--msnet-sky)]/12 via-white to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--msnet-sky)]/15 text-[var(--msnet-navy)] text-sm font-semibold border border-[var(--msnet-sky)]/25">
            <span className="h-2 w-2 rounded-full bg-[var(--screen-blue)]" /> Notre équipe
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--msnet-navy)]">
            Les femmes et hommes derrière MSNET | ELIKIA | SCREEN
          </h2>
          <p className="mt-4 text-[var(--text-main)] max-w-3xl mx-auto">
            Une équipe pluridisciplinaire qui mène vos projets avec fierté, exigence et créativité —
            du conseil à l&apos;architecture, jusqu&apos;au design et à la réussite utilisateur.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
