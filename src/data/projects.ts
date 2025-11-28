import type { AccentKey } from "../theme/accents";
import { accentKeys } from "../theme/accents";

export type ProjectAccent = AccentKey;

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  status: string;
  accent: ProjectAccent;
  link: string;
};

const withRandomAccent = <T extends Omit<Project, "accent">>(project: T): Project => ({
  ...project,
  accent: accentKeys[Math.floor(Math.random() * accentKeys.length)],
});

const projectDefinitions: Omit<Project, "accent">[] = [
  {
    slug: "aictionary",
    title: "Aictionary",
    summary:
      "Instant desktop dictionary that surfaces cached definitions and falls back to an LLM when new vocabulary pops up.",
    stack: ["React", "Tauri"],
    status: "Desktop alpha",
    link: "https://github.com/ahpxex/aictionary",
  },
  {
    slug: "open-dictionary",
    title: "Open-Dictionary",
    summary: "Python-first toolchain for generating LLM-powered dictionaries grounded in Wiktionary data.",
    stack: ["Python", "LLM"],
    status: "Research build",
    link: "https://github.com/ahpxex/open-dictionary",
  },
  {
    slug: "modulelauncher-re",
    title: "ModuleLauncher.Re",
    summary: "On-the-fly Minecraft launcher core library extracted from a long-running C# modding project.",
    stack: ["C#"],
    status: "Legacy release",
    link: "https://github.com/ahpxex/modulelauncher-re",
  },
  {
    slug: "open-saas-next",
    title: "open-saas-next",
    summary:
      "Plug-and-play SaaS dashboard starter built on Next.js, React, and Refine with modern aesthetics baked in.",
    stack: ["Next.js", "React", "Refine"],
    status: "Starter kit",
    link: "https://github.com/ahpxex/open-saas-next",
  },
];

export const projects: Project[] = projectDefinitions.map(withRandomAccent);
