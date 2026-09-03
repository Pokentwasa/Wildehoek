import ParallaxImage from '@/components/ui/ParallaxImage';
import Reveal from '@/components/ui/Reveal';
import { experiences } from '@/data/experiences';

/**
 * Three dining environments. Each is composed differently on purpose —
 * split, full-bleed, and offset — so the eye never settles into a template.
 */
export default function DiningExperience() {
  const [room, terrace, harvest] = experiences;

  return (
    <section className="bg-limestone py-section">
      <div className="container-editorial">
        <Reveal className="max-w-measure-wide">
          <h2 className="font-serif text-display-md text-ink">
            Three ways to spend an afternoon here.
          </h2>
        </Reveal>
      </div>

      {/* 1 — split: image left, text right */}
      <div className="container-editorial mt-16 grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <Reveal clip>
          <ParallaxImage
            src={room.image}
            alt={room.alt}
            width={1400}
            height={1050}
            sizes="(max-width: 768px) 100vw, 46vw"
            className="aspect-[4/3] w-full"
          />
        </Reveal>
        <Reveal>
          <h3 className="font-serif text-display-sm text-ink">{room.title}</h3>
          <p className="mt-5 max-w-measure font-sans leading-relaxed text-ink-soft">
            {room.description}
          </p>
        </Reveal>
      </div>

      {/* 2 — full-bleed image with an anchored caption */}
      <div className="relative mt-24 md:mt-32">
        <Reveal clip>
          <ParallaxImage
            src={terrace.image}
            alt={terrace.alt}
            width={1600}
            height={1000}
            sizes="100vw"
            className="aspect-[16/10] w-full md:aspect-[2/1]"
          />
        </Reveal>
        <div className="container-editorial">
          <Reveal className="mt-6 md:absolute md:bottom-8 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:px-6">
            <div className="md:max-w-md md:bg-limestone/95 md:p-8 md:backdrop-blur-sm">
              <h3 className="font-serif text-display-sm text-ink">{terrace.title}</h3>
              <p className="mt-4 font-sans leading-relaxed text-ink-soft">
                {terrace.description}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 3 — offset: text left, tall portrait right */}
      <div className="container-editorial mt-24 grid items-center gap-10 md:mt-32 md:grid-cols-12 lg:gap-16">
        <Reveal className="md:col-span-5 md:pr-8">
          <h3 className="font-serif text-display-sm text-ink">{harvest.title}</h3>
          <p className="mt-5 max-w-measure font-sans leading-relaxed text-ink-soft">
            {harvest.description}
          </p>
        </Reveal>
        <Reveal clip className="md:col-span-7">
          <ParallaxImage
            src={harvest.image}
            alt={harvest.alt}
            width={1400}
            height={1750}
            sizes="(max-width: 768px) 100vw, 58vw"
            className="aspect-[4/5] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
