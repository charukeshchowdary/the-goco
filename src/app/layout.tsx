import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE GOCO — Where Chocolate Tells a Story",
  description:
    "THE GOCO is a premium artisan chocolate brand launching October 2026. Discover our story of cocoa, coconut, and craftsmanship rooted in Godavari.",
  keywords: ["chocolate", "artisan", "cocoa", "premium", "THE GOCO", "Godavari", "coconut", "October 2026"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#120905] text-[#FAF5EE] selection:bg-gold/30 selection:text-cream">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 bg-[#120905]">{children}</main>
      </body>
    </html>
  );
}
