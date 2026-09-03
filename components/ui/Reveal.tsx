'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { registerGsap, gsap, prefersReducedMotion } from '@/lib/gsap';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Use a clip-path wipe instead of a fade-and-rise. Good for images + headings. */
  clip?: boolean;
  delay?: number;
}

/**
 * Progressive enhancement:
 *  - The server renders the children fully visible.
 *  - An inline <head> script adds `js-ready` to <html>, which (via globals.css)
 *    hides [data-reveal] elements BEFORE paint — only when JS is present.
 *  - GSAP then animates them in on scroll. If JS never runs, content stays visible.
 *  - prefers-reduced-motion is honoured by CSS and skipped here.
 */
export default function Reveal({ children, className, clip = false, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    registerGsap();
    const ctx = gsap.context(() => {
      if (clip) {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0 0 100% 0)' },
          {
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.1,
            delay,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          },
        );
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, [clip, delay]);

  return (
    <div
      ref={ref}
      className={className}
      {...(clip ? { 'data-reveal-clip': '' } : { 'data-reveal': '' })}
    >
      {children}
    </div>
  );
}
