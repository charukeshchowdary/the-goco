"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, collections, Product } from "@/data/products";
import CountdownTimer from "@/components/CountdownTimer";

/* ─── Leaf Accent Icon ─── */
function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.17 20C12.17 20 15.55 15.29 16.55 13.29C17.86 10.62 18 8 18 8C18 8 17.5 8 17 8Z" fill="currentColor"/>
    </svg>
  );
}

/* ─── 7-Stage Bean-to-Bar & Coconut Crafting Steps ─── */
const craftingSteps = [
  {
    step: "01",
    title: "Heritage Pod Selection & Sourcing",
    tagline: "The Fertile Godavari Terroir",
    description:
      "We begin at the origin — working with dedicated farmers across the lush Godavari basin and Southern tropical estates. Only hand-picked, perfectly ripened cocoa pods and fresh, sun-blessed coconuts are selected for our batches.",
    icon: "🌱",
    details: "Ethical trade partnerships • Single-origin traceability • Hand-sorted selection",
  },
  {
    step: "02",
    title: "Micro-Batch Wooden Box Fermentation",
    tagline: "Unlocking Natural Flavor Precursors",
    description:
      "Within hours of harvest, wet cocoa beans are transferred into tiered wooden sweatboxes. Over 5 to 7 days, natural wild yeasts generate gentle heat, developing deep notes of stone fruit, warm caramel, and subtle floral aromas.",
    icon: "🪵",
    details: "5–7 day wild microbial process • Controlled aeration • Natural flavor evolution",
  },
  {
    step: "03",
    title: "Coastal Solar Sun-Drying",
    tagline: "Preserving the Bean's Living Aromas",
    description:
      "The fermented beans are spread out on raised wooden tables under gentle tropical breezes and coastal sunshine. Slow sun-drying reduces moisture below 7%, locking in the complex organic acids without artificial rapid heat.",
    icon: "☀️",
    details: "Zero fossil fuel dryers • Raised wooden drying decks • Monitored moisture reduction",
  },
  {
    step: "04",
    title: "Artisan Roasting & Winnowing",
    tagline: "Calibrated Roast Curves for Every Harvest",
    description:
      "Beans are gently roasted in small batches to coax out deep nutty, chocolatey notes while preserving delicate terroir nuances. They are then cracked and air-winnowed to cleanly separate the roasted cacao nibs from delicate outer husks.",
    icon: "🔥",
    details: "Low-temperature profiling • Shell winnowing • 100% pure cacao nib extraction",
  },
  {
    step: "05",
    title: "Granite Stone-Melanging & Slow Conching",
    tagline: "48 to 72 Hours of Continuous Refinement",
    description:
      "The cacao nibs are ground between heavy natural granite millstones for up to 3 days. This slow mechanical friction reduces particles to an imperceptible sub-20 microns, aerating volatile bitterness and developing unparalleled silkiness.",
    icon: "🪨",
    details: "Granite stone friction • Sub-20 micron particle size • Organic jaggery & pure cocoa butter",
  },
  {
    step: "06",
    title: "Cold-Pressed Coconut Infusion",
    tagline: "The Signature Twist of THE GOCO",
    description:
      "Fresh coconut meat from Godavari groves is cold-pressed to yield virgin coconut cream and oil. When married with stone-ground chocolate, it creates a luscious, dairy-free melt with velvety tropical warmth and subtle natural sweetness.",
    icon: "🥥",
    details: "Cold-pressed virgin extraction • Dairy-free vegan silkiness • Nutrient-rich coconut flour",
  },
  {
    step: "07",
    title: "Hand-Tempering, Moulding & Inclusions",
    tagline: "The Perfect Snap & Mirror Gloss",
    description:
      "Our chocolatiers hand-temper the molten chocolate on cool granite tables to form stable Beta-V crystals for a signature crisp snap and glossy sheen. Andhra cashews, South Indian coffee, and Godavari spices are folded in before cooling.",
    icon: "✨",
    details: "Beta-V crystalline alignment • Roasted Andhra kaju & spices • Custom logo bar moulds",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories = [
    "All",
    "Dark Chocolate",
    "Flavoured Chocolate",
    "Chocolate-Covered Treats",
    "Cocoa & Hot Chocolate",
    "Gifting Collections",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-gradient-to-b from-brown-dark via-[#1E0F0A] to-brown-dark text-cream min-h-screen">
      {/* ── Background Glow Elements ── */}
      <div className="fixed top-28 left-1/3 w-[650px] h-[350px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-28 right-10 w-96 h-96 bg-teal/10 rounded-full blur-[130px] pointer-events-none" />

      {/* ── Header Breadcrumbs ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-4 flex items-center justify-between">
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
          Market Launch: October 2030
        </span>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-brown-dark/70 backdrop-blur-sm text-gold-light text-xs uppercase tracking-[0.25em] font-sans mb-5">
            <span>✦</span>
            <span>Artisan Collections & Craftsmanship</span>
            <span>✦</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-cream tracking-tight mb-5 leading-tight font-serif">
            Crafted with Passion.{" "}
            <span className="text-gold-gradient block sm:inline">Rooted in Godavari.</span>
          </h1>

          <div className="gold-divider mb-6" />

          <p className="max-w-2xl mx-auto text-cream/80 text-base md:text-lg leading-relaxed font-sans font-light mb-8">
            Explore our artisan range of single-origin dark chocolates, adventurous regional flavour pairings, chocolate-coated treats, drinking chocolates, and coconut creations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.2em] font-sans">
            <a
              href="#how-its-made"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-dark text-brown-dark font-semibold shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              How It&apos;s Made &darr;
            </a>
            <a
              href="#collections"
              className="px-6 py-3 rounded-full border border-gold/40 text-cream hover:text-gold hover:border-gold transition-all"
            >
              Browse Products &darr;
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW OUR PRODUCTS ARE MADE ── */}
      <section id="how-its-made" className="py-16 md:py-24 px-4 sm:px-6 bg-brown-dark/80 border-y border-gold/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-brown/50 text-gold-light text-xs uppercase tracking-[0.25em] font-sans mb-3">
              <span>Bean-to-Bar & Coconut Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream font-serif">
              How <span className="text-gold-gradient">THE GOCO</span> Products Are Made
            </h2>
            <div className="gold-divider mt-4 mb-4" />
            <p className="max-w-2xl mx-auto text-cream/70 text-sm md:text-base font-sans">
              From Godavari river groves and sustainable cocoa estates to stone grinding and hand-tempering, discover our 7-step artisan process.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {craftingSteps.map((step, idx) => (
              <div
                key={step.step}
                className="glass-panel-dark rounded-2xl p-7 border border-gold/25 hover:border-gold/60 transition-all duration-300 hover:-translate-y-1 relative group flex flex-col justify-between"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-serif font-bold text-gold-gradient">
                      {step.step}
                    </span>
                    <span className="text-2xl p-2.5 rounded-xl bg-brown/60 border border-gold/25 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </span>
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.2em] text-teal-light font-sans font-semibold block mb-1.5">
                    {step.tagline}
                  </span>

                  <h3 className="text-xl font-serif font-bold text-cream mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-cream/75 text-sm leading-relaxed font-sans mb-5 font-light">
                    {step.description}
                  </p>
                </div>

                {/* Micro Detail Pill */}
                <div className="pt-4 border-t border-gold/15">
                  <span className="text-[11px] text-gold-light/90 font-mono flex items-center gap-1.5">
                    <span className="text-gold">✦</span>
                    <span>{step.details}</span>
                  </span>
                </div>
              </div>
            ))}

            {/* Special Final Card: The Artisan Guarantee */}
            <div className="glass-panel-dark rounded-2xl p-7 border border-gold/40 bg-gradient-to-br from-brown via-brown-dark to-[#180A06] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold flex items-center justify-center text-gold text-2xl mb-4">
                  🏆
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-sans font-semibold block mb-1.5">
                  Artisan Quality Standard
                </span>
                <h3 className="text-xl font-serif font-bold text-cream mb-3">
                  The GOCO Purity Promise
                </h3>
                <ul className="space-y-2 text-sm text-cream/80 font-sans">
                  <li className="flex items-center gap-2">
                    <span className="text-gold">✓</span> 100% Single-Origin Cocoa
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">✓</span> Cold-Pressed Godavari Coconuts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">✓</span> Zero Artificial Additives & Preservatives
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">✓</span> Fair-Trade Farming Livelihoods
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">✓</span> Compostable Foil & Recyclable Kraft Packaging
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gold/20 mt-6">
                <Link
                  href="/founder"
                  className="text-xs uppercase tracking-[0.2em] text-gold-light hover:text-gold font-sans font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>Meet Founder Charukesh Chowdary</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section id="collections" className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-sans font-semibold mb-2 block">
              ✦ Coming Soon — October 2030 ✦
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream font-serif">
              Our Signature <span className="text-gold-gradient">Collections</span>
            </h2>
            <div className="gold-divider mt-4 mb-4" />
            <p className="max-w-xl mx-auto text-cream/70 text-sm md:text-base font-sans">
              Discover every creation planned for our initial release. Click on any item to view full tasting notes and ingredients.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-sans uppercase tracking-[0.15em] transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-gold text-brown-dark font-bold border-gold shadow-md shadow-gold/20 scale-105"
                    : "bg-brown-dark/60 text-cream/70 border-gold/20 hover:border-gold/50 hover:text-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.slug}
                onClick={() => setActiveModalProduct(p)}
                className="glass-panel-dark rounded-2xl overflow-hidden border border-gold/25 hover:border-gold transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer shadow-lg"
              >
                {/* Product Header / Visual Banner */}
                <div className="relative h-44 bg-gradient-to-br from-brown via-[#22100A] to-[#120603] flex items-center justify-center p-6 border-b border-gold/15 overflow-hidden">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A55A_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Percentage or Category Emblem */}
                  <div className="w-20 h-20 rounded-full border border-gold/40 bg-brown-dark/80 flex flex-col items-center justify-center p-2 text-center group-hover:scale-110 group-hover:border-gold transition-all shadow-xl">
                    {p.percentage ? (
                      <>
                        <span className="font-serif font-bold text-xl text-gold-gradient">
                          {p.percentage}
                        </span>
                        <span className="text-[8px] uppercase tracking-wider text-cream/60 font-sans">
                          Cacao
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-serif font-bold text-lg text-gold-gradient">
                          GOCO
                        </span>
                        <span className="text-[7px] uppercase tracking-wider text-cream/60 font-sans">
                          Artisan
                        </span>
                      </>
                    )}
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex gap-1">
                    {p.isFeatured && (
                      <span className="px-2 py-0.5 rounded-full bg-gold/90 text-brown-dark text-[9px] font-sans uppercase font-bold tracking-wider">
                        Featured
                      </span>
                    )}
                    {p.isNew && (
                      <span className="px-2 py-0.5 rounded-full bg-teal text-cream text-[9px] font-sans uppercase font-bold tracking-wider">
                        New
                      </span>
                    )}
                  </div>

                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider text-gold-light/70 font-sans bg-brown-dark/60 px-2 py-0.5 rounded border border-gold/20">
                    {p.weight}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-sans font-semibold block mb-1">
                      {p.category}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-cream mb-2 group-hover:text-gold-light transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-cream/70 text-xs leading-relaxed font-sans line-clamp-2 mb-3">
                      {p.shortDescription}
                    </p>
                  </div>

                  {/* Tasting note preview */}
                  <div className="pt-3 border-t border-gold/15 mt-2">
                    <p className="text-[11px] text-cream/60 italic font-serif line-clamp-1 mb-3">
                      &ldquo;{p.tastingNotes}&rdquo;
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-gold font-serif font-bold text-base">
                        ₹{p.price}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-cream/70 group-hover:text-gold transition-colors font-sans font-semibold inline-flex items-center gap-1">
                        <span>Details</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL: PRODUCT DETAILS ── */}
      {activeModalProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="glass-panel-dark max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-gold/40 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProduct(null)}
              aria-label="Close Modal"
              className="absolute top-4 right-4 p-2 rounded-full border border-gold/30 text-cream hover:text-gold transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold block mb-1">
              {activeModalProduct.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-cream mb-2">
              {activeModalProduct.name}
            </h3>
            <p className="text-gold-light text-xl font-serif font-bold mb-4">
              ₹{activeModalProduct.price}{" "}
              <span className="text-xs font-sans font-normal text-cream/60">
                / {activeModalProduct.weight}
              </span>
            </p>

            <div className="gold-divider !mx-0 mb-4" />

            <div className="space-y-4 text-sm font-sans text-cream/80">
              <div>
                <span className="text-xs uppercase tracking-wider text-gold block font-semibold mb-1">
                  Description
                </span>
                <p className="leading-relaxed">{activeModalProduct.shortDescription}</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-gold block font-semibold mb-1">
                  Tasting Notes
                </span>
                <p className="italic font-serif text-cream/90">
                  &ldquo;{activeModalProduct.tastingNotes}&rdquo;
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-gold block font-semibold mb-1">
                  Ingredients
                </span>
                <p className="text-xs text-cream/70">{activeModalProduct.ingredients}</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-gold block font-semibold mb-1">
                  Allergens & Dietary
                </span>
                <p className="text-xs text-cream/70">{activeModalProduct.allergens}</p>
              </div>

              <div className="pt-2">
                <div className="p-3 rounded-xl bg-brown/50 border border-gold/20 flex items-center justify-between text-xs">
                  <span className="text-gold">Market Availability</span>
                  <span className="px-2.5 py-1 rounded-full bg-teal-dark text-gold-light font-semibold uppercase tracking-wider text-[10px]">
                    Coming Soon — Oct 2030
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── COUNTDOWN TO LAUNCH ── */}
      <section className="py-14 px-4 sm:px-6 bg-brown-dark/90 border-t border-gold/20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-light font-sans mb-2 font-semibold">
            Reserve Your Taste
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-2 font-serif">
            Coming to Market — <span className="text-gold-gradient">October 2030</span>
          </h2>
          <p className="text-cream/60 text-sm font-sans mb-8">
            THE GOCO — Where Chocolate Tells a Story.
          </p>
          <CountdownTimer />
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
          <div className="flex gap-6 uppercase tracking-[0.15em]">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/products" className="text-gold font-semibold">Products & Process</Link>
            <Link href="/founder" className="hover:text-gold transition-colors">Meet the Founder</Link>
          </div>
          <p>© 2030 THE GOCO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
