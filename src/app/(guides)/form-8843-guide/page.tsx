import type { Metadata } from "next";
import Image from "next/image";
import TaxQuiz from "../../../components/TaxQuiz";
import Link from "next/link";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import Sidebar8843 from "../../../components/Sidebar8843";

export const metadata: Metadata = {
    title: "2026 F1留学生没收入也要报税吗？不报税的后果惩罚？（附Form 8843 填报指南）",
    description: "2026年F1/J1 留学生没收入也要报税吗？是的！只要你在美国，即使零收入也必须在 4.15 前寄送 Form 8843。涵盖 F1/J1 身份及 STEM Extension 期间的申报注意事项，分析留学生不报税对未来 H1B 和绿卡申请的潜在惩罚与影响，助你合规完成 2026 年度税务申报。",
    alternates: {
        canonical: "https://www.mapleworld.online/form-8843-guide",
    },
};

export default function Form8843GuidePage() {
    return (
        <main className="pb-16 text-brand-ink">
            <section className="px-4 py-12 sm:py-16">
                <div className="page-shell">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12 items-start">
                        <article className="min-w-0">
                            <Breadcrumbs
                                items={[
                                    { label: "报税攻略", href: "/guides" },
                                    { label: "8843 指南" }
                                ]}
                            />
                            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
                                Guide / 2026 报税
                            </p>
                            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                                留学生没收入要报税吗？不报税的后果惩罚？（含 STEM 延期说明）
                            </h1>

                            <p className="mt-6 text-lg text-brand-ink/80 leading-relaxed">
                                是的！只要你在美国，没收入也必须寄送 Form 8843！<br />
                                对于在美留学生尤其是处于 OPT 或 STEM 延期阶段的同学来说，2026 年报税季最基础也最关键的一份文件就是 <strong>Form 8843</strong>。<br />
                                无论你 2025 年是否有收入，只要你依然被定义为 <strong>F1 Non-resident</strong>（非居民），这份表就是你的“身份保命符”。
                            </p>

                            {/* Interactive Tool Placement */}
                            <TaxQuiz />

                            <div className="prose prose-pink max-w-none mt-10">
                                <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                    什么是 Form 8843？为什么 F1/OPT 必须重视 Form 8843？
                                </h2>
                                <p className="text-brand-ink/75 leading-7">
                                    Form 8843 全称是 <em>Statement for Exempt Individuals and Individuals with a Medical Condition</em>。
                                    它的核心作用不是报钱，而是<strong>声明豁免身份</strong>。
                                </p>
                                <p className="text-brand-ink/75 leading-7 mt-4">
                                    很多人会问：“我去年一整年都在找工作，没有任何收入（W2/1099），我也要报税吗？”
                                    答案是肯定的。<br />
                                    你要做的，就是通过这份表，向 IRS 说明：虽然我在美国待的天数可能符合“实质居住测试（SPT）”，但因为我是持 F1 项目的学生，
                                    按照税法规定，我的天数不应计入判定，我依然可以维持 Non-resident 身份，享受学生专属的税务优惠。
                                </p>
                                <div className="rounded-[20px] bg-brand-pink/10 p-6 my-6">
                                    <p className="font-semibold text-brand-pinkdeep mb-2">五年规则（5-Year Rule）</p>
                                    <p className="text-sm text-brand-ink/80">
                                        F1 学生在美的前 5 个“日历年”通常被视为 Exempt Individual。
                                        比如你是 2021 年入境，那么 2021, 2022, 2023, 2024, 2025 这五年你都是 Non-resident。
                                        即使你在 2025 年进入了 <strong>STEM 延期</strong>，只要没超过 5 年，你依然需要填 8843。
                                    </p>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                    2026 年，你依然需要填 8843 吗？千万别拿 H1B 和绿卡开玩笑
                                </h2>

                                {/* Comparison Section */}
                                <div className="my-10 rounded-3xl overflow-hidden border border-brand-pink/20 shadow-[0_8px_30px_rgb(244,185,200,0.1)] bg-white">
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="p-8 bg-red-50/30 flex flex-col justify-center border-b md:border-b-0 md:border-r border-brand-pink/10">
                                            <div className="text-red-600 font-bold mb-2 flex items-center text-lg">
                                                <span className="mr-2 text-xl">❌</span> 不报税
                                            </div>
                                            <p className="text-brand-ink/80 text-sm sm:text-base leading-relaxed font-medium">
                                                面临 H1B 风险 & 信用受损
                                            </p>
                                        </div>
                                        <div className="p-8 bg-brand-pink/5 flex flex-col justify-center">
                                            <div className="text-brand-pinkdeep font-bold mb-2 flex items-center text-lg">
                                                <span className="mr-2 text-xl">✅</span> 花 5 分钟报 8843
                                            </div>
                                            <p className="text-brand-ink/80 text-sm sm:text-base leading-relaxed font-medium">
                                                换取 2026 全年身份无忧
                                            </p>
                                        </div>
                                    </div>
                                    <Link
                                        href="/form-8843-tutorial-2026"
                                        className="block w-full py-5 text-center bg-brand-pinkdeep text-white font-bold text-lg hover:bg-brand-pinkdeep/90 transition-all active:scale-[0.99]"
                                    >
                                        点击查看：8843 手把手填报教程 →
                                    </Link>
                                </div>
                                <h3>1. 签证及未来移民申请受阻</h3>
                                <p className="mt-4 text-brand-ink/80 leading-relaxed">
                                    留学生申报 Form 8843 是维持合法身份的联邦法律义务。如果不报，在未来申请 <strong>H1B、OPT 延期或绿卡</strong>时，IRS 的不合规记录可能导致移民局认为你“未能遵守非移民签证条款”，从而产生身份衔接风险。
                                </p>
                                <h3>2. 罚款与欠税风险</h3>
                                <p className="mt-4 text-brand-ink/80 leading-relaxed">
                                    如果你不仅没报 8843，还漏报了有收入的 1040-NR，IRS 会收取每月 5% 的未申报罚款。虽然纯 8843 申报（无收入）通常没有金钱罚款，但逾期申报会让你失去 3 年内申领历史退税的权利。
                                </p>
                                <h3>3. 信用记录受损</h3>
                                <p className="mt-4 text-brand-ink/80 leading-relaxed">
                                    长期不报税可能导致欠税信息进入公共记录，进而影响你在美国的个人信用分数 (FICO)。这不仅会影响未来租房、贷款买车，甚至在极端欠税情况下，可能面临 IRS 的法律追讨及入籍时的“道德标准”审查。
                                </p>

                                <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                    OPT 与 STEM 延期的特殊说明：1040-NR 与 Treaty
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
                                    很多人都在说3.15是截止日期，这个是啥截止了？8843表格现在寄出还来得及吗？
                                </h2>
                                <div className="bg-brand-pink/5 border-l-4 border-brand-pinkdeep p-5 rounded-r-xl">
                                    <p className="text-base leading-relaxed text-brand-ink/80">
                                        首先要明确：<strong>Form 8843 的寄送并不依赖于 1042-S。</strong>
                                    </p>
                                    <p className="mt-3 text-base leading-relaxed text-brand-ink/80">
                                        2026 年 3 月 16 日是学校发放 1042-S 的法定截止日。如果你至今未收到，大概率是因为你 2025 年没有符合 Treaty 免税的奖学金或收入。
                                    </p>
                                    <ul className="mt-4 space-y-3">
                                        <li>* 1042-S 发送截止日 (3.15)：这是学校/雇主把表寄给你的最后期限。因为 2026 年 3 月 15 日是周日，所以顺延到 3 月 16 日。</li>
                                        <li>* 1042-S 接收截止日 (4.15)：这是你独立寄出 8843 的最终期限。</li>
                                    </ul>
                                    <div className="mt-4 p-3 bg-white/60 rounded-lg border border-brand-pink/10">
                                        <p className="text-sm font-bold text-brand-pinkdeep flex items-center gap-2">
                                            <span className="text-lg">💡</span> 核心结论：
                                        </p>
                                        <p className="mt-1 text-sm text-brand-ink/90">
                                            即便你因为没有收入而<strong>注定不会收到 1042-S</strong>，你依然有义务在 <strong>4.15 报税季结束前</strong> 独立寄出 Form 8843。千万不要因为“没收到表”就错过 8843 的截止日，以免影响未来的签证和身份转换。
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-3 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                                    <p className="text-base text-amber-900 leading-relaxed">
                                        2026 年 3 月 16 日是学校发放 1042-S 的法定截止日。如果你至今未收到，<strong>请务必联系学校国际办 (ISSO)</strong>。
                                        <br /><br />
                                        <span className="font-semibold">核心提醒：</span>
                                        不知道1042是啥？一键查看<a href="/1042-vs-1042-s" className="text-brand-pinkdeep font-bold hover:underline">1042-S 到底是什么？</a>
                                    </p>
                                </div>

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
                        <aside className="lg:sticky lg:top-24">
                            <Sidebar8843 />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
