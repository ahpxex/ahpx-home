import type { Component } from "solid-js";
import { For, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { projects } from "../data/projects";
import { accentThemes } from "../theme/accents";
import { siteAccentTheme } from "../theme/siteAccent";

const inspirationPanels = [
  {
    id: "design-systems",
    label: "Design Systems",
    symbol: "DS",
    border: "border-[#10B981]",
    accent: "bg-[#10B981]",
    contentBg: "bg-[#ECFDF5]",
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
    border: "border-[#F97316]",
    accent: "bg-[#F97316]",
    contentBg: "bg-[#FFF4E6]",
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
    border: "border-[#6366F1]",
    accent: "bg-[#6366F1]",
    contentBg: "bg-[#EEF2FF]",
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
    border: "border-[#EC4899]",
    accent: "bg-[#EC4899]",
    contentBg: "bg-[#FDF2F8]",
    description:
      "Writing snack-sized essays to test storytelling frameworks before shipping docs.",
    highlights: [
      "Synthesizing weekly learnings into 250-word drops.",
      "Experimenting with AI-assisted tonal rewrites.",
      "Packaging the best riffs into onboarding scripts.",
    ],
  },
];

const contactItems = [
  {
    label: "Email",
    value: "ahpx@yandex.com",
    helper: "Inbox monitored daily.",
  },
  {
    label: "WeChat",
    value: "ahpoxiao",
    display: "YWhwb3hpYW8=",
    helper: "WeChat handle provided in base64.",
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ahpxex" },
  { label: "Twitter", href: "https://x.com/ofshawnfan" },
];

const projectLimit = 5;

const Home: Component = () => {
  const siteAccent = siteAccentTheme;
  const [copiedLabel, setCopiedLabel] = createSignal("");
  const [activeInspirationId, setActiveInspirationId] = createSignal(
    inspirationPanels[0].id,
  );
  const activeInspiration = () =>
    inspirationPanels.find((panel) => panel.id === activeInspirationId()) ??
    inspirationPanels[0];

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      window.setTimeout(() => setCopiedLabel(""), 1500);
    } catch (error) {
      console.error("Failed to copy contact detail", error);
    }
  };

  const scrollToContact = () => {
    document
      .getElementById("contact-card")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const featuredProjects = () => projects.slice(0, projectLimit);

  return (
    <div class="min-h-screen bg-[#F5F0E6] text-[#111] font-['Space_Grotesk',system-ui,sans-serif]">
      <div class="relative max-w-5xl mx-auto px-6 py-12 space-y-14">
        <div class="absolute inset-x-0 top-4 -z-10 flex justify-between px-10 opacity-60">
          <div
            class={`h-16 w-16 rounded-full border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.4)] ${siteAccent.tintBgClass}`}
          />
          <div
            class={`h-20 w-20 rounded-3xl border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.4)] ${siteAccent.accentBgClass}`}
          />
        </div>

        <header class="bg-white border-4 border-black shadow-[10px_10px_0_rgba(0,0,0,0.9)] rounded-[2.25rem] p-8 sm:p-12">
          <div
            class={`inline-flex items-center gap-2 rounded-full border-2 border-black px-4 py-1 text-sm font-medium ${siteAccent.tintBgClass}`}
          >
            <span class="text-lg">*</span> Available for remote collabs
          </div>
          <div class="mt-6 grid gap-6 md:grid-cols-[3fr,2fr] md:items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.4em] text-[#636363]">
                AHpx / Shawn Fan
              </p>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mt-3">
                Full-stack Product Engineer: Building, Shipping, Iterating
              </h1>
              <p class="mt-4 text-lg text-[#2F2F2F]">
                I'm Shawn Fan, or AHpx. I blend product strategy with hands-on
                engineering to ship delightful tools, dashboards, and
                experiments.
              </p>
            </div>
            <div
              class={`rounded-3xl border-4 border-black p-5 text-lg font-medium md:text-base ${siteAccent.tintBgClass}`}
            >
              <p class={`text-sm uppercase tracking-[0.3em] ${siteAccent.accentTextClass}`}>
                Signal boost
              </p>
              <p class="mt-3">
                Scouting a marketing partner to amplify launches, craft playful
                campaigns, and keep feedback loops humming. If you blend
                storytelling with experimentation, let's jam.
              </p>
              <button
                type="button"
                onClick={scrollToContact}
                class={`mt-4 w-full rounded-2xl border-2 border-black py-2 transition hover:-translate-y-1 ${siteAccent.accentBgClass} ${siteAccent.onAccentTextClass}`}
              >
                Contact me
              </button>
            </div>
          </div>
        </header>

        <section class="space-y-6">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-semibold">Recent projects</h2>
            <A
              href="/projects"
              class={`flex items-center gap-2 rounded-full border-2 border-black px-4 py-1 text-sm font-semibold shadow-[4px_4px_0_rgba(0,0,0,0.7)] ${siteAccent.tintBgClass}`}
            >
              View all <span aria-hidden="true">↗</span>
            </A>
          </div>
          <div class="space-y-5">
            <For each={featuredProjects()}>
              {(project) => {
                const accent = accentThemes[project.accent];
                return (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                    class={`block rounded-[1.75rem] border-[3px] bg-white p-5 sm:p-6 relative overflow-hidden ${accent.borderClass} ${accent.homeShadowClass} ${accent.homeHoverShadowClass} cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F0E6]`}
                  >
                    <div class="flex items-center justify-between gap-4">
                      <div>
                        <p class="text-xs uppercase tracking-[0.4em] text-[#636363]">
                          {project.status}
                        </p>
                        <h3 class="text-xl font-semibold">{project.title}</h3>
                        <p class="text-sm text-[#5E5E5E]">{project.summary}</p>
                      </div>
                      <div class="text-3xl">&rsaquo;</div>
                    </div>
                    <p class="mt-4 text-sm font-semibold text-[#272727]">
                      {project.stack.join(" • ")}
                    </p>
                  </a>
                );
              }}
            </For>
          </div>
        </section>

        <section>
          <div class="space-y-6 rounded-[2.5rem] border-4 border-black bg-white p-8 shadow-[10px_10px_0_rgba(0,0,0,0.9)]">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p class="text-xs uppercase tracking-[0.35em] text-[#7C7C7C]">
                  Inspiration switchboard
                </p>
                <h2 class="text-2xl font-semibold">Moodboard experiments</h2>
              </div>
              <span class="text-sm font-semibold text-[#2F2F2F]">
                Tap a tile to change the feed
              </span>
            </div>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <For each={inspirationPanels}>
                {(panel) => {
                  const isActive = () => activeInspirationId() === panel.id;
                  return (
                    <button
                      type="button"
                      onClick={() => setActiveInspirationId(panel.id)}
                      class={`rounded-2xl border-2 px-4 py-5 text-left font-semibold shadow-[6px_6px_0_rgba(0,0,0,0.75)] transition hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F0E6] ${panel.border}`}
                      classList={{
                        "bg-black text-white": isActive(),
                        "bg-white": !isActive(),
                      }}
                    >
                      <div
                        class={`inline-flex items-center justify-center rounded-full px-2 py-1 text-xs font-bold ${panel.accent}`}
                      >
                        {panel.symbol}
                      </div>
                      <p class="mt-3 leading-snug">{panel.label}</p>
                    </button>
                  );
                }}
              </For>
            </div>
            <div
              class={`rounded-[2rem] border-4 border-black p-6 sm:p-8 shadow-[10px_10px_0_rgba(0,0,0,0.85)] ${activeInspiration().contentBg}`}
            >
              <div class="flex items-center gap-3 text-sm font-semibold">
                <span
                  class={`inline-flex h-3 w-3 rounded-full border border-black ${activeInspiration().accent}`}
                />
                <span class="uppercase tracking-[0.35em] text-[#4C4C4C]">
                  {activeInspiration().label}
                </span>
              </div>
              <p class="mt-3 text-xl font-semibold text-[#1F1F1F] leading-tight">
                {activeInspiration().description}
              </p>
              <ul class="mt-4 space-y-2 text-sm text-[#2F2F2F]">
                <For each={activeInspiration().highlights}>
                  {(highlight) => <li class="pl-4">- {highlight}</li>}
                </For>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact-card"
          class="rounded-[2.5rem] border-4 border-black bg-white p-8 shadow-[10px_10px_0_rgba(0,0,0,0.85)]"
        >
          <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.35em] text-[#7C7C7C]">
                Direct line
              </p>
              <h2 class="text-3xl font-semibold">
                Drop a signal, I respond fast.
              </h2>
            </div>
            <p class="text-sm text-[#343434]">Tap any field to copy.</p>
          </div>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <For each={contactItems}>
              {(item) => (
                <button
                  type="button"
                  class="rounded-3xl border-[3px] border-black bg-[#F4FCE3] px-5 py-5 text-left shadow-[6px_6px_0_rgba(0,0,0,0.8)] transition hover:-translate-y-1"
                  onClick={() => handleCopy(item.label, item.value)}
                >
                  <p class="text-xs uppercase tracking-[0.35em] text-[#4C4C4C]">
                    {item.label}
                  </p>
                  <p class="mt-2 text-xl font-semibold">
                    {item.display ?? item.value}
                  </p>
                  <p class="mt-1 text-sm text-[#2F2F2F]">{item.helper}</p>
                  <p class="mt-3 text-xs font-semibold">
                    {copiedLabel() === item.label ? "Copied!" : "Tap to copy"}
                  </p>
                </button>
              )}
            </For>
          </div>

          <div class="mt-8 rounded-[2rem] border-4 border-black bg-white px-6 py-6 shadow-[8px_8px_0_rgba(0,0,0,0.8)]">
            <div class="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p class="text-lg font-semibold">
                  Let's build the next playful tool.
                </p>
                <p>
                  Working from UTC+7 · DM @ahpx or email to jam on launches.
                </p>
              </div>
              <div class="flex flex-wrap gap-3 text-base font-semibold">
                <For each={socialLinks}>
                  {(link) => (
                    <a
                      class="rounded-2xl border-2 border-black px-4 py-2 transition hover:-translate-y-1"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  )}
                </For>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
