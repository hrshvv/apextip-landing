'use client';

import React, { useState } from 'react';
import { CornerBorders } from '@/components/ui/CornerBorders';

interface HeroCanvasProps {
  className?: string;
}

export function HeroCanvas({ className = '' }: HeroCanvasProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[540px] bg-neutral-950/80 border border-white/15 flex flex-col items-center justify-center overflow-hidden bracket-corners group transition-all duration-300 ${className}`}
      aria-label="Apex Stream Engine Blueprint Canvas"
    >
      <CornerBorders size={12} color="rgba(255,255,255,0.5)" />

      {/* Blueprint background grid */}
      <div className="absolute inset-0 blueprint-dot-grid opacity-30 pointer-events-none" />

      {/* Crosshair coordinate axes */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-white/10 pointer-events-none" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/10 pointer-events-none" />

      {/* Interactive 3D perspective wrapper with mouse tilt */}
      <div
        className="relative flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
        }}
      >
        {/* Outer dashed radar circle */}
        <div className="w-64 h-64 sm:w-76 sm:h-76 rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />

        {/* Medium technical circle */}
        <div className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-white/15" />

        {/* Outer octagon/square blueprint ring */}
        <div className="absolute w-44 h-44 sm:w-52 sm:h-52 border border-white/20 rotate-12 transition-transform duration-700 group-hover:rotate-45" />

        {/* Rotated technical blueprint square */}
        <div className="absolute w-36 h-36 sm:w-44 sm:h-44 border border-white/35 rotate-45 transition-transform duration-700 group-hover:rotate-90" />

        {/* Inner concentric technical square */}
        <div className="absolute w-24 h-24 sm:w-28 sm:h-28 border border-white/45" />

        {/* Center Indian ₹ Coin / Streamer Engine Core */}
        <div className="absolute w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/10 border-2 border-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.12)]">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-widest">
            ₹
          </span>
          {/* Pulsing center ping */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
        </div>

        {/* Orbiting broadcast satellite marker 1 */}
        <div className="absolute w-60 h-60 sm:w-68 sm:h-68 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_white]" />
        </div>

        {/* Orbiting counter-satellite marker 2 */}
        <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full animate-[spin_14s_linear_infinite_reverse] pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>
      </div>

      {/* Top technical telemetry tag */}
      <div className="absolute top-3 left-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        <span className="font-mono text-[10px] tracking-widest text-neutral-300">
          SYS.BLUEPRINT_ENGINE // ONLINE
        </span>
      </div>

      {/* Top right axis notation */}
      <div className="absolute top-3 right-4 font-mono text-[9px] text-neutral-400 tracking-widest">
        AXIS: [X: {mousePos.x.toFixed(1)} · Y: {(-mousePos.y).toFixed(1)}]
      </div>

      {/* Bottom technical specs */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-neutral-400 border-t border-white/10 pt-2">
        <span>FPS: 60.0 // VECTOR MATRIX</span>
        <span className="hidden sm:inline">NATIVE ZERO-LATENCY CANVAS</span>
        <span>STATUS: ACTIVE</span>
      </div>
    </div>
  );
}

