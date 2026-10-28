'use client';

import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG, NAV_LINKS, HERO_CONTENT } from '@/lib/constants';
import { BlueprintButton } from '@/components/ui/BlueprintButton';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-white/15'
          : 'bg-black/40 backdrop-blur-xs border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-hidden"
            aria-label="Apex Tip Home"
          >
            <div className="w-7 h-7 border border-white flex items-center justify-center font-mono text-xs font-black bg-white text-black transition-transform group-hover:scale-105">
              {BRAND_CONFIG.symbol}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-sm sm:text-base font-bold tracking-widest text-white">
                {BRAND_CONFIG.name}
              </span>
              <span className="hidden sm:inline-block font-mono text-[9px] text-neutral-500 tracking-wider">
                {BRAND_CONFIG.estYear}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-neutral-400 hover:text-white transition-colors duration-150 tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Request Access CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-white/10 text-[10px] font-mono text-neutral-400">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span>UPI ONLINE</span>
            </div>

            <BlueprintButton
              variant="primary"
              size="sm"
              asAnchor
              href="#early-access"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              {HERO_CONTENT.primaryCta}
            </BlueprintButton>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/15 px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm text-neutral-300 hover:text-white py-1 border-b border-white/5 tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <BlueprintButton
                variant="primary"
                size="md"
                asAnchor
                href="#early-access"
                className="w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {HERO_CONTENT.primaryCta}
              </BlueprintButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

