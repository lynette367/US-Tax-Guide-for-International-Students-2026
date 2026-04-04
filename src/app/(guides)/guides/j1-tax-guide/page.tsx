import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { J1Checklist, J1TreatyQuiz, Form8843Envelope } from "./components";

export const metadata: Metadata = {
  title: "2026 J1 报税避坑：离 4.15 截止只剩 [X] 天，你漏报了吗？ | MapleWorld",
  description: "对于 J1 签证持有者（访问学者、学生或实习生），报税通常比 F1 更复杂，因为涉及到不同的豁免规则和居留时间。2026 年 J1 报税避坑指南，帮你梳理 W-2, 1042-S 等重要表格。",
  alternates: {
    canonical: "https://www.mapleworld.online/guides/j1-tax-guide",
  },
};

export default function J1TaxGuidePage() {
  const faqs = [
    {
      question: "我是 J1 第一年，一定要报税吗？",
      answer: "即使你没有任何收入，也必须报税（提交 Form 8843 声明身份），这是合法维持你在美签证身份 (Visa Status) 的重要要求。"
    },
    {
      question: "J1 学者的报税与 F1 学生有何不同？",
      answer: "最大的不同在于免税居留年限和 Tax Treaty 豁免。F1 学生前 5 年通常是 NRA，享受 $5000 免税；而 J1 学者 (Researcher/Teacher) 一般前 2 年是 NRA，但可能享受长达 3 年的劳务全额免税。身份判定和使用的表格会有明显差异。"
    },
    {
      question: "J2 家属需要提交哪些表格？",
      answer: "如果 J2 家属没有收入，他们需要单独提交一份 Form 8843（不能与你的合并，必须有自己的签名和信封），并在 4 月 15 日前邮寄。"
    }
  ];

  return (
    <main className="pb-16 text-brand-ink">
      <section className="px-4 py-8 sm:py-12 bg-gradient-to-b from-brand-pink/10 to-transparent">
        <div className="page-shell">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "报税攻略", href: "/guides" },
                { label: "J1 报税指南" }
              ]}
            />
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight drop-shadow-sm">
              2026 J1 报税避坑：<br className="hidden sm:block"/>离 4.15 截止只剩最后几天，你漏报了吗？
            </h1>
            <p className="mt-6 text-lg text-brand-ink/80 leading-relaxed font-medium">
              对于 J1 签证持有者（访问学者、学生或实习生），报税通常比 F1 更复杂，因为涉及到不同的豁免规则和居留时间。
            </p>
            <div className="mt-6 inline-block bg-amber-100/80 text-amber-900 px-5 py-3 rounded-xl border border-amber-200 font-bold shadow-sm">
              📢 用 1 句话强调：不管有没有收入，J1 必须报税！
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="page-shell">
          <div className="max-w-4xl">
            
            <J1Checklist />

            <J1TreatyQuiz />

            <article className="prose prose-pink max-w-none mt-12 mb-16 space-y-12">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-brand-pink/30 pb-3 text-brand-ink inline-block">身份判定：你是 NRA 还是 RA？</h2>
                <div className="bg-brand-pink/5 rounded-2xl p-6 border border-brand-pink/20">
                  <h3 className="text-lg font-bold text-brand-ink mb-3">
                    绝大多数 J1 在前 2 个日历年（学者/老师）或 5 个日历年（学生）属于 NRA。
                  </h3>
                  <p className="text-brand-ink/80 leading-relaxed">
                    如果你在美国待的时间超过了上述年限，并通过了“实质居住测试 (SPT)”，则按美国居民 (Resident Alien) 报税。
                  </p>
                  <Link href="/tools/opt-tax" className="mt-4 inline-flex items-center font-bold text-brand-pinkdeep hover:text-brand-pinkhover bg-white px-4 py-2 rounded-full shadow-sm border border-brand-pink/10 transition hover:scale-105">
                    → 使用 SPT 工具快速判定身份
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-brand-pink/30 pb-3 text-brand-ink inline-block">家属（J2）也需要填表吗？</h2>
                <h3 className="text-lg font-bold text-brand-ink">
                  答：是的，家属（J2）也需要单独填一份 8843，必须在 4 月 15 日前邮寄表格。
                </h3>
                <p className="text-brand-ink/80">即使 J2 没有任何收入，也必须作为 Exempt Individual 申报信息。由于他们无法使用 E-file，需打印并在规定日期前寄出。</p>
                <Link href="/form-8843-guide" className="inline-block text-brand-pinkdeep font-bold hover:underline">
                  阅读 8843 申报与邮寄教程 →
                </Link>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-brand-pink/30 pb-3 text-brand-ink inline-block">我有 1042-S 还要填 8843 吗？</h2>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-ink mb-2">
                    答：必须。1042-S 是收入凭证，8843 是身份声明，缺一不可。
                  </h3>
                  <p className="text-brand-ink/80 mb-4">1042-S 通常包含了你的 Tax Treaty 豁免部分或奖学金，需要在 1040-NR 中申报；而 8843 是证明你有资格享受非居民待遇的记录。</p>
                  <Link href="/1042-vs-1042-s" className="inline-block bg-brand-pink/10 text-brand-pinkdeep px-4 py-2 rounded-lg font-bold hover:bg-brand-pink/20 transition-colors">
                    查看：1042-S 与 W-2 报税区别详情 →
                  </Link>
                </div>
              </div>

              <Form8843Envelope />

              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-brand-pink/30 pb-3 text-brand-ink flex items-center gap-3">
                  <span className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">!</span>
                  FICA 税检查（非常重要！）
                </h2>
                <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-6 border border-red-100">
                  <h3 className="text-lg font-bold text-red-800 mb-3">免除项目：作为 NRA 身份的 J1，你不需要缴纳社会安全税 (Social Security) 和医疗保险税 (Medicare)。</h3>
                  <p className="text-brand-ink/80 text-base mb-4 font-bold">
                    👉 核查 W-2：检查你的 W-2 表格 <span className="text-brand-pinkdeep bg-brand-pink/10 px-1 rounded">Box 4</span> 和 <span className="text-brand-pinkdeep bg-brand-pink/10 px-1 rounded">Box 6</span>。
                  </p>
                  <p className="text-brand-ink/80 text-sm">
                    如果里面有数字，说明雇主扣错了，你应该要求雇主退还，或者向 IRS 提交 Form 843 申请退回。平均很多人会白白损失数千刀，切莫大意！
                  </p>
                  <Link href="/fica-refund-calculator" className="mt-4 inline-block tracking-wide font-bold uppercase text-xs px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 hover:shadow-md transition-all">
                    计算我被误扣了多少 FICA 税 →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "J1 Tax Treaty Screening & Checklist Tool",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "All",
              "description": "Interactive checklist to gather necessary tax forms like W-2, 1042-S for J1 visa holders, and a screener to identify eligible tax treaty exemptions.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          ])
        }}
      />
    </main>
  );
}
