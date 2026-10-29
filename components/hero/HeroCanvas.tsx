'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Volume2, Radio } from 'lucide-react';

interface HeroCanvasProps {
  className?: string;
}

export function HeroCanvas({ className = '' }: HeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHoveringCore, setIsHoveringCore] = useState<boolean>(false);
  const [isHoveringTip, setIsHoveringTip] = useState<boolean>(false);
  const [isHoveringTts, setIsHoveringTts] = useState<boolean>(false);
  const [isHoveringObs, setIsHoveringObs] = useState<boolean>(false);

  // Raw normalized mouse coordinates (-0.5 to 0.5)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smooth physics-based spring interpolation
  const springConfig = { damping: 22, stiffness: 140, mass: 0.6 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  // 3D Tilt angles (damped and silky)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  // Scaled-down layered multi-depth 3D parallax offsets
  const radarX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const radarY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const diamondRotate = useTransform(smoothX, [-0.5, 0.5], [40, 50]);
  const coreX = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const coreY = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  // Holographic HUD Badges (compact parallax float)
  const tipX = useTransform(smoothX, [-0.5, 0.5], [16, -16]);
  const tipY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);

  const ttsX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const ttsY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const obsX = useTransform(smoothX, [-0.5, 0.5], [12, -12]);
  const obsY = useTransform(smoothY, [-0.5, 0.5], [12, -12]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normX = Math.max(-0.5, Math.min(0.5, (e.clientX - centerX) / (rect.width * 1.5)));
      const normY = Math.max(-0.5, Math.min(0.5, (e.clientY - centerY) / (rect.height * 1.5)));

      rawX.set(normX);
      rawY.set(normY);
    };

    const handleMouseLeaveWindow = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [rawX, rawY]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] flex items-center justify-center select-none ${className}`}
      aria-label="Apex Stream Engine Interactive Visualizer"
    >
      {/* Dynamic Cursor Spotlight Aura (Scaled down) */}
      <motion.div
        className="absolute w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full pointer-events-none opacity-30 blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
          x: coreX,
          y: coreY,
        }}
      />

      {/* Main 3D Tilting Perspective Wrapper */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative flex items-center justify-center"
      >
        {/* Layer 1: Outer Broadcast Radar (Reduced scale: ~300px max) */}
        <motion.div
          style={{ x: radarX, y: radarY, translateZ: -15 }}
          className="w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full border border-dashed border-white/20 animate-[spin_80s_linear_infinite]"
        />

        {/* Layer 2: Middle Technical Coordinate Ring */}
        <motion.div
          style={{ translateZ: -8 }}
          className="absolute w-44 h-44 sm:w-52 sm:h-52 md:w-58 md:h-58 rounded-full border border-white/10"
        />

        {/* Layer 3: Rotated Blueprint Diamond */}
        <motion.div
          style={{ rotate: diamondRotate, translateZ: 8 }}
          className="absolute w-32 h-32 sm:w-36 sm:h-36 md:w-42 md:h-42 border border-white/20 transition-colors hover:border-white/40"
        />

        {/* Layer 4: Center Apex Rupee Core (Compact: 64px - 72px) */}
        <motion.div
          style={{ x: coreX, y: coreY, translateZ: 30 }}
          onMouseEnter={() => setIsHoveringCore(true)}
          onMouseLeave={() => setIsHoveringCore(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="absolute w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-black border-2 border-white flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer group transition-all"
        >
          {/* Dynamic Light Sheen overlay */}
          <div
            className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 45% 35%, rgba(255,255,255,0.6) 0%, transparent 60%)',
            }}
          />

          <span className="font-mono text-xl sm:text-2xl font-black text-white tracking-widest leading-none relative z-10 transition-transform group-hover:scale-110">
            ₹
          </span>
          <span className="text-[8px] sm:text-[9px] text-white/80 font-bold mt-0.5 tracking-wider relative z-10">
            ▲PEX
          </span>

          {/* Active Ping Beacon */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-[0_0_8px_white]" />
          </span>

          {/* Interactive Core Ripple */}
          {isHoveringCore && (
            <motion.span
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-white pointer-events-none"
            />
          )}
        </motion.div>

        {/* Outer Orbiting Satellite Beacon */}
        <motion.div
          style={{ translateZ: 5 }}
          className="absolute w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full animate-[spin_16s_linear_infinite] pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_white]" />
        </motion.div>

        {/* Intermediate Counter-Rotating Orbital Node */}
        <motion.div
          style={{ translateZ: 10 }}
          className="absolute w-44 h-44 sm:w-52 sm:h-52 md:w-58 md:h-58 rounded-full animate-[spin_22s_linear_infinite_reverse] pointer-events-none"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/70 rounded-full shadow-[0_0_6px_white]" />
        </motion.div>

        {/* Floating Holographic Alert 1: Live ₹500 Tip Alert (Compact, Top-Right) */}
        <motion.div
          style={{
            x: tipX,
            y: tipY,
            translateZ: 50,
          }}
          onMouseEnter={() => setIsHoveringTip(true)}
          onMouseLeave={() => setIsHoveringTip(false)}
          whileHover={{ scale: 1.05 }}
          className={`absolute -top-6 sm:-top-8 -right-2 sm:-right-4 md:-right-6 bg-black/95 border p-2 sm:p-2.5 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.9)] flex items-center gap-2.5 backdrop-blur-md cursor-pointer transition-colors duration-200 ${
            isHoveringTip ? 'border-white shadow-[0_0_25px_rgba(255,255,255,0.15)]' : 'border-white/40'
          }`}
        >
          <div className="w-6 h-6 rounded-md bg-white text-black font-mono font-black flex items-center justify-center text-xs shadow-xs">
            ₹
          </div>
          <div>
            <div className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE UPI TIP
            </div>
            <div className="font-mono text-xs font-bold text-white mt-0.5">
              + ₹500.00
            </div>
          </div>
        </motion.div>

        {/* Floating Holographic Alert 2: Neural Text-to-Speech Waveform (Compact, Top-Left) */}
        <motion.div
          style={{
            x: ttsX,
            y: ttsY,
            translateZ: 45,
          }}
          onMouseEnter={() => setIsHoveringTts(true)}
          onMouseLeave={() => setIsHoveringTts(false)}
          whileHover={{ scale: 1.05 }}
          className={`absolute top-0 sm:-top-2 -left-2 sm:-left-4 md:-left-6 bg-black/95 border p-2 sm:p-2.5 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.9)] flex items-center gap-2.5 backdrop-blur-md cursor-pointer transition-colors duration-200 ${
            isHoveringTts ? 'border-white shadow-[0_0_25px_rgba(255,255,255,0.15)]' : 'border-white/30'
          }`}
        >
          <Volume2 className="w-3.5 h-3.5 text-white shrink-0 animate-pulse" />
          <div>
            <span className="font-mono text-[8px] text-neutral-400 block tracking-wider">
              TTS VOICE SYNTH
            </span>
            <div className="flex items-end gap-0.5 h-2.5 mt-1">
              {[3, 8, 5, 10, 6, 9, 4, 8, 5, 10].map((h, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-white transition-all"
                  style={{
                    height: isHoveringTts ? `${Math.min(12, h * 1.3)}px` : `${h}px`,
                    animation: 'pulse 1s infinite',
                    animationDelay: `${i * 80}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Holographic Alert 3: OBS Browser Source Status (Compact, Bottom-Right) */}
        <motion.div
          style={{
            x: obsX,
            y: obsY,
            translateZ: 40,
          }}
          onMouseEnter={() => setIsHoveringObs(true)}
          onMouseLeave={() => setIsHoveringObs(false)}
          whileHover={{ scale: 1.05 }}
          className={`absolute -bottom-6 sm:-bottom-8 right-1 sm:right-3 md:right-4 bg-black/95 border px-3 py-1.5 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.9)] flex items-center gap-2 backdrop-blur-md font-mono text-[9px] text-neutral-300 cursor-pointer transition-colors duration-200 ${
            isHoveringObs ? 'border-white shadow-[0_0_25px_rgba(255,255,255,0.15)]' : 'border-white/30'
          }`}
        >
          <Radio className="w-3 h-3 text-white animate-pulse" />
          <span className="font-bold text-white">OBS SOURCE</span>
          <span className="text-neutral-500">|</span>
          <span className="text-emerald-400">{isHoveringObs ? '12MS' : '18MS'}</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
