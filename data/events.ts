export interface FarmEvent {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const gatheringsIntro = {
  heading: 'Made for gathering.',
  body: 'Weddings under the trees, private dinners around the fire, birthdays that turn into long afternoons. We host a handful of gatherings each season and give each one the whole farm to breathe in.',
};

export const events: FarmEvent[] = [
  {
    title: 'Weddings & celebrations',
    description:
      'Intimate ceremonies and receptions for up to eighty guests, set across the terrace, the oak lawn and the dining room.',
    image: '/images/gatherings.jpg',
    alt: 'A celebration laid out on the oak lawn at golden hour',
  },
  {
    title: 'Private dinners',
    description:
      'A dedicated menu, the harvest table, and a kitchen cooking only for your party. Ideal for milestones and small groups.',
    image: '/images/harvest-table.jpg',
    alt: 'A private dinner set at the long harvest table',
  },
  {
    title: 'Long-table lunches',
    description:
      'Seasonal feasts for companies and clubs — one menu, one table, served family-style through the afternoon.',
    image: '/images/terrace.jpg',
    alt: 'A long-table lunch set beneath the oaks on the terrace',
  },
];
