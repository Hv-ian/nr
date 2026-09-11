/**
 * Renders one JSON-LD graph into the page. Server side, so the markup is in
 * the exported HTML before any JavaScript runs.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Escaping "<" keeps a stray tag in the content from closing the script early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
