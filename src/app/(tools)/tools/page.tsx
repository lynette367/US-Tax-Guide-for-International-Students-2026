import Link from "next/link";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "留学生报税工具箱：身份判断与计算器 - MapleWorld",
  description: "汇集了针对 F1/OPT 留学生的报税实用工具：包括 FICA 退税自动计算器、SPT 实质居留测试自测、Form 8843 在线填写助手等，助你轻松拿回应退税款。",
  keywords: "报税工具, FICA 退税计算器, Form 8843 填写, 留学生退税工具, SPT 测试, F1 报税软件",
  alternates: {
    canonical: "https://www.mapleworld.online/tools",
  },
};

export default function ToolsPage() {
  const tools = [
    {
      title: "2026 留学生报税身份自测 (SPT 计算器)",
      description: "不确定是 NRA 还是 Resident？使用我们的 SPT 自动计算器。专为留学生设计，涵盖 F1 签证 5 年豁免规则。",
      href: "/tools/opt-tax",
      cta: "开始自测",
    },
    {
      title: "Form 8843 在线填写助手",
      description: "手把手教你填写 2026 最新 Form 8843。包含 Part I 和 Part III 详细说明。",
      href: "/form-8843-tutorial-2026",
      cta: "去使用",
    },
    {
      title: "TurboTax 适用性判定",
      description: "OPT 可以用 TurboTax 吗？回答 8 个问题，拿到你的报税路径建议。",
      href: "/opt-turbotax",
      cta: "开始判定",
    },
    {
      title: "F1/OPT FICA 退税金额计算器",
      description: "一键测算被误扣的 Social Security 与 Medicare 税，详细梳理 向雇主 / IRS 提交 Form 843 全流程要回退款。",
      href: "/fica-refund-calculator",
      cta: "计算退税",
    },
  ];

  return (
    <main className="pb-16 text-brand-ink">
      <section className="px-4 py-12 sm:py-16">
        <div className="page-shell">
          <div className="max-w-3xl">
            <Breadcrumbs 
                items={[
                    { label: "报税工具" }
                ]} 
            />
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
                Tools
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold">
                报税工具：简化你的申报流程
            </h1>
            <p className="mt-4 text-sm sm:text-base text-brand-ink/70">
                这些工具旨在帮助你快速做出判断，节省研究税法的时间。
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <div
                key={tool.href}
                className="soft-card flex flex-col"
              >
                <h2 className="text-lg sm:text-xl font-semibold">
                  {tool.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-brand-ink/70">
                  {tool.description}
                </p>
                <Link
                  href={tool.href}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-pinkdeep px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-pinkhover"
                >
                  {tool.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
