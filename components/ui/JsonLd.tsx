/**
 * Renders a JSON-LD <script> in the server-rendered HTML.
 * Kept as a server component so structured data is always crawlable.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, static content generated from our own config.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
