"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, Zap, Info, ArrowRight, RefreshCw } from "lucide-react";

export default function TaxTreatyEstimator() {
  const [income, setIncome] = useState<string>("");
  const [withholding, setWithholding] = useState<string>("");
  const [isCalculated, setIsCalculated] = useState(false);

  const results = useMemo(() => {
    if (!income) return null;
    
    const incomeNum = parseFloat(income);
    const withholdingNum = parseFloat(withholding) || 0;
    
    // Simple marginal rate estimation for 2024/2025
    // 10% up to $11,600, then 12% up to $47,150
    const rate = incomeNum <= 11600 ? 0.10 : 0.12;
    
    const treatyAmount = 5000;
    let estimatedSavings = treatyAmount * rate;
    
    // You can't get back more than you paid in federal tax (simplified)
    const finalRefundIncrease = Math.min(estimatedSavings, withholdingNum || estimatedSavings);

    return {
      savings: finalRefundIncrease.toFixed(0),
      ratePercent: (rate * 100).toFixed(0),
      isCapped: withholdingNum > 0 && estimatedSavings > withholdingNum
    };
  }, [income, withholding]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (income) setIsCalculated(true);
  };

  const reset = () => {
    setIncome("");
    setWithholding("");
    setIsCalculated(false);
  };

  return (
    <div className="mt-8 rounded-3xl border border-brand-pink/20 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(244,185,200,0.15)] overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-brand-pink/10 rounded-xl">
          <Calculator className="w-6 h-6 text-brand-pinkdeep" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-brand-ink">中美税收协定 $5000 省钱估算器</h3>
          <p className="text-xs text-brand-ink/40 tracking-wider uppercase font-semibold">Treaty Article 20(c) Estimator</p>
        </div>
      </div>

      {!isCalculated ? (
        <form onSubmit={handleCalculate} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="income" className="text-sm font-bold text-brand-ink/70 ml-1">
                年总收入 (W-2 Box 1)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/30 font-bold">$</span>
                <input
                  id="income"
                  type="number"
                  placeholder="例如: 45000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full pl-8 pr-4 py-4 rounded-2xl border-2 border-brand-pink/10 bg-brand-pink/[0.02] focus:border-brand-pinkdeep focus:bg-white transition-all outline-none font-semibold text-brand-ink"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="withholding" className="text-sm font-bold text-brand-ink/70 ml-1">
                已扣联邦税 (Federal Withholding)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/30 font-bold">$</span>
                <input
                  id="withholding"
                  type="number"
                  placeholder="例如: 5000"
                  value={withholding}
                  onChange={(e) => setWithholding(e.target.value)}
                  className="w-full pl-8 pr-4 py-4 rounded-2xl border-2 border-brand-pink/10 bg-brand-pink/[0.02] focus:border-brand-pinkdeep focus:bg-white transition-all outline-none font-semibold text-brand-ink"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="group w-full py-4 bg-brand-pinkdeep text-white font-bold rounded-2xl shadow-lg shadow-brand-pink/20 hover:bg-brand-pinkhover hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            立即计算预计省钱额
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 flex gap-3">
            <Info className="w-5 h-5 text-amber-500 shrink-0" />
            <p className="text-xs text-amber-700 leading-relaxed">
              <strong>温馨提示：</strong> 此估算器基于 2024/2025 边际税率，仅针对联邦税 (Federal Tax) 的 $5000 免税额度进行快速测算。实际结果可能因报税软件选择、社保补交等因素有所不同。
            </p>
          </div>
        </form>
      ) : (
        <div className="animate-in zoom-in-95 fade-in duration-500">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-brand-pinkdeep to-brand-pinkhover text-white text-center overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">利用 Tax Treaty，你今年预计可多拿回</p>
              <div className="flex items-center justify-center gap-1 mb-4">
                <span className="text-3xl font-bold opacity-70 underline decoration-2 underline-offset-8 decoration-white/30">$</span>
                <span className="text-7xl font-black tabular-nums tracking-tighter">{results?.savings}</span>
                <span className="text-xl font-bold mt-8 ml-1 opacity-80">REFUND*</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold border border-white/20">
                <Zap className="w-3.5 h-3.5 fill-white" />
                基于 {results?.ratePercent}% 边际税率测算
              </div>
            </div>
          </div>

          {results?.isCapped && (
            <div className="mt-4 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-700 text-xs leading-relaxed flex gap-2">
              <Info className="w-4 h-4 shrink-0" />
              <span>注意：你的预扣税额 ($ {withholding}) 低于理论免税额度产生的退税。你可能无法全额拿回 $ {results.savings}，但依然能清零你的联邦欠税。</span>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={reset}
              className="flex-1 py-4 px-6 rounded-2xl border-2 border-brand-pink/10 font-bold text-brand-ink hover:bg-brand-pink/5 transition-all outline-none flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              重新估算
            </button>
            <Link
              href="#how-to-apply"
              className="flex-[2] py-4 px-8 bg-brand-ink text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-2"
            >
              查看如何申请 $5000 免税额
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-6 text-[10px] text-brand-ink/30 text-center uppercase tracking-widest leading-loose">
            * Estimated savings based on standard US-China Tax Treaty Article 20(c) provisions. <br />
            Consult Sprintax or a CPA for professional filing.
          </p>
        </div>
      )}
    </div>
  );
}
