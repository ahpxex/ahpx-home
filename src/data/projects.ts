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
  amber: {
    borderClass: 'border-[#F59E0B]',
    homeShadowClass: 'shadow-[6px_6px_0_#F59E0B]',
    homeHoverShadowClass: 'hover:shadow-[9px_9px_0_#F59E0B]',
    projectsShadowClass: 'shadow-[8px_8px_0_#F59E0B]',
    projectsHoverShadowClass: 'hover:shadow-[11px_11px_0_#F59E0B]',
    dotClass: 'bg-[#F59E0B]',
  },
  rosewood: {
    borderClass: 'border-[#DC2626]',
    homeShadowClass: 'shadow-[6px_6px_0_#DC2626]',
    homeHoverShadowClass: 'hover:shadow-[9px_9px_0_#DC2626]',
    projectsShadowClass: 'shadow-[8px_8px_0_#DC2626]',
    projectsHoverShadowClass: 'hover:shadow-[11px_11px_0_#DC2626]',
    dotClass: 'bg-[#DC2626]',
  },
  slate: {
    borderClass: 'border-[#475569]',
    homeShadowClass: 'shadow-[6px_6px_0_#475569]',
    homeHoverShadowClass: 'hover:shadow-[9px_9px_0_#475569]',
    projectsShadowClass: 'shadow-[8px_8px_0_#475569]',
    projectsHoverShadowClass: 'hover:shadow-[11px_11px_0_#475569]',
    dotClass: 'bg-[#475569]',
  },
  mint: {
    borderClass: 'border-[#14B8A6]',
    homeShadowClass: 'shadow-[6px_6px_0_#14B8A6]',
    homeHoverShadowClass: 'hover:shadow-[9px_9px_0_#14B8A6]',
    projectsShadowClass: 'shadow-[8px_8px_0_#14B8A6]',
    projectsHoverShadowClass: 'hover:shadow-[11px_11px_0_#14B8A6]',
    dotClass: 'bg-[#14B8A6]',
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

const accentPool = Object.keys(projectAccentThemes) as ProjectAccent[];

const withRandomAccent = <T extends Omit<Project, 'accent'>>(project: T): Project => ({
  ...project,
  accent: accentPool[Math.floor(Math.random() * accentPool.length)],
});

const projectDefinitions: Omit<Project, 'accent'>[] = [
  {
    slug: 'aictionary',
    title: 'Aictionary',
    summary:
      'Instant desktop dictionary that surfaces cached definitions and falls back to an LLM when new vocabulary pops up.',
    stack: ['React', 'Tauri'],
    status: 'Desktop alpha',
    link: 'https://github.com/ahpxex/aictionary',
  },
  {
    slug: 'open-dictionary',
    title: 'Open-Dictionary',
    summary: 'Python-first toolchain for generating LLM-powered dictionaries grounded in Wiktionary data.',
    stack: ['Python', 'LLM'],
    status: 'Research build',
    link: 'https://github.com/ahpxex/open-dictionary',
  },
  {
    slug: 'modulelauncher-re',
    title: 'ModuleLauncher.Re',
    summary: 'On-the-fly Minecraft launcher core library extracted from a long-running C# modding project.',
    stack: ['C#'],
    status: 'Legacy release',
    link: 'https://github.com/ahpxex/modulelauncher-re',
  },
  {
    slug: 'open-saas-next',
    title: 'open-saas-next',
    summary:
      'Plug-and-play SaaS dashboard starter built on Next.js, React, and Refine with modern aesthetics baked in.',
    stack: ['Next.js', 'React', 'Refine'],
    status: 'Starter kit',
    link: 'https://github.com/ahpxex/open-saas-next',
  },
];

export const projects: Project[] = projectDefinitions.map(withRandomAccent);
