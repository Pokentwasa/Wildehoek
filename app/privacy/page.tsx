import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `How ${site.name} handles the information you share with us.`,
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Privacy"
        title="What we do with your information."
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Privacy', path: '/privacy' },
        ]}
      />
      <section className="bg-limestone py-section">
        <div className="container-editorial max-w-measure space-y-6 font-sans leading-relaxed text-ink-soft">
          <Reveal>
            <p>
              We collect only what we need to take your booking and reply to your
              enquiries — your name, contact details and any notes you send us. We do
              not sell your information to anyone.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Reservations are handled by our booking provider under their own privacy
              terms. Our website uses privacy-conscious analytics to understand how
              pages are used. You can opt out through your browser settings.
            </p>
          </Reveal>
          <Reveal>
            <p>
              For anything privacy-related, write to us at{' '}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-ink underline underline-offset-4"
              >
                {site.contact.email}
              </a>
              .
            </p>
          </Reveal>
          <Reveal>
            <p className="text-sm text-earth">
              This is placeholder copy — replace it with a policy reviewed for POPIA
              compliance before launch.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
