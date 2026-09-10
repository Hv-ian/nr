import { pageSchema } from "@/lib/schema";
import type { PageKey } from "@/lib/routing";
import type { Locale } from "@/lib/translations";

/**
 * Emits the page's JSON-LD graph. Rendered server side so it is present in the
 * exported HTML that crawlers read, without waiting for any JavaScript.
 */
export default function StructuredData({ locale, page }: { locale: Locale; page: PageKey }) {
  return (
    <script
      type="application/ld+json"
      // Escaping "<" keeps a stray tag in the copy from closing the script early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(pageSchema(locale, page)).replace(/</g, "\\u003c"),
      }}
    />
  );
}
