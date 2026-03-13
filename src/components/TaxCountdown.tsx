"use client";

import { useState, useEffect } from "react";

export default function TaxCountdown() {
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    setHasMounted(true);
    const targetDate = new Date("2026-04-15T23:59:59-04:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!hasMounted || !timeLeft) {
    return (
      <div className="flex animate-pulse items-center justify-center space-x-2 text-2xl font-bold text-brand-ink/30">
        <span>00</span>
        <span>:</span>
        <span>00</span>
        <span>:</span>
        <span>00</span>
        <span>:</span>
        <span>00</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <div className="flex items-center justify-center gap-2 text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-brand-ink">
        <div className="flex flex-col items-center">
          <span className="tabular-nums">{timeLeft.days.toString().padStart(2, "0")}</span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-ink/50 mt-1">Days</span>
        </div>
        <span className="mb-6 opacity-30">:</span>
        <div className="flex flex-col items-center">
          <span className="tabular-nums">{timeLeft.hours.toString().padStart(2, "0")}</span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-ink/50 mt-1">Hrs</span>
        </div>
        <span className="mb-6 opacity-30">:</span>
        <div className="flex flex-col items-center">
          <span className="tabular-nums">{timeLeft.minutes.toString().padStart(2, "0")}</span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-ink/50 mt-1">Min</span>
        </div>
        <span className="mb-6 opacity-30">:</span>
        <div className="flex flex-col items-center">
          <span className="tabular-nums">{timeLeft.seconds.toString().padStart(2, "0")}</span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-ink/50 mt-1">Sec</span>
        </div>
      </div>
      <p className="text-xs sm:text-sm font-semibold text-brand-ink/60 mt-1">
        2026 报税截止倒计时 (4月15日)
      </p>
    </div>
  );
}
