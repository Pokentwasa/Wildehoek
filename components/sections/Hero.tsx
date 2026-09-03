import Image from 'next/image';
import { site } from '@/lib/site';
import BookButton from '@/components/layout/BookButton';

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] flex-col justify-end overflow-hidden">
      {/* LCP image: server-rendered, prioritised. object-position keeps the focal point on mobile. */}
      <Image
        src="/images/hero.jpg"
        alt="Wildehoek farm at golden hour, with the kitchen fire lit and the long table set beneath the oaks"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_center]"
      />
      {/* Legibility wash — bottom-weighted, never a flat overlay. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/30"
      />

      <div className="container-editorial relative z-10 pb-20 text-paper md:pb-24">
        <p className="eyebrow text-paper/70">
          {site.address.locality} · {site.address.region}
        </p>
        <h1 className="mt-6 max-w-[16ch] font-serif text-display-xl">
          From this land.
          <br />
          Around this table.
        </h1>
        <p className="mt-8 max-w-measure font-sans text-lg leading-relaxed text-paper/85">
          Seasonal cooking shaped by the farm, the fire and the people around it.
        </p>
        <div className="mt-10">
          <BookButton variant="outline" location="hero" className="border-paper text-paper" />
        </div>
      </div>

      {/* Quiet scroll cue */}
      <div className="container-editorial relative z-10 hidden pb-8 md:block">
        <span className="font-sans text-xs uppercase tracking-label text-paper/50">
          Scroll
        </span>
      </div>
    </section>
  );
}
