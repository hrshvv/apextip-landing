'use client';

import React from 'react';
import { WHY_APEX_POINTS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CornerBorders } from '@/components/ui/CornerBorders';

export function WhyApex() {
  return (
    <section id="why-us" className="relative py-24 md:py-36 border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 blueprint-dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="005"
          tag="CORE ADVANTAGES"
          title="Engineered around Indian creators' reality."
          description="Foreign tipping software wasn't designed for UPI, local banks, or small creators starting from zero followers. Apex Tip is."
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_APEX_POINTS.map((point) => (
            <div
              key={point.code}
              className="relative p-6 sm:p-8 bg-neutral-950 border border-white/10 hover:border-white/30 transition-colors bracket-corners group"
            >
              <CornerBorders size={8} color="rgba(255,255,255,0.3)" />

              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs px-2 py-0.5 border border-white/20 text-white/80 bg-white/5">
                  {'//'} {point.code}
                </span>
                <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase">
                  {point.subtitle}
                </span>
              </div>

              <h3 className="font-mono text-xl font-bold text-white mb-3">
                {point.title}
              </h3>

              <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
