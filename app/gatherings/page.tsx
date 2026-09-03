import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import ParallaxImage from '@/components/ui/ParallaxImage';
import Reveal from '@/components/ui/Reveal';
import TrackedLink from '@/components/ui/TrackedLink';
import { events, gatheringsIntro } from '@/data/events';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Gatherings',
  description:
    'Weddings, private dinners and long-table lunches on a working farm near Wellington. A handful of gatherings each season, each given the whole farm.',
  alternates: { canonical: '/gatherings' },
};

export default function GatheringsPage() {
  return (
    <>
      <PageHero
        kicker="Gatherings"
        title={gatheringsIntro.heading}
        intro={gatheringsIntro.body}
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Gatherings', path: '/gatherings' },
        ]}
        image={{
          src: '/images/gatherings.jpg',
          alt: 'A long celebration table set on the oak lawn',
        }}
      />

      <section className="bg-limestone py-section">
        <div className="container-editorial space-y-24 md:space-y-32">
          {events.map((event, i) => (
            <div
              key={event.title}
              className={`grid items-center gap-10 md:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal clip>
                <ParallaxImage
                  src={event.image}
                  alt={event.alt}
                  width={1500}
                  height={1125}
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="aspect-[4/3] w-full"
                />
              </Reveal>
              <Reveal>
                <h2 className="font-serif text-display-sm text-ink">{event.title}</h2>
                <p className="mt-5 max-w-measure font-sans leading-relaxed text-ink-soft">
                  {event.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-section text-paper">
        <div className="container-editorial max-w-measure-wide text-center">
          <Reveal>
            <h2 className="font-serif text-display-md">Tell us what you have in mind.</h2>
            <p className="mx-auto mt-6 max-w-measure font-sans leading-relaxed text-paper/70">
              Every gathering is planned from scratch around your date, your numbers and
              the season. Send us the outline and we&rsquo;ll take it from there.
            </p>
            <div className="mt-10">
              <TrackedLink
                href={`mailto:${site.contact.email}?subject=Gathering enquiry`}
                event="event_enquiry"
                className="inline-flex items-center justify-center border border-paper px-6 py-3 font-sans text-sm transition-colors duration-300 hover:bg-paper hover:text-ink"
              >
                Gather with us
              </TrackedLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
