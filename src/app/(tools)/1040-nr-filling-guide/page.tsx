import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StepByStep from "./StepByStep";

export const metadata: Metadata = {
  title: "2026 留学生 1040-NR 填写指南：手把手教你申报 $5000 免税额 (附pdf下载)",
  description: "F1/OPT 留学生怎么填 1040-NR？本文详解 W-2、1042-S 与 1040-NR 的对应关系。重点演示 Schedule OI 第 L 项如何申请 $5000 中美税收协定豁免。内含 step-by-step 填表步骤，助你轻松拿回退税。",
  alternates: {
    canonical: "https://www.mapleworld.online/1040-nr-filling-guide",
  },
  openGraph: {
    title: "2026 留学生 1040-NR 填写指南：手把手教你申报 $5000 免税额",
    description: "F1/OPT 留学生 1040-NR 报税全攻略，包含 $5000 中美税收协定申请教程。",
    images: ["/images/irs-form-1040-nr-sample-for-international-students.webp"],
  },
};

export default function NR1040FillingGuidePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "F1 留学生 1040-NR 报税 5 步走指南",
    "description": "2026 留学生报税手把手教学，包含 1040-NR 核心行号填写与 Schedule OI 税收协定申请。",
    "step": [
      {
        "@type": "HowToStep",
        "name": "个人信息与身份判定",
        "text": "填写姓名、SSN/ITIN。F1 留学生通常属于 Nonresident Alien。务必确认你的 Filing Status。如果你是单身且没结婚，通常勾选 Single。"
      },
      {
        "@type": "HowToStep",
        "name": "收入申报",
        "text": "根据你的 W-2（工资）或 1042-S（奖学金/免税收入）填写。Line 1a 填 W-2 总工资，Line 1c 填奖学金中生活费部分。"
      },
      {
        "@type": "HowToStep",
        "name": "标准/分项扣除",
        "text": "留学生不能使用 Standard Deduction（印度留学生除外）。大多数留学生只需填写 Charitable Contributions 或保留为 0。"
      },
      {
        "@type": "HowToStep",
        "name": "税收协定豁免 (Schedule OI)",
        "text": "在 Schedule OI 的第 L 项，注明你是中国公民，申请 $5000 的免税额度 (Treaty Article 20(c))。"
      },
      {
        "@type": "HowToStep",
        "name": "计算退税或补税",
        "text": "对比 Total Tax 和 Total Payments。退税建议填写 Direct Deposit 信息，补税需在 4.15 前完成。"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "没收到 1042-S 可以先填 1040-NR 吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "建议等收到 1042-S 再填。1042-S 上的信息直接决定了你如何申请税收协定豁免，提前填写容易导致数据不匹配被 IRS 审计。"
        }
      },
      {
        "@type": "Question",
        "name": "错过截止日期了，现在补报还来得及吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "来得及。如果没有欠税，通常没有罚款；如果有欠税，IRS 会按月计算罚金。及早补报是保护 F1 身份合规的最佳方式。"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-brand-warmwhite pb-20 text-brand-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="page-shell pt-12 sm:pt-20 mx-auto max-w-4xl px-4">
        <header className="mb-12">
          <nav className="mb-6 flex space-x-2 text-sm text-brand-ink/50">
            <Link href="/" className="hover:text-brand-pinkdeep transition">Home</Link>
            <span>›</span>
            <Link href="/guides" className="hover:text-brand-pinkdeep transition">Guides</Link>
            <span>›</span>
            <span className="text-brand-ink font-medium">1040-NR Guide</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight">
            2026 留学生 1040-NR 报税全攻略：<br className="hidden sm:block" />
            <span className="text-brand-pinkdeep">从零开始的手把手教学</span>
          </h1>
          <p className="mt-8 text-lg text-brand-ink/70 leading-relaxed border-l-4 border-brand-pink/20 pl-6 bg-white/50 py-4 rounded-r-2xl shadow-sm">
            F1/OPT 留学生怎么填 1040-NR？本文详解 W-2、1042-S 与 1040-NR 的对应关系。重点演示 Schedule OI 如何申请 $5000 中美税收协定豁免。
          </p>
        </header>

        <section className="my-16">
          <StepByStep />
        </section>

        <div className="prose prose-brand max-w-none prose-headings:text-brand-ink prose-p:text-brand-ink/80 prose-strong:text-brand-pinkdeep">
          <h2 className="text-2xl font-bold mt-16 mb-6">第一步：准备工作——你需要哪些税表？</h2>
          <div className="grid sm:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-pink/10">
              <h3 className="text-lg font-bold mb-3 text-brand-pinkdeep">W-2 (工资收入) vs 1042-S</h3>
              <p className="text-sm">W-2 记录你的税前工资和预扣税；1042-S 记录奖学金或受税收协定免税的收入。两者都非常重要。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-pink/10">
              <h3 className="text-lg font-bold mb-3 text-brand-pinkdeep">护照出入境记录与 SSN/ITIN</h3>
              <p className="text-sm">报税需要 SSN 或 ITIN。护照上的出入境章（I-94）用于确定你当年的 Residency Status。</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-20 mb-6">第二步：1040-NR 核心行号对照表</h2>
          <div className="my-8 relative group cursor-zoom-in lg:w-1/2 mx-auto">
            <Image
              src="/images/irs-form-1040-nr-sample-for-international-students.webp"
              alt="2026 留学生 1040-NR 税务计算流程：从总收入减去扣除项到得出最终退税或欠税的步骤。"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-2xl border border-brand-pink/20 shadow-lg transition-transform duration-500 group-hover:scale-[1.01] w-full h-auto"
            />
          </div>
          <h3 className="text-xl font-bold mt-8 mb-4">Line 1a - 1z：如何正确填写你的总收入？</h3>
          <p>将 W-2 Box 1 的金额填入 Line 1a。如果有多个雇主，请相加。</p>

          <h3 className="text-xl font-bold mt-8 mb-4">中美税收协定：$5000 免税额到底填在哪？</h3>
          <p>这笔钱<strong>不需要</strong>直接从 Line 1a 扣除，而是通过 Schedule OI 进行申报。正确申报后，这笔钱会反映在 1040-NR 的对应减免项中。</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Schedule OI：留学生必填的身份附加页</h3>
          <p>这是 Nonresident Alien 的必填项，用于向 IRS 声明你的身份资格。对于中国留学生，这是申请 $5000 豁免的核心板块。</p>

          <h2 className="text-2xl font-bold mt-20 mb-6">第三步：常见避坑点与错误检查</h2>
          <h3 className="text-xl font-bold mt-8 mb-4 text-brand-hotpink">为什么留学生不能使用 Standard Deduction？</h3>
          <p>IRS 规定 Nonresident Alien 不能使用标准扣除额（除非你是印度留学生）。误用会导致退税过多，后续可能面临补缴和罚款。</p>

          <h3 className="text-xl font-bold mt-8 mb-4">多个州工作、跨州搬家的处理方法</h3>
          <p>如果你搬过家，可能需要申报多个州的州税。联邦税 1040-NR 只需要报一份，但州税需要根据各州规定分别处理。</p>

          <h2 className="text-2xl font-bold mt-20 mb-6">第四步：退税还是补税？最后的提交步骤</h2>
          <h3 className="text-xl font-bold mt-8 mb-4">填写 Direct Deposit 信息：最快拿到退税的方式</h3>
          <p>检查 Line 35b 和 35d。提供 Routing Number 和 Account Number，IRS 会直接将退税款打入你的银行账户。</p>

          <h3 className="text-xl font-bold mt-8 mb-4 underline decoration-brand-pinkdeep underline-offset-4">邮寄地址与截止日期 (4.15) 提醒</h3>
          <p>如果你选择纸质邮寄，请务必在 4 月 15 日前寄出。建议通过 Certified Mail 寄送，保留投递凭证。</p>

          <section className="mt-20 bg-brand-pink/10 p-8 rounded-[32px] border border-brand-pink/20">
            <h2 className="text-2xl font-bold mb-8">常见问题 (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-brand-ink">没收到 1042-S 可以先填 1040-NR 吗？</h3>
                <p className="mt-2 opacity-70">建议等待。1042-S 通常在 3 月份发放。如果等到 3 月底还没收到，建议咨询学校 DSO 或 HR。</p>
              </div>
              <div>
                <h3 className="font-bold text-brand-ink">错过截止日期了，现在补报还来得及吗？</h3>
                <p className="mt-2 opacity-70">只要没有欠税，IRS 通常不会因为晚报而处罚，但你的退税会延迟。如果有欠税，请尽快补报以减少利息负担。</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
