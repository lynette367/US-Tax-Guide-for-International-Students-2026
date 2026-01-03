import type { Metadata } from "next";
import Link from "next/link";
import { archiveEntries } from "@/app/archive/archiveEntries";

export const metadata: Metadata = {
  title: "Archive · 旧内容归档",
  description: "旧版咨询与泛留学内容归档入口（不再维护）。",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ArchivePage() {
  return (
    <main className="pb-16 text-brand-ink">
      <section className="px-4 py-12 sm:py-16">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
              Archive
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold">
              旧内容归档（不再维护）
            </h1>
            <p className="mt-4 text-sm sm:text-base text-brand-ink/70">
              这些页面为历史咨询内容，为保证外链可访问仍保留，但不再更新。
              如果你需要的是“美国留学生报税判断”，请优先使用 Guides 与 Tools。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                去 Guides
              </Link>
              <Link
                href="/tools/opt-tax"
                className="inline-flex items-center justify-center rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                去 Tools
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {archiveEntries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/archive/${entry.slug}`}
                className="soft-card block"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
                  归档
                </p>
                <h2 className="mt-2 text-lg sm:text-xl font-semibold">
                  {entry.title}
                </h2>
                <p className="mt-3 text-sm text-brand-ink/70">
                  {entry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
