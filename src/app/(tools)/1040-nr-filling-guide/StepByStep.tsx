"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Step 1: 个人信息与身份判定",
    header: "个人信息与身份判定 (Header Area)",
    action: "填写姓名、SSN/ITIN。",
    pitfall: "F1 留学生通常属于 Nonresident Alien。务必确认你的 Filing Status。如果你是单身且没结婚，通常勾选 Single。",
    location: "表单最上方个人资料区。",
  },
  {
    title: "Step 2: 收入申报",
    header: "收入申报 (Lines 1a - 1z)",
    action: "根据你的 W-2（工资）或 1042-S（奖学金/免税收入）填写。",
    details: [
      "Line 1a: W-2 上的总工资。",
      "Line 1c: 奖学金中用于支付生活费（Taxable portion）的部分。",
    ],
    note: "如果有 $5000 中美税收协定免税额，不要直接在这里扣除，而是在 Schedule OI 中体现。",
  },
  {
    title: "Step 3: 标准/分项扣除",
    header: "标准/分项扣除 (Adjustments & Deductions)",
    painPoint: "留学生不能使用 Standard Deduction（除非是印度留学生有特殊协定）。",
    action: "大多数留学生只需填写 Charitable Contributions（如果有捐款）或保留为 0。",
  },
  {
    title: "Step 4: 税收协定豁免",
    header: "税收协定豁免 (Schedule OI)",
    action: "这是留学生页面的流量核心！填写 China Treaty Article 20(c)。",
    specific: "在 Schedule OI 的第 L 项，注明你是中国公民，申请 $5000 的免税额度。",
    result: "这笔钱会反映在 1040-NR 的对应减免项中。",
    isHighlight: true,
  },
  {
    title: "Step 5: 计算退税或补税",
    header: "计算退税或补税 (Refund or Amount You Owe)",
    calculation: "对比你的 Total Tax 和 Total Payments（你预缴的税）。",
    refund: "退税 (Line 34)：如果预缴多了，IRS 会退给你。建议填写 Direct Deposit 信息，速度最快。",
    owe: "补税 (Line 37)：如果预缴少了，需要在 4.15 前补齐。",
  },
];

export default function StepByStep() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="relative mb-12">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-pink/20 -translate-y-1/2 rounded-full" />
        <div
          className="absolute top-1/2 left-0 h-1 bg-brand-pinkdeep -translate-y-1/2 transition-all duration-500 rounded-full"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-2 ${
                index <= currentStep
                  ? "bg-brand-pinkdeep border-brand-pinkdeep text-white"
                  : "bg-white border-brand-pink/30 text-brand-pink/50"
              } ${index === currentStep ? "ring-4 ring-brand-pink/30 scale-110" : "hover:scale-105"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 sm:p-10 border border-brand-pink/30 shadow-2xl transition-all duration-500 min-h-[400px]">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
            {steps[currentStep].header}
          </h3>

          <div className="space-y-4">
            {steps[currentStep].action && (
              <p className="text-lg font-medium text-brand-ink/90">
                <span className="text-brand-pinkdeep font-bold mr-2">操作：</span>
                {steps[currentStep].action}
              </p>
            )}

            {steps[currentStep].pitfall && (
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                <p className="text-sm font-bold text-amber-900 mb-1">⚠️ 必避坑点：</p>
                <p className="text-sm text-amber-800">{steps[currentStep].pitfall}</p>
              </div>
            )}

            {steps[currentStep].details && (
              <ul className="list-disc pl-6 space-y-2 text-brand-ink/80">
                {steps[currentStep].details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}

            {steps[currentStep].note && (
              <p className="text-sm italic text-brand-ink/60 bg-gray-50 p-3 rounded-lg border border-gray-100">
                注意：{steps[currentStep].note}
              </p>
            )}

            {steps[currentStep].isHighlight && (
              <div className="bg-brand-pinkdeep/10 p-6 rounded-2xl border-2 border-brand-pinkdeep shadow-inner mt-4">
                <h4 className="font-bold text-brand-pinkdeep mb-2">💡 Tips / 提示：</h4>
                <p className="text-brand-ink/90 font-medium">{steps[currentStep].specific}</p>
                <p className="mt-2 text-sm text-brand-ink/70 italic">结果：{steps[currentStep].result}</p>
              </div>
            )}

            {steps[currentStep].refund && (
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                  <p className="font-bold text-green-900 mb-2">💰 退税 (Refund)</p>
                  <p className="text-sm text-green-800">{steps[currentStep].refund}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                  <p className="font-bold text-red-900 mb-2">📝 补税 (Owe)</p>
                  <p className="text-sm text-red-800">{steps[currentStep].owe}</p>
                </div>
              </div>
            )}

          </div>

          <div className="mt-auto flex justify-between pt-8 border-t border-brand-pink/10">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                currentStep === 0 ? "opacity-20 cursor-not-allowed" : "hover:bg-brand-pink/10 text-brand-pinkdeep"
              }`}
            >
              ← 上一步
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
              className={`px-8 py-2 rounded-full font-bold shadow-lg transition-all ${
                currentStep === steps.length - 1
                  ? "opacity-20 cursor-not-allowed"
                  : "bg-brand-pinkdeep text-white hover:bg-brand-pinkhover hover:shadow-xl active:scale-95"
              }`}
            >
              {currentStep === steps.length - 1 ? "完成" : "下一步 →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
