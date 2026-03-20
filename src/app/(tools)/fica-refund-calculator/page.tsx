import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FicaCalculator from "./FicaCalculator";

export const metadata: Metadata = {
  title: "F1/OPT FICA 税退税计算器：手把手教你填写 Form 843 拿回误扣税款",
  description: "留学生 F1/OPT 身份被雇主误扣了 Social Security 和 Medicare (FICA) 税？使用我们的自动计算器估算退税金额。详细解析向雇主要回税款及向 IRS 提交 Form 843、8316 的全流程。",
  keywords: "FICA 退税, F1 被扣 SSN 税, Form 843 填写样本, OPT 退 Social Security Tax, 留学生 FICA 免税自测",
  alternates: {
    canonical: "https://www.mapleworld.online/fica-refund-calculator",
  },
};

export default function FicaRefundCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "F1/OPT 留学生 FICA 退税自动计算器 2026",
    "operatingSystem": "All",
    "applicationCategory": "FinanceApplication",
    "url": "https://www.mapleworld.online/fica-refund-calculator",
    "description": "专门为 F1/OPT 留学生设计的 FICA (Social Security & Medicare) 退税计算工具。自动判定免税资格并估算可退金额。",
    "image": "https://www.mapleworld.online/images/fica-calculator-icon.webp",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "MapleWorld"
    },
    "featureList": [
      "自动判定 F1 免税资格",
      "实时计算退税金额",
      "提供 Form 843 填表指导"
    ],
    "screenshot": "https://www.mapleworld.online/images/fica-calculator-icon.webp"
  };

  return (
    <main className="min-h-screen bg-brand-pink/10 pb-16 text-brand-ink">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="page-shell pt-12 sm:pt-16 pb-8 mx-auto max-w-4xl">

        {/* Header Section */}
        <header className="mb-12 text-center flex flex-col items-center">
          <Image
            src="/images/fica-calculator-icon.webp"
            alt="F1 OPT FICA Tax Refund Calculator 2026"
            width={120}
            height={120}
            className="mb-8 rounded-[28px] shadow-lg shadow-brand-pink/20"
            unoptimized
            priority
          />
          <nav className="mb-6 flex justify-center space-x-2 text-sm text-brand-ink/50">
            <Link href="/" className="hover:text-brand-pinkdeep transition">Home</Link>
            <span>›</span>
            <Link href="/tools" className="hover:text-brand-pinkdeep transition">Tools</Link>
            <span>›</span>
            <span className="text-brand-ink font-medium">FICA Calculator</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight">
            2026 最新：F1/OPT 留学生 FICA<br className="hidden sm:block" />
            <span className="text-brand-pinkdeep">(Social Security & Medicare Tax)</span> 税退税计算器
          </h1>
          <p className="mt-6 text-lg text-brand-ink/70 max-w-2xl mx-auto leading-relaxed">
            刚拿工资单发现被扣了 FICA 税？不用慌。这是美国雇主最容易犯的错，我们不仅帮你自动算钱，还附带向 IRS 讨债全流程。
          </p>
        </header>

        {/* Calculator Widget */}
        <FicaCalculator />

        {/* Content Body */}<div className="mt-16 rounded-[32px] border border-brand-pink/40 bg-[#FDF8F0] p-6 sm:p-10 shadow-[0_18px_60px_rgba(244,185,200,0.25)] relative">

          <div className="prose prose-brand max-w-none prose-headings:text-brand-ink prose-p:text-brand-ink/80 prose-li:text-brand-ink/80">

            <h2 className="text-2xl font-bold mt-0 mb-6 pb-2 border-b border-brand-pink/20">为什么 F1/OPT 学生通常不需要交 FICA 税？</h2>
            <div className="pl-4">
              <h3 className="text-xl font-semibold mt-6 mb-3">什么是 Social Security 和 Medicare Tax？</h3>
              <p>
                这两项税统称为 <strong>FICA 税 (Federal Insurance Contributions Act)</strong>。Social Security tax 税率通常为 6.2%，Medicare tax 为 1.45%，加起来总共占薪水的 <strong>7.65%</strong>。
                这是用来资助美国养老、伤残和医疗福利的税金，由员工和雇主各缴一半。
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">什么是 Exempt Individual 身份？</h3>
              <p>
                IRS 规定，持有 <strong>F-1、J-1、M-1、Q-1</strong> 签证的非居民外籍人士（Nonresident Alien），在其停留美国的前 5 个日历年（Calendar Years）内，属于 Exempt Individual。
                在 Exempt 期间，你在校内工作或经过授权的 CPT/OPT 校外工作所赚取的工资，均 <strong>豁免缴纳 FICA 税</strong>。通常到了第 6 年，按“实质居留测试”（Substantial Presence Test），才会变为 Resident Alien，此时才需要开始缴纳 FICA。
              </p>
              <div className="mt-4 p-4 bg-brand-pink/5 rounded-xl border border-brand-pink/20 text-sm">
                <p><strong>🚨 提醒：</strong>如果你的雇主是不太熟悉外籍员工税法的 HR 或挂靠公司，常常会把你当成美国公民或绿卡居民，错误地从你薪水扣掉这 7.65%。如果不讨回来，钱就真白给了 IRS！</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-16 mb-6 pb-2 border-b border-brand-pink/20">发现税被扣错了？拿回税款的两个步骤</h2>
            <p>如果你确认自己仍在免税期，却在 W-2 上的 Box 4 和 Box 6 看到了金额，你可以通过以下两个方案拿回钱。</p>

            <div className="pl-4">
              <h3 className="text-xl font-semibold mt-6 mb-3">方案一：向雇主要回 Refund from Employer（最快途径）</h3>
              <p>
                IRS 官方强烈建议你<strong>首先联系雇主</strong>进行退税。你可以拿着你的 F1 签证、I-20 及护照，向公司 HR 或 Payroll 部门说明：“我当前属于 Nonresident Alien 状态，享有 FICA 免税待遇，请帮我调整系统并退还今年错扣的款项”。
              </p>
              <p>
                如果是在同一个税年内发现的（比如 2026 年底发现 2026 年扣错了），雇主通常可以在下个 Paycheck 直接把钱补发给你，并修正你的 W-2 (或下发 W-2c)。<strong>这是最省事的方法！</strong>
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">方案二：向 IRS 提交 Form 843 & 8316 申请退税</h3>
              <p>
                如果雇主拒绝退还（比如雇主说：“财务封账了退不了” 或者 “你已经离职了”），你就只能自己硬着头皮找 IRS 把钱要回来了。
              </p>
              <p>你需要邮寄以下材料组合给 IRS，要求索回被误扣的税款：</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-pinkdeep">
                <li>Form 843, Claim for Refund and Request for Abatement</li>
                <li>Form 8316, Information Regarding Request for Refund of Social Security Tax</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-16 mb-6 pb-2 border-b border-brand-pink/20">申请 FICA 退税需要准备哪些材料？</h2>
            <p>自己向 IRS 申请 FICA 退税（寄送 Form 843），通常需要打包以下材料复印件：</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-brand-pinkdeep mb-8">
              <li><strong>Form 843、Form 8316</strong>（填好并签名）</li>
              <li>误扣税年度的 <strong>W-2</strong> 表格复印件</li>
              <li><strong>护照首页</strong>复印件及包含当时有效美签页的复印件</li>
              <li><strong>I-94</strong> 出入境记录（网上下载）</li>
              <li>当年对应的 <strong>I-20</strong>（并有 CPT 或 OPT 的授权页）</li>
              <li><strong>EAD 卡</strong>正反面复印件（针对 OPT 学生）</li>
              <li>一份 <strong>雇主拒绝退税的证明信（Written Statement from Employer）</strong>，如果在特殊情况下你拿不到公司的证明，你需要提交由你自己签名的陈述信，解释为何无法拿到。</li>
              <li>当年的 <strong>Form 1040-NR</strong> 复印件（如果你当年还需要递交联邦所得税的话）</li>
            </ul>

          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-brand-ink mb-8">常见问题 (FAQ)</h2>
          <div className="grid gap-4">
            <details className="group rounded-[24px] border border-brand-pink/35 bg-white/90 p-5 shadow-[0_12px_40px_rgba(244,185,200,0.2)] transition hover:shadow-md hover:scale-[1.01]">
              <summary className="cursor-pointer text-base font-semibold text-brand-ink group-open:text-brand-pinkdeep">
                自己向 IRS 递交 Form 843 需要多久能拿到退款？
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                IRS 处理 Form 843 的速度通常非常慢。根据近年的经验，留学生通常需要等待 <strong>6 个月到 1 年以上</strong>才能收到邮寄来的支票。这也就是为什么我们强烈建议你优先找雇主退！
              </p>
            </details>
            <details className="group rounded-[24px] border border-brand-pink/35 bg-white/90 p-5 shadow-[0_12px_40px_rgba(244,185,200,0.2)] transition hover:shadow-md hover:scale-[1.01]">
              <summary className="cursor-pointer text-base font-semibold text-brand-ink group-open:text-brand-pinkdeep">
                我可以把 Form 843 和其他税表 (如 1040-NR、8843) 放在同一个信封寄吗？
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                <strong>最好不要。</strong> Form 843 属于专门处理豁免退款的独立部门，其邮寄地址通常与你寄送 1040-NR 退报税或 8843 声明的地址不同（具体地址以当年的 Form 843 Instructions 为准）。分开寄送能防止文件丢失和处理延误。
              </p>
            </details>
            <details className="group rounded-[24px] border border-brand-pink/35 bg-white/90 p-5 shadow-[0_12px_40px_rgba(244,185,200,0.2)] transition hover:shadow-md hover:scale-[1.01]">
              <summary className="cursor-pointer text-base font-semibold text-brand-ink group-open:text-brand-pinkdeep">
                我的配偶 (F2签证) 需要缴纳 FICA 税吗？
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                F2 签证通常不允许工作，因此不会有缴纳 FICA 税的问题。如果 F2 转为其他允许工作且属于 Resident Alien 的身份（如 H1B/H4 EAD 等），则受普通的税法约束。
              </p>
            </details>
          </div>
        </section>

      </article>
    </main>
  );
}
