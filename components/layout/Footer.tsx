'use client';

import React from 'react';
import { FOOTER_CONTENT, BRAND_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/15 pt-16 pb-12 overflow-hidden">
      {/* Blueprint grid subtle */}
      <div className="absolute inset-0 blueprint-dot-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-white flex items-center justify-center font-mono font-black text-xs bg-white text-black">
                {BRAND_CONFIG.symbol}
              </div>
              <span className="font-mono text-lg font-bold tracking-widest text-white">
                {FOOTER_CONTENT.brandName}
              </span>
            </div>

            <p className="font-mono text-xs text-neutral-400 max-w-sm leading-relaxed">
              {FOOTER_CONTENT.brandTagline}
            </p>

            <div className="pt-2">
              <span className="inline-block font-mono text-[10px] text-neutral-500 border border-white/10 px-2.5 py-1 bg-neutral-950">
                {BRAND_CONFIG.license} {'//'} {BRAND_CONFIG.estYear}
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_CONTENT.navColumns.map((col, idx) => (
              <div key={idx} className="space-y-3">
                <div className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                  {'//'} {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="font-mono text-xs text-neutral-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Engineering Status Footer Bar (Matching the user's reference hero) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-neutral-400">
          
          {/* Left: System status & active equalizer bars */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">{BRAND_CONFIG.systemStatus}</span>
            </div>

            {/* Audio / telemetry visualizer bars */}
            <div className="hidden sm:flex items-end gap-1 h-3.5 px-2 py-0.5 border-l border-r border-white/10">
              {[6, 12, 8, 14, 10, 15, 7, 11].map((h, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-white/40"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>

            <span className="text-neutral-400">
              {FOOTER_CONTENT.statusDetails.region}
            </span>
          </div>

          {/* Right: Copyright & Latency */}
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">
              LATENCY: {FOOTER_CONTENT.statusDetails.apiLatency}
            </span>
            <span className="text-neutral-400">
              {FOOTER_CONTENT.copyright}
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
