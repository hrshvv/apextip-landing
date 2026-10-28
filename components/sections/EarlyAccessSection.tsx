'use client';

import React, { useState } from 'react';
import { EARLY_ACCESS_CONTENT } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BlueprintButton } from '@/components/ui/BlueprintButton';
import { CornerBorders } from '@/components/ui/CornerBorders';
import { CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  platform: string;
  channelLink: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  platform?: string;
  channelLink?: string;
}

export function EarlyAccessSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    platform: EARLY_ACCESS_CONTENT.platforms[0],
    channelLink: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your creator display name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.channelLink.trim()) {
      errs.channelLink = 'Channel link is required so we can verify your stream.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous network request (600ms)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      platform: EARLY_ACCESS_CONTENT.platforms[0],
      channelLink: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section
      id="early-access"
      className="relative py-24 md:py-36 bg-white text-black border-y border-neutral-300 overflow-hidden"
    >
      {/* High-contrast inverted blueprint dot grid */}
      <div className="absolute inset-0 blueprint-dot-grid-inverted opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number={EARLY_ACCESS_CONTENT.sectionNumber}
          tag={EARLY_ACCESS_CONTENT.badge}
          title={EARLY_ACCESS_CONTENT.headline}
          description={EARLY_ACCESS_CONTENT.description}
          inverted
        />

        {/* Inverted Card Container */}
        <div className="relative p-6 sm:p-10 bg-neutral-50 border-2 border-black bracket-corners shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <CornerBorders size={10} color="#000000" />

          {isSuccess ? (
            /* Success confirmation card */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 border-2 border-black bg-black text-white mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>

              <div className="font-mono text-xs tracking-widest text-neutral-600 uppercase">
                STATUS: SUCCESS_LOGGED
              </div>

              <h3 className="font-mono text-2xl font-bold text-black uppercase">
                {EARLY_ACCESS_CONTENT.successTitle}
              </h3>

              <p className="font-sans text-sm text-neutral-700 max-w-lg mx-auto leading-relaxed">
                {EARLY_ACCESS_CONTENT.successMessage}
              </p>

              <div className="p-4 bg-white border border-neutral-300 font-mono text-xs max-w-md mx-auto text-left space-y-1">
                <div className="text-neutral-500 text-[10px]">RESERVATION DETAILS</div>
                <div><span className="font-bold">CREATOR:</span> {formData.name}</div>
                <div><span className="font-bold">EMAIL:</span> {formData.email}</div>
                <div><span className="font-bold">PLATFORM:</span> {formData.platform}</div>
              </div>

              <div className="pt-4">
                <BlueprintButton
                  variant="inverted"
                  size="md"
                  onClick={handleReset}
                >
                  Submit Another Channel
                </BlueprintButton>
              </div>
            </div>
          ) : (
            /* Client-Side Validated Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Creator Display Name */}
                <div>
                  <label className="block font-mono text-xs font-bold text-black uppercase tracking-wider mb-2">
                    {EARLY_ACCESS_CONTENT.fields.name} *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Samrat Plays"
                    className="w-full bg-white border border-black p-3 font-mono text-sm text-black placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-black"
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1 font-mono text-xs text-red-600">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block font-mono text-xs font-bold text-black uppercase tracking-wider mb-2">
                    {EARLY_ACCESS_CONTENT.fields.email} *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="creator@gmail.com"
                    className="w-full bg-white border border-black p-3 font-mono text-sm text-black placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-black"
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1 font-mono text-xs text-red-600">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Primary Streaming Platform */}
                <div>
                  <label className="block font-mono text-xs font-bold text-black uppercase tracking-wider mb-2">
                    {EARLY_ACCESS_CONTENT.fields.platform}
                  </label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full bg-white border border-black p-3 font-mono text-sm text-black focus:outline-hidden focus:ring-2 focus:ring-black cursor-pointer"
                  >
                    {EARLY_ACCESS_CONTENT.platforms.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Channel Link */}
                <div>
                  <label className="block font-mono text-xs font-bold text-black uppercase tracking-wider mb-2">
                    {EARLY_ACCESS_CONTENT.fields.channelLink} *
                  </label>
                  <input
                    type="text"
                    value={formData.channelLink}
                    onChange={(e) => setFormData({ ...formData, channelLink: e.target.value })}
                    placeholder="https://youtube.com/@channel"
                    className="w-full bg-white border border-black p-3 font-mono text-sm text-black placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-black"
                  />
                  {errors.channelLink && (
                    <p className="mt-1.5 flex items-center gap-1 font-mono text-xs text-red-600">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.channelLink}
                    </p>
                  )}
                </div>

              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-neutral-300">
                <span className="font-mono text-xs text-neutral-600 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-black" />
                  {EARLY_ACCESS_CONTENT.trustNotice}
                </span>

                <BlueprintButton
                  variant="inverted"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {isSubmitting
                    ? EARLY_ACCESS_CONTENT.submittingText
                    : EARLY_ACCESS_CONTENT.submitButton}
                </BlueprintButton>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}

