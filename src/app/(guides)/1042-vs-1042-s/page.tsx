import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { Tax1042SAssessment } from "../../../components/Tax1042SAssessment";

export const metadata: Metadata = {
    title: '1042 是啥？2026 留学生 1042-S 报税终极解惑',
    description: '如果你在信封上看到 1042 字样，它通常指的就是 Form 1042-S。本文为 2026 留学生提供 1042-S 报税全指南，包含 1042-S vs W2 对比、中美税收协定 $5000 免税额申报及 3.21 还没收到表的补救方案。',
    alternates: {
        canonical: 'https://www.mapleworld.online/1042-vs-1042-s',
    },
};

export default function Page() {
    return (
        <main className="pb-16 text-brand-ink">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "1042 和 1042-S 有什么区别？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "1042 是雇主向 IRS 提交的年度汇总表，而 1042-S 是发给留学生个人的收入凭证。留学生报税时使用的是 1042-S。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "错过 3.16 还没收到 1042-S 怎么办？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "如果你确定有奖学金或使用了 Tax Treaty，请联系学校财务处。如果 3.21 仍未收到，建议先等待，不要盲目提交以免后期需要修正申报。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "收到 1042-S 还需要报 W2 吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，如果你既有工资收入（W-2）又有奖学金/免税额（1042-S），这两张表都需要在 1040-NR 中申报。"
                                }
                            }
                        ]
                    })
                }}
            />
            <section className="px-4 py-12 sm:py-16">
                <div className="page-shell">
                    <article className="max-w-3xl mx-auto">
                        <Breadcrumbs
                            items={[
                                { label: "报税攻略", href: "/guides" },
                                { label: "1042 专题" }
                            ]}
                        />
                        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50 mt-4">
                            Guide / 2026 报税
                        </p>
                        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                            1042 是啥？2026 留学生 1042-S 报税终极解惑
                        </h1>

                        <div className="prose prose-pink max-w-none mt-10">
                            <div className="bg-brand-pink/5 border-l-4 border-brand-pinkdeep p-5 my-8 rounded-r-2xl">
                                <p className="text-brand-ink/85 leading-relaxed m-0">
                                    如果你在信封上看到 <strong>1042</strong> 字样，它通常指的就是 <strong>Form 1042-S</strong>。这是留学生因为奖学金或中美税收协定免税额而收到的一张非常关键的税表。
                                </p>
                            </div>

                            <Tax1042SAssessment />

                            <h2 id="what-is-1042" className="text-2xl sm:text-3xl font-bold mt-16 mb-6 text-brand-ink border-b-2 border-brand-pink/20 pb-2">
                                快速扫盲：你手里的“1042”到底是什么？
                            </h2>
                            <p className="text-brand-ink/75 leading-7">
                                很多同学看到信封上写着“1042”就慌了。其实 <strong>Form 1042-S</strong> (Foreign Person&apos;s U.S. Source Income Subject to Withholding) 是一张记录你作为非居民（Non-resident）在美收入的凭证。
                            </p>
                            <div className="grid gap-6 sm:grid-cols-2 my-8">
                                <div className="p-6 rounded-2xl bg-white border border-brand-pink/20 shadow-sm transition hover:shadow-md">
                                    <h3 className="text-lg font-bold mb-3 text-brand-ink">Box 1 & Box 2：解读免税额度</h3>
                                    <p className="text-sm text-brand-ink/70 leading-relaxed">
                                        这两个框里的代码决定了你的收入性质。如果你看到了 $5,000 的金额，那通常就是中美税收协定的免税部分。
                                    </p>
                                    <Link href="/f1-tax-treaty-calculator" className="text-brand-pinkdeep text-sm font-bold hover:underline block mt-4">
                                        了解中美税收协定详情 →
                                    </Link>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border border-brand-pink/20 shadow-sm transition hover:shadow-md">
                                    <h3 className="text-lg font-bold mb-3 text-brand-ink">为什么不是每人都有？</h3>
                                    <p className="text-sm text-brand-ink/70 leading-relaxed">
                                        只有涉及奖学金、助研金（RA/TA）中免税部分，或者明确申请了 Treaty 免税的同学才会收到。
                                    </p>
                                </div>
                            </div>

                            <h2 id="comparison" className="text-2xl sm:text-3xl font-bold mt-16 mb-6 text-brand-ink border-b-2 border-brand-pink/20 pb-2">
                                傻傻分不清？1042-S vs. W-2 vs. 1099 核心区别对比
                            </h2>
                            <div className="my-8 flex justify-center">
                                <Image
                                    src="/images/form-1042-vs-1042-s-comparison.webp"
                                    alt="留学生报税表单对比：W2, 1099-INT, 1042-S 的区别与用途"
                                    width={800}
                                    height={450}
                                    priority
                                    className="rounded-2xl border border-brand-pink/30 shadow-lg"
                                />
                            </div>
                            
                            <h3 className="text-xl font-bold mt-10 mb-4 text-brand-ink">1042-S：奖学金与协议免税</h3>
                            <p className="text-brand-ink/75 leading-7 text-sm sm:text-base">
                                它是专门给“非居民个人”发的。如果你的学校把你的 $5,000 免税额度从 W-2 中扣除了，那么这部分钱就会单独出现在 1042-S 上。
                            </p>

                            <h3 className="text-xl font-bold mt-10 mb-4 text-brand-ink">W-2：校内打工与实习工资</h3>
                            <p className="text-brand-ink/75 leading-7 text-sm sm:text-base">
                                这是最常见的工资表。如果你在图书馆打工或在外面实习（CPT/OPT），公司会发 W-2。注意：W-2 记录的是应税工资。
                            </p>

                            <h2 id="deadline-missing" className="text-2xl sm:text-3xl font-bold mt-16 mb-6 text-brand-ink border-b-2 border-brand-pink/20 pb-2">
                                2026 关键节点：3.21 还没收到 1042-S 怎么办？
                            </h2>
                            <p className="text-brand-ink/75 leading-7">
                                按照规定，学校应在 3 月 15 日前寄出。如果你到 <strong>2026.3.21</strong> 还没收到：
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-brand-ink/75 mt-4">
                                <li className="text-sm sm:text-base"><strong>确定你是否真的有：</strong> 使用上方的判定器自测。</li>
                                <li className="text-sm sm:text-base"><strong>检查电子版：</strong> 登录学校的 GLACIER 或财务系统，通常电子版比纸质快。</li>
                                <li className="text-sm sm:text-base"><strong>该等还是该报？</strong> 如果你确定有 1042-S 却没收到，<strong>严禁先按 W-2 提交</strong>。漏报 1042-S 会导致 IRS 查税，后期修改（1040-X）非常麻烦。</li>
                            </ul>

                            <h2 id="how-to-file" className="text-2xl sm:text-3xl font-bold mt-16 mb-6 text-brand-ink border-b-2 border-brand-pink/20 pb-2">
                                报税实操：如何将 1042-S 填入 1040-NR 申报表？
                            </h2>
                            <p className="text-brand-ink/75 leading-7">
                                在填写 1040-NR 时，1042-S 的信息主要对应在“Income Exempt from Tax”部分。
                            </p>
                            <div className="bg-brand-ink/5 p-6 rounded-2xl my-6">
                                <p className="text-sm font-semibold mb-2">💡 专业提示：</p>
                                <p className="text-sm text-brand-ink/70 italic">
                                    “确保 1042-S 上的 Income Code 和 Tax Rate 与你的实际情况相符。常见的 1042-S 错误包括姓名拼写不一致或 SSN/ITIN 缺失，这会直接影响你的退税速度。”
                                </p>
                            </div>

                            <h2 id="faq" className="text-2xl sm:text-3xl font-bold mt-16 mb-6 text-brand-ink border-b-2 border-brand-pink/20 pb-2">
                                常见问题 (FAQ)
                            </h2>
                            <div className="space-y-6">
                                <div className="border-b border-brand-pink/10 pb-4">
                                    <h3 className="text-lg font-bold text-brand-ink">1042 和 1042-S 有什么区别？</h3>
                                    <p className="text-sm text-brand-ink/75 mt-2">1042 是雇主向 IRS 提交的年度汇总表，而 1042-S 是发给留学生个人的收入凭证。留学生报税时使用的是 1042-S。</p>
                                </div>
                                <div className="border-b border-brand-pink/10 pb-4">
                                    <h3 className="text-lg font-bold text-brand-ink">错过 3.16 还没收到 1042-S 怎么办？</h3>
                                    <p className="text-sm text-brand-ink/75 mt-2">如果你确定有奖学金或使用了 Tax Treaty，请联系学校财务处。如果 3.21 仍未收到，建议先等待，不要盲目提交以免后期需要修正申报。</p>
                                </div>
                                <div className="pb-4">
                                    <h3 className="text-lg font-bold text-brand-ink">收到 1042-S 还需要报 W2 吗？</h3>
                                    <p className="text-sm text-brand-ink/75 mt-2">
                                        是的。已经按 W-2 报完税才收到 1042-S 怎么补救？请尽快参考我们的 
                                        <Link href="/amend-w2-1099" className="text-brand-pinkdeep underline ml-1">漏报补救指南</Link> 
                                        准备 1040-X。
                                    </p>
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