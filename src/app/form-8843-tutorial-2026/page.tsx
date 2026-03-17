import type { Metadata } from "next";
import Link from "next/link";
import Form8843Stepper from "@/components/Form8843Stepper";

export const metadata: Metadata = {
  title: "2026 Form 8843 填写教学：F1/J1 留学生免税声明全攻略 - MapleWorld",
  description: "手把手教你填写 2026 最新 Form 8843。包含 Part I 和 Part III 详细说明、官方 PDF 下载及德州奥斯汀邮寄地址，助你规避身份合规风险。",
  keywords: "8843 表格填写, 8843 教學, F1 留学生报税, Form 8843 教程, 2026 报税指南",
  alternates: {
    canonical: "https://www.mapleworld.online/form-8843-tutorial-2026",
  },
  robots: "index, follow",
  openGraph: {
    title: "2026 Form 8843 填写教学：F1/J1 留学生免税声明全攻略",
    description: "手把手教你填写 2026 最新 Form 8843，规避身份合规风险。",
    url: "https://www.mapleworld.online/form-8843-tutorial-2026",
    type: "article",
  },
};

export default function Form8843Tutorial() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "如何填写 2026 Form 8843",
    "description": "为 F1/J1 留学生开启的 2026 最新 Form 8843 填写指南。",
    "inLanguage": "zh-CN",
    "datePublished": "2026-03",
    "publisher": {
      "@type": "Organization",
      "name": "MapleWorld",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mapleworld.online/logo.png"
      }
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "准备基础信息",
        "text": "填写姓名、SSN（如果没有填 None）以及美国和海外地址。"
      },
      {
        "@type": "HowToStep",
        "name": "计算在美居住天数",
        "text": "准确记录 2023-2025 年间物理上在美国境内的天数。"
      },
      {
        "@type": "HowToStep",
        "name": "填写学校信息",
        "text": "提供就读院校的名称、地址以及学系负责人的信息。"
      },
      {
        "@type": "HowToStep",
        "name": "下载 PDF 并邮寄",
        "text": "下载官方 PDF 填好后寄往 IRS 德州奥斯汀处理中心。"
      }
    ]
  };

  return (
    <main className="pb-20">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <section className="bg-brand-pink/10 py-12 sm:py-20 px-4">
        <div className="page-shell">
          <div className="max-w-4xl mx-auto">
             <Link href="/" className="text-sm font-bold text-brand-pinkdeep hover:underline">← 返回首页</Link>
             <h1 className="mt-6 text-3xl sm:text-5xl font-black text-brand-ink leading-tight">
               2026 留学生 Form 8843 <br className="hidden sm:block" />
               在线填写助手 <span className="text-brand-pinkdeep">(手把手辅助版)</span>
             </h1>
             <p className="mt-6 text-lg text-brand-ink/70 leading-relaxed max-w-2xl">
               Form 8843 是每一位在美留学生（即使没有收入）都必须提交的身份状态声明。本助手将带你逐行核对，确保 2026 报税季合规安全。
             </p>
          </div>
        </div>
      </section>

      <section className="px-4 -mt-10 sm:-mt-16">
        <div className="page-shell">
           <div className="max-w-5xl mx-auto">
              <Form8843Stepper />
           </div>
        </div>
      </section>

      <article className="page-shell mt-20">
        <div className="max-w-3xl mx-auto prose prose-brand-ink">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink">为什么 8843 这么重要/不填的后果？</h2>
          <p className="mt-4 text-brand-ink/80 leading-relaxed">
            Form 8843 虽然不是税表，但它决定了你的税务居民身份。如果不按时提交，IRS 可能会认定你为 Resident Alien，从而导致无法享受中美税收协定，甚至影响未来的签证或绿卡申请。对于 F/J 签证持有人，这是保持“非居民”身份合法豁免天数的唯一凭证。
          </p>

          <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-brand-ink">如何准确计算 2023-2025 年的在美天数？</h2>
          <div className="mt-8 space-y-8">
            <div className="rounded-2xl border border-brand-pink/20 bg-white p-6">
              <h3 className="text-xl font-bold text-brand-ink">离境旅游的天数要扣除吗？</h3>
              <p className="mt-2 text-brand-ink/75">
                是的，只要物理上不在美国境内，哪怕只有 24 小时，也不计入。这包括回国寒暑假、前往加拿大或墨西哥的短期旅游。
              </p>
            </div>

            <div className="rounded-2xl border border-brand-pink/20 bg-white p-6">
              <h3 className="text-xl font-bold text-brand-ink">F1 学生的“豁免天数”和这里的“实际天数”有什么区别？</h3>
              <p className="mt-2 text-brand-ink/75 font-semibold text-brand-pinkdeep">这是最易错点！</p>
              <p className="mt-1 text-brand-ink/75">
                Form 8843 第 4 问要填的是你物理存在于美国的**实际天数**；而只有在进行 SPT（实质居留测试）时，系统才会帮你扣除“豁免天数”。填 8843 时，请务必如实填写实际待在美国的日子。
              </p>
            </div>

            <div className="rounded-2xl border border-brand-pink/20 bg-white p-6">
              <h3 className="text-xl font-bold text-brand-ink">如何通过 I-94 查 8843 天数？</h3>
              <p className="mt-2 text-brand-ink/75">
                不记得出入境日期了？请前往 <a href="https://i94.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer" className="text-brand-pinkdeep underline font-bold">I-94 官网</a> 点击 "View Travel History"，你可以导出最近五年的出入境时间列表，对照计算出每年的精准天数。
              </p>
            </div>
          </div>

          <h2 className="mt-16 text-2xl sm:text-3xl font-bold text-brand-ink">填好后寄往哪里？</h2>
          <p className="mt-4 text-brand-ink/80 leading-relaxed">
            如果你是与 1040-NR 一起提交，请随税表一同邮寄至税表指定的处理中心。如果你是**单独提交（即 2025 年无收入）**，请在 2026 年 6 月 15 日前寄往以下地址：
          </p>
          <div className="mt-6 rounded-2xl bg-brand-ink p-8 text-white font-mono shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-6xl">📮</span>
             </div>
             <p className="text-lg font-bold border-b border-white/20 pb-4 mb-4">Internal Revenue Service Center</p>
             <p className="leading-relaxed">
               Department of the Treasury<br />
               Austin, TX 73301-0215<br />
               USA
             </p>
          </div>
          <p className="mt-6 text-sm text-brand-ink/60 italic">
            * 提示：建议使用 USPS Certified Mail 邮寄，并保留 Tracking Number 以防丢件。
          </p>
        </div>
      </article>

      <section className="page-shell mt-20">
         <div className="rounded-[40px] bg-brand-pink/15 pt-12 pb-12 px-6 sm:px-12 text-center">
            <h2 className="text-2xl sm:text-4xl font-black text-brand-ink">还有疑问？不确定天数？</h2>
            <p className="mt-4 text-brand-ink/70">
              我们的学长学姐帮你人肉核对，避开报税雷区。
            </p>
            <div className="mt-10">
              <Link 
                href="/#footer" 
                className="inline-flex items-center gap-3 rounded-full bg-brand-pinkdeep px-10 py-4 text-white font-bold text-lg transition hover:scale-105 shadow-xl"
              >
                <span>💬 扫码添加微信</span>
              </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
