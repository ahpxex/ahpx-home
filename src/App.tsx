import type { Component } from 'solid-js';
import { For, createSignal } from 'solid-js';

const activityCards = [
  {
    title: 'Timed Activity',
    description: 'Unlimited sessions, unlimited possibilities.',
    meta: 'Reading - 45m Today  |  Muay Thai - 75% Weekly  |  Meditation - 45% Monthly',
    border: 'border-[#7F56D9]',
    shadow: 'shadow-[6px_6px_0_#7F56D9]',
  },
  {
    title: 'Simple Tally',
    description: 'Great for habits or simple activities.',
    meta: 'Pull-ups - 25 Today  |  Alcohol-free Days  |  Water Plants - 4x Week',
    border: 'border-[#EF4444]',
    shadow: 'shadow-[6px_6px_0_#EF4444]',
  },
  {
    title: 'Measured Tally',
    description: 'For measurements beyond time.',
    meta: 'Weighted Pull-ups - 5 x 30kg  |  Clean & Jerk - 3 x 105kg  |  Hiking - 9mi',
    border: 'border-[#3B82F6]',
    shadow: 'shadow-[6px_6px_0_#3B82F6]',
  },
];

const inspirationTiles = [
  { label: 'Design Systems', symbol: 'DS', border: 'border-[#10B981]' },
  { label: 'Run Clubs', symbol: 'RC', border: 'border-[#F97316]' },
  { label: 'Analog Photos', symbol: 'AP', border: 'border-[#6366F1]' },
  { label: 'Micro Essays', symbol: 'ME', border: 'border-[#EC4899]' },
  { label: 'Studio Sessions', symbol: 'SS', border: 'border-[#0EA5E9]' },
  { label: 'Kitchen Experiments', symbol: 'KE', border: 'border-[#F59E0B]' },
];

const nowList = [
  'Shipping a wellness tracker for distributed teams.',
  'Re-learning oil pastels by doodling ten minutes a day.',
  'Documenting every coffee brewed this month.',
  'Plotting a two-week sabbatical across island trains.',
];

const contactItems = [
  {
    label: 'Email',
    value: 'ahpx@yandex.com',
    helper: 'Inbox monitored daily.',
  },
  {
    label: 'WeChat',
    value: 'ahpoxiao',
    display: 'YWhwb3hpYW8=',
    helper: 'WeChat handle provided in base64.',
  },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ahpxex' },
  { label: 'Twitter', href: 'https://x.com/ofshawnfan' },
];

const App: Component = () => {
  const [copiedLabel, setCopiedLabel] = createSignal('');

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      window.setTimeout(() => setCopiedLabel(''), 1500);
    } catch (error) {
      console.error('Failed to copy contact detail', error);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div class="min-h-screen bg-[#F5F0E6] text-[#111] font-['Space_Grotesk',system-ui,sans-serif]">
      <div class="relative max-w-5xl mx-auto px-6 py-12 space-y-14">
        <div class="absolute inset-x-0 top-4 -z-10 flex justify-between px-10 opacity-60">
          <div class="h-16 w-16 rounded-full bg-[#E0E7FF] border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.4)]" />
          <div class="h-20 w-20 rounded-3xl bg-[#FEE2E2] border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.4)]" />
        </div>

        <header class="bg-white border-4 border-black shadow-[10px_10px_0_rgba(0,0,0,0.9)] rounded-[2.25rem] p-8 sm:p-12">
          <div class="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#FFF8E1] px-4 py-1 text-sm font-medium">
            <span class="text-lg">*</span> Available for remote collabs
          </div>
          <div class="mt-6 grid gap-6 md:grid-cols-[3fr,2fr] md:items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.4em] text-[#636363]">AHpx / Shawn Fan</p>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mt-3">
                Full-stack product engineer crafting tactile software stories.
              </h1>
              <p class="mt-4 text-lg text-[#2F2F2F]">
                I'm Shawn "AHpx" Fan—building, shipping, iterating. I blend product strategy with hands-on
                engineering to ship delightful tools, dashboards, and experiments.
              </p>
            </div>
            <div class="rounded-3xl border-4 border-black bg-[#DCFCE7] p-5 text-lg font-medium md:text-base">
              <p class="text-sm uppercase tracking-[0.3em] text-[#0C7C59]">Signal boost</p>
              <p class="mt-3">
                Scouting a marketing partner to amplify launches, craft playful campaigns, and keep feedback loops
                humming. If you blend storytelling with experimentation, let's jam.
              </p>
              <button
                type="button"
                onClick={scrollToContact}
                class="mt-4 w-full rounded-2xl border-2 border-black bg-black py-2 text-white transition hover:-translate-y-1"
              >
                Contact me
              </button>
            </div>
          </div>
        </header>

        <section class="space-y-6">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-semibold">Select Activity</h2>
            <button class="flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1 text-sm font-semibold shadow-[4px_4px_0_rgba(0,0,0,0.7)]">
              View archive <span aria-hidden="true">-&gt;</span>
            </button>
          </div>
          <div class="space-y-5">
            <For each={activityCards}>
              {(card) => (
                <article
                  class="rounded-[1.75rem] border-[3px] bg-white p-5 sm:p-6 relative overflow-hidden"
                  classList={{ [card.border]: true, [card.shadow]: true }}
                >
                  <div class="flex items-center justify-between gap-4">
                    <div>
                      <h3 class="text-xl font-semibold">{card.title}</h3>
                      <p class="text-sm text-[#5E5E5E]">{card.description}</p>
                    </div>
                    <div class="text-3xl">&rsaquo;</div>
                  </div>
                  <p class="mt-4 text-sm leading-relaxed">{card.meta}</p>
                </article>
              )}
            </For>
          </div>
        </section>

        <section class="grid gap-8 lg:grid-cols-[3fr,2fr]">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-semibold">Inspiration</h2>
              <span class="text-sm uppercase tracking-[0.35em] text-[#7C7C7C]">timed activities</span>
            </div>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <For each={inspirationTiles}>
                {(tile) => (
                  <div
                    class="rounded-2xl border-2 bg-white px-4 py-6 text-center text-sm font-semibold shadow-[6px_6px_0_rgba(0,0,0,0.75)]"
                    classList={{ [tile.border]: true }}
                  >
                    <div class="text-xl tracking-[0.3em]">{tile.symbol}</div>
                    <p class="mt-3 leading-snug">{tile.label}</p>
                  </div>
                )}
              </For>
            </div>
          </div>
          <div class="rounded-[2rem] border-4 border-black bg-[#FDECF3] p-8 shadow-[10px_10px_0_rgba(0,0,0,0.85)]">
            <p class="text-sm uppercase tracking-[0.3em] text-[#A61B52]">Now</p>
            <h2 class="mt-2 text-2xl font-semibold">Current signals</h2>
            <ul class="mt-5 space-y-4 text-sm leading-relaxed">
              <For each={nowList}>{(item) => <li class="pl-4 text-[#272727]">- {item}</li>}</For>
            </ul>
            <div class="mt-5 flex items-center justify-between rounded-2xl border-2 border-black bg-white px-4 py-3 text-sm font-semibold">
              <span>Weekly pulse report</span>
              <span aria-hidden="true">-&gt;</span>
            </div>
          </div>
        </section>

        <section
          id="contact-card"
          class="rounded-[2.5rem] border-4 border-black bg-white p-8 shadow-[10px_10px_0_rgba(0,0,0,0.85)]"
        >
          <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.35em] text-[#7C7C7C]">Direct line</p>
              <h2 class="text-3xl font-semibold">Drop a signal, I respond fast.</h2>
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
                  <p class="text-xs uppercase tracking-[0.35em] text-[#4C4C4C]">{item.label}</p>
                  <p class="mt-2 text-xl font-semibold">{item.display ?? item.value}</p>
                  <p class="mt-1 text-sm text-[#2F2F2F]">{item.helper}</p>
                  <p class="mt-3 text-xs font-semibold">
                    {copiedLabel() === item.label ? 'Copied!' : 'Tap to copy'}
                  </p>
                </button>
              )}
            </For>
          </div>

          <div class="mt-8 rounded-[2rem] border-4 border-black bg-white px-6 py-6 shadow-[8px_8px_0_rgba(0,0,0,0.8)]">
            <div class="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p class="text-lg font-semibold">Let's build the next playful tool.</p>
                <p>Working from UTC+7 · DM @ahpx or email to jam on launches.</p>
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

export default App;
