import ParallaxImage from '@/components/ui/ParallaxImage';
import Reveal from '@/components/ui/Reveal';

/** A viewport-height chapter break. Minimal text over fire imagery. */
export default function CinematicBreak() {
  return (
    <section className="relative flex h-[90vh] min-h-[560px] items-center justify-center overflow-hidden text-center">
      <ParallaxImage
        src="/images/cinematic-fire.jpg"
        alt="Wood fire burning low in the open kitchen hearth"
        width={2000}
        height={1200}
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        strength={90}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/50" />
      <Reveal className="container-editorial relative z-10">
        <p className="font-serif text-display-lg text-paper">Come hungry. Stay awhile.</p>
      </Reveal>
    </section>
  );
}
