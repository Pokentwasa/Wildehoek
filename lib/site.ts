/**
 * Single source of truth for restaurant details.
 * These values map directly to CMS fields — replace with headless CMS
 * queries (Poke Digital CMS / Sanity / etc.) without touching components.
 */

export const site = {
  name: 'Wildehoek',
  tagline: 'A farm kitchen in the Cape Winelands',
  estate: 'Wildehoek Farm',
  cuisine: 'Farm-to-table',
  priceRange: 'R450–R900',
  // Absolute site URL — used for canonical, sitemap, OG and JSON-LD.
  url: 'https://wildehoek.co.za',
  description:
    'Wildehoek is a farm-to-table restaurant in Wellington, Western Cape. Seasonal cooking shaped by the farm, the fire and the people around the table.',

  address: {
    street: 'Bovlei Road, R301',
    locality: 'Wellington',
    region: 'Western Cape',
    postalCode: '7655',
    country: 'ZA',
    countryName: 'South Africa',
  },

  geo: {
    latitude: -33.6203,
    longitude: 19.0113,
  },

  contact: {
    phone: '+27 21 864 0000',
    phoneHref: '+27218640000',
    email: 'table@wildehoek.co.za',
  },

  // Configurable external booking URL (Dineplan / OpenTable / bespoke form).
  bookingUrl: 'https://dineplan.com/restaurants/wildehoek',

  // Menu PDF served from /public — swap for a CMS asset URL.
  menuPdf: '/wildehoek-menu.pdf',

  hours: [
    { days: 'Wednesday – Friday', service: 'Lunch', time: '12:00 – 15:00' },
    { days: 'Wednesday – Saturday', service: 'Dinner', time: '18:00 – 21:30' },
    { days: 'Sunday', service: 'Long lunch', time: '12:00 – 16:00' },
    { days: 'Monday – Tuesday', service: 'Closed', time: '' },
  ],

  // Structured opening hours for JSON-LD (24h, ISO day codes).
  openingHours: [
    { days: ['Wednesday', 'Thursday', 'Friday'], opens: '12:00', closes: '15:00' },
    { days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '18:00', closes: '21:30' },
    { days: ['Sunday'], opens: '12:00', closes: '16:00' },
  ],

  social: {
    instagram: 'https://instagram.com/wildehoek',
    instagramHandle: '@wildehoek',
  },

  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-33.6203,19.0113',
} as const;

export type Site = typeof site;
