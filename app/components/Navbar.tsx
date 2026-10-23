"use client";

import React, { useState } from "react";
import { Search, Compass, BookMarked, Lightbulb, User, Sparkles, Terminal } from "lucide-react";

export function Navbar() {
  const [activeTab, setActiveTab] = useState("discover");

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF1A40] via-[#8B5CF6] to-[#00F0FF] p-[1.5px] flex items-center justify-center">
            <div className="w-full h-full bg-[#090A0F] rounded-[7px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-[#FF1A40]" />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F0FF]"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-lg text-white font-mono">
                ANI<span className="text-[#FF1A40]">NEXUS</span>
              </span>
              <span className="text-[10px] tracking-widest px-1.5 py-0.5 rounded bg-white/10 text-[#00F0FF] font-mono border border-[#00F0FF]/30">
                CORE v2.6
              </span>
            </div>
            <p className="text-[10px] text-gray-400 font-mono tracking-wider hidden sm:block">
              INTELLIGENCE & CANON HUB
            </p>
          </div>
        </div>

        {/* Search Bar HUD */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search anime, characters, studios, theories..."
              className="w-full bg-[#161924]/80 border border-white/10 rounded-full pl-9 pr-14 py-1.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1A40] focus:ring-1 focus:ring-[#FF1A40] transition-all"
            />
            <span className="absolute right-3 text-[10px] font-mono text-gray-400 bg-black/40 px-1.5 py-0.5 rounded border border-white/10">
              ⌘K
            </span>
          </div>
        </div>

        {/* Navigation Actions */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => {
              setActiveTab("discover");
              document.getElementById("discovery-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "discover"
                ? "bg-[#FF1A40]/15 text-[#FF1A40] border border-[#FF1A40]/40"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Discover</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("ideas");
              document.getElementById("ideas-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "ideas"
                ? "bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/40"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>Idea Lab</span>
            <span className="text-[10px] bg-[#8B5CF6]/30 text-[#8B5CF6] px-1 py-0.2 rounded font-mono">
              NEW
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab("lists");
              document.getElementById("community-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "lists"
                ? "bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span className="hidden sm:inline">My Log</span>
          </button>

          {/* User Profile */}
          <div className="ml-2 pl-2 border-l border-white/10 flex items-center gap-2">
            <button className="flex items-center gap-2 p-1.5 rounded-full hover:bg-white/5 transition-all text-gray-300">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FF1A40] to-[#8B5CF6] p-[1px]">
                <div className="w-full h-full bg-[#090A0F] rounded-full flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
