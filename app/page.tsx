import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { BentoFeatures } from '@/components/sections/BentoFeatures';
import { TryTipDemo } from '@/components/sections/TryTipDemo';
import { ProductPreview } from '@/components/sections/ProductPreview';
import { WhyApex } from '@/components/sections/WhyApex';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { FaqSection } from '@/components/sections/FaqSection';
import { EarlyAccessSection } from '@/components/sections/EarlyAccessSection';
import { Footer } from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Product Facts & Constraints Strip */}
        <StatsStrip />

        {/* 4. Streamer Workflow (Step-by-step) */}
        <HowItWorks />

        {/* 5. Core Capabilities (Bento Grid) */}
        <BentoFeatures />

        {/* 6. Interactive "Try a Tip" Live Alert Demo */}
        <TryTipDemo />

        {/* 7. Product Preview (Streamer Dashboard & Mobile Viewer Checkout) */}
        <ProductPreview />

        {/* 8. Why Apex Tip (Value Pillars & Indian Banking Context) */}
        <WhyApex />

        {/* 9. Segmented Creator Matrix ("Who it's for") */}
        <WhoItsFor />

        {/* 10. Frequently Asked Questions (Accessible Accordion) */}
        <FaqSection />

        {/* 11. Early Access Application (Inverted White Section) */}
        <EarlyAccessSection />
      </main>

      {/* 12. Engineering Blueprint Footer & Telemetry Status Bar */}
      <Footer />
    </div>
  );
}
