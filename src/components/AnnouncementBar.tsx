"use client";

import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="animate-slide-down bg-brown-dark text-gold-light py-2.5 overflow-hidden relative">
      {/* Scrolling marquee text */}
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 25s linear infinite" }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8 text-sm tracking-[0.25em] uppercase font-sans">
            ✦ THE GOCO IS COMING SOON TO MARKET — OCTOBER 2030 ✦
            <span className="mx-4 text-gold opacity-60">|</span>
            WHERE CHOCOLATE TELLS A STORY
            <span className="mx-4 text-gold opacity-60">|</span>
          </span>
        ))}
      </div>
      {/* Edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brown-dark to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brown-dark to-transparent pointer-events-none" />
    </div>
  );
}
