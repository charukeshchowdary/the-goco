/* ──────────────────────────────────────────────────────────
 *  THE GOCO — Product & Collection Data
 *  ⚠️ SAMPLE DATA — Prices, weights, and availability are
 *     placeholders. Replace with verified business data.
 * ────────────────────────────────────────────────────────── */

export interface Product {
  slug: string;
  name: string;
  category: string;
  collectionSlug: string;
  percentage?: string;
  shortDescription: string;
  tastingNotes: string;
  ingredients: string;
  allergens: string;
  /** ⚠️ SAMPLE PRICE — replace with real price */
  price: number;
  /** ⚠️ SAMPLE WEIGHT — replace with real weight */
  weight: string;
  availability: "Available" | "Coming Soon" | "Pre-Order";
  image: string;
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

/* ═══════════════════ COLLECTIONS ═══════════════════ */

export const collections: Collection[] = [
  {
    slug: "dark-chocolate",
    name: "Dark Chocolate",
    tagline: "Pure. Bold. Unapologetic.",
    description:
      "Single-origin dark chocolate crafted from hand-selected cocoa beans. Experience cocoa at its most honest — from smooth 50% to an intense 100%.",
    image: "/images/collections/dark-chocolate.jpg",
  },
  {
    slug: "flavoured-chocolate",
    name: "Flavoured Chocolate",
    tagline: "Where Imagination Meets Cocoa.",
    description:
      "Inventive flavour pairings that push the boundaries of chocolate. From classic orange and sea salt to adventurous chilli and popcorn.",
    image: "/images/collections/flavoured-chocolate.jpg",
  },
  {
    slug: "chocolate-covered-treats",
    name: "Chocolate-Covered Treats",
    tagline: "Irresistibly Dipped.",
    description:
      "Premium nuts and berries wrapped in layers of rich chocolate. Every bite is a moment of indulgence.",
    image: "/images/collections/chocolate-treats.jpg",
  },
  {
    slug: "cocoa-hot-chocolate",
    name: "Cocoa & Hot Chocolate",
    tagline: "Warmth in Every Sip.",
    description:
      "Pure cocoa powder and artisan hot chocolate blends for the ultimate drinking chocolate experience.",
    image: "/images/collections/cocoa-hot-chocolate.jpg",
  },
  {
    slug: "gifting",
    name: "Gifting Collections",
    tagline: "Give the Gift of Chocolate.",
    description:
      "Curated chocolate gift boxes and seasonal selections — beautifully packaged for every occasion.",
    image: "/images/collections/gifting.jpg",
  },
];

/* ═══════════════════ PRODUCTS ═══════════════════ */

export const products: Product[] = [
  /* ─── DARK CHOCOLATE ─── */
  {
    slug: "dark-chocolate-50",
    name: "50% Dark Chocolate",
    category: "Dark Chocolate",
    collectionSlug: "dark-chocolate",
    percentage: "50%",
    shortDescription:
      "A smooth, approachable dark chocolate with a gentle cocoa kiss and creamy finish.",
    tastingNotes: "Creamy milk, roasted hazelnut, gentle bitterness, smooth melt",
    ingredients: "⚠️ SAMPLE — Cocoa mass, sugar, cocoa butter, soy lecithin, vanilla extract",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 349,
    weight: "80g",
    availability: "Coming Soon",
    image: "/images/products/dark-50.jpg",
    isFeatured: true,
  },
  {
    slug: "dark-chocolate-70",
    name: "70% Dark Chocolate",
    category: "Dark Chocolate",
    collectionSlug: "dark-chocolate",
    percentage: "70%",
    shortDescription:
      "Bold and balanced — rich cocoa depth meets subtle fruit undertones.",
    tastingNotes: "Deep cocoa, dried cherry, hint of espresso, lingering warmth",
    ingredients: "⚠️ SAMPLE — Cocoa mass, cocoa butter, sugar, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 399,
    weight: "80g",
    availability: "Coming Soon",
    image: "/images/products/dark-70.jpg",
    isFeatured: true,
  },
  {
    slug: "dark-chocolate-100",
    name: "100% Dark Chocolate",
    category: "Dark Chocolate",
    collectionSlug: "dark-chocolate",
    percentage: "100%",
    shortDescription:
      "Zero sugar. Zero compromise. The purest expression of cocoa.",
    tastingNotes: "Intense cacao, dark earth, tobacco leaf, long complex finish",
    ingredients: "⚠️ SAMPLE — 100% cocoa mass",
    allergens: "⚠️ SAMPLE — May contain milk, soy, and tree nuts.",
    price: 449,
    weight: "80g",
    availability: "Coming Soon",
    image: "/images/products/dark-100.jpg",
    isFeatured: true,
    isNew: true,
  },

  /* ─── FLAVOURED CHOCOLATE ─── */
  {
    slug: "flavoured-orange",
    name: "Orange Dark Chocolate",
    category: "Flavoured Chocolate",
    collectionSlug: "flavoured-chocolate",
    shortDescription: "Zesty orange oil folded into velvety dark chocolate.",
    tastingNotes: "Bright citrus, cocoa depth, warm spice finish",
    ingredients: "⚠️ SAMPLE — Cocoa mass, sugar, cocoa butter, orange oil, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 379,
    weight: "75g",
    availability: "Coming Soon",
    image: "/images/products/flavour-orange.jpg",
  },
  {
    slug: "flavoured-sea-salt",
    name: "Sea Salt Dark Chocolate",
    category: "Flavoured Chocolate",
    collectionSlug: "flavoured-chocolate",
    shortDescription: "Flaky sea salt crystals on smooth dark chocolate.",
    tastingNotes: "Sweet-salt contrast, caramel undertone, crisp finish",
    ingredients: "⚠️ SAMPLE — Cocoa mass, sugar, cocoa butter, sea salt, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 379,
    weight: "75g",
    availability: "Coming Soon",
    image: "/images/products/flavour-seasalt.jpg",
  },
  {
    slug: "flavoured-coffee",
    name: "Coffee Dark Chocolate",
    category: "Flavoured Chocolate",
    collectionSlug: "flavoured-chocolate",
    shortDescription: "South Indian coffee meets single-origin cacao.",
    tastingNotes: "Bold espresso, roasted cocoa, bittersweet harmony",
    ingredients: "⚠️ SAMPLE — Cocoa mass, sugar, cocoa butter, coffee extract, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 399,
    weight: "75g",
    availability: "Coming Soon",
    image: "/images/products/flavour-coffee.jpg",
  },
  {
    slug: "flavoured-coconut",
    name: "Coconut Dark Chocolate",
    category: "Flavoured Chocolate",
    collectionSlug: "flavoured-chocolate",
    shortDescription: "Tropical coconut cream enveloped in dark cocoa.",
    tastingNotes: "Creamy coconut, sweet cocoa, tropical warmth",
    ingredients: "⚠️ SAMPLE — Cocoa mass, sugar, cocoa butter, coconut cream, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy, coconut. May contain milk and tree nuts.",
    price: 399,
    weight: "75g",
    availability: "Coming Soon",
    image: "/images/products/flavour-coconut.jpg",
  },
  {
    slug: "flavoured-nuts",
    name: "Roasted Nuts Dark Chocolate",
    category: "Flavoured Chocolate",
    collectionSlug: "flavoured-chocolate",
    shortDescription: "Chunky roasted nuts embedded in rich dark chocolate.",
    tastingNotes: "Toasted crunch, nutty sweetness, deep cocoa base",
    ingredients: "⚠️ SAMPLE — Cocoa mass, sugar, cocoa butter, almonds, cashews, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy and tree nuts. May contain milk.",
    price: 429,
    weight: "75g",
    availability: "Coming Soon",
    image: "/images/products/flavour-nuts.jpg",
  },
  {
    slug: "flavoured-berries",
    name: "Mixed Berries Dark Chocolate",
    category: "Flavoured Chocolate",
    collectionSlug: "flavoured-chocolate",
    shortDescription: "Tangy freeze-dried berries in smooth dark chocolate.",
    tastingNotes: "Berry tartness, cocoa sweetness, fruity finish",
    ingredients: "⚠️ SAMPLE — Cocoa mass, sugar, cocoa butter, freeze-dried berries, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 399,
    weight: "75g",
    availability: "Coming Soon",
    image: "/images/products/flavour-berries.jpg",
  },
  {
    slug: "flavoured-mango",
    name: "Mango Dark Chocolate",
    category: "Flavoured Chocolate",
    collectionSlug: "flavoured-chocolate",
    shortDescription: "Sun-ripened mango meets intense dark cacao.",
    tastingNotes: "Tropical mango, cocoa richness, sweet-tart balance",
    ingredients: "⚠️ SAMPLE — Cocoa mass, sugar, cocoa butter, mango powder, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 399,
    weight: "75g",
    availability: "Coming Soon",
    image: "/images/products/flavour-mango.jpg",
    isNew: true,
  },
  {
    slug: "flavoured-chilli",
    name: "Chilli Dark Chocolate",
    category: "Flavoured Chocolate",
    collectionSlug: "flavoured-chocolate",
    shortDescription: "A slow-building heat that ignites the senses.",
    tastingNotes: "Dark chocolate warmth, chilli kick, smoky finish",
    ingredients: "⚠️ SAMPLE — Cocoa mass, sugar, cocoa butter, chilli extract, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 399,
    weight: "75g",
    availability: "Coming Soon",
    image: "/images/products/flavour-chilli.jpg",
    isNew: true,
  },
  {
    slug: "flavoured-popcorn",
    name: "Popcorn Dark Chocolate",
    category: "Flavoured Chocolate",
    collectionSlug: "flavoured-chocolate",
    shortDescription: "Caramelised popcorn crunch in decadent dark chocolate.",
    tastingNotes: "Buttery caramel, salty crunch, cocoa depth",
    ingredients: "⚠️ SAMPLE — Cocoa mass, sugar, cocoa butter, caramelised popcorn, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk, tree nuts, and gluten.",
    price: 399,
    weight: "75g",
    availability: "Coming Soon",
    image: "/images/products/flavour-popcorn.jpg",
    isNew: true,
  },

  /* ─── CHOCOLATE-COVERED TREATS ─── */
  {
    slug: "choco-kaju",
    name: "Chocolate-Coated Kaju",
    category: "Chocolate-Covered Treats",
    collectionSlug: "chocolate-covered-treats",
    shortDescription: "Premium cashews draped in rich dark chocolate.",
    tastingNotes: "Buttery cashew, creamy chocolate, satisfying crunch",
    ingredients: "⚠️ SAMPLE — Dark chocolate (cocoa mass, sugar, cocoa butter), cashew nuts, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains tree nuts and soy. May contain milk.",
    price: 499,
    weight: "150g",
    availability: "Coming Soon",
    image: "/images/products/treat-kaju.jpg",
    isFeatured: true,
  },
  {
    slug: "choco-almonds",
    name: "Chocolate-Coated Almonds",
    category: "Chocolate-Covered Treats",
    collectionSlug: "chocolate-covered-treats",
    shortDescription: "Crunchy almonds in a generous coat of chocolate.",
    tastingNotes: "Toasted almond, bittersweet chocolate, nutty warmth",
    ingredients: "⚠️ SAMPLE — Dark chocolate (cocoa mass, sugar, cocoa butter), almonds, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains tree nuts and soy. May contain milk.",
    price: 479,
    weight: "150g",
    availability: "Coming Soon",
    image: "/images/products/treat-almonds.jpg",
  },
  {
    slug: "choco-berries",
    name: "Chocolate-Coated Berries",
    category: "Chocolate-Covered Treats",
    collectionSlug: "chocolate-covered-treats",
    shortDescription: "Freeze-dried berries encased in dark chocolate.",
    tastingNotes: "Tart berry burst, smooth chocolate, fruity sweetness",
    ingredients: "⚠️ SAMPLE — Dark chocolate (cocoa mass, sugar, cocoa butter), freeze-dried berries, soy lecithin",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 459,
    weight: "120g",
    availability: "Coming Soon",
    image: "/images/products/treat-berries.jpg",
  },

  /* ─── COCOA & HOT CHOCOLATE ─── */
  {
    slug: "cocoa-powder",
    name: "Pure Cocoa Powder",
    category: "Cocoa & Hot Chocolate",
    collectionSlug: "cocoa-hot-chocolate",
    shortDescription: "Rich, unsweetened cocoa powder for baking and beverages.",
    tastingNotes: "Deep earthy cocoa, intense aroma, versatile character",
    ingredients: "⚠️ SAMPLE — 100% cocoa powder (alkali processed)",
    allergens: "⚠️ SAMPLE — May contain milk, soy, and tree nuts.",
    price: 299,
    weight: "200g",
    availability: "Coming Soon",
    image: "/images/products/cocoa-powder.jpg",
  },
  {
    slug: "hot-chocolate-mix",
    name: "Artisan Hot Chocolate",
    category: "Cocoa & Hot Chocolate",
    collectionSlug: "cocoa-hot-chocolate",
    shortDescription: "A luxuriously thick drinking chocolate blend.",
    tastingNotes: "Velvety smooth, rich cocoa warmth, comforting sweetness",
    ingredients: "⚠️ SAMPLE — Cocoa powder, sugar, milk powder, vanilla extract",
    allergens: "⚠️ SAMPLE — Contains milk. May contain soy and tree nuts.",
    price: 349,
    weight: "250g",
    availability: "Coming Soon",
    image: "/images/products/hot-chocolate.jpg",
  },

  /* ─── GIFTING ─── */
  {
    slug: "gift-box-classic",
    name: "Classic Gift Box",
    category: "Gifting Collections",
    collectionSlug: "gifting",
    shortDescription: "A curated selection of our signature dark chocolates.",
    tastingNotes: "A journey through 50%, 70%, and 100% dark chocolate",
    ingredients: "⚠️ SAMPLE — Assorted dark chocolates (see individual products)",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 999,
    weight: "240g",
    availability: "Coming Soon",
    image: "/images/products/gift-classic.jpg",
    isFeatured: true,
  },
  {
    slug: "gift-box-assorted",
    name: "Assorted Chocolate Selection",
    category: "Gifting Collections",
    collectionSlug: "gifting",
    shortDescription: "A handpicked mix of flavoured and dark chocolates.",
    tastingNotes: "Diverse flavour journey across our finest creations",
    ingredients: "⚠️ SAMPLE — Assorted chocolates (see individual products)",
    allergens: "⚠️ SAMPLE — Contains soy and tree nuts. May contain milk.",
    price: 1299,
    weight: "350g",
    availability: "Coming Soon",
    image: "/images/products/gift-assorted.jpg",
  },
  {
    slug: "gift-box-seasonal",
    name: "Seasonal Collection",
    category: "Gifting Collections",
    collectionSlug: "gifting",
    shortDescription: "Limited-edition seasonal flavours in premium packaging.",
    tastingNotes: "Seasonal surprises with exclusive limited-edition flavours",
    ingredients: "⚠️ SAMPLE — Seasonal assorted chocolates (see individual products)",
    allergens: "⚠️ SAMPLE — Contains soy. May contain milk and tree nuts.",
    price: 1499,
    weight: "400g",
    availability: "Coming Soon",
    image: "/images/products/gift-seasonal.jpg",
    isNew: true,
  },
];

/* ═══════════════ HELPERS ═══════════════ */

export function getProductsByCollection(slug: string) {
  return products.filter((p) => p.collectionSlug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.isFeatured);
}

export function getNewProducts() {
  return products.filter((p) => p.isNew);
}
