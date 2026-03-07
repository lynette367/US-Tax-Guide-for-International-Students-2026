import Link from "next/link";
import Image from "next/image";
import Cloud from "@/components/illustrations/Cloud";
import WorldMap from "@/components/illustrations/WorldMap";
import { ContactForm } from "@/components/ContactForm";

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

const steps = [
  "收集材料",
  "判断身份/居住状态",
  "选择工具/路径",
  "填写与校验",
  "提交前检查",
];

const stories = [
  {
    title: "我第一次差点用错身份",
    content:
      "当时看到 TurboTax 的流程很顺，我就直接往下填了。填到身份那一步才意识到自己可能是 nonresident。最怕的是选错身份导致后续表格全错。后来我按天数判断做了对照表，才知道应该走 1040NR。",
  },
  {
    title: "等 1042-S 那几周特别焦虑",
    content:
      "室友都已经报完了，我还在等 1042-S。因为不知道它什么时候到，我一直不敢提交。后来我整理了一张材料到达时间表，知道该等哪一份、可以先做哪一份，心里才稳下来。",
  },
  {
    title: "州税把我绕晕了",
    content:
      "我以为联邦报完就结束了，结果又看到州税。NR 和 resident 的州税规则不太一样，我看了半天还是没弄懂。最后我做了一个“州税是否需要”的判断清单，先确认是否必须申报，再决定要不要走工具。",
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

export default function Home() {
  return (
    <main className="pb-16">
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#F7C6D9] bg-paper px-4 py-8 sm:py-12 text-brand-ink">
        <WorldMap />
        <div className="pointer-events-none absolute inset-0 bg-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-brand-pink/60" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 sm:gap-8 text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-ink/70">
            F1 + OPT 报税
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight text-brand-ink drop-shadow-sm">
            美国 F1 + OPT 报税
            <span className="block mt-2 text-brand-pinkdeep">把不该亏的税拿回来</span>
          </h1>

          {/* Judgment Box */}
          <div className="mt-4 w-full max-w-lg rounded-[24px] border border-white/60 bg-white/40 p-6 backdrop-blur-md shadow-[0_20px_50px_rgba(247,198,217,0.4)] transition hover:shadow-[0_25px_60px_rgba(247,198,217,0.5)]">
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

        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] min-w-[200px] min-h-[200px] max-w-[600px] max-h-[600px]">
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

        <div className="absolute top-0 right-0 w-[30vw] h-[30vh] max-w-[300px] max-h-[300px]">
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

      <section className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              你可能也被这些问题困住过
            </h2>
          </div>
          <div className="mt-6 rounded-[28px] border border-brand-pink/40 bg-white/85 p-6 sm:p-8 shadow-[0_18px_60px_rgba(244,185,200,0.3)] flex flex-col gap-4">
            <Link
              href="/form-8843-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <span className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 最新 OPT 报税 Form 8843 填写保姆级教程（含 STEM 延期说明）》
              </span>
            </Link>
            <Link
              href="/form-8843-amend-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <span className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 Form 8843 填错了/寄早了？留学生修正申报 (Amended Return) 全攻略》
              </span>
            </Link>
          </div>
          <Link
            href="/guides"
            className="mt-6 block rounded-[28px] border border-brand-pink/40 bg-white/90 p-6 shadow-[0_18px_60px_rgba(244,185,200,0.25)] transition hover:shadow-[0_26px_70px_rgba(244,185,200,0.35)]"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
              Guides / 工具
            </p>
            <h3 className="mt-2 text-lg sm:text-xl font-semibold text-brand-ink">
              判断型指南与工具入口
            </h3>
            <p className="mt-2 text-sm sm:text-base text-brand-ink/70">
              从判断型指南进入，再跳转到工具做 3 分钟路径判断。
            </p>
          </Link>
        </div>
      </section>

      <section id="fit" className="px-4 py-12 sm:py-16 lg:py-20 bg-brand-pink/15">
        <div className="page-shell">
          <div className="text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
              30 秒判断
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              适合 / 不适合
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="soft-card">
              <h3 className="text-lg sm:text-xl font-semibold text-brand-ink">适合你</h3>
              <ul className="mt-4 space-y-3 text-sm sm:text-base text-brand-ink/75">
                <li>F1 身份 + OPT/实习有收入</li>
                <li>第一次自己报税</li>
                <li>担心选错表格或身份</li>
                <li>愿意按步骤操作，慢一点也没关系</li>
              </ul>
            </div>
            <div className="soft-card">
              <h3 className="text-lg sm:text-xl font-semibold text-brand-ink">可能不适合</h3>
              <ul className="mt-4 space-y-3 text-sm sm:text-base text-brand-ink/75">
                <li>你希望有人代报/代填</li>
                <li>需要法律/税务执照服务</li>
                <li>涉及复杂投资/公司税</li>
                <li>需要保证具体金额</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              这些是明确可帮到你的
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

      <section className="px-4 py-12 sm:py-16 lg:py-20 bg-brand-pink/10">
        <div className="page-shell">
          <div className="text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
              使用方式
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              五步把流程走顺
            </h2>
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li
                key={step}
                className="rounded-[24px] border border-brand-pink/40 bg-white/90 p-5 text-center shadow-[0_15px_45px_rgba(244,185,200,0.2)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-ink/50">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              常见踩坑故事
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <div
                key={story.title}
                className="rounded-[28px] border border-brand-pink/40 bg-white/90 p-6 shadow-[0_18px_60px_rgba(244,185,200,0.25)]"
              >
                <h3 className="text-lg font-semibold text-brand-ink">{story.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                  {story.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
              FAQ
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              常见问题
            </h2>
          </div>
          <div className="mt-6 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[24px] border border-brand-pink/35 bg-white/90 p-5 shadow-[0_12px_40px_rgba(244,185,200,0.2)]"
              >
                <summary className="cursor-pointer text-sm sm:text-base font-semibold text-brand-ink">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="px-4 py-12 sm:py-16 lg:py-20 bg-brand-pink/10">
        <div className="page-shell">
          <div className="rounded-[32px] border border-brand-pink/40 bg-white/95 p-6 sm:p-10 text-center text-brand-ink shadow-[0_20px_60px_rgba(244,185,200,0.3)]">
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">
              领取清单，把流程拉回可控
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-ink/75">
              这是一个“先把坑标出来”的包，让你知道下一步该怎么走。
            </p>
            {/* Client-side form logic wrapper would be improved by extracting to component, but inline for now as requested */}
            <ContactForm />
            <p className="mt-4 text-xs text-brand-ink/60">
              报税季通常从 1 月下旬开始接受申报，具体以 IRS 公告为准，越早准备越不慌。
            </p>
          </div>
        </div>
      </section>

      <section id="disclaimer" className="px-4 pb-16 sm:pb-20">
        <div className="page-shell">
          <div className="rounded-[28px] border border-brand-pink/40 bg-brand-pink/15 p-6 sm:p-8 text-brand-ink">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/60">
              免责声明与边界
            </p>
            <h2 className="mt-2 text-xl sm:text-2xl font-semibold">
              先把边界说清楚
            </h2>
            <ul className="mt-4 space-y-2 text-sm sm:text-base text-brand-ink/75">
              <li>我不是 CPA/EA，这不是税务或法律服务。</li>
              <li>不提供代报/代填。</li>
              <li>不保证退税金额或结果。</li>
              <li>内容仅为信息整理与个人经验分享。</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
