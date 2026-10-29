import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FeaturesAndWhyApex } from '@/components/sections/FeaturesAndWhyApex';
import { FaqAndTrust } from '@/components/sections/FaqAndTrust';
import { EarlyAccessSection } from '@/components/sections/EarlyAccessSection';
import { Footer } from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      {/* Global Floating Pill Navigation */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 001 Hero — Say what it is and get the click */}
        <Hero />
        <StatsStrip />

        {/* 002 How it works — Show the product in action, step by step */}
        <HowItWorks />

        {/* 003 Features and why Apex Tip — Prove it’s worth choosing */}
        <FeaturesAndWhyApex />

        {/* 004 FAQ and trust — Remove doubts about fees, payouts, safety */}
        <FaqAndTrust />

        {/* 005 Early access — Convert, plus the footer */}
        <EarlyAccessSection />
      </main>

      {/* Global Blueprint Footer & Status Bar */}
      <Footer />
    </div>
  );
}
