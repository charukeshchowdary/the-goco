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
    subtitle: "01 / 09 — A Story That Began Here",
    description:
      "Our story begins with the Godavari — a river that flows with culture, people, flavours and endless inspiration through Andhra Pradesh.",
    quote: "A river. A land. A story that inspires THE GOCO.",
  },
  {
    id: 2,
    chapter: "02",
    shortTitle: "Our Heritage",
    src: "/images/story/Rooted in Godavari Heritage.png",
    title: "Rooted in Our Heritage",
    subtitle: "02 / 09 — The Sacred Shores",
    description:
      "The Godavari is not just a river. It is a way of life — simple, rich and deeply connected to nature, people and food.",
    quote: "A river that connects lands, people and stories.",
  },
  {
    id: 3,
    chapter: "03",
    shortTitle: "Cocoa & Coconut",
    src: "/images/story/Two Worlds, One Vision.png",
    title: "Two Worlds, One Vision",
    subtitle: "03 / 09 — The Harmony",
    description:
      "Cocoa and Coconut — two distinct worlds, brought together by a shared passion for flavour, creativity and a deeper connection to our roots.",
    quote: "Bold cacao aromas meet natural coconut richness.",
  },
  {
    id: 4,
    chapter: "04",
    shortTitle: "The Name",
    src: "/images/story/The Meaning Behind The GOCO.png",
    title: "The Meaning Behind The GOCO",
    subtitle: "04 / 09 — Three Inspirations",
    description:
      "GO for Godavari, CO for Cocoa, and CO for Coconut. Together, they express our vision of building a distinctive Indian brand that connects tradition with modern creativity.",
    quote: "A name rooted in a river, a bean and a bond with nature.",
  },
  {
    id: 5,
    chapter: "05",
    shortTitle: "Indian Soul",
    src: "/images/story/A Uniquely Indian Chocolate Story.png",
    title: "A Uniquely Indian Brand",
    subtitle: "05 / 09 — Global Craft, Indian Soul",
    description:
      "THE GOCO brings together the richness of global chocolate with the soul of India — authentic ingredients, regional tastes, and fair partnerships with local farmers.",
    quote: "Global chocolate. Indian soul.",
  },
  {
    id: 6,
    chapter: "06",
    shortTitle: "The Craft",
    src: "/images/story/From Ideas to Creations.png",
    title: "From Ideas to Creations",
    subtitle: "06 / 09 — Journey of Experimentation",
    description:
      "From research and small-batch experimentation to taste refinement: exploring classic dark, coconut milk, Godavari spice, filter coffee, and jaggery crunch chocolate.",
    quote: "Many attempts, new flavours, bolder ideas — that's how THE GOCO was born.",
  },
  {
    id: 7,
    chapter: "07",
    shortTitle: "The Collection",
    src: "/images/story/A Growing Collection of Chocolate Delights.png",
    title: "A Growing Collection",
    subtitle: "07 / 09 — More Possibilities",
    description:
      "Beyond chocolate bars: pure coconut oils, coconut flour & powder, hot drinking chocolates, wholesome cookies, guilt-free treats, and luxury festive gifting.",
    quote: "Same roots. More possibilities.",
  },
  {
    id: 8,
    chapter: "08",
    shortTitle: "Global Dreams",
    src: "/images/story/From Indian Roots to Global Dreams.png",
    title: "Local Roots, Global Dreams",
    subtitle: "08 / 09 — World Horizons",
    description:
      "Empowering farming communities in Andhra Pradesh while taking distinctive Indian chocolate flavours across Europe, North America, Middle East, and Asia Pacific.",
    quote: "Indian flavours for a sweeter world.",
  },
  {
    id: 9,
    chapter: "09",
    shortTitle: "October 2030",
    src: "/images/story/The Goco_ Sweeter Tomorrows.png",
    title: "The Journey Continues…",
    subtitle: "09 / 09 — Coming Soon, October 2030",
    description:
      "Founded by THE CHARUKESH CHOWDARY MADDUKURI, THE GOCO represents the beginning of a dream. Coming soon to market in October 2030.",
    quote: "Same roots. Sweeter tomorrows. The best is yet to come.",
  },
];

export default function BrandStory() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % storySlides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + storySlides.length) % storySlides.length);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(next, 6500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, next]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        next();
        setIsAutoPlaying(false);
      } else if (e.key === "ArrowLeft") {
        prev();
        setIsAutoPlaying(false);
      } else if (e.key === " " && !isFullscreen) {
        e.preventDefault();
        setIsAutoPlaying((p) => !p);
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, isFullscreen]);

  // Auto-scroll filmstrip to keep active item in view
  useEffect(() => {
    if (filmstripRef.current) {
      const activeEl = filmstripRef.current.children[active] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [active]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
      setIsAutoPlaying(false);
    }
  };

  const currentSlide = storySlides[active];

  return (
    <section
      id="brand-story"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-brown-dark via-[#1A0B06] to-brown-dark text-cream overflow-hidden"
    >
      {/* ── Background Ambient Lighting ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-brown-dark/70 backdrop-blur-sm text-gold-light text-xs uppercase tracking-[0.25em] font-sans mb-4">
            <span>✦</span>
            <span>The Visual Chronicles</span>
            <span>✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4 font-serif">
            Where Chocolate <span className="text-gold-gradient">Tells a Story</span>
          </h2>
          <div className="gold-divider mb-5" />
          <p className="max-w-2xl mx-auto text-cream/70 text-sm md:text-base leading-relaxed font-sans">
            Follow our 9-chapter visual chronicle from the banks of the Godavari to the world.
            Tap any thumbnail below, or let the cinematic story unfold.
          </p>
        </div>

        {/* ── Main Showcase Frame ── */}
        <div
          className="relative rounded-2xl md:rounded-3xl overflow-hidden glass-panel-dark border border-gold/30 shadow-2xl transition-all duration-500 mb-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Control Bar inside Frame */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gold/15 bg-brown-dark/85 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold">
                Chapter {currentSlide.chapter} of 09
              </span>
              <span className="text-cream/30 text-xs hidden sm:inline">|</span>
              <span className="text-cream/80 text-xs font-sans hidden sm:inline truncate max-w-[280px] md:max-w-none">
                {currentSlide.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Keyboard indicator hint */}
              <span className="hidden lg:inline text-[10px] text-cream/40 font-mono mr-2">
                Use &larr; &rarr; keys
              </span>

              {/* Autoplay toggle */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                className="px-3 py-1 rounded-full text-xs font-sans text-cream/70 hover:text-gold border border-gold/20 hover:border-gold/50 flex items-center gap-1.5 transition-all bg-brown/40 cursor-pointer"
              >
                {isAutoPlaying ? (
                  <>
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                    <span>Auto</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                    <span>Play</span>
                  </>
                )}
              </button>

              {/* Expand / View Fullscreen modal */}
              <button
                onClick={() => setIsFullscreen(true)}
                aria-label="View Fullscreen"
                className="p-1.5 rounded-full text-cream/70 hover:text-gold border border-gold/20 hover:border-gold/50 transition-all bg-brown/40 cursor-pointer"
                title="Expand fullscreen"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Slide Visual Area - Preserves 16:9 Artwork Aspect Ratio */}
          <div className="relative w-full aspect-[16/9] bg-[#120804] flex items-center justify-center overflow-hidden">
            {storySlides.map((slide, i) => {
              const isCurrent = i === active;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isCurrent ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="object-contain object-center"
                    priority={i === 0 || i === 1}
                  />
                </div>
              );
            })}

            {/* Nav Arrows */}
            <button
              onClick={() => {
                prev();
                setIsAutoPlaying(false);
              }}
              aria-label="Previous Slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel-dark flex items-center justify-center text-cream/80 hover:text-gold hover:border-gold transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => {
                next();
                setIsAutoPlaying(false);
              }}
              aria-label="Next Slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel-dark flex items-center justify-center text-cream/80 hover:text-gold hover:border-gold transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Autoplay Progress Bar */}
          <div className="w-full h-1.5 bg-brown-dark/95 relative overflow-hidden">
            <div
              key={active + (isAutoPlaying ? "-playing" : "-paused")}
              className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-300"
              style={{
                width: isAutoPlaying ? "100%" : `${((active + 1) / storySlides.length) * 100}%`,
                animation: isAutoPlaying ? "progressFill 6.5s linear forwards" : "none",
              }}
            />
          </div>

          {/* Story Context Drawer Below Image */}
          <div className="p-5 sm:p-7 md:p-8 bg-brown-dark/90 border-t border-gold/15">
            <div key={active} className="story-text-enter flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="max-w-3xl">
                <p className="text-gold uppercase tracking-[0.25em] text-xs font-sans mb-1.5 font-semibold">
                  {currentSlide.subtitle}
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cream mb-2 font-serif">
                  {currentSlide.title}
                </h3>
                <p className="text-cream/80 text-sm md:text-base leading-relaxed mb-3 font-sans">
                  {currentSlide.description}
                </p>
                <p className="text-gold-light italic text-sm font-serif border-l-2 border-gold/40 pl-3">
                  &ldquo;{currentSlide.quote}&rdquo;
                </p>
              </div>

              {/* Jump button */}
              <div className="flex md:flex-col items-center gap-2 self-start md:self-center">
                <span className="text-cream/40 text-xs font-mono">
                  {String(active + 1).padStart(2, "0")} / {String(storySlides.length).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      prev();
                      setIsAutoPlaying(false);
                    }}
                    aria-label="Previous story"
                    className="p-2.5 rounded-xl border border-gold/25 hover:border-gold text-cream/70 hover:text-gold transition-all bg-brown/40 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      next();
                      setIsAutoPlaying(false);
                    }}
                    aria-label="Next story"
                    className="p-2.5 rounded-xl border border-gold/25 hover:border-gold text-cream/70 hover:text-gold transition-all bg-brown/40 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Visual Filmstrip Gallery (9 Thumbnails) ── */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold/80 font-sans font-semibold">
              ✦ Filmstrip Timeline — Jump to any Chapter
            </span>
            <span className="text-[11px] text-cream/50 font-sans">
              9 Chapters Total
            </span>
          </div>

          <div
            ref={filmstripRef}
            className="flex gap-3 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          >
            {storySlides.map((slide, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    goTo(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`flex-shrink-0 w-36 sm:w-44 rounded-xl overflow-hidden text-left transition-all duration-300 cursor-pointer group border ${
                    isActive
                      ? "border-gold ring-2 ring-gold/40 shadow-xl shadow-gold/20 scale-[1.03]"
                      : "border-gold/20 hover:border-gold/50 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="relative aspect-[16/9] w-full bg-brown-dark">
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-dark via-transparent to-transparent opacity-60" />
                    <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-brown-dark/90 text-[9px] font-mono font-bold text-gold border border-gold/30">
                      {slide.chapter}
                    </span>
                  </div>
                  <div className="p-2 bg-brown-dark/90 border-t border-gold/15">
                    <p className={`text-[11px] truncate font-sans font-semibold ${isActive ? "text-gold" : "text-cream/80 group-hover:text-gold-light"}`}>
                      {slide.shortTitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Fullscreen Modal View ── */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4"
        >
          <div className="absolute top-5 right-5 z-50 flex items-center gap-3">
            <span className="text-gold text-sm font-mono">
              {currentSlide.chapter} / 09 — {currentSlide.title}
            </span>
            <button
              onClick={() => setIsFullscreen(false)}
              aria-label="Close Fullscreen"
              className="p-2.5 rounded-full bg-brown-dark/80 border border-gold/40 text-cream hover:text-gold transition-all cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="relative w-full h-[85vh] max-w-6xl flex items-center justify-center">
            <Image
              src={currentSlide.src}
              alt={currentSlide.title}
              fill
              className="object-contain"
            />

            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brown-dark/80 border border-gold/40 text-cream hover:text-gold transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brown-dark/80 border border-gold/40 text-cream hover:text-gold transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-3 text-center text-cream/70 text-sm font-sans">
            Press <kbd className="px-1.5 py-0.5 rounded bg-brown-dark border border-gold/30 text-gold text-xs">Esc</kbd> to exit fullscreen
          </div>
        </div>
      )}
    </section>
  );
}
