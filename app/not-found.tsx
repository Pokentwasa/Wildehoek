import Link from 'next/link';
import TextLink from '@/components/ui/TextLink';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-limestone pt-[72px]">
      <div className="container-editorial">
        <p className="eyebrow">Lost the path</p>
        <h1 className="mt-6 font-serif text-display-lg text-ink">
          This page has wandered off.
        </h1>
        <p className="mt-6 max-w-measure font-sans leading-relaxed text-ink-soft">
          The page you were after isn&rsquo;t here. It may have moved with the season.
        </p>
        <div className="mt-8">
          <TextLink href="/">Back to the farm</TextLink>
        </div>
      </div>
    </section>
  );
}
