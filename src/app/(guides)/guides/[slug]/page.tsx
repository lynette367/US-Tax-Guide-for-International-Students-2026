import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, guides } from "@/lib/guides";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import TaxQuiz from "@/components/TaxQuiz";


export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `https://www.mapleworld.online/guides/${slug}`,
    },
  };
}

// 极简判断流小组件
function W2DecisionFlow() {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-brand-pink/30 shadow-lg my-8">
      <h3 className="text-xl sm:text-2xl font-bold text-brand-ink mb-6 text-center">
        我有 W-2 = 我能填 1040 吗？
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* 错误路径 */}
        <div className="bg-red-50 rounded-xl p-5 border border-red-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg">✗</span>
            <h4 className="text-lg font-bold text-red-800">错误逻辑</h4>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-red-200 text-red-800 flex items-center justify-center text-xs font-bold">1</span>
              <span className="text-red-900">收到 W-2</span>
            </div>
            <div className="text-red-400 text-center">⬇️</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-red-200 text-red-800 flex items-center justify-center text-xs font-bold">2</span>
              <span className="text-red-900">打开 TurboTax</span>
            </div>
            <div className="text-red-400 text-center">⬇️</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-red-200 text-red-800 flex items-center justify-center text-xs font-bold">3</span>
              <span className="text-red-900">填 1040</span>
            </div>
            <div className="text-red-400 text-center">⬇️</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-red-200 text-red-800 flex items-center justify-center text-xs font-bold">4</span>
              <span className="text-red-900">拿 Standard Deduction</span>
            </div>
            <div className="text-red-400 text-center">⬇️</div>
            <div className="bg-red-600 text-white p-3 rounded-lg text-center font-bold">
              ⚠️ 风险：身份违规，H1B 埋雷
            </div>
          </div>
        </div>

        {/* 正确路径 */}
        <div className="bg-green-50 rounded-xl p-5 border border-green-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">✓</span>
            <h4 className="text-lg font-bold text-green-800">正确逻辑</h4>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold">1</span>
              <span className="text-green-900">收到 W-2</span>
            </div>
            <div className="text-green-400 text-center">⬇️</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold">2</span>
              <span className="text-green-900">检查 F-1 身份是否满 5 年</span>
            </div>
            <div className="text-green-400 text-center">⬇️</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold">3</span>
              <span className="text-green-900">依旧是 Non-resident</span>
            </div>
            <div className="text-green-400 text-center">⬇️</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold">4</span>
              <span className="text-green-900">填 1040-NR</span>
            </div>
            <div className="text-green-400 text-center">⬇️</div>
            <div className="bg-green-600 text-white p-3 rounded-lg text-center font-bold">
              ✅ 安全：合法合规，保护移民身份
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link 
          href="/tools/opt-tax" 
          className="inline-flex items-center gap-2 bg-brand-pinkdeep text-white px-6 py-3 rounded-full font-bold hover:bg-brand-pinkhover transition-colors shadow-lg"
        >
          <span>🎯</span>
          不确定？3秒自测你的报税身份
        </Link>
      </div>
    </div>
  );
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="pb-16 text-brand-ink">
      {/* Schema.org 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": guide.title,
            "description": guide.description,
            "image": "https://www.mapleworld.online/og-image.png",
            "totalTime": "PT30M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "0"
            },
            "step": [
              {
                "@type": "HowToStep",
                "name": "确认错误类型",
                "text": "检查你是否误将 1040-NR 填成了 1040，并确认是否误领了 Standard Deduction",
                "url": `https://www.mapleworld.online/guides/${slug}#step1`
              },
              {
                "@type": "HowToStep",
                "name": "准备 1040-X 修正表",
                "text": "下载并填写 1040-X 修正表，将 Resident 身份修正为 Non-resident",
                "url": `https://www.mapleworld.online/guides/${slug}#step2`
              },
              {
                "@type": "HowToStep",
                "name": "重新填写 1040-NR",
                "text": "按照 Non-resident 身份重新填写 1040-NR 表格",
                "url": `https://www.mapleworld.online/guides/${slug}#step3`
              },
              {
                "@type": "HowToStep",
                "name": "邮寄 IRS",
                "text": "将修正后的表格邮寄至 IRS 指定地址",
                "url": `https://www.mapleworld.online/guides/${slug}#step4`
              }
            ]
          })
        }}
      />

      <section className="px-4 py-8 sm:py-12 bg-gradient-to-b from-brand-pink/10 to-transparent">
        <div className="page-shell">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "报税攻略", href: "/guides" },
                { label: guide.title }
              ]}
            />
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight drop-shadow-sm">
              {guide.title}
            </h1>
            <p className="mt-6 text-lg text-brand-ink/80 leading-relaxed font-medium">
              {guide.description}
            </p>
            <div className="mt-6 inline-block bg-red-100/80 text-red-900 px-5 py-3 rounded-xl border border-red-200 font-bold shadow-sm">
              🚨 紧急提醒：4.15 截止前必须完成修正，避免罚款和签证风险！
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="page-shell">
          <div className="max-w-4xl">
            
            <article className="prose prose-pink max-w-none space-y-12">
              
              {/* 内容部分 */}
              {guide.sections.map((section, index) => {
                const HeadingTag = section.level === 3 ? "h3" : "h2";
                
                // 特殊处理：如果是判断流部分，显示小组件
                if (section.heading === "我有 W-2 = 我能填 1040 吗？") {
                  return <W2DecisionFlow key={index} />;
                }
                

                
                // 特殊处理：为新添加的两个板块添加莫兰蒂色块样式
                const isSpecialSection = 
                  section.heading === "NRA 收到 W-2 是完全正常的" || 
                  section.heading === "核心补救方案：如何修正？";
                
                // 根据板块选择不同的莫兰蒂色块
                const bgColor = section.heading === "NRA 收到 W-2 是完全正常的" 
                  ? "bg-green-50 border-green-100" 
                  : "bg-blue-50 border-blue-100";
                
                // 为 h3 层级定义轮流使用的莫兰蒂色块
                const morandiColors = [
                  { bg: '#94A98715', border: '#94A987', icon: '#94A987' }, // 橄榄绿
                  { bg: '#D9939315', border: '#D99393', icon: '#D99393' }, // 豆沙粉
                  { bg: '#D9C7B815', border: '#D9C7B8', icon: '#D9C7B8' }, // 浅米色
                  { bg: '#A9B8C015', border: '#A9B8C0', icon: '#A9B8C0' }, // 灰蓝色
                  { bg: '#B89F8715', border: '#B89F87', icon: '#B89F87' }, // 驼色
                ];
                
                // 计算当前 h3 的索引（只计算 h3 层级）
                const h3Index = guide.sections.slice(0, index).filter(s => s.level === 3).length;
                const morandiColor = section.level === 3 ? morandiColors[h3Index % 5] : null;
                
                return section.level === 3 && morandiColor ? (
                  <section 
                    key={`${section.heading}-${index}`} 
                    className="rounded-2xl border-l-[6px] p-6 sm:p-8 shadow-sm shadow-brand-pink/10 transition-transform hover:translate-x-1"
                    style={{ 
                      backgroundColor: morandiColor.bg,
                      borderColor: morandiColor.border 
                    }}
                  >
                    <h3 className="text-lg font-bold text-brand-ink flex items-center gap-2 mb-4">
                      <span style={{ color: morandiColor.icon }} className="font-bold">▸</span> {section.heading}
                    </h3>
                    <div className="space-y-4 text-sm sm:text-base text-brand-ink/75">
                      {section.blocks.map((block, blockIndex) => {
                        if (block.type === "paragraph") {
                            // 特殊处理：为特定文字添加黄色 callout
                            if (block.text === "BUT：大多数 OPT 公司的 HR 并不专业，他们通常不会帮你处理 8233。所以，他们会把你的所有收入都写在 W-2 上。") {
                              return (
                                <div key={blockIndex} className="bg-amber-50/60 border-l-4 border-amber-300 p-4 rounded-r-lg shadow-sm">
                                  <p className="text-brand-ink/85 font-medium">{block.text}</p>
                                </div>
                              );
                            }
                            return <p key={blockIndex}>{block.text}</p>;
                          }
                        if (block.type === "list") {
                          const ListTag = block.ordered ? "ol" : "ul";
                          return (
                            <ListTag
                              key={blockIndex}
                              className={`space-y-3 ${block.ordered
                                ? "list-decimal pl-6"
                                : "list-disc pl-6"
                                }`}
                            >
                              {block.items.map((item, itemIndex) => (
                                <li 
                                  key={itemIndex} 
                                  className="pl-2 leading-relaxed"
                                >
                                  {item}
                                </li>
                              ))}
                            </ListTag>
                          );
                        }
                        if (block.type === "table") {
                          return (
                            <div
                              key={blockIndex}
                              className="overflow-x-auto rounded-[20px] border border-brand-pink/40 bg-white/90"
                            >
                              <table className="w-full text-left text-sm">
                                <thead className="bg-brand-pink/20 text-brand-ink">
                                  <tr>
                                    {block.headers.map((header) => (
                                      <th
                                        key={header}
                                        className="px-4 py-3 font-semibold"
                                      >
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-brand-pink/30">
                                  {block.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                      {row.map((cell, cellIndex) => (
                                        <td
                                          key={`${rowIndex}-${cellIndex}`}
                                          className="px-4 py-3"
                                        >
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          );
                        }
                        if (block.type === "quiz") {
                          return <TaxQuiz key={blockIndex} />;
                        }
                        return null;
                      })}
                    </div>
                  </section>
                ) : (
                  <section 
                    key={`${section.heading}-${index}`} 
                    className={`space-y-6 ${isSpecialSection ? `rounded-2xl p-6 sm:p-8 border-2 ${bgColor} shadow-md` : ''}`}
                  >
                    <h2 className={`text-2xl sm:text-3xl font-bold pb-3 text-brand-ink inline-block ${isSpecialSection ? '' : 'border-b-2 border-brand-pink/30'}`}>
                      {section.heading}
                    </h2>
                    <div className="space-y-4 text-sm sm:text-base text-brand-ink/75">
                      {section.blocks.map((block, blockIndex) => {
                        if (block.type === "paragraph") {
                          // 特殊处理：如果是第一个段落且内容较长，添加特殊样式
                          if (index === 0 && blockIndex === 0) {
                            return (
                              <p key={blockIndex} className="text-lg text-brand-ink/80 leading-relaxed bg-amber-50 p-6 rounded-2xl border border-amber-200">
                                <strong className="text-amber-900">{block.text}</strong>
                              </p>
                            );
                          }
                          return <p key={blockIndex}>{block.text}</p>;
                        }
                        if (block.type === "list") {
                          const ListTag = block.ordered ? "ol" : "ul";
                          return (
                            <ListTag
                              key={blockIndex}
                              className={`space-y-3 ${block.ordered
                                ? "list-decimal pl-6"
                                : "list-disc pl-6"
                                } ${isSpecialSection ? 'text-brand-ink/85' : 'text-brand-ink/75'}`}
                            >
                              {block.items.map((item, itemIndex) => (
                                <li 
                                  key={itemIndex} 
                                  className={`pl-2 ${isSpecialSection ? 'leading-relaxed' : ''}`}
                                >
                                  {item}
                                </li>
                              ))}
                            </ListTag>
                          );
                        }
                        if (block.type === "table") {
                          return (
                            <div
                              key={blockIndex}
                              className="overflow-x-auto rounded-[20px] border border-brand-pink/40 bg-white/90"
                            >
                              <table className="w-full text-left text-sm">
                                <thead className="bg-brand-pink/20 text-brand-ink">
                                  <tr>
                                    {block.headers.map((header) => (
                                      <th
                                        key={header}
                                        className="px-4 py-3 font-semibold"
                                      >
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-brand-pink/30">
                                  {block.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                      {row.map((cell, cellIndex) => (
                                        <td
                                          key={`${rowIndex}-${cellIndex}`}
                                          className="px-4 py-3"
                                        >
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          );
                        }
                        if (block.type === "quiz") {
                          return <TaxQuiz key={blockIndex} />;
                        }
                        return null;
                      })}
                    </div>
                  </section>
                );
              })}

              {/* 免责声明 */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-3">免责声明</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  本文为报税修正指南的经验整理，不构成税务或法律建议。若你的情况涉及复杂收入或身份切换，请先做判断或咨询专业人士。
                </p>
              </div>

            </article>

            {/* FAQ 部分 */}
            <div className="mt-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink mb-8">常见问题</h2>
              <div className="space-y-4">
                {guide.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-2xl border border-brand-pink/30 bg-white/90 p-5 shadow-sm open:bg-brand-pink/5 transition-all"
                  >
                    <summary className="cursor-pointer text-base font-bold text-brand-ink list-none flex justify-between items-center">
                      {faq.question}
                      <span className="text-brand-pinkdeep group-open:rotate-45 transition-transform font-mono text-xl">+</span>
                    </summary>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-brand-ink/70 border-t border-brand-pink/10 pt-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link 
                href={guide.cta.href} 
                className="inline-flex items-center gap-2 bg-brand-pinkdeep text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-pinkhover transition-colors shadow-xl hover:scale-105 transform"
              >
                {guide.cta.label}
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
