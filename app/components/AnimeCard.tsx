"use client";

import React, { useState } from "react";
import { Star, ThumbsUp, ThumbsDown, Sparkles, Eye, Plus, Check } from "lucide-react";
import { AnimeItem } from "../data/animeData";

interface AnimeCardProps {
  anime: AnimeItem;
  onSelect: (anime: AnimeItem) => void;
}

export function AnimeCard({ anime, onSelect }: AnimeCardProps) {
  const [logged, setLogged] = useState(false);
  const [userVote, setUserVote] = useState<"like" | "dislike" | null>(null);

  const totalVotes = anime.likes + anime.dislikes;
  const likePercentage = Math.round((anime.likes / totalVotes) * 100);

  return (
    <div className="group relative flex flex-col rounded-xl overflow-hidden glass-card cursor-pointer">
      {/* Poster Art with Hover Zoom */}
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#161924]"
        onClick={() => onSelect(anime)}
      >
        <img
          src={anime.poster}
          alt={anime.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Scrim for Card */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-black/40" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <span className="px-2 py-0.5 rounded bg-black/75 border border-white/20 text-[#00F0FF] text-[11px] font-mono font-bold backdrop-blur-md flex items-center gap-1">
            <Star className="w-3 h-3 fill-[#00F0FF] text-[#00F0FF]" />
            {anime.rating}
          </span>

          <span className="px-2 py-0.5 rounded bg-[#FF1A40]/90 text-white text-[10px] font-mono font-bold tracking-wider uppercase">
            #{anime.trendingRank}
          </span>
        </div>

        {/* Hover Quick Overlay Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(anime);
            }}
            className="p-3 rounded-full bg-[#FF1A40] text-white hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,26,64,0.5)]"
            title="Inspect Intelligence"
          >
            <Eye className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLogged(!logged);
            }}
            className={`p-3 rounded-full border transition-all ${
              logged 
                ? "bg-[#00F0FF] text-black border-[#00F0FF]" 
                : "bg-white/10 text-white border-white/30 hover:bg-white/20"
            }`}
            title={logged ? "Remove from Log" : "Add to Watchlist"}
          >
            {logged ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-[#10121A]/80">
        <div>
          {/* Micro Status Line */}
          <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono mb-1.5">
            <span>{anime.studio}</span>
            <span className="text-[#00F0FF]">{anime.episodes}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(anime)}
            className="text-base font-bold text-white group-hover:text-[#FF1A40] transition-colors line-clamp-1 mb-2"
          >
            {anime.title}
          </h3>

          {/* Genres */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {anime.genres.slice(0, 2).map((genre) => (
              <span 
                key={genre} 
                className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 font-mono"
              >
                {genre}
              </span>
            ))}
            {anime.ideasCount > 0 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[#8B5CF6] font-mono flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                {anime.ideasCount}
              </span>
            )}
          </div>
        </div>

        {/* Sentiment Bar & Voting Module */}
        <div className="pt-2 border-t border-white/10">
          <div className="flex items-center justify-between text-[11px] mb-1 font-mono">
            <span className="text-gray-400">Community Sentiment</span>
            <span className="text-emerald-400 font-bold">{likePercentage}% Positive</span>
          </div>

          {/* Multi-segmented sentiment ratio bar */}
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden flex mb-2.5">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-[#00F0FF] h-full"
              style={{ width: `${likePercentage}%` }}
            />
            <div 
              className="bg-[#FF1A40] h-full"
              style={{ width: `${100 - likePercentage}%` }}
            />
          </div>

          {/* Quick Reaction buttons */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <button
              onClick={() => setUserVote(userVote === "like" ? null : "like")}
              className={`flex items-center gap-1 px-2 py-1 rounded text-gray-400 hover:text-white transition-all ${
                userVote === "like" ? "text-emerald-400 font-semibold bg-emerald-500/10" : ""
              }`}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{(anime.likes + (userVote === "like" ? 1 : 0)).toLocaleString()}</span>
            </button>

            <button
              onClick={() => setUserVote(userVote === "dislike" ? null : "dislike")}
              className={`flex items-center gap-1 px-2 py-1 rounded text-gray-400 hover:text-white transition-all ${
                userVote === "dislike" ? "text-[#FF1A40] font-semibold bg-[#FF1A40]/10" : ""
              }`}
            >
              <ThumbsDown className="w-3.5 h-3.5" />
              <span>{(anime.dislikes + (userVote === "dislike" ? 1 : 0)).toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
