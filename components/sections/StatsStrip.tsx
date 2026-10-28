'use client';

import React from 'react';
import { STATS_STRIP } from '@/lib/constants';
import { CornerBorders } from '@/components/ui/CornerBorders';

export function StatsStrip() {
  return (
    <section className="relative border-b border-white/10 bg-neutral-950/60 py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Technical Label */}
        <div className="flex items-center justify-between mb-8 font-mono text-[10px] text-neutral-500 tracking-widest border-b border-white/5 pb-2">
          <span>{'//'} 002 TELEMETRY & PRODUCT CONSTRAINTS</span>
          <span className="hidden sm:inline">DATA_SOURCE: NATIVE_ENGINE</span>
          <span>STATUS: REAL_VALUES</span>
        </div>

        {/* 4-Column Technical Product Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS_STRIP.map((stat, index) => (
            <div
              key={index}
              className="relative p-5 sm:p-6 bg-neutral-900/50 border border-white/10 bracket-corners group hover:border-white/30 transition-colors"
            >
              <CornerBorders size={6} color="rgba(255,255,255,0.3)" />

              {/* Number Index */}
              <div className="flex items-center justify-between text-neutral-500 font-mono text-[10px] mb-3">
                <span>INDEX [0{index + 1}]</span>
                <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors" />
              </div>

              {/* Stat Value */}
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight mb-1">
                {stat.value}
              </div>

              {/* Metric Label */}
              <div className="font-mono text-xs tracking-wider text-neutral-300 font-semibold uppercase mb-2">
                {stat.label}
              </div>

              {/* Metric Detail */}
              <div className="font-sans text-xs text-neutral-400 leading-normal">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
