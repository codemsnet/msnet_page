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
  circleColor = '#ef4444',
}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 bg-white">
      <div
        className="w-11 h-11 flex justify-center items-center rounded-full"
        style={{ backgroundColor: circleColor }}
      >
        {icon ? (
          <span className="flex items-center justify-center">{icon}</span>
        ) : imgURL ? (
          <Image src={imgURL} alt={label} width={24} height={24} />
        ) : null}
      </div>

      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-slate-900">
        {label}
      </h3>

      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-600">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
