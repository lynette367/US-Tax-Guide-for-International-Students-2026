import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import AmIScrewedWidget from "@/components/AmIScrewedWidget";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "2026 补救指南：W2/1099 收入漏报了怎么办？Form 1040-X 修改申报与身份影响",
  description: "报完税才收到 1099-INT？漏报了股票收益或 W2 数值填错？别慌！本指南详解 F1/OPT 留学生漏报收入的后果及 IRS 补救补缴流程，手把手教你填 1040-X。规避查税风险，保护 H1B/绿卡申请税务记录。",
  keywords: "1099 漏报, W2 填错补救, 1040-X 教程, IRS 修改税表, OPT 报税报错, 银行利息漏报后果",
  alternates: {
    canonical: "https://www.mapleworld.online/amend-w2-1099",
  },
  openGraph: {
    title: "报税漏报了？这有一份 2026 OPT 补救清单（建议收藏）",
    description: "别等 IRS 发信才后悔，手把手教你合规补报收入。",
    url: "https://www.mapleworld.online/tools/amend-w2-1099",
    type: "article",
    images: ["/images/1040x-flowchart.png"],
  },
};

export default function AmendW21099Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "利息只有几块钱，不报也不会被发现吧？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "虽然 $10 以下通常不发 1099-INT，但理论上 IRS 要求申报所有收入。如果为了未来的 H1B 或绿卡申请保持完美的税务记录，建议进行修正申报。"
        }
      },
      {
        "@type": "Question",
        "name": "提交 1040-X 的截止日期是什么时候？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "通常你可以在原始报税截止日期后的 3 年内提交 1040-X。但如果有欠税，越早提交利息和罚金越少。"
        }
      },
      {
        "@type": "Question",
        "name": "修正申报会增加 Audit (审计) 的风险吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "主动修正诚实的错误通常不会显著增加审计风险。相反，如果等 IRS 通过对比系统查出来再补缴，反而会留下不良记录。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "如何填写并邮寄 Form 1040-X",
    "step": [
      {
        "@type": "HowToStep",
        "text": "定位漏报项目并重新计算税额。"
      },
      {
        "@type": "HowToStep",
        "text": "填写 Form 1040-X 的三列数据：原申报额、差额、修正后额。"
      },
      {
        "@type": "HowToStep",
        "text": "附上支持文件（如漏报的 1099 表格）。"
      },
      {
        "@type": "HowToStep",
        "text": "根据你的州邮寄到对应的 IRS 地址（或尝试电子申报）。"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "2026 留学生报税补救：发现 1099/W2 收入漏报了该怎么办？",
    "author": {
      "@type": "Person",
      "name": "Lynette"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MapleWorld"
    }
  };

  return (
    <main className="pb-16 text-brand-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="px-4 py-12 sm:py-16">
        <div className="page-shell">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <Breadcrumbs items={[{ label: "报税工具", href: "/tools" }, { label: "1040-X 补救指南" }]} />

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-brand-ink">
                2026 留学生报税补救：发现 1099/W2 收入漏报了该怎么办？
              </h1>

              {/* Desktop-only Warning Bar */}
              <div className="mt-8 rounded-2xl bg-red-600 px-6 py-4 text-white shadow-lg animate-pulse hover:animate-none group transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚠️</span>
                  <p className="font-bold mb-0 text-sm sm:text-base leading-relaxed">
                    重要提醒：IRS 的自动核对系统通常在报税季结束后 6-12 个月触发。主动提交 1040-X 修正错误，通常可以免除或减少部分因“过失”产生的罚金。
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">“Am I Screwed?” 风险判定</h2>
                <p className="text-brand-ink/60 mb-6 italic text-sm">注：本工具仅供初步判定，不构成正式法律或专业税务建议。</p>
                <AmIScrewedWidget />
              </div>

              <div className="mt-16 prose prose-pink max-w-none prose-p:text-brand-ink/80 prose-li:text-brand-ink/80">
                <h2 id="scenario-check" className="text-2xl sm:text-3xl font-bold text-brand-ink mt-12 mb-6 border-b-2 border-brand-pink/20 pb-2">
                  场景判定：我是否需要提交 1040-X 修改税表？
                </h2>
                
                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen sm:static sm:mx-auto sm:w-[50vw] my-12 rounded-3xl overflow-hidden border border-brand-pink/20 shadow-xl bg-white">
                  <Image 
                    src="/images/1040x-flowchart.png" 
                    alt="F1 OPT 留学生提交 1040-X 修改税表补救漏报收入的流程图" 
                    width={1200} 
                    height={800} 
                    className="w-full h-auto m-0"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                <h3 className="text-xl font-bold text-brand-ink mt-10 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-pinkdeep rounded-full" />
                  情况一：银行利息 (1099-INT) 漏报需要 Amend 吗？
                </h3>
                <p>
                  大多数留学生收到的利息非常少（每年几美元）。如果利息低于 $10，银行甚至不会邮寄 1099-INT。虽然法律要求申报所有收入，但 IRS 通常不会为了几块钱利息对你进行税务核对。话虽如此，如果你有“记录洁癖”或正在申请移民身份，补上一份 1040-X 是最稳妥的。
                </p>

                <h3 className="text-xl font-bold text-brand-ink mt-10 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-pinkdeep rounded-full" />
                  情况二：收到 IRS 修正信件 (CP2000)
                </h3>
                <p>
                  如果你收到了一封带有 <strong>CP2000</strong> 标识的信件，这意味着 IRS 已经通过 AUR (Automated Underreporter) 系统发现了你的漏报。这时候 1040-X 已经不是选项，而是“必须”。你需要仔细核对信件中的数字，并在规定期限内回复。
                </p>

                <h3 className="text-xl font-bold text-brand-ink mt-10 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-pinkdeep rounded-full" />
                  情况三：纯粹的计算错误或漏填表格
                </h3>
                <p>
                  如果你发现 W2 的数额填错了，或者干脆忘了一张 W2。这种错误会直接影响你的应纳税额。建议立即处理，因为漏掉一个 W2 可能意味着数千美元的收入差额。
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink mt-16 mb-6 border-b-2 border-brand-pink/20 pb-2">
                  漏报收入的 3 大潜在后果（为什么不能存侥幸心理）
                </h2>

                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen sm:static sm:mx-auto sm:w-[50vw] my-12 rounded-3xl overflow-hidden border border-brand-pink/20 shadow-xl bg-white">
                  <Image 
                    src="/images/irs-penalty-warning.png" 
                    alt="IRS 收入漏报罚金与查税风险警示" 
                    width={1200} 
                    height={600} 
                    className="w-full h-auto m-0"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                <h3 className="text-xl font-bold text-brand-ink mt-10 mb-4">1. 罚金与利息的滚动计算</h3>
                <p>
                  漏报导致少缴税款时，IRS 会收取 <strong>Failure-to-Pay Penalty</strong>，加上从原始截止日期（如 4 月 15 日）开始计算的每日复利。时间拖得越长，最终支付的罚金可能超过原本的税款。
                </p>

                <h3 className="text-xl font-bold text-brand-ink mt-10 mb-4">2. IRS 自动核对系统的“秋后算账”</h3>
                <p>
                  不要以为报完税没回音就没事了。IRS 的系统通常比个人报税延迟 12-18 个月才会通过比对 Form 1099/W2 发现异常。
                </p>

                <h3 className="text-xl font-bold text-brand-ink mt-10 mb-4">3. 对 H1B 和未来绿卡申请的背景调查影响</h3>
                <p>
                  诚实报税是维护“良好道德品行”的关键证据之一。
                </p>

                <h2 id="how-to-amend" className="text-2xl sm:text-3xl font-bold text-brand-ink mt-16 mb-6 border-b-2 border-brand-pink/20 pb-2">
                  手把手教你补救：Form 1040-X 填写与邮寄指南
                </h2>
                <ol>
                  <li><strong>准备原件副本：</strong> 拿出你当时由报税软件生成的 1040-NR 副本。</li>
                  <li><strong>填写 1040-X：</strong> 1040-X 一共有三列：Column A (原始数额), Column B (变化的数额), Column C (修正后的正确数额)。</li>
                  <li><strong>解释说明 (Part III)：</strong> 简要说明原因。例如："Received missing 1099-INT after filing."</li>
                  <li><strong>附件准备：</strong> 如果涉及新的 W2 或 1099，必须附在 1040-X 后面。</li>
                  <li><strong>邮寄：</strong> 1040-X 目前在某些情况下支持 e-file，但很多 NR 仍需邮寄。请务必使用 Certified Mail。</li>
                </ol>

                <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink mt-16 mb-6 border-b-2 border-brand-pink/20 pb-2">
                  常见问题 (FAQ)：补报会增加被查税 (Audit) 的风险吗？
                </h2>
                <p>
                  大多数情况下，不会。1040-X 是为了修正错误而设计的合法程序。IRS 更倾向于那些主动发现并修正错误的纳税人。
                </p>
              </div>
            </div>

            {/* Sidebar content */}
            <aside className="lg:col-span-4 space-y-8 mt-12 lg:mt-32">
              <div className="sticky top-24 p-6 rounded-3xl border border-brand-pink/30 bg-white shadow-xl">
                <h3 className="font-bold text-lg mb-4 text-brand-ink">相关专题</h3>
                <Link 
                  href="/1042-vs-1042-s" 
                  className="group block p-5 rounded-2xl bg-brand-pink/5 hover:bg-brand-pink/10 transition border border-brand-pink/10"
                >
                  <p className="text-sm font-semibold text-brand-ink leading-relaxed group-hover:text-brand-pinkdeep transition-colors">
                    我已经按 W2 报完了，今天突然收到一张 1042-S 怎么办？
                  </p>
                  <span className="text-xs text-brand-pinkdeep/70 mt-3 block font-bold">
                    查看 1042-S 补救指南 →
                  </span>
                </Link>

                <div className="mt-8 pt-6 border-t border-brand-pink/10">
                  <p className="text-xs text-brand-ink/50 leading-relaxed italic">
                    提示：1042-S 包含奖学金或 $5,000 的免税额，漏报 1042-S 是留学生最常见的税务申报错误之一。
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
