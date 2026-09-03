import ParallaxImage from '@/components/ui/ParallaxImage';
import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';

export default function FarmStory() {
  return (
    <section className="bg-paper py-section">
      <div className="container-editorial grid items-center gap-10 md:grid-cols-12 lg:gap-16">
        <div className="md:col-span-7">
          <Reveal clip>
            <ParallaxImage
              src="/images/farm-portrait.jpg"
              alt="Rows of vegetables in the kitchen garden with the farmhouse behind"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 100vw, 58vw"
              className="aspect-[3/4] w-full"
            />
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow">01 / The Farm</p>
            <h2 className="mt-6 font-serif text-display-md text-ink">
              What grows here finds its way onto the table.
            </h2>
            <p className="mt-6 max-w-measure font-sans leading-relaxed text-ink-soft">
              The garden sits a short walk from the kitchen door. Between them runs a
              simple agreement: the growers plant for the seasons ahead, the kitchen
              cooks whatever comes ready, and nothing travels further than it needs to.
            </p>
            <div className="mt-8">
              <TextLink href="/farm">Discover the farm</TextLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
