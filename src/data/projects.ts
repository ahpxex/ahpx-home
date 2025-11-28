export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  status: string;
  accent: string;
  link: string;
};

export const projects: Project[] = [
  {
    slug: 'flow-studio',
    title: 'Flow Studio',
    summary: 'A multiplayer dashboard kit for shipping rituals. Tracks daily focus blocks, demos, and async standups in one playful layout.',
    stack: ['Solid', 'Vite', 'Supabase'],
    status: 'Private beta',
    accent: '#7F56D9',
    link: 'https://ahpx.studio/flow',
  },
  {
    slug: 'pulse-canvas',
    title: 'Pulse Canvas',
    summary: 'A Neubrutalist metrics wall for indie teams—drag cards, track dopamine-free KPIs, and broadcast wins.',
    stack: ['Solid', 'Three.js'],
    status: 'Launching Q1',
    accent: '#F97316',
    link: 'https://ahpx.studio/pulse',
  },
  {
    slug: 'habit-atlas',
    title: 'Habit Atlas',
    summary: 'Personal tally tracker for micro routines with custom glyphs, color macros, and whimsical notifications.',
    stack: ['Solid', 'Capacitor', 'Tailwind'],
    status: 'iOS TestFlight',
    accent: '#10B981',
    link: 'https://ahpx.studio/habit',
  },
  {
    slug: 'atelier-notes',
    title: 'Atelier Notes',
    summary: 'Ambient writing tool for product retros. Generates prompts, collects voice notes, and autogenerates shareable storyboards.',
    stack: ['Solid', 'OpenAI', 'Edge Functions'],
    status: 'Studio tool',
    accent: '#3B82F6',
    link: 'https://ahpx.studio/atelier',
  },
  {
    slug: 'lunchbreak-lab',
    title: 'Lunchbreak Lab',
    summary: 'A lunchtime project generator for distributed friends. Spin a prompt, auto plan 90-min experiments, record a vibe check.',
    stack: ['Solid', 'Cloudflare Workers'],
    status: 'Seasonal drop',
    accent: '#EC4899',
    link: 'https://ahpx.studio/lunchbreak',
  },
  {
    slug: 'signal-deck',
    title: 'Signal Deck',
    summary: 'Browser-based command palette that stitches calendars, docs, and DM follow-ups with keyboard-driven interactions.',
    stack: ['Solid', 'Electron'],
    status: 'In exploration',
    accent: '#0EA5E9',
    link: 'https://ahpx.studio/signal',
  },
];
