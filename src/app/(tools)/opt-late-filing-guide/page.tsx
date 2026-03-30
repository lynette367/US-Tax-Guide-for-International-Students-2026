import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LateFilingCalculator from "./LateFilingCalculator";

export const metadata: Metadata = {
  title: "2026 OPT 报税逾期怎么办？滞纳金罚款计算与补救申请全攻略",
  description: "错过了 4.15 报税截止日？本文手把手教你计算 OPT 报税逾期罚款（Failure to File & Pay），详解 F1 身份补救流程。针对零收入、STEM OPT 延期及有欠税的不同情况，提供 IRS 首次减免罚款申请建议，助你规避 H1B 审批风险。",
  alternates: {
    canonical: "https://www.mapleworld.online/opt-late-filing-guide",
  },
  openGraph: {
    title: "2026 OPT 报税逾期补救指南：罚款计算与身份风险详解",
    description: "错过了 4.15 报税截止日？快速计算逾期罚款，了解 F1/OPT 身份风险及补救措施。",
    images: ["/images/irs-first-time-abate-flowchart-for-opt-students.webp"],
  },
};

export default function OptLateFilingGuidePage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "2026 OPT 报税逾期罚款自动计算器",
    "operatingSystem": "All",
    "applicationCategory": "FinanceApplication",
    "description": "专为 F1 留学生设计的逾期报税罚款计算器，支持 Failure to File 和 Failure to Pay 自动估算，并提供针对 Form 8843 零收入申报的风险判定。",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.mapleworld.online/tools/opt-late-filing-guide"
    },
    "potentialAction": {
      "@type": "CalculateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.mapleworld.online/tools/opt-late-filing-guide#calculator"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "自动计算漏报罚款 (5% per month)",
      "自动计算滞纳金 (0.5% per month)",
      "针对 8843 零收入申报的风险判定",
      "提供 2026 年最新 IRS 逾期罚金最低标准预警"
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "如何申请 IRS 首次罚款减免 (First-Time Abate)",
    "description": "针对 F1/OPT 学生在错过报税截止日期后，申请 IRS 罚款减免的步骤。",
    "step": [
      {
        "@type": "HowToStep",
        "name": "确认资格",
        "text": "确认你过去三年没有被 IRS 处罚过且已补交所有欠款。"
      },
      {
        "@type": "HowToStep",
        "name": "补交申报",
        "text": "尽快提交错过的 1040-NR 或 8843 表格。"
      },
      {
        "@type": "HowToStep",
        "name": "拨打 IRS 电话",
        "text": "致电 IRS 并在电话中直接申请 'First-Time Abate'。"
      }
    ]
  };

  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": "https://www.mapleworld.online/images/irs-first-time-abate-flowchart-for-opt-students.webp",
    "caption": "2026 F1/OPT 留学生向 IRS 申请“首次减免 (First-Time Abate, FTA)”逾期罚款的极简中文流程图。",
    "description": "包含资格自测、联系 IRS 电话及申诉信准备步骤。",
    "author": {
      "@type": "Organization",
      "name": "MapleWorld"
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFAF5] pb-20 text-brand-ink">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />

      <article className="page-shell pt-12 sm:pt-20 mx-auto max-w-4xl px-4">
        <header className="mb-12">
          <nav className="mb-6 flex space-x-2 text-sm text-brand-ink/50">
            <Link href="/" className="hover:text-brand-pinkdeep transition">首页</Link>
            <span>›</span>
            <Link href="/tools" className="hover:text-brand-pinkdeep transition">报税工具</Link>
            <span>›</span>
            <span className="text-brand-ink font-medium">逾期补救</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight">
            2026 OPT 报税逾期补救指南：<br className="hidden sm:block" />
            <span className="text-brand-pinkdeep">罚款计算与身份风险详解</span>
          </h1>
          <p className="mt-8 text-lg text-brand-ink/70 leading-relaxed border-l-4 border-brand-pink/20 pl-6 italic bg-amber-50">
            错过了 4.15 报税截止日？别慌，本文手把手教你应对 OPT 逾期问题，规避身份风险。
          </p>
        </header>

        <div className="prose prose-brand max-w-none prose-headings:text-brand-ink prose-p:text-brand-ink/80 prose-strong:text-brand-pinkdeep">

          <h2 id="section-a" className="text-2xl font-bold mt-16 mb-6">情况 A：我有欠税（Balance Due）—— 罚款怎么算？</h2>
          <p>如果你今年有收入且预缴税款不够，IRS 会对逾期部分征收金钱罚款。计算罚款时主要涉及两部分：<strong>Failure to File (漏报罚款)</strong> 和 <strong>Failure to Pay (滞纳金)</strong>。</p>

          <div className="bg-brand-pink/8 p-6 rounded-2xl border border-brand-pink/20 my-8">
            <p className="mb-4">如果你觉得计算公式太复杂，可以使用下方的 <strong>2026 OPT 逾期罚款估算器</strong> 快速得出结果。</p>
            <LateFilingCalculator />
            <div className="mt-6 text-sm text-brand-ink/60">
              <p>注：计算逻辑遵循每月 5% (FTF) 和 0.5% (FTP)。如果逾期超过 60 天，还有一个最低罚款额（2026 年预计约 $485 或欠税额 100%，取小者）。</p>
            </div>
          </div>

          <h2 id="section-b" className="text-2xl font-bold mt-20 mb-6">情况 B：我没有欠税（甚至有退税）—— 逾期有惩罚吗？</h2>
          <p className="bg-green-50 p-6 rounded-2xl border border-green-100">
            <strong>核心干货：</strong> 虽然从金钱角度看，IRS 对 $0 欠税或有退税的情况不会征收罚金，但你会面临更隐蔽的风险。
          </p>
          <ul className="list-disc pl-6 space-y-4 my-8">
            <li><strong>“3年追溯期失效”：</strong> 如果你应领退税但逾期超过 3 年未申报，这笔钱将永久属于美国政府，你无法再申领。</li>
            <li><strong>身份合规风险：</strong> 哪怕只是提交 8843 声明。对于 F1/OPT 身份，连续的税务漏报可能在 H1B 转换、绿卡面试或签证续签时被视为“无法证明维持合法身份” (Fail to maintain status) 的证据。</li>
          </ul>

          <h2 id="section-remedy" className="text-2xl font-bold mt-20 mb-6 flex items-center gap-3">
            补救措施：如何向 IRS 申请 First-Time Abate (首次减免)？
          </h2>
          <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
            <div>
              <p>如果你是因为第一次报税不清楚规则，且过去三年记录良好，你可以申请 <strong>First-Time Penalty Abatement</strong>。这是一种“一辈子一次”的特权，通常可以豁免 Failure to File 和 Failure to Pay 的罚金（但不含利息）。</p>
              <p className="mt-4"><strong>操作步骤：</strong> 补交申报，并拨打 IRS 电话直接口头申请。说明你是因为 F1 身份特殊，第一次独立申报导致的非故意逾期。</p>
            </div>
            <div className="mt-8 md:mt-0">
              <Image
                src="/images/irs-first-time-abate-flowchart-for-opt-students.webp"
                alt="2026 F1/OPT 留学生向 IRS 申请“首次减免 (First-Time Abate, FTA)”逾期罚款的极简中文流程图。包含资格自测、联系 IRS 电话及申诉信准备步骤。"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl border border-brand-pink/10"
              />
            </div>
          </div>

          <div className="bg-amber-50 p-8 rounded-[32px] border border-amber-100 mt-20">
            <h2 id="section-stem" className="text-2xl font-bold mt-0 mb-6 text-amber-900">STEM OPT 特别提醒：逾期报税会影响 H1B 抽签吗？</h2>
            <p className="text-amber-800">
              单纯的逾期报税（非故意逃税）通常<strong>不会直接影响 3 月份的 H1B 抽签</strong>。因为抽签主要看工作真实性和学历背景。
            </p>
            <p className="mt-4 text-amber-800">
              但是！在 H1B 中签后的 <strong>Change of Status (COS) 阶段</strong>，移民局可能会要求补充过去维持身份的证明。如果此时你有多年的税务申报缺失，可能会给 RFE 增加解释难度。因此，尽快补救是保护未来职场发展的最佳选择。
            </p>
          </div>

          <section className="mt-24 border-t border-brand-pink/20 pt-16">
            <h2 className="text-xl font-bold mb-8">相关补救指南</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link href="/tools/amend-w2-1099" className="group p-6 rounded-2xl bg-gray-50 hover:bg-brand-pink/5 transition-colors border border-gray-100">
                <h3 className="font-bold mb-2 group-hover:text-brand-pinkdeep transition-colors">W2/1099 收入漏报补救 →</h3>
                <p className="text-sm opacity-60">发现之前的工资单没报全？教你如何纠正。</p>
              </Link>
              <Link href="/guides/form-8843-guide" className="group p-6 rounded-2xl bg-gray-50 hover:bg-brand-pink/5 transition-colors border border-gray-100">
                <h3 className="font-bold mb-2 group-hover:text-brand-pinkdeep transition-colors">零收入 Form 8843 申报指南 →</h3>
                <p className="text-sm opacity-60">没收入也想维持身份？8843 填报细节。</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
