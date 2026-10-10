"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import BrandStory from "@/components/BrandStory";

/* ─── SVG Leaf Accent ─── */
function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.17 20C12.17 20 15.55 15.29 16.55 13.29C17.86 10.62 18 8 18 8C18 8 17.5 8 17 8Z" fill="currentColor"/>
    </svg>
  );
}

/* ─── Luxury Story Card ─── */
function StoryCard({
  tag,
  title,
  description,
  imageSrc,
  imageAlt,
  delay,
}: {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  delay: string;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl glass-card-light border border-gold/25 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
      style={{ animationDelay: delay }}
    >
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brown-dark/85 backdrop-blur-md border border-gold/30 text-gold-light text-[10px] font-sans font-semibold uppercase tracking-[0.2em]">
          {tag}
        </span>
      </div>
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-bold font-serif text-brown-dark mb-2 group-hover:text-brown transition-colors">
            {title}
          </h3>
          <div className="w-12 h-[2px] bg-gold/50 mb-3" />
          <p className="text-brown-medium leading-relaxed text-sm md:text-base font-sans font-light">
            {description}
          </p>
        </div>
        <div className="pt-4 mt-4 border-t border-gold/15">
          <Link
            href="/products#how-its-made"
            className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-teal-dark hover:text-teal inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Learn The Process</span>
            <span>&rarr;</span>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* ─────────────────── HERO ─────────────────── */}
      <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bg.jpg"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        >
          <source src="/THE_GOCO_Logo_Intro.mp4" type="video/mp4" />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/70 via-brown-dark/50 to-cream/95" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-brown-dark/30 to-brown-dark/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          {/* Brand Logo */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/images/logo.png"
              alt="THE GOCO — Where Chocolate Tells a Story"
              width={600}
              height={340}
              priority
              className="mx-auto w-[290px] sm:w-[420px] md:w-[540px] lg:w-[620px] h-auto drop-shadow-2xl rounded-xl"
              style={{
                filter: "drop-shadow(0 10px 35px rgba(44, 24, 16, 0.6))",
              }}
            />
            <h1 className="sr-only">THE GOCO — Where Chocolate Tells a Story</h1>
          </div>

          {/* Subtitle Triad */}
          <div className="mt-4 mb-6">
            <span className="text-gold-light/90 text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-semibold px-4 py-1.5 rounded-full bg-brown-dark/60 backdrop-blur-md border border-gold/30">
              Godavari Roots • Artisan Cocoa • Pure Coconut
            </span>
          </div>

          {/* Gold divider */}
          <div className="animate-fade-in my-6" style={{ animationDelay: "0.6s" }}>
            <div className="gold-divider" />
            <LeafIcon className="text-gold mx-auto mt-3 opacity-80" />
          </div>

          {/* Coming Soon badge */}
          <div
            className="animate-fade-in-up inline-block mb-8"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="bg-teal-dark/85 backdrop-blur-md border border-gold/40 rounded-full px-8 py-3 shadow-2xl">
              <span className="text-gold-light uppercase tracking-[0.3em] text-xs sm:text-sm font-sans font-semibold">
                Coming Soon — October 2030
              </span>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="animate-fade-in-up mb-10" style={{ animationDelay: "1s" }}>
            <CountdownTimer />
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans uppercase tracking-[0.2em] mb-12">
            <Link
              href="/#brand-story"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-dark text-brown-dark font-bold shadow-xl hover:scale-105 transition-all"
            >
              Explore Story Chronicles &darr;
            </Link>
            <Link
              href="/products"
              className="px-7 py-3.5 rounded-full border border-gold/50 bg-brown-dark/60 backdrop-blur-sm text-gold-light hover:bg-gold/15 hover:border-gold transition-all"
            >
              Discover Products & Craft
            </Link>
            <Link
              href="/founder"
              className="px-7 py-3.5 rounded-full border border-gold/30 bg-brown-dark/40 backdrop-blur-sm text-cream/80 hover:text-gold hover:border-gold transition-all"
            >
              Meet Founder
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in" style={{ animationDelay: "1.5s" }}>
            <a href="#brand-story" className="inline-flex flex-col items-center text-gold-light/60 hover:text-gold transition-colors">
              <span className="text-[10px] uppercase tracking-[0.25em] font-sans mb-1">Scroll to Unfold</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── BRAND STORY CHRONICLES ─────────── */}
      <BrandStory />

      {/* ─────────────────── OUR STORY & CRAFTSMANSHIP ─────────────────── */}
      <section id="story" className="py-20 md:py-32 bg-cream relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-teal uppercase tracking-[0.3em] text-xs font-sans mb-3 font-semibold">
              The Art of Fine Chocolate
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brown-dark mb-4">
              A Story Worth Tasting
            </h2>
            <div className="gold-divider mb-6" />
            <p className="max-w-2xl mx-auto text-brown-medium text-base md:text-lg leading-relaxed font-sans font-light">
              Born where the sacred Godavari river nourishes tropical groves, THE GOCO
              crafts every bar with intention — honoring the land, single-origin cacao,
              and the versatility of pure coconut.
            </p>
          </div>

          {/* 3‑card grid */}
          <div className="grid gap-8 md:grid-cols-3">
            <StoryCard
              tag="01 • The Terroir"
              title="From Pod to Perfection"
              description="We source single-origin cocoa from sustainable estates in tropical highlands, where rich fertile soil and coastal rains nurture beans with extraordinary depth and complex stone-fruit undertones."
              imageSrc="/images/cocoa-pod.jpg"
              imageAlt="Fresh cocoa pod split open"
              delay="0.1s"
            />
            <StoryCard
              tag="02 • Slow Craft"
              title="Crafted by Hand"
              description="Each batch is granite stone-ground for up to 72 hours, hand-tempered on marble, and poured by master chocolatiers who treat every creation as a canvas — zero artificial shortcuts, absolute integrity."
              imageSrc="/images/chocolate-product.jpg"
              imageAlt="Artisan chocolate bars with cocoa beans"
              delay="0.3s"
            />
            <StoryCard
              tag="03 • The Signature"
              title="Coconut Meets Cocoa"
              description="Our signature harmony: virgin cold-pressed Godavari coconut cream folded into single-origin dark chocolate, delivering a silken dairy-free melt with delicate tropical warmth."
              imageSrc="/images/coconut-chocolate.jpg"
              imageAlt="Coconut halves alongside dark chocolate"
              delay="0.5s"
            />
          </div>
        </div>
      </section>

      {/* ─────────────── BRAND PROMISE & STATS ─────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-brown-dark text-cream">
        {/* Background texture & ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brown-dark via-[#1E0F0A] to-brown-dark" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A55A_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <LeafIcon className="text-gold mx-auto mb-5 w-8 h-8 opacity-80" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-cream mb-4">
            Ethically Sourced. <span className="text-gold-gradient">Exquisitely Made.</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-cream/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-sans font-light">
            We believe that true luxury should never come at the expense of our growers or earth.
            Every GOCO creation carries our promise of fair-trade partnerships,
            regenerative farming, and fully compostable golden packaging.
          </p>

          {/* Stats Grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            {[
              { value: "100%", label: "Single Origin Cacao", sub: "Estate Traceable" },
              { value: "0", label: "Artificial Additives", sub: "Pure Ingredients" },
              { value: "Direct", label: "Farmer Sourcing", sub: "Fair Value Sharing" },
              { value: "Eco-Luxe", label: "Golden Packaging", sub: "Compostable & Recyclable" },
            ].map(({ value, label, sub }) => (
              <div
                key={label}
                className="glass-panel-dark rounded-2xl p-6 border border-gold/25 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl sm:text-4xl font-serif font-bold text-gold-gradient block mb-1">
                  {value}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-cream font-sans font-semibold block">
                  {label}
                </span>
                <span className="text-[10px] text-cream/50 font-sans block mt-1">
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── MEET THE FOUNDER SPOTLIGHT ───────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#21100A] to-brown-dark text-cream relative overflow-hidden border-t border-gold/15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gold/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="glass-panel-dark rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-sans font-semibold mb-2 block">
                ✦ The Visionary ✦
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-2 font-serif">
                Meet the Founder
              </h2>
              <p className="text-gold-light text-base md:text-lg italic font-serif mb-4">
                THE CHARUKESH CHOWDARY MADDUKURI
              </p>
              <div className="gold-divider !mx-0 mb-4" />
              <p className="text-cream/80 text-sm md:text-base leading-relaxed max-w-xl mb-6 font-sans font-light">
                THE GOCO is a vision inspired by the Godavari region, the richness of cocoa, and the versatility of coconut.
                Its founder aims to build a distinctive Indian brand that connects tradition with modern creativity, learning and growing one step at a time.
              </p>
              
              <div className="flex flex-wrap gap-3.5 justify-center md:justify-start">
                <Link
                  href="/founder"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-dark text-brown-dark font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-all"
                >
                  Meet the Founder &rarr;
                </Link>
                <Link
                  href="/founder#connect"
                  className="px-6 py-3 rounded-full border border-gold/40 text-cream hover:text-gold hover:border-gold font-sans text-xs uppercase tracking-[0.2em] transition-all bg-brown/40"
                >
                  Connect Directly
                </Link>
              </div>
            </div>

            {/* Founder Photo */}
            <div className="relative w-44 h-60 sm:w-52 sm:h-72 rounded-2xl p-1 bg-gradient-to-br from-gold/50 via-gold to-brown flex-shrink-0 shadow-2xl group overflow-hidden">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-brown-dark">
                <Image
                  src="/images/founder.png"
                  alt="The Charukesh Chowdary Maddukuri - Founder, THE GOCO"
                  fill
                  sizes="220px"
                  className="object-cover object-top contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2 right-2 text-center">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-sans font-semibold px-2.5 py-1 rounded-full bg-brown-dark/90 border border-gold/40 inline-block shadow">
                    Founder, THE GOCO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── FOUNDERS' CIRCLE / NOTIFY ME ───────────── */}
      <section id="notify" className="py-20 md:py-28 bg-cream-dark relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-teal uppercase tracking-[0.3em] text-xs font-sans mb-3 font-semibold">
            ✦ Be An Early Patron ✦
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brown-dark mb-4">
            Join the Founders&apos; Circle
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-brown-medium text-base md:text-lg leading-relaxed mb-6 font-sans font-light">
            Be the first to taste our limited initial harvest batches when THE GOCO debuts in October 2030.
            Enjoy behind-the-scenes tastings, private tasting invitations, and exclusive updates.
          </p>

          {/* Perks Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs font-sans text-brown-dark">
            <span className="px-3 py-1 rounded-full bg-cream border border-gold/30">
              ✦ First Harvest Allocations
            </span>
            <span className="px-3 py-1 rounded-full bg-cream border border-gold/30">
              ✦ Private Tasting Invites
            </span>
            <span className="px-3 py-1 rounded-full bg-cream border border-gold/30">
              ✦ Handcrafted in Andhra Pradesh
            </span>
          </div>

          {submitted ? (
            <div className="bg-teal/10 border border-teal/30 rounded-2xl p-6 animate-fade-in-up">
              <p className="text-teal text-xl font-serif font-bold">🎉 Welcome to the Founders&apos; Circle!</p>
              <p className="text-brown-medium mt-2 text-sm font-sans">
                You are on the priority invitation list for our October 2030 launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@domain.com"
                className="flex-1 px-5 py-4 rounded-full border border-gold/40 bg-cream text-brown-dark placeholder:text-brown-light/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans text-sm shadow-inner"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal to-teal-dark text-cream font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:shadow-lg hover:shadow-teal/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                Reserve Access
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─────────────────── LUXURY EDITORIAL FOOTER ─────────────────── */}
      <footer className="bg-brown-dark text-cream/70 py-16 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            {/* Col 1: Brand */}
            <div>
              <span className="text-2xl font-serif font-bold text-cream tracking-wide block mb-1">
                THE GOCO
              </span>
              <p className="text-xs italic text-gold font-serif mb-4">
                Where Chocolate Tells a Story
              </p>
              <p className="text-xs text-cream/60 leading-relaxed font-sans mb-4">
                An artisan chocolate and coconut brand rooted in the heritage of the Godavari river,
                crafted with passion for meaningful global flavours.
              </p>
              <span className="text-[11px] uppercase tracking-[0.2em] text-teal-light font-sans font-semibold">
                Market Debut: October 2030
              </span>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold block mb-4">
                Navigation
              </span>
              <ul className="space-y-2 text-xs font-sans uppercase tracking-[0.15em]">
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
                The Heritage
              </span>
              <ul className="space-y-2.5 text-xs font-sans text-cream/70">
                <li>
                  <strong className="text-cream">GO (Godavari):</strong> The sacred river & cultural roots.
                </li>
                <li>
                  <strong className="text-cream">CO (Cocoa):</strong> Single-origin chocolate craftsmanship.
                </li>
                <li>
                  <strong className="text-cream">CO (Coconut):</strong> Natural richness & versatility of our land.
                </li>
              </ul>
            </div>

            {/* Col 4: Founder & Socials */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold block mb-4">
                Connect
              </span>
              <p className="text-xs text-cream/70 font-sans mb-3">
                Founded by <strong className="text-cream">The Charukesh Chowdary Maddukuri</strong>
              </p>
              <div className="flex gap-2.5">
                <a
                  href="https://www.instagram.com/charukesh_chowdary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-xs font-sans font-bold"
                >
                  IG
                </a>
                <a
                  href="https://www.linkedin.com/in/charukesh-chowdary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-xs font-sans font-bold"
                >
                  IN
                </a>
                <a
                  href="mailto:maddukuricharukesh42@gmail.com"
                  aria-label="Email"
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-xs font-sans font-bold"
                >
                  @
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="border-t border-gold/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-cream/50">
            <p>© 2030 THE GOCO. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <span>Made with passion, cocoa & coconut along the Godavari</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
