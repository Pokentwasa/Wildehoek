import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';
import { journal, formatDate } from '@/data/journal';

export default function JournalPreview() {
  const posts = journal.slice(0, 3);

  return (
    <section className="bg-limestone py-section">
      <div className="container-editorial">
        <div className="flex items-end justify-between gap-8">
          <Reveal>
            <p className="eyebrow">Journal</p>
            <h2 className="mt-6 font-serif text-display-md text-ink">
              Notes from the farm.
            </h2>
          </Reveal>
          <Reveal className="hidden md:block">
            <TextLink href="/journal">All stories</TextLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <div className="img-clip aspect-[4/5]">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    width={1200}
                    height={1500}
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 font-sans text-xs uppercase tracking-label text-earth">
                  {post.category} · {formatDate(post.publishedDate)}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-ink transition-colors group-hover:text-clay">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-measure font-sans text-sm leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <TextLink href="/journal">All stories</TextLink>
        </div>
      </div>
    </section>
  );
}
