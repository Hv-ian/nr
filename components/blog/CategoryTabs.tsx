import Link from "next/link";
import type { Category } from "@/lib/blog";
import { blogCategoryPath, blogPath } from "@/lib/routing";
import { translations, type Locale } from "@/lib/translations";

/**
 * Category filter. These are real links to real URLs rather than client-side
 * state, so each category is its own indexable page.
 */
export default function CategoryTabs({
  locale,
  categories,
  active,
}: {
  locale: Locale;
  categories: Category[];
  active: Category | null;
}) {
  const t = translations[locale].blog;

  const tabs = [
    { key: null, label: t.all, href: blogPath(locale) },
    ...categories.map((category) => ({
      key: category,
      label: t.categories[category],
      href: blogCategoryPath(locale, category),
    })),
  ];

  return (
    <nav className="-mx-6 overflow-x-auto px-6">
      <ul className="flex min-w-max items-center gap-1 border-b border-border">
        {tabs.map((tab) => {
          const current = tab.key === active;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={current ? "page" : undefined}
                className={`-mb-px block border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  current
                    ? "border-accent text-accent"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
