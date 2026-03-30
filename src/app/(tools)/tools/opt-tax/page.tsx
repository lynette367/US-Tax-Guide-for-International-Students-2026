"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

type ViewState = "quiz" | "result" | "exit";

type AnswerState = {
  status: string;
  income: string;
  entryYear: string;
  taxYear: string;
  form1042s: string;
  fica: string;
  toolPref: string;
  goal: string;
};

const totalSteps = 8;

export default function OptTaxToolPage() {
  const currentYear = new Date().getFullYear();
  const entryYears = Array.from({ length: 10 }, (_, index) => currentYear - 8 + index);
  const taxYearOptions = [currentYear - 1, currentYear];

  const [step, setStep] = useState(1);
  const [view, setView] = useState<ViewState>("quiz");
  const [answers, setAnswers] = useState<AnswerState>({
    status: "",
    income: "",
    entryYear: "",
    taxYear: "",
    form1042s: "",
    fica: "",
    toolPref: "",
    goal: "",
  });

  const f1CalendarYear = useMemo(() => {
    if (!answers.entryYear || !answers.taxYear) return null;
    const entry = Number(answers.entryYear);
    const tax = Number(answers.taxYear);
    if (Number.isNaN(entry) || Number.isNaN(tax)) return null;
    return Math.max(1, tax - entry + 1);
  }, [answers.entryYear, answers.taxYear]);

  const result = useMemo(() => {
    const yearCount = f1CalendarYear ?? 1;
    const complexIncome = answers.income === "complex";
    const has1042s = answers.form1042s === "yes";
    const formUnknown = answers.form1042s === "notSure";
    const ficaUnknown = answers.fica === "unknown";
    const wantsConfirm = answers.goal === "confirm";

    const needsConfirm =
      complexIncome || has1042s || formUnknown || ficaUnknown || wantsConfirm;
    const likelyNonresident = yearCount <= 5;

    let path: "nonresident" | "resident" | "confirm" = "resident";
    if (needsConfirm) {
      path = "confirm";
    } else if (likelyNonresident) {
      path = "nonresident";
    }

    return { needsConfirm, path, yearCount };
  }, [answers, f1CalendarYear]);

  const progressStep = view === "result" ? totalSteps : step;
  const progressPercent = Math.round((progressStep / totalSteps) * 100);

  const goNext = () => {
    if (step >= totalSteps) {
      setView("result");
      return;
    }
    setStep(step + 1);
  };

  const handleAnswer = (key: keyof AnswerState, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));

    if (key === "status" && value === "no") {
      setView("exit");
      return;
    }

    if (key === "entryYear" || key === "taxYear") {
      return;
    }

    if (step >= totalSteps) {
      setView("result");
      return;
    }

    setStep(step + 1);
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q1
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你今年是否仍是 F-1 身份，并且 OPT 期间有收入？
            </h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("status", "yes")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                是
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("status", "no")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                不是
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q2
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你今年的收入只有工资 W-2 吗？
            </h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("income", "w2")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                只有 W-2
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("income", "complex")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                还有 1099/投资/自雇
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q3
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你第一次以 F-1 身份入境美国是哪一年？
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              <select
                value={answers.entryYear}
                onChange={(event) =>
                  setAnswers((prev) => ({
                    ...prev,
                    entryYear: event.target.value,
                  }))
                }
                className="w-full rounded-full border border-brand-pink/40 bg-white px-5 py-3 text-sm text-brand-ink shadow-sm focus:border-brand-pinkdeep focus:outline-none"
              >
                <option value="">请选择入境年份</option>
                {entryYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={goNext}
                disabled={!answers.entryYear}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover disabled:cursor-not-allowed disabled:opacity-60"
              >
                下一题
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q4
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你现在要报的是哪一年的税？
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              <select
                value={answers.taxYear}
                onChange={(event) =>
                  setAnswers((prev) => ({
                    ...prev,
                    taxYear: event.target.value,
                  }))
                }
                className="w-full rounded-full border border-brand-pink/40 bg-white px-5 py-3 text-sm text-brand-ink shadow-sm focus:border-brand-pinkdeep focus:outline-none"
              >
                <option value="">请选择报税年度</option>
                {taxYearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {f1CalendarYear && (
                <p className="text-sm text-brand-ink/70">
                  按日历年，你大约是 F1 的第 {f1CalendarYear} 年。
                </p>
              )}
              <button
                type="button"
                onClick={goNext}
                disabled={!answers.taxYear}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover disabled:cursor-not-allowed disabled:opacity-60"
              >
                下一题
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q5
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你是否收到过 1042-S 或学校奖学金相关收入？
            </h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("form1042s", "yes")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                有
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("form1042s", "no")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                没有
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("form1042s", "notSure")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                不确定
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q6
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你今年工资单/W-2 上有社保医保税扣款吗？
            </h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("fica", "yes")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                有
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("fica", "no")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                没有
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("fica", "unknown")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                我不确定
              </button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q7
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你是否愿意使用更适合国际学生的报税工具？
            </h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("toolPref", "yes")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                愿意
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("toolPref", "no")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                不太想
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("toolPref", "notSure")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                无所谓
              </button>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q8
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你更看重哪种结果？
            </h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("goal", "save")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                省钱自己做，但别选错
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("goal", "fast")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                快速搞定，花点小钱也行
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("goal", "confirm")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                需要有人确认一下
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderResult = () => {
    const pathCopy = {
      nonresident: {
        title: "推荐路径：更像非居民（1040NR / 8843）",
        hint:
          "你的在美年限较短，优先确认非居民路径，避免走默认居民流程。",
      },
      resident: {
        title: "推荐路径：更像居民（1040 + 附表）",
        hint: "你的在美年限较长，居民路径可能更适配。",
      },
      confirm: {
        title: "推荐路径：先确认再选工具",
        hint: "你的情况偏复杂或信息不足，建议先做路径确认。",
      },
    } as const;

    const toolHint = (() => {
      if (result.path === "nonresident") {
        return answers.toolPref === "yes"
          ? "可考虑 Sprintax 等非居民路径工具。"
          : "确保工具支持 1040NR/8843 路径。";
      }
      if (result.path === "resident") {
        return "居民工具通常更匹配，但仍需核对州税。";
      }
      return "先做确认，再决定使用哪类工具。";
    })();

    return (
      <div className="soft-card">
        <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
          结果
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
          {pathCopy[result.path].title}
        </h2>
        <p className="mt-3 text-sm text-brand-ink/70">
          {pathCopy[result.path].hint}
        </p>
        <p className="mt-3 text-sm text-brand-ink/70">{toolHint}</p>
        <div className="mt-6 rounded-[24px] border border-brand-pink/40 bg-white/90 p-5">
          <p className="text-sm font-semibold">下一步清单</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-ink/75">
            <li>先确认你的身份路径与材料清单。</li>
            <li>准备 W-2/1099/1042-S/护照/I-20 等材料。</li>
            <li>选择对应工具并提前核对州税要求。</li>
            <li>提交前做一次 10 分钟自检。</li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/guides"
            className="inline-flex w-full items-center justify-center rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
          >
            更多指南
          </Link>
        </div>
      </div>
    );
  };

  const renderExit = () => {
    return (
      <div className="soft-card">
        <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
          提示
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          这套判断更适合 F1/OPT 人群
        </h2>
        <p className="mt-3 text-sm text-brand-ink/70">
          如果你不是 F1/OPT 或收入类型更复杂，建议先查看指南或找专业人士确认。
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/guides"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
          >
            去 Guides
          </Link>
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
          >
            回到首页
          </Link>
        </div>
      </div>
    );
  };

  return (
    <main className="pb-8 text-brand-ink">
      <section className="px-4 py-12 sm:py-16">
        <div className="page-shell">
          <div className="mx-auto flex max-w-5xl flex-col lg:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-6">
              <Breadcrumbs 
                  items={[
                      { label: "报税工具", href: "/tools" },
                      { label: "身份自测" }
                  ]} 
              />
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    if (step === 1) {
                      window.location.href = "/";
                    } else {
                      setStep(step - 1);
                    }
                  }}
                  className="group flex items-center gap-2 text-sm font-semibold text-brand-ink/60 hover:text-brand-ink transition"
                >
                  <span className="text-lg transition-transform group-hover:-translate-x-1">
                    ←
                  </span>
                  {step === 1 ? "返回首页" : "返回上一题"}
                </button>
              </div>

              <div className="mb-2">
                <h1 className="text-3xl sm:text-4xl font-bold text-brand-ink leading-tight">
                  2026 留学生报税身份自测 (SPT 计算器)
                </h1>
                <p className="mt-3 text-brand-ink/70 leading-relaxed max-w-2xl">
                  不确定是 NRA 还是 Resident？使用我们的 SPT 自动计算器。专为留学生设计，涵盖 F1 签证 5 年豁免规则。
                </p>
              </div>

              <div className="rounded-[20px] border border-brand-pink/40 bg-white/90 p-4 shadow-[0_12px_40px_rgba(244,185,200,0.25)]">
                <div className="flex items-center justify-between text-xs text-brand-ink/60">
                  <span>第 {progressStep}/{totalSteps} 题</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-brand-pink/30">
                  <div
                    className="h-2 rounded-full bg-brand-pinkdeep transition-all"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {view === "quiz" && renderQuestion()}
              {view === "result" && renderResult()}
              {view === "exit" && renderExit()}

              {/* SPT Educational Content */}
              <div className="mt-12 space-y-10 border-t border-brand-pink/20 pt-12 text-brand-ink">
                <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-pink/20 text-brand-pinkdeep text-sm">01</span>
                    什么是 Substantial Presence Test (SPT)？
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="leading-relaxed text-brand-ink/80">
                      IRS 通过 <strong>Substantial Presence Test (SPT)</strong>，即“实质居住测试”，来判定你是否属于美国税法上的“居民外籍人士”(Resident Alien) 或“非居民外籍人士”(Non-Resident Alien)。
                    </p>
                    <div className="my-6 p-6 rounded-2xl bg-white/50 border border-brand-pink/20 shadow-sm">
                      <p className="text-sm font-bold text-brand-pinkdeep mb-3 uppercase tracking-wider">SPT 计算公式</p>
                      <div className="text-lg sm:text-xl font-mono text-center py-4 bg-brand-ink/5 rounded-xl">
                        当年天数 + <span className="text-brand-pinkdeep">1/3</span> × (前一年天数) + <span className="text-brand-pinkdeep">1/6</span> × (前两年天数) ≥ 183
                      </div>
                      <p className="mt-4 text-xs text-brand-ink/60 text-center italic">
                        * 如果计算结果大于或等于 183 天，你即被视为 Resident Alien。
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-pink/20 text-brand-pinkdeep text-sm">02</span>
                    进阶规则：为什么 F1/J1 留学生通常被判定为 NRA？
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="p-6 rounded-2xl border border-brand-pink/10 bg-white/40">
                      <h3 className="text-lg font-bold mb-3">“豁免个人” (Exempt Individual) 规则详解</h3>
                      <p className="text-sm text-brand-ink/75 leading-relaxed">
                        F-1 或 J-1 身份的留学生在税法上属于 <strong>Exempt Individual</strong>。这并不意味着豁免缴税，而是意味着你在计算 SPT 时，前 5 个日历年的居住天数<strong>不计入</strong> 183 天的统计。
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl border border-brand-pink/10 bg-white/40">
                      <h3 className="text-lg font-bold mb-3">如何计算 F1 的 5 年豁免期？</h3>
                      <p className="text-sm text-brand-ink/75 leading-relaxed">
                        5 年豁免期是按<strong>日历年 (Calendar Year)</strong> 计算的。只要你在某一年内在美国停留过（哪怕只有 1 天），该年即算作 1 年。例如，2023 年 12 月 31 日入境，2023 年就是你的第 1 年。
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-pink/20 text-brand-pinkdeep text-sm">03</span>
                    判定身份后的下一步建议
                  </h2>
                  <div className="rounded-3xl bg-brand-pinkdeep text-white p-8 shadow-xl">
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4 text-xl">📄</div>
                        <h4 className="text-lg font-bold mb-2">如果你是 NRA (非居民)</h4>
                        <p className="text-sm text-white/90 leading-relaxed mb-4">
                          你通常需要申报 1040-NR。恭喜，你大概率符合 <strong>$5,000 中美税务协定 (Treaty)</strong> 免税额。
                        </p>
                        <Link href="/guides/1042-vs-1042-s" className="text-xs font-bold underline underline-offset-4 hover:text-white transition">
                          查看 1042-S 报税攻略 →
                        </Link>
                      </div>
                      <div className="pt-8 sm:pt-0 sm:border-l border-white/20 sm:pl-8">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4 text-xl">💻</div>
                        <h4 className="text-lg font-bold mb-2">如果你是 RA (居民)</h4>
                        <p className="text-sm text-white/90 leading-relaxed mb-4">
                          你现在和美国公民一样需要申报 1040 全球所得。
                        </p>
                        <p className="text-xs font-medium text-white/70">
                          建议使用 TurboTax、H&R Block 或 Cash App Taxes 等主流软件进行申报。
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Hidden SEO Content */}
              <div className="sr-only">
                <h2>How to Determine F1 Tax Status (Resident vs Non-Resident)</h2>
                <p>
                  Use this tool to determine if you should file as a Resident Alien
                  or Non-Resident Alien for tax purposes. This affects your eligibility
                  for F1 Tax Refund and which forms (1040 vs 1040-NR) you need to use.
                </p>
                <ol>
                  <li>
                    <strong>Step 1: Check Visa Status</strong> - Are you currently on an
                    F-1 Visa and receiving income during OPT (Optional Practical Training)?
                  </li>
                  <li>
                    <strong>Step 2: Identify Income Sources</strong> - Do you have income
                    reported on Form W-2, Form 1099, or self-employment income?
                  </li>
                  <li>
                    <strong>Step 3: Substantial Presence Test (SPT)</strong> -
                    Verify your entry year to see if you are exempt from the Substantial
                    Presence Test (usually first 5 calendar years for F1 students).
                  </li>
                  <li>
                    <strong>Step 4: Determine Tax Year</strong> - Confirm which tax year
                    you are filing for (e.g., 2025, 2026) to apply correct IRS rules.
                  </li>
                  <li>
                    <strong>Step 5: Check for 1042-S</strong> - Did you receive Form
                    1042-S for scholarships or treaty-exempt income? This is common for
                    international students.
                  </li>
                  <li>
                    <strong>Step 6: FICA Tax Exemption</strong> - Check your pay stubs
                    for Social Security and Medicare tax deductions. Non-residents on F1
                    are typically exempt.
                  </li>
                  <li>
                    <strong>Step 7: Choose Filing Method</strong> - Decide between using
                    DIY tax software (like Sprintax for non-residents) or hiring a CPA.
                  </li>
                  <li>
                    <strong>Step 8: Maximize F1 Tax Refund</strong> - Ensure you claim
                    all treaty benefits and deductions available to your specific status
                    (Resident vs Non-Resident).
                  </li>
                </ol>
              </div>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Substantial Presence Test (SPT) 计算器",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Web",
                    "description":
                      "专为留学生设计的 SPT 自动计算器，涵盖 F1 签证 5 年豁免规则，助力判定报税身份。",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD",
                    },
                  }),
                }}
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                      {
                        "@type": "Question",
                        "name": "什么是 Substantial Presence Test (SPT)？",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "SPT 是 IRS 用于判定外籍人士是否属于美国税法居民的测试。计算公式为：当年在美天数 + 1/3 前一年天数 + 1/6 前两年天数。如果总和达 183 天，则被视为居民。",
                        },
                      },
                      {
                        "@type": "Question",
                        "name": "F1 留学生前 5 年算 NRA 吗？",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "是的。F1 留学生被视为 Exempt Individual，在前 5 个日历年内，其在美天数不计入 SPT 统计，因此通常判定为 NRA（非居民）。",
                        },
                      },
                      {
                        "@type": "Question",
                        "name": "报税身份判定错会有什么后果？",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "身份判定错误可能导致税务欺诈风险、丢失 Treaty 优惠或影响未来的绿卡申请。务必在申报前确认身份。",
                        },
                      },
                    ],
                  }),
                }}
              />
            </div>

            <aside className="w-full lg:w-80 shrink-0 space-y-6">
              <div className="soft-card !p-6">
                <h3 className="font-bold text-brand-ink mb-4">相关报税指南</h3>
                <div className="space-y-4">
                  <Link href="/guides/w2-missing-guide" className="group block">
                    <p className="text-[10px] text-brand-pinkdeep font-bold mb-1 uppercase tracking-wider">01. W-2 缺失补救</p>
                    <h4 className="text-sm font-bold group-hover:text-brand-pinkdeep transition leading-snug">W-2 还没收到怎么办？教你 4 步强制补救</h4>
                  </Link>
                  <Link href="/guides/form-8843-guide" className="group block pt-4 border-t border-brand-pink/10">
                    <p className="text-[10px] text-brand-pinkdeep font-bold mb-1 uppercase tracking-wider">02. 8843 教程</p>
                    <h4 className="text-sm font-bold group-hover:text-brand-pinkdeep transition leading-snug">Form 8843 填写保姆级教程 (2026版)</h4>
                  </Link>
                  <Link href="/guides/form-8843-amend-guide" className="group block pt-4 border-t border-brand-pink/10">
                    <p className="text-[10px] text-brand-pinkdeep font-bold mb-1 uppercase tracking-wider">03. 修正申报</p>
                    <h4 className="text-sm font-bold group-hover:text-brand-pinkdeep transition leading-snug">8843 填错了/漏填了？手把手教你修正</h4>
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl bg-[#f2dac4]/30 border border-[#e6b8a2]/30 p-5 shadow-sm">
                <p className="text-xs text-brand-ink/70 leading-relaxed font-medium">
                  💡 <span className="font-bold text-brand-ink">报税提醒：</span> 大多数 F1 学生在美前 5 年均为 Non-resident，务必确认后再选择报税工具，避免身份违规。
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
