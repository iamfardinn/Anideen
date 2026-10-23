"use client";

import React, { useState } from "react";
import { 
  X, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Sparkles, 
  Film, 
  UserCheck, 
  Share2, 
  Bookmark, 
  Terminal,
  Activity,
  Layers
} from "lucide-react";
import { AnimeItem, AlternateCanonIdea, ALTERNATE_IDEAS } from "../data/animeData";

interface DetailModalProps {
  anime: AnimeItem | null;
  onClose: () => void;
}

export function DetailModal({ anime, onClose }: DetailModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "characters" | "theories" | "sentiment">("overview");
  const [bookmarked, setBookmarked] = useState(false);
  const [newIdeaText, setNewIdeaText] = useState("");
  const [customTheories, setCustomTheories] = useState<string[]>([]);

  if (!anime) return null;

  const animeIdeas = ALTERNATE_IDEAS.filter((i) => i.animeId === anime.id);

  const handleAddIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIdeaText.trim()) return;
    setCustomTheories([newIdeaText.trim(), ...customTheories]);
    setNewIdeaText("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl glass-panel border border-[#00F0FF]/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Key Visual Banner */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-black flex-shrink-0">
          <img
            src={anime.poster}
            alt={anime.title}
            className="w-full h-full object-cover object-center filter blur-[1px] brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#FF1A40] hover:border-[#FF1A40] transition-all z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Key metadata badge overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between z-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-[#FF1A40] text-white text-[10px] font-mono font-bold tracking-wider">
                  STATUS: {anime.status}
                </span>
                <span className="text-xs font-mono text-[#00F0FF] tracking-wider">
                  {anime.studio}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {anime.title}
              </h2>
              <p className="text-xs text-gray-400 font-mono">{anime.japaneseTitle}</p>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                  bookmarked ? "bg-[#00F0FF]/20 border-[#00F0FF] text-[#00F0FF]" : "bg-black/60 border-white/20 text-white"
                }`}
                title="Bookmark to Personal Vault"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#10121A] px-6">
          {(["overview", "characters", "theories", "sentiment"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-4 text-xs font-mono uppercase tracking-wider transition-all border-b-2 font-semibold ${
                activeTab === tab
                  ? "border-[#FF1A40] text-[#FF1A40]"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-gray-300">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Synopsis */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[#00F0FF] tracking-wider mb-2 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  Neural Synopsis
                </h4>
                <p className="leading-relaxed text-gray-300">{anime.synopsis}</p>
              </div>

              {/* Data Grid Spec */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">GLOBAL RATING</span>
                  <div className="flex items-center gap-1.5 text-base font-bold text-white font-mono">
                    <Star className="w-4 h-4 fill-[#00F0FF] text-[#00F0FF]" />
                    {anime.rating} / 10
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">APPROVAL PULSE</span>
                  <div className="text-base font-bold text-emerald-400 font-mono">
                    {anime.approvalRate}%
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">BROADCAST EPISODES</span>
                  <div className="text-base font-bold text-white font-mono">
                    {anime.episodes}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">DIRECTOR</span>
                  <div className="text-xs font-semibold text-gray-200 truncate">
                    {anime.director}
                  </div>
                </div>
              </div>

              {/* Genres */}
              <div>
                <span className="text-xs font-mono text-gray-400 block mb-2">SYSTEM TAGS</span>
                <div className="flex flex-wrap gap-2">
                  {anime.genres.map((g) => (
                    <span key={g} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "characters" && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase text-[#00F0FF] tracking-wider mb-2 flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5" />
                Featured Cast & Neural Synchronization
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {anime.characters.map((char) => (
                  <div key={char.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <img
                      src={char.avatar}
                      alt={char.name}
                      className="w-12 h-12 rounded-lg object-cover border border-white/20"
                    />
                    <div className="flex-1">
                      <h5 className="font-bold text-white text-sm">{char.name}</h5>
                      <p className="text-xs text-gray-400">{char.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div className="bg-[#FF1A40] h-full" style={{ width: `${char.affinity}%` }} />
                        </div>
                        <span className="text-[10px] font-mono text-[#FF1A40]">{char.affinity}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "theories" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase text-[#8B5CF6] tracking-wider flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Alternate Canon & "What-If" Vault
                </h4>
                <span className="text-xs font-mono text-gray-400">
                  {animeIdeas.length + customTheories.length} Entries Logged
                </span>
              </div>

              {/* Add Alternate Theory Input */}
              <form onSubmit={handleAddIdea} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Draft an alternate timeline or fan theory..."
                  value={newIdeaText}
                  onChange={(e) => setNewIdeaText(e.target.value)}
                  className="flex-1 bg-[#161924] border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#8B5CF6]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#8B5CF6] text-white text-xs font-semibold hover:bg-[#8B5CF6]/80 transition-all font-mono"
                >
                  Log Theory
                </button>
              </form>

              {/* Custom theories logged live */}
              {customTheories.map((theory, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#8B5CF6] mb-1">
                    <span>COMMUNITY SUBMISSION</span>
                    <span>•</span>
                    <span>Just Now</span>
                  </div>
                  <p className="text-xs text-white">{theory}</p>
                </div>
              ))}

              {/* Preloaded ideas */}
              {animeIdeas.map((idea) => (
                <div key={idea.id} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#8B5CF6]/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/40 font-bold">
                      {idea.category}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">{idea.timestamp}</span>
                  </div>
                  <h5 className="font-bold text-white text-sm mb-1.5">{idea.title}</h5>
                  <p className="text-xs text-gray-300 leading-relaxed mb-3">{idea.summary}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>By {idea.author}</span>
                    <span className="text-emerald-400">▲ {idea.upvotes} Upvotes</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "sentiment" && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" />
                Crowd Sentiment Breakdown & Metric Analytics
              </h4>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-emerald-400">Positive Telemetry ({anime.likes.toLocaleString()} votes)</span>
                    <span className="text-[#FF1A40]">Negative Telemetry ({anime.dislikes.toLocaleString()} votes)</span>
                  </div>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden flex">
                    <div className="bg-emerald-500 h-full" style={{ width: `${anime.approvalRate}%` }} />
                    <div className="bg-[#FF1A40] h-full" style={{ width: `${100 - anime.approvalRate}%` }} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-[11px] font-bold text-emerald-400 font-mono block mb-1">Key Praise Vectors:</span>
                    <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                      <li>S-Tier dynamic combat choreography</li>
                      <li>Immersive dystopian cybernetic lore</li>
                      <li>High-octane synthwave musical score</li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FF1A40]/10 border border-[#FF1A40]/20">
                    <span className="text-[11px] font-bold text-[#FF1A40] font-mono block mb-1">Critique Vectors:</span>
                    <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                      <li>Nonlinear timeline requires re-watches</li>
                      <li>Cliffhanger pacing on mid-season arcs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
