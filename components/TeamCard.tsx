'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { JSX } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

type Social = {
  platform: 'linkedin' | 'facebook' | 'instagram';
  url: string;
};

type Props = {
  name: string;
  role: string;
  bio?: string;
  photo: string;
  socials?: Social[];
};

const iconMap: Record<Social['platform'], JSX.Element> = {
  linkedin: <FaLinkedinIn className="h-4 w-4" aria-hidden />,
  facebook: <FaFacebookF className="h-4 w-4" aria-hidden />,
  instagram: <FaInstagram className="h-4 w-4" aria-hidden />,
};

export default function TeamCard({ name, role, bio, photo, socials = [] }: Props) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 flex flex-col items-center text-center"
    >
      <div className="relative w-28 h-28">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="112px"
          className="rounded-full object-cover shadow-md"
          priority
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
      <p className="text-sm text-emerald-600 font-semibold">{role}</p>
      {bio && <p className="mt-3 text-sm text-slate-600 leading-relaxed">{bio}</p>}

      {socials.length > 0 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-emerald-500 transition-colors"
              aria-label={`${s.platform} profile of ${name}`}
            >
              {iconMap[s.platform]}
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}
