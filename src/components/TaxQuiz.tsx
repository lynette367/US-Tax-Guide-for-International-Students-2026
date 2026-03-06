"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
    id: string;
    text: string;
    options: {
        label: string;
        value: string;
        next?: string;
    }[];
};

const questions: Record<string, Question> = {
    q1: {
        id: "q1",
        text: "Q1 你的身份类别？",
        options: [
            { label: "F-1 学生", value: "f1", next: "q2" },
            { label: "J-1 访问", value: "j1", next: "other" },
            { label: "其他", value: "other", next: "other" },
        ],
    },
    q2: {
        id: "q2",
        text: "Q2 2025 年在美国待了多久？",
        options: [
            { label: "超过 5 年", value: "gt5", next: "resident" },
            { label: "不足 5 年", value: "lt5", next: "q3" },
        ],
    },
    q3: {
        id: "q3",
        text: "Q3 2025 年是否有收入？",
        options: [
            { label: "有收入 (W2/1099)", value: "yes", next: "nr_income" },
            { label: "没收入", value: "no", next: "nr_no_income" },
        ],
    },
};

type Result = {
    title: string;
    description: string;
    links: { label: string; url: string }[];
};

const results: Record<string, Result> = {
    other: {
        title: "非本教程目标用户",
        description: "本教程主要针对 F-1 学生身份。J-1 或其他身份请咨询专业税务顾问或学校相关中心。",
        links: [],
    },
    resident: {
        title: "身份结果：Resident (居民报税)",
        description: "根据五年规则，你今年通常应按 Resident 身份申报，使用 Form 1040。",
        links: [
            { label: "Form 1040 下载 (IRS)", url: "https://www.irs.gov/pub/irs-pdf/f1040.pdf" },
        ],
    },
    nr_no_income: {
        title: "身份结果：Non-resident (无收入)",
        description: "你属于 Non-resident 且没有收入。你必须填写 Form 8843 来声明你的豁免身份状态。",
        links: [
            { label: "Form 8843 详情 (IRS)", url: "https://www.irs.gov/forms-pubs/about-form-8843" },
        ],
    },
    nr_income: {
        title: "身份结果：Non-resident (有收入)",
        description: "你属于 Non-resident 且有收入。你需要填写 Form 8843 以及 Form 1040-NR。",
        links: [
            { label: "Form 8843 详情 (IRS)", url: "https://www.irs.gov/forms-pubs/about-form-8843" },
            { label: "Form 1040-NR 下载 (IRS)", url: "https://www.irs.gov/pub/irs-pdf/f1040nr.pdf" },
        ],
    },
};

export default function TaxQuiz() {
    const [currentStep, setCurrentStep] = useState<string>("q1");
    const [history, setHistory] = useState<string[]>([]);

    const handleOptionSelect = (next: string) => {
        setHistory([...history, currentStep]);
        setCurrentStep(next);
    };

    const handleReset = () => {
        setCurrentStep("q1");
        setHistory([]);
    };

    const isResult = results[currentStep] !== undefined;

    return (
        <div className="my-8 rounded-[28px] border border-brand-pink/40 bg-white/95 p-6 sm:p-8 shadow-[0_20px_60px_rgba(244,185,200,0.25)]">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-brand-ink">
                    30 秒快速自测：我今年需要填 8843 还是 1040-NR？
                </h3>
                {history.length > 0 && (
                    <button
                        onClick={handleReset}
                        className="text-xs font-semibold text-brand-pinkdeep hover:underline"
                    >
                        重新开始
                    </button>
                )}
            </div>

            {!isResult ? (
                <div className="space-y-6">
                    <p className="text-base font-medium text-brand-ink/90">
                        {questions[currentStep].text}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {questions[currentStep].options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleOptionSelect(option.next || "other")}
                                className="rounded-xl border border-brand-pink/30 bg-white px-4 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-pinkdeep hover:bg-brand-pink/5 hover:shadow-sm"
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="rounded-2xl bg-brand-pink/10 p-5">
                    <h4 className="text-lg font-bold text-brand-pinkdeep">
                        {results[currentStep].title}
                    </h4>
                    <p className="mt-2 text-sm text-brand-ink/80 leading-relaxed">
                        {results[currentStep].description}
                    </p>
                    {results[currentStep].links.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-3">
                            {results[currentStep].links.map((link) => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-lg bg-brand-pinkdeep px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brand-pinkhover"
                                >
                                    {link.label}
                                    <svg
                                        className="ml-1.5 h-3.5 w-3.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
