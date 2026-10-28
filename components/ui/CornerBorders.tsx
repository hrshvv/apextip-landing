'use client';

import React from 'react';

interface CornerBordersProps {
  className?: string;
  size?: number;
  color?: string;
}

export function CornerBorders({ className = '', size = 8, color = 'rgba(255,255,255,0.4)' }: CornerBordersProps) {
  return (
    <>
      {/* Top Left */}
      <span
        className={`pointer-events-none absolute -top-px -left-px z-10 block border-t-2 border-l-2 ${className}`}
        style={{ width: `${size}px`, height: `${size}px`, borderColor: color }}
        aria-hidden="true"
      />
      {/* Top Right */}
      <span
        className={`pointer-events-none absolute -top-px -right-px z-10 block border-t-2 border-r-2 ${className}`}
        style={{ width: `${size}px`, height: `${size}px`, borderColor: color }}
        aria-hidden="true"
      />
      {/* Bottom Left */}
      <span
        className={`pointer-events-none absolute -bottom-px -left-px z-10 block border-b-2 border-l-2 ${className}`}
        style={{ width: `${size}px`, height: `${size}px`, borderColor: color }}
        aria-hidden="true"
      />
      {/* Bottom Right */}
      <span
        className={`pointer-events-none absolute -bottom-px -right-px z-10 block border-b-2 border-r-2 ${className}`}
        style={{ width: `${size}px`, height: `${size}px`, borderColor: color }}
        aria-hidden="true"
      />
    </>
  );
}
