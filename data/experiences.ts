export interface Experience {
  title: string;
  description: string;
  image: string;
  alt: string;
}

/** The three dining environments — each rendered with a different composition. */
export const experiences: Experience[] = [
  {
    title: 'The Dining Room',
    description:
      'A warm, low-ceilinged room built around the open kitchen. You watch the fire do its work while you eat.',
    image: '/images/dining-room.jpg',
    alt: 'Intimate dining room with an open kitchen and warm lamplight',
  },
  {
    title: 'The Terrace',
    description:
      'Long lunches beneath the oaks, looking out over the vines and the working farm beyond them.',
    image: '/images/terrace.jpg',
    alt: 'Shaded stone terrace with tables set under mature oak trees',
  },
  {
    title: 'The Harvest Table',
    description:
      'One long communal table, set for a seasonal feast served family-style. Come as strangers, leave otherwise.',
    image: '/images/harvest-table.jpg',
    alt: 'A long communal harvest table set for a shared seasonal feast',
  },
];
