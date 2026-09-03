import Link from 'next/link';
import { site } from '@/lib/site';

const groups = [
  {
    heading: 'Explore',
    links: [
      { href: '/restaurant', label: 'Restaurant' },
      { href: '/farm', label: 'Our Farm' },
      { href: '/menu', label: 'Menu' },
      { href: '/gatherings', label: 'Gatherings' },
      { href: '/journal', label: 'Journal' },
    ],
  },
  {
    heading: 'Visit',
    links: [
      { href: '/visit', label: 'Find us' },
      { href: site.directionsUrl, label: 'Directions', external: true },
      { href: `tel:${site.contact.phoneHref}`, label: site.contact.phone, external: true },
      { href: `mailto:${site.contact.email}`, label: site.contact.email, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-editorial py-section">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-display-sm">{site.name}</p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-paper/60">
              {site.estate}, {site.address.street}, {site.address.locality},{' '}
              {site.address.region}, {site.address.countryName}.
            </p>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-sans text-sm text-paper/80 underline-offset-4 hover:underline"
            >
              Instagram {site.social.instagramHandle}
            </a>
          </div>

          {groups.map((g) => (
            <nav key={g.heading} aria-label={g.heading}>
              <p className="eyebrow text-paper/40">{g.heading}</p>
              <ul className="mt-5 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target={l.href.startsWith('http') ? '_blank' : undefined}
                        rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-sans text-sm text-paper/80 transition-colors hover:text-paper"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="font-sans text-sm text-paper/80 transition-colors hover:text-paper"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-paper/15 pt-8 text-sm text-paper/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Made with care in the Cape Winelands.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-paper">
              Privacy
            </Link>
            <span>{site.address.locality} · {site.address.region}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
