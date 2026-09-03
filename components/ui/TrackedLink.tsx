'use client';

import { track } from '@/lib/analytics';
import type { ReactNode } from 'react';

type Event = 'directions_click' | 'phone_click' | 'email_click' | 'menu_view' | 'event_enquiry';

interface TrackedLinkProps {
  href: string;
  event: Event;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

/** Anchor that fires an analytics event on click (phone, email, directions, etc.). */
export default function TrackedLink({
  href,
  event,
  children,
  external = false,
  className = '',
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={() => track(event)}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {children}
    </a>
  );
}
