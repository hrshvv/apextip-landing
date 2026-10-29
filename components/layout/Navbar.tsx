'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MENU_ITEMS = [
  { number: '01', title: 'HERO', href: '#hero' },
  { number: '02', title: 'HOW IT WORKS', href: '#how-it-works' },
  { number: '03', title: 'FEATURES & WHY APEX', href: '#features' },
  { number: '04', title: 'FAQ & TRUST', href: '#faq' },
  { number: '05', title: 'EARLY ACCESS', href: '#early-access' },
];

const SOCIAL_LINKS = [
  { label: 'YouTube', href: '#' },
  { label: 'Twitch', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Discord', href: '#' },
];

// High-end cinematic easing curve
const CURTAIN_TRANSITION = {
  duration: 0.65,
  ease: [0.76, 0, 0.24, 1] as const,
};

const TEXT_REVEAL_TRANSITION = (index: number) => ({
  duration: 0.55,
  delay: 0.18 + index * 0.05,
  ease: [0.16, 1, 0.3, 1] as const,
});

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll during full-screen menu overlay
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Capsule Bar (Persistent at top level z-50) */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="w-full max-w-[420px] sm:max-w-[460px] relative pointer-events-auto">
          <div
            className={`bg-[#0d0d0e]/90 backdrop-blur-md border border-white/15 rounded-2xl p-1.5 sm:p-2 flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.8)] transition-all duration-300 ${
              scrolled || isOpen ? 'border-white/30 bg-[#0a0a0b]/95' : 'hover:border-white/25'
            }`}
          >
            {/* Left: White rounded logo card */}
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="bg-white text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl flex items-center gap-1.5 font-mono font-black text-sm tracking-widest uppercase transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-hidden shadow-xs"
              aria-label="Apex Tip Home"
            >
              <span>APEX</span>
              <span className="text-xs font-bold text-neutral-800">▲</span>
              <span>TIP</span>
            </a>

            {/* Right: Butter-smooth MENU / CLOSE Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2.5 pr-4 pl-3 py-2 text-white hover:text-neutral-300 font-mono text-xs sm:text-sm font-bold tracking-widest transition-colors focus:outline-hidden cursor-pointer group"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center gap-2"
                  >
                    <span className="tracking-widest">CLOSE</span>
                    <X className="w-4 h-4 text-white transition-transform group-hover:rotate-90" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="tracking-widest">MENU</span>
                    <div className="flex flex-col justify-center gap-1.5 w-4 sm:w-5">
                      <span className="h-0.5 w-full bg-white rounded-full transition-transform group-hover:scale-x-110" />
                      <span className="h-0.5 w-full bg-white rounded-full transition-transform group-hover:scale-x-110" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Cinematic Full-Screen Dropdown Curtain with Masked Text Reveal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="fullscreen-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={CURTAIN_TRANSITION}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 bg-[#0c0c0e] h-screen w-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden select-none"
          >
            {/* Subtle background blueprint dot grid */}
            <div className="absolute inset-0 blueprint-dot-grid-subtle opacity-10 pointer-events-none" />

            {/* Central Navigation Stack with Masked Slide-Up Effect */}
            <div className="w-full max-w-6xl mx-auto my-auto relative z-10 flex flex-col justify-center">
              <nav className="flex flex-col w-full">
                {MENU_ITEMS.map((item, index) => (
                  <div key={item.number} className="relative w-full">
                    {/* Masked Link Container */}
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline py-2.5 sm:py-3.5 md:py-4 transition-colors cursor-pointer w-full overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: '130%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '100%', opacity: 0 }}
                        transition={TEXT_REVEAL_TRANSITION(index)}
                        className="flex items-baseline w-full"
                      >
                        {/* Item index number */}
                        <span className="font-mono text-xs sm:text-sm text-neutral-500 mr-4 sm:mr-8 md:mr-10 group-hover:text-white transition-colors shrink-0">
                          {item.number}
                        </span>

                        {/* Main Headline Label */}
                        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-mono tracking-tight text-white group-hover:text-neutral-300 group-hover:translate-x-2 transition-all uppercase leading-tight">
                          {item.title}
                        </span>
                      </motion.div>
                    </a>

                    {/* Sweeping Hairline Divider */}
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.15 + index * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-px w-full bg-white/10 origin-left"
                    />
                  </div>
                ))}
              </nav>
            </div>

            {/* Bottom Bar: Direct Email on Left, Social Links on Right */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.38, duration: 0.45, ease: 'easeOut' }}
              className="w-full max-w-6xl mx-auto pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs sm:text-sm text-neutral-400 relative z-10 border-t border-white/5"
            >
              <a
                href="mailto:access@apextip.live"
                className="hover:text-white transition-colors tracking-wider"
              >
                access@apextip.live
              </a>

              <div className="flex items-center gap-6 sm:gap-8">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="hover:text-white transition-colors tracking-wider text-xs sm:text-sm"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
