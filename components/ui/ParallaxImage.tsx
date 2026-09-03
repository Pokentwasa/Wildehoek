'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { registerGsap, gsap, prefersReducedMotion } from '@/lib/gsap';

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** How far the image drifts inside its frame (px). */
  strength?: number;
}

/**
 * A clipped frame with slow internal movement. The <img> is server-rendered
 * (Next hydrates it), so it exists in the initial HTML for crawlers and no-JS.
 */
export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '100vw',
  priority = false,
  strength = 60,
}: ParallaxImageProps) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const f = frame.current;
    const i = inner.current;
    if (!f || !i || prefersReducedMotion()) return;

    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        i,
        { yPercent: -strength / 12, scale: 1.08 },
        {
          yPercent: strength / 12,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: f,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    }, f);

    return () => ctx.revert();
  }, [strength]);

  return (
    <div ref={frame} className={`img-clip ${className}`}>
      <div ref={inner} className="h-full w-full will-change-transform">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
