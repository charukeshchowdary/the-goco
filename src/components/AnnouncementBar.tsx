"use client";

import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="animate-slide-down bg-[#C59E47] text-[#140A06] py-2 overflow-hidden relative select-none z-50">
      {/* Scrolling marquee text matching Figma */}
      <div
        className="flex whitespace-nowrap text-[11px] sm:text-xs font-sans font-bold tracking-[0.24em] uppercase"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="inline-flex items-center mx-4 sm:mx-6 gap-3">
            <span>THE GOCO IS COMING SOON TO MARKET</span>
            <span className="opacity-60">•</span>
            <span>OCTOBER 2026</span>
            <span className="opacity-60">•</span>
            <span>WHERE CHOCOLATE TELLS A STORY</span>
            <span className="opacity-60">•</span>
          </span>
        ))}
      </div>
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#C59E47] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#C59E47] to-transparent pointer-events-none" />
    </div>
  );
}
