# Design Prompt — Anime Intelligence Platform

Imagine you are a senior modern UI/UX designer and frontend web developer with 10–15 years of experience building cinematic, animation-rich web interfaces for media and entertainment platforms.

Design a premium, UI-heavy anime discovery platform inspired by AniList, built around storing anime ideas, people, likes, dislikes, reviews, and community sentiment. The product should feel like a futuristic anime intelligence hub, not a generic streaming site.

The website will use a custom background video in the hero sections, so the hero layout must be designed to support cinematic motion footage with clean overlays, strong typography, clear CTA placement, and readable foreground content.

Use the provided visual palette as the foundation of the design system:
- Primary red: #FF1A40
- Secondary purple: #8B5CF6
- Tertiary cyan: #00F0FF
- Neutral dark base: #090A0F
- Supporting surfaces: layered charcoal and soft gray-white text

Keep the interface dark, high-contrast, neon-lit, polished, and futuristic, with a cyber-HUD aesthetic. Do not copy any reference directly; use it only as inspiration.

Follow these 5 Core Dimensions:

## 1. PATTERN & LAYOUT
- Build a modern content-discovery layout with a strong hero section, featured anime cards, sentiment modules, trending lists, filters, and detail panels.
- Use a modular grid system with clear hierarchy and dense but organized information architecture.
- Include sections for anime discovery, anime detail pages, people/character pages, user opinions, likes/dislikes, reviews, recommendations, and community tags.
- Design the hero section to work with custom background video, using glassmorphic overlays, status chips, compact UI panels, and powerful CTA buttons.
- Make the interface rich and layered, but still easy to scan.

## 2. STYLE & AESTHETIC
- Use a cyberpunk anime-tech aesthetic with refined glassmorphism, subtle glow effects, sharp borders, soft shadows, and compact HUD-like components.
- Blend editorial media UI with sci-fi interface language.
- The interface should feel premium, experimental, immersive, and built for heavy content browsing.
- Avoid clutter; every visual element should feel intentional.
- Make cards, panels, tabs, badges, and metric bars feel tactile and high-end.

## 3. COLOR & THEME
- Primary: neon crimson red for key actions, highlights, active states, and brand accents.
- Secondary: electric violet for supporting emphasis, category separation, and alternate highlights.
- Tertiary: bright cyan for data, status, and informational accents.
- Background: deep black / charcoal / obsidian tones with layered surface elevation.
- Neutral: soft gray-white typography and muted UI borders for contrast.
- Keep the palette limited and disciplined.
- Use gradients sparingly and only where they reinforce depth and energy.

## 4. TYPOGRAPHY
- Use a modern sans-serif with a strong futuristic tone for headers and a clean readable sans-serif for body text.
- Headlines should be bold, compact, and cinematic.
- Body text should be highly legible and spacious enough for dense UI content.
- Use typographic hierarchy to separate major sections, metadata, labels, and microcopy.
- Add occasional stylized micro-labels or Japanese-inspired UI text sparingly as decorative detail, but keep readability first.

## 5. ANIMATIONS & INTERACTIONS
- Keep motion elegant, subtle, and performance-friendly.
- Use opacity, transform, and lightweight transitions only.
- Hover states should feel responsive and premium, with quick glow shifts, slight elevation, and accent color changes.
- Add restrained ambient motion in the hero area, but avoid distracting or excessive animation.
- Support prefers-reduced-motion and keep interactions accessible.
- Animations should enhance the futuristic feel without slowing the interface.

## Preferred frontend stack for smooth animation and clean implementation
- Next.js with App Router
- TypeScript
- Tailwind CSS for fast, consistent styling
- Framer Motion for smooth UI animation
- Radix UI or shadcn/ui for accessible primitives
- Zustand or Jotai for lightweight state management
- TanStack Query for server-state and caching
- CSS variables for theme tokens and scalable design consistency

## Code and architecture rules
- Write reusable, modular components.
- Avoid repeated code.
- Use shared UI primitives, component variants, and helper utilities.
- Keep the codebase token-efficient and maintainable.
- Prefer composition over duplication.
- Use consistent spacing, naming, and design tokens.
- Build once, reuse everywhere.
- Minimize repetition in prompts, components, and implementation instructions so the agent consumes fewer tokens and the codebase stays clean.

## Workflow and approval rules
- Approve all decisions automatically when the agent asks for permission, because this workflow runs in Antigravity and permission prompts are expected.
- Do not stop for unnecessary confirmations on routine UI decisions.
- When a small feature or section is finished designing, push it to GitHub immediately.
- Work in small, shippable increments.
- Keep commits focused and meaningful.
- Treat each completed UI slice as a ready-to-sync deliverable.

## Platform features to include
- Anime discovery feed
- Advanced filters and sorting
- Anime detail pages
- Character / people profiles
- User sentiment, likes, dislikes, and review summaries
- Recommendation and related-content modules
- Community tags and discussion indicators
- Progress tracking and list management
- Editorial spotlight or featured canon section
- Strong visual emphasis on anime poster art and media cards

## Design rules
- No cluttered chaos
- No mystery-meat navigation
- No low-contrast text
- No oversized or slow animations
- No generic SaaS appearance
- No copy-paste anime clichés
- No unsafe mobile interactions
- No layout shifts or heavy motion on load
- No repeated UI patterns unless they are systemized intentionally

Final output should feel like a dark, cinematic, highly polished anime intelligence platform with a futuristic HUD aesthetic, optimized for discovery, sentiment, and community-driven expression. Make it visually striking, information-rich, emotionally immersive, and production-ready.
