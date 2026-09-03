'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import { registerGsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

/**
 * Optional smooth scroll. Disabled entirely for users who prefer reduced motion,
 * and kept gentle so it never fights native scrolling or hurts accessibility.
 * Kept in sync with ScrollTrigger so pinned/scrubbed animations stay accurate.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    registerGsap();

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
