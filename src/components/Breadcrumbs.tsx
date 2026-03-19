import Link from "next/link";
import { Fragment } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://www.mapleworld.online${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-brand-ink/50">
        <li>
          <Link href="/" className="hover:text-brand-pinkdeep transition-colors">
            首页
          </Link>
        </li>
        {items.map((item, index) => (
          <Fragment key={index}>
            <li className="select-none">/</li>
            <li>
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-brand-pinkdeep transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-ink/80 font-medium">{item.label}</span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
