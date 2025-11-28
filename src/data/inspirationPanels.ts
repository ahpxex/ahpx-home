export type BaseInspirationPanel = {
  id: string;
  label: string;
  symbol: string;
  description: string;
  highlights: string[];
};

export const baseInspirationPanels: BaseInspirationPanel[] = [
  {
    id: "product-engineer",
    label: "Product Engineer",
    symbol: "PE",
    description:
      "Builder-designer hybrid shipping tactile software. I sketch interfaces, wire strategy, and write code that lands in real teams.",
    highlights: [
      "Prototype from Figma napkins to production dashboards solo.",
      "Pair narrative design with full-stack execution every sprint.",
      "Obsess over tactile feedback: haptics, sounds, micro copies.",
    ],
  },
  {
    id: "sociology-signal",
    label: "Sociology Signal",
    symbol: "SS",
    description:
      "Proud sociology student mindset. Everything ships with human context: rituals, roles, power dynamics.",
    highlights: [
      "Map user interviews like ethnographic field notes.",
      "Design onboarding flows as community invitations.",
      "Push stakeholders to talk social impact, not just KPIs.",
    ],
  },
  {
    id: "iterator",
    label: "Iterator",
    symbol: "TI",
    description:
      "Perpetual beta brain. I iterate my own thinking, read voraciously, and absorb new ideas as fast as they land.",
    highlights: [
      "Run weekly review loops to retire stale patterns fast.",
      "Treat books, essays, and podcasts like labs—take notes, remix prototypes.",
      "Host micro salons to debate where the web is headed next.",
    ],
  },
  {
    id: "multi-hobbyist",
    label: "Multi-Hobbyist",
    symbol: "MH",
    description:
      "Photography, motorcycling, cycling, bodybuilding—play fuels my product sense and keeps momentum high.",
    highlights: [
      "Shoot analog film for palette inspiration and storyboards.",
      "Log motorcycle / bike rides as motion studies for UI flows.",
      "Lift, stretch, and breathe to keep curiosity and focus sharp.",
    ],
  },
];
