import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { A } from '@solidjs/router';
import { projects } from '../data/projects';
import { accentThemes } from '../theme/accents';
import { siteAccentTheme } from '../theme/siteAccent';

const ProjectsPage: Component = () => {
  const siteAccent = siteAccentTheme;
  return (
    <div class="min-h-screen bg-[#F5F0E6] text-[#111] font-['Space_Grotesk',system-ui,sans-serif]">
      <div class="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <header class="rounded-[2.5rem] border-4 border-black bg-white p-8 shadow-[10px_10px_0_rgba(0,0,0,0.9)]">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.35em] text-[#7C7C7C]">Projects & experiments</p>
              <h1 class="text-4xl font-semibold mt-2">A gallery of intentional tools.</h1>
              <p class="mt-3 text-lg text-[#2F2F2F]">
                Neubrutalist playground documenting products, prototypes, and seasonal drops. Everything ships with a
                story, human metrics, and a loop for iteration.
              </p>
            </div>
            <A
              href="/"
              class={`self-start rounded-2xl border-2 border-black px-5 py-2 text-sm font-semibold shadow-[4px_4px_0_rgba(0,0,0,0.8)] ${siteAccent.tintBgClass}`}
            >
              ← Back home
            </A>
          </div>
        </header>

        <section class="space-y-6">
          <For each={projects}>
            {(project) => {
              const accent = accentThemes[project.accent];
              return (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                  class={`block rounded-[2rem] border-[3px] bg-white p-6 ${accent.borderClass} ${accent.projectsShadowClass} ${accent.projectsHoverShadowClass} cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F0E6]`}
                >
                  <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div class="space-y-2">
                      <p class="text-xs uppercase tracking-[0.35em] text-[#636363]">{project.status}</p>
                      <h2 class="text-2xl font-semibold">{project.title}</h2>
                      <p class="text-sm text-[#3A3A3A]">{project.summary}</p>
                      <p class="text-sm font-semibold text-[#1F1F1F]">{project.stack.join(' • ')}</p>
                    </div>
                    <div class="flex flex-col gap-3 text-sm font-semibold">
                      <span class="inline-flex items-center gap-2 rounded-full border-2 border-black px-4 py-1">
                        <span class={`h-2.5 w-2.5 rounded-full ${accent.dotClass}`} /> Live signal
                      </span>
                      <span class="rounded-2xl border-2 border-black bg-black px-5 py-2 text-center text-white">
                        View build ↗
                      </span>
                    </div>
                  </div>
                </a>
              );
            }}
          </For>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
