'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CornerBorders } from '@/components/ui/CornerBorders';
import { Plus, Minus } from 'lucide-react';

export function FaqSection() {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);

  const toggleItem = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="relative py-24 md:py-36 border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 blueprint-dot-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="005"
          tag="FREQUENTLY ASKED QUESTIONS"
          title="Direct answers. Zero corporate fluff."
          description="Everything you need to know about payouts, OBS integration, zero follower requirements, and viewer moderation."
        />

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
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-mono transition-colors focus:outline-hidden focus:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-neutral-400">
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

