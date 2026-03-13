import type { Metadata } from "next";
import Link from "next/link";
import TaxCountdown from "@/components/TaxCountdown";

export const metadata: Metadata = {
  title: "2026 留学生报税倒计时 & 1042-S 截止日期提醒 - MapleWorld",
  description: "实时查看 2026 美国留学生报税倒计时。包含 1042-S、W-2 关键申报节点提醒，助你避开逾期罚款（最高可达 $660）。",
  keywords: "报税截止日期 2026, F1 报税倒计时, 1042-S deadline, OPT tax filing dates",
};

const deadlines = [
  {
    date: "2026年1月31日",
    title: "W-2 发放截止日",
    description: "雇主必须在此日期前寄出或在线提供给员工 W-2 表格。如果你还没收到，建议开始联系 HR。",
    status: "important"
  },
  {
    date: "2026年3月16日",
    title: "1042-S 截止日",
    description: "如果你有 Treaty (如中美 5000 豁免)，学校或机构需在此日期前发放 1042-S 表格。这是 NR 报税最常等的表格。",
    status: "critical"
  },
  {
    date: "2026年4月15日",
    title: "报税申报截止日 (Tax Day)",
    description: "联邦税（1040-NR / 8843）及大部分州税的最后申报期限。逾期可能面临罚款（最高可达 $660 或更多）。",
    status: "final"
  },
  {
    date: "2026年6月15日",
    title: "纯 8843 表格邮寄截止日",
    description: "如果你在 2025 年没有美国境内的应税收入，仅需邮寄 Form 8843，截止日期通常延长至 6 月 15 日。",
    status: "note"
  }
];

export default function TaxDeadlinesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "2026 美国留学生报税截止日期",
    "startDate": "2026-04-15",
    "description": "2026 报税季关键节点：1042-S 发放（3月16日），W-2 发放（1月31日），报税截止（4月15日）。",
    "location": {
      "@type": "Place",
      "name": "Internal Revenue Service (IRS)",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#F7C6D9] bg-paper pb-20">
      {/* Hero Section */}
      <section className="relative px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <Link 
            href="/"
            className="mb-8 inline-flex items-center text-sm font-semibold text-brand-ink/60 hover:text-brand-ink transition"
          >
            ← 返回首页
          </Link>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-brand-ink/70">
            2026 报税时间表
          </p>
          <h1 className="mb-10 text-3xl sm:text-5xl font-bold text-brand-ink">
            2026 留学生报税截止倒计时
          </h1>
          
          <div className="glass-panel mx-auto max-w-2xl rounded-[32px] p-8 shadow-2xl">
            <TaxCountdown />
          </div>
        </div>
      </section>

      {/* Deadlines List */}
      <section className="px-4">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-xl font-bold text-brand-ink mb-8 border-l-4 border-brand-pinkdeep pl-4">
            关键报税节点提醒
          </h2>
          
          <div className="space-y-4">
            {deadlines.map((item, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col sm:flex-row gap-4 rounded-[24px] border border-white/60 bg-white/40 p-6 backdrop-blur-md transition hover:bg-white/50"
              >
                <div className="flex-shrink-0">
                  <span className={`inline-flex rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${
                    item.status === 'final' ? 'bg-red-500 text-white' : 
                    item.status === 'critical' ? 'bg-orange-500 text-white' :
                    item.status === 'important' ? 'bg-brand-pinkdeep text-white' :
                    'bg-brand-ink/10 text-brand-ink/60'
                  }`}>
                    {item.date}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[28px] bg-brand-pinkdeep/10 p-6 border border-brand-pinkdeep/20 text-brand-ink">
            <h3 className="font-bold flex items-center gap-2">
              <span className="text-xl">⚠️</span> 为什么要重视截止日期？
            </h3>
            <p className="mt-3 text-sm leading-relaxed opacity-80">
              美国报税逾期罚款非常昂贵。即使你不需要交税，延迟提交 Form 8843 也可能影响你的 F1 身份合规性。特别是对于有欠税的情况，罚款（Failure to File & Failure to Pay）会随时间迅速累积。
            </p>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  );
}
