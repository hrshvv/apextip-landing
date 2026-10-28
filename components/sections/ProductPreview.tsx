'use client';

import React, { useState } from 'react';
import { PRODUCT_PREVIEW_CONTENT } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CornerBorders } from '@/components/ui/CornerBorders';
import { ShieldCheck, Smartphone, MonitorCheck } from 'lucide-react';

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="preview" className="relative py-24 md:py-36 border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 blueprint-dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number={PRODUCT_PREVIEW_CONTENT.sectionNumber}
          tag={PRODUCT_PREVIEW_CONTENT.tag}
          title={PRODUCT_PREVIEW_CONTENT.title}
          description={PRODUCT_PREVIEW_CONTENT.description}
        />

        {/* Dual Product Interface Showcase: Streamer Dashboard + Mobile Viewer Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Left: Streamer Live Telemetry Dashboard Mockup (8 Cols) */}
          <div className="lg:col-span-8 bg-neutral-950 border border-white/20 bracket-corners p-5 sm:p-7 shadow-2xl">
            <CornerBorders size={10} color="rgba(255,255,255,0.5)" />

            {/* Dashboard Window Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-6 gap-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full border border-white/40" />
                  <div className="w-2.5 h-2.5 rounded-full border border-white/40" />
                  <div className="w-2.5 h-2.5 rounded-full border border-white/40" />
                </div>
                <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                  <MonitorCheck className="w-4 h-4" /> APEX STREAMER DASHBOARD // V1.0.0
                </span>
              </div>

              {/* Navigation Tabs */}
              <div className="flex gap-1 bg-black p-1 border border-white/15">
                {PRODUCT_PREVIEW_CONTENT.streamerTabs.map((tab, idx) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(idx)}
                    className={`font-mono text-[10px] px-2.5 py-1 transition-colors ${
                      activeTab === idx
                        ? 'bg-white text-black font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {PRODUCT_PREVIEW_CONTENT.mockStats.map((stat, i) => (
                <div key={i} className="p-3 bg-neutral-900 border border-white/10">
                  <div className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="font-mono text-base sm:text-lg font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Feed Header & Feed Items */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400 border-b border-white/10 pb-2">
                <span>LIVE TIP INGESTION STREAM (WEBSOCKET)</span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                  REALTIME
                </span>
              </div>

              <div className="space-y-2">
                {PRODUCT_PREVIEW_CONTENT.sampleTips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-black border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs hover:border-white/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-white/5 border border-white/20 flex items-center justify-center font-bold text-white text-[11px]">
                        ₹
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{tip.donor}</span>
                          <span className="text-[10px] text-neutral-500">{tip.time}</span>
                        </div>
                        <p className="text-neutral-300 text-[11px] font-sans mt-0.5">
                          {tip.msg}
                        </p>
                      </div>
                    </div>
                    <div className="text-right sm:pl-4">
                      <span className="font-bold text-white text-sm">{tip.amount}</span>
                      <span className="block text-[9px] text-neutral-400">UPI DIRECT</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Streamer Dashboard Footer */}
            <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-500">
              <span>LATENCY: 14MS TO MUMBAI DC</span>
              <span>TOKEN: VALIDATED</span>
            </div>
          </div>

          {/* Right: Viewer Mobile Checkout Card Mockup (4 Cols) */}
          <div className="lg:col-span-4 bg-neutral-950 border border-white/20 bracket-corners p-5 sm:p-6 shadow-2xl">
            <CornerBorders size={10} color="rgba(255,255,255,0.5)" />

            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                <Smartphone className="w-4 h-4" /> MOBILE VIEWER CHECKOUT
              </span>
              <span className="font-mono text-[9px] text-neutral-400">FAST PAY</span>
            </div>

            {/* Mock Mobile Screen */}
            <div className="p-4 bg-black border border-white/15 space-y-4">
              
              {/* Streamer Avatar Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <div className="w-10 h-10 border border-white flex items-center justify-center font-mono font-bold text-white bg-white/5">
                  ST
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-white">Samrat_Gaming</div>
                  <div className="font-mono text-[10px] text-neutral-400">apextip.live/samrat</div>
                </div>
              </div>

              {/* Amount Display */}
              <div className="text-center py-2 bg-neutral-900 border border-white/10">
                <div className="font-mono text-[10px] text-neutral-400">PAY VIA ANY UPI APP</div>
                <div className="font-mono text-2xl font-bold text-white my-1">₹250</div>
                <div className="flex justify-center gap-2 text-[9px] font-mono text-neutral-400">
                  <span>GPAY</span>
                  <span>•</span>
                  <span>PHONEPE</span>
                  <span>•</span>
                  <span>PAYTM</span>
                </div>
              </div>

              {/* Dynamic QR preview */}
              <div className="w-32 h-32 mx-auto bg-white p-2 border border-black flex items-center justify-center">
                <div className="w-full h-full border-2 border-black grid grid-cols-4 grid-rows-4 gap-1 p-1">
                  <div className="bg-black col-span-2 row-span-2" />
                  <div className="bg-black" />
                  <div className="bg-black" />
                  <div className="bg-black" />
                  <div className="bg-black col-span-2 row-span-2" />
                  <div className="bg-black" />
                </div>
              </div>

              <div className="text-center font-mono text-[10px] text-neutral-400">
                Scan or click UPI intent link on phone
              </div>

              <div className="p-2.5 bg-white text-black font-mono text-xs font-bold text-center uppercase tracking-wider cursor-default">
                Pay ₹250 with UPI
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[10px] text-neutral-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Zero card detail retention · 100% Indian gateway</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
