import type { Metadata } from 'next';
import { Fraunces, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

import { site } from '@/lib/site';
import { restaurantSchema, websiteSchema, organizationSchema } from '@/lib/schema';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import SmoothScroll from '@/components/layout/SmoothScroll';
import MobileBookingBar from '@/components/layout/MobileBookingBar';
import JsonLd from '@/components/ui/JsonLd';

// Two weights each — restrained, per the brief.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    'farm restaurant',
    'farm to table',
    'Wellington',
    'Western Cape',
    'Cape Winelands',
    'seasonal dining',
    'long table',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${fraunces.variable} ${hanken.variable}`}>
      <head>
        {/* Adds `js-ready` before paint so reveal targets hide only when JS is present.
            Without JS this never runs and all content stays visible + crawlable. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-ready')`,
          }}
        />
        <JsonLd data={restaurantSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={organizationSchema()} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Nav />
          <PageTransition>
            <main id="main">{children}</main>
          </PageTransition>
          <Footer />
          <MobileBookingBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
