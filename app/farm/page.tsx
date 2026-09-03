import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import ParallaxImage from '@/components/ui/ParallaxImage';
import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';

export const metadata: Metadata = {
  title: 'Our Farm',
  description:
    'The kitchen garden and farm behind Wildehoek, in the Bovlei valley near Wellington. What grows here decides what we cook.',
  alternates: { canonical: '/farm' },
};

export default function FarmPage() {
  return (
    <>
      <PageHero
        kicker="01 / The Farm"
        title="What grows here decides what we cook."
        intro="A few hundred metres from the kitchen door, the garden and orchards run down toward the vines. This is where the menu really starts."
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Our Farm', path: '/farm' },
        ]}
        image={{
          src: '/images/farm-wide.jpg',
          alt: 'The farm and kitchen garden running toward the vineyards and mountains',
        }}
      />

      <section className="bg-paper py-section">
        <div className="container-editorial grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">The garden</p>
            <h2 className="mt-6 font-serif text-display-md text-ink">
              Most mornings begin in the garden.
            </h2>
            <p className="mt-6 max-w-measure font-sans leading-relaxed text-ink-soft">
              Beds are planted in short, staggered rows so something is always ready and
              nothing arrives all at once. The kitchen walks the garden first thing,
              picks what has peaked, and builds the day around it.
            </p>
            <p className="mt-4 max-w-measure font-sans leading-relaxed text-ink-soft">
              What we cannot grow, we buy within a short drive — a baker in town, a
              cheesemaker over the pass, two farms down the valley.
            </p>
          </Reveal>
          <Reveal clip>
            <ParallaxImage
              src="/images/journal-grower.jpg"
              alt="A grower harvesting greens in the early morning light"
              width={1200}
              height={1500}
              sizes="(max-width: 768px) 100vw, 46vw"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-olive/95 py-section text-paper">
        <div className="container-editorial max-w-measure-wide">
          <Reveal>
            <p className="font-serif text-display-sm leading-tight">
              &ldquo;You plant for a table you cannot see yet, months ahead, and hope the
              season agrees with you.&rdquo;
            </p>
            <p className="mt-6 eyebrow text-paper/60">Wynand — head grower, eleven seasons</p>
            <div className="mt-8">
              <TextLink href="/journal/meet-the-grower" className="text-paper">
                Read Wynand&rsquo;s story
              </TextLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
