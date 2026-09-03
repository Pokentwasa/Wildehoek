import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { journal } from '@/data/journal';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ['', '/restaurant', '/menu', '/farm', '/gatherings', '/journal', '/visit'].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    }),
  );

  const posts = journal.map((post) => ({
    url: `${site.url}/journal/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
