import Image from 'next/image';
import ParallaxImage from '@/components/ui/ParallaxImage';
import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';

export default function KitchenStory() {
  return (
    <section className="bg-paper py-section">
      <div className="container-editorial grid gap-10 md:grid-cols-12 lg:gap-16">
        <div className="relative md:col-span-7">
          <Reveal clip>
            <ParallaxImage
              src="/images/kitchen-portrait.jpg"
              alt="A chef at the pass, plating a dish beside the open fire"
              width={1400}
              height={1800}
              sizes="(max-width: 768px) 100vw, 58vw"
              className="aspect-[7/9] w-full"
            />
          </Reveal>
          {/* small inset — hands / produce */}
          <Reveal
            clip
            className="absolute -bottom-8 -right-4 hidden w-40 lg:block xl:w-52"
          >
            <div className="img-clip aspect-square border-4 border-paper">
              <Image
                src="/images/kitchen-inset.jpg"
                alt="Hands trimming herbs cut from the garden minutes earlier"
                width={900}
                height={900}
                sizes="13rem"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center md:col-span-5">
          <Reveal>
            <p className="eyebrow">The Kitchen</p>
            <h2 className="mt-6 font-serif text-display-md text-ink">
              Cooking here begins long before service.
            </h2>
            <p className="mt-6 max-w-measure font-sans leading-relaxed text-ink-soft">
              Most mornings begin in the garden. By the time the first table is seated,
              the day&rsquo;s cooking has already been decided by what was picked, what the
              growers brought, and what the fire is ready to do.
            </p>
            <p className="mt-4 max-w-measure font-sans leading-relaxed text-ink-soft">
              We work closely with a small circle of nearby producers — a baker, a
              cheesemaker, two farms down the valley — and let their seasons shape ours.
            </p>
            <div className="mt-8">
              <TextLink href="/restaurant">Meet the kitchen</TextLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
