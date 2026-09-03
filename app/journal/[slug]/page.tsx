import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';
import JsonLd from '@/components/ui/JsonLd';
import ViewTracker from '@/components/ui/ViewTracker';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { journal, getPost, formatDate } from '@/data/journal';

export function generateStaticParams() {
  return journal.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [{ url: post.heroImage }],
    },
  };
}

export default function JournalPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = journal.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Journal', path: '/journal' },
          { name: post.title, path: `/journal/${post.slug}` },
        ])}
      />
      <ViewTracker slug={post.slug} />

      <article className="bg-limestone pb-section pt-[calc(72px+clamp(3rem,8vh,6rem))]">
        <header className="container-editorial">
          <Reveal>
            <nav aria-label="Breadcrumb" className="font-sans text-xs uppercase tracking-label text-earth">
              <Link href="/journal" className="hover:text-ink">
                Journal
              </Link>
            </nav>
            <p className="mt-8 font-sans text-xs uppercase tracking-label text-earth">
              {post.category} · {formatDate(post.publishedDate)} · {post.readingTime}
            </p>
            <h1 className="mt-5 max-w-[20ch] font-serif text-display-lg text-ink">
              {post.title}
            </h1>
            <p className="mt-6 font-sans text-sm text-ink-soft">Words by {post.author}</p>
          </Reveal>
        </header>

        <Reveal clip className="container-editorial mt-12">
          <div className="img-clip aspect-[16/10] w-full md:aspect-[2/1]">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              width={2000}
              height={1000}
              priority
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="container-editorial mt-16">
          <div className="mx-auto max-w-measure">
            {post.body.map((para, i) => (
              <Reveal key={i}>
                <p
                  className={`font-sans leading-loose text-ink-soft ${
                    i === 0
                      ? 'first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-clay'
                      : 'mt-6'
                  }`}
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-paper py-section">
        <div className="container-editorial">
          <p className="eyebrow">Keep reading</p>
          <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {more.map((p) => (
              <Reveal key={p.slug}>
                <Link href={`/journal/${p.slug}`} className="group grid grid-cols-[auto_1fr] gap-5">
                  <div className="img-clip aspect-square w-28 shrink-0">
                    <Image
                      src={p.heroImage}
                      alt={p.heroAlt}
                      width={400}
                      height={400}
                      sizes="7rem"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-label text-earth">
                      {p.category}
                    </p>
                    <h3 className="mt-2 font-serif text-xl text-ink transition-colors group-hover:text-clay">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <TextLink href="/journal">All stories</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
