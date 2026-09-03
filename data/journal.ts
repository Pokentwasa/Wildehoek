export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  heroImage: string;
  heroAlt: string;
  publishedDate: string; // ISO
  author: string;
  readingTime: string;
  category: string;
  /** Body as ordered paragraphs — a stand-in for CMS rich text. */
  body: string[];
}

export const journal: JournalPost[] = [
  {
    slug: 'harvest-notes-september',
    title: 'Harvest Notes / September',
    excerpt:
      'The first asparagus is up, the broad beans are heavy, and the kitchen has started planning around them.',
    heroImage: '/images/journal-harvest.jpg',
    heroAlt: 'Early spring produce laid out on a timber bench in the farm garden',
    publishedDate: '2026-09-01',
    author: 'Nadia Fortuin',
    readingTime: '4 min',
    category: 'From the garden',
    body: [
      'September on the farm is a month of small, decisive changes. Overnight the beds seem to fill in. The asparagus that was a rumour a week ago is suddenly a crop, and the broad beans have swelled to the point where they ask to be picked.',
      'We plan the menu backwards from mornings like this. Whatever comes out of the garden by nine decides what goes on the plate by twelve. It is a way of cooking that keeps everyone honest — you cannot promise a dish that the ground has not delivered.',
      'This week the kitchen is leaning into green: raw broad beans dressed with new oil, asparagus barely kissed by the fire, herbs cut minutes before service. None of it will last. That is rather the point.',
    ],
  },
  {
    slug: 'meet-the-grower',
    title: 'Meet the Grower',
    excerpt:
      'Everything begins with Wynand, who has worked these beds for eleven years and reads the weather better than any forecast.',
    heroImage: '/images/journal-grower.jpg',
    heroAlt: 'A grower kneeling among rows of vegetables in early morning light',
    publishedDate: '2026-08-18',
    author: 'Nadia Fortuin',
    readingTime: '5 min',
    category: 'The people',
    body: [
      'Long before there is a menu, there is Wynand. He has worked these beds for eleven years, and he plants for a table he cannot see — guessing, months ahead, what the kitchen will want and when the season will hand it over.',
      'Ask him about the forecast and he will look at the mountain instead of his phone. He is usually right. The relationship between grower and kitchen here is not a supply chain; it is a conversation that runs from the soil to the plate and back again.',
      "What he grows shapes how we cook. When he plants something unfamiliar, we learn to use it. That is how the menu stays curious.",
    ],
  },
  {
    slug: 'cooking-over-fire',
    title: 'Cooking Over Fire',
    excerpt:
      'Fire is the least forgiving and most rewarding tool in the kitchen. Here is how we think about it.',
    heroImage: '/images/journal-fire.jpg',
    heroAlt: 'Vegetables charring over an open wood fire in the kitchen',
    publishedDate: '2026-07-29',
    author: 'Thomas de Villiers',
    readingTime: '6 min',
    category: 'In the kitchen',
    body: [
      'Fire changes everything. It is the least forgiving tool we have and the most rewarding. There is no dial to turn down, no timer that saves you — only attention, and the willingness to move something the moment it is ready.',
      'We cook over vine cuttings and old oak. Each wood gives its own note, and part of the work is learning to taste the smoke as much as the food. A cabbage cooked slowly at the edge of the coals is a different thing entirely to one thrown over the flame.',
      'Guests often ask why food from the fire tastes the way it does. The honest answer is that we are still learning. Every service teaches us something the last one did not.',
    ],
  },
  {
    slug: 'a-winter-lunch-on-the-farm',
    title: 'A Winter Lunch on the Farm',
    excerpt:
      'When the rain sets in, the long table moves indoors and lunch slows down to match the weather.',
    heroImage: '/images/journal-winter.jpg',
    heroAlt: 'A long communal table set for lunch beside a window looking over wet farmland',
    publishedDate: '2026-06-12',
    author: 'Nadia Fortuin',
    readingTime: '4 min',
    category: 'At the table',
    body: [
      'Winter lunches have a rhythm of their own. The rain sets in over the Bovlei, the long table moves closer to the fire, and there is no reason at all to hurry.',
      'The menu turns to slower things: braised shoulders, roasted roots, broths that have been on the stove since dawn. Wine is poured a little more generously. Afternoons stretch.',
      'A long lunch is rarely a bad idea. In winter it is almost obligatory.',
    ],
  },
];

export const getPost = (slug: string) => journal.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
