"use client";

import { useState, useEffect } from "react";

interface TaxCountdownProps {
  className?: string;
  variant?: "inline" | "block";
}

export default function TaxCountdown({ 
  className = "", 
  variant = "inline" 
}: TaxCountdownProps) {
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
      <span className={`animate-pulse opacity-30 ${className}`}>
        00:00:00:00
      </span>
    );
  }

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (variant === "block") {
    return (
      <div className={`flex items-center justify-center gap-2 sm:gap-4 ${className}`}>
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-5xl md:text-6xl font-black tabular-nums">{pad(timeLeft.days)}</span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-50 mt-1">Days</span>
        </div>
        <span className="text-2xl sm:text-4xl md:text-5xl opacity-30 mb-6">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-5xl md:text-6xl font-black tabular-nums">{pad(timeLeft.hours)}</span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-50 mt-1">Hrs</span>
        </div>
        <span className="text-2xl sm:text-4xl md:text-5xl opacity-30 mb-6">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-5xl md:text-6xl font-black tabular-nums">{pad(timeLeft.minutes)}</span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-50 mt-1">Min</span>
        </div>
        <span className="text-2xl sm:text-4xl md:text-5xl opacity-30 mb-6">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-5xl md:text-6xl font-black tabular-nums">{pad(timeLeft.seconds)}</span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-50 mt-1">Sec</span>
        </div>
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1 font-mono tracking-tight font-bold ${className}`}>
      <span className="tabular-nums">{pad(timeLeft.days)}</span>
      <span className="opacity-30 font-normal">:</span>
      <span className="tabular-nums">{pad(timeLeft.hours)}</span>
      <span className="opacity-30 font-normal">:</span>
      <span className="tabular-nums">{pad(timeLeft.minutes)}</span>
      <span className="opacity-30 font-normal">:</span>
      <span className="tabular-nums">{pad(timeLeft.seconds)}</span>
    </span>
  );
}

