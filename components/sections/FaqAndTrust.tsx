'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CornerBorders } from '@/components/ui/CornerBorders';
import { Plus, Minus, ShieldCheck, Scale, LockKeyhole } from 'lucide-react';

export function FaqAndTrust() {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);

  const toggleItem = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="relative py-24 md:py-36 border-b border-white/10 overflow-hidden bg-neutral-950/40">
      <div className="absolute inset-0 blueprint-dot-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 004 Header */}
        <SectionHeader
          number="004"
          tag="FAQ & TRUST ASSURANCE"
          title="Direct answers. Removing all doubts about fees, payouts, and safety."
          description="Everything you need to know about bank settlement schedules, OBS overlay latency, zero follower minimums, and canvas moderation."
        />

        {/* Financial Trust & Safety Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          
          <div className="p-4 bg-neutral-950 border border-white/15 bracket-corners">
            <CornerBorders size={6} color="rgba(255,255,255,0.3)" />
            <div className="flex items-center gap-2 mb-2 text-white">
              <Scale className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs font-bold">RBI ALIGNED</span>
            </div>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              Built on certified Indian payment gateways adhering to digital settlement frameworks.
            </p>
          </div>

          <div className="p-4 bg-neutral-950 border border-white/15 bracket-corners">
            <CornerBorders size={6} color="rgba(255,255,255,0.3)" />
            <div className="flex items-center gap-2 mb-2 text-white">
              <LockKeyhole className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs font-bold">FEES TRANSPARENT</span>
            </div>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              Shown clearly before you sign up. Zero hidden currency conversion or forex deductions.
            </p>
          </div>

          <div className="p-4 bg-neutral-950 border border-white/15 bracket-corners">
            <CornerBorders size={6} color="rgba(255,255,255,0.3)" />
            <div className="flex items-center gap-2 mb-2 text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs font-bold">CANVAS SAFETY</span>
            </div>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              Automated profanity blacklists and manual hold-before-play mode keep your stream safe.
            </p>
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-neutral-950 border border-white/10 hover:border-white/25 transition-colors bracket-corners"
              >
                <CornerBorders size={6} color="rgba(255,255,255,0.25)" />

                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-mono transition-colors focus:outline-hidden focus:bg-white/5 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-neutral-400 font-mono">
                      [0{index + 1}]
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {item.question}
                    </span>
                  </div>

                  <span className="shrink-0 p-1 border border-white/20 text-neutral-400">
                    {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-5 pb-5 pt-1 border-t border-white/5 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

