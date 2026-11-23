"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandStory from "@/components/BrandStory";

/* ─── Alternating Editorial Story Row (Figma Spec) ─── */
function EditorialRow({
  stepNumber,
  kicker,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  stepNumber: string;
  kicker: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-14 py-8 lg:py-12`}
    >
      {/* Visual Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3] w-full rounded-2xl lg:rounded-3xl overflow-hidden border border-gold/25 shadow-2xl group bg-[#160B07]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120905]/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Editorial Text */}
      <div className="w-full lg:w-1/2 text-left">
        <span className="text-gold uppercase tracking-[0.25em] text-xs font-sans font-semibold mb-2 block">
          {stepNumber} • {kicker}
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#FAF5EE] mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-[#FAF5EE]/75 text-sm sm:text-base font-sans font-light leading-relaxed mb-6 max-w-xl">
          {description}
        </p>
        <div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-gold hover:text-gold-light transition-colors group"
          >
            <span>Learn The Process</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════ */
/*                   MAIN PAGE                     */
/* ═══════════════════════════════════════════════ */
export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-[#120905] text-[#FAF5EE] min-h-screen">
      {/* ─────────────────── HERO (FIGMA SPEC) ─────────────────── */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-20"
      >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="THE GOCO Cocoa Atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#120905]/85 via-[#120905]/70 to-[#120905]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,90,0.08)_0%,transparent_70%)] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Kicker */}
          <p className="text-gold uppercase tracking-[0.28em] text-[11px] sm:text-xs font-sans font-semibold mb-4 animate-fade-in">
            • FROM GODAVARI, WITH A SOUL •
          </p>

          {/* Gold Monogram Emblem */}
          <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-gold/70 flex items-center justify-center bg-[#1D0F0A]/90 text-gold font-serif text-2xl font-bold shadow-2xl mb-5 hover:scale-105 transition-transform duration-300">
            G
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-wide text-[#FAF5EE] uppercase mb-2">
            THE GOCO
          </h1>

          {/* Subtitle in Italic Serif */}
          <p className="text-xl sm:text-2xl md:text-3xl italic font-serif text-[#FAF5EE]/90 mb-5">
            Where Chocolate Tells a Story
          </p>

          {/* Triad Tag Pill */}
          <div className="mb-6">
            <span className="px-5 py-1.5 rounded-full bg-[#1F100A]/80 border border-gold/25 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-gold-light font-sans font-medium backdrop-blur-sm inline-block">
              Godavari Roots • Artisan Cacao • Pure Coconut
            </span>
          </div>

          {/* Launch Status Badge */}
          <div className="mb-8">
            <span className="px-6 py-2 rounded-full border border-gold/40 bg-[#1A0D08]/90 text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold inline-block shadow-lg">
              Coming Soon — October 2026
            </span>
          </div>

          {/* Call to Actions — Responsive stack matching Figma */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10 text-xs font-sans uppercase tracking-[0.2em]">
            <Link
              href="/#brand-story"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C5A55A] hover:bg-[#D4AF37] text-[#140A06] font-bold shadow-xl hover:scale-105 transition-all text-center"
            >
              Explore Story Chronicles →
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-gold/40 bg-[#1E0F0A] hover:bg-gold/15 text-[#FAF5EE] hover:border-gold transition-all text-center"
            >
              Discover Products & Craft
            </Link>
            <Link
              href="/founder"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-[#FAF5EE]/75 hover:text-gold transition-all text-center"
            >
              Meet Founder
            </Link>
          </div>

          {/* Scroll to Unfold */}
          <div className="mt-2 flex flex-col items-center">
            <a
              href="#brand-story"
              className="inline-flex flex-col items-center text-gold/70 hover:text-gold transition-colors text-[10px] uppercase tracking-[0.25em] font-sans"
            >
              <span className="mb-1">Scroll to Unfold</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Video Intro Film Placeholder / Trigger matching Figma */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="mt-6 text-[10px] uppercase tracking-[0.25em] text-gold/60 hover:text-gold transition-colors font-sans inline-flex items-center gap-2 cursor-pointer"
            >
              <span>▶</span>
              <span>LOGO INTRO FILM | VIDEO PLACEHOLDER</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────── VIDEO INTRO MODAL ─────────────────── */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-[#180D09] rounded-2xl border border-gold/40 overflow-hidden shadow-2xl p-2 sm:p-4">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#120905]/80 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-[#120905] transition-all cursor-pointer font-bold"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/THE_GOCO_Logo_Intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* ─────────── BRAND STORY CHRONICLES (FIGMA SPEC) ─────────── */}
      <BrandStory />

      {/* ───────────── THE ART OF FINE CHOCOLATE (FIGMA SPEC) ───────────── */}
      <section id="craft" className="py-20 md:py-32 bg-[#120905] relative border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-gold uppercase tracking-[0.28em] text-xs font-sans font-semibold mb-3">
              • THE ART OF FINE CHOCOLATE •
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#FAF5EE] mb-4">
              A Story Worth Tasting
            </h2>
            <div className="gold-divider mb-6" />
            <p className="max-w-2xl mx-auto text-[#FAF5EE]/75 text-sm sm:text-base leading-relaxed font-sans font-light">
              Born where the sacred Godavari river nourishes tropical groves, THE GOCO crafts every bar with intention — honoring the land, single origin cacao, and the versatility of pure coconut.
            </p>
          </div>

          {/* 3 Alternating Editorial Rows matching Figma */}
          <div className="space-y-6 lg:space-y-12">
            <EditorialRow
              stepNumber="01"
              kicker="THE TERROIR"
              title="From Pod to Perfection"
              description="Nurtured by tropical earth and patient hands, our single origin cacao carries the character of its source. Every pod is the beginning of something extraordinary."
              imageSrc="/images/cocoa-pod.jpg"
              imageAlt="Fresh cocoa pod cut open with single origin seeds"
              reverse={false}
            />

            <EditorialRow
              stepNumber="02"
              kicker="SLOW CRAFT"
              title="Crafted by Hand"
              description="Roasted slowly. Ground patiently. Tempered with precision. Small-batch making lets the deep, complex notes of cocoa unfold, one handcrafted bar at a time."
              imageSrc="/images/chocolate-product.jpg"
              imageAlt="Artisan dark chocolate bar on dark slate with roasted beans"
              reverse={true}
            />

            <EditorialRow
              stepNumber="03"
              kicker="THE SIGNATURE"
              title="Coconut Meets Cocoa"
              description="The natural richness of pure coconut meets the intensity of fine dark chocolate. An unexpected harmony, rooted in the groves and flavours of our Godavari home."
              imageSrc="/images/coconut-chocolate.jpg"
              imageAlt="Fresh cracked coconuts with artisan dark chocolate"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* ───────────── ETHICALLY SOURCED & STATS (FIGMA SPEC) ───────────── */}
      <section className="py-20 md:py-28 bg-[#180D09] text-[#FAF5EE] relative overflow-hidden border-t border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[0.28em] text-xs font-sans font-semibold mb-3">
            • GOOD TASTE, GREATER PURPOSE •
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#FAF5EE] mb-4">
            Ethically Sourced. Exquisitely Made.
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-[#FAF5EE]/75 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans font-light">
            Our commitment: fair-trade relationships, regenerative farming, and compostable golden packaging. A little indulgence, with a lighter footprint.
          </p>

          {/* 4 Stats Cards — Figma Spec */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "100%", label: "Single Origin Cacao", sub: "Estate Traceable" },
              { value: "0", label: "Artificial Additives", sub: "Pure Ingredients" },
              { value: "Direct", label: "Farmer Sourcing", sub: "Fair Value Sharing" },
              { value: "Eco-Luxe", label: "Golden Packaging", sub: "Compostable & Recyclable" },
            ].map(({ value, label, sub }) => (
              <div
                key={label}
                className="bg-[#24130C]/80 border border-gold/25 rounded-2xl p-6 sm:p-8 backdrop-blur-sm text-left hover:border-gold/50 transition-all hover:-translate-y-1"
              >
                <span className="text-3xl sm:text-4xl font-serif font-normal text-gold block mb-2">
                  {value}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-[#FAF5EE] font-sans font-semibold block mb-1">
                  {label}
                </span>
                <span className="text-[11px] text-[#FAF5EE]/50 font-sans block">
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── MEET THE FOUNDER (FIGMA SPEC) ───────────── */}
      <section className="py-20 md:py-28 bg-[#120905] text-[#FAF5EE] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-left">
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-sans font-semibold mb-2 block">
                • THE VISIONARY •
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#FAF5EE] mb-2">
                Meet the Founder
              </h2>
              <p className="text-gold uppercase tracking-[0.2em] text-xs font-sans font-semibold mb-4">
                THE CHARUKESH CHOWDARY MADDUKURI
              </p>
              <p className="text-[#FAF5EE]/90 italic font-serif text-lg sm:text-xl mb-4">
                A vision rooted in the Godavari. A love for the extraordinary.
              </p>
              <div className="w-16 h-[1px] bg-gold/40 mb-5" />
              <p className="text-[#FAF5EE]/75 text-sm sm:text-base leading-relaxed mb-8 font-sans font-light max-w-xl">
                THE GOCO brings together a reverence for the land and a belief that Indian ingredients deserve a place in the world of fine chocolate. From Andhra Pradesh to the world, the vision is simple: craft something honest, memorable, and unmistakably our own.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/founder"
                  className="px-7 py-3.5 rounded-full bg-[#C5A55A] hover:bg-[#D4AF37] text-[#140A06] font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-all"
                >
                  Meet the Founder →
                </Link>
                <Link
                  href="/founder#connect"
                  className="px-7 py-3.5 rounded-full border border-gold/40 text-[#FAF5EE] hover:text-gold hover:border-gold font-sans text-xs uppercase tracking-[0.2em] transition-all bg-[#1E0F0A]"
                >
                  Connect Directly
                </Link>
              </div>
            </div>

            {/* Right Founder Photo Frame matching Figma */}
            <div className="w-full sm:w-80 lg:w-96 flex-shrink-0 text-center">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-gold/30 shadow-2xl bg-[#1E0F0A] group">
                <Image
                  src="/images/founder.png"
                  alt="The Charukesh Chowdary Maddukuri - Founder, THE GOCO"
                  fill
                  sizes="(max-width: 1024px) 320px, 380px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120905]/70 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-sans font-semibold uppercase tracking-[0.18em] text-gold-light">
                  Founder, THE GOCO
                </h4>
                <p className="text-xs text-[#FAF5EE]/60 font-sans mt-0.5">
                  Artisan Chocolatier, Godavari Enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── JOIN THE FOUNDERS' CIRCLE (FIGMA SPEC) ───────────── */}
      <section id="notify" className="py-20 md:py-28 bg-[#120905] relative border-t border-gold/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="rounded-3xl border border-gold/30 bg-[#1A0E08]/85 p-8 sm:p-14 backdrop-blur-md shadow-2xl">
            <p className="text-gold uppercase tracking-[0.28em] text-xs font-sans font-semibold mb-3">
              • BE AN EARLY PATRON •
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#FAF5EE] mb-4">
              Join the Founders&apos; Circle
            </h2>
            <p className="text-[#FAF5EE]/75 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6 font-sans font-light">
              Be part of the very first chapter. Receive privileged access to our first harvest batches, intimate private tastings, and stories from the heart of our craft.
            </p>

            {/* 3 Perks with Bullets */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-sans text-gold-light mb-8">
              <span>• First Harvest Allocations</span>
              <span>• Private Tasting Invites</span>
              <span>• Handcrafted in Andhra Pradesh</span>
            </div>

            {submitted ? (
              <div className="bg-[#24130C] border border-gold/40 rounded-2xl p-6 animate-fade-in-up max-w-md mx-auto">
                <p className="text-gold text-lg font-serif">🎉 Welcome to the Founders&apos; Circle!</p>
                <p className="text-[#FAF5EE]/75 mt-2 text-xs font-sans">
                  You are registered for priority invitations to our October 2026 debut.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-full border border-gold/40 bg-[#120905] text-[#FAF5EE] placeholder:text-[#FAF5EE]/40 focus:outline-none focus:ring-2 focus:ring-gold/50 font-sans text-xs"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-[#C5A55A] hover:bg-[#D4AF37] text-[#140A06] font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  Reserve Access
                </button>
              </form>
            )}

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#FAF5EE]/40 font-sans mt-4">
              THE FIRST 500 PATRONS RECEIVE NUMBERED BATCH CERTIFICATE
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────── FOOTER (FIGMA SPEC) ─────────────────── */}
      <footer className="bg-[#110905] text-[#FAF5EE]/70 py-16 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center bg-[#1A0E08] text-gold font-serif text-sm font-bold">
                  G
                </div>
                <span className="text-xl font-serif font-bold text-[#FAF5EE] tracking-wide">
                  THE GOCO
                </span>
              </div>
              <p className="text-xs italic text-gold font-serif mb-3">
                Where Chocolate Tells a Story
              </p>
              <p className="text-xs text-[#FAF5EE]/60 leading-relaxed font-sans mb-4">
                Artisan cacao. Pure coconut. Godavari soul. A new chapter in Indian fine chocolate.
              </p>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold-light font-sans font-semibold block">
                Market Debut • October 2026
              </span>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold block mb-4">
                EXPLORE
              </span>
              <ul className="space-y-2.5 text-xs font-sans tracking-[0.15em]">
                <li>
                  <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/#brand-story" className="hover:text-gold transition-colors">Story Chronicles</Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-gold transition-colors">Products & Craft</Link>
                </li>
                <li>
                  <Link href="/founder" className="hover:text-gold transition-colors">Meet the Founder</Link>
                </li>
              </ul>
            </div>

            {/* Col 3: The Triad */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold block mb-4">
                THE HERITAGE
              </span>
              <ul className="space-y-2.5 text-xs font-sans text-[#FAF5EE]/70">
                <li>
                  <strong className="text-[#FAF5EE]">GO (Godavari):</strong> sacred river & cultural roots
                </li>
                <li>
                  <strong className="text-[#FAF5EE]">CO (Cocoa):</strong> single origin craftsmanship
                </li>
                <li>
                  <strong className="text-[#FAF5EE]">CO (Coconut):</strong> natural richness of our land
                </li>
              </ul>
            </div>

            {/* Col 4: Founder & Socials */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold block mb-4">
                CONNECT
              </span>
              <p className="text-xs text-[#FAF5EE]/70 font-sans mb-3">
                Founded by <strong className="text-[#FAF5EE]">The Charukesh Chowdary Maddukuri</strong>
              </p>
              <div className="flex gap-2.5">
                <a
                  href="https://www.instagram.com/charukesh_chowdary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-xs font-sans font-bold"
                >
                  IG
                </a>
                <a
                  href="https://www.linkedin.com/in/charukesh-chowdary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-xs font-sans font-bold"
                >
                  IN
                </a>
                <a
                  href="mailto:maddukuricharukesh42@gmail.com"
                  aria-label="Email"
                  className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-xs font-sans font-bold"
                >
                  @
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="border-t border-gold/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FAF5EE]/50">
            <p>© 2026 THE GOCO. All rights reserved.</p>
            <p>Made with passion — rooted in coconut along the Godavari</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
