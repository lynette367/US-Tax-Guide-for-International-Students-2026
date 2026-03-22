"use client";

import { useState, useMemo } from "react";

type TaxStatus = "owed" | "refund" | "8843";

export default function LateFilingCalculator() {
  const [taxStatus, setTaxStatus] = useState<TaxStatus>("owed");
  const [monthsLate, setMonthsLate] = useState<number>(1);
  const [amountOwed, setAmountOwed] = useState<string>("");

  const calculation = useMemo(() => {
    if (taxStatus !== "owed") {
      return {
        ftf: 0,
        ftp: 0,
        total: 0,
        isZero: true,
      };
    }

    const owed = parseFloat(amountOwed) || 0;
    if (owed <= 0) {
      return { ftf: 0, ftp: 0, total: 0, isZero: true };
    }

    // Failure to File: 5% per month, max 25%
    let ftf = Math.min(owed * 0.05 * monthsLate, owed * 0.25);
    
    // Failure to Pay: 0.5% per month
    // IRS cap for FTP is also 25% total, but let's follow user's simplified logic
    const ftp = owed * 0.005 * monthsLate;

    // 60-day minimum penalty (approx 2 months)
    if (monthsLate >= 2) {
      const minPenalty = Math.min(485, owed); // 2026 estimate
      if (ftf < minPenalty) {
        ftf = minPenalty;
      }
    }

    return {
      ftf,
      ftp,
      total: ftf + ftp,
      isZero: false,
    };
  }, [taxStatus, monthsLate, amountOwed]);

  return (
    <div id="calculator" className="w-full max-w-2xl mx-auto my-12 p-6 sm:p-10 rounded-[32px] bg-white border border-brand-pink/20 shadow-[0_22px_70px_rgba(244,185,200,0.3)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 rounded-bl-full -mr-16 -mt-16" />
      
      <h3 className="text-2xl font-bold text-center text-brand-ink mb-2">2026 OPT 逾期罚款估算器</h3>
      <p className="text-sm text-center text-brand-ink/60 mb-10">输入你的情况，快速判定金钱罚款与身份风险</p>

      <div className="space-y-8 relative z-10">
        {/* Step 1: Tax Status */}
        <div>
          <label className="block text-sm font-bold text-brand-ink mb-4">1. 你是否欠 IRS 税款？</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: "owed", label: "欠税", sub: "有 Balance Due" },
              { id: "refund", label: "不欠税 / 退税", sub: "及零收入" },
              { id: "8843", label: "只有 8843", sub: "无 W2/1042-S" },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setTaxStatus(opt.id as TaxStatus)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
                  taxStatus === opt.id
                    ? "border-brand-pinkdeep bg-brand-pink/5 ring-1 ring-brand-pinkdeep"
                    : "border-gray-100 bg-gray-50/50 hover:border-brand-pink/30"
                }`}
              >
                <span className={`font-bold ${taxStatus === opt.id ? "text-brand-pinkdeep" : "text-brand-ink/80"}`}>
                  {opt.label}
                </span>
                <span className="text-[10px] text-brand-ink/50 mt-1">{opt.sub}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Months Late */}
        <div>
          <label className="block text-sm font-bold text-brand-ink mb-4 flex justify-between">
            2. 逾期月数 (以 4.15 为起点)
            <span className="text-brand-pinkdeep bg-brand-pink/10 px-2 py-0.5 rounded text-xs">{monthsLate} 个月</span>
          </label>
          <input
            type="range"
            min="1"
            max="12"
            step="1"
            value={monthsLate}
            onChange={(e) => setMonthsLate(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-pinkdeep"
          />
          <div className="flex justify-between text-[10px] text-brand-ink/40 mt-2 px-1">
            <span>1个月 (4.16-5.15)</span>
            <span>12个月</span>
          </div>
        </div>

        {/* Step 3: Amount Owed (Conditional) */}
        {taxStatus === "owed" && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="block text-sm font-bold text-brand-ink mb-2">3. 欠税金额 (Balance Due) ($)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/40 font-medium">$</span>
              <input
                type="number"
                placeholder="例如 1000"
                value={amountOwed}
                onChange={(e) => setAmountOwed(e.target.value)}
                className="w-full rounded-2xl border-gray-200 bg-gray-50/50 pl-8 pr-4 py-3.5 text-brand-ink focus:border-brand-pinkdeep focus:ring-brand-pinkdeep transition outline-none"
              />
            </div>
          </div>
        )}

        {/* Result Area */}
        <div className={`mt-10 p-6 rounded-[28px] border-2 transition-all duration-500 ${
          calculation.isZero 
            ? "border-green-100 bg-green-50/60 shadow-[0_15px_40px_rgba(187,247,208,0.3)]" 
            : "border-red-100 bg-red-50/60 shadow-[0_15px_40px_rgba(254,226,226,0.3)]"
        }`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-3 h-3 rounded-full animate-pulse ${calculation.isZero ? "bg-green-500" : "bg-red-500"}`} />
            <h4 className={`font-bold text-lg ${calculation.isZero ? "text-green-800" : "text-red-800"}`}>
              估算结果：预计罚金 ${calculation.total.toFixed(2)}
            </h4>
          </div>

          <div className="space-y-4">
            <div className={`p-4 rounded-xl ${calculation.isZero ? "bg-white/60" : "bg-white/60"}`}>
              <p className={`text-sm leading-relaxed ${calculation.isZero ? "text-green-900" : "text-red-900"}`}>
                {calculation.isZero ? (
                  <span>
                    <strong>结论：</strong> 你当前不欠税，因此<strong>金钱罚款为 $0</strong>。
                    <br />
                    <span className="text-xs mt-2 block opacity-80">但这并不意味着没有风险！逾期申报仍可能导致“3年追溯期失效”和身份合规问题。</span>
                  </span>
                ) : (
                  <span>
                    <strong>计算逻辑：</strong>
                    <br />
                    • Failure to File: ${calculation.ftf.toFixed(2)} (5% per month)
                    <br />
                    • Failure to Pay: ${calculation.ftp.toFixed(2)} (0.5% per month)
                    <br />
                    <span className="text-xs mt-2 block opacity-80 italic">注：如果逾期超过 60 天，FTF 罚款最低为 $485 或欠税额的 100%（取小者）。</span>
                  </span>
                )}
              </p>
            </div>

            <div className={`p-4 rounded-xl border-l-4 ${calculation.isZero ? "border-green-400 bg-green-100/30" : "border-red-400 bg-red-100/30"}`}>
              <h5 className="text-xs font-bold uppercase tracking-wider mb-2 opacity-60">身份风险评估</h5>
              <p className="text-sm font-medium text-brand-ink/80">
                根据计算，你的罚金为 ${calculation.total.toFixed(2)}。但请注意：对于 OPT 身份，连续的税务漏报可能在 H1B 转换或绿卡面试时被视为未能维持合法身份（Fail to maintain status）。
              </p>
            </div>
          </div>

          {!calculation.isZero && (
            <div className="mt-6 text-center">
              <p className="text-xs text-brand-ink/50">
                觉得罚金太高？下文将详解如何通过 <strong>First-Time Abate (首次减免)</strong> 尝试申请减税。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
