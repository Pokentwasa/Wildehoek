'use client';

import { useEffect, useState } from 'react';
import BookButton from './BookButton';

/** A discreet fixed booking button that appears after the user scrolls past the hero. */
export default function MobileBookingBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur-sm transition-transform duration-500 ease-editorial lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <BookButton variant="solid" location="mobile-bar" className="w-full" />
    </div>
  );
}
