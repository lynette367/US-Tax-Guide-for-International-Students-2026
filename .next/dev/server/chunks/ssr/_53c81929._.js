module.exports = [
"[project]/src/components/ProcessSteps.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessSteps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
const steps = [
    {
        title: "确认“非税务居民”身份",
        href: "/tools/opt-tax",
        trackId: "home-step-1"
    },
    {
        title: "准备W-2/1099表格",
        href: "/w2-missing-guide",
        trackId: "home-step-2"
    },
    {
        title: "填写1040-NR",
        href: "/1040-nr-filling-guide",
        trackId: "home-step-3",
        highlight: true
    },
    {
        title: "申报8843表",
        href: "/form-8843-tutorial-2026",
        trackId: "home-step-4"
    },
    {
        title: "邮寄/电子提交(e-file)",
        href: "/turbotax-pitfalls-2026",
        trackId: "home-step-5"
    }
];
function ProcessSteps() {
    const handleTrack = (action, label)=>{
        // Analytics tracking logic (e.g., GA4)
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        console.log(`Track: ${action} - ${label}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        className: "mt-10 grid gap-8 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 relative",
        children: steps.map((step, index)=>{
            const isStep3 = step.highlight;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "group relative",
                children: [
                    index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-brand-pink/30 z-0",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProcessSteps.tsx",
                        lineNumber: 60,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: step.href,
                        "data-track": step.trackId,
                        onMouseEnter: ()=>isStep3 && handleTrack("hover", step.trackId),
                        onClick: ()=>isStep3 && handleTrack("click", step.trackId),
                        className: `
                relative z-10 flex flex-col items-center justify-center h-full
                rounded-[28px] border p-7 text-center transition-all duration-300
                hover:scale-[1.04] hover:shadow-xl active:scale-[0.98]
                ${isStep3 ? "bg-[#D98A6C] border-[#C37456] text-white shadow-[0_15px_40px_rgba(217,138,108,0.3)]" : "bg-white/95 border-brand-pink/30 text-brand-ink shadow-sm hover:border-brand-pink/50"}
              `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                  absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-black py-1 px-3.5 rounded-full uppercase tracking-wider
                  ${isStep3 ? "bg-white text-[#D98A6C]" : "bg-brand-pinkdeep text-white focus-within:ring-2 focus-within:ring-offset-2"}
                `,
                                children: [
                                    "Step ",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProcessSteps.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-3 text-base sm:text-lg font-bold leading-tight ${isStep3 ? "text-white" : "text-brand-ink"}`,
                                children: step.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProcessSteps.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `mt-4 text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity`,
                                children: "立即查看 →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProcessSteps.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProcessSteps.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                ]
            }, step.title, true, {
                fileName: "[project]/src/components/ProcessSteps.tsx",
                lineNumber: 54,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ProcessSteps.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_53c81929._.js.map