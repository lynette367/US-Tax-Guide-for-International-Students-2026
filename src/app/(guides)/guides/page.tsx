import Link from "next/link";
import { guides } from "../../../lib/guides";
import { Breadcrumbs } from "../../../components/Breadcrumbs";

export default function GuidesPage() {
  return (
    <main className="pb-16 text-brand-ink">
      <section className="px-4 py-12 sm:py-16">
        <div className="page-shell">
          <div className="max-w-3xl">
            <Breadcrumbs 
                items={[
                    { label: "报税攻略" }
                ]} 
            />
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
                Guides
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold">
              判断型指南：先定路径，再做决定
            </h1>
            <p className="mt-4 text-sm sm:text-base text-brand-ink/70">
              这些指南为“要不要/能不能/选哪个/怎么办”的问题提供清晰判断，帮助在美中国留学生避免走错报税路径。
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <div
                key={guide.slug}
                className="soft-card block"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
                  指南
                </p>
                <h2 className="mt-2 text-lg sm:text-xl font-semibold">
                  {guide.title}
                </h2>
                <p className="mt-3 text-sm text-brand-ink/70">
                  {guide.description}
                </p>
                <p className="mt-4 text-xs text-brand-ink/60">
                  适合：{guide.audience}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-brand-pink/40 bg-white/90 p-6 shadow-[0_18px_60px_rgba(244,185,200,0.25)]">
            <h2 className="text-lg font-semibold">想直接做判断？</h2>
            <p className="mt-2 text-sm text-brand-ink/70">
              3 分钟判断工具会给你更明确的路径建议与材料清单。
            </p>
            <Link
              href="/tools/opt-tax"
              className="mt-4 inline-flex rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
            >
              去工具页
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
