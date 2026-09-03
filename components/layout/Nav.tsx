'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import BookButton from './BookButton';

const links = [
  { href: '/restaurant', label: 'Restaurant' },
  { href: '/farm', label: 'Our Farm' },
  { href: '/menu', label: 'Menu' },
  { href: '/gatherings', label: 'Gatherings' },
  { href: '/journal', label: 'Journal' },
  { href: '/visit', label: 'Visit' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Only the homepage has a full-bleed hero the nav can sit over.
  const overHero = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || !overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial ${
        solid ? 'bg-limestone/95 backdrop-blur-sm text-ink shadow-[0_1px_0_rgba(36,33,27,0.08)]' : 'text-paper'
      }`}
    >
      <div className="container-editorial flex h-[72px] items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-tight" aria-label={`${site.name} — home`}>
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative font-sans text-sm transition-opacity duration-200 hover:opacity-60 ${
                pathname === l.href ? 'opacity-100' : 'opacity-90'
              }`}
            >
              {l.label}
              {pathname === l.href && (
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-current" />
              )}
            </Link>
          ))}
          <BookButton variant={solid ? 'solid' : 'outline'} location="nav" />
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-full bg-current transition-transform duration-300 ${
                open ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu — an editorial full-screen panel, not a generic drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[72px] z-40 bg-ink text-paper transition-[opacity,visibility] duration-500 ease-editorial lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col justify-between px-6 py-10">
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block border-b border-paper/15 py-4 font-serif text-3xl"
                >
                  <span className="mr-3 align-top font-sans text-xs text-paper/40">
                    0{i + 1}
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-6">
            <BookButton variant="outline" location="mobile-menu" className="w-full border-paper" />
            <p className="font-sans text-sm text-paper/60">
              {site.address.locality} · {site.address.region}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
