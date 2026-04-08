module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/guides.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGuideBySlug",
    ()=>getGuideBySlug,
    "guides",
    ()=>guides
]);
const guides = [
    {
        slug: "f1-tax-residency",
        title: "F1 留学生报税身份判定：你是 Resident 还是 Non-Resident？",
        description: "面向在美 F1 / OPT 留学生的判断说明书：解释 SPT 测试与留美满五年规则，给出身份切换判断清单。",
        audience: "刚开始自己报税、担心选错 1040-NR/1040 路径的 F1 / OPT 学生。",
        sections: [
            {
                heading: "先给结论：身份路径决定表格与工具",
                blocks: [
                    {
                        type: "paragraph",
                        text: "对 F1 / OPT 留学生来说，报税最容易卡住的不是软件怎么填，而是你到底走哪条身份路径。只要路径错了，1040-NR 和 8843 等表格就会被错配，甚至把自己当 Resident 报。"
                    },
                    {
                        type: "paragraph",
                        text: "Sprintax / TurboTax 只是工具，工具不会帮你判断身份。你真正需要的是一个清晰的身份判定流程：先决定路径，再决定要用哪种软件与清单。"
                    }
                ]
            },
            {
                heading: "SPT 测试：Resident 与 Non-Resident 的核心判断框架",
                blocks: [
                    {
                        type: "paragraph",
                        text: "SPT 测试（Substantial Presence Test）决定你是否满足居民身份条件。它不是一句“待满五年”那么简单，而是按日历年与天数加权计算。理解 SPT 测试的意义在于：你可以知道自己什么时候可能发生报税身份切换，而不是盲目跟随别人路径。"
                    },
                    {
                        type: "paragraph",
                        text: "F1 身份通常有“exempt”年限，也就是在某些年份里不计入 SPT。多数情况下，F1 前 5 个日历年更像 Non-Resident，但如果你跨了年、出入境频繁，最好仍做一次明确判断。"
                    }
                ]
            },
            {
                heading: "SPT 测试常见误解（把概念翻译成行动）",
                blocks: [
                    {
                        type: "paragraph",
                        text: "很多同学把 SPT 测试理解成“待够五年就自动变 Resident”，这会导致报税身份切换判断失真。实际情况是：你需要确认入境年份、报税年度，以及当年是否处在 exempt 年限内。"
                    },
                    {
                        type: "list",
                        items: [
                            "误解 1：只算连续 12 个月。实际是按日历年。",
                            "误解 2：只看同学的路径。实际要看自己的入境年份。",
                            "误解 3：只看收入类型。身份判断优先于材料类型。"
                        ]
                    }
                ]
            },
            {
                heading: "3 步判断流程（不需要算复杂公式）",
                blocks: [
                    {
                        type: "list",
                        ordered: true,
                        items: [
                            "确认入境年份与当年报税年度，算出你是第几个 F1 日历年。",
                            "把 1040-NR 与 1040 的路径分别列出来，看哪条更匹配。",
                            "再选择 Sprintax / TurboTax 等工具，不要先选工具再补身份。"
                        ]
                    }
                ]
            },
            {
                heading: "留美满五年规则：最容易被误解的一句话",
                blocks: [
                    {
                        type: "paragraph",
                        text: "常见误解是“满五年就一定是 Resident”。正确理解是：F1 的前五个“日历年”通常不计入 SPT。比如，如果 2021 年入境，则 2021–2025 为 Non-Resident，2026 年才可能成为 Resident。这里的关键是“日历年”，只要某年在美国停留过一天，这一年就算 1 年。"
                    },
                    {
                        type: "paragraph",
                        text: "因此，报税身份切换不是突然发生的，而是一个可以提前预判的过程。你需要知道自己的入境年份、当年报税年度，以及是否已经到第 6 个日历年。"
                    }
                ]
            },
            {
                heading: "身份切换的高风险信号",
                level: 3,
                blocks: [
                    {
                        type: "list",
                        items: [
                            "你已经是 F1 第 6 个日历年，并且有稳定的工资收入。",
                            "你在报税软件里看到“是否为居民”的提问并犹豫不决。",
                            "你收到过 1042-S 或奖学金收入，但不知道是否要合并申报。",
                            "你已经开始用 TurboTax 填表，却发现找不到 1040-NR 路径。"
                        ]
                    }
                ]
            },
            {
                heading: "1040 vs 1040-NR 的关键区别",
                blocks: [
                    {
                        type: "table",
                        headers: [
                            "你更像",
                            "常见表格",
                            "典型提醒"
                        ],
                        rows: [
                            [
                                "Non-Resident",
                                "1040-NR + 8843",
                                "先确认身份再选工具，避免选错路径"
                            ],
                            [
                                "Resident",
                                "1040 + 附表",
                                "注意州税与收入来源是否完整"
                            ],
                            [
                                "不确定",
                                "先做判断再填表",
                                "宁愿慢一步，也别选错路径"
                            ]
                        ]
                    }
                ]
            },
            {
                heading: "Standard Deduction 与 1040X 的关系",
                blocks: [
                    {
                        type: "paragraph",
                        text: "很多留学生误把 Standard Deduction 当成“必然能用”的减税项，但在非居民路径中通常不可用。若因为误用 Standard Deduction 导致报税错误，后续可能需要 1040X 修正表来调整。先判定身份再选扣除项，可以显著降低修正成本。"
                    }
                ]
            },
            {
                heading: "快速判断清单（适合先自检）",
                level: 3,
                blocks: [
                    {
                        type: "list",
                        items: [
                            "我是否仍在 F1 前 5 个日历年范围内？",
                            "我是否必须提交 8843（即便没有收入）？",
                            "我是否只有 W-2，还是还有 1099/投资收入？",
                            "我是否需要同时处理州税？",
                            "我是否确定 TurboTax / Sprintax 的路径与我的身份一致？",
                            "我是否已经准备好解释身份切换的依据？",
                            "我是否有过去年份报税记录可以对照？"
                        ]
                    }
                ]
            },
            {
                heading: "免责声明（必须先看清楚）",
                blocks: [
                    {
                        type: "paragraph",
                        text: "本文为判断指导与经验整理，非 CPA/EA 或税务执业建议。F1 / OPT 报税身份判定涉及个人停留记录与材料情况，若不确定，请先使用工具做判断或寻求专业帮助。"
                    }
                ]
            }
        ],
        faqs: [
            {
                question: "SPT 测试一定会让我变成 Resident 吗？",
                answer: "不一定。F1 的前五个日历年通常属于 exempt 年限，但仍需结合当年停留记录判断。"
            },
            {
                question: "我只拿 W-2，也需要考虑 1040-NR 吗？",
                answer: "需要。表格路径取决于身份，而不是收入类型。"
            },
            {
                question: "TurboTax 可以处理 1040-NR 吗？",
                answer: "TurboTax 更面向居民路径，非居民路径通常需要 Sprintax 或其他方式。"
            },
            {
                question: "如果我判断错了，会有什么后果？",
                answer: "可能需要修正申报、补材料或重新填写，增加时间成本。"
            },
            {
                question: "我已经是第 6 个日历年就一定是 Resident 吗？",
                answer: "不一定，还需要结合 SPT 测试与当年停留天数综合判断。"
            }
        ],
        cta: {
            label: "3 秒自动判定我的身份 → /tools/opt-tax",
            href: "/tools/opt-tax"
        }
    },
    {
        slug: "turbotax-pitfalls",
        title: "留学生避坑：为什么不建议直接用 TurboTax？",
        description: "TurboTax 默认居民路径对 F1 / OPT 存在错用风险。本指南拆解 Sprintax / TurboTax 的本质区别与误用后果。",
        audience: "准备使用 TurboTax 的 F1 / OPT 学生，或担心报税软件选错路径的人。",
        sections: [
            {
                heading: "结论先行：TurboTax 默认假设你是 Resident",
                blocks: [
                    {
                        type: "paragraph",
                        text: "对 F1 / OPT 留学生来说，TurboTax 报 NR 风险来自“默认路径”。它的主流程假设你是 Resident，如果你实际是 Non-Resident，却顺着流程点下去，就会把自己报成居民。"
                    },
                    {
                        type: "paragraph",
                        text: "这不是软件“对或错”的问题，而是路径选择问题。Sprintax / TurboTax 的差异在于：是否提供 1040-NR 与 8843 的非居民路径。"
                    },
                    {
                        type: "paragraph",
                        text: "F1 错用 TurboTax 后果通常不是“立刻出事”，而是让你在修正时付出更多时间成本：要补材料、要解释路径、要重新核对表格。"
                    }
                ]
            },
            {
                heading: "F1 错用 TurboTax 的常见后果（不是恐吓）",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "身份路径错误，表格类型完全错配。",
                            "退税金额可能被计算错误，后续修正成本更高。",
                            "需要补交或修正申报，增加时间与精力消耗。",
                            "如果被要求解释，材料准备会更复杂。"
                        ]
                    }
                ]
            },
            {
                heading: "快速判断你是否该停一下",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "你仍在 F1 前 5 个日历年内。",
                            "你不确定 SPT 测试是否满足。",
                            "你没准备好 8843，但软件已经让你提交。",
                            "你看到 1040-NR 字样却不知道该选哪个。",
                            "你已经选了 TurboTax 的默认流程但心里没底。"
                        ]
                    }
                ]
            },
            {
                heading: "Sprintax vs TurboTax：本质差异",
                blocks: [
                    {
                        type: "table",
                        headers: [
                            "维度",
                            "Sprintax",
                            "TurboTax"
                        ],
                        rows: [
                            [
                                "主要路径",
                                "偏非居民（1040-NR）",
                                "偏居民（1040）"
                            ],
                            [
                                "典型用户",
                                "F1 / OPT 前 5 年",
                                "在美居民身份"
                            ],
                            [
                                "风险点",
                                "工具适配但仍需判断",
                                "默认居民易误选"
                            ]
                        ]
                    }
                ]
            },
            {
                heading: "什么时候不建议直接用 TurboTax",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "你仍在 F1 前 5 个日历年范围内。",
                            "你收到过 1042-S 或奖学金相关收入。",
                            "你不清楚报税身份切换与 SPT 测试。",
                            "你对 1040-NR 与 1040 的区别没有把握。",
                            "你还没准备好 8843 等材料。"
                        ]
                    }
                ]
            },
            {
                heading: "更安全的动作顺序",
                blocks: [
                    {
                        type: "paragraph",
                        text: "正确顺序是：先判断身份，再决定工具，再准备材料。用错工具往往不是因为你不懂税法，而是因为你没先确认身份路径。"
                    },
                    {
                        type: "paragraph",
                        text: "如果你仍不确定，建议先做 3 分钟判断或找确认服务，避免在 TurboTax 上反复返工。"
                    },
                    {
                        type: "list",
                        ordered: true,
                        items: [
                            "先用判断清单锁定身份路径。",
                            "再看你是否需要 1040-NR 与 8843。",
                            "最后再选 Sprintax / TurboTax 等工具。"
                        ]
                    }
                ]
            },
            {
                heading: "如果已经用了 TurboTax，该怎么办",
                level: 3,
                blocks: [
                    {
                        type: "paragraph",
                        text: "先不要慌，先确认你当年的身份路径是否匹配。若发现路径错误，通常需要准备修正申报（例如 1040X 修正表），并补齐材料。"
                    },
                    {
                        type: "list",
                        items: [
                            "确认当年是否应为 Non-Resident 路径。",
                            "核对是否遗漏 1040-NR 或 8843。",
                            "整理原申报与新材料，再决定是否修正。"
                        ]
                    }
                ]
            },
            {
                heading: "免责声明",
                blocks: [
                    {
                        type: "paragraph",
                        text: "本文是避坑说明书，不构成税务或法律建议。TurboTax 与 Sprintax 仅作为工具示例，不对任何平台做背书。"
                    }
                ]
            }
        ],
        faqs: [
            {
                question: "TurboTax 能不能报 1040-NR？",
                answer: "通常不走 1040-NR 路径。若你的身份是非居民，建议先确认路径。"
            },
            {
                question: "我去年用 TurboTax 报了，会不会有问题？",
                answer: "先确认身份与表格是否匹配，再决定是否需要修正申报。"
            },
            {
                question: "Sprintax 一定安全吗？",
                answer: "工具是否适配取决于身份路径，仍需先判断身份。"
            },
            {
                question: "F1/OPT 是否一定是 Non-Resident？",
                answer: "前 5 个日历年通常是，但仍需结合 SPT 测试。"
            },
            {
                question: "我没有 1042-S 就可以用 TurboTax 吗？",
                answer: "不一定。身份路径才是关键，不是材料类型。"
            }
        ],
        cta: {
            label: "领取 F1+OPT 报税避坑清单 →",
            href: "/tools/opt-tax"
        }
    },
    {
        slug: "1040nr-guide",
        title: "1040-NR 填写全攻略：留学生专属税表拆解",
        description: "1040 vs 1040-NR 区别、Standard Deduction 限制、Treaty 位置与 8843 必填要点，一站式拆解留学生报税路径。",
        audience: "已经确定需要走非居民路径、准备填写 1040-NR 的 F1 / OPT 留学生。",
        sections: [
            {
                heading: "先明确：1040 vs 1040-NR 是两条路径",
                blocks: [
                    {
                        type: "paragraph",
                        text: "1040-NR 是非居民路径的核心表格，适用于许多 F1 / OPT 留学生。它与 1040 不是同一张表，字段、附表、扣除方式都不同。别把 1040-NR 当成 1040 的“简化版”。"
                    },
                    {
                        type: "paragraph",
                        text: "如果你误把自己当 Resident 报了 1040，后续可能需要修正申报。正确顺序是：先判断身份，再选择表格与工具。"
                    },
                    {
                        type: "paragraph",
                        text: "Sprintax / TurboTax 只是执行工具，不能替代身份判断。你在表格层面走错路径，就算软件再顺手也会错。"
                    }
                ]
            },
            {
                heading: "1040 vs 1040-NR 关键差异表",
                blocks: [
                    {
                        type: "table",
                        headers: [
                            "项目",
                            "1040",
                            "1040-NR"
                        ],
                        rows: [
                            [
                                "适用身份",
                                "Resident",
                                "Non-Resident"
                            ],
                            [
                                "常见搭配",
                                "附表 + 标准扣除",
                                "可能需要 8843"
                            ],
                            [
                                "常见工具",
                                "TurboTax",
                                "Sprintax 或手动"
                            ]
                        ]
                    }
                ]
            },
            {
                heading: "Standard Deduction 为什么通常不适用",
                blocks: [
                    {
                        type: "paragraph",
                        text: "很多留学生听说 Standard Deduction 可以减少税负，但对 1040-NR 来说通常不适用。除非有特定条约或例外，否则非居民路径无法使用标准扣除。请不要因为“看到别人用了”就直接套用。"
                    },
                    {
                        type: "paragraph",
                        text: "如果你在非居民路径误用 Standard Deduction，可能导致税额计算错误，后续需要修正申报。先确认身份路径再谈扣除项，是最省成本的做法。"
                    }
                ]
            },
            {
                heading: "Treaty 在表格中的位置",
                blocks: [
                    {
                        type: "paragraph",
                        text: "如果你享受税收协定（Treaty），通常需要在 1040-NR 的相关栏目或附表中体现，且可能需要 1042-S 作为证明。Treaty 是减免的一部分，但它不是自动生效，需要你按材料填写。"
                    }
                ]
            },
            {
                heading: "8843 的强制性与常见误区",
                blocks: [
                    {
                        type: "paragraph",
                        text: "8843 对许多 F1 / OPT 留学生是必须提交的表格，即使你没有收入。它是身份记录的重要部分，不提交可能导致身份记录缺失。"
                    },
                    {
                        type: "list",
                        items: [
                            "有收入：通常与 1040-NR 一起提交。",
                            "无收入：也可能需要单独提交 8843。",
                            "忘记提交：会增加后续解释成本。"
                        ]
                    }
                ]
            },
            {
                heading: "填写前必须做的两件事",
                blocks: [
                    {
                        type: "list",
                        ordered: true,
                        items: [
                            "确认你当年是否应走 1040-NR 路径（不要用猜）。",
                            "把所有材料按收入来源分类：W-2、1099、1042-S。"
                        ]
                    }
                ]
            },
            {
                heading: "填写步骤（简化版）",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "先确认身份路径：确保你确实需要 1040-NR。",
                            "整理材料：W-2、1099、1042-S、护照、I-20。",
                            "选择工具：若为非居民路径，Sprintax / TurboTax 的差异要先理解。",
                            "填写并核对：重点关注收入类型与扣除项。",
                            "提交前复查：尤其是 8843 是否遗漏。"
                        ]
                    }
                ]
            },
            {
                heading: "常见填表坑位",
                level: 3,
                blocks: [
                    {
                        type: "list",
                        items: [
                            "把 1040-NR 当成 1040 填，导致字段错位。",
                            "漏填 8843，导致身份记录缺失。",
                            "Treaty 条款未按要求填写或未附材料。",
                            "州税路径与联邦路径混用。"
                        ]
                    }
                ]
            },
            {
                heading: "免责声明",
                blocks: [
                    {
                        type: "paragraph",
                        text: "本文为 1040-NR 填写指南的经验整理，不构成税务建议。若你的情况涉及复杂收入或身份切换，请先做判断或咨询专业人士。"
                    }
                ]
            }
        ],
        faqs: [
            {
                question: "1040-NR 适合所有 F1 / OPT 吗？",
                answer: "不一定。需要根据 SPT 测试与身份判断决定。"
            },
            {
                question: "Standard Deduction 我能用吗？",
                answer: "非居民路径通常不适用，除非有特定条约或例外。"
            },
            {
                question: "TurboTax 可以填 1040-NR 吗？",
                answer: "TurboTax 更偏居民路径，非居民路径通常需要 Sprintax 或手动方式。"
            },
            {
                question: "8843 不交会怎样？",
                answer: "可能导致身份记录缺失，后续解释成本更高。"
            },
            {
                question: "Treaty 一定能减税吗？",
                answer: "取决于你是否符合条约条件，并正确在表格中填写。"
            }
        ],
        cta: {
            label: "查看报税材料准备清单 →",
            href: "/tools/opt-tax"
        }
    },
    {
        slug: "1040x-fix",
        title: "报税报错了怎么办？1040-X 修正表救命指南",
        description: "从 IRS 通知前后处理差异、如何撤销 Resident 申报、补缴与罚款逻辑，到邮寄与处理周期的完整说明书。",
        audience: "已经报错或怀疑报错的 F1 / OPT 留学生，希望了解 1040X 修正表流程。",
        sections: [
            {
                heading: "先判断错误类型：表格错还是身份错",
                blocks: [
                    {
                        type: "paragraph",
                        text: "很多报税错误来自身份路径判断错误。比如该走 1040-NR 却填了 1040，或漏掉 8843。确认错误类型能决定你是否需要 1040X 修正表。"
                    },
                    {
                        type: "paragraph",
                        text: "如果你是 F1 / OPT，且当年应为 Non-Resident，却用 TurboTax 走了居民路径，通常需要考虑修正申报。"
                    },
                    {
                        type: "paragraph",
                        text: "Sprintax / TurboTax 的选择不在于品牌，而在于路径是否匹配。路径错了，修正时的成本会明显上升。"
                    }
                ]
            },
            {
                heading: "什么时候一定要考虑 1040X 修正表",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "你发现身份路径判断与实际不符。",
                            "你把 1040-NR 填成了 1040 或相反。",
                            "你遗漏了 8843 或 1042-S。",
                            "你收到 IRS 通知要求解释或补材料。"
                        ]
                    }
                ]
            },
            {
                heading: "IRS 通知前 vs 通知后",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "通知前：你可以主动提交 1040X 修正表并补齐表格。",
                            "通知后：需要根据 IRS 通知内容回应，准备更多佐证材料。",
                            "通知后处理周期更长，心理负担也更大。"
                        ]
                    }
                ]
            },
            {
                heading: "如何撤销 Resident 申报",
                blocks: [
                    {
                        type: "paragraph",
                        text: "撤销居民申报通常意味着重新按非居民路径提交表格。你需要回到身份判断步骤，重新确认是否应走 1040-NR + 8843，并据此补充或替换材料。"
                    }
                ]
            },
            {
                heading: "补缴情形与 IRS 罚款处理",
                blocks: [
                    {
                        type: "paragraph",
                        text: "如果修正后产生补缴，IRS 可能会要求补税或产生利息。IRS 罚款处理通常与申报时间和错误性质有关，不要忽视通知与截止日期。"
                    },
                    {
                        type: "paragraph",
                        text: "提前准备材料、主动修正通常比被动回应更稳妥。即使没有罚款，也要保留所有寄送与沟通记录。"
                    }
                ]
            },
            {
                heading: "邮寄与处理周期（参考）",
                blocks: [
                    {
                        type: "table",
                        headers: [
                            "步骤",
                            "动作",
                            "常见周期"
                        ],
                        rows: [
                            [
                                "准备",
                                "整理原始申报 + 新表格",
                                "1-2 周"
                            ],
                            [
                                "邮寄",
                                "按 IRS 指定地址寄出",
                                "数天"
                            ],
                            [
                                "处理",
                                "IRS 审核修正",
                                "8-16 周或更久"
                            ]
                        ]
                    }
                ]
            },
            {
                heading: "修正前的材料清单",
                level: 3,
                blocks: [
                    {
                        type: "list",
                        items: [
                            "原申报表格副本（1040 或 1040-NR）。",
                            "所有收入材料：W-2、1099、1042-S。",
                            "身份文件：护照、I-20、入境记录。",
                            "补充说明与证明材料（如需）。"
                        ]
                    }
                ]
            },
            {
                heading: "免责声明",
                blocks: [
                    {
                        type: "paragraph",
                        text: "本指南为 1040X 修正表流程说明，不构成税务或法律建议。若你情况复杂或涉及重大金额，建议寻求专业帮助。"
                    }
                ]
            }
        ],
        faqs: [
            {
                question: "报错一定需要 1040X 吗？",
                answer: "取决于错误类型。若身份路径错或表格错配，通常需要修正申报。"
            },
            {
                question: "修正申报会影响签证或身份吗？",
                answer: "本指南不提供法律建议，但及时修正通常比拖延更稳妥。"
            },
            {
                question: "我可以用 TurboTax 修正吗？",
                answer: "若你原本是非居民路径，TurboTax 可能不适配，需先判断身份路径。"
            },
            {
                question: "1040X 处理多久？",
                answer: "常见为数周到数月不等，取决于 IRS 处理进度。"
            },
            {
                question: "如果需要补税怎么办？",
                answer: "按 IRS 指示补缴并保留记录，避免遗漏通知。"
            }
        ],
        cta: {
            label: "获取 IRS 沟通模板 →",
            href: "/tools/opt-tax"
        }
    },
    {
        slug: "opt-1040-fix",
        title: "你真的报对了吗？OPT 报税发现填成了 1040 (Resident) ？4.15 前的最后补救指南",
        description: "我敢说，很多opt都弄不清楚1040 和1040-NR的区别，用错了报税软件，但这个后果很严重 —— 因为你可能错误领取了只有 Resident 才能享受的 Standard Deduction，这可能会影响到未来的移民申请。",
        audience: "OPT 留学生，误将 1040 (Resident) 填错为 1040-NR (Non-resident) 的人群。",
        sections: [
            {
                heading: "OPT 期间用错 1040/1040-NR 是留学生最常见、后果也最严重的报税错误之一",
                blocks: [
                    {
                        type: "paragraph",
                        text: "对于初次接触美国税务的同学来说，根本没有NRA和NR的概念，完全不知道这在税务上需要走两个完全不同的途径。收到 W-2 之后，很自然的就按照正常（NR的）的报税途径，使用普遍推广的报税软件进行报税了。而像 TurboTax 这样的主流商业报税软件，也根本不会提醒你，他们并不支持 Non-resident (1040-NR)"
                    }
                ]
            },
            {
                heading: "做个简单的判断吧",
                level: 2,
                blocks: [
                    {
                        type: "paragraph",
                        text: ""
                    }
                ]
            },
            {
                heading: "我有 W-2 = 我能填 1040 吗？",
                blocks: [
                    {
                        type: "paragraph",
                        text: "错误逻辑：  收到 W-2 ➡️ 打开 TurboTax ➡️ 填 1040 ➡️ 拿 Standard Deduction ➡️ [风险：身份违规，H1B 埋雷]"
                    },
                    {
                        type: "paragraph",
                        text: "正确逻辑：  收到 W-2 ➡️ 检查 F-1 身份是否满 5 年 ➡️ 依旧是 Non-resident ➡️ 填 1040-NR  ➡️ [安全：合法合规，保护移民身份]"
                    }
                ]
            },
            {
                heading: "为什么这个判断对 OPT 极其重要？",
                blocks: [
                    {
                        type: "paragraph",
                        text: ""
                    }
                ]
            },
            {
                heading: "Standard Deduction (标准扣除额)",
                level: 3,
                blocks: [
                    {
                        type: "paragraph",
                        text: "1040 默认给每个居民（Resident ）约 $15,000  的免税额度（2025/2026 财年数据）。"
                    },
                    {
                        type: "paragraph",
                        text: "但问题是OPT多数情况下并不是Resident。而Non-resident 绝大多数情况下没有标准扣除额。"
                    },
                    {
                        type: "paragraph",
                        text: "如果你拿 W-2 填了 1040，IRS 会以为你多赚了 $15,000 的免税额，多退你几千刀。但这钱不是你该拿的，IRS 的审计系统（尤其是针对 F-1 转换 H1B 时）很容易查出这种身份不匹配。"
                    }
                ]
            },
            {
                heading: "到底怎么解读你收到的 W-2？",
                level: 3,
                blocks: [
                    {
                        type: "paragraph",
                        text: "W-2 表格代表的是\"工资收入 (Wages)\"。"
                    },
                    {
                        type: "paragraph",
                        text: "只要你在美国公司做正式员工（Employee），公司通过薪酬系统（Payroll）给你发工资，他们法律上必须给你发 W-2。"
                    },
                    {
                        type: "paragraph",
                        text: "但W-2 并不代表你的身份是 Resident 还是 Non-Resident，它只代表你的收入性质。"
                    }
                ]
            },
            {
                heading: "NRA 也可能会收到 1042-S",
                level: 3,
                blocks: [
                    {
                        type: "paragraph",
                        text: "这通常发生在以下两种情况："
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "奖学金/助学金 (Scholarships/Fellowships)：如果你在学校拿了免除学费以外的现金补助。",
                            "提前申请了税收协定 (Treaty)：如果你在入职时给公司填了 Form 8233，要求公司直接不扣那 $5,000 的税，那么公司会将这 $5,000 呈现在 1042-S 表格上，而剩下的工资放在 W-2 上。"
                        ]
                    },
                    {
                        type: "paragraph",
                        text: "BUT：大多数 OPT 公司的 HR 并不专业，他们通常不会帮你处理 8233。所以，他们会把你的所有收入都写在 W-2 上。"
                    }
                ]
            },
            {
                heading: "OPT的正确报税姿势",
                level: 3,
                blocks: [
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "雇主角度：你是员工，我发 W-2。",
                            "你的角度：我是 NRA，我拿着这张 W-2，在填报 1040-NR 表格时，手动减去那 $5,000 的 Treaty 免税额。",
                            "结果：你通过报税（Tax Return）把针对那 $5,000 多缴的税款要回来。"
                        ]
                    }
                ]
            },
            {
                heading: "最后",
                level: 3,
                blocks: [
                    {
                        type: "paragraph",
                        text: "W-2：证明你赚了钱，公司帮你预扣了税（Federal Income Tax Withheld）。"
                    },
                    {
                        type: "paragraph",
                        text: "1040-NR：这是你作为 NRA 的身份证明。你告诉 IRS：\"虽然我拿的是 W-2，但我适用 NRA 规则和中美协定。\""
                    }
                ]
            },
            {
                heading: "弄错了咋办 —— 如果你果然不出所料的报错了，如何拯救你的tax return？",
                blocks: [
                    {
                        type: "paragraph",
                        text: "如果你作为 F1/OPT 身份（在美未满 5 年）错误提交了 1040，就需要通过 Form 1040-X（修改税表）进行修正。"
                    }
                ]
            },
            {
                heading: "step 1 准备新表",
                level: 3,
                blocks: [
                    {
                        type: "paragraph",
                        text: "重新填写一份完整的、正确的 Form 1040-NR。"
                    }
                ]
            },
            {
                heading: "step 2 关键标注",
                level: 3,
                blocks: [
                    {
                        type: "paragraph",
                        text: "在新的 1040-NR 每一页顶部用红笔或清晰字体写上 \"Amended\"。"
                    }
                ]
            },
            {
                heading: "step 3 填写 1040-X",
                level: 3,
                blocks: [
                    {
                        type: "paragraph",
                        text: "在 Part III (Explanation of Changes) 明确说明原因，例如：\"I am amending because I incorrectly filed Form 1040 as a Resident Alien when I should have filed Form 1040-NR as a Nonresident Alien.\""
                    },
                    {
                        type: "paragraph",
                        text: "附上 Form 8843（F1 必填项）。"
                    }
                ]
            },
            {
                heading: "step 4 邮寄办理",
                level: 3,
                blocks: [
                    {
                        type: "paragraph",
                        text: "1040 转 1040-NR 的修正通常不支持电子申报，必须打印并邮寄至 IRS 官网上指定的 1040-X 地址。"
                    }
                ]
            },
            {
                heading: "step 5 时间策略",
                level: 3,
                blocks: [
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "如果已退税：建议等收到原始退税后再寄出修正包，避免系统混乱。",
                            "如果需补税：应在 4.15 前通过 IRS Direct Pay 先行缴纳欠款及利息，以减少罚金。"
                        ]
                    }
                ]
            }
        ],
        faqs: [
            {
                question: "修正申报会影响我的签证吗？",
                answer: "及时修正通常比拖延更稳妥。主动修正表明你愿意遵守税法，这对签证状态通常是有利的。"
            },
            {
                question: "误领的 Standard Deduction 怎么办？",
                answer: "在 1040-X 修正表中，你需要将误领的 Standard Deduction 从免税额度中移除，可能需要补缴相应的税款。"
            },
            {
                question: "4.15 截止日前需要完成修正吗？",
                answer: "是的，为了避免可能的罚款和利息，建议在 4.15 截止日前完成修正申报。"
            },
            {
                question: "我需要专业帮助吗？",
                answer: "如果你的情况复杂，或对修正流程不确定，建议寻求专业税务顾问的帮助。"
            }
        ],
        cta: {
            label: "查看 1040-NR 填写全攻略 →",
            href: "/guides/1040nr-guide"
        }
    }
];
const getGuideBySlug = (slug)=>guides.find((guide)=>guide.slug === slug);
}),
"[project]/src/components/Breadcrumbs.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumbs",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
function Breadcrumbs({ items }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index)=>({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.label,
                "item": item.href ? `https://www.mapleworld.online${item.href}` : undefined
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Breadcrumb",
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Breadcrumbs.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "flex flex-wrap items-center gap-2 text-xs sm:text-sm text-brand-ink/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:text-brand-pinkdeep transition-colors",
                            children: "首页"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Breadcrumbs.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Breadcrumbs.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "select-none",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Breadcrumbs.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "hover:text-brand-pinkdeep transition-colors",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Breadcrumbs.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand-ink/80 font-medium",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Breadcrumbs.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Breadcrumbs.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/Breadcrumbs.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Breadcrumbs.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Breadcrumbs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/TaxQuiz.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/TaxQuiz.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/TaxQuiz.tsx <module evaluation>", "default");
}),
"[project]/src/components/TaxQuiz.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/TaxQuiz.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/TaxQuiz.tsx", "default");
}),
"[project]/src/components/TaxQuiz.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxQuiz$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/TaxQuiz.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxQuiz$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/TaxQuiz.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxQuiz$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/(guides)/guides/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GuideDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$guides$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/guides.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumbs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxQuiz$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaxQuiz.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$guides$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guides"].map((guide)=>({
            slug: guide.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const guide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$guides$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGuideBySlug"])(slug);
    if (!guide) {
        return {};
    }
    return {
        title: guide.title,
        description: guide.description,
        alternates: {
            canonical: `https://www.mapleworld.online/guides/${slug}`
        }
    };
}
// 极简判断流小组件
function W2DecisionFlow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl p-6 sm:p-8 border-2 border-brand-pink/30 shadow-lg my-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl sm:text-2xl font-bold text-brand-ink mb-6 text-center",
                children: "我有 W-2 = 我能填 1040 吗？"
            }, void 0, false, {
                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 rounded-xl p-5 border border-red-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg",
                                        children: "✗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-red-800",
                                        children: "错误逻辑"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded bg-red-200 text-red-800 flex items-center justify-center text-xs font-bold",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-900",
                                                children: "收到 W-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-red-400 text-center",
                                        children: "⬇️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded bg-red-200 text-red-800 flex items-center justify-center text-xs font-bold",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-900",
                                                children: "打开 TurboTax"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-red-400 text-center",
                                        children: "⬇️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded bg-red-200 text-red-800 flex items-center justify-center text-xs font-bold",
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-900",
                                                children: "填 1040"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-red-400 text-center",
                                        children: "⬇️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded bg-red-200 text-red-800 flex items-center justify-center text-xs font-bold",
                                                children: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-900",
                                                children: "拿 Standard Deduction"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-red-400 text-center",
                                        children: "⬇️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-600 text-white p-3 rounded-lg text-center font-bold",
                                        children: "⚠️ 风险：身份违规，H1B 埋雷"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-50 rounded-xl p-5 border border-green-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-green-800",
                                        children: "正确逻辑"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-900",
                                                children: "收到 W-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-green-400 text-center",
                                        children: "⬇️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-900",
                                                children: "检查 F-1 身份是否满 5 年"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-green-400 text-center",
                                        children: "⬇️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold",
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-900",
                                                children: "依旧是 Non-resident"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-green-400 text-center",
                                        children: "⬇️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold",
                                                children: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-900",
                                                children: "填 1040-NR"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-green-400 text-center",
                                        children: "⬇️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-green-600 text-white p-3 rounded-lg text-center font-bold",
                                        children: "✅ 安全：合法合规，保护移民身份"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/tools/opt-tax",
                    className: "inline-flex items-center gap-2 bg-brand-pinkdeep text-white px-6 py-3 rounded-full font-bold hover:bg-brand-pinkhover transition-colors shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "🎯"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        "不确定？3秒自测你的报税身份"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
async function GuideDetailPage({ params }) {
    const { slug } = await params;
    const guide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$guides$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGuideBySlug"])(slug);
    if (!guide) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "pb-16 text-brand-ink",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
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
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-4 py-8 sm:py-12 bg-gradient-to-b from-brand-pink/10 to-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "page-shell",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                                items: [
                                    {
                                        label: "报税攻略",
                                        href: "/guides"
                                    },
                                    {
                                        label: guide.title
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight drop-shadow-sm",
                                children: guide.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-lg text-brand-ink/80 leading-relaxed font-medium",
                                children: guide.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 inline-block bg-red-100/80 text-red-900 px-5 py-3 rounded-xl border border-red-200 font-bold shadow-sm",
                                children: "🚨 紧急提醒：4.15 截止前必须完成修正，避免罚款和签证风险！"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-4 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "page-shell",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "prose prose-pink max-w-none space-y-12",
                                children: [
                                    guide.sections.map((section, index)=>{
                                        const HeadingTag = section.level === 3 ? "h3" : "h2";
                                        // 特殊处理：如果是判断流部分，显示小组件
                                        if (section.heading === "我有 W-2 = 我能填 1040 吗？") {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(W2DecisionFlow, {}, index, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 26
                                            }, this);
                                        }
                                        // 特殊处理：为新添加的两个板块添加莫兰蒂色块样式
                                        const isSpecialSection = section.heading === "NRA 收到 W-2 是完全正常的" || section.heading === "核心补救方案：如何修正？";
                                        // 根据板块选择不同的莫兰蒂色块
                                        const bgColor = section.heading === "NRA 收到 W-2 是完全正常的" ? "bg-green-50 border-green-100" : "bg-blue-50 border-blue-100";
                                        // 为 h3 层级定义轮流使用的莫兰蒂色块
                                        const morandiColors = [
                                            {
                                                bg: '#94A98715',
                                                border: '#94A987',
                                                icon: '#94A987'
                                            },
                                            {
                                                bg: '#D9939315',
                                                border: '#D99393',
                                                icon: '#D99393'
                                            },
                                            {
                                                bg: '#D9C7B815',
                                                border: '#D9C7B8',
                                                icon: '#D9C7B8'
                                            },
                                            {
                                                bg: '#A9B8C015',
                                                border: '#A9B8C0',
                                                icon: '#A9B8C0'
                                            },
                                            {
                                                bg: '#B89F8715',
                                                border: '#B89F87',
                                                icon: '#B89F87'
                                            }
                                        ];
                                        // 计算当前 h3 的索引（只计算 h3 层级）
                                        const h3Index = guide.sections.slice(0, index).filter((s)=>s.level === 3).length;
                                        const morandiColor = section.level === 3 ? morandiColors[h3Index % 5] : null;
                                        return section.level === 3 && morandiColor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "rounded-2xl border-l-[6px] p-6 sm:p-8 shadow-sm shadow-brand-pink/10 transition-transform hover:translate-x-1",
                                            style: {
                                                backgroundColor: morandiColor.bg,
                                                borderColor: morandiColor.border
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-brand-ink flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: morandiColor.icon
                                                            },
                                                            className: "font-bold",
                                                            children: "▸"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        section.heading
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 text-sm sm:text-base text-brand-ink/75",
                                                    children: section.blocks.map((block, blockIndex)=>{
                                                        if (block.type === "paragraph") {
                                                            // 特殊处理：为特定文字添加黄色 callout
                                                            if (block.text === "BUT：大多数 OPT 公司的 HR 并不专业，他们通常不会帮你处理 8233。所以，他们会把你的所有收入都写在 W-2 上。") {
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-amber-50/60 border-l-4 border-amber-300 p-4 rounded-r-lg shadow-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-brand-ink/85 font-medium",
                                                                        children: block.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                        lineNumber: 263,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, blockIndex, false, {
                                                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 33
                                                                }, this);
                                                            }
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: block.text
                                                            }, blockIndex, false, {
                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 36
                                                            }, this);
                                                        }
                                                        if (block.type === "list") {
                                                            const ListTag = block.ordered ? "ol" : "ul";
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ListTag, {
                                                                className: `space-y-3 ${block.ordered ? "list-decimal pl-6" : "list-disc pl-6"}`,
                                                                children: block.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "pl-2 leading-relaxed",
                                                                        children: item
                                                                    }, itemIndex, false, {
                                                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 33
                                                                    }, this))
                                                            }, blockIndex, false, {
                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 29
                                                            }, this);
                                                        }
                                                        if (block.type === "table") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "overflow-x-auto rounded-[20px] border border-brand-pink/40 bg-white/90",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                    className: "w-full text-left text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                            className: "bg-brand-pink/20 text-brand-ink",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                children: block.headers.map((header)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                        className: "px-4 py-3 font-semibold",
                                                                                        children: header
                                                                                    }, header, false, {
                                                                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                                        lineNumber: 300,
                                                                                        columnNumber: 39
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                                lineNumber: 298,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                            lineNumber: 297,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                            className: "divide-y divide-brand-pink/30",
                                                                            children: block.rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                    children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                            className: "px-4 py-3",
                                                                                            children: cell
                                                                                        }, `${rowIndex}-${cellIndex}`, false, {
                                                                                            fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                                            lineNumber: 313,
                                                                                            columnNumber: 41
                                                                                        }, this))
                                                                                }, rowIndex, false, {
                                                                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                                    lineNumber: 311,
                                                                                    columnNumber: 37
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                            lineNumber: 309,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, blockIndex, false, {
                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 29
                                                            }, this);
                                                        }
                                                        if (block.type === "quiz") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxQuiz$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, blockIndex, false, {
                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 34
                                                            }, this);
                                                        }
                                                        return null;
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `${section.heading}-${index}`, true, {
                                            fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: `space-y-6 ${isSpecialSection ? `rounded-2xl p-6 sm:p-8 border-2 ${bgColor} shadow-md` : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `text-2xl sm:text-3xl font-bold pb-3 text-brand-ink inline-block ${isSpecialSection ? '' : 'border-b-2 border-brand-pink/30'}`,
                                                    children: section.heading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 text-sm sm:text-base text-brand-ink/75",
                                                    children: section.blocks.map((block, blockIndex)=>{
                                                        if (block.type === "paragraph") {
                                                            // 特殊处理：如果是第一个段落且内容较长，添加特殊样式
                                                            if (index === 0 && blockIndex === 0) {
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg text-brand-ink/80 leading-relaxed bg-amber-50 p-6 rounded-2xl border border-amber-200",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-amber-900",
                                                                        children: block.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                        lineNumber: 349,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, blockIndex, false, {
                                                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 31
                                                                }, this);
                                                            }
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: block.text
                                                            }, blockIndex, false, {
                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 34
                                                            }, this);
                                                        }
                                                        if (block.type === "list") {
                                                            const ListTag = block.ordered ? "ol" : "ul";
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ListTag, {
                                                                className: `space-y-3 ${block.ordered ? "list-decimal pl-6" : "list-disc pl-6"} ${isSpecialSection ? 'text-brand-ink/85' : 'text-brand-ink/75'}`,
                                                                children: block.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `pl-2 ${isSpecialSection ? 'leading-relaxed' : ''}`,
                                                                        children: item
                                                                    }, itemIndex, false, {
                                                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                        lineNumber: 366,
                                                                        columnNumber: 33
                                                                    }, this))
                                                            }, blockIndex, false, {
                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 29
                                                            }, this);
                                                        }
                                                        if (block.type === "table") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "overflow-x-auto rounded-[20px] border border-brand-pink/40 bg-white/90",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                    className: "w-full text-left text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                            className: "bg-brand-pink/20 text-brand-ink",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                children: block.headers.map((header)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                        className: "px-4 py-3 font-semibold",
                                                                                        children: header
                                                                                    }, header, false, {
                                                                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                                        lineNumber: 386,
                                                                                        columnNumber: 39
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                                lineNumber: 384,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                            className: "divide-y divide-brand-pink/30",
                                                                            children: block.rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                    children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                            className: "px-4 py-3",
                                                                                            children: cell
                                                                                        }, `${rowIndex}-${cellIndex}`, false, {
                                                                                            fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                                            lineNumber: 399,
                                                                                            columnNumber: 41
                                                                                        }, this))
                                                                                }, rowIndex, false, {
                                                                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                                    lineNumber: 397,
                                                                                    columnNumber: 37
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                            lineNumber: 395,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, blockIndex, false, {
                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 29
                                                            }, this);
                                                        }
                                                        if (block.type === "quiz") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxQuiz$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, blockIndex, false, {
                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 34
                                                            }, this);
                                                        }
                                                        return null;
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `${section.heading}-${index}`, true, {
                                            fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 rounded-2xl p-6 border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-gray-800 mb-3",
                                                children: "免责声明"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 leading-relaxed",
                                                children: "本文为报税修正指南的经验整理，不构成税务或法律建议。若你的情况涉及复杂收入或身份切换，请先做判断或咨询专业人士。"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 426,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl sm:text-3xl font-bold text-brand-ink mb-8",
                                        children: "常见问题"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: guide.faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                className: "group rounded-2xl border border-brand-pink/30 bg-white/90 p-5 shadow-sm open:bg-brand-pink/5 transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                        className: "cursor-pointer text-base font-bold text-brand-ink list-none flex justify-between items-center",
                                                        children: [
                                                            faq.question,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-pinkdeep group-open:rotate-45 transition-transform font-mono text-xl",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-4 text-sm sm:text-base leading-relaxed text-brand-ink/70 border-t border-brand-pink/10 pt-4",
                                                        children: faq.answer
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 434,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: guide.cta.href,
                                    className: "inline-flex items-center gap-2 bg-brand-pinkdeep text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-pinkhover transition-colors shadow-xl hover:scale-105 transform",
                                    children: guide.cta.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(guides)/guides/[slug]/page.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(guides)/guides/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(guides)/guides/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9460b6bd._.js.map