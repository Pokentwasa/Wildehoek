import Reveal from '@/components/ui/Reveal';

export default function Manifesto() {
  return (
    <section className="bg-limestone py-section">
      <div className="container-editorial">
        <div className="max-w-[62%] min-w-[18rem]">
          <Reveal clip>
            <h2 className="font-serif text-display-lg text-ink">
              A restaurant shaped by the seasons and everything growing around us.
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal className="max-w-measure">
            <p className="font-sans text-lg leading-relaxed text-ink-soft">
              We cook what the farm gives us on the day it gives it. Some mornings that
              means the first asparagus of spring; some evenings it means whatever the
              fire and the garden agree on. The menu follows, rather than leads.
            </p>
          </Reveal>
          <Reveal className="md:text-right">
            <p className="eyebrow">Open Wednesday – Sunday</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
