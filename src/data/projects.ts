export const projectAccentThemes = {
  lavender: {
    borderClass: 'border-[#7F56D9]',
    homeShadowClass: 'shadow-[6px_6px_0_#7F56D9]',
    homeHoverShadowClass: 'hover:shadow-[9px_9px_0_#7F56D9]',
    projectsShadowClass: 'shadow-[8px_8px_0_#7F56D9]',
    projectsHoverShadowClass: 'hover:shadow-[11px_11px_0_#7F56D9]',
    dotClass: 'bg-[#7F56D9]',
  },
  tangerine: {
    borderClass: 'border-[#F97316]',
    homeShadowClass: 'shadow-[6px_6px_0_#F97316]',
    homeHoverShadowClass: 'hover:shadow-[9px_9px_0_#F97316]',
    projectsShadowClass: 'shadow-[8px_8px_0_#F97316]',
    projectsHoverShadowClass: 'hover:shadow-[11px_11px_0_#F97316]',
    dotClass: 'bg-[#F97316]',
  },
  emerald: {
    borderClass: 'border-[#10B981]',
    homeShadowClass: 'shadow-[6px_6px_0_#10B981]',
    homeHoverShadowClass: 'hover:shadow-[9px_9px_0_#10B981]',
    projectsShadowClass: 'shadow-[8px_8px_0_#10B981]',
    projectsHoverShadowClass: 'hover:shadow-[11px_11px_0_#10B981]',
    dotClass: 'bg-[#10B981]',
  },
  cobalt: {
    borderClass: 'border-[#3B82F6]',
    homeShadowClass: 'shadow-[6px_6px_0_#3B82F6]',
    homeHoverShadowClass: 'hover:shadow-[9px_9px_0_#3B82F6]',
    projectsShadowClass: 'shadow-[8px_8px_0_#3B82F6]',
    projectsHoverShadowClass: 'hover:shadow-[11px_11px_0_#3B82F6]',
    dotClass: 'bg-[#3B82F6]',
  },
  fuchsia: {
    borderClass: 'border-[#EC4899]',
    homeShadowClass: 'shadow-[6px_6px_0_#EC4899]',
    homeHoverShadowClass: 'hover:shadow-[9px_9px_0_#EC4899]',
    projectsShadowClass: 'shadow-[8px_8px_0_#EC4899]',
    projectsHoverShadowClass: 'hover:shadow-[11px_11px_0_#EC4899]',
    dotClass: 'bg-[#EC4899]',
  },
  sky: {
    borderClass: 'border-[#0EA5E9]',
    homeShadowClass: 'shadow-[6px_6px_0_#0EA5E9]',
    homeHoverShadowClass: 'hover:shadow-[9px_9px_0_#0EA5E9]',
    projectsShadowClass: 'shadow-[8px_8px_0_#0EA5E9]',
    projectsHoverShadowClass: 'hover:shadow-[11px_11px_0_#0EA5E9]',
    dotClass: 'bg-[#0EA5E9]',
  },
} as const;

export type ProjectAccent = keyof typeof projectAccentThemes;

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  status: string;
  accent: ProjectAccent;
  link: string;
};

export const projects: Project[] = [
  {
    slug: 'flow-studio',
    title: 'Flow Studio',
    summary: 'A multiplayer dashboard kit for shipping rituals. Tracks daily focus blocks, demos, and async standups in one playful layout.',
    stack: ['Solid', 'Vite', 'Supabase'],
    status: 'Private beta',
    accent: 'lavender',
    link: 'https://ahpx.studio/flow',
  },
  {
    slug: 'pulse-canvas',
    title: 'Pulse Canvas',
    summary: 'A Neubrutalist metrics wall for indie teams—drag cards, track dopamine-free KPIs, and broadcast wins.',
    stack: ['Solid', 'Three.js'],
    status: 'Launching Q1',
    accent: 'tangerine',
    link: 'https://ahpx.studio/pulse',
  },
  {
    slug: 'habit-atlas',
    title: 'Habit Atlas',
    summary: 'Personal tally tracker for micro routines with custom glyphs, color macros, and whimsical notifications.',
    stack: ['Solid', 'Capacitor', 'Tailwind'],
    status: 'iOS TestFlight',
    accent: 'emerald',
    link: 'https://ahpx.studio/habit',
  },
  {
    slug: 'atelier-notes',
    title: 'Atelier Notes',
    summary: 'Ambient writing tool for product retros. Generates prompts, collects voice notes, and autogenerates shareable storyboards.',
    stack: ['Solid', 'OpenAI', 'Edge Functions'],
    status: 'Studio tool',
    accent: 'cobalt',
    link: 'https://ahpx.studio/atelier',
  },
  {
    slug: 'lunchbreak-lab',
    title: 'Lunchbreak Lab',
    summary: 'A lunchtime project generator for distributed friends. Spin a prompt, auto plan 90-min experiments, record a vibe check.',
    stack: ['Solid', 'Cloudflare Workers'],
    status: 'Seasonal drop',
    accent: 'fuchsia',
    link: 'https://ahpx.studio/lunchbreak',
  },
  {
    slug: 'signal-deck',
    title: 'Signal Deck',
    summary: 'Browser-based command palette that stitches calendars, docs, and DM follow-ups with keyboard-driven interactions.',
    stack: ['Solid', 'Electron'],
    status: 'In exploration',
    accent: 'sky',
    link: 'https://ahpx.studio/signal',
  },
];
