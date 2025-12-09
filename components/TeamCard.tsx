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
      className="relative overflow-hidden bg-white/96 rounded-3xl shadow-[0_18px_50px_rgba(11,40,66,0.08)] border border-[rgba(115,151,186,0.18)] p-7 flex flex-col items-center text-center backdrop-blur-sm"
    >
      <div className="relative w-32 h-32 rounded-full border-4 border-[var(--msnet-sky)]/35 shadow-[0_10px_30px_rgba(11,40,66,0.12)] overflow-hidden">
        <Image src={photo} alt={name} fill sizes="128px" className="object-cover" priority />
      </div>

      <h3 className="mt-4 text-xl font-semibold text-[var(--msnet-navy)]">{name}</h3>
      <p className="text-sm text-[var(--screen-blue)] font-semibold">{role}</p>
      {bio && <p className="mt-3 text-sm text-[var(--text-main)] leading-relaxed">{bio}</p>}

      {socials.length > 0 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--msnet-navy)] text-white border border-[rgba(115,151,186,0.25)] hover:bg-[var(--screen-blue)] transition-colors"
              aria-label={`${s.platform} profile of ${name}`}
            >
              {iconMap[s.platform]}
            </a>
          ))}
        </div>
      )}

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-[var(--msnet-sky)] via-[var(--screen-blue)] to-transparent opacity-70" />
    </motion.article>
  );
}
