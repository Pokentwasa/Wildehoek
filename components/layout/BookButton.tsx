'use client';

import { site } from '@/lib/site';
import { track } from '@/lib/analytics';
import type { ReactNode } from 'react';

interface BookButtonProps {
  children?: ReactNode;
  variant?: 'solid' | 'outline' | 'link';
  className?: string;
  location?: string;
}

/** Reservation CTA. Tracks reservation_click and opens the configured booking URL. */
export default function BookButton({
  children = 'Reserve a table',
  variant = 'solid',
  className = '',
  location = 'unknown',
}: BookButtonProps) {
  const base =
    'inline-flex items-center justify-center font-sans text-sm transition-all duration-300 ease-editorial';

  const variants: Record<string, string> = {
    solid:
      'bg-ink text-paper px-6 py-3 hover:bg-clay',
    outline:
      'border border-current px-6 py-3 hover:bg-ink hover:text-paper hover:border-ink',
    link: 'text-link',
  };

  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('reservation_click', { location })}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
