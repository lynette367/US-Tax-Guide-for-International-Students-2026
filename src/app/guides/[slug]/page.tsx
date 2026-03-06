import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, guides } from "@/lib/guides";
import TaxQuiz from "@/components/TaxQuiz";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `https://www.mapleworld.online/guides/${slug}`,
    },
  };
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="pb-16 text-brand-ink">
      <section className="px-4 py-12 sm:py-16">
        <div className="page-shell">
          <article className="max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
              Guide
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold">
              {guide.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-brand-ink/70">
              {guide.description}
            </p>
            <p className="mt-2 text-sm text-brand-ink/60">
              适合：{guide.audience}
            </p>

            {guide.sections.map((section, index) => {
              const HeadingTag = section.level === 3 ? "h3" : "h2";
              return (
                <section key={`${section.heading}-${index}`} className="mt-10">
                  <HeadingTag className="text-xl sm:text-2xl font-semibold">
                    {section.heading}
                  </HeadingTag>
                  <div className="mt-4 space-y-4 text-sm sm:text-base text-brand-ink/75">
                    {section.blocks.map((block, blockIndex) => {
                      if (block.type === "paragraph") {
                        return <p key={blockIndex}>{block.text}</p>;
                      }
                      if (block.type === "list") {
                        const ListTag = block.ordered ? "ol" : "ul";
                        return (
                          <ListTag
                            key={blockIndex}
                            className={`space-y-2 ${block.ordered
                              ? "list-decimal pl-5"
                              : "list-disc pl-5"
                              }`}
                          >
                            {block.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ListTag>
                        );
                      }
                      if (block.type === "table") {
                        return (
                          <div
                            key={blockIndex}
                            className="overflow-x-auto rounded-[20px] border border-brand-pink/40 bg-white/90"
                          >
                            <table className="w-full text-left text-sm">
                              <thead className="bg-brand-pink/20 text-brand-ink">
                                <tr>
                                  {block.headers.map((header) => (
                                    <th
                                      key={header}
                                      className="px-4 py-3 font-semibold"
                                    >
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-brand-pink/30">
                                {block.rows.map((row, rowIndex) => (
                                  <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                      <td
                                        key={`${rowIndex}-${cellIndex}`}
                                        className="px-4 py-3"
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                      if (block.type === "quiz") {
                        return <TaxQuiz key={blockIndex} />;
                      }
                      return null;
                    })}
                  </div>
                </section>
              );
            })}

            <section className="mt-12">
              <h2 className="text-xl sm:text-2xl font-semibold">FAQ</h2>
              <div className="mt-4 grid gap-3">
                {guide.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="rounded-[20px] border border-brand-pink/30 bg-white/90 p-4 text-sm text-brand-ink/70"
                  >
                    <summary className="cursor-pointer font-semibold text-brand-ink">
                      {faq.question}
                    </summary>
                    <p className="mt-3">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[28px] border border-brand-pink/40 bg-white/95 p-6 shadow-[0_18px_60px_rgba(244,185,200,0.25)]">
              <h2 className="text-lg sm:text-xl font-semibold">
                不想靠猜？
              </h2>
              <Link
                href={guide.cta.href}
                className="mt-4 inline-flex rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                {guide.cta.label}
              </Link>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
