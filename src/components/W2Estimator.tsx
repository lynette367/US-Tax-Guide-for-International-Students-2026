"use client";

import { useState } from "react";

export default function W2Estimator() {
  const [grossWages, setGrossWages] = useState<string>("");
  const [fedTax, setFedTax] = useState<string>("");
  const [ficaTax, setFicaTax] = useState<string>("");

  return (
    <div className="my-8 overflow-hidden rounded-[32px] border-2 border-brand-ink/10 bg-white/40 p-1 backdrop-blur-md shadow-xl">
      <div className="bg-brand-pink/20 rounded-[28px] p-6 sm:p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-brand-ink">2026 版 Form 4852 辅助工具</h3>
          <p className="mt-2 text-sm text-brand-ink/60">
            根据你 2025 最后一张 Paycheck Stub 的 YTD (Year-to-Date) 数值自动映射。
          </p>
        </div>

        <div className="space-y-6">
          {/* Input Groups */}
          <div className="grid gap-4 sm:grid-cols-1">
            <div className="space-y-2">
              <label className="text-sm font-bold text-brand-ink/80 block">
                Gross Wages (YTD 总资)
              </label>
              <input
                type="number"
                placeholder="0.00"
                value={grossWages}
                onChange={(e) => setGrossWages(e.target.value)}
                className="w-full rounded-2xl border-2 border-brand-ink/5 bg-white/80 px-4 py-3 text-lg font-semibold text-brand-ink outline-none transition focus:border-brand-pinkdeep focus:ring-4 focus:ring-brand-pink/10"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-ink/80 block">
                  Federal Income Tax (YTD 联邦税)
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={fedTax}
                  onChange={(e) => setFedTax(e.target.value)}
                  className="w-full rounded-2xl border-2 border-brand-ink/5 bg-white/80 px-4 py-3 text-lg font-semibold text-brand-ink outline-none transition focus:border-brand-pinkdeep focus:ring-4 focus:ring-brand-pink/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-ink/80 block">
                  FICA / Social Security (YTD)
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={ficaTax}
                  onChange={(e) => setFicaTax(e.target.value)}
                  className="w-full rounded-2xl border-2 border-brand-ink/5 bg-white/80 px-4 py-3 text-lg font-semibold text-brand-ink outline-none transition focus:border-brand-pinkdeep focus:ring-4 focus:ring-brand-pink/10"
                />
                <p className="text-[10px] text-brand-ink/40">* 如果是 F1 豁免，通常此处为 0</p>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="mt-10 rounded-[24px] border-2 border-dashed border-brand-pinkdeep/30 bg-white/60 p-6 shadow-inner">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-pinkdeep mb-4">
              Form 4852 填写对应建议
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-white/50 p-4 border border-brand-ink/5">
                <span className="text-sm font-medium text-brand-ink/70">W-2 Box 1 (Wages, tips, etc)</span>
                <span className="text-lg font-bold text-brand-ink">${(Number(grossWages) || 0).toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between rounded-xl bg-white/50 p-4 border border-brand-ink/5">
                <span className="text-sm font-medium text-brand-ink/70">W-2 Box 2 (Federal tax withheld)</span>
                <span className="text-lg font-bold text-brand-ink">${(Number(fedTax) || 0).toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between rounded-xl bg-white/50 p-4 border border-brand-ink/5">
                <span className="text-sm font-medium text-brand-ink/70">W-2 Box 4/6 (FICA / Medicare)</span>
                <span className="text-lg font-bold text-brand-ink">${(Number(ficaTax) || 0).toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.irs.gov/pub/irs-pdf/f4852.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-ink px-6 py-3.5 text-sm font-bold !text-white shadow-lg transition hover:bg-brand-ink/90 active:scale-95 sm:w-auto"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                下载 IRS Form 4852 (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
