"use client";

import { useState } from "react";
import Image from "next/image";

const contactItems = [
  { label: "微信 MapleWorldCare", detail: "工作日 10:00-22:00 (GMT+8)" },
  { label: "邮箱 hello@mapleworld.com", detail: "24 小时内回复" },
  { label: "北美热线 +1 (236) 888-0000", detail: "周一至周日" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    topic: "study",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "表单提交成功！我们会在 24 小时内与你联系。",
        });
        // 清空表单
        setFormData({
          name: "",
          contact: "",
          topic: "study",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "提交失败，请稍后重试",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "网络错误，请检查网络连接后重试",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <main className="page-shell space-y-12 py-16">
      <section className="rounded-[40px] border border-white/80 bg-white/90 p-10 shadow-[0_30px_90px_rgba(184,217,255,0.45)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-ink/60">
          Contact MapleWorld
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-ink md:text-5xl">
          联系我们 · 与顾问聊聊你的未来
        </h1>
        <p className="mt-4 max-w-3xl text-brand-ink/80">
          写下你想去的国家、想体验的身份或需要被解决的担忧。MapleWorld
          顾问将在 24 小时内与你连线，提供透明流程与专属规划。
        </p>
        <div className="mt-8 relative w-full h-64 sm:h-80 md:h-96 rounded-[24px] overflow-hidden">
          <Image
            src="/images/contact/contact.png"
            alt="联系插画"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-[0_20px_70px_rgba(247,198,217,0.35)]">
          <h2 className="text-2xl font-semibold text-brand-ink">暖心连线</h2>
          <p className="mt-3 text-brand-ink/80">
            无论你身处哪个时区，都可以用喜欢的方式连接 MapleWorld 顾问。
          </p>
          <div className="mt-6 space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/70 bg-brand-warmwhite px-4 py-4"
              >
                <p className="text-sm font-semibold text-brand-ink">
                  {item.label}
                </p>
                <p className="text-xs text-brand-ink/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-[0_25px_80px_rgba(184,217,255,0.4)]"
        >
          <h2 className="text-2xl font-semibold text-brand-ink">写封信给我们</h2>
          <p className="mt-3 text-sm text-brand-ink/70">
            表单提交后，顾问将与你确认时间并准备初步方案。
          </p>

          {/* 提交状态提示 */}
          {submitStatus.type && (
            <div
              className={`mt-4 rounded-2xl px-4 py-3 text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="mt-6 space-y-4">
            <label className="block text-sm font-semibold text-brand-ink">
              姓名 <span className="text-red-500">*</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="你的中文 / 英文名"
                required
                className="mt-2 w-full rounded-2xl border border-brand-ink/10 bg-white/70 px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
            </label>
            <label className="block text-sm font-semibold text-brand-ink">
              联系方式 <span className="text-red-500">*</span>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="邮箱 / 微信 / 电话"
                required
                className="mt-2 w-full rounded-2xl border border-brand-ink/10 bg-white/70 px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
            </label>
            <label className="block text-sm font-semibold text-brand-ink">
              想聊的话题
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-brand-ink/10 bg-white/70 px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-pink"
              >
                <option value="study">留学</option>
                <option value="volunteer">国际志愿者</option>
                <option value="aupair">互惠生</option>
                <option value="work">出国工作</option>
                <option value="immigration">移民规划</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-brand-ink">
              你的故事 / 需求 <span className="text-red-500">*</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="告诉我们你的期望、时间表或目前的困难..."
                required
                className="mt-2 w-full rounded-2xl border border-brand-ink/10 bg-white/70 px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-full bg-brand-pink py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_60px_rgba(247,198,217,0.6)] transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "发送中..." : "发送给 MapleWorld"}
          </button>
        </form>
      </section>

      {/* 价格说明 */}
      <section className="rounded-[36px] border border-white/80 bg-white/90 p-10 shadow-[0_30px_90px_rgba(184,217,255,0.35)]">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-ink/60">
            Price Guide
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-ink">
            费用与价格说明
          </h2>
          <p className="mt-3 text-sm text-brand-ink/70">
            透明、柔软，而不让数字成为压力。
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[24px] border border-brand-ink/10 bg-white/80 p-6 shadow-[0_18px_50px_rgba(247,198,217,0.35)]">
            <h3 className="text-lg font-semibold text-brand-ink">
              留学 Study Abroad
            </h3>
            <p className="mt-3 text-sm text-brand-ink/70 leading-relaxed">
              费用会随国家、专业与材料情况而变化，可包含文书指导、顾问陪伴、申请管理、签证与行前支持等服务。我们会在了解你的故事后给出更温柔的方案。
            </p>
          </div>

          <div className="rounded-[24px] border border-brand-ink/10 bg-white/85 p-6 shadow-[0_18px_50px_rgba(184,217,255,0.35)]">
            <h3 className="text-lg font-semibold text-brand-ink">
              国际志愿者 Volunteer / 互惠生 Au Pair
            </h3>
            <div className="mt-3 space-y-2 text-sm text-brand-ink/75 leading-relaxed">
              <p>志愿者项目费用区间：¥6,000 – ¥15,000（根据地点与项目性质）</p>
              <p>互惠生：可提供固定费用或价格区间，视家庭与项目匹配度而定。</p>
              <p>所有价格都会在沟通后提供清晰明细与柔软的支付节奏。</p>
            </div>
          </div>

          <div className="rounded-[24px] border border-brand-ink/10 bg-white/80 p-6 shadow-[0_18px_50px_rgba(244,185,200,0.35)]">
            <h3 className="text-lg font-semibold text-brand-ink">
              出国工作 / 移民
            </h3>
            <p className="mt-3 text-sm text-brand-ink/70 leading-relaxed">
              费用由政府规费与服务费用组成，会随身份类别、材料准备、时间表而调整。我们会先梳理路径，再给出透明的估算与分段计划，让数字不成为你的压力。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
