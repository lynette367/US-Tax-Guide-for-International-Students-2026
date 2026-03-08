(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/TaxQuiz.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaxQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const questions = {
    q1: {
        id: "q1",
        text: "Q1 你的身份类别？",
        options: [
            {
                label: "F-1 学生",
                value: "f1",
                next: "q2"
            },
            {
                label: "J-1 访问",
                value: "j1",
                next: "other"
            },
            {
                label: "其他",
                value: "other",
                next: "other"
            }
        ]
    },
    q2: {
        id: "q2",
        text: "Q2 2025 年在美国待了多久？",
        options: [
            {
                label: "超过 5 年",
                value: "gt5",
                next: "resident"
            },
            {
                label: "不足 5 年",
                value: "lt5",
                next: "q3"
            }
        ]
    },
    q3: {
        id: "q3",
        text: "Q3 2025 年是否有收入？",
        options: [
            {
                label: "有收入 (W2/1099)",
                value: "yes",
                next: "nr_income"
            },
            {
                label: "没收入",
                value: "no",
                next: "nr_no_income"
            }
        ]
    }
};
const results = {
    other: {
        title: "非本教程目标用户",
        description: "本教程主要针对 F-1 学生身份。J-1 或其他身份请咨询专业税务顾问或学校相关中心。",
        links: []
    },
    resident: {
        title: "身份结果：Resident (居民报税)",
        description: "根据五年规则，你今年通常应按 Resident 身份申报，使用 Form 1040。",
        links: [
            {
                label: "Form 1040 下载 (IRS)",
                url: "https://www.irs.gov/pub/irs-pdf/f1040.pdf"
            }
        ]
    },
    nr_no_income: {
        title: "身份结果：Non-resident (无收入)",
        description: "你属于 Non-resident 且没有收入。你必须填写 Form 8843 来声明你的豁免身份状态。",
        links: [
            {
                label: "Form 8843 详情 (IRS)",
                url: "https://www.irs.gov/forms-pubs/about-form-8843"
            }
        ]
    },
    nr_income: {
        title: "身份结果：Non-resident (有收入)",
        description: "你属于 Non-resident 且有收入。你需要填写 Form 8843 以及 Form 1040-NR。",
        links: [
            {
                label: "Form 8843 详情 (IRS)",
                url: "https://www.irs.gov/forms-pubs/about-form-8843"
            },
            {
                label: "Form 1040-NR 下载 (IRS)",
                url: "https://www.irs.gov/pub/irs-pdf/f1040nr.pdf"
            }
        ]
    }
};
function TaxQuiz() {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("q1");
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleOptionSelect = (next)=>{
        setHistory([
            ...history,
            currentStep
        ]);
        setCurrentStep(next);
    };
    const handleReset = ()=>{
        setCurrentStep("q1");
        setHistory([]);
    };
    const isResult = results[currentStep] !== undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 rounded-[28px] border border-brand-pink/40 bg-white/95 p-6 sm:p-8 shadow-[0_20px_60px_rgba(244,185,200,0.25)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-brand-ink",
                        children: "30 秒快速自测：我今年需要填 8843 还是 1040-NR？"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TaxQuiz.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this),
                    history.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleReset,
                        className: "text-xs font-semibold text-brand-pinkdeep hover:underline",
                        children: "重新开始"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TaxQuiz.tsx",
                        lineNumber: 103,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TaxQuiz.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            !isResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base font-medium text-brand-ink/90",
                        children: questions[currentStep].text
                    }, void 0, false, {
                        fileName: "[project]/src/components/TaxQuiz.tsx",
                        lineNumber: 114,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-2",
                        children: questions[currentStep].options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleOptionSelect(option.next || "other"),
                                className: "rounded-xl border border-brand-pink/30 bg-white px-4 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-pinkdeep hover:bg-brand-pink/5 hover:shadow-sm",
                                children: option.label
                            }, option.value, false, {
                                fileName: "[project]/src/components/TaxQuiz.tsx",
                                lineNumber: 119,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TaxQuiz.tsx",
                        lineNumber: 117,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TaxQuiz.tsx",
                lineNumber: 113,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl bg-brand-pink/10 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-bold text-brand-pinkdeep",
                        children: results[currentStep].title
                    }, void 0, false, {
                        fileName: "[project]/src/components/TaxQuiz.tsx",
                        lineNumber: 131,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-brand-ink/80 leading-relaxed",
                        children: results[currentStep].description
                    }, void 0, false, {
                        fileName: "[project]/src/components/TaxQuiz.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, this),
                    results[currentStep].links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap gap-3",
                        children: results[currentStep].links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center rounded-lg bg-brand-pinkdeep px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brand-pinkhover",
                                children: [
                                    link.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "ml-1.5 h-3.5 w-3.5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TaxQuiz.tsx",
                                            lineNumber: 154,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxQuiz.tsx",
                                        lineNumber: 148,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, link.url, true, {
                                fileName: "[project]/src/components/TaxQuiz.tsx",
                                lineNumber: 140,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TaxQuiz.tsx",
                        lineNumber: 138,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TaxQuiz.tsx",
                lineNumber: 130,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TaxQuiz.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, this);
}
_s(TaxQuiz, "j2qJJo1TSpLAytD+EEQ4c0TRHGs=");
_c = TaxQuiz;
var _c;
__turbopack_context__.k.register(_c, "TaxQuiz");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_TaxQuiz_tsx_e0709761._.js.map