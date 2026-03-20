"use client";

import { useState } from "react";

export default function FicaCalculator() {
  const [arrivalYear, setArrivalYear] = useState<number>(new Date().getFullYear() - 2);
  const [taxYear, setTaxYear] = useState<number>(2026);
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState<{ isExempt: boolean; message: string } | null>(null);

  const calculate = () => {
    if (!amount) return;
    const isExempt = taxYear - arrivalYear < 5;
    const amt = parseFloat(amount) || 0;

    if (isExempt) {
      setResult({
        isExempt: true,
        message: `根据你的 F1 身份，你处于 Exempt 期间，预计可退回 $${amt.toFixed(2)}。你需要向雇主申请 Refund 或提交 Form 843。`,
      });
    } else {
      setResult({
        isExempt: false,
        message: `根据你的 F1 身份，你在 ${taxYear} 年已满 5 年成为 Resident Alien（就全美税法而言），这部分 FICA 税属于正常扣缴，不可退回。`,
      });
    }
  };

  const years = Array.from({ length: 15 }, (_, i) => new Date().getFullYear() - i + 2); // 2028 down to 2014

  return (
    <div className="w-full max-w-xl mx-auto my-8 p-6 sm:p-8 rounded-[32px] bg-[#FFFDF3] border border-amber-100 shadow-[0_20px_60px_rgba(247,198,217,0.25)] relative overflow-hidden">
      <h3 className="text-xl sm:text-2xl font-bold text-center text-brand-ink mb-2">FICA 退税计算器</h3>
      <p className="text-sm text-center text-brand-ink/60 mb-8 relative z-10">只需 3 秒，测算你被多扣了多少冤枉钱</p>

      <div className="space-y-6 relative z-10">
        <div>
          <label className="block text-sm font-semibold text-brand-ink mb-2">1. 你的首次 F1 入境年份</label>
          <select
            value={arrivalYear}
            onChange={(e) => setArrivalYear(Number(e.target.value))}
            className="w-full rounded-2xl border-white/50 bg-white/80 px-4 py-3 text-brand-ink shadow-sm focus:border-brand-pinkdeep focus:ring-brand-pinkdeep transition"
          >
            {years.map((y) => (
              <option key={`arr-${y}`} value={y}>{y} 年</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-ink mb-2">2. 报税年度 (Tax Year)</label>
          <select
            value={taxYear}
            onChange={(e) => setTaxYear(Number(e.target.value))}
            className="w-full rounded-2xl border-white/50 bg-white/80 px-4 py-3 text-brand-ink shadow-sm focus:border-brand-pinkdeep focus:ring-brand-pinkdeep transition"
          >
            {years.filter(y => y <= 2026).map((y) => (
              <option key={`tax-${y}`} value={y}>{y} 年度</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-ink mb-2">3. W-2 上被扣的 FICA 税总额 ($)</label>
          <p className="text-xs text-brand-ink/50 mb-2">通常在 W-2 上的 Box 4 (Social Security tax) + Box 6 (Medicare tax)</p>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/50 font-medium">$</span>
            <input
              type="number"
              placeholder="例如 1250.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-2xl border-white/50 bg-white/80 pl-8 pr-4 py-3 text-brand-ink shadow-sm focus:border-brand-pinkdeep focus:ring-brand-pinkdeep transition"
            />
          </div>
        </div>

        <button
          onClick={calculate}
          className="mt-6 w-full rounded-full bg-brand-pinkdeep px-6 py-4 text-base font-bold text-white shadow-[0_8px_25px_rgba(219,39,119,0.3)] transition hover:bg-brand-pinkhover hover:shadow-[0_12px_35px_rgba(219,39,119,0.4)] hover:-translate-y-0.5"
        >
          测算退税结果
        </button>

        {result && (
          <div className={`mt-6 p-5 sm:p-6 rounded-[24px] border ${result.isExempt ? 'border-green-200 bg-green-50/80 shadow-[0_10px_30px_rgba(187,247,208,0.4)]' : 'border-amber-200 bg-amber-50/80'} transition-all duration-300 animate-in fade-in slide-in-from-bottom-2`}>
            {result.isExempt ? (
              <div className="flex items-start gap-3">
                <span className="text-xl">🎉</span>
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-1">符合豁免条件</h4>
                  <p className="text-green-700 leading-relaxed text-sm format-bold-msg"><span dangerouslySetInnerHTML={{ __html: result.message.replace(/\$([0-9.,]+)/g, '<span class="font-extrabold text-green-900 text-base">$$$1</span>') }} /></p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <h4 className="font-bold text-amber-800 text-lg mb-1">已转为 Resident Alien</h4>
                  <p className="text-amber-700 leading-relaxed text-sm">{result.message}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
