import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import TrackedLink from '@/components/ui/TrackedLink';
import BookButton from '@/components/layout/BookButton';
import { site } from '@/lib/site';

/** Visit information: address, hours, contact, reservation, directions and a quiet map. */
export default function VisitDetails({ heading = 'Find us' }: { heading?: string }) {
  return (
    <section className="bg-paper py-section" id="visit">
      <div className="container-editorial grid gap-12 md:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Visit</p>
          <h2 className="mt-6 font-serif text-display-md text-ink">{heading}</h2>

          <dl className="mt-10 space-y-8">
            <div>
              <dt className="eyebrow text-earth">Where</dt>
              <dd className="mt-2 font-sans leading-relaxed text-ink-soft">
                {site.estate}
                <br />
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region}, {site.address.postalCode}
              </dd>
            </div>

            <div>
              <dt className="eyebrow text-earth">Hours</dt>
              <dd className="mt-2 space-y-1.5">
                {site.hours.map((h) => (
                  <div
                    key={`${h.days}-${h.service}`}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 border-b border-ink/10 py-1.5 font-sans text-sm"
                  >
                    <span className="text-ink">
                      {h.days}
                      <span className="text-ink-soft"> · {h.service}</span>
                    </span>
                    <span className="text-ink-soft">{h.time || '—'}</span>
                  </div>
                ))}
              </dd>
            </div>

            <div>
              <dt className="eyebrow text-earth">Contact</dt>
              <dd className="mt-2 flex flex-col gap-1.5 font-sans text-sm text-ink-soft">
                <TrackedLink
                  href={`tel:${site.contact.phoneHref}`}
                  event="phone_click"
                  className="w-fit underline-offset-4 hover:underline"
                >
                  {site.contact.phone}
                </TrackedLink>
                <TrackedLink
                  href={`mailto:${site.contact.email}`}
                  event="email_click"
                  className="w-fit underline-offset-4 hover:underline"
                >
                  {site.contact.email}
                </TrackedLink>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <BookButton variant="solid" location="visit" />
            <TrackedLink
              href={site.directionsUrl}
              event="directions_click"
              external
              className="text-link"
            >
              <span>Get directions</span>
              <span className="arrow" aria-hidden="true">→</span>
            </TrackedLink>
          </div>
          <p className="mt-6 font-sans text-sm text-ink-soft">
            Free parking on the estate. The turn-off is signposted from the R301.
          </p>
        </Reveal>

        <Reveal clip>
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="img-clip block aspect-[4/5] md:aspect-auto md:h-full"
            aria-label="Open directions to the farm in Google Maps"
          >
            <Image
              src="/images/map.jpg"
              alt="Stylised map showing the farm's position in the Bovlei valley near Wellington"
              width={1400}
              height={900}
              sizes="(max-width: 768px) 100vw, 46vw"
              className="h-full w-full object-cover"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
