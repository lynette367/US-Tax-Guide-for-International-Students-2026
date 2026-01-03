import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archiveEntries, archiveEntryMap } from "@/app/archive/archiveEntries";

export function generateStaticParams() {
  return archiveEntries.map((entry) => ({ slug: [entry.slug] }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Metadata {
  const slug = params.slug?.[0];
  const entry = slug ? archiveEntryMap.get(slug) : undefined;

  if (!entry) {
    return {
      title: "Archive · 未找到",
      description: "该归档内容不存在。",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: `Archive · ${entry.title}`,
    description: entry.description,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function ArchiveDetailPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug?.[0];
  const entry = slug ? archiveEntryMap.get(slug) : undefined;

  if (!entry) {
    notFound();
  }

  const EntryComponent = entry.Component;

  return (
    <div className="pb-16 text-brand-ink">
      <section className="px-4 py-8 sm:py-10">
        <div className="page-shell">
          <div className="rounded-[24px] border border-brand-pink/40 bg-brand-pink/10 p-6 text-sm text-brand-ink/70">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Archive
            </p>
            <h1 className="mt-2 text-xl sm:text-2xl font-semibold text-brand-ink">
              旧内容归档：{entry.title}
            </h1>
            <p className="mt-2">
              该页面为历史内容，已停止更新；我们当前聚焦美国留学生报税判断工具。
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-full bg-brand-pinkdeep px-5 py-2 text-xs font-semibold text-white shadow-[0_18px_45px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                去 Guides
              </Link>
              <Link
                href="/tools/opt-tax"
                className="inline-flex items-center justify-center rounded-full border border-brand-ink/30 bg-white/80 px-5 py-2 text-xs font-semibold text-brand-ink transition hover:bg-white"
              >
                去 Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
      <EntryComponent />
    </div>
  );
}
