"use client";

import React, { useState, useRef } from "react";
import { 
  Play, 
  Plus, 
  Volume2, 
  VolumeX, 
  Star, 
  TrendingUp, 
  ShieldCheck, 
  ThumbsUp, 
  Sparkles, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { AnimeItem } from "../data/animeData";

interface HeroSectionProps {
  anime: AnimeItem;
  onExplore: (anime: AnimeItem) => void;
}

export function HeroSection({ anime, onExplore }: HeroSectionProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState(false);
  const [inList, setInList] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full min-h-[82vh] lg:min-h-[88vh] flex items-end justify-start overflow-hidden border-b border-white/10">
      {/* Background Video Player */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#090A0F]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.85] contrast-[1.1]"
        >
          {/* Direct link to public hero-bg.mp4 */}
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="/Action_character_fighting_with_k…_202607212223.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Multi-layered Cyberpunk Scrim Overlays */}
        {/* Dark vignette left & bottom for perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/65 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0F] via-[#090A0F]/80 to-transparent z-10 max-w-4xl" />
        
        {/* Subtle holographic grid lines */}
        <div 
          className="absolute inset-0 z-10 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        {/* Ambient Neon Glow Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF1A40]/15 rounded-full blur-3xl pointer-events-none z-10" />
        <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* Floating HUD controls on top right */}
      <div className="absolute top-6 right-6 lg:right-10 z-20 flex items-center gap-3">
        {/* Live Broadcast / Telemetry Tag */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-[#00F0FF]/30 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
          <span className="text-[11px] font-mono tracking-wider text-[#00F0FF]">
            NEURAL FEED ACTIVE
          </span>
        </div>

        {/* Sound toggle button */}
        <button
          onClick={toggleSound}
          className="p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:border-[#FF1A40] hover:text-[#FF1A40] backdrop-blur-md transition-all shadow-lg"
          title={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#FF1A40]" />}
        </button>
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-10 pb-16 pt-32 w-full">
        {/* Metadata Chips / HUD Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-2.5 py-1 rounded bg-[#FF1A40]/20 border border-[#FF1A40]/60 text-[#FF1A40] text-xs font-mono font-bold tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            RANK #{anime.trendingRank} SPOTLIGHT
          </span>

          <span className="px-2.5 py-1 rounded bg-[#161924]/80 border border-white/10 text-[#00F0FF] text-xs font-mono tracking-wider flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-[#00F0FF] text-[#00F0FF]" />
            {anime.rating} / 10
          </span>

          <span className="px-2.5 py-1 rounded bg-[#161924]/80 border border-white/10 text-emerald-400 text-xs font-mono tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            {anime.approvalRate}% SENTIMENT
          </span>

          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300 text-xs font-mono">
            {anime.season} • {anime.episodes}
          </span>
        </div>

        {/* Japanese Title Accent */}
        <p className="text-xs lg:text-sm font-mono tracking-widest text-[#00F0FF]/80 mb-2 uppercase flex items-center gap-2">
          <span>{anime.japaneseTitle}</span>
          <span className="h-px w-12 bg-[#00F0FF]/30 inline-block" />
          <span className="text-gray-400 font-sans">{anime.studio}</span>
        </p>

        {/* Cinematic Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-tight drop-shadow-md">
          {anime.title}
        </h1>

        {/* Synopsis & Key Info */}
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mb-6 line-clamp-3 leading-relaxed font-normal text-shadow">
          {anime.synopsis}
        </p>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-8">
          {anime.genres.map((genre) => (
            <span
              key={genre}
              className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-gray-300 text-xs hover:border-[#8B5CF6] transition-all"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => onExplore(anime)}
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF1A40] to-[#FF4565] text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(255,26,64,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Initialize Intelligence</span>
          </button>

          <button
            onClick={() => setInList(!inList)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm border backdrop-blur-md transition-all cursor-pointer ${
              inList
                ? "bg-[#00F0FF]/20 border-[#00F0FF] text-[#00F0FF]"
                : "bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-white/40"
            }`}
          >
            <Plus className={`w-4 h-4 ${inList ? "rotate-45" : ""} transition-transform`} />
            <span>{inList ? "Logged to Watchlist" : "Add to Neural Log"}</span>
          </button>

          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm border backdrop-blur-md transition-all cursor-pointer ${
              liked
                ? "bg-[#FF1A40]/20 border-[#FF1A40] text-[#FF1A40]"
                : "bg-black/40 border-white/15 text-gray-300 hover:text-white hover:border-white/30"
            }`}
          >
            <ThumbsUp className={`w-4 h-4 ${liked ? "fill-[#FF1A40]" : ""}`} />
            <span>{liked ? (anime.likes + 1).toLocaleString() : anime.likes.toLocaleString()}</span>
          </button>

          {/* Quick Ideas Trigger */}
          <button
            onClick={() => document.getElementById("ideas-section")?.scrollIntoView({ behavior: "smooth" })}
            className="hidden sm:flex items-center gap-1.5 px-4 py-3 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 text-[#8B5CF6] text-sm hover:bg-[#8B5CF6]/25 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>{anime.ideasCount} Alternate Theories</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
