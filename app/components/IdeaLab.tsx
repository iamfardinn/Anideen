"use client";

import React, { useState } from "react";
import { Sparkles, MessageSquare, ArrowBigUp, Plus, Lightbulb, CheckCircle2 } from "lucide-react";
import { AlternateCanonIdea } from "../data/animeData";

interface IdeaLabProps {
  ideas: AlternateCanonIdea[];
}

export function IdeaLab({ ideas }: IdeaLabProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [ideaList, setIdeaList] = useState<AlternateCanonIdea[]>(ideas);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const [newCategory, setNewCategory] = useState<AlternateCanonIdea["category"]>("WHAT_IF");
  const [animeTarget, setAnimeTarget] = useState("SHADOW: BLADE OF EXTINCTION");
  const [upvotedMap, setUpvotedMap] = useState<Record<string, boolean>>({});

  const handleUpvote = (id: string) => {
    setUpvotedMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSubmitIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newSummary.trim()) return;

    const created: AlternateCanonIdea = {
      id: `custom-idea-${Date.now()}`,
      animeId: "hero-1",
      animeTitle: animeTarget,
      title: newTitle.trim(),
      author: "Operator_Guest",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      category: newCategory,
      summary: newSummary.trim(),
      upvotes: 1,
      commentsCount: 0,
      tags: ["Community Theory", "Alternate Timeline"],
      timestamp: "Just Now"
    };

    setIdeaList([created, ...ideaList]);
    setNewTitle("");
    setNewSummary("");
    setShowSubmitModal(false);
  };

  const filteredIdeas = activeCategory === "ALL" 
    ? ideaList 
    : ideaList.filter((i) => i.category === activeCategory);

  return (
    <section id="ideas-section" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#0c0e15] relative overflow-hidden">
      {/* Background ambient neon */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8B5CF6] mb-2 tracking-widest uppercase">
              <Lightbulb className="w-4 h-4" />
              <span>Section 6 — Community Thinktank</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Idea Lab & Alternate Canon
            </h2>
            <p className="text-sm text-gray-400 mt-1 max-w-xl">
              Store anime concepts, alternate timeline forks, and fan theories. A collaborative space to re-imagine your favorite narratives.
            </p>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all cursor-pointer self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Submit Alternate Theory</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: "ALL", label: "All Speculations" },
            { id: "WHAT_IF", label: "What If?" },
            { id: "ALTERNATE_ENDING", label: "Alternate Endings" },
            { id: "SPIN_OFF_CONCEPT", label: "Spin-Off Concepts" },
            { id: "CHARACTER_PIVOT", label: "Character Pivots" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? "bg-[#8B5CF6] text-white font-bold shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Idea Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => {
            const isUpvoted = !!upvotedMap[idea.id];
            const currentVotes = idea.upvotes + (isUpvoted ? 1 : 0);

            return (
              <div
                key={idea.id}
                className="flex flex-col justify-between p-6 rounded-2xl glass-card border border-white/10 hover:border-[#8B5CF6]/50 transition-all group"
              >
                <div>
                  {/* Category and Anime reference */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/40 font-bold uppercase tracking-wider">
                      {idea.category.replace(/_/g, " ")}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {idea.timestamp}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#00F0FF] mb-1.5 block line-clamp-1">
                    Canon: {idea.animeTitle}
                  </span>

                  <h3 className="text-base font-bold text-white group-hover:text-[#8B5CF6] transition-colors mb-2.5 leading-snug">
                    {idea.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {idea.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {idea.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-gray-400 border border-white/5 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: User & Upvotes */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <img
                      src={idea.avatar}
                      alt={idea.author}
                      className="w-6 h-6 rounded-full object-cover border border-white/20"
                    />
                    <span className="text-xs text-gray-300 font-medium">{idea.author}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleUpvote(idea.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                        isUpvoted
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <ArrowBigUp className={`w-4 h-4 ${isUpvoted ? "fill-emerald-400" : ""}`} />
                      <span>{currentVotes}</span>
                    </button>

                    <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{idea.commentsCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Submitting New Idea */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg p-6 rounded-2xl glass-panel border border-[#8B5CF6]/50 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              Transmit Alternate Canon Theory
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Enter an alternate route, timeline divergence, or spin-off pitch.
            </p>

            <form onSubmit={handleSubmitIdea} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono text-gray-300 block mb-1">Target Anime</label>
                <select
                  value={animeTarget}
                  onChange={(e) => setAnimeTarget(e.target.value)}
                  className="w-full bg-[#161924] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="SHADOW: BLADE OF EXTINCTION">SHADOW: BLADE OF EXTINCTION</option>
                  <option value="NEO CHRONO SYNAPSE">NEO CHRONO SYNAPSE</option>
                  <option value="VALKYRIE PROTOCOL: ZERO">VALKYRIE PROTOCOL: ZERO</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono text-gray-300 block mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full bg-[#161924] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="WHAT_IF">What If?</option>
                  <option value="ALTERNATE_ENDING">Alternate Ending</option>
                  <option value="SPIN_OFF_CONCEPT">Spin-Off Concept</option>
                  <option value="CHARACTER_PIVOT">Character Pivot</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono text-gray-300 block mb-1">Hypothesis Title</label>
                <input
                  type="text"
                  placeholder="e.g. What if the protagonist lost their augments in Act 1?"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                  className="w-full bg-[#161924] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-gray-300 block mb-1">Detailed Narrative Synopsis</label>
                <textarea
                  rows={4}
                  placeholder="Explain how the narrative diverges, psychological stakes, and character reactions..."
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  required
                  className="w-full bg-[#161924] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-white font-mono"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#8B5CF6] text-white text-xs font-semibold hover:bg-[#8B5CF6]/80 transition-all font-mono"
                >
                  Broadcast to Hub
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
