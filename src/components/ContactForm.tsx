"use client";

import { useState } from "react";

export function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    contact: formData.email, // Mapping email to 'contact' field expected by API
                    topic: "F1+OPT Checklist",
                    message: "User requested the F1+OPT Tax Checklist.",
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage("提交成功！清单将发送到您的邮箱。");
                setFormData({ name: "", email: "" });
            } else {
                setStatus("error");
                setMessage(data.error || "提交失败，请重试。");
            }
        } catch (error) {
            setStatus("error");
            setMessage("网络错误，请稍后重试。");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <input
                    type="text"
                    placeholder="你的称呼"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full sm:w-40 rounded-full border border-brand-pink/40 bg-white px-5 py-3 text-sm text-brand-ink shadow-sm focus:border-brand-pinkdeep focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="你的邮箱"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full sm:w-60 rounded-full border border-brand-pink/40 bg-white px-5 py-3 text-sm text-brand-ink shadow-sm focus:border-brand-pinkdeep focus:outline-none"
                />
            </div>
            <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="cta-breathe w-full sm:w-auto rounded-full bg-brand-pinkdeep px-8 py-3 text-sm font-semibold text-brand-ink shadow-[0_25px_60px_rgba(200,127,155,0.45)] transition hover:bg-brand-pinkhover disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === "submitting" ? "提交中..." : status === "success" ? "已领取" : "领取「F1+OPT 报税避坑清单」"}
            </button>
            {message && <p className="absolute -bottom-8 text-xs text-brand-pinkdeep">{message}</p>}
        </form>
    );
}
