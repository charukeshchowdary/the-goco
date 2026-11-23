"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface StorySlide {
  id: number;
  chapter: string;
  shortTitle: string;
  src: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
}

const storySlides: StorySlide[] = [
  {
    id: 1,
    chapter: "01",
    shortTitle: "Godavari Spirit",
    src: "/images/story/The Spirit of Godavari.png",
    title: "The Spirit of Godavari",
    subtitle: "01 / 09 • A STORY THAT ECHOES WITH",
    description:
      "Our story begins with the Godavari — a river that flows with culture, people, flavours and endless inspiration through Andhra Pradesh.",
    quote: "“A river. A land. A story that inspires THE GOCO.”",
  },
  {
    id: 2,
    chapter: "02",
    shortTitle: "The Heritage",
    src: "/images/story/Rooted in Godavari Heritage.png",
    title: "Rooted in Our Heritage",
    subtitle: "02 / 09 • THE SACRED SHORES",
    description:
      "The Godavari is not just a river. It is a way of life — simple, rich and deeply connected to nature, people and food.",
    quote: "“A river that connects lands, people and stories.”",
  },
  {
    id: 3,
    chapter: "03",
    shortTitle: "Cacao & Coconut",
    src: "/images/story/Two Worlds, One Vision.png",
    title: "Two Worlds, One Vision",
    subtitle: "03 / 09 • THE HARMONY",
    description:
      "Cocoa and Coconut — two distinct worlds, brought together by a shared passion for flavour, creativity and a deeper connection to our roots.",
    quote: "“Bold cacao aromas meet natural coconut richness.”",
  },
  {
    id: 4,
    chapter: "04",
    shortTitle: "The Name",
    src: "/images/story/The Meaning Behind The GOCO.png",
    title: "The Meaning Behind The GOCO",
    subtitle: "04 / 09 • THREE INSPIRATIONS",
    description:
      "GO for Godavari, CO for Cocoa, and CO for Coconut. Together, they express our vision of building a distinctive Indian brand that connects tradition with modern creativity.",
    quote: "“A name rooted in a river, a bean and a bond with nature.”",
  },
  {
    id: 5,
    chapter: "05",
    shortTitle: "Indian Soul",
    src: "/images/story/A Uniquely Indian Chocolate Story.png",
    title: "A Uniquely Indian Brand",
    subtitle: "05 / 09 • GLOBAL CRAFT, INDIAN SOUL",
    description:
      "THE GOCO brings together the richness of global chocolate with the soul of India — authentic ingredients, regional tastes, and fair partnerships with local farmers.",
    quote: "“Global chocolate. Indian soul.”",
  },
  {
    id: 6,
    chapter: "06",
    shortTitle: "The Craft",
    src: "/images/story/From Ideas to Creations.png",
    title: "From Ideas to Creations",
    subtitle: "06 / 09 • JOURNEY OF EXPERIMENTATION",
    description:
      "From research and small-batch experimentation to taste refinement: exploring classic dark, coconut milk, Godavari spice, filter coffee, and jaggery crunch chocolate.",
    quote: "“Many attempts, new flavours, bolder ideas — that's how THE GOCO was born.”",
  },
  {
    id: 7,
    chapter: "07",
    shortTitle: "The Collection",
    src: "/images/story/A Growing Collection of Chocolate Delights.png",
    title: "A Growing Collection",
    subtitle: "07 / 09 • MORE POSSIBILITIES",
    description:
      "Beyond chocolate bars: pure coconut oils, coconut flour & powder, hot drinking chocolates, wholesome cookies, guilt-free treats, and luxury festive gifting.",
    quote: "“Same roots. More possibilities.”",
  },
  {
    id: 8,
    chapter: "08",
    shortTitle: "Global Dreams",
    src: "/images/story/From Indian Roots to Global Dreams.png",
    title: "Local Roots, Global Dreams",
    subtitle: "08 / 09 • WORLD HORIZONS",
    description:
      "Empowering farming communities in Andhra Pradesh while taking distinctive Indian chocolate flavours across Europe, North America, Middle East, and Asia Pacific.",
    quote: "“Indian flavours for a sweeter world.”",
  },
  {
    id: 9,
    chapter: "09",
    shortTitle: "October 2026",
    src: "/images/story/The Goco_ Sweeter Tomorrows.png",
    title: "The Journey Continues…",
    subtitle: "09 / 09 • COMING SOON, OCTOBER 2026",
    description:
      "Founded by THE CHARUKESH CHOWDARY MADDUKURI, THE GOCO represents the beginning of a dream. Coming soon to market in October 2026.",
    quote: "“Same roots. Sweeter tomorrows. The best is yet to come.”",
  },
];

export default function BrandStory() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const current = storySlides[active];

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % storySlides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + storySlides.length) % storySlides.length);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, next]);

  return (
    <section id="brand-story" className="py-20 md:py-28 bg-[#120905] text-[#FAF5EE] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header — Figma Spec */}
        <div className="text-left mb-8 md:mb-12">
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-sans font-semibold mb-2">
            • THE VISUAL CHRONICLES •
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#FAF5EE] tracking-tight mb-3">
            Where Chocolate Tells a Story
          </h2>
          <p className="text-[#FAF5EE]/70 text-sm sm:text-base font-sans font-light max-w-2xl leading-relaxed">
            Follow our 9-chapter visual chronicle from the banks of the Godavari to the world. Tap any thumbnail below, or let the cinematic story unfold.
          </p>
        </div>

        {/* Status / Controller Bar — Figma Spec */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 mb-4 border-b border-gold/15 text-xs font-sans">
          <div className="flex items-center gap-3">
            <span className="text-gold font-semibold uppercase tracking-[0.18em]">
              Chapter {current.chapter} of 09
            </span>
            <span className="text-[#FAF5EE]/40">•</span>
            <span className="text-[#FAF5EE]/80 tracking-wide font-medium">
              {current.title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block px-3 py-1 rounded-full border border-gold/25 text-[10px] uppercase tracking-[0.2em] text-gold-light bg-[#1E100A]">
              EAST + WEST
            </span>

            {/* Auto Toggle Slider matching Figma */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-[#FAF5EE]/70">Auto</span>
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label="Toggle auto-play"
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer border ${
                  isAutoPlaying ? "bg-gold border-gold" : "bg-[#2A160E] border-gold/30"
                }`}
              >
                <span
                  className={`block w-4 h-4 rounded-full bg-[#120905] transition-transform absolute top-[3px] ${
                    isAutoPlaying ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Main Cinematic Card — Figma Spec */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-gold/25 overflow-hidden shadow-2xl bg-[#180D09] min-h-[460px] sm:min-h-[520px] md:min-h-[600px] flex items-end">
          {/* Active Image */}
          <Image
            key={current.id}
            src={current.src}
            alt={current.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover transition-opacity duration-700 ease-in-out"
          />

          {/* Deep Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120905] via-[#120905]/75 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120905]/80 via-[#120905]/30 to-transparent pointer-events-none" />

          {/* Text Content Overlay */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-2xl text-left">
            <span className="text-gold-light uppercase tracking-[0.25em] text-[11px] sm:text-xs font-sans font-semibold mb-2 block">
              {current.subtitle}
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#FAF5EE] mb-4 leading-tight">
              {current.title}
            </h3>

            <p className="text-[#FAF5EE]/85 text-sm sm:text-base font-sans font-light leading-relaxed mb-4">
              {current.description}
            </p>

            <blockquote className="text-gold italic font-serif text-base sm:text-lg mb-6">
              {current.quote}
            </blockquote>

            {/* Bottom Counter & Arrows — Figma Spec */}
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-gold-light font-bold">
                {current.chapter} / 09
              </span>
              <button
                onClick={prev}
                aria-label="Previous chapter"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-[#120905] transition-all cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next chapter"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-[#120905] transition-all cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Filmstrip Timeline — Figma Spec */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gold uppercase tracking-[0.25em] text-[11px] font-sans font-semibold">
              • FILMSTRIP TIMELINE • JUMP TO ANY CHAPTER (9 Chapters Total)
            </p>
          </div>

          {/* Responsive Layout: Desktop 9 in row, Mobile 3x3 Grid (matching Figma mobile_seg_1.png) */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-9 gap-2.5 sm:gap-3">
            {storySlides.map((slide, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActive(idx)}
                  className={`group relative text-left rounded-xl overflow-hidden border p-1.5 transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "border-gold bg-[#2A160E] shadow-lg shadow-gold/20 -translate-y-1"
                      : "border-gold/20 bg-[#1A0E09]/70 hover:border-gold/50 hover:bg-[#22120C]"
                  }`}
                >
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-1.5 bg-[#120905]">
                    <Image
                      src={slide.src}
                      alt={slide.shortTitle}
                      fill
                      sizes="140px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-1">
                    <span className="text-[9px] font-sans font-bold text-gold/80 block">
                      {slide.chapter}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-sans font-medium text-[#FAF5EE] truncate block leading-snug">
                      {slide.shortTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
