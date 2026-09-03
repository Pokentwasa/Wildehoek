import ParallaxImage from '@/components/ui/ParallaxImage';
import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';
import { gatheringsIntro } from '@/data/events';

export default function GatheringsPreview() {
  return (
    <section className="bg-olive/95 py-section text-paper">
      <div className="container-editorial grid items-center gap-10 md:grid-cols-12 lg:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow text-paper/60">Gatherings</p>
            <h2 className="mt-6 font-serif text-display-md">{gatheringsIntro.heading}</h2>
            <p className="mt-6 max-w-measure font-sans leading-relaxed text-paper/80">
              {gatheringsIntro.body}
            </p>
            <div className="mt-8">
              <TextLink href="/gatherings" className="text-paper">
                Gather with us
              </TextLink>
            </div>
          </Reveal>
        </div>
        <Reveal clip className="md:col-span-7">
          <ParallaxImage
            src="/images/gatherings.jpg"
            alt="A long celebration table set on the oak lawn at golden hour"
            width={1500}
            height={1125}
            sizes="(max-width: 768px) 100vw, 58vw"
            className="aspect-[4/3] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
