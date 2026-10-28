'use client';

import React from 'react';

interface SectionHeaderProps {
  number: string;
  tag: string;
  title: string;
  description?: string;
  inverted?: boolean;
}

export function SectionHeader({
  number,
  tag,
  title,
  description,
  inverted = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16 max-w-3xl">
      {/* Section index tracker */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`font-mono text-xs tracking-widest px-2 py-0.5 border ${
            inverted
              ? 'border-neutral-900 text-neutral-900 bg-neutral-100 font-bold'
              : 'border-white/20 text-white/70 bg-white/5'
          }`}
        >
          {'//'} {number}
        </span>
        <div className={`h-px flex-1 ${inverted ? 'bg-neutral-300' : 'bg-white/10'}`} />
        <span
          className={`font-mono text-[11px] tracking-widest uppercase ${
            inverted ? 'text-neutral-600' : 'text-neutral-400'
          }`}
        >
          {tag}
        </span>
      </div>

      {/* Main Section Heading */}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-tight uppercase leading-tight ${
          inverted ? 'text-black' : 'text-white'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-2xl ${
            inverted ? 'text-neutral-700' : 'text-neutral-400'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
