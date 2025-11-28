export type BaseInspirationPanel = {
  id: string;
  label: string;
  symbol: string;
  description: string;
  highlights: string[];
};

export const baseInspirationPanels: BaseInspirationPanel[] = [
  {
    id: "design-systems",
    label: "Design Systems",
    symbol: "DS",
    description:
      "Composing tactile component kits for dashboards that feel analog yet wildly fast.",
    highlights: [
      "Rolling multi-theme tokens for Flow Studio rituals.",
      "Auditioning embossed states for knobs + sliders.",
      "Pairing with product marketing to storyboard launches.",
    ],
  },
  {
    id: "run-clubs",
    label: "Run Clubs",
    symbol: "RC",
    description:
      "Documenting run cadence dashboards plus playful accountability nudges for long-distance crews.",
    highlights: [
      "Parsing cadence + HRV into emoji-grade insights.",
      "Refining post-run audio snippets for vibes.",
      "Building badge drops for community captains.",
    ],
  },
  {
    id: "analog-photos",
    label: "Analog Photos",
    symbol: "AP",
    description:
      "Scanning dimly lit medium format experiments and remixing them as UI color palettes.",
    highlights: [
      "Mapping grain textures onto button micro-states.",
      "Color grading polaroids into Tailwind tokens.",
      "Animating light leaks as loading indicators.",
    ],
  },
  {
    id: "micro-essays",
    label: "Micro Essays",
    symbol: "ME",
    description:
      "Writing snack-sized essays to test storytelling frameworks before shipping docs.",
    highlights: [
      "Synthesizing weekly learnings into 250-word drops.",
      "Experimenting with AI-assisted tonal rewrites.",
      "Packaging the best riffs into onboarding scripts.",
    ],
  },
];
