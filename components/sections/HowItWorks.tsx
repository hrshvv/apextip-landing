'use client';

import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CornerBorders } from '@/components/ui/CornerBorders';
import { Copy, Check, Radio, ShieldCheck } from 'lucide-react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 border-b border-white/10 overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-dot-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="002"
          tag="STREAMER WORKFLOW"
          title="From zero to live alerts in four steps."
          description="Engineered for simplicity. No complex setup, no software installations. If you can paste a URL into OBS, you are ready to receive tips."
        />

        {/* Steps Grid & Interactive Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Step Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-5 border text-left cursor-pointer transition-all duration-200 bracket-corners ${
                    isActive
                      ? 'bg-neutral-900 border-white/60 text-white shadow-sm'
                      : 'bg-neutral-950/40 border-white/10 text-neutral-400 hover:border-white/30 hover:text-neutral-200'
                  }`}
                >
                  <CornerBorders size={6} color={isActive ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)'} />
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-white tracking-widest">
                      {'//'} STEP {step.number}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="font-mono text-sm sm:text-base font-semibold text-white mb-1.5">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visualizer Box that matches selected step */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="relative p-6 sm:p-8 bg-neutral-950 border border-white/20 bracket-corners shadow-2xl">
              <CornerBorders size={10} color="rgba(255,255,255,0.6)" />

              {/* Visualizer Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="font-mono text-xs tracking-wider text-white">
                    LIVE PREVIEW // STEP {HOW_IT_WORKS_STEPS[activeStep].number}
                  </span>
                </div>
                <div className="font-mono text-[10px] text-neutral-500">
                  {HOW_IT_WORKS_STEPS[activeStep].tag}
                </div>
              </div>

              {/* Step 01 Preview: Profile Handle & Dynamic QR */}
              {activeStep === 0 && (
                <div className="space-y-6">
                  <div className="p-4 bg-neutral-900 border border-white/15">
                    <span className="block font-mono text-[10px] text-neutral-400 mb-1">
                      YOUR DEDICATED APEX LINK
                    </span>
                    <div className="flex items-center justify-between bg-black px-3 py-2 border border-white/20 font-mono text-xs sm:text-sm text-white">
                      <span>apextip.live/@samrat_gaming</span>
                      <button
                        onClick={handleCopyLink}
                        className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        <span className="text-[10px]">{copied ? 'COPIED' : 'COPY'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-4 bg-neutral-900/60 border border-white/10">
                    <div className="w-24 h-24 bg-white p-2 flex items-center justify-center shrink-0">
                      {/* Stylized monochrome QR blueprint */}
                      <div className="w-full h-full border-2 border-black grid grid-cols-5 grid-rows-5 gap-1 p-1">
                        <div className="bg-black col-span-2 row-span-2" />
                        <div className="bg-black" />
                        <div className="bg-black col-span-2 row-span-2" />
                        <div className="bg-black" />
                        <div className="bg-black" />
                        <div className="bg-black col-span-2 row-span-2" />
                        <div className="bg-black" />
                        <div className="bg-black col-span-2 row-span-2" />
                      </div>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="font-mono font-bold text-white">DYNAMIC STREAM QR</div>
                      <p className="font-sans text-neutral-400 text-[11px] leading-relaxed">
                        Ready to overlay directly onto your 1080p stream layout. Instant scan from any Indian UPI app.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 02 Preview: OBS Browser Source Setup */}
              {activeStep === 1 && (
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-900 border border-white/15">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                        <Radio className="w-4 h-4 text-white" /> OBS STUDIO // BROWSER SOURCE PROPERTIES
                      </span>
                      <span className="font-mono text-[9px] text-neutral-400">RESOLUTION: 1920×1080</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <label className="text-[10px] text-neutral-400 block mb-1">SOURCE URL</label>
                        <input
                          readOnly
                          value="https://engine.apextip.live/overlay/v1?token=apk_live_94883921"
                          className="w-full bg-black border border-white/20 p-2 text-neutral-300 font-mono text-[11px]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] text-neutral-400 block mb-1">WIDTH (PX)</label>
                          <input readOnly value="1920" className="w-full bg-black border border-white/20 p-2 text-white" />
                        </div>
                        <div>
                          <label className="text-[10px] text-neutral-400 block mb-1">HEIGHT (PX)</label>
                          <input readOnly value="1080" className="w-full bg-black border border-white/20 p-2 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-neutral-900/40 border border-white/10 font-mono text-[10px] text-neutral-400 flex items-center justify-between">
                    <span>STATUS: WEBSOCKET ACTIVE</span>
                    <span>LATENCY: 18MS</span>
                  </div>
                </div>
              )}

              {/* Step 03 Preview: Live Alert & TTS Waveform */}
              {activeStep === 2 && (
                <div className="space-y-4">
                  <div className="p-6 bg-black border-2 border-white relative overflow-hidden">
                    <div className="absolute top-2 right-2 font-mono text-[9px] bg-white text-black px-1.5 py-0.5 font-bold">
                      NEW TIP
                    </div>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 border border-white flex items-center justify-center font-mono font-bold text-white text-sm">
                        ₹
                      </div>
                      <div>
                        <div className="font-mono text-xs text-neutral-400">Arjun_Rao tipped</div>
                        <div className="font-mono text-xl font-bold text-white">₹500.00</div>
                      </div>
                    </div>

                    <p className="font-mono text-xs text-neutral-200 border-t border-white/20 pt-2 mb-3">
                      &quot;Bro that AWP flick was unholy!! Play aggressively this round!&quot;
                    </p>

                    {/* Audio Synthesizer Waveform */}
                    <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                      <span className="font-mono text-[9px] text-neutral-400">TTS AUDIO:</span>
                      <div className="flex items-end gap-1 h-4">
                        {[6, 12, 16, 8, 14, 20, 10, 15, 7, 18, 12, 6].map((h, i) => (
                          <div
                            key={i}
                            className="w-1 bg-white animate-pulse"
                            style={{ height: `${h}px`, animationDelay: `${i * 80}ms` }}
                          />
                        ))}
                      </div>
                      <span className="font-mono text-[9px] text-neutral-400 ml-auto">SYNTHESIZING...</span>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] text-neutral-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-white" />
                    <span>Profanity blacklists applied before rendering</span>
                  </div>
                </div>
              )}

              {/* Step 04 Preview: Telemetry & Automated Payouts */}
              {activeStep === 3 && (
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-900 border border-white/15 font-mono">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold text-white">PAYOUT DISBURSEMENT LEDGER</span>
                      <span className="text-[10px] text-neutral-400">SETTLEMENT BATCH: #9042</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 bg-black border border-white/10">
                        <span className="text-neutral-300">GROSS TIP VOLUME (SESSION)</span>
                        <span className="font-bold text-white">₹14,850.00</span>
                      </div>
                      <div className="flex justify-between p-2 bg-black border border-white/10">
                        <span className="text-neutral-400">TRANSPARENT PLATFORM FEE</span>
                        <span className="text-neutral-300">SHOWN CLEARLY (LOWEST TIER)</span>
                      </div>
                      <div className="flex justify-between p-2 bg-black border border-white/30 text-white font-bold">
                        <span>NET DIRECT BANK PAYOUT</span>
                        <span className="text-white">PROCESSED TO HDFC ****9201</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-neutral-900/40 border border-white/10 font-mono text-[10px] text-neutral-400 flex items-center justify-between">
                    <span>BANK RAILS: IMPS / NEFT DIRECT</span>
                    <span>STATUS: 100% VERIFIED</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
