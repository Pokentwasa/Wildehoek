import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/ui/Reveal';
import TrackedLink from '@/components/ui/TrackedLink';
import JsonLd from '@/components/ui/JsonLd';
import BookButton from '@/components/layout/BookButton';
import { menu, menuIntro, formatPrice } from '@/data/menu';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'A seasonal farm-to-table menu that changes as ingredients arrive from the field, the garden and nearby producers. From the Garden, the Fire, the Farm and Something Sweet.',
  alternates: { canonical: '/menu' },
};

const dietaryLabels: Record<string, string> = {
  vegetarian: 'V',
  vegan: 'VG',
  'gluten-free': 'GF',
  'contains-nuts': 'N',
};

// Menu JSON-LD built from the same data the page renders.
const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: `${site.name} Menu`,
  hasMenuSection: menu.map((cat) => ({
    '@type': 'MenuSection',
    name: cat.title,
    hasMenuItem: cat.dishes.map((d) => ({
      '@type': 'MenuItem',
      name: d.name,
      description: d.description,
      offers: { '@type': 'Offer', price: d.price, priceCurrency: 'ZAR' },
    })),
  })),
};

export default function MenuPage() {
  return (
    <>
      <JsonLd data={menuSchema} />
      <PageHero
        kicker="Menu"
        title={menuIntro.heading}
        intro={menuIntro.body}
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Menu', path: '/menu' },
        ]}
      />

      <section className="bg-limestone py-section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            {menu.map((cat) => (
              <Reveal key={cat.slug} className="mb-16 last:mb-0">
                <div className="flex items-baseline justify-between border-b border-ink/20 pb-4">
                  <h2 className="font-serif text-display-sm text-ink">{cat.title}</h2>
                </div>
                <ul className="mt-8 space-y-8">
                  {cat.dishes.map((dish) => (
                    <li key={dish.name}>
                      <div className="flex items-baseline gap-4">
                        <h3 className="font-serif text-2xl text-ink">{dish.name}</h3>
                        {dish.seasonal && (
                          <span className="font-sans text-[0.7rem] uppercase tracking-label text-clay">
                            In season
                          </span>
                        )}
                        <span
                          className="mx-2 hidden flex-1 self-end border-b border-dotted border-ink/25 sm:block"
                          aria-hidden="true"
                        />
                        <span className="font-sans text-ink-soft">
                          {formatPrice(dish.price)}
                        </span>
                      </div>
                      <p className="mt-1.5 font-sans text-ink-soft">
                        {dish.description}
                        {dish.dietary && dish.dietary.length > 0 && (
                          <span className="ml-2 text-sm text-earth">
                            {dish.dietary.map((d) => dietaryLabels[d]).join(' · ')}
                          </span>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Reveal className="mt-16 border-t border-ink/15 pt-8">
              <p className="font-sans text-sm text-ink-soft">
                V vegetarian · VG vegan · GF gluten-free · N contains nuts. Please tell
                us about allergies when you book — the kitchen will adapt where it can.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <BookButton variant="solid" location="menu" />
                <TrackedLink
                  href={site.menuPdf}
                  event="menu_view"
                  external
                  className="text-link"
                >
                  <span>Download menu (PDF)</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </TrackedLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
