<script setup lang="ts">
const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.fade-up')
})

const featuredProjects = [
  {
    title: 'Low No Attendance System',
    tags: ['Nuxt 3', 'FastAPI', 'PostgreSQL'],
    description:
      'Enterprise internal system for automated attendance tracking and reporting. Delivered 30–50% ahead of Business Analyst time estimates.',
    slug: 'attendance-system'
  },
  {
    title: 'Expense Tracker — Dual Currency PWA',
    tags: ['Nuxt 3', 'Express.js', 'Docker', 'SQLite'],
    description:
      'Self-hosted PWA for SGD/MYR dual-currency expense tracking. Offline-capable, zero cloud dependency, runs on my own server.',
    slug: 'expense-tracker'
  },
  {
    title: 'Miku AI Assistant',
    tags: ['Raspberry Pi 5', 'Python', 'Local AI'],
    description:
      'Local AI assistant on a Raspberry Pi 5 with animated Waveshare LCD and custom 3D-printed case. Fully offline capable.',
    slug: 'miku-assistant'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-[92vh] flex items-center hero-grid overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-indigo-950/8 via-transparent to-[#0f0f0f] pointer-events-none" />

      <div class="relative max-w-5xl mx-auto px-6 py-28">
        <!-- Availability badge -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-medium mb-10">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance projects
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-[68px] font-extrabold tracking-tight leading-[1.05] text-white mb-6 max-w-3xl">
          Full-Stack Engineer<br />
          <span class="gradient-text">building enterprise</span><br />
          <span class="gradient-text">&amp; self-hosted systems</span>
        </h1>

        <!-- Sub-headline -->
        <p class="text-lg md:text-xl text-[#a3a3a3] mb-3 max-w-xl">
          NCS Group · Singapore · Nuxt 3 · FastAPI · TypeScript
        </p>

        <p class="text-sm text-[#6b6b6b] mb-10">
          3+ years enterprise · NCS Group · Delivered 30–50% ahead of estimates
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink
            to="/projects"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-200"
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
    </section>

    <!-- Featured Projects -->
    <section class="max-w-5xl mx-auto px-6 pb-24">
      <div class="fade-up mb-10">
        <p class="text-xs font-mono text-indigo-400 font-medium tracking-widest uppercase mb-3">
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

    <!-- Freelance CTA -->
    <section class="max-w-5xl mx-auto px-6 pb-24">
      <div
        class="fade-up group relative rounded-2xl border border-indigo-500/20 bg-[#141420] p-10 md:p-14 text-center overflow-hidden hover:border-indigo-500/35 hover:shadow-[0_0_48px_rgba(99,102,241,0.08)] transition-all duration-500"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-transparent to-violet-600/5 group-hover:from-indigo-600/12 transition-all duration-500 pointer-events-none" />
        <div class="relative">
          <p class="text-xs font-mono text-indigo-400 font-medium tracking-widest uppercase mb-5">
            02 — Freelance
          </p>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a web app, internal tool, or automation?
          </h2>
          <p class="text-[#a3a3a3] mb-8 max-w-md mx-auto text-sm leading-relaxed">
            I work with SME owners and startup founders to build practical software that saves time and solves real problems. Fast delivery, no fluff.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-200"
          >
            Start a Conversation
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
