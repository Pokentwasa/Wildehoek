'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { prefersReducedMotion } from '@/lib/gsap';

/**
 * A restrained page transition: a cream panel wipes up as the new route settles,
 * then lifts away. Navigation is never blocked — this animates AFTER the route
 * has already changed, so browser history and accessibility are untouched.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (prefersReducedMotion()) return;

    setActive(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
    const t = setTimeout(() => setActive(false), 620);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-[60] origin-bottom bg-limestone transition-transform ${
          active
            ? 'translate-y-0 duration-300 ease-editorial'
            : 'translate-y-full duration-500 ease-editorial'
        }`}
      />
      {children}
    </>
  );
}
