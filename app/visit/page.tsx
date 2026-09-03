import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import VisitDetails from '@/components/sections/VisitDetails';

export const metadata: Metadata = {
  title: 'Visit',
  description:
    'How to find Wildehoek in Wellington, Western Cape — address, opening hours, contact, directions and parking.',
  alternates: { canonical: '/visit' },
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        kicker="Visit"
        title="A little way out of Wellington, and worth the drive."
        intro="We are on the Bovlei road, forty-five minutes from Cape Town and a world away from it. Book ahead — the room is small and fills quickly."
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Visit', path: '/visit' },
        ]}
        image={{
          src: '/images/visit.jpg',
          alt: 'The approach to the farm through the vineyards',
        }}
      />
      <VisitDetails heading="Everything you need" />
    </>
  );
}
