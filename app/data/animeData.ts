export interface AnimeItem {
  id: string;
  title: string;
  japaneseTitle: string;
  synopsis: string;
  rating: number;
  approvalRate: number; // e.g. 96%
  sentiment: "UNIVERSAL_ACCLAIM" | "HIGHLY_FAVORABLE" | "CONTROVERSIAL" | "UNDISCOVERED_GEM";
  likes: number;
  dislikes: number;
  status: "AIRING" | "UPCOMING" | "CONCLUDED";
  episodes: string;
  season: string;
  genres: string[];
  studio: string;
  poster: string;
  accentColor: string;
  trendingRank: number;
  director: string;
  characters: {
    name: string;
    role: string;
    affinity: number;
    avatar: string;
  }[];
  ideasCount: number;
}

export interface AlternateCanonIdea {
  id: string;
  animeId: string;
  animeTitle: string;
  title: string;
  author: string;
  avatar: string;
  category: "WHAT_IF" | "ALTERNATE_ENDING" | "SPIN_OFF_CONCEPT" | "CHARACTER_PIVOT";
  summary: string;
  upvotes: number;
  commentsCount: number;
  tags: string[];
  timestamp: string;
}

export const FEATURED_HERO: AnimeItem = {
  id: "hero-1",
  title: "SHADOW: BLADE OF EXTINCTION",
  japaneseTitle: "滅亡の刃：零式プロトコル",
  synopsis: "In the cybernetic neon underground of Neo-Kyoto, a lone ronin reawakens with high-frequency katana augments to dismantle the seven corporate conglomerates controlling human memories.",
  rating: 9.68,
  approvalRate: 98.4,
  sentiment: "UNIVERSAL_ACCLAIM",
  likes: 42800,
  dislikes: 640,
  status: "AIRING",
  episodes: "EP 08 / 12",
  season: "FALL 2026",
  genres: ["Cyberpunk", "Action", "Supernatural", "Sci-Fi"],
  studio: "Mappa × AGY Intelligence",
  poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
  accentColor: "#FF1A40",
  trendingRank: 1,
  director: "Shinichiro Watanabe (Supervised)",
  characters: [
    { name: "Kurogane Ren", role: "Main Protagonist", affinity: 99, avatar: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&auto=format&fit=crop&q=80" },
    { name: "Aria Vance", role: "Neural Hacker", affinity: 94, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80" },
    { name: "Unit-Zero 'Jack'", role: "Synthetic Enforcer", affinity: 88, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" }
  ],
  ideasCount: 42
};

export const ANIME_DATASET: AnimeItem[] = [
  FEATURED_HERO,
  {
    id: "anime-2",
    title: "NEO CHRONO SYNAPSE",
    japaneseTitle: "時空同期シンドローム",
    synopsis: "When timelines fracture across orbital colonies, an astrophysicist and an android detective must synchronize consciousness across disparate eras before reality resets.",
    rating: 9.35,
    approvalRate: 94.2,
    sentiment: "UNIVERSAL_ACCLAIM",
    likes: 31200,
    dislikes: 1200,
    status: "AIRING",
    episodes: "EP 04 / 24",
    season: "FALL 2026",
    genres: ["Sci-Fi", "Mystery", "Psychological"],
    studio: "Wit Studio",
    poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80",
    accentColor: "#00F0FF",
    trendingRank: 2,
    director: "Hiroyuki Sawano (Score)",
    characters: [
      { name: "Dr. Makoto Kei", role: "Quantum Researcher", affinity: 95, avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80" },
      { name: "Iris-7", role: "Android Liaison", affinity: 91, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" }
    ],
    ideasCount: 29
  },
  {
    id: "anime-3",
    title: "VALKYRIE PROTOCOL: ZERO",
    japaneseTitle: "ヴァルキリー：終焉の誓約",
    synopsis: "Elite bio-mech operators fight against transcendent alien constructs on the dark side of Ganymede, balancing human sanity with combat overclocking.",
    rating: 8.92,
    approvalRate: 88.7,
    sentiment: "HIGHLY_FAVORABLE",
    likes: 19400,
    dislikes: 2100,
    status: "AIRING",
    episodes: "EP 06 / 13",
    season: "FALL 2026",
    genres: ["Mecha", "Action", "Military"],
    studio: "Trigger",
    poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80",
    accentColor: "#8B5CF6",
    trendingRank: 3,
    director: "Hiroyuki Imaishi",
    characters: [
      { name: "Erika Brandt", role: "Valkyrie Ace", affinity: 92, avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80" }
    ],
    ideasCount: 17
  },
  {
    id: "anime-4",
    title: "ABYSS OF VOID ALCHEMY",
    japaneseTitle: "虚無錬金術の深淵",
    synopsis: "Forbidden transmutations awaken subterranean entities beneath an ancient floating metropolis powered by dark matter relics.",
    rating: 8.74,
    approvalRate: 83.1,
    sentiment: "CONTROVERSIAL",
    likes: 14200,
    dislikes: 3100,
    status: "AIRING",
    episodes: "EP 09 / 12",
    season: "FALL 2026",
    genres: ["Dark Fantasy", "Supernatural"],
    studio: "Bones",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
    accentColor: "#FF1A40",
    trendingRank: 4,
    director: "Yuzuru Tachikawa",
    characters: [
      { name: "Soren Thorne", role: "Alchemist", affinity: 84, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" }
    ],
    ideasCount: 14
  },
  {
    id: "anime-5",
    title: "ECHOES OF THE SPECTRAL MATRIX",
    japaneseTitle: "電脳幽霊の共鳴",
    synopsis: "A rogue group of cyberspace acoustic archeologists uncover sound frequencies capable of altering human perception and physical architecture.",
    rating: 9.15,
    approvalRate: 91.5,
    sentiment: "HIGHLY_FAVORABLE",
    likes: 22800,
    dislikes: 1800,
    status: "UPCOMING",
    episodes: "PREMIERE NOV 2026",
    season: "WINTER 2026",
    genres: ["Cyberpunk", "Psychological", "Music"],
    studio: "Science SARU",
    poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    accentColor: "#00F0FF",
    trendingRank: 5,
    director: "Masaaki Yuasa",
    characters: [
      { name: "Natsume Ray", role: "Frequency Diver", affinity: 93, avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80" }
    ],
    ideasCount: 22
  },
  {
    id: "anime-6",
    title: "BLOODLINE: ECLIPSE OVER DRIVE",
    japaneseTitle: "真祖：紅蓮の駆動",
    synopsis: "Vampiric bloodlines pilot hypersonic interceptors in an endless twilight stratosphere above a sunken Earth.",
    rating: 8.65,
    approvalRate: 85.0,
    sentiment: "UNDISCOVERED_GEM",
    likes: 11200,
    dislikes: 1600,
    status: "CONCLUDED",
    episodes: "24 EP COMPLETE",
    season: "SUMMER 2026",
    genres: ["Vampire", "High-Octane", "Action"],
    studio: "Ufotable",
    poster: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80",
    accentColor: "#8B5CF6",
    trendingRank: 6,
    director: "Haruo Sotozaki",
    characters: [
      { name: "Carmilla Cross", role: "Bloodwing Pilot", affinity: 89, avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80" }
    ],
    ideasCount: 19
  }
];

export const ALTERNATE_IDEAS: AlternateCanonIdea[] = [
  {
    id: "idea-1",
    animeId: "hero-1",
    animeTitle: "SHADOW: BLADE OF EXTINCTION",
    title: "What if Kurogane accepted the Conglomerate Director seat in Episode 6?",
    author: "CyberRonin_99",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    category: "ALTERNATE_ENDING",
    summary: "Exploring a dystopian anti-hero route where Kurogane reforms the memory-harvesting protocol from within, becoming the very tyrant he swore to execute.",
    upvotes: 1420,
    commentsCount: 88,
    tags: ["Dystopian", "Anti-Hero", "Canon Divergence"],
    timestamp: "2 hours ago"
  },
  {
    id: "idea-2",
    animeId: "anime-2",
    animeTitle: "NEO CHRONO SYNAPSE",
    title: "Spin-off Concept: Iris-7's lost 50-year gap during the Ganymede blackout",
    author: "ChronoWeaver",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
    category: "SPIN_OFF_CONCEPT",
    summary: "A noir-style episodic investigation covering Iris-7 wandering desolate orbital colonies while her memory sectors are quarantined.",
    upvotes: 984,
    commentsCount: 46,
    tags: ["Noir", "Android Ethics", "Worldbuilding"],
    timestamp: "5 hours ago"
  },
  {
    id: "idea-3",
    animeId: "anime-3",
    animeTitle: "VALKYRIE PROTOCOL: ZERO",
    title: "Character Pivot: Erika Brandt was the alien construct core all along",
    author: "MechaTheorist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    category: "WHAT_IF",
    summary: "Re-contextualizing the entire combat telemetry data to reveal Erika was executing transcendent alien subroutines unconsciously.",
    upvotes: 812,
    commentsCount: 63,
    tags: ["Mind-Bender", "Mecha Core", "Plot Twist"],
    timestamp: "1 day ago"
  }
];
