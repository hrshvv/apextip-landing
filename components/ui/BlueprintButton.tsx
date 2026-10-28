'use client';

import React from 'react';

interface BlueprintButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverted';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  asAnchor?: boolean;
  href?: string;
}

export function BlueprintButton({
  variant = 'secondary',
  size = 'md',
  children,
  icon,
  className = '',
  asAnchor = false,
  href,
  ...props
}: BlueprintButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-xs tracking-wider',
    lg: 'px-7 py-3.5 text-sm tracking-wider',
  }[size];

  const variantClasses = {
    primary:
      'bg-white text-black font-semibold hover:bg-neutral-200 border border-white shadow-sm',
    secondary:
      'bg-black/40 text-neutral-200 hover:text-white border border-white/20 hover:border-white/60 hover:bg-white/5 backdrop-blur-xs',
    ghost:
      'bg-transparent text-neutral-400 hover:text-white border border-transparent hover:border-white/20',
    inverted:
      'bg-black text-white hover:bg-neutral-800 border border-black font-semibold',
  }[variant];

  const baseClasses = `relative inline-flex items-center justify-center gap-2 font-mono uppercase transition-all duration-200 group focus:outline-hidden focus:ring-1 focus:ring-white active:translate-y-px disabled:opacity-50 disabled:pointer-events-none ${sizeClasses} ${variantClasses} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} className={baseClasses}>
        {/* Subtle hover corner indicators */}
        <span className="pointer-events-none absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="pointer-events-none absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity" />
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      <span className="pointer-events-none absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="pointer-events-none absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
}

