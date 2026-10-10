"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isProducts = pathname === "/products";
  const isFounder = pathname === "/founder";

  return (
    <header className="sticky top-0 z-40 w-full bg-brown-dark/95 backdrop-blur-md border-b border-gold/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-brown/50 group-hover:border-gold group-hover:scale-105 transition-all">
              <span className="text-gold font-serif font-bold text-lg">G</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-cream group-hover:text-gold-light transition-colors">
                THE GOCO
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-gold/70 font-sans">
                Where Chocolate Tells a Story
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 font-sans text-xs uppercase tracking-[0.2em]">
            <Link
              href="/"
              className={`transition-colors hover:text-gold ${
                isHome ? "text-gold font-semibold" : "text-cream/75"
              }`}
            >
              Home
            </Link>
            <Link
              href="/#brand-story"
              className="text-cream/75 hover:text-gold transition-colors"
            >
              Story Chronicles
            </Link>
            <Link
              href="/products"
              className={`transition-colors hover:text-gold ${
                isProducts ? "text-gold font-semibold" : "text-cream/75"
              }`}
            >
              Products & Process
            </Link>
            <Link
              href="/founder"
              className={`px-4 py-2 rounded-full border transition-all ${
                isFounder
                  ? "bg-gold text-brown-dark font-semibold border-gold shadow-md shadow-gold/20"
                  : "border-gold/30 text-gold-light hover:border-gold hover:text-gold hover:bg-gold/10"
              }`}
            >
              Meet the Founder
            </Link>
          </nav>

          {/* Launch Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-brown/60 text-[11px] text-gold-light font-sans">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>Launch: Oct 2030</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
              className="p-2 rounded-lg border border-gold/30 text-cream hover:text-gold transition-colors"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gold/15 flex flex-col gap-3 font-sans text-xs uppercase tracking-[0.2em]">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 transition-colors ${isHome ? "text-gold font-semibold" : "text-cream"}`}
            >
              Home
            </Link>
            <Link
              href="/#brand-story"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-cream hover:text-gold transition-colors"
            >
              Story Chronicles
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 transition-colors ${isProducts ? "text-gold font-semibold" : "text-cream"}`}
            >
              Products & Process
            </Link>
            <Link
              href="/founder"
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 font-semibold transition-colors ${isFounder ? "text-gold" : "text-gold-light"}`}
            >
              Meet the Founder
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
