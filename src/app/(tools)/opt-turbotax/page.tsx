"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "../../../components/Breadcrumbs";

const totalSteps = 8;
const entryYears = Array.from({ length: 9 }, (_, index) => 2018 + index);

const getTaxYearOptions = () => {
  const currentYear = new Date().getFullYear();
  return [currentYear - 1, currentYear];
};

const fearCopy: Record<string, string> = {
  paperwork: "你最担心的是补材料太麻烦。",
  refund: "你最担心的是退税变慢或变少。",
  status: "你最担心的是影响后续签证/身份。",
  right: "你最在意的是一次做对。",
};

type ViewState = "quiz" | "result" | "exit";

type AnswerState = {
  isF1Opt: string;
  income: string;
  entryYear: string;
  taxYear: string;
  askedResident: string;
  fica: string;
  goal: string;
  fear: string;
};

const defaultAnswers: AnswerState = {
  isF1Opt: "",
  income: "",
  entryYear: "",
  taxYear: "",
  askedResident: "",
  fica: "",
  goal: "",
  fear: "",
};

export default function OptTurboTaxPage() {
  const [step, setStep] = useState(1);
  const [view, setView] = useState<ViewState>("quiz");
  const [answers, setAnswers] = useState<AnswerState>(defaultAnswers);
  const [unlockOpen, setUnlockOpen] = useState(false);
  const [unlockChoice, setUnlockChoice] = useState<"basic" | "confirm" | null>(
    null
  );
  const [unlockShown, setUnlockShown] = useState(false);

  const taxYearOptions = useMemo(getTaxYearOptions, []);

  const f1CalendarYear = useMemo(() => {
    if (!answers.entryYear || !answers.taxYear) return null;
    const entry = Number(answers.entryYear);
    const tax = Number(answers.taxYear);
    if (Number.isNaN(entry) || Number.isNaN(tax)) return null;
    return Math.max(1, tax - entry + 1);
  }, [answers.entryYear, answers.taxYear]);

  const result = useMemo(() => {
    const yearCount = f1CalendarYear ?? 1;
    const isComplex = answers.income === "complex";
    const notSureResident = answers.askedResident === "notSure";
    const ficaUnknown = answers.fica === "unknown";

    let risk: "high" | "mid" | "low" = yearCount <= 5 ? "mid" : "low";

    if (yearCount <= 5 && (isComplex || notSureResident || ficaUnknown)) {
      risk = "high";
    } else if (yearCount > 5 && (isComplex || notSureResident || ficaUnknown)) {
      risk = "mid";
    }

    const shouldConfirm = isComplex || notSureResident || ficaUnknown;

    return {
      risk,
      shouldConfirm,
    };
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

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleAnswer = (key: keyof AnswerState, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));

    if (key === "isF1Opt" && value === "no") {
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

  const openUnlock = (choice: "basic" | "confirm") => {
    setUnlockOpen(true);
    setUnlockChoice(choice);
    setUnlockShown(false);
  };

  const applyUnlock = (choice: "basic" | "confirm") => {
    setUnlockChoice(choice);
    setUnlockShown(true);
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q1 / 筛选
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你今年是否仍然是 F-1 身份，并且正在 OPT/或 OPT 期间有收入？
            </h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("isF1Opt", "yes")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                是
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("isF1Opt", "no")}
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
              Q2 / 收入简化
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你今年的收入是不是只有工资 W-2（没有股票/加密/多份 1099/自雇）？
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
                还有其他（1099/投资/自雇）
              </button>
              <button
                type="button"
                onClick={goBack}
                className="mt-2 w-full text-center text-sm text-brand-ink/40 hover:text-brand-ink transition"
              >
                退回
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q3 / 入境年份
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你第一次以 F-1 身份入境美国是哪一年？
            </h2>
            <p className="mt-3 text-sm text-brand-ink/70">
              这里按日历年算：只要在某年哪怕 12 月来过一天，这一年也算 1 年。比如
              2025 年 7 月入境，2025 算第 1 年；到 2026 年 4 月，算第 2 个日历年。
            </p>
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
              <button
                type="button"
                onClick={goBack}
                className="mt-2 w-full text-center text-sm text-brand-ink/40 hover:text-brand-ink transition"
              >
                退回
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q4 / 报税年度
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
                  按日历年，你现在大约是 F1 的第 {f1CalendarYear} 年。
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
              <button
                type="button"
                onClick={goBack}
                className="mt-2 w-full text-center text-sm text-brand-ink/40 hover:text-brand-ink transition"
              >
                退回
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q5 / 软件提问
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你在报税软件里，有没有被问到：“你是不是美国税务居民（resident）？”
            </h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("askedResident", "yes")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                我记得问过
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("askedResident", "notSure")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                没看到/不记得
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("askedResident", "notStarted")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                我还没开始报
              </button>
              <button
                type="button"
                onClick={goBack}
                className="col-span-1 sm:col-span-3 mt-2 w-full text-center text-sm text-brand-ink/40 hover:text-brand-ink transition"
              >
                退回
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q6 / 工资单信号
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你今年工资单/ W-2 上，有没有扣过社保医保税（常见写法：Social Security /
              Medicare）？
            </h2>
            <p className="mt-3 text-sm text-brand-ink/70">
              不知道也没关系，这会影响“你是否需要确认”。
            </p>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("fica", "yes")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                有扣过
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("fica", "no")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                没扣过
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("fica", "unknown")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                我不知道
              </button>
              <button
                type="button"
                onClick={goBack}
                className="mt-2 w-full text-center text-sm text-brand-ink/40 hover:text-brand-ink transition"
              >
                退回
              </button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q7 / 目标偏好
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              你最想实现的是哪一种？
            </h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("goal", "save")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                我想最省钱自己报，但别选错
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("goal", "fast")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                我想最快报完，不介意花点小钱
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("goal", "confirm")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                我只想有人告诉我“我这样选会不会错”
              </button>
              <button
                type="button"
                onClick={goBack}
                className="mt-2 w-full text-center text-sm text-brand-ink/40 hover:text-brand-ink transition"
              >
                退回
              </button>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="soft-card">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
              Q8 / 动机
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
              如果你选错了报税身份/表格，最怕哪件事？
            </h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleAnswer("fear", "paperwork")}
                className="w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
              >
                以后补材料很麻烦
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("fear", "refund")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                退税变慢/变少
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("fear", "status")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                影响以后签证/身份
              </button>
              <button
                type="button"
                onClick={() => handleAnswer("fear", "right")}
                className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                我只是想一次做对
              </button>
              <button
                type="button"
                onClick={goBack}
                className="mt-2 w-full text-center text-sm text-brand-ink/40 hover:text-brand-ink transition"
              >
                退回
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderResult = () => {
    const labelMap = {
      high: "高风险：先别用 TurboTax 默认流程",
      mid: "中风险：你可能可以用，但要先确认 2 个点",
      low: "低风险：你更可能可以按居民路径走",
    } as const;

    const fearLine = answers.fear ? fearCopy[answers.fear] : "";

    return (
      <div className="soft-card">
        <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
          你的结论
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
          {labelMap[result.risk]}
        </h2>
        {fearLine && (
          <p className="mt-3 text-sm text-brand-ink/70">{fearLine}</p>
        )}
        <div className="mt-6 rounded-[24px] border border-brand-pink/40 bg-white/90 p-5">
          <p className="text-sm font-semibold text-brand-ink">下一步怎么做</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-ink/75">
            <li>下一步 1：先确认你属于哪条报税身份路径</li>
            <li>下一步 2：按你的路径准备材料清单</li>
            <li>下一步 3：提交前做 10 分钟自检（避免低级错误）</li>
          </ul>
        </div>
        <div className="mt-6 grid gap-3">
          <button
            type="button"
            onClick={() => openUnlock("basic")}
            className="cta-breathe w-full rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_25px_60px_rgba(200,127,155,0.45)] transition hover:bg-brand-pinkhover"
          >
            解锁我的结论 + 路径清单（$3.99）
          </button>
          <button
            type="button"
            onClick={() => openUnlock("confirm")}
            className="w-full rounded-full border border-brand-ink/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
          >
            我想要一次人工确认（$9.99）
          </button>
          <p className="text-xs text-brand-ink/60">
            不需要学税法，但你需要知道：你该点哪个选项，别把自己报错。
          </p>
          {result.shouldConfirm && (
            <p className="text-xs text-brand-ink/60">
              你的回答信息偏复杂，建议优先选择一次确认。
            </p>
          )}
        </div>
        <details className="mt-6 rounded-[20px] border border-brand-pink/30 bg-brand-pink/10 p-4 text-sm text-brand-ink/70">
          <summary className="cursor-pointer font-semibold text-brand-ink">
            可展开的解释（术语版）
          </summary>
          <p className="mt-3">
            这里涉及 NRA/RA 与 SPT 等判断规则。F1 前 5 个日历年常被视为 exempt
            individual，因此很多人不走居民路径。若不确定，可通过判断清单复核。
          </p>
        </details>
      </div>
    );
  };

  const renderExit = () => {
    return (
      <div className="soft-card">
        <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
          结果
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          你可能不在这条流程的目标范围
        </h2>
        <p className="mt-3 text-sm text-brand-ink/70">
          建议找专业人士确认，或者回首页看看是否有更适合你的路径说明。
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-pinkdeep px-6 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)] transition hover:bg-brand-pinkhover"
          >
            回到首页
          </Link>
        </div>
      </div>
    );
  };

  return (
    <main className="pb-16 text-brand-ink">
      <section className="px-4 py-10 sm:py-14">
        <div className="page-shell">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <Breadcrumbs 
                items={[
                    { label: "报税工具", href: "/tools" },
                    { label: "TurboTax 判定" }
                ]} 
            />
            <div>
              <p className="text-xs sm:text-sm text-brand-ink/60">
                不用懂术语，回答 8 个问题，拿到你的报税路径建议。
              </p>
              <h1 className="mt-2 text-2xl sm:text-3xl font-semibold">
                OPT 可以用 TurboTax 吗？
              </h1>
            </div>

            <div className="rounded-[20px] border border-brand-pink/40 bg-white/90 p-4 shadow-[0_12px_40px_rgba(244,185,200,0.2)]">
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

            <div className="grid gap-3">
              <details className="rounded-[20px] border border-brand-pink/30 bg-white/80 p-4 text-sm text-brand-ink/70">
                <summary className="cursor-pointer font-semibold text-brand-ink">
                  我为什么需要回答这些？
                </summary>
                <ul className="mt-3 space-y-2">
                  <li>这些问题对应的是报税软件里的关键分叉点。</li>
                  <li>不同路径需要的材料清单不一样。</li>
                  <li>提前确认能避免走错“默认流程”。</li>
                  <li>你的回答越清楚，风险就越低。</li>
                </ul>
              </details>
              <details className="rounded-[20px] border border-brand-pink/30 bg-white/80 p-4 text-sm text-brand-ink/70">
                <summary className="cursor-pointer font-semibold text-brand-ink">
                  展开阅读：为什么会有人选错 TurboTax
                </summary>
                <ul className="mt-3 space-y-2">
                  <li>论坛里混杂了不同身份的回答，容易误判。</li>
                  <li>工具默认流程倾向“最常见的人群”。</li>
                  <li>收入结构、州税要求不同，路径就会不同。</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </section>

      {unlockOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setUnlockOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-[28px] bg-white p-6 text-brand-ink shadow-[0_30px_80px_rgba(30,20,30,0.3)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-ink/50">
                  解锁
                </p>
                <h3 className="mt-2 text-xl font-semibold">解锁你的报税路径</h3>
              </div>
              <button
                type="button"
                onClick={() => setUnlockOpen(false)}
                className="rounded-full border border-brand-ink/20 px-3 py-1 text-xs text-brand-ink/60"
              >
                关闭
              </button>
            </div>
            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={() => applyUnlock("basic")}
                className={`w-full rounded-full px-5 py-3 text-sm font-semibold transition ${unlockChoice === "basic"
                    ? "bg-brand-pinkdeep text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)]"
                    : "border border-brand-ink/30 bg-white"
                  }`}
              >
                我愿意解锁（$3.99）
              </button>
              <button
                type="button"
                onClick={() => applyUnlock("confirm")}
                className={`w-full rounded-full px-5 py-3 text-sm font-semibold transition ${unlockChoice === "confirm"
                    ? "bg-brand-pinkdeep text-brand-ink shadow-[0_20px_50px_rgba(200,127,155,0.4)]"
                    : "border border-brand-ink/30 bg-white"
                  }`}
              >
                我需要一次确认（$9.99）
              </button>
            </div>

            {unlockShown && (
              <div className="mt-5 rounded-[20px] border border-brand-pink/30 bg-brand-pink/10 p-4 text-sm text-brand-ink/70">
                <p className="font-semibold text-brand-ink">下一步</p>
                <ul className="mt-2 space-y-1">
                  <li>1️⃣ 填写邮箱</li>
                  <li>2️⃣ 我会把 PayPal 付款链接发给你</li>
                  <li>3️⃣ 付款后，你会收到对应内容</li>
                </ul>
              </div>
            )}

            <div className="mt-5 grid gap-3">
              <input
                type="email"
                required
                placeholder="邮箱（必填）"
                className="w-full rounded-full border border-brand-pink/40 bg-white px-4 py-3 text-sm text-brand-ink shadow-sm focus:border-brand-pinkdeep focus:outline-none"
              />
              <input
                type="text"
                placeholder="微信（可选）"
                className="w-full rounded-full border border-brand-pink/40 bg-white px-4 py-3 text-sm text-brand-ink shadow-sm focus:border-brand-pinkdeep focus:outline-none"
              />
              <p className="text-xs text-brand-ink/60">
                支付接入中，提交后会收到付款方式与交付内容。
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
