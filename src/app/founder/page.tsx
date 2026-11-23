"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";

/* ─── Leaf Accent Icon ─── */
function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.17 20C12.17 20 15.55 15.29 16.55 13.29C17.86 10.62 18 8 18 8C18 8 17.5 8 17 8Z" fill="currentColor"/>
    </svg>
  );
}

export default function FounderPage() {
  const [copied, setCopied] = useState(false);
  const email = "maddukuricharukesh42@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-gradient-to-b from-brown-dark via-[#1E0F0A] to-brown-dark text-cream min-h-screen">
      {/* ── Background Glow Elements ── */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-teal/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Breadcrumb / Header Bar ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans text-cream/70 hover:text-gold transition-colors group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Home</span>
        </Link>

        <span className="text-gold/80 text-xs uppercase tracking-[0.25em] font-sans">
          The Visionary Behind THE GOCO
        </span>
      </div>

      {/* ── HERO: Founder Spotlight ── */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel-dark rounded-3xl p-8 sm:p-12 md:p-16 border border-gold/30 shadow-2xl relative overflow-hidden">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              {/* Founder Photo & Portrait Card */}
              <div className="flex-shrink-0 flex flex-col items-center text-center">
                <div className="relative w-56 h-72 sm:w-64 sm:h-84 md:w-72 md:h-96 rounded-2xl p-1 bg-gradient-to-br from-gold-light via-gold to-brown-dark shadow-2xl group">
                  <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-brown-dark">
                    <Image
                      src="/images/founder.png"
                      alt="The Charukesh Chowdary Maddukuri - Founder, THE GOCO"
                      fill
                      sizes="(max-width: 768px) 250px, 300px"
                      className="object-cover object-top contrast-105 group-hover:scale-105 transition-all duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Bottom Name Pill */}
                    <div className="absolute bottom-3 left-2 right-2 text-center pointer-events-none">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold-light font-sans font-semibold px-2.5 py-1 rounded-full bg-brown-dark/90 backdrop-blur-sm border border-gold/40 shadow-lg inline-block truncate max-w-full">
                        Founder & Visionary
                      </span>
                    </div>
                  </div>

                  {/* Floating Gold Crest Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brown-dark border border-gold text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-semibold shadow-xl whitespace-nowrap">
                    THE GOCO
                  </div>
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-gold/80 font-sans mt-6">
                  October 2026
                </p>
                <p className="text-xs text-cream/50 font-sans mt-0.5">
                  Andhra Pradesh, India
                </p>
              </div>

              {/* Founder Intro Details */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-brown/40 text-gold-light text-xs uppercase tracking-[0.25em] font-sans mb-4">
                  <span>✦</span>
                  <span>Meet the Founder</span>
                  <span>✦</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-2 leading-tight">
                  THE CHARUKESH CHOWDARY{" "}
                  <span className="text-gold-gradient block sm:inline">MADDUKURI</span>
                </h1>

                <p className="text-gold text-lg md:text-xl font-serif italic mb-6">
                  Founder & Visionary, THE GOCO
                </p>

                <div className="gold-divider !mx-0 mb-6" />

                <div className="space-y-4 text-cream/80 text-base md:text-lg leading-relaxed font-sans font-light">
                  <p>
                    <strong className="text-cream font-medium">THE GOCO</strong> is a vision
                    inspired by the Godavari region, the richness of cocoa, and the versatility of coconut.
                    Its founder, <strong className="text-gold-light font-medium">THE CHARUKESH CHOWDARY MADDUKURI</strong>,
                    aims to build a distinctive Indian brand that brings together heritage, creativity, and a passion for developing premium chocolate and coconut-based products.
                  </p>
                  <p className="text-cream/70 text-sm md:text-base">
                    With a long-term vision to explore new flavours and create meaningful products, the journey of THE GOCO is about learning, experimenting, and growing one step at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FOUNDING VISION: 3 PILLARS ── */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-sans mb-2">
              The Triple Heritage
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
              Why <span className="text-gold-gradient">THE GOCO</span> Was Born
            </h2>
            <div className="gold-divider mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* GO - Godavari */}
            <div className="glass-panel-dark p-7 rounded-2xl border border-gold/25 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold text-xl font-serif font-bold mb-5">
                GO
              </div>
              <h3 className="text-xl font-bold text-cream mb-2 font-serif">
                Godavari
              </h3>
              <span className="text-xs uppercase tracking-[0.2em] text-teal-light font-sans block mb-3">
                Our Roots & Soul
              </span>
              <p className="text-cream/70 text-sm leading-relaxed font-sans">
                Inspired by the majestic river that flows with culture, vibrant traditions, and bountiful fertile landscapes of Andhra Pradesh.
              </p>
            </div>

            {/* CO - Cocoa */}
            <div className="glass-panel-dark p-7 rounded-2xl border border-gold/25 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold text-xl font-serif font-bold mb-5">
                CO
              </div>
              <h3 className="text-xl font-bold text-cream mb-2 font-serif">
                Cocoa
              </h3>
              <span className="text-xs uppercase tracking-[0.2em] text-gold-light font-sans block mb-3">
                Love for Chocolate
              </span>
              <p className="text-cream/70 text-sm leading-relaxed font-sans">
                A relentless dedication to fine cacao craftsmanship — intense dark bars, chocolate-coated nuts, drinking chocolate, and unique regional spice blends.
              </p>
            </div>

            {/* CO - Coconut */}
            <div className="glass-panel-dark p-7 rounded-2xl border border-gold/25 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold text-xl font-serif font-bold mb-5">
                CO
              </div>
              <h3 className="text-xl font-bold text-cream mb-2 font-serif">
                Coconut
              </h3>
              <span className="text-xs uppercase tracking-[0.2em] text-teal-light font-sans block mb-3">
                Versatility of Our Land
              </span>
              <p className="text-cream/70 text-sm leading-relaxed font-sans">
                Celebrating the natural richness of coconut oil, flour, powders, and dairy-free silky inclusions celebrated in every home across our land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER'S MANIFESTO QUOTE ── */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brown via-brown-dark to-brown border border-gold/30 text-center shadow-xl overflow-hidden">
            <LeafIcon className="text-gold mx-auto mb-4 w-8 h-8 opacity-70" />
            <blockquote className="font-serif italic text-lg sm:text-2xl text-cream/90 leading-relaxed max-w-2xl mx-auto">
              &ldquo;At THE GOCO, we believe that a brand should stand for more than the products it creates.
              It should tell a story, reflect its origins, and grow with purpose.&rdquo;
            </blockquote>
            <div className="w-16 h-[1px] bg-gold/40 mx-auto my-6" />
            <p className="text-gold font-sans font-semibold text-sm uppercase tracking-[0.25em]">
              THE CHARUKESH CHOWDARY MADDUKURI
            </p>
            <p className="text-cream/50 text-xs font-sans mt-1">
              Founder, THE GOCO
            </p>
          </div>
        </div>
      </section>

      {/* ── CONNECT WITH THE FOUNDER ── */}
      <section id="connect" className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-brown/50 text-gold-light text-xs uppercase tracking-[0.25em] font-sans mb-3">
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream">
              Connect with <span className="text-gold-gradient">the Founder</span>
            </h2>
            <div className="gold-divider mt-4 mb-4" />
            <p className="text-cream/70 text-sm md:text-base font-sans max-w-lg mx-auto">
              Follow the journey, share ideas, or reach out directly for collaborations as we build toward our October 2026 debut.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/charukesh_chowdary/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-dark p-6 rounded-2xl border border-gold/25 hover:border-gold transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 via-pink-600 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-cream mb-1">
                Instagram
              </h3>
              <p className="text-xs text-gold font-sans mb-3 font-mono">
                @charukesh_chowdary
              </p>
              <span className="text-[11px] uppercase tracking-[0.2em] text-cream/70 group-hover:text-gold transition-colors font-sans mt-auto inline-flex items-center gap-1">
                View Profile &rarr;
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/charukesh-chowdary/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-dark p-6 rounded-2xl border border-gold/25 hover:border-gold transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#0A66C2] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-cream mb-1">
                LinkedIn
              </h3>
              <p className="text-xs text-gold font-sans mb-3 font-mono">
                in/charukesh-chowdary
              </p>
              <span className="text-[11px] uppercase tracking-[0.2em] text-cream/70 group-hover:text-gold transition-colors font-sans mt-auto inline-flex items-center gap-1">
                Connect &rarr;
              </span>
            </a>

            {/* Email Card with Copy button */}
            <div className="glass-panel-dark p-6 rounded-2xl border border-gold/25 hover:border-gold transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center text-cream mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-cream mb-1">
                Direct Email
              </h3>
              <a
                href={`mailto:${email}`}
                className="text-xs text-gold hover:text-gold-light font-sans mb-3 truncate max-w-full font-mono transition-colors"
                title={email}
              >
                maddukuricharukesh42...
              </a>
              <button
                onClick={handleCopyEmail}
                className="mt-auto px-4 py-1.5 rounded-full border border-gold/40 bg-brown/50 hover:bg-gold hover:text-brown-dark text-[11px] uppercase tracking-[0.15em] font-sans font-semibold transition-all cursor-pointer"
              >
                {copied ? "✓ Copied!" : "Copy Address"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── COUNTDOWN BADGE / ROADMAP ── */}
      <section className="py-12 px-4 sm:px-6 bg-brown-dark/70 border-y border-gold/15">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-light font-sans mb-2 font-semibold">
            The Journey Unfolds
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-2">
            Coming Soon to Market — <span className="text-gold-gradient">October 2026</span>
          </h2>
          <p className="text-cream/60 text-sm font-sans mb-8">
            THE GOCO — Where Chocolate Tells a Story.
          </p>
          <CountdownTimer />
        </div>
      </section>

      {/* ── EXPLORE STORY CTA ── */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-cream mb-4 font-serif">
            Discover the Complete Visual Story
          </h3>
          <p className="text-cream/70 text-sm mb-6 font-sans">
            Explore the 9 chapters of our brand journey from the Godavari river to global dreams.
          </p>
          <Link
            href="/#brand-story"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-dark text-brown-dark font-sans font-semibold text-sm uppercase tracking-[0.2em] shadow-lg shadow-gold/20 hover:scale-105 transition-all"
          >
            <span>Explore Visual Chronicles</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-brown-dark text-cream/60 py-12 border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-sans">
          <div>
            <span className="text-base font-serif font-bold text-cream tracking-wide">
              THE GOCO
            </span>
            <p className="italic text-gold-light/60 mt-0.5">Where Chocolate Tells a Story</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 uppercase tracking-[0.15em]">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/#brand-story" className="hover:text-gold transition-colors">Story</Link>
            <Link href="/products" className="hover:text-gold transition-colors">Products & Craft</Link>
            <Link href="/founder" className="text-gold font-semibold">Meet the Founder</Link>
          </div>
          <p>© 2026 THE GOCO. Founded by The Charukesh Chowdary Maddukuri.</p>
        </div>
      </footer>
    </div>
  );
}
