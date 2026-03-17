"use client";

import { useState, useMemo } from "react";
import Link from "next/link";


interface FormData {
  firstName: string;
  lastName: string;
  ssn: string;
  addressUS: string;
  addressForeign: string;
  entryDate: string;
  days2023: string;
  days2024: string;
  days2025: string;
  institutionName: string;
  institutionAddress: string;
  directorName: string;
  directorAddress: string;
  visaHistory: string[];
}

const initialData: FormData = {
  firstName: "",
  lastName: "",
  ssn: "",
  addressUS: "",
  addressForeign: "",
  entryDate: "",
  days2023: "",
  days2024: "",
  days2025: "",
  institutionName: "",
  institutionAddress: "",
  directorName: "Program Director (ISO)",
  directorAddress: "",
  visaHistory: [],
};

export default function Form8843Stepper() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);

  const totalDays = useMemo(() => {
    return (parseInt(data.days2023) || 0) + (parseInt(data.days2024) || 0) + (parseInt(data.days2025) || 0);
  }, [data.days2023, data.days2024, data.days2025]);

  const isResidentAlien = useMemo(() => {
    if (!data.entryDate) return false;
    const year = new Date(data.entryDate).getFullYear();
    return year < 2021; // Simple logic for demo, user suggested < 2019
  }, [data.entryDate]);

  const handleChange = (field: keyof FormData, value: any) => {
    if (field === "firstName" || field === "lastName" || field === "addressUS" || field === "addressForeign") {
      value = value.toUpperCase();
    }
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      {/* Stepper Header */}
      <div className="mb-8 flex justify-between px-2">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition ${
                step >= s ? "bg-brand-pinkdeep text-white" : "bg-brand-pink/20 text-brand-ink/40"
              }`}
            >
              {s}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= s ? "text-brand-pinkdeep" : "text-brand-ink/30"}`}>
              Step {s}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-[32px] border border-brand-pink/30 bg-white/95 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
        {step === 1 && (
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-brand-ink">
                  Part I 基础信息与地址
                </h3>
                <p className="mt-1 text-sm text-brand-ink/60">输入内容将自动转为大写，这是 IRS 推荐的格式。</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50 flex items-center gap-1">
                    名字 First Name
                  </label>
                  <input
                    type="text"
                    value={data.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                    placeholder="如: SAN"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50 flex items-center gap-1">
                    姓氏 Last Name
                  </label>
                  <input
                    type="text"
                    value={data.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                    placeholder="如: ZHANG"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50 flex items-center gap-1">
                  SSN / ITIN
                </label>
                <input
                  type="text"
                  value={data.ssn}
                  onChange={(e) => handleChange("ssn", e.target.value)}
                  className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                  placeholder="XXX-XX-XXXX"
                />
                <p className="text-[11px] text-brand-ink/40 italic">提示：没有 SSN？直接输入 None 即可。</p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50 flex items-center gap-1">
                   美国地址 Address in US
                </label>
                <textarea
                  value={data.addressUS}
                  onChange={(e) => handleChange("addressUS", e.target.value)}
                  rows={2}
                  className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                  placeholder="STREET, CITY, STATE, ZIP"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50 flex items-center gap-1">
                   国外地址 Foreign Address
                </label>
                <textarea
                  value={data.addressForeign}
                  onChange={(e) => handleChange("addressForeign", e.target.value)}
                  rows={2}
                  className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                  placeholder="STREET, CITY, COUNTRY"
                />
              </div>
            </div>

            <div className="hidden lg:block">
               <div className="sticky top-24 rounded-2xl bg-brand-pink/5 border border-brand-pink/20 p-6">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 mb-4">实时预览 (PDF 模拟)</h4>
                 <div className="space-y-4 font-mono text-sm uppercase">
                    <div className="border-b border-brand-pink/20 pb-2">
                       <div className="text-[10px] text-brand-pinkdeep">1a First name and initial / Last name</div>
                       <div className="min-h-[20px]">{data.firstName} {data.lastName}</div>
                    </div>
                    <div className="border-b border-brand-pink/20 pb-2">
                       <div className="text-[10px] text-brand-pinkdeep">1b SSN or ITIN</div>
                       <div className="min-h-[20px]">{data.ssn || "NONE"}</div>
                    </div>
                    <div>
                       <div className="text-[10px] text-brand-pinkdeep">Address</div>
                       <div className="min-h-[40px] whitespace-pre-wrap">{data.addressUS}</div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-brand-ink flex items-center gap-2">
                Part I 居住天数与 I-94 联动
              </h3>
              <p className="mt-1 text-sm text-brand-ink/60">准确记录在美天数是 8843 的核心。</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="https://i94.cbp.dhs.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-sky/20 border border-brand-sky px-6 py-3 text-sm font-bold text-brand-ink transition hover:bg-brand-sky/30"
              >
                🔗 前往 I-94 官网查询记录
              </a>
              <p className="text-xs text-brand-ink/50 max-w-sm">忘记出入境日期？在官网点击 "Get Most Recent I-94" 获取记录。</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50">
                  2025 年在美天数
                </label>
                <input
                  type="number"
                  value={data.days2025}
                  onChange={(e) => handleChange("days2025", e.target.value)}
                  className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                  placeholder="0"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50">
                   2024 年在美天数
                </label>
                <input
                  type="number"
                  value={data.days2024}
                  onChange={(e) => handleChange("days2024", e.target.value)}
                  className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                  placeholder="0"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50">
                   2023 年在美天数
                </label>
                <input
                  type="number"
                  value={data.days2023}
                  onChange={(e) => handleChange("days2023", e.target.value)}
                  className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-brand-pink/20 bg-brand-pink/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
               <div>
                  <p className="text-sm font-bold text-brand-ink/70">三年总计天数 (Physical Days):</p>
                  <p className="text-3xl font-black text-brand-ink">{totalDays} 天</p>
               </div>
               <div className="text-xs text-brand-ink/50 flex items-start gap-2 max-w-sm">
                  <span className="text-lg">💡</span>
                  <span>注意：回国度假、去加拿大/墨西哥旅游的天数不计入。只算物理上踩在美国领土上的日子。哪怕只有 24 小时不在美国，也要扣除。</span>
               </div>
            </div>

            <div className="space-y-1.5 max-w-sm">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50">
                初次入境美国日期 (F/J 身份)
              </label>
              <input
                type="date"
                value={data.entryDate}
                onChange={(e) => handleChange("entryDate", e.target.value)}
                className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
              />
              {isResidentAlien && (
                <div className="mt-3 rounded-lg bg-orange-50 border border-orange-200 p-3 text-xs text-orange-800">
                  ⚠️ 温馨提醒：如果你是 2021 年前入境，可能已经属于 Resident Alien。
                  请先去 <Link href="/tools/opt-tax" className="underline font-bold">身份自测工具</Link> 确认是否仍需填写 8843。
                </div>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-ink flex items-center gap-2">
                  <span className="bg-brand-pink/20 text-brand-pinkdeep px-2 py-0.5 rounded text-sm font-mono">Part III</span>
                  院校与签证信息
                </h3>
                <p className="mt-1 text-sm text-brand-ink/60">留学生身份必须填写的部分。</p>
              </div>

              <div className="grid gap-6 md:grid-cols-1">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50">
                      学校/院校名称
                    </label>
                    <input
                      type="text"
                      value={data.institutionName}
                      onChange={(e) => handleChange("institutionName", e.target.value)}
                      className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                      placeholder=" 如: UNIVERSITY OF TEXAS"
                    />
                    <p className="text-[11px] text-brand-ink/40">提示：去官网搜 "ISO Office Address" 获取准确地址。</p>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50">
                       学校地址
                    </label>
                    <textarea
                      value={data.institutionAddress}
                      onChange={(e) => handleChange("institutionAddress", e.target.value)}
                      rows={2}
                      className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50">
                      学院负责人姓名
                    </label>
                    <input
                      type="text"
                      value={data.directorName}
                      onChange={(e) => handleChange("directorName", e.target.value)}
                      className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50">
                       负责人地址/电话
                    </label>
                    <textarea
                      value={data.directorAddress}
                      onChange={(e) => handleChange("directorAddress", e.target.value)}
                      rows={2}
                      className="w-full rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-3 focus:border-brand-pinkdeep focus:outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/50">
                   签证历史勾选 (2019 - 2024)
                </label>
                <div className="flex flex-wrap gap-3">
                  {["2019", "2020", "2021", "2022", "2023", "2024"].map((year) => (
                    <label key={year} className="flex items-center gap-2 cursor-pointer rounded-xl border-2 border-brand-pink/10 bg-white px-4 py-2 transition hover:border-brand-pinkdeep">
                      <input
                        type="checkbox"
                        checked={data.visaHistory.includes(year)}
                        onChange={(e) => {
                          const next = e.target.checked 
                            ? [...data.visaHistory, year]
                            : data.visaHistory.filter(y => y !== year);
                          handleChange("visaHistory", next);
                        }}
                        className="accent-brand-pinkdeep"
                      />
                      <span className="text-sm font-bold text-brand-ink">{year}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block text-brand-ink">
               <div className="sticky top-24 rounded-2xl bg-brand-pink/5 border border-brand-pink/20 p-6">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 mb-4">实时预览 (PDF 模拟)</h4>
                 <div className="space-y-4 font-mono text-sm uppercase">
                    <div className="border-b border-brand-pink/20 pb-2">
                       <div className="text-[10px] text-brand-pinkdeep">Line 9 Institution Name</div>
                       <div className="min-h-[20px] text-xs">{data.institutionName || "-"}</div>
                    </div>
                    <div className="border-b border-brand-pink/20 pb-2">
                       <div className="text-[10px] text-brand-pinkdeep">Line 10 Program Director</div>
                       <div className="min-h-[20px] text-xs">{data.directorName}</div>
                    </div>
                    <div>
                       <div className="text-[10px] text-brand-pinkdeep">Visa History</div>
                       <div className="min-h-[40px] text-xs flex flex-wrap gap-1">
                          {data.visaHistory.length > 0 ? data.visaHistory.map(y => <span key={y} className="bg-brand-pink/20 px-1 rounded">{y}</span>) : "None"}
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-8">
             <div className="text-center">
              <span className="text-5xl">🎉</span>
              <h3 className="mt-4 text-2xl font-bold text-brand-ink">
                你的填写参考清单已生成
              </h3>
              <p className="mt-2 text-brand-ink/60">请根据下方信息完成最后的 PDF 填写并邮寄。</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
               <div className="rounded-2xl border-2 border-brand-pink/40 bg-white p-6 shadow-lg">
                  <h4 className="font-bold text-brand-ink border-b border-brand-pink/20 pb-2 mb-4">第一步：获取表格</h4>
                  <a 
                    href="https://www.irs.gov/pub/irs-pdf/f8843.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-brand-pinkdeep py-4 text-white font-bold transition hover:bg-brand-pinkhover shadow-lg"
                  >
                    📥 下载 2026 最新官方 8843 PDF
                  </a>
                  <p className="mt-3 text-[11px] text-brand-ink/50 text-center">建议使用 Adobe Acrobat 打开以确保显示正常。</p>
               </div>

               <div className="rounded-2xl border-2 border-brand-pink/40 bg-white p-6 shadow-lg">
                  <h4 className="font-bold text-brand-ink border-b border-brand-pink/20 pb-2 mb-4">第二步：邮寄地址 (德州奥斯汀)</h4>
                  <div className="bg-brand-pink/5 rounded-xl p-4 font-mono text-sm mb-4">
                    Department of the Treasury<br />
                    Internal Revenue Service Center<br />
                    Austin, TX 73301-0215<br />
                    USA
                  </div>
                  <button 
                    onClick={() => {
                        navigator.clipboard.writeText("Department of the Treasury\nInternal Revenue Service Center\nAustin, TX 73301-0215\nUSA");
                        alert("地址已复制到剪贴板！");
                    }}
                    className="w-full rounded-xl border-2 border-brand-pinkdeep text-brand-pinkdeep py-3 text-sm font-bold transition hover:bg-brand-pinkdeep hover:text-white"
                  >
                    📋 复制邮寄地址
                  </button>
               </div>
            </div>

            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-3 text-red-700">
                   <span className="text-2xl">✍️</span>
                   <div>
                      <h4 className="font-bold">最后也是最重要的一点</h4>
                      <p className="text-sm">如果你是无收入单独递交，请务必在 <span className="font-black italic">第二页底部签字并写下日期</span>。不签字等于白寄！</p>
                   </div>
                </div>
            </div>

            <div className="pt-8 border-t border-brand-pink/20 text-center">
               <p className="text-sm text-brand-ink/70 mb-4">天数算不准？有其他细节拿不准？</p>
               <Link 
                href="/#footer" 
                className="inline-flex items-center gap-2 rounded-full bg-[#a6968a] px-8 py-4 text-white font-bold transition hover:scale-105 shadow-lg"
               >
                 💬 扫码添加微信，学长学姐帮你人肉核对
               </Link>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-between border-t border-brand-pink/10 pt-8">
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className={`rounded-full px-8 py-3 text-sm font-bold transition ${
              step === 1 ? "invisible" : "text-brand-ink/40 hover:text-brand-ink"
            }`}
          >
            ← 上一步
          </button>
          {step < 4 && (
            <button
              onClick={() => setStep(step + 1)}
              className="rounded-full bg-brand-ink px-10 py-3 text-sm font-bold text-white shadow-xl transition hover:scale-105 active:scale-95"
            >
              下一步
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
