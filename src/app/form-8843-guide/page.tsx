import type { Metadata } from "next";
import Image from "next/image";
import TaxQuiz from "@/components/TaxQuiz";
import Link from "next/link";

export const metadata: Metadata = {
    title: "2026 最新 OPT 报税 Form 8843 填写保姆级教程（含 STEM 延期说明）(附 PDF 下载)",
    description: "2026年OPT/STEM延期学生如何填Form 8843？本教程涵盖1040-NR、FICA退税及中美$5000免税协定（Treaty）详解。内含2026最新表单示例。本站提供最新版表格下载及手把手带填指南。助你3分钟完成无收入申报，规避H1B申请后的税务审计风险。",
    alternates: {
        canonical: "https://www.mapleworld.online/form-8843-guide",
    },
};

export default function Form8843GuidePage() {
    return (
        <main className="pb-16 text-brand-ink">
            <section className="px-4 py-12 sm:py-16">
                <div className="page-shell">
                    <article className="max-w-3xl mx-auto">
                        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
                            Guide / 2026 报税
                        </p>
                        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                            2026 最新 OPT 报税 Form 8843 填写保姆级教程（含 STEM 延期说明）(附 PDF 下载)
                        </h1>

                        <p className="mt-6 text-lg text-brand-ink/80 leading-relaxed">
                            对于在美留学生尤其是处于 OPT 或 STEM 延期阶段的同学来说，2026 年报税季最基础也最关键的一份文件就是 <strong>Form 8843</strong>。
                            无论你 2025 年是否有收入，只要你依然被定义为 <strong>F1 Non-resident</strong>（非居民），这份表就是你的“身份保命符”。
                        </p>

                        {/* Interactive Tool Placement */}
                        <TaxQuiz />

                        <div className="prose prose-pink max-w-none mt-10">
                            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                为什么 F1/OPT 必须重视 Form 8843？
                            </h2>
                            <p className="text-brand-ink/75 leading-7">
                                很多人会问：“我去年一整年都在找工作，没有任何收入（W2/1099），我也要报税吗？”
                                答案是肯定的。Form 8843 全称是 <em>Statement for Exempt Individuals and Individuals with a Medical Condition</em>。
                                它的核心作用不是报钱，而是<strong>声明豁免身份</strong>。
                            </p>
                            <p className="text-brand-ink/75 leading-7 mt-4">
                                通过这份表，你是在向 IRS 说明：虽然我在美国待的天数可能符合“实质居住测试（SPT）”，但因为我是持 F1 项目的学生，
                                按照税法规定，我的天数不应计入判定，我依然可以维持 Non-resident 身份，享受学生专属的税务优惠。
                            </p>

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                2026 报税的核心判定逻辑：你是第几年？
                            </h2>
                            <div className="rounded-[20px] bg-brand-pink/10 p-6 my-6">
                                <p className="font-semibold text-brand-pinkdeep mb-2">五年规则（5-Year Rule）</p>
                                <p className="text-sm text-brand-ink/80">
                                    F1 学生在美的前 5 个“日历年”通常被视为 Exempt Individual。
                                    比如你是 2021 年入境，那么 2021, 2022, 2023, 2024, 2025 这五年你都是 Non-resident。
                                    即使你在 2025 年进入了 <strong>STEM 延期</strong>，只要没超过 5 年，你依然需要填 8843。
                                </p>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                手把手教你填 2026 最新 Form 8843
                            </h2>
                            <div className="my-8 flex justify-center">
                                <Image 
                                    src="/images/form-8843-sample.webp"
                                    alt="IRS Form 8843 Sample for 2025 Tax Year - Official Statement for Exempt Individuals and Individuals with a Medical Condition"
                                    width={1200}
                                    height={1600}
                                    className="rounded-2xl border border-brand-pink/30 shadow-lg"
                                />
                            </div>
                            <p className="text-brand-ink/75">Form 8843 分为几个部分，学生（F/J/M/Q）通常只需要关注 <strong>Part I</strong> 和 <strong>Part III</strong>。</p>

                            <h3 className="text-xl font-semibold mt-8 mb-4">Part I: General Information</h3>
                            <ul className="list-disc pl-6 space-y-2 text-brand-ink/75">
                                <li><strong>Name & Address:</strong> 填写你目前的住址，通常是美国地址。</li>
                                <li><strong>SSN/ITIN:</strong> 如果你有 OPT 收入通常会有 SSN；如果没有收入且没有 SSN，这一项可以留空。</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">Part III: Students</h3>
                            <p className="text-brand-ink/75">这一部分是针对 F1 / OPT 同学的核心：</p>
                            <ul className="list-disc pl-6 space-y-2 text-brand-ink/75">
                                <li><strong>Line 9:</strong> 填写你 2025 年入境时的签证类型（F-1）。</li>
                                <li><strong>Line 10:</strong> 填写你的 F-1 身份类别（学生）。</li>
                                <li><strong>Line 11-12:</strong> 填写你的学校信息、联系人（通常是学校的 DSO）。</li>
                                <li><strong>Line 14:</strong> 统计近几年的居住天数。这是防止你被误认作 Resident 的关键项。</li>
                            </ul>

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                OPT 与 STEM 延期的特殊情况：1040-NR 与 Treaty
                            </h2>
                            <p className="text-brand-ink/75 leading-7">
                                如果你在 OPT 或 STEM 延期期间有工资收入，除了 8843，你还需要叠加 <strong>Form 1040-NR</strong>。
                            </p>
                            <div className="my-6 border-l-4 border-brand-pinkdeep pl-6 py-2 italic text-brand-ink/80 bg-brand-pink/5">
                                “注意：中美之间有 $5000 的免税协定（Article 20(c) Treaty）。
                                如果你是 F1 身份，这 $5000 的工资收入是不需要交联邦税的。”
                            </div>
                            <p className="text-brand-ink/75 leading-7 mt-4">
                                此外，F1 学生在 OPT 期间通常可以豁免 FICA（Social Security & Medicare Tax）。
                                如果公司误扣了这些税，你需要通过 Form 843 申请退回。
                            </p>

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                规避报税审计风险：别乱点 TurboTax
                            </h2>
                            <p className="text-brand-ink/75">
                                很多同学贪图方便使用 TurboTax。<strong>注意！</strong> TurboTax 主要面向 Residents。
                                如果你是 F1 Non-resident 却误用了 TurboTax 报成了 Resident（因为这样拿到的退税往往更多），
                                这在未来 H1B 申请或绿卡面试中可能会被视为“税务欺诈”或“违反签证条款”。
                            </p>

                            <div className="mt-12 rounded-[28px] border border-brand-pink/40 bg-white/95 p-8 shadow-[0_20px_60px_rgba(244,185,200,0.3)]">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-brand-ink">准备好开始了吗？</h2>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="soft-card !bg-brand-pink/5">
                                        <h3 className="font-semibold mb-2">官方下载</h3>
                                        <p className="text-sm text-brand-ink/70 mb-4">从 IRS 官网获取最新的表单 pdf 文件。</p>
                                        <div className="flex flex-col gap-2">
                                            <a href="https://www.irs.gov/forms-pubs/about-form-8843" target="_blank" className="text-sm text-brand-pinkdeep font-bold hover:underline">Form 8843 下载 →</a>
                                            <a href="https://www.irs.gov/pub/irs-pdf/f1040nr.pdf" target="_blank" className="text-sm text-brand-pinkdeep font-bold hover:underline">Form 1040-NR 下载 →</a>
                                        </div>
                                    </div>
                                    <div className="soft-card !bg-brand-pink/5">
                                        <h3 className="font-semibold mb-2">需要更多帮助？</h3>
                                        <p className="text-sm text-brand-ink/70 mb-4">查看我们的 F1 身份判定自动工具，3 秒钟锁定你的报税路径。</p>
                                        <Link href="/tools/opt-tax" className="text-sm text-brand-pinkdeep font-bold hover:underline tracking-tight">去使用身份判定工具 →</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id="disclaimer" className="mt-16 pt-8 border-t border-brand-pink/20">
                            <p className="text-xs text-brand-ink/50 leading-relaxed">
                                免责声明：本内容仅为个人经验分享与税务信息整理，不构成法律、税务或专业建议。
                                报税规则可能因个人具体出入境记录而异，建议在提交前咨询 CPA 或使用 Sprintax 等专业留学生报税软件。
                            </p>
                        </section>
                    </article>
                </div>
            </section>
        </main>
    );
}
