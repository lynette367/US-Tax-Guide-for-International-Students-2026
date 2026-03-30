import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "2026 避坑：为什么留学生 OPT 报税不建议直接用 TurboTax？(含正确软件推荐)",
  description: "详解 F1/OPT 留学生报税误区：为什么 TurboTax 默认不处理 Non-Resident 身份？用错软件报税会有什么后果？本文对比 Sprintax vs TurboTax，助你避开报税红线，确保 H1B/绿卡申请不受影响。",
  keywords: "OPT 报税软件, TurboTax 留学生, F1 报税 TurboTax 错误, Sprintax 优惠码 2026, Non-resident 报税报错",
  alternates: {
    canonical: "https://www.mapleworld.online/turbotax-pitfalls-2026",
  },
  robots: "index, follow",
  openGraph: {
    title: "2026 留学生 OPT 报税避坑指南：为什么不建议直接用 TurboTax？",
    description: "详解 F1/OPT 留学生报税误区：为什么 TurboTax 默认不处理 Non-Resident 身份？用错软件报税会有什么后果？本文对比 Sprintax vs TurboTax，助你避开报税红线，确保 H1B/绿卡申请不受影响。",
    url: "https://www.mapleworld.online/tools/turbotax-pitfalls-2026",
    type: "article",
  },
};

export default function TurbotaxPitfallsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "留学生算税务居民吗?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "F1 或 OPT 学生通常在前 5 年被视为非税务居民 (Non-Resident Alien)。超过 5 年并满足实质居留测试后才会成为税务居民。"
        }
      },
      {
        "@type": "Question",
        "name": "美国转账多少会被查？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "原则上，任何高于 10,000 美元的单笔或关联现金交易都会被银行自动向国税局 (IRS) 报告 (Form 8300)，如果是正常的跨国汇款或生活费，并不一定会被查，但要保存好资金来源证明。"
        }
      },
      {
        "@type": "Question",
        "name": "1099和W-2有什么区别？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "W-2 是给全职雇员 (Employee) 的薪资总计表，包含了已代扣代缴的税款；1099 则发给独立承包商 (Independent Contractor) 或零工，一般没有代扣税，需要自己预交。"
        }
      },
      {
        "@type": "Question",
        "name": "留学生没有收入需要报税吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "需要。即使没有收入，如果在美停留天数符合要求，也要提交 Form 8843，向 IRS 声明你的非居民豁免天数，维持身份合规。"
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "2026 留学生 OPT 报税避坑指南：为什么不建议直接用 TurboTax？",
    "description": "详解 F1/OPT 留学生报税误区，帮助避开 TurboTax 和 Non-Resident 身份错位陷阱。",
    "author": {
      "@type": "Organization",
      "name": "MapleWorld"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MapleWorld",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mapleworld.online/logo.png"
      }
    }
  };

  return (
    <main className="pb-16 text-brand-ink">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="px-4 py-12 sm:py-16">
        <div className="page-shell">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <article className="min-w-0 flex-1 prose prose-pink max-w-none">
              <Breadcrumbs
                items={[
                  { label: "报税工具", href: "/tools" },
                  { label: "TurboTax 避坑指南" }
                ]}
              />

              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-brand-ink">
                2026 留学生 OPT 报税避坑指南：为什么不建议直接用 TurboTax？
              </h1>

              <div className="mt-6 text-lg text-brand-ink/80 leading-relaxed">
                <p>
                  本指南是 <Link href="/guides" className="text-brand-pinkdeep font-semibold underline">2026 OPT 报税全攻略</Link> 的核心章节之一。
                  每到报税季，总会有很多同学为了图方便，直接使用 TurboTax 处理。但很多人不知道的是，留学生的身份特殊，用错软件不仅可能让你补交天价罚单，更有可能影响你未来的 H1B 或绿卡申请。
                </p>
              </div>

              {/* Risk Callout */}
              <div className="mt-10 rounded-2xl border-l-[6px] border-[#F59E0B] bg-[#FFFBEB] p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <Image src="/images/turbotax-warning-icon.webp" alt="Why F1 OPT students should not use TurboTax" width={32} height={32} className="m-0" />
                  </div>
                  <div>
                    <h3 className="m-0 text-xl font-bold text-[#b45309]">报错后果警告</h3>
                    <p className="mt-2 text-[#92400e] text-sm leading-relaxed mb-0">
                      很多用错软件的留学生会惊喜地发现自己“退税变多了”，这通常是因为软件不仅把 FICA 税算成了你的退税，还给了你不该享受的 Standard Deduction（标准扣除额，通常仅 RA 可用）。这属于严重的税务合规问题！
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                核心原因：Resident vs Non-Resident 身份错位
              </h2>

              <h3 className="text-xl font-bold mt-8 mb-4">TurboTax 默认处理 Resident Alien (RA)</h3>
              <p className="text-brand-ink/75 leading-7">
                TurboTax 的主要受众是美国公民和税务居民（Resident Alien）。按照 IRS 的规则，它默认你的报税身份就是 RA，会自动帮你抵扣各项额度。
                但作为持有 F1 或 J1 签证的留学生（包括 OPT 和 STEM OPT 阶段），在前 5 年内通常会被定义为 <strong>Non-Resident Alien (NRA)</strong> 非税务居民。
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">留学生误填 1040 还是 1040-NR？</h3>
              <p className="text-brand-ink/75 leading-7">
                Resident 提交的税表是 <strong>Form 1040</strong>，而 Non-Resident 必须提交带 "NR" 后缀的 <strong>Form 1040-NR</strong>。
                一旦你使用了普通版 TurboTax 并提交成功，IRS 会认为你是以 RA 身份在报税，这就涉嫌了“欺诈申报”（Fraudulent Return）。
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                用错软件报税的 3 大后果
              </h2>

              <h3 className="text-xl font-bold mt-8 mb-4">欠税罚金与利息</h3>
              <p className="text-brand-ink/75 leading-7">
                如果被 IRS 查出你错误申领了 RA 专属的退税，你将被要求全额退还这笔钱，并且需要支付相应的利息和最高可达 20% 的罚款（Accuracy-related penalty）。如果被判定为恶意逃税，罚款甚至可能高达 75%。
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">影响未来的 H1B 或绿卡申请（身份合规记录）</h3>
              <p className="text-brand-ink/75 leading-7">
                这是最严重的后果。在未来申请签证变更（如 F1 转 H1B）或绿卡面试时，USCIS（移民局）有权审查你的税务记录。不诚实的税务记录会被视为缺乏 ”Good Moral Character“（良好道德品行），成为拒签的核心理由。
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                2026 推荐报税方案：Sprintax vs Gofei 推荐工具
              </h2>
              <p className="text-brand-ink/75 leading-7 mb-6">
                对于留学生，我们推荐使用专门为 Non-Resident 设计的报税软件。下面是具体的对比，告诉你为什么它们更安全。
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full rounded-xl overflow-hidden shadow-sm border border-brand-pink/20 text-sm">
                  <thead className="bg-brand-pink/10 text-brand-ink font-semibold">
                    <tr>
                      <th className="px-6 py-4 text-left border-b border-brand-pink/20">维度</th>
                      <th className="px-6 py-4 text-center border-b border-brand-pink/20 border-l border-brand-pink/10">TurboTax</th>
                      <th className="px-6 py-4 text-center border-b border-brand-pink/20 border-l border-brand-pink/10">Sprintax (推荐)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b border-brand-pink/10">
                      <td className="px-6 py-4 font-medium text-brand-ink/90">生成的核心税表</td>
                      <td className="px-6 py-4 text-center font-mono">1040</td>
                      <td className="px-6 py-4 text-center font-mono">1040-NR</td>
                    </tr>
                    <tr className="border-b border-brand-pink/10 bg-brand-pink/5">
                      <td className="px-6 py-4 font-medium text-brand-ink/90">支持 F1/J1 签证</td>
                      <td className="px-6 py-4 text-center text-red-500 font-bold text-lg">❌</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold text-lg">✅</td>
                    </tr>
                    <tr className="border-b border-brand-pink/10">
                      <td className="px-6 py-4 font-medium text-brand-ink/90">处理 8843 表格</td>
                      <td className="px-6 py-4 text-center text-red-500 font-bold text-lg">❌</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold text-lg">✅</td>
                    </tr>
                    <tr className="border-b border-brand-pink/10 bg-brand-pink/5">
                      <td className="px-6 py-4 font-medium text-brand-ink/90">人工审核</td>
                      <td className="px-6 py-4 text-center text-red-500 font-bold text-lg">❌</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold text-lg">✅</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-brand-ink/90">价格</td>
                      <td className="px-6 py-4 text-center">符合条件免费</td>
                      <td className="px-6 py-4 text-center">通常需付费</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 sm:py-16 bg-brand-pink/5 border-t border-brand-pink/20">
        <div className="page-shell">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink text-center mb-8">
              常见税务与身份问题 (FAQ)
            </h2>
            <div className="grid gap-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="rounded-[24px] border border-brand-pink/35 bg-white p-5 shadow-[0_4px_20px_rgba(244,185,200,0.1)] group"
                >
                  <summary className="cursor-pointer text-sm sm:text-base font-semibold text-brand-ink list-none flex justify-between items-center">
                    <span>{faq.name}</span>
                    <span className="text-brand-pinkdeep group-open:rotate-180 transition-transform duration-200">▼</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
