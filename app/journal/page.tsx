import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/ui/Reveal';
import { journal, formatDate } from '@/data/journal';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Seasonal stories from the farm and kitchen — harvest notes, the people who grow our food, and cooking over fire.',
  alternates: { canonical: '/journal' },
};

export default function JournalPage() {
  const [lead, ...rest] = journal;

  return (
    <>
      <PageHero
        kicker="Journal"
        title="Notes from the farm and the fire."
        intro="Seasonal writing from the people who grow, cook and serve here. No schedule — we write when there is something worth saying."
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Journal', path: '/journal' },
        ]}
      />

      <section className="bg-limestone py-section">
        <div className="container-editorial">
          {/* Lead story — full width, magazine cover feel */}
          <Reveal>
            <Link href={`/journal/${lead.slug}`} className="group grid gap-8 md:grid-cols-2 md:items-center lg:gap-16">
              <div className="img-clip aspect-[4/3]">
                <Image
                  src={lead.heroImage}
                  alt={lead.heroAlt}
                  width={1200}
                  height={900}
                  priority
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-label text-earth">
                  {lead.category} · {formatDate(lead.publishedDate)} · {lead.readingTime}
                </p>
                <h2 className="mt-4 font-serif text-display-md text-ink transition-colors group-hover:text-clay">
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-measure font-sans leading-relaxed text-ink-soft">
                  {lead.excerpt}
                </p>
              </div>
            </Link>
          </Reveal>

          {/* The rest */}
          <div className="mt-24 grid gap-x-10 gap-y-16 md:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <div className="img-clip aspect-[4/5]">
                    <Image
                      src={post.heroImage}
                      alt={post.heroAlt}
                      width={1200}
                      height={1500}
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 font-sans text-xs uppercase tracking-label text-earth">
                    {post.category} · {formatDate(post.publishedDate)}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-ink transition-colors group-hover:text-clay">
                    {post.title}
                  </h3>
                  <p className="mt-2 max-w-measure font-sans text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
