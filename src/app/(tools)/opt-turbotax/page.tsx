import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import TurboTaxQuiz from "@/components/tools/TurboTaxQuiz";

export const metadata: Metadata = {
  title: "2026 F1/OPT 留学生 TurboTax 适用性判定工具 - 免费精准路径判断",
  description: "担心用错 TurboTax 影响身份？本工具基于 IRS SPT 规则，通过 8 个简单问题为您判定 2026 报税路径（NRA vs RA），提供精准的报税软件选择建议与风险提示。",
  alternates: {
    canonical: "https://www.mapleworld.online/opt-turbotax",
  },
};

const faqData = [
  {
    q: "我是 F-1 身份，TurboTax 默认不是给美国人用的吗？",
    a: "是的。TurboTax 默认流程是为美国税务居民（Resident Alien/Citizen）设计的。留学生（F-1/J-1）在入境前 5 个日历年通常属于“豁免个人（Exempt Individual）”，即税务上的非居民（NRA）。本工具的作用就是帮你判断你是否已经跨过了“5 年期限”或满足了“实质居住测试（SPT）”，从而确定你是否具备使用 TurboTax 的法律前提。",
    color: "#8E9775"
  },
  {
    q: "我刚好是第 6 年，现在可以用 TurboTax 了吗？",
    a: "进入第 6 个日历年意味着你可能通过实质居住测试（SPT）转为税务居民（RA）。但如果你的身份仍是 F-1 且有学业计划，仍需确认是否符合特定的豁免条件。本判定工具会结合你的入境年份和当前签证状态，给出最稳妥的路径建议。",
    color: "#A2B5BB"
  },
  {
    q: "如果不小心用 TurboTax 报错了身份，会有什么后果？",
    a: "最直接的影响是你会错误地领取了“标准扣除额（Standard Deduction）”。对于 NRA 来说，这属于非法欠税。这不仅会导致 IRS 追缴税款和罚金，更严重的是在未来申请 H1B 或绿卡进行背景调查时，错误的税表记录可能被视为缺乏“良好道德品质”或违反移民法规。",
    color: "#E28E8E"
  },
  {
    q: "为什么很多人说用 TurboTax 拿到的退税更多？",
    a: "这是一个陷阱。退税变多通常是因为软件误把你当成居民，给了你 NRA 不该享受的税收抵免（如中美税收协定外的额度或各种 Credit）。这种“多出来的钱”本质上是 IRS 的贷款，且带有高额逾期罚息风险。",
    color: "#D4BEAD"
  },
  {
    q: "TurboTax 里的“Resident”定义和移民局（USCIS）一样吗？",
    a: "完全不同。这是留学生最容易混淆的地方。移民局看的你的签证类型，而 IRS 只看你在美国待了多少天。你可能在移民局眼里是“Non-immigrant”，但在 IRS 眼里已经是“Resident for tax purposes”。本工具完全基于 IRS 的《Publication 519》标准进行判定。",
    color: "#94B49F"
  },
  {
    q: "我已经开始在 TurboTax 填了，现在发现不对还来得及吗？",
    a: "只要还没点击最后的“Submit/E-file”，你随时可以退出。如果你已经提交且发现报错了身份，你需要提交 1040-X 表格进行修正（Amended Return）。",
    color: "#BB9981"
  }
];

export default function OptTurboTaxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "OPT TurboTax 适用性判定工具",
        "description": "基于 IRS SPT 规则判断 F1/OPT 留学生是否可以使用 TurboTax 报税。",
        "applicationCategory": "TaxCalculation",
        "operatingSystem": "All",
        "url": "https://www.mapleworld.online/opt-turbotax",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <main className="pb-16 text-brand-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="px-4 py-10 sm:py-14">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl flex flex-col gap-8">
            <Breadcrumbs 
                items={[
                    { label: "报税工具", href: "/tools" },
                    { label: "TurboTax 判定" }
                ]} 
            />

            <header>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-ink">
                OPT 可以用 TurboTax 吗？2026 留学生报税路径判定
              </h1>
              <div className="mt-6 text-sm sm:text-base leading-relaxed text-brand-ink/80 space-y-4">
                <p>
                  很多 F1/OPT 留学生在报税季都会问：“我能不能直接用 TurboTax？” 这个判断的核心在于你的税务身份判定（Tax Residency Status）。
                </p>
                <p>
                  根据美国国税局（IRS）的 <Link href="/tools/opt-tax" className="text-brand-pinkdeep font-bold underline">实质居留测试（SPT）</Link> 规则，大多数留学生在前五个日历年内属于非税务居民（NRA）。
                </p>
                <p>
                  如果你错误地使用了面向居民（Resident）的 TurboTax 流程，可能会由于错领标准扣除额（Standard Deduction）或 FICA 税务错误而导致严重的合规风险，甚至影响未来的 H1B 或绿卡申请。本工具旨在通过 8 个简单的问题，结合您的入境年份、收入结构及停留天数，为您提供精准的报税路径建议。
                </p>
              </div>
            </header>

            <TurboTaxQuiz />

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-brand-ink mb-8">关于 OPT 使用 TurboTax 的常见疑问</h2>
              <div className="grid gap-6">
                {faqData.map((faq, index) => (
                  <div 
                    key={index} 
                    className="rounded-2xl border-l-[6px] bg-white p-6 shadow-sm shadow-brand-pink/10 transition-transform hover:translate-x-1"
                    style={{ borderColor: faq.color }}
                  >
                    <h3 className="text-lg font-bold text-brand-ink flex gap-2">
                       <span style={{ color: faq.color }}>Q:</span> {faq.q}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-brand-ink/75">
                       <span className="font-bold" style={{ color: faq.color }}>A:</span> {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[32px] bg-brand-pink/5 border border-brand-pink/20 p-8 text-center">
              <h3 className="text-xl font-bold text-brand-ink">还想了解错误的具体后果？</h3>
              <p className="mt-3 text-sm text-brand-ink/70 max-w-xl mx-auto">
                如果您对税务身份判定仍有疑虑，或者想了解错用软件对 H1B/绿卡申请的具体影响，请参考我们的深度解析指南。
              </p>
              <Link
                href="/turbotax-pitfalls-2026"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-pinkdeep px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-brand-pinkhover hover:scale-[1.02]"
              >
                阅读：2026 留学生报税避坑指南 →
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
