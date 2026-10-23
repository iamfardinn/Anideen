"use client";

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AnimeCard } from "./components/AnimeCard";
import { DetailModal } from "./components/DetailModal";
import { IdeaLab } from "./components/IdeaLab";
import { CommunitySection } from "./components/CommunitySection";
import { ANIME_DATASET, FEATURED_HERO, ALTERNATE_IDEAS, AnimeItem } from "./data/animeData";
import { 
  Filter, 
  Flame, 
  Sparkles, 
  TrendingUp, 
  SlidersHorizontal,
  ChevronDown,
  Layers,
  Terminal,
  Compass
} from "lucide-react";

export default function Home() {
  const [selectedAnime, setSelectedAnime] = useState<AnimeItem | null>(null);
  const [activeFilterGenre, setActiveFilterGenre] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"trending" | "rating" | "approval">("trending");

  // Filtering and sorting logic
  const filteredList = ANIME_DATASET.filter((item) => {
    if (activeFilterGenre === "ALL") return true;
    return item.genres.includes(activeFilterGenre);
  }).sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "approval") return b.approvalRate - a.approvalRate;
    return a.trendingRank - b.trendingRank;
  });

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F1F3F9] flex flex-col font-sans selection:bg-[#FF1A40] selection:text-white">
      {/* SECTION 1: Futuristic Navigation Bar */}
      <Navbar />

      {/* SECTION 2: Hero Section with background video in public folder */}
      <HeroSection 
        anime={FEATURED_HERO} 
        onExplore={(anime) => setSelectedAnime(anime)} 
      />

      {/* SECTION 3 & 4: Discovery Hub & Filter Matrix */}
      <main id="discovery-section" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full">
        {/* Controls HUD Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] mb-2 tracking-widest uppercase">
              <Compass className="w-4 h-4" />
              <span>Section 3 & 4 — Discovery Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>Catalog Telemetry</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FF1A40]/15 text-[#FF1A40] border border-[#FF1A40]/30 font-normal">
                {filteredList.length} Units Active
              </span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Curated anime database ranked by community sentiment, technical ratings, and deep canon logs.
            </p>
          </div>

          {/* Sort dropdown buttons */}
          <div className="flex items-center gap-2 bg-[#161924]/80 p-1.5 rounded-xl border border-white/10 self-start md:self-auto">
            <span className="text-xs font-mono text-gray-400 px-2 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </span>

            {(
              [
                { id: "trending", label: "Rank" },
                { id: "rating", label: "Rating" },
                { id: "approval", label: "Sentiment" }
              ] as const
            ).map((s) => (
              <button
                key={s.id}
                onClick={() => setSortBy(s.id)}
                className={`px-3 py-1 text-xs rounded-lg font-mono transition-all ${
                  sortBy === s.id
                    ? "bg-[#FF1A40] text-white font-bold shadow-[0_0_12px_rgba(255,26,64,0.4)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Chip Matrix */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-white/5">
          {["ALL", "Cyberpunk", "Action", "Sci-Fi", "Dark Fantasy", "Mecha", "Psychological"].map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveFilterGenre(genre)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeFilterGenre === genre
                  ? "bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 font-semibold"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Discovery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredList.map((anime) => (
            <AnimeCard
              key={anime.id}
              anime={anime}
              onSelect={(item) => setSelectedAnime(item)}
            />
          ))}
        </div>
      </main>

      {/* SECTION 5: Idea Lab ("What-If" Story Hub & Alternate Canon) */}
      <IdeaLab ideas={ALTERNATE_IDEAS} />

      {/* SECTION 6: Community Pulse & Live Dispatch */}
      <CommunitySection />

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#06070a] py-10 px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white">ANINEXUS INTELLIGENCE</span>
            <span>•</span>
            <span>SPEC COMPLIANT WITH DESIGN.MD</span>
          </div>
          <div>
            Built with Next.js, Tailwind CSS & Cyberpunk Glassmorphism Aesthetics.
          </div>
        </div>
      </footer>

      {/* SECTION 7: Deep Dive Modal */}
      <DetailModal
        anime={selectedAnime}
        onClose={() => setSelectedAnime(null)}
      />
    </div>
  );
}
