import type { Metadata } from "next";
import Image from "next/image";
import TaxQuiz from "@/components/TaxQuiz";
import CopyableEmail from "@/components/CopyableEmail";
import W2Estimator from "@/components/W2Estimator";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "2026 报税季：F1 学生没收到 W-2 怎么办？(含联系雇主邮件模板与 Form 4852 教程)(附 PDF 下载)",
  description: "针对 2026 报税，手把手教 OPT/CPT 留学生解决 W-2 缺失问题。提供中英文催取邮件模板，讲解如何使用 IRS Form 4852 替代报税，规避逾期风险。本站提供最新版表格下载及手把手带填指南。",
  alternates: {
    canonical: "https://www.mapleworld.online/w2-missing-guide",
  },
};

const emailTemplate = `Dear [HR Name or Payroll Department],

I am writing to inquire about my Form W-2 for the 2025 tax year. As of today, March 8, 2026, I have not yet received the document at my current mailing address.

Could you please verify if the form has been mailed out? If possible, I would greatly appreciate a digital copy (PDF) for my records to ensure I can file my taxes on time.

My Details:
* Full Name: [Your Name]
* Last 4 Digits of SSN: [XXXX]
* Employment Period: [e.g., June 2025 - Dec 2025]

Thank you for your time and assistance.

Best regards,
[Your Name]
[Your Phone Number]`;

export default function W2MissingGuidePage() {
  return (
    <main className="pb-16 text-brand-ink">
      <section className="px-4 py-12 sm:py-16">
        <div className="page-shell">
          <article className="max-w-3xl mx-auto">
            <Breadcrumbs 
                items={[
                    { label: "报税攻略", href: "/guides" },
                    { label: "W-2 缺失补救" }
                ]} 
            />
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
                Guide / 2026 报税
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              F1/OPT 学生 W-2 缺失补救指南 (2026版)(附 PDF 下载)
            </h1>

            <div className="prose prose-pink max-w-none mt-10">
              <p className="text-brand-ink/75 leading-7">
                3 月已经过半，身边的小伙伴都拿到了退税，而你连 W-2 还没影？别担心，这并不意味着你无法报税或身份会受损。针对 2026 报税季，我们整理了这份『救命指南』，帮你通过合法途径补救缺失材料。
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                第一步：了解 IRS 的正式截止日 (Internal Revenue Service Rules)
              </h2>
              <p className="text-brand-ink/75 leading-7">
                首先请保持冷静。根据 IRS 规定，雇主必须在 <strong>2026 年 1 月 31 日</strong> 之前寄出（Postmark）W-2 表格。考虑到邮寄时间，如果你在 2 月中旬还没收到，才需要开始采取行动。
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                第二步：联系雇主
              </h2>
              <p className="text-brand-ink/75 leading-7">
                这是最有效的方式。有些公司可能因为地址更新不及时导致投递失败，或者你可以直接索要 PDF 电子版。
              </p>
              <div className="my-6 rounded-2xl bg-[#f2dac4]/50 border border-[#e6b8a2]/40 p-5 shadow-sm">
                <p className="text-brand-ink/80 leading-7">
                  💡 <strong>沟通小贴士：</strong> 优先联系 Payroll 部门而非直属老板。你可以询问：'Is my W-2 available for download on ADP/Workday?' 很多时候公司已经上传到了电子平台，只是你没收到纸质信件。
                </p>
              </div>

              <CopyableEmail
                subject="Request for Form W-2 for Tax Year 2025 - [Your Full Name]"
                template={emailTemplate}
              />

              <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                第三步：身份确认
              </h2>
              <p className="text-brand-ink/75 leading-7">
                在联系雇主之前，请先确认你今年的报税身份。因为如果你已转为 <strong>Resident</strong>，你需要的可能是 W-2；如果你仍是 <strong>Non-resident</strong>，有些雇主可能会晚点寄送 1042-S。
              </p>

              <div className="my-8 rounded-2xl bg-brand-pink/5 border border-brand-pink/20 p-6">
                <p className="text-sm font-semibold text-brand-pinkdeep mb-4">
                  [30 秒自测你的 2026 报税身份]
                </p>
                <TaxQuiz />
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                第四步：IRS 替代方案 (Form 4852)
              </h2>
              <div className="rounded-[20px] bg-brand-pink/10 p-6 my-6 pointer-events-none border border-brand-pink/20">
                <p className="font-semibold text-brand-pinkdeep mb-2">解决方案</p>
                <p className="text-sm text-brand-ink/80">
                  如果到 4 月份还没拿到 W-2，IRS 允许你使用 <strong>Form 4852 (Substitute for Form W-2)</strong>。
                </p>
                <p className="mt-3 text-sm text-brand-ink/80">
                  如果你因为没收到 W-2 而错过 4 月 15 日截止日期，可能会面临 Late Filing Penalty（滞纳金）。使用 Form 4852 是 IRS 官方认可的补救措施，它能证明你已经尽力履行了纳税义务，对未来的绿卡或 H1B 申请更加保险。
                </p>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-brand-pinkdeep mb-2 text-center">懒人专属：2026 版 W-2 数据自动换算工具</p>
                <p className="text-brand-ink/75 leading-7 text-center">
                  别被复杂的表单吓到。翻开你 2025 年最后一张工资单（通常是 12 月底发的那张），找到 YTD (Year-to-Date) 这一栏。输入下方数值，我们将自动为你匹配到 Form 4852 的对应格子里。
                </p>
                <div className="mt-8 mb-4 flex justify-center">
                  <Image 
                    src="/images/How-to-find-YTD-on-paystub-for-Form-4852.webp"
                    alt="Paycheck stub example showing YTD for Form 4852"
                    width={800}
                    height={450}
                    className="rounded-2xl border border-brand-pink/30 shadow-md"
                  />
                </div>
              </div>

              <W2Estimator />

              <div className="mt-12 rounded-[28px] border border-brand-pink/40 bg-white/95 p-8 shadow-[0_20px_60px_rgba(244,185,200,0.3)]">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-brand-ink">下一步建议</h2>
                <p className="text-brand-ink/75 mb-6">如果你自测是 NRI 且年收入低于一定额度，可能只需要填 8843。请参考我们的专项教程：</p>
                <Link
                  href="/form-8843-guide"
                  className="inline-flex items-center text-brand-pinkdeep font-bold hover:underline"
                >
                  《8843 填写教程：无收入也能保身份》 →
                </Link>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-brand-ink">
                  常见问题 (FAQ)
                </h2>
                <div className="space-y-4">
                  <details className="rounded-2xl border border-brand-pink/30 bg-white/50 p-5 shadow-sm transition hover:bg-white/80">
                    <summary className="cursor-pointer font-bold text-brand-ink outline-none">
                      以后收到了原件 W-2 怎么办？
                    </summary>
                    <p className="mt-3 text-sm text-brand-ink/75 leading-relaxed">
                      如果原件数据和你的估算有较大出入，可以再提交一份 <strong>Amended Return (1040-X)</strong> 进行修正。IRS 允许在报税后的三年内进行修正，只要及时更新数据，通常不会影响你的信用或身份。
                    </p>
                  </details>
                </div>
              </div>
            </div>

            <section id="disclaimer" className="mt-16 pt-8 border-t border-brand-pink/20">
              <p className="text-xs text-brand-ink/50 leading-relaxed">
                免责声明：本内容仅为个人经验分享与税务信息整理，不构成法律、税务或专业建议。
                如有疑问，请咨询专业会计师 (CPA) 或直接联系 IRS。
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
