'use client';

import React, { useState } from 'react';
import { TRY_TIP_CONFIG } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BlueprintButton } from '@/components/ui/BlueprintButton';
import { CornerBorders } from '@/components/ui/CornerBorders';
import { Volume2, Sparkles, RefreshCw } from 'lucide-react';

export function TryTipDemo() {
  const [amount, setAmount] = useState<number>(100);
  const [donorName, setDonorName] = useState<string>(TRY_TIP_CONFIG.defaultViewer);
  const [message, setMessage] = useState<string>(TRY_TIP_CONFIG.defaultMessage);
  const [isFiring, setIsFiring] = useState<boolean>(false);
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const [ttsEnabled, setTtsEnabled] = useState<boolean>(true);

  const handleFireAlert = () => {
    setIsFiring(true);
    setAlertActive(true);

    // Auto reset after 5 seconds
    setTimeout(() => {
      setIsFiring(false);
    }, 5000);
  };

  const handleReset = () => {
    setAlertActive(false);
    setIsFiring(false);
  };

  return (
    <section id="try-a-tip" className="relative py-24 md:py-32 border-b border-white/10 overflow-hidden bg-neutral-950/40">
      <div className="absolute inset-0 blueprint-dot-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number={TRY_TIP_CONFIG.sectionNumber}
          tag="INTERACTIVE SIMULATOR"
          title="Try a test tip. See the stream overlay fire."
          description="Send a simulated viewer tip to test the real-time visual alert and neural text-to-speech audio banner before signing up."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Tip Configurator Form */}
          <div className="lg:col-span-5 p-6 bg-neutral-950 border border-white/15 bracket-corners">
            <CornerBorders size={8} color="rgba(255,255,255,0.4)" />

            <div className="flex items-center justify-between font-mono text-xs text-neutral-400 border-b border-white/10 pb-3 mb-5">
              <span>SIMULATED VIEWER CLIENT</span>
              <span className="text-white font-bold">UPI CHECKOUT</span>
            </div>

            <div className="space-y-4">
              {/* Preset Amounts */}
              <div>
                <label className="block font-mono text-[11px] text-neutral-400 mb-2">
                  SELECT TIP AMOUNT (₹ INR)
                </label>
                <div className="grid grid-cols-4 gap-2 font-mono">
                  {TRY_TIP_CONFIG.presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt)}
                      className={`py-2 text-xs font-bold border transition-colors ${
                        amount === amt
                          ? 'bg-white text-black border-white'
                          : 'bg-black text-neutral-300 border-white/20 hover:border-white/50'
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Viewer Name Input */}
              <div>
                <label className="block font-mono text-[11px] text-neutral-400 mb-1.5">
                  VIEWER HANDLE
                </label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full bg-black border border-white/20 px-3 py-2 text-xs font-mono text-white focus:outline-hidden focus:border-white"
                  placeholder="Your handle"
                />
              </div>

              {/* Viewer Message Input */}
              <div>
                <label className="block font-mono text-[11px] text-neutral-400 mb-1.5">
                  SHOUTOUT MESSAGE
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black border border-white/20 px-3 py-2 text-xs font-mono text-white focus:outline-hidden focus:border-white resize-none"
                  placeholder="Type a shoutout message"
                />
              </div>

              {/* TTS Audio Toggle */}
              <div className="flex items-center justify-between p-2.5 bg-neutral-900 border border-white/10 font-mono text-xs">
                <span className="flex items-center gap-2 text-neutral-300">
                  <Volume2 className="w-4 h-4 text-white" />
                  ENABLE TEXT-TO-SPEECH
                </span>
                <input
                  type="checkbox"
                  checked={ttsEnabled}
                  onChange={(e) => setTtsEnabled(e.target.checked)}
                  className="w-4 h-4 accent-white cursor-pointer"
                />
              </div>

              {/* Trigger Button */}
              <div className="pt-2">
                <BlueprintButton
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={handleFireAlert}
                  disabled={isFiring}
                >
                  {isFiring ? 'ALERT ACTIVE ON STREAM...' : 'SEND TEST TIP (₹' + amount + ')'}
                </BlueprintButton>
              </div>

              <div className="text-[10px] font-mono text-neutral-500 text-center">
                * Simulated client. Zero real currency deducted.
              </div>
            </div>
          </div>

          {/* Right Column: Simulated OBS Stream Overlay Screen */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video bg-black border-2 border-white/20 bracket-corners overflow-hidden shadow-2xl flex flex-col justify-between p-4 sm:p-6">
              <CornerBorders size={12} color="rgba(255,255,255,0.6)" />

              {/* Top Stream Layout Header */}
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-white font-bold">LIVE STREAM CANVAS (1080P)</span>
                </div>
                <span>FPS: 60 // BITRATE: 6000 KBPS</span>
              </div>

              {/* Stream Content Placeholder (Mock Game Stream Background) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="text-center font-mono space-y-2">
                  <div className="text-4xl font-black">STREAM ACTIVE</div>
                  <div className="text-xs">YOUR GAMEPLAY / WEBCAM HERE</div>
                </div>
              </div>

              {/* Firing Alert Box */}
              <div className="relative z-10 my-auto flex justify-center">
                {alertActive ? (
                  <div className="w-full max-w-md bg-black/95 border-2 border-white p-5 shadow-[0_0_30px_rgba(255,255,255,0.15)] animate-in fade-in zoom-in-95 duration-300">
                    <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
                      <span className="font-mono text-[10px] bg-white text-black px-2 py-0.5 font-bold uppercase tracking-wider">
                        NEW LIVE TIP
                      </span>
                      <span className="font-mono text-lg font-bold text-white">
                        ₹{amount}.00
                      </span>
                    </div>

                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 border border-white flex items-center justify-center font-mono font-bold text-white text-base shrink-0 bg-white/5">
                        ₹
                      </div>
                      <div>
                        <div className="font-mono text-sm font-bold text-white">
                          {donorName || 'Anonymous Viewer'}
                        </div>
                        <div className="font-mono text-xs text-neutral-300 mt-1 leading-snug">
                          &quot;{message || 'Thanks for the great content!'}&quot;
                        </div>
                      </div>
                    </div>

                    {/* Audio Synthesizer Waveform Visualizer */}
                    {ttsEnabled && (
                      <div className="flex items-center gap-2 pt-2 border-t border-white/10 font-mono text-[10px] text-neutral-400">
                        <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                        <span>VOICE SYNTHESIS:</span>
                        <div className="flex items-end gap-1 flex-1 h-3">
                          {[4, 10, 14, 6, 12, 16, 9, 13, 8, 15, 6].map((h, i) => (
                            <div
                              key={i}
                              className="w-1 bg-white animate-pulse"
                              style={{ height: `${h}px`, animationDelay: `${i * 70}ms` }}
                            />
                          ))}
                        </div>
                        <span className="text-white ml-auto">ACTIVE</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center font-mono text-xs text-neutral-500 p-8 border border-dashed border-white/10">
                    <Sparkles className="w-6 h-6 mx-auto mb-2 text-neutral-600" />
                    <div>OVERLAY STANDBY</div>
                    <div className="text-[10px] text-neutral-600 mt-1">
                      Click &quot;SEND TEST TIP&quot; to trigger the alert box.
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Stream Bar */}
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 border-t border-white/10 pt-2">
                <span>OVERLAY SOURCE: BROWSER_01</span>
                {alertActive && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 text-neutral-400 hover:text-white"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>DISMISS</span>
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
