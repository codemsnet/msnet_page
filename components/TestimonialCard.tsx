'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

type Props = {
  avatar?: string;
  quote: string;
  name: string;
  role?: string;
  rating?: number; // 0-5
};

export default function TestimonialCard({ avatar, quote, name, role, rating = 5 }: Props) {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <FaStar
      key={i}
      className={`inline-block w-4 h-4 ${
        i < Math.round(rating) ? 'text-rose-500' : 'text-gray-200'
      }`}
    />
  ));

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="w-full max-w-md mx-auto text-center bg-white rounded-2xl p-6 shadow-lg"
    >
      <div className="flex justify-center -mt-12">
        <img
          src={avatar ?? '/assets/avatars/default.jpg'}
          alt={name}
          width={112}
          height={112}
          className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-md"
        ></img>
      </div>

      <blockquote className="mt-6 text-slate-800 text-lg leading-relaxed font-medium">
        “{quote}”
      </blockquote>

      <div className="mt-4">
        <div className="text-sm font-semibold text-slate-900">{name}</div>
        {role && <div className="text-xs text-slate-500">{role}</div>}
      </div>

      <div className="mt-4">
        <div className="inline-flex items-center gap-2">
          {stars}
          <span className="ml-2 text-sm text-slate-600">({rating.toFixed(1)})</span>
        </div>
      </div>
    </motion.article>
  );
}
