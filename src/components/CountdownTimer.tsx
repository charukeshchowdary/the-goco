"use client";

import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const target = new Date("2030-10-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
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
    <div className="flex gap-3 sm:gap-5 md:gap-7 justify-center items-center">
      {blocks.map(({ label, value }, idx) => (
        <React.Fragment key={label}>
          <div className="flex flex-col items-center group">
            {/* Luxury Chrono Tile */}
            <div className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-2xl p-[1px] bg-gradient-to-b from-gold/60 via-gold/20 to-brown/40 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-gold/20">
              <div className="w-full h-full rounded-[15px] bg-gradient-to-b from-brown via-brown-dark to-[#160905] backdrop-blur-md flex flex-col items-center justify-center border border-gold/30 relative overflow-hidden">
                {/* Horizontal Chrono Split Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-brown-dark/90 shadow-sm pointer-events-none" />

                {/* Ambient Soft Gold Backlight */}
                <div className="absolute inset-0 bg-radial-gradient from-gold/10 to-transparent opacity-50" />

                <span className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gold-gradient tabular-nums drop-shadow-sm">
                  {String(value).padStart(2, "0")}
                </span>

                <span className="relative z-10 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold/80 font-sans font-semibold mt-1">
                  {label}
                </span>
              </div>
            </div>
          </div>

          {/* Separator Colon (except after last block) */}
          {idx < blocks.length - 1 && (
            <span className="text-gold/50 text-xl sm:text-2xl font-serif -mt-6 select-none animate-pulse">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
