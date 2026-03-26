import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Cloud from "@/components/illustrations/Cloud";
import WorldMap from "@/components/illustrations/WorldMap";
import { ContactForm } from "@/components/ContactForm";

import TaxCountdown from "@/components/TaxCountdown";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "2026 F1/OPT 留学生报税保姆级指南 - MapleWorld",
  description: "MapleWorld专为留学生打造的 2026 报税避坑中心。提供 OPT/CPT 身份自测、1042-S 扫盲、FICA 退税及中美税收协定 $5000 申请教程。在 4.15 截止日前，助你合规完成 1040-NR 申报。",
  alternates: {
    canonical: "https://www.mapleworld.online/",
  },
  openGraph: {
    title: "2026 F1/OPT 留学生报税保姆级指南 - MapleWorld",
    description: "Form 8843、W-2 缺失、报税身份判定，实时报税时间表提醒，留学生需要的一站式税务工具箱。",
    url: "https://www.mapleworld.online/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MapleWorld 2026 报税工具箱",
      },
    ],
  },
};

const painPoints = [
  "用 TurboTax 会不会把我当 resident 报了？它主要面向居民报税，F1 很多时候是 nonresident，选错身份就麻烦。",
  "W-2 / 1099 / 1042-S 到底要等到什么时候？材料没齐，我也不敢乱填。",
  "州税要不要一起报？NR 和 resident 的规则不一样，我看不懂。",
  "我只想合法合规地把流程做对，不想花 $100 交学费。",
  "表格一堆：1040NR、8843、税表附表，最怕点错选项导致退税变罚款。",
];

const deliverables = [
  {
    title: "报税流程地图",
    description: "从材料准备到提交前检查的全流程，让你知道下一步该做什么。",
  },
  {
    title: "表格与身份选择对照",
    description: "1040NR / 8843 等“该选哪个”的判断树，减少走错路径。",
  },
  {
    title: "材料清单",
    description: "W-2 / 1099 / 1042-S / SSN / ITIN 按情况列出，不漏关键文件。",
  },
  {
    title: "常见错误清单",
    description: "重点提示身份/居民判定、工具选择等高频坑位。",
  },
  {
    title: "提交前 10 分钟检查表",
    description: "快速查漏补缺，把低级错误挡在提交前。",
  },
];

// Steps moved to ProcessSteps.tsx

const stories = [
  {
    title: "FICA 税（SSN/Medicare）误扣",
    content:
      "OPT留学生前五年免缴FICA税，一旦被误扣，个人每笔薪资会直接损失7.65%（社保6.2%+医保1.45%）。按月薪3000美元算，每月被扣约230美元，全年损失近2800美元；薪资越高，误扣金额越大，且这笔钱无法享受对应福利，不及时追回会造成实打实的经济亏损。",
    href: "/fica-refund-calculator",
    image: "/images/fica-calculator-icon.webp",
    alt: "F1/OPT 留学生 FICA 退税金额计算器",
    anchorText: "[自测：F1/OPT FICA 退税金额计算器]",
  },
  {
    title: "留学生报税软件避坑",
    content:
      "为什么 F1/OPT 不建议直接用 TurboTax？误用报税软件可能导致身份合规风险！针对 F1/OPT 身份，深入解析 TurboTax 的 Resident Alien 设定缺陷，对比 Sprintax 等专供工具的优劣。一文读懂用错软件对 H1B 及绿卡申请的潜在影响，精准避坑，稳妥退税。",
    href: "/turbotax-pitfalls-2026",
    image: "/images/turbotax-warning-icon.webp",
    alt: "F1/OPT 留学生使用 TurboTax 报税的合规性风险提示",
    anchorText: "立即避坑 →",
    ariaLabel: "OPT 报税软件选择避坑",
    itemProp: "itemListElement"
  },
  {
    title: "1042-s到底是啥？留学生报税为啥要报1042-s？",
    content:
      "收到1042-s表格的时候我都懵了，我根本不知道这是什么。我只是一个拿F1签证的留学生，只是在学校里面帮了一下下教授整理资料……\n真的只有一小下下，总共就收了562刀……\n不要告诉我这么点钱也会交税吧？",
    href: "/1042-vs-1042-s",
    image: "/images/1042-vs-1042-s-comparison.webp",
    alt: "F1/OPT 留学生 1042-s 报税指南",
    anchorText: "立即扫盲 →",
    ariaLabel: "1042-s 报税指南",
    itemProp: "itemListElement"
  },
  {
    title: "W2 和 1099 收入都漏报了",
    content:
      "W2是雇佣薪资报表，1099是兼职/ freelance等杂项收入报表，IRS会同步收到两份报表数据。漏报任何一类收入，都会被IRS判定少缴税款，不仅要补缴欠税，还要加收利息和罚款。发现漏报需尽快提交1040-X修正表，主动补救可降低处罚力度，保护税务合规记录。",
    href: "/amend-w2-1099",
    image: "/images/lifebuoy-icon.png",
    anchorText: "立即补救 →",
    ariaLabel: "2026 留学生 W2 1099 漏报补救指南",
    itemProp: "itemListElement",
    priority: "urgent"
  },
  {
    title: "中美税收协定省钱工具",
    content:
      "F1/OPT 身份在美前五年通常可享受中美税收协定，减免部分或全部联邦所得税。白白多交 $500 给 IRS？F1/OPT 专属的 $5000 免税额度你用了吗？详解 Article 20(c) 申请流程，助你拿回属于自己的退税款。",
    href: "/f1-tax-treaty-calculator",
    image: "/images/tax-treaty-calculator-icon.png",
    alt: "F1 OPT 留学生中美税收协定减免额计算器",
    anchorText: "立即计算 →",
    ariaLabel: "F1 OPT 留学生税收协定减免额计算",
    itemProp: "itemListElement"
  },
];

const pricingTiers = [
  {
    name: "基础版",
    price: "¥29",
    description: "清单 + 流程，适合：只想自己做对。",
    cta: "获取基础版",
  },
  {
    name: "标准版",
    price: "¥69",
    description: "基础版 + 判断树/对照表 + 提交前检查表。",
    cta: "解锁标准版",
    highlight: true,
  },
  {
    name: "加速版",
    price: "¥129",
    description:
      "标准版 + 一次文字答疑（不代填、不保证结果），适合卡在关键选择点。",
    cta: "解锁加速版",
  },
];

const faqs = [
  {
    question: "F1 为什么很多时候是 Nonresident？",
    answer:
      "通常按在美停留天数和“实质居留测试”来判断。F1 前几年往往被视为 exempt individual，因此很多情况下仍是 nonresident。",
  },
  {
    question: "我能不能用 TurboTax？",
    answer:
      "需要小心。TurboTax 主要面向居民报税，国际学生很多情况要走 nonresident 路径。可以了解 Sprintax 等 NR 常用工具之一，但不替任何平台背书。",
  },
  {
    question: "没收入也要报吗？",
    answer:
      "很多 F1 即使没有收入，也常需要提交 8843。是否需要报联邦/州税，取决于你当年的身份与收入情况。",
  },
  {
    question: "州税怎么办？",
    answer:
      "州税规则各州不同，NR 与 resident 的处理方式也可能不同。先确认你所在州是否要求申报，再决定工具与路径。",
  },
  {
    question: "退税多久到？",
    answer:
      "时间会因报税方式、身份与 IRS 处理速度而异。一般是几周到数月不等，具体以 IRS 实际进度为准。",
  },
  {
    question: "我去年报错了怎么办？",
    answer:
      "先定位错误项，再考虑走修正申报/补交的方向。不同身份与表格可能有不同流程，建议先把材料和错误点整理清楚。",
  },
  {
    question: "我只有 W-2，没有 1099/1042-S，也需要看吗？",
    answer:
      "需要。是否只用 W-2 取决于你的收入来源与身份，判断流程能帮你确认有没有遗漏。",
  },
  {
    question: "这份清单能保证我一定退到钱吗？",
    answer:
      "不能。清单的目标是降低选错表格与流程的风险，结果仍取决于你的真实情况与 IRS 审核。",
  },
];

const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function Home() {
  return (
    <main className="pb-16 text-brand-ink">
      <span style={{ display: 'none' }}>Impact-Site-Verification: eed619a2-8edf-4f11-9504-97edd29deaf9</span>
      {/* Top Notification Bar Mode */}
      <div className="bg-brand-pink/10 py-3 text-center text-sm font-medium border-b border-brand-pink/20">
        距离 4.15 报税截止还有：<TaxCountdown className="text-brand-pinkdeep ml-1 font-mono tracking-tighter" />
      </div>

      <section className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#F7C6D9] bg-paper px-4 pb-12 sm:pb-20 lg:pb-32">
        <WorldMap />
        <div className="pointer-events-none absolute inset-0 bg-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-brand-pink/60" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 text-center px-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.1] text-brand-ink drop-shadow-sm">
            2026 F1/OPT 留学生<br className="hidden sm:block" />报税保姆级指南 & 避坑工具箱
          </h1>

          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/50 border border-white/60 backdrop-blur-md shadow-lg text-brand-pinkdeep transform hover:scale-[1.02] transition-transform cursor-default">
              <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 animate-pulse" />
              <p className="font-bold text-base sm:text-lg">
                距离 4.15 报税截止还有：<TaxCountdown />
              </p>
            </div>
            <Link
              href="/tax-deadlines-2026"
              className="text-sm font-semibold text-brand-ink/60 hover:text-brand-pinkdeep underline underline-offset-4 decoration-brand-pink/30 hover:decoration-brand-pinkdeep transition-all"
            >
              查看 2026 报税关键时间表 →
            </Link>
          </div>

          {/* Judgment Box */}
          <div className="mt-8 w-full max-w-lg rounded-[24px] border border-white/60 bg-white/40 p-6 backdrop-blur-md shadow-[0_20px_50px_rgba(247,198,217,0.4)] transition hover:shadow-[0_25px_60px_rgba(247,198,217,0.5)]">
            <p className="text-base sm:text-lg font-medium text-brand-ink/90">
              2026 留学生报税，你是 Resident 还是 Non-Resident？
            </p>
            <Link
              href="/tools/opt-tax"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-pinkdeep shadow-lg transition hover:scale-[1.02] hover:bg-white/90 hover:shadow-xl active:scale-[0.98]"
            >
              3 秒自动判定我的身份 →
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] min-w-[200px] min-h-[200px] max-w-[600px] max-h-[600px] pointer-events-none">
          <Image
            src="/images/hero/traveler.jpg"
            alt="小男孩拖着行李箱"
            width={1650}
            height={1275}
            className="w-full h-full object-contain opacity-80"
            priority
            unoptimized
          />
        </div>

        <div className="absolute top-10 right-0 w-[30vw] h-[30vh] max-w-[300px] max-h-[300px] pointer-events-none">
          <Image
            src="/images/hero/airplane.png"
            alt="飞机"
            width={300}
            height={300}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="pointer-events-none absolute right-[12%] top-1/2 hidden sm:block">
          <div className="cloud-float-fast">
            <Cloud />
          </div>
        </div>
        <div className="pointer-events-none absolute left-[12%] top-[15%] hidden sm:block">
          <div className="cloud-float-slow">
            <Cloud />
          </div>
        </div>
      </section>

      <section className="px-4 pt-12 pb-0 sm:pt-16 sm:pb-0 lg:pt-20 lg:pb-0">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              你可能也被这些问题困住过
            </h2>
          </div>
          <div className="mt-6 rounded-[28px] border border-brand-pink/40 bg-white/85 p-6 sm:p-8 shadow-[0_18px_60px_rgba(244,185,200,0.3)] flex flex-col gap-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50 font-bold">
              Guides / 教程
            </p>
            <Link
              href="/form-8843-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 F1留学生没收入也要报税吗？不报税的后果惩罚？（附Form 8843 PDF 下载）》
              </h3>
            </Link>
            <Link
              href="/form-8843-amend-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 Form 8843 填错了/寄早了？留学生修正申报 (Amended Return) 全攻略(附 PDF 下载)》
              </h3>
            </Link>
            <Link
              href="/w2-missing-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 报税季：F1 学生没收到 W-2 表格怎么办？教你 4 步联系雇主及 IRS 替代方案(附 PDF 下载)》
              </h3>
            </Link>
            <Link
              href="/1042-vs-1042-s"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《1042 vs 1042-S 有什么区别？2026 留学生报税表格最全解析(附 PDF 下载)》
              </h3>
            </Link>
          </div>
          <div
            className="mt-6 block rounded-[28px] border border-brand-pink/40 bg-white/90 p-6 shadow-[0_18px_60px_rgba(244,185,200,0.25)] flex flex-col gap-4"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50 font-bold">
              Tools / 工具
            </p>
            <Link
              href="/guides"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《判断型指南：先定路径，再做决定》
              </h3>
            </Link>
            <Link
              href="/form-8843-tutorial-2026"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep bg-brand-pink/10 p-4 rounded-2xl border border-brand-pink/20 transition hover:scale-[1.01]"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-bold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep text-brand-ink">
                ✨【2026 独家】Form 8843 在线填写助手 (手把手辅助版) —— 5 分钟搞定免税声明
              </h3>
            </Link>
            <Link
              href="/opt-late-filing-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 OPT 报税逾期补救指南：罚款计算与身份风险详解》
              </h3>
            </Link>
            <Link
              href="/1040-nr-filling-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 留学生 1040-NR 填写指南：手把手教你申报 $5000 免税额 (附 PDF 下载)》
              </h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pt-8 pb-10 sm:pt-16 lg:pt-10 lg:pb-10">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              2026 留学生报税 5 大避坑红线
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stories.map((story) => {
              const cardContent = (
                <article className="flex flex-col h-full">
                  <header className="flex items-start gap-4">
                    {'image' in story && story.image && (
                      <div className="shrink-0 p-1 bg-white rounded-xl shadow-sm border border-brand-pink/10">
                        <Image
                          src={story.image}
                          alt={story.alt || story.title}
                          title={story.title}
                          width={32}
                          height={32}
                          className="rounded-lg object-contain"
                          unoptimized
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-brand-ink leading-snug group-hover:text-brand-pinkdeep transition-colors">
                      {story.title}
                    </h3>
                  </header>
                  <p className="mt-4 text-sm leading-relaxed text-brand-ink/70 flex-1 whitespace-pre-line">
                    {story.content}
                  </p>
                  {'anchorText' in story && story.anchorText && (
                    <footer className="mt-6 text-sm font-bold text-brand-pinkdeep group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {story.anchorText}
                    </footer>
                  )}
                </article>
              );

              const cardClass = "group block rounded-[32px] border border-brand-pink/40 bg-white/90 p-7 shadow-[0_20px_60px_rgba(244,185,200,0.25)] h-full transition hover:shadow-[0_25px_70px_rgba(247,198,217,0.4)] hover:scale-[1.01]";

              return story.href ? (
                <div
                  key={story.title}
                  className="tax-card"
                  aria-label={'ariaLabel' in story ? story.ariaLabel : undefined}
                  itemProp={'itemProp' in story ? story.itemProp : undefined}
                >
                  <Link
                    href={story.href}
                    className={cardClass}
                  >
                    {cardContent}
                  </Link>
                </div>
              ) : (
                <div key={story.title} className={cardClass}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pt-8 sm:pt-16 lg:pt-10">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              常用报税工具与指南
            </h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-brand-pink/40 bg-white/90 p-6 shadow-[0_18px_60px_rgba(244,185,200,0.25)]"
              >
                <h3 className="text-lg font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-brand-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="px-4 py-12 sm:py-16 lg:py-20 bg-brand-pink/10">
        <div className="page-shell">
          <div className="text-center">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              OPT报税五步走
            </h2>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50 font-bold">
              FAQ
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              常见问题
            </h2>
          </div>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[24px] border border-brand-pink/35 bg-white/90 p-5 shadow-[0_12px_40px_rgba(244,185,200,0.2)] open:bg-brand-pink/5 transition-all"
              >
                <summary className="cursor-pointer text-sm sm:text-base font-bold text-brand-ink list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-brand-pinkdeep group-open:rotate-180 transition-transform font-mono text-xl">+</span>
                </summary>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-brand-ink/70 border-t border-brand-pink/10 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "MapleWorld Tax Tool",
            "description": "2026 美国留学生报税身份自测及 8843 填报工具",
            "applicationCategory": "TaxCalculation",
            "operatingSystem": "All",
            "url": "https://www.mapleworld.online/",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "hasPart": [
              {
                "@type": "ItemList",
                "name": "2026 留学生报税 5 大避坑红线",
                "itemListElement": stories.map((story, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "SoftwareApplication",
                    "name": story.title,
                    "url": `https://www.mapleworld.online${story.href}`
                  }
                }))
              },
              {
                "@type": "ItemList",
                "name": "OPT报税五步走",
                "description": "2026 留学生 F1/OPT 身份报税合规全流程导引",
                "itemListElement": [
                  { 
                    "@type": "ListItem", 
                    "position": 1, 
                    "name": "确认“非税务居民”身份", 
                    "item": "https://www.mapleworld.online/tools/opt-tax" 
                  },
                  { 
                    "@type": "ListItem", 
                    "position": 2, 
                    "name": "准备W-2/1099表格", 
                    "item": "https://www.mapleworld.online/w2-missing-guide" 
                  },
                  { 
                    "@type": "ListItem", 
                    "position": 3, 
                    "name": "填写1040-NR", 
                    "item": "https://www.mapleworld.online/1040-nr-filling-guide" 
                  },
                  { 
                    "@type": "ListItem", 
                    "position": 4, 
                    "name": "申报8843表", 
                    "item": "https://www.mapleworld.online/form-8843-tutorial-2026" 
                  },
                  { 
                    "@type": "ListItem", 
                    "position": 5, 
                    "name": "邮寄/电子提交(e-file)", 
                    "item": "https://www.mapleworld.online/turbotax-pitfalls-2026" 
                  }
                ]
              }
            ]
          })
        }}
      />
    </main>
  );
}

