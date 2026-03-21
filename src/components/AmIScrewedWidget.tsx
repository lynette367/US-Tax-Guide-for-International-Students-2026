"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, AlertTriangle, ChevronRight, RotateCcw } from "lucide-react";

type Question = {
  id: number;
  text: string;
  options: { label: string; value: string }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "你漏报的是哪种收入？",
    options: [
      { label: "W2 工资", value: "w2" },
      { label: "1099-INT 利息", value: "1099int" },
      { label: "1099-B 股票收益", value: "1099b" },
      { label: "其他杂项收入", value: "other" },
    ],
  },
  {
    id: 2,
    text: "漏报的金额大概是多少？",
    options: [
      { label: "小于 $10", value: "less_10" },
      { label: "$10 - $500", value: "10_500" },
      { label: "大于 $500", value: "more_500" },
    ],
  },
  {
    id: 3,
    text: "你是否已经收到了 IRS 的催收或修正信件 (如 CP2000)？",
    options: [
      { label: "是", value: "yes" },
      { label: "否", value: "no" },
    ],
  },
  {
    id: 4,
    text: "你今年的身份是 NRA (F1 学生 < 5年) 吗？",
    options: [
      { label: "是", value: "yes" },
      { label: "否", value: "no" },
    ],
  },
];

export default function AmIScrewedWidget() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getResult = () => {
    const incomeType = answers[0];
    const amount = answers[1];
    const hasLetter = answers[2] === "yes";

    if (hasLetter) {
      return {
        level: "high",
        title: "🔴 红色警报：高风险",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        icon: <AlertCircle className="w-8 h-8 text-red-500" />,
        conclusion: "必须立即处理！",
        description: "你已经收到了 IRS 的信件，这意味着 IRS 已经通过对比系统发现了不一致。如果不立即回复或提交 1040-X，罚金和利息将按天累计，且可能影响你的签证信用记录。",
      };
    }

    if (incomeType === "1099int" && amount === "less_10") {
      return {
        level: "low",
        title: "🟢 绿色提醒：低风险",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
        conclusion: "建议修正但不紧急。",
        description: "银行利息极低（<$10）且 IRS 尚未发信。虽然理论上所有收入都需申报，但这种小额误差通常不会触发审计。建议在有空时提交 1040-X 以保持记录纯洁，尤其是如果你未来计划申请绿卡。",
      };
    }

    return {
      level: "medium",
      title: "🟡 黄色预警：中风险",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
      conclusion: "强烈建议尽快修正。",
      description: "涉及 W2 或股票方案，且金额超过了忽略不计的范围。IRS 的自动化核对系统通常在 6-12 个月内查出此类不一致。在 4.15 报税截止日前通过 1040-X 主动补救是最佳选择。",
    };
  };

  if (showResult) {
    const result = getResult();
    return (
      <div className={`mt-8 rounded-3xl border-2 ${result.borderColor} ${result.bgColor} p-6 sm:p-8 shadow-xl transition-all animate-in fade-in zoom-in duration-300`}>
        <div className="flex items-center gap-4 mb-6">
          {result.icon}
          <h3 className={`text-2xl font-bold ${result.color}`}>{result.title}</h3>
        </div>
        <div className="space-y-4">
          <p className="text-brand-ink text-lg font-semibold">{result.conclusion}</p>
          <p className="text-brand-ink/70 leading-relaxed">{result.description}</p>
          <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-pink/20 text-brand-ink font-semibold hover:bg-brand-pink/5 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              重新判定
            </button>
            <Link
              href="#how-to-amend"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-brand-pinkdeep text-white font-bold hover:bg-brand-pinkhover shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              查看补救操作指南
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="risk-widget" className="mt-8 rounded-3xl border border-brand-pink/20 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(244,185,200,0.2)]">
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-pinkdeep">Step {currentStep + 1} of {questions.length}</span>
          <span className="text-xs text-brand-ink/40 font-medium">风险判定工具</span>
        </div>
        <div className="h-1.5 w-full bg-brand-pink/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-pinkdeep transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="min-h-[300px] flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-ink mb-8 leading-tight">
          {questions[currentStep].text}
        </h3>

        <div className="grid gap-3 sm:grid-cols-2 mt-auto">
          {questions[currentStep].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="group relative flex items-center justify-between p-4 rounded-2xl border-2 border-brand-pink/10 bg-brand-pink/[0.02] hover:border-brand-pinkdeep hover:bg-brand-pink/[0.05] transition-all text-left"
            >
              <span className="font-semibold text-brand-ink group-hover:text-brand-pinkdeep transition-colors">
                {option.label}
              </span>
              <div className="w-6 h-6 rounded-full border-2 border-brand-pink/20 group-hover:border-brand-pinkdeep group-hover:bg-brand-pinkdeep/10 flex items-center justify-center transition-all">
                <div className="w-2 h-2 rounded-full bg-brand-pinkdeep opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
