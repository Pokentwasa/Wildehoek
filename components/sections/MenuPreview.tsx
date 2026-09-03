import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';
import { menu, menuIntro, formatPrice } from '@/data/menu';

/** A restrained taste of the menu — the full, current list lives on /menu. */
export default function MenuPreview() {
  // Show two categories on the homepage; the rest on the menu page.
  const preview = menu.slice(0, 2);

  return (
    <section className="bg-ink py-section text-paper">
      <div className="container-editorial">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <h2 className="max-w-[16ch] font-serif text-display-md">{menuIntro.heading}</h2>
          </Reveal>
          <Reveal className="max-w-measure">
            <p className="font-sans leading-relaxed text-paper/70">{menuIntro.body}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {preview.map((cat) => (
            <Reveal key={cat.slug}>
              <h3 className="font-sans text-sm uppercase tracking-label text-clay">
                {cat.title}
              </h3>
              <ul className="mt-6 space-y-6">
                {cat.dishes.map((dish) => (
                  <li key={dish.name} className="border-b border-paper/15 pb-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-serif text-xl">{dish.name}</span>
                      <span className="font-sans text-sm text-paper/60">
                        {formatPrice(dish.price)}
                      </span>
                    </div>
                    <p className="mt-1.5 font-sans text-sm text-paper/60">
                      {dish.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <TextLink href="/menu" className="text-paper">
            View current menu
          </TextLink>
        </div>
      </div>
    </section>
  );
}
