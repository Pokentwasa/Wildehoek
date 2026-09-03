import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import JsonLd from '@/components/ui/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

interface PageHeroProps {
  kicker: string;
  title: string;
  intro?: string;
  breadcrumb: { name: string; path: string }[];
  image?: { src: string; alt: string };
}

export default function PageHero({ kicker, title, intro, breadcrumb, image }: PageHeroProps) {
  return (
    <section className="bg-limestone pt-[calc(72px+clamp(3rem,8vh,6rem))]">
      <JsonLd data={breadcrumbSchema(breadcrumb)} />
      <div className="container-editorial">
        <Reveal>
          <nav aria-label="Breadcrumb" className="font-sans text-xs uppercase tracking-label text-earth">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumb.map((c, i) => (
                <li key={c.path} className="flex items-center gap-2">
                  {i < breadcrumb.length - 1 ? (
                    <Link href={c.path} className="hover:text-ink">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="text-ink-soft">{c.name}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <p className="mt-8 eyebrow">{kicker}</p>
          <h1 className="mt-5 max-w-[18ch] font-serif text-display-lg text-ink">{title}</h1>
          {intro && (
            <p className="mt-8 max-w-measure-wide font-sans text-lg leading-relaxed text-ink-soft">
              {intro}
            </p>
          )}
        </Reveal>
      </div>

      {image && (
        <Reveal clip className="container-editorial mt-14">
          <div className="img-clip aspect-[16/9] w-full md:aspect-[2.4/1]">
            <Image
              src={image.src}
              alt={image.alt}
              width={2000}
              height={1100}
              priority
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      )}
    </section>
  );
}
