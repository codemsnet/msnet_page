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
        i < Math.round(rating) ? 'text-[var(--screen-blue)]' : 'text-slate-200'
      }`}
    />
  ));

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative w-full max-w-md mx-auto text-center bg-white/96 rounded-3xl p-7 shadow-[0_18px_50px_rgba(11,40,66,0.08)] border border-[rgba(115,151,186,0.18)] backdrop-blur-sm"
    >
      <div className="flex justify-center -mt-14">
        <img
          src={avatar ?? '/assets/avatars/default.jpg'}
          alt={name}
          width={112}
          height={112}
          className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-[0_10px_30px_rgba(11,40,66,0.14)] border-4 border-[var(--msnet-sky)]/35"
        ></img>
      </div>

      <blockquote className="mt-6 text-[var(--msnet-navy)] text-lg leading-relaxed font-semibold">
        “{quote}”
      </blockquote>

      <div className="mt-4">
        <div className="text-sm font-semibold text-[var(--msnet-navy)]">{name}</div>
        {role && <div className="text-xs text-[var(--text-main)]/80">{role}</div>}
      </div>

      <div className="mt-4">
        <div className="inline-flex items-center gap-2">
          {stars}
          <span className="ml-2 text-sm text-[var(--text-main)]">({rating.toFixed(1)})</span>
        </div>
      </div>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-[var(--msnet-sky)] via-[var(--screen-blue)] to-transparent opacity-70" />
    </motion.article>
  );
}
