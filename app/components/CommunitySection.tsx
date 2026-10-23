"use client";

import React, { useState } from "react";
import { MessageSquare, Flame, Award, Heart, ThumbsUp, Send } from "lucide-react";

interface CommentItem {
  id: string;
  author: string;
  avatar: string;
  animeTitle: string;
  sentiment: "PRAISE" | "DEBATE" | "THEORY";
  comment: string;
  likes: number;
  time: string;
}

const INITIAL_REVIEWS: CommentItem[] = [
  {
    id: "rev-1",
    author: "KageSenshi",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    animeTitle: "SHADOW: BLADE OF EXTINCTION",
    sentiment: "PRAISE",
    comment: "The sound engineering on the katana high-frequency blade clashes is unmatched in modern anime. The background soundtrack in Episode 3 gave me goosebumps.",
    likes: 342,
    time: "20m ago"
  },
  {
    id: "rev-2",
    author: "NeonCipher",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
    animeTitle: "NEO CHRONO SYNAPSE",
    sentiment: "THEORY",
    comment: "Pay attention to the background clock on the orbital station in Ep 2. The digits count in base-12, hinting that Iris-7's creator belongs to the subterranean race.",
    likes: 198,
    time: "1h ago"
  },
  {
    id: "rev-3",
    author: "ValkyriePilot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    animeTitle: "VALKYRIE PROTOCOL: ZERO",
    sentiment: "DEBATE",
    comment: "Unpopular take: Erika's decision in the final act was justified. The command center betrayed the unit twice before the retreat order.",
    likes: 115,
    time: "3h ago"
  }
];

export function CommunitySection() {
  const [reviews, setReviews] = useState<CommentItem[]>(INITIAL_REVIEWS);
  const [newComment, setNewComment] = useState("");
  const [selectedSentiment, setSelectedSentiment] = useState<"PRAISE" | "DEBATE" | "THEORY">("PRAISE");

  const handlePostReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const item: CommentItem = {
      id: `rev-${Date.now()}`,
      author: "Neural_Surfer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      animeTitle: "SHADOW: BLADE OF EXTINCTION",
      sentiment: selectedSentiment,
      comment: newComment.trim(),
      likes: 1,
      time: "Just now"
    };

    setReviews([item, ...reviews]);
    setNewComment("");
  };

  return (
    <section id="community-section" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#090A0F]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] mb-2 tracking-widest uppercase">
              <Flame className="w-4 h-4" />
              <span>Section 7 — Live Sentiment Pulse</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Community Dispatch & Reviews
            </h2>
            <p className="text-sm text-gray-400 mt-1 max-w-xl">
              Real-time impressions, critical arguments, and tactical impressions from anime enthusiasts.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>4,819 Active Reviewers</span>
          </div>
        </div>

        {/* Input Box for Quick Thought */}
        <form onSubmit={handlePostReview} className="mb-10 p-4 rounded-2xl glass-card border border-white/10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono text-gray-400">Post Reaction as:</span>
            {(["PRAISE", "DEBATE", "THEORY"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSentiment(s)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                  selectedSentiment === s
                    ? s === "PRAISE" 
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                      : s === "DEBATE"
                      ? "bg-[#FF1A40]/20 text-[#FF1A40] border border-[#FF1A40]/50"
                      : "bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/50"
                    : "bg-white/5 text-gray-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Transmit your verified verdict or analysis..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 bg-[#161924] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF]"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF1A40] to-[#8B5CF6] text-white text-xs font-semibold flex items-center gap-2 hover:opacity-90 transition-all font-mono"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Transmit</span>
            </button>
          </div>
        </form>

        {/* Reviews Feed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-2xl glass-card border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      rev.sentiment === "PRAISE"
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        : rev.sentiment === "DEBATE"
                        ? "bg-[#FF1A40]/15 text-[#FF1A40] border border-[#FF1A40]/30"
                        : "bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30"
                    }`}
                  >
                    {rev.sentiment}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">{rev.time}</span>
                </div>

                <p className="text-xs font-mono text-[#00F0FF] mb-2">{rev.animeTitle}</p>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">{rev.comment}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-5 h-5 rounded-full object-cover border border-white/20"
                  />
                  <span className="text-gray-400 font-mono text-[11px]">{rev.author}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-400 hover:text-white font-mono text-[11px] cursor-pointer">
                  <ThumbsUp className="w-3 h-3" />
                  <span>{rev.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
