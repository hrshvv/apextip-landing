'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CornerBorders } from '@/components/ui/CornerBorders';
import { Volume2, Monitor, BarChart3, Film, QrCode, Sparkles } from 'lucide-react';

export function BentoFeatures() {
  return (
    <section id="features" className="relative py-24 md:py-36 border-b border-white/10 overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="003"
          tag="CORE CAPABILITIES"
          title="Engineered for broadcast. Tuned for Indian creators."
          description="Every feature is designed around real streaming conditions — competitive latency, zero CPU hit, and total streamer control over stream audio and media."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Text-to-Speech Shoutouts (Half-col) */}
          <div className="relative p-6 bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-300 bracket-corners flex flex-col justify-between group">
            <CornerBorders size={8} color="rgba(255,255,255,0.3)" />
            
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 mb-4">
                <span className="flex items-center gap-1.5 text-white">
                  <Volume2 className="w-3.5 h-3.5" />
                  AUDIO ENGINE
                </span>
                <span>FEAT.01</span>
              </div>

              <h3 className="font-mono text-lg font-bold text-white mb-2">
                Instant Text-to-Speech
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Viewer messages are synthesized in under 200ms using custom neural voice models. Set custom tip thresholds before audio triggers on stream.
              </p>
            </div>

            {/* Mini UI Preview: Audio synthesizer card */}
            <div className="p-3 bg-neutral-900 border border-white/10 font-mono text-xs space-y-2">
              <div className="flex justify-between text-[10px] text-neutral-400">
                <span>VOICE: NEURAL_MALE_IN</span>
                <span className="text-white">THRESHOLD: ₹50+</span>
              </div>
              <div className="flex items-center gap-1.5 h-6 bg-black px-2 border border-white/10">
                <span className="text-[10px] text-neutral-400">SPEECH:</span>
                <div className="flex items-end gap-1 flex-1 h-3">
                  {[4, 10, 8, 12, 6, 14, 9, 5, 11, 7].map((h, i) => (
                    <div key={i} className="w-1 bg-white/70" style={{ height: `${h}px` }} />
                  ))}
                </div>
                <span className="text-[9px] text-neutral-500">22.05kHz</span>
              </div>
            </div>
          </div>

          {/* Card 2: OBS & Streaming Software in 1 Click (Half-col) */}
          <div className="relative p-6 bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-300 bracket-corners flex flex-col justify-between group">
            <CornerBorders size={8} color="rgba(255,255,255,0.3)" />

            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 mb-4">
                <span className="flex items-center gap-1.5 text-white">
                  <Monitor className="w-3.5 h-3.5" />
                  BROADCAST HOOKS
                </span>
                <span>FEAT.02</span>
              </div>

              <h3 className="font-mono text-lg font-bold text-white mb-2">
                OBS Integration in Clicks
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Works with OBS Studio, Streamlabs Desktop, vMix, and Prism. Drop in your browser source token and keep streaming with zero frame drops.
              </p>
            </div>

            {/* Mini UI Preview: Browser source config */}
            <div className="p-3 bg-neutral-900 border border-white/10 font-mono text-xs space-y-2">
              <div className="text-[10px] text-neutral-400 flex justify-between">
                <span>OBS STUDIO SOURCE</span>
                <span className="text-emerald-400">CONNECTED</span>
              </div>
              <div className="bg-black p-1.5 border border-white/10 text-[10px] text-neutral-300 truncate">
                https://apextip.live/overlay?id=obs_alpha
              </div>
              <div className="flex justify-between text-[9px] text-neutral-500">
                <span>HARDWARE ACCELERATION: ON</span>
                <span>FPS: 60</span>
              </div>
            </div>
          </div>

          {/* Card 3: Dynamic QR & Universal Link */}
          <div className="relative p-6 bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-300 bracket-corners flex flex-col justify-between group">
            <CornerBorders size={8} color="rgba(255,255,255,0.3)" />

            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 mb-4">
                <span className="flex items-center gap-1.5 text-white">
                  <QrCode className="w-3.5 h-3.5" />
                  ACCESS RAILS
                </span>
                <span>FEAT.03</span>
              </div>

              <h3 className="font-mono text-lg font-bold text-white mb-2">
                One Link. One QR Code.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Share a single profile link in your chat, or embed a high-contrast blueprint QR code on your live screen that scans cleanly from any UPI app.
              </p>
            </div>

            {/* Mini UI Preview: QR Preview */}
            <div className="p-3 bg-neutral-900 border border-white/10 font-mono text-xs flex items-center gap-3">
              <div className="w-12 h-12 bg-white text-black font-mono font-black text-xs flex items-center justify-center shrink-0">
                QR
              </div>
              <div className="text-[11px] truncate">
                <span className="text-white font-bold block">apextip.live/username</span>
                <span className="text-neutral-400 text-[10px]">Instant checkout</span>
              </div>
            </div>
          </div>

          {/* Card 4: Real-time Payout Dashboard (Full width on lg) */}
          <div className="lg:col-span-2 relative p-6 bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-300 bracket-corners flex flex-col justify-between group">
            <CornerBorders size={8} color="rgba(255,255,255,0.3)" />

            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 mb-4">
                <span className="flex items-center gap-1.5 text-white">
                  <BarChart3 className="w-3.5 h-3.5" />
                  FINANCIAL TELEMETRY
                </span>
                <span>FEAT.04</span>
              </div>

              <h3 className="font-mono text-lg sm:text-xl font-bold text-white mb-2">
                Real-Time Payout & Tip Telemetry
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Live tip feed, top supporters, average tip amount, and automatic payout ledger. Export transaction receipts with all fees clearly broken down.
              </p>
            </div>

            {/* Mini UI Preview: Live stats strip & tip entry */}
            <div className="p-4 bg-neutral-900 border border-white/10 font-mono text-xs space-y-3">
              <div className="grid grid-cols-3 gap-2 border-b border-white/10 pb-3">
                <div>
                  <span className="text-[9px] text-neutral-400 block">TODAY VOLUME</span>
                  <span className="text-sm font-bold text-white">₹14,850</span>
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">TIPS LOGGED</span>
                  <span className="text-sm font-bold text-white">38</span>
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">BANK SETTLEMENT</span>
                  <span className="text-sm font-bold text-emerald-400">READY</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] bg-black p-2 border border-white/10">
                <span className="text-neutral-300">Rohan_Playz</span>
                <span className="font-bold text-white">₹500.00</span>
                <span className="text-[9px] text-neutral-500">12s ago · UPI</span>
              </div>
            </div>
          </div>

          {/* Card 5: Viewer Moments & Clip Sharing */}
          <div className="relative p-6 bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-300 bracket-corners flex flex-col justify-between group">
            <CornerBorders size={8} color="rgba(255,255,255,0.3)" />

            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 mb-4">
                <span className="flex items-center gap-1.5 text-white">
                  <Film className="w-3.5 h-3.5" />
                  VIEWER MOMENTS
                </span>
                <span>FEAT.05</span>
              </div>

              <h3 className="font-mono text-lg font-bold text-white mb-2">
                Viewer Moments & Media
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Viewers can share clips or media with a tip. The streamer retains complete control: preview before playing, or skip with a single hotkey.
              </p>
            </div>

            {/* Mini UI Preview: Moderation deck */}
            <div className="p-3 bg-neutral-900 border border-white/10 font-mono text-xs space-y-2">
              <div className="flex justify-between text-[10px] text-neutral-400">
                <span>MEDIA QUEUE (1 PENDING)</span>
                <span className="text-white">HOTKEY: [F9]</span>
              </div>
              <div className="flex items-center justify-between bg-black p-2 border border-white/10 text-[11px]">
                <span className="truncate text-neutral-300">Clutch_Moment.mp4 (6s)</span>
                <div className="flex gap-2">
                  <span className="px-1.5 py-0.5 bg-white text-black text-[9px] font-bold">PLAY</span>
                  <span className="px-1.5 py-0.5 bg-neutral-800 text-neutral-300 text-[9px]">SKIP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Custom Blueprint Stream Alerts */}
          <div className="lg:col-span-3 relative p-6 bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-300 bracket-corners flex flex-col md:flex-row items-center justify-between gap-6 group">
            <CornerBorders size={8} color="rgba(255,255,255,0.3)" />

            <div className="max-w-xl">
              <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>CUSTOM OVERLAY SYSTEM // FEAT.06</span>
              </div>
              <h3 className="font-mono text-xl font-bold text-white mb-2">
                Monochrome Blueprint Alert Overlays
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Choose clean geometric borders, custom trigger sounds, and typography to fit your broadcast aesthetic. Zero tacky colors, zero visual clutter.
              </p>
            </div>

            <div className="p-4 bg-black border-2 border-white/40 font-mono text-xs w-full md:w-auto shrink-0 space-y-2 min-w-[280px]">
              <div className="flex items-center justify-between text-[10px] border-b border-white/20 pb-1">
                <span className="text-neutral-400">OVERLAY STYLE</span>
                <span className="text-white font-bold">TECHNICAL MONO</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-white flex items-center justify-center font-bold text-white">
                  ₹
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400">Kavya_GG · ₹250</div>
                  <div className="text-xs text-white">Awesome live stream!</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
