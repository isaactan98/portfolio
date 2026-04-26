<script setup lang="ts">
const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.fade-up')
})

const heroStats = [
  { value: '3+', label: 'Years at NCS' },
  { value: '300+', label: 'Project Man-days' },
  { value: '2', label: 'Self-Hosted Apps' }
]

const featuredProjects = [
  {
    title: 'Low No Attendance System',
    type: 'Enterprise · Internal System',
    tags: ['Nuxt 3', 'FastAPI', 'PostgreSQL'],
    description:
      'Enterprise internal system for automated attendance tracking and reporting. Delivered 30–50% ahead of Business Analyst time estimates.',
    slug: 'attendance-system'
  },
  {
    title: 'Expense Tracker — Dual Currency PWA',
    type: 'Personal · Self-Hosted PWA',
    tags: ['Nuxt 3', 'Express.js', 'Docker', 'SQLite'],
    description:
      'Self-hosted PWA for SGD/MYR dual-currency expense tracking. Offline-capable, zero cloud dependency, runs on my own server.',
    slug: 'expense-tracker'
  },
  {
    title: 'Miku AI Assistant',
    type: 'Personal · Hardware Project',
    tags: ['Raspberry Pi 5', 'Python', 'Local AI'],
    description:
      'Local AI assistant on a Raspberry Pi 5 with animated Waveshare LCD and custom 3D-printed case. Fully offline capable.',
    slug: 'miku-assistant'
  }
]
</script>

<template>
  <div>
    <!-- Hero: split layout — text left, portrait photo + stats right -->
    <section class="relative min-h-[92vh] flex items-center hero-grid overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#e8ff5c]/4 via-transparent to-[#0f0f0f] pointer-events-none" />

      <div class="relative max-w-5xl mx-auto px-6 py-20 w-full">
        <div class="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">

          <!-- Left: text -->
          <div>
            <!-- Availability badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-medium mb-8">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance projects
            </div>

            <!-- Headline: pure white + single accent word -->
            <h1 class="text-5xl md:text-[62px] font-extrabold tracking-tight leading-[1.08] text-white mb-5">
              Full-Stack Engineer<br />
              building
              <span class="text-[#e8ff5c] ml-2">enterprise</span><br />
              &amp; self-hosted systems
            </h1>

            <!-- Sub-headline -->
            <p class="text-base md:text-lg text-[#a3a3a3] mb-8">
              NCS Group · Singapore · Nuxt 3 · FastAPI · TypeScript
            </p>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink
                to="/projects"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold bg-[#e8ff5c] hover:bg-[#d4eb4a] text-[#0f0f0f] transition-colors duration-200"
              >
                View My Work
                <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4" />
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold border border-white/15 hover:border-white/30 hover:bg-white/5 text-white transition-all duration-200"
              >
                Get In Touch
              </NuxtLink>
            </div>
          </div>

          <!-- Right: portrait photo + micro-stats (desktop only) -->
          <div class="hidden md:flex items-start gap-4">
            <!-- Portrait photo -->
            <div class="relative flex-shrink-0">
              <div class="absolute inset-4 rounded-2xl bg-[#e8ff5c]/15 blur-3xl" />
              <img
                src="~/assets/images/me.png"
                alt="Isaac Tan"
                class="relative w-48 h-64 lg:w-52 lg:h-72 object-cover object-top rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
            <!-- Micro-stats -->
            <div class="flex flex-col gap-3 pt-2">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="px-4 py-3 rounded-xl border border-white/8 bg-[#1a1a1a]"
              >
                <p class="text-2xl font-bold text-[#e8ff5c]">{{ stat.value }}</p>
                <p class="text-xs text-[#6b6b6b] mt-0.5 whitespace-nowrap">{{ stat.label }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20">
        <span class="text-[10px] font-mono tracking-widest uppercase">scroll</span>
        <div class="animate-bounce">
          <UIcon name="i-heroicons-chevron-down-20-solid" class="w-5 h-5" />
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="max-w-5xl mx-auto px-6 pt-20 pb-24">
      <div class="fade-up mb-10">
        <p class="text-xs font-mono text-[#e8ff5c] font-medium tracking-widest uppercase mb-3">
          01 — Selected Work
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-5">
        <div
          v-for="(project, i) in featuredProjects"
          :key="project.slug"
          class="fade-up"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <ProjectCard v-bind="project" />
        </div>
      </div>

      <div class="fade-up mt-8 text-center">
        <NuxtLink
          to="/projects"
          class="text-sm text-[#a3a3a3] hover:text-white transition-colors inline-flex items-center gap-1.5"
        >
          See all case studies
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </section>

    <!-- Freelance: full-width border section (no card) -->
    <section class="relative border-t border-b border-white/8 py-20 fade-up">
      <div class="absolute inset-0 bg-gradient-to-r from-[#e8ff5c]/5 via-transparent to-transparent pointer-events-none" />
      <div class="relative max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
        <div class="max-w-xl">
          <p class="text-xs font-mono text-[#e8ff5c] font-medium tracking-widest uppercase mb-4">
            02 — Freelance
          </p>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">
            Need a web app, internal tool, or automation?
          </h2>
          <p class="text-[#a3a3a3] text-sm leading-relaxed">
            I work with SME owners and startup founders to build practical software that saves time and solves real problems. Fast delivery, no fluff.
          </p>
        </div>
        <div class="flex-shrink-0">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold bg-[#e8ff5c] hover:bg-[#d4eb4a] text-[#0f0f0f] transition-colors duration-200 whitespace-nowrap"
          >
            Start a Conversation
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
