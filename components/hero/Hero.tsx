'use client';

import React from 'react';
import { HERO_CONTENT, BRAND_CONFIG } from '@/lib/constants';
import { BlueprintButton } from '@/components/ui/BlueprintButton';
import { HeroCanvas } from './HeroCanvas';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-64px)] flex items-center pt-24 pb-16 md:py-24 border-b border-white/10 overflow-hidden"
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-dot-grid opacity-25 pointer-events-none" />

      {/* Decorative technical corner crosshairs for the entire hero container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Blueprint Header Line */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs px-2 py-0.5 border border-white/20 text-white/80 bg-white/5">
                {'//'} {HERO_CONTENT.sectionNumber}
              </span>
              <div className="w-12 h-px bg-white/30" />
              <span className="font-mono text-[11px] tracking-widest text-neutral-400">
                {BRAND_CONFIG.estYear}
              </span>
              <div className="flex-1 h-px bg-white/10" />
              <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-neutral-500">
                {HERO_CONTENT.systemStatus}
              </span>
            </div>

            {/* Main Headline */}
            <div className="relative mb-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight text-white uppercase leading-[1.1]">
                {HERO_CONTENT.headlineMain}
                <span className="block text-neutral-300 mt-1">
                  {HERO_CONTENT.headlineSub}
                </span>
              </h1>
            </div>

            {/* Subtitle / Product description */}
            <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed max-w-xl mb-8">
              {HERO_CONTENT.description}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <BlueprintButton
                variant="primary"
                size="lg"
                asAnchor
                href="#early-access"
              >
                {HERO_CONTENT.primaryCta}
              </BlueprintButton>

              <BlueprintButton
                variant="secondary"
                size="lg"
                asAnchor
                href="#how-it-works"
              >
                {HERO_CONTENT.secondaryCta}
              </BlueprintButton>
            </div>

            {/* Trust Line & Hairline Rule */}
            <div className="pt-4 border-t border-white/10 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse" />
                <span>{HERO_CONTENT.trustBadge}</span>
              </div>
            </div>

            {/* Technical Hardware Specs Strip */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 pt-4 border-t border-white/5 max-w-xl">
              {HERO_CONTENT.technicalSpecs.map((spec, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-mono text-[9px] text-neutral-500 tracking-wider">
                    {spec.label}
                  </span>
                  <span className="font-mono text-xs text-neutral-300 font-semibold mt-0.5">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Column: Interactive Blueprint Vector Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <HeroCanvas />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
