import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import DiningExperience from '@/components/sections/DiningExperience';
import KitchenStory from '@/components/sections/KitchenStory';
import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';

export const metadata: Metadata = {
  title: 'The Restaurant',
  description:
    'A farm kitchen built around fire and the seasons, in Wellington in the Cape Winelands. Meet the room, the kitchen and the people behind the table.',
  alternates: { canonical: '/restaurant' },
};

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        kicker="The Restaurant"
        title="A farm kitchen built around fire and the season."
        intro="Wildehoek is one room, one open kitchen and a long table, set on a working farm outside Wellington. We cook what the land gives us, over wood, for people who came a little way to be here."
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Restaurant', path: '/restaurant' },
        ]}
        image={{
          src: '/images/dining-room.jpg',
          alt: 'The dining room at dusk with the open kitchen fire lit',
        }}
      />

      <section className="bg-limestone py-section">
        <div className="container-editorial grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Our point of view</p>
          </Reveal>
          <Reveal className="md:col-span-8 md:max-w-measure-wide">
            <p className="font-serif text-display-sm leading-tight text-ink">
              Grown here. Cooked here. Shared here.
            </p>
            <p className="mt-8 font-sans leading-relaxed text-ink-soft">
              We are not trying to reinvent anything. We grow a great deal of what we
              cook, buy the rest from people we know, and let the fire and the season do
              most of the work. The result changes constantly — that is the whole idea.
            </p>
            <p className="mt-4 font-sans leading-relaxed text-ink-soft">
              Lunch follows the season. So does dinner. If you want to know what is on
              the plate this week, the honest answer is that it depends on the week.
            </p>
            <div className="mt-8">
              <TextLink href="/menu">See this week&rsquo;s menu</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      <KitchenStory />
      <DiningExperience />
    </>
  );
}
