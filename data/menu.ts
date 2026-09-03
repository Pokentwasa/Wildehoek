export type Dietary = 'vegetarian' | 'vegan' | 'gluten-free' | 'contains-nuts';

export interface Dish {
  name: string;
  description: string;
  price: number; // in ZAR
  dietary?: Dietary[];
  seasonal?: boolean;
}

export interface MenuCategory {
  slug: string;
  title: string;
  note?: string;
  dishes: Dish[];
}

export const menuIntro = {
  heading: 'A menu written by the season.',
  body: 'Our dishes change as ingredients arrive from the field, the garden and nearby producers. What you read here is a snapshot — the kitchen rewrites it most weeks.',
};

export const menu: MenuCategory[] = [
  {
    slug: 'from-the-garden',
    title: 'From the Garden',
    dishes: [
      {
        name: 'Coal-roasted beetroot',
        description: "goat's curd · walnut · garden herbs",
        price: 145,
        dietary: ['vegetarian', 'gluten-free', 'contains-nuts'],
        seasonal: true,
      },
      {
        name: 'Charred hispi cabbage',
        description: 'brown butter · capers · rye crumb',
        price: 135,
        dietary: ['vegetarian'],
      },
      {
        name: 'Heirloom tomatoes',
        description: 'buttermilk · basil oil · sourdough',
        price: 130,
        dietary: ['vegetarian'],
        seasonal: true,
      },
    ],
  },
  {
    slug: 'from-the-fire',
    title: 'From the Fire',
    dishes: [
      {
        name: 'Whole grilled line fish',
        description: 'fennel · preserved lemon · fire-roasted leeks',
        price: 320,
        dietary: ['gluten-free'],
        seasonal: true,
      },
      {
        name: 'Dry-aged sirloin',
        description: 'burnt onion · bone marrow · watercress',
        price: 385,
      },
      {
        name: 'Ember-baked squash',
        description: 'seeds · sage · smoked labneh',
        price: 165,
        dietary: ['vegetarian', 'gluten-free'],
        seasonal: true,
      },
    ],
  },
  {
    slug: 'from-the-farm',
    title: 'From the Farm',
    dishes: [
      {
        name: 'Slow lamb shoulder',
        description: 'to share · rosemary · garden beans · pan juices',
        price: 640,
      },
      {
        name: 'Farmyard chicken',
        description: 'brined · wood-roasted · seasonal greens',
        price: 280,
        dietary: ['gluten-free'],
      },
    ],
  },
  {
    slug: 'something-sweet',
    title: 'Something Sweet',
    dishes: [
      {
        name: 'Buttermilk tart',
        description: 'brown sugar · cinnamon cream',
        price: 110,
        dietary: ['vegetarian'],
      },
      {
        name: 'Quince & almond',
        description: 'poached in red wine · frangipane · crème fraîche',
        price: 120,
        dietary: ['vegetarian', 'contains-nuts'],
        seasonal: true,
      },
    ],
  },
];

export const formatPrice = (zar: number) => `R${zar}`;
