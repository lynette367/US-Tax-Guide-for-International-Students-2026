"use client";

import { useState } from "react";

interface CopyableEmailProps {
  template: string;
  subject: string;
}

export default function CopyableEmail({ template, subject }: CopyableEmailProps) {
  const [copied, setCopied] = useState(false);

  const fullContent = `Subject: ${subject}\n\n${template}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-brand-pink/30 bg-white/50 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between bg-brand-pink/10 px-4 py-2 border-b border-brand-pink/20">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-pinkdeep/70">邮件模板</span>
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-pinkdeep px-3 py-1.5 text-xs font-bold text-brand-ink transition hover:bg-brand-pinkhover active:scale-95"
        >
          {copied ? (
            <>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              已复制
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              一键复制
            </>
          )}
        </button>
      </div>
      <div className="p-4 sm:p-6">
        <div className="space-y-1 mb-4 pb-4 border-b border-brand-pink/10">
          <p className="text-xs font-semibold text-brand-ink/40">Subject:</p>
          <p className="text-sm font-medium text-brand-ink/80">{subject}</p>
        </div>
        <div className="relative">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-brand-ink/75">
            {template}
          </pre>
        </div>
      </div>
    </div>
  );
}
