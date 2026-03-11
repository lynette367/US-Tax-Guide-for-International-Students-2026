import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Form 1042 vs 1042-S: 核心区别全解析 & 2026 留学生报税指南(附 PDF 下载)',
    description: '不知道该报 Form 1042 还是 1042-S？本文详细解析 2026 报税截止日、1042-S vs W-2 区别及 F1/J1 留学生 1040-NR 申报要点，助你避开 IRS 逾期罚款。本站提供最新版表格下载及手把手带填指南。',
    keywords: '1042 vs 1042-S, Form 1042-S instructions, 1042-S due date, 留学生报税 2026',
    alternates: {
        canonical: 'https://www.mapleworld.online/1042-vs-1042-s',
    },
};

export default function Page() {
    return (
        <main className="pb-16 text-brand-ink">
            <section className="px-4 py-12 sm:py-16">
                <div className="page-shell">
                    <article className="max-w-3xl mx-auto">
                        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
                            Guide / 2026 报税
                        </p>
                        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                            1042 vs 1042-S 有什么区别？2026 留学生报税表格最全解析(附 PDF 下载)
                        </h1>

                        <div className="prose prose-pink max-w-none mt-10">
                            <p className="text-brand-ink/75 leading-7">
                                对赴美留学生而言，<strong>Form 1042</strong> 与 <strong>Form 1042-S</strong> 是核心税务表格，但用途、主体与功能完全不同。简单说：Form 1042 是雇主/机构向 IRS 申报的年度汇总表，Form 1042-S 是开给非居民个人的收入明细单，二者是“总表与分表”的配套关系。
                            </p>

                            <div className="my-8 flex justify-center">
                                <Image
                                    src="/images/form-1042-vs-1042-s-comparison.webp"
                                    alt="IRS Form 1042 vs 1042-S 核心区别流程图 - 2026 留学生报税指南"
                                    width={800}
                                    height={450}
                                    priority
                                    className="rounded-2xl border border-brand-pink/30 shadow-lg"
                                />
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                一、核心定义与适用主体
                            </h2>
                            <ul className="list-disc pl-6 space-y-4 text-brand-ink/75">
                                <li>
                                    <strong>Form 1042（年度预扣税申报表）：</strong> 由美国高校、企业等付款方（代扣机构）填写，仅提交给 IRS，不发给个人。用于汇总申报一整年度向所有非美居民支付的美国来源收入、预扣税款总额，是机构层面的“总申报单”。仅非居民收入需用 Form 1042 申报，美居民不涉及。
                                </li>
                                <li>
                                    <strong>Form 1042-S（外国人美国来源收入表）：</strong> 由付款方出具、留学生个人持有的“个人收入凭证”。记录你当年度获得的奖学金、助学金、treaty 免税工资等非雇佣类收入，及预扣税率、减免金额。F1/J1 签证学生最常收到，用于填报 Form 1040-NR 非居民税表。
                                </li>
                            </ul>

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                二、关键区别（2026 适用）
                            </h2>
                            <div className="my-6 overflow-x-auto">
                                <table className="min-w-full border-collapse border border-brand-pink/20 text-sm">
                                    <thead>
                                        <tr className="bg-brand-pink/10">
                                            <th className="border border-brand-pink/20 px-4 py-3 text-left font-bold">维度</th>
                                            <th className="border border-brand-pink/20 px-4 py-3 text-left font-bold">Form 1042</th>
                                            <th className="border border-brand-pink/20 px-4 py-3 text-left font-bold">Form 1042-S</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-brand-ink/80 leading-relaxed">
                                        <tr>
                                            <td className="border border-brand-pink/20 px-4 py-3 font-semibold">填报主体</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">高校、企业等付款机构</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">同左（出具给个人）</td>
                                        </tr>
                                        <tr className="bg-brand-pink/5">
                                            <td className="border border-brand-pink/20 px-4 py-3 font-semibold">接收对象</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">仅美国 IRS（国税局）</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">非居民个人（留学生）+ IRS</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-brand-pink/20 px-4 py-3 font-semibold">申报内容</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">全年所有非居民收入、税款汇总</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">单一个人的单笔/同类收入明细</td>
                                        </tr>
                                        <tr className="bg-brand-pink/5">
                                            <td className="border border-brand-pink/20 px-4 py-3 font-semibold">收入类型</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">奖学金、股息、版税、treaty 工资等</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">应税奖学金、免税 treaty 收入、助学金</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-brand-pink/20 px-4 py-3 font-semibold">2026 Deadline</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">3月16日（15日为周日顺延）</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">3月16日（同左）</td>
                                        </tr>
                                        <tr className="bg-brand-pink/5">
                                            <td className="border border-brand-pink/20 px-4 py-3 font-semibold">与 W-2 区别</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">非居民非工资类收入</td>
                                            <td className="border border-brand-pink/20 px-4 py-3">1042-S vs W-2：W-2 是美居民工资单；1042-S 对应非居民 treaty/奖学金收入</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                三、2026 申报要点（Form 1042-S Instructions 2025/2026）
                            </h2>
                            <ol className="list-decimal pl-6 space-y-4 text-brand-ink/75">
                                <li><strong>收入代码：</strong> 表单需标注收入代码（如 05=奖学金、06=股息），一单一码，多类收入需多张 Form 1042-S。</li>
                                <li><strong>预扣税率：</strong> 基础 30%，中美税收协定可降至 14% 或全免（需 Form W-8BEN 表格）。</li>
                                <li><strong>提交要求：</strong> 超 10 张需电子申报；纸质版需附 Form 1042-T 传送表。</li>
                                <li><strong>留学生用途：</strong> Form 1042-S 是申报 Form 1040-NR 的必填附件，用于申请退税或证明免税收入。</li>
                            </ol>

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                四、常见误区
                            </h2>
                            <ul className="space-y-3 text-brand-ink/75">
                                <li className="flex gap-2"><span>❌</span> <strong>1042 ≠ 1042-S：</strong> 前者机构总表、后者个人凭证，缺一不可。</li>
                                <li className="flex gap-2"><span>❌</span> <strong>1042-S ≠ W-2：</strong> W-2 记录工资社保；1042-S 对应奖学金、treaty 免税收入。</li>
                                <li className="flex gap-2"><span>❌</span> <strong>逾期罚款：</strong> 2026年3月16日（Deadline）后未申报，单张最高罚 660 美元。</li>
                            </ul>

                            <div className="mt-12 rounded-[28px] border border-brand-pink/40 bg-white/95 p-8 shadow-[0_20px_60px_rgba(244,185,200,0.3)]">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-brand-ink">资源下载与自测</h2>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="soft-card !bg-brand-pink/5">
                                        <h3 className="font-semibold mb-2">官方表格下载</h3>
                                        <p className="text-sm text-brand-ink/70 mb-4">从 IRS 官网获取 2025/2026 最新版表单 PDF。</p>
                                        <div className="flex flex-col gap-2">
                                            <a href="https://www.irs.gov/pub/irs-pdf/f1042.pdf" target="_blank" className="text-sm text-brand-pinkdeep font-bold hover:underline">Form 1042 下载 →</a>
                                            <a href="https://www.irs.gov/pub/irs-pdf/f1042s.pdf" target="_blank" className="text-sm text-brand-pinkdeep font-bold hover:underline">Form 1042-S 下载 →</a>
                                        </div>
                                    </div>
                                    <div className="soft-card !bg-brand-pink/5 text-center flex flex-col items-center justify-center">
                                        <h3 className="font-semibold mb-2">身份判定工具</h3>
                                        <p className="text-sm text-brand-ink/70 mb-4">30 秒自测你的 Resident/Non-resident 身份。</p>
                                        <Link
                                            href="/tools/opt-tax"
                                            className="inline-flex items-center justify-center rounded-full bg-brand-pinkdeep px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-brand-pinkhover active:scale-95"
                                        >
                                            开始自测 →
                                        </Link>
                                    </div>
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