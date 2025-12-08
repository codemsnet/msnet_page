'use client';

import Image from 'next/image';
import React from 'react';

type Props = {
  imgURL?: string;
  icon?: React.ReactNode;
  label: string;
  subtext: string;
  circleColor?: string;
};

const ServiceCard: React.FC<Props> = ({
  imgURL,
  icon,
  label,
  subtext,
  circleColor = 'rgba(36, 161, 214, 0.12)',
}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16 bg-white/95 border border-[rgba(115,151,186,0.18)] backdrop-blur-sm">
      <div
        className="w-15 h-15 flex justify-center items-center rounded-full"
        style={{ backgroundColor: circleColor }}
      >
        {icon ? (
          <span className="flex items-center justify-center">{icon}</span>
        ) : imgURL ? (
          <Image src={imgURL} alt={label} width={100} height={100} />
        ) : null}
      </div>

      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-[var(--msnet-navy)]">
        {label}
      </h3>

      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-[var(--text-main)]">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
