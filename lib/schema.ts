import { site } from './site';
import type { JournalPost } from '@/data/journal';

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

const openingHoursSpecification = site.openingHours.map((h) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: h.days,
  opens: h.opens,
  closes: h.closes,
}));

/** Primary local-business schema. No fake review aggregate. */
export function restaurantSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${site.url}/#restaurant`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/images/hero.jpg`,
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: site.priceRange,
    servesCuisine: site.cuisine,
    acceptsReservations: 'True',
    menu: `${site.url}/menu`,
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification,
    sameAs: [site.social.instagram],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: 'en-ZA',
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/og-image.jpg`,
    sameAs: [site.social.instagram],
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function articleSchema(post: JournalPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}${post.heroImage}`,
    datePublished: post.publishedDate,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@id': `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/journal/${post.slug}`,
  };
}
