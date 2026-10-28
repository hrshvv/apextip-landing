'use client';

import React from 'react';
import { WHO_ITS_FOR_ITEMS } from '@/lib/constants';
import { CornerBorders } from '@/components/ui/CornerBorders';
import { Gamepad2, Video, Mic, GraduationCap } from 'lucide-react';

export function WhoItsFor() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Gamepad2 className="w-4 h-4 text-white" />;
      case 1:
        return <Video className="w-4 h-4 text-white" />;
      case 2:
        return <Mic className="w-4 h-4 text-white" />;
      case 3:
      default:
        return <GraduationCap className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="who-its-for" className="relative py-20 border-b border-white/10 overflow-hidden bg-neutral-950/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8 font-mono text-[10px] text-neutral-500 tracking-widest border-b border-white/10 pb-2">
          <span>{'//'} SEGMENTED BROADCAST MATRIX</span>
          <span>SUPPORTED FORMATS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHO_ITS_FOR_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className="p-5 bg-black border border-white/10 hover:border-white/30 transition-colors bracket-corners group"
            >
              <CornerBorders size={6} color="rgba(255,255,255,0.25)" />

              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 border border-white/20 flex items-center justify-center bg-white/5 group-hover:border-white transition-colors">
                  {getIcon(idx)}
                </div>
                <span className="font-mono text-[9px] text-neutral-400">
                  {item.tag}
                </span>
              </div>

              <h4 className="font-mono text-sm font-bold text-white mb-1.5 uppercase">
                {item.title}
              </h4>

              <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
