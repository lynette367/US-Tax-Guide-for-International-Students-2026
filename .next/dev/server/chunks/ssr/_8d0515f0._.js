module.exports = [
"[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepByStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const steps = [
    {
        title: "Step 1: 个人信息与身份判定",
        header: "个人信息与身份判定 (Header Area)",
        action: "填写姓名、SSN/ITIN。",
        pitfall: "F1 留学生通常属于 Nonresident Alien。务必确认你的 Filing Status。如果你是单身且没结婚，通常勾选 Single。",
        location: "表单最上方个人资料区。"
    },
    {
        title: "Step 2: 收入申报",
        header: "收入申报 (Lines 1a - 1z)",
        action: "根据你的 W-2（工资）或 1042-S（奖学金/免税收入）填写。",
        details: [
            "Line 1a: W-2 上的总工资。",
            "Line 1c: 奖学金中用于支付生活费（Taxable portion）的部分。"
        ],
        note: "如果有 $5000 中美税收协定免税额，不要直接在这里扣除，而是在 Schedule OI 中体现。"
    },
    {
        title: "Step 3: 标准/分项扣除",
        header: "标准/分项扣除 (Adjustments & Deductions)",
        painPoint: "留学生不能使用 Standard Deduction（除非是印度留学生有特殊协定）。",
        action: "大多数留学生只需填写 Charitable Contributions（如果有捐款）或保留为 0。"
    },
    {
        title: "Step 4: 税收协定豁免",
        header: "税收协定豁免 (Schedule OI)",
        action: "这是留学生页面的流量核心！填写 China Treaty Article 20(c)。",
        specific: "在 Schedule OI 的第 L 项，注明你是中国公民，申请 $5000 的免税额度。",
        result: "这笔钱会反映在 1040-NR 的对应减免项中。",
        isHighlight: true
    },
    {
        title: "Step 5: 计算退税或补税",
        header: "计算退税或补税 (Refund or Amount You Owe)",
        calculation: "对比你的 Total Tax 和 Total Payments（你预缴的税）。",
        refund: "退税 (Line 34)：如果预缴多了，IRS 会退给你。建议填写 Direct Deposit 信息，速度最快。",
        owe: "补税 (Line 37)：如果预缴少了，需要在 4.15 前补齐。"
    }
];
function StepByStep() {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-0 w-full h-1 bg-brand-pink/20 -translate-y-1/2 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-0 h-1 bg-brand-pinkdeep -translate-y-1/2 transition-all duration-500 rounded-full",
                        style: {
                            width: `${currentStep / (steps.length - 1) * 100}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex justify-between",
                        children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentStep(index),
                                className: `w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-2 ${index <= currentStep ? "bg-brand-pinkdeep border-brand-pinkdeep text-white" : "bg-white border-brand-pink/30 text-brand-pink/50"} ${index === currentStep ? "ring-4 ring-brand-pink/30 scale-110" : "hover:scale-105"}`,
                                children: index + 1
                            }, index, false, {
                                fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/80 backdrop-blur-md rounded-[32px] p-8 sm:p-10 border border-brand-pink/30 shadow-2xl transition-all duration-500 min-h-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl sm:text-3xl font-extrabold text-brand-ink",
                            children: steps[currentStep].header
                        }, void 0, false, {
                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                steps[currentStep].action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-medium text-brand-ink/90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-brand-pinkdeep font-bold mr-2",
                                            children: "操作："
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        steps[currentStep].action
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                steps[currentStep].pitfall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-amber-50 p-4 rounded-xl border border-amber-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-amber-900 mb-1",
                                            children: "⚠️ 必避坑点："
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-amber-800",
                                            children: steps[currentStep].pitfall
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                steps[currentStep].details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc pl-6 space-y-2 text-brand-ink/80",
                                    children: steps[currentStep].details.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: d
                                        }, i, false, {
                                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                steps[currentStep].note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm italic text-brand-ink/60 bg-gray-50 p-3 rounded-lg border border-gray-100",
                                    children: [
                                        "注意：",
                                        steps[currentStep].note
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                steps[currentStep].isHighlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-brand-pinkdeep/10 p-6 rounded-2xl border-2 border-brand-pinkdeep shadow-inner mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-brand-pinkdeep mb-2",
                                            children: "💡 Tips / 提示："
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-brand-ink/90 font-medium",
                                            children: steps[currentStep].specific
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-brand-ink/70 italic",
                                            children: [
                                                "结果：",
                                                steps[currentStep].result
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                steps[currentStep].refund && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid sm:grid-cols-2 gap-4 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-50 p-4 rounded-2xl border border-green-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-green-900 mb-2",
                                                    children: "💰 退税 (Refund)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-green-800",
                                                    children: steps[currentStep].refund
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-red-50 p-4 rounded-2xl border border-red-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-red-900 mb-2",
                                                    children: "📝 补税 (Owe)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-red-800",
                                                    children: steps[currentStep].owe
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto flex justify-between pt-8 border-t border-brand-pink/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentStep(Math.max(0, currentStep - 1)),
                                    disabled: currentStep === 0,
                                    className: `px-6 py-2 rounded-full font-bold transition-all ${currentStep === 0 ? "opacity-20 cursor-not-allowed" : "hover:bg-brand-pink/10 text-brand-pinkdeep"}`,
                                    children: "← 上一步"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentStep(Math.min(steps.length - 1, currentStep + 1)),
                                    disabled: currentStep === steps.length - 1,
                                    className: `px-8 py-2 rounded-full font-bold shadow-lg transition-all ${currentStep === steps.length - 1 ? "opacity-20 cursor-not-allowed" : "bg-brand-pinkdeep text-white hover:bg-brand-pinkhover hover:shadow-xl active:scale-95"}`,
                                    children: currentStep === steps.length - 1 ? "完成" : "下一步 →"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(tools)/1040-nr-filling-guide/StepByStep.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_8d0515f0._.js.map