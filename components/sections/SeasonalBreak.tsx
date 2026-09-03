import ParallaxImage from '@/components/ui/ParallaxImage';
import Reveal from '@/components/ui/Reveal';

/** Full-width visual break with minimal overlaid typography. */
export default function SeasonalBreak() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <ParallaxImage
        src="/images/seasonal-produce.jpg"
        alt="Just-picked spring produce laid across a weathered timber bench"
        width={2000}
        height={1000}
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        strength={80}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />
      <div className="container-editorial relative z-10 text-paper">
        <Reveal>
          <p className="eyebrow text-paper/70">Spring / 2026</p>
          <p className="mt-6 max-w-[20ch] font-serif text-display-md">
            What the farm gives us changes constantly. So does the menu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
