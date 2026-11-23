"use client";

import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const target = new Date("2026-10-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        // If launched or reached target, show celebratory state or zeroed timer
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!timeLeft) return null;

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-2.5 sm:gap-4 md:gap-6 justify-center items-center">
      {blocks.map(({ label, value }, idx) => (
        <React.Fragment key={label}>
          <div className="flex flex-col items-center group">
            {/* Luxury Chrono Tile */}
            <div className="relative w-15 h-18 sm:w-18 sm:h-22 md:w-22 md:h-26 rounded-2xl p-[1px] bg-gradient-to-b from-gold/50 via-gold/15 to-[#24130C] shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-gold/20">
              <div className="w-full h-full rounded-[15px] bg-[#1E100A] flex flex-col items-center justify-center border border-gold/25 relative overflow-hidden">
                {/* Horizontal Chrono Split Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/40 pointer-events-none" />

                {/* Ambient Soft Gold Backlight */}
                <div className="absolute inset-0 bg-radial-gradient from-gold/10 to-transparent opacity-40 pointer-events-none" />

                <span className="relative z-10 text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gold-gradient tabular-nums">
                  {String(value).padStart(2, "0")}
                </span>

                <span className="relative z-10 text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-gold/75 font-sans font-semibold mt-1">
                  {label}
                </span>
              </div>
            </div>
          </div>

          {/* Separator Colon */}
          {idx < blocks.length - 1 && (
            <span className="text-gold/40 text-lg sm:text-xl font-serif -mt-4 select-none animate-pulse">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
