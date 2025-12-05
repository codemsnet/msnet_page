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
    photo:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
    ],
  },
  {
    name: 'Mamadou Traoré',
    role: 'CTO & Cloud',
    bio: 'Architecture, sécurité et delivery de plateformes critiques.',
    photo:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'facebook', url: 'https://facebook.com' },
    ],
  },
  {
    name: 'Aïssata Diallo',
    role: 'Design & Produit',
    bio: 'Expériences utilisateur premium, branding et storytelling produit.',
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Notre équipe
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
            Les femmes et hommes derrière MSNET | ELIKIA | SCREEN
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
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
