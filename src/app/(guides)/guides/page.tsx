import Link from "next/link";
import { guides } from "../../../lib/guides";
import { Breadcrumbs } from "@/components/Breadcrumbs";

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
              2026 美国报税攻略：F1/OPT 留学生 IRS 免费申报与避坑指南
            </h1>
            <p className="mt-4 text-sm sm:text-base text-brand-ink/70 leading-relaxed">
              针对美国 F1/OPT 留学生面临的“身份判定、软件选择、税务协定申请、漏报补救”等核心痛点，我们为您整理了这些深度判断指南。
              涵盖 1040-NR 填写、Form 8843 申报，深度对比 TurboTax vs Sprintax vs FreeTaxUSA 优劣。
              无论您是 W2/1099 联合报税，还是需要申请 $5000 中美税收协定优惠，通过以下逻辑拆解，您可以清晰判定自己的报税路径，从源头规避身份合规风险，确保退税无忧。
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <Link 
                key={guide.slug} 
                href={`/guides/${guide.slug}`}
                className="soft-card block transition hover:translate-y-[-4px] hover:shadow-lg group"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50 group-hover:text-brand-pinkdeep transition-colors">
                  深度攻略
                </p>
                <h2 className="mt-2 text-lg sm:text-xl font-semibold text-brand-pinkdeep group-hover:text-brand-pinkhover transition-colors">
                  {guide.title}
                </h2>
                <p className="mt-3 text-sm text-brand-ink/70">
                  {guide.description}
                </p>
                <p className="mt-4 text-xs text-brand-ink/60">
                  适合：{guide.audience}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-brand-pinkdeep group-hover:gap-2 transition-all">
                  阅读 2026 报税补税教程 →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-brand-pink/40 bg-white/90 p-6 shadow-[0_18px_60px_rgba(244,185,200,0.25)]">
            <h2 className="text-lg font-semibold text-brand-ink">想直接做判断？</h2>
            <p className="mt-2 text-sm text-brand-ink/70">
              3 分钟判断工具会给你更明确的路径建议与材料清单。
            </p>
            <Link
              href="/tools/opt-tax"
              className="mt-4 inline-flex rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover hover:scale-[1.02]"
            >
              立即使用：美国报税身份 (NRA/RA) 自动判定工具
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
