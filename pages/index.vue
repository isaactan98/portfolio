<script setup lang="ts">
const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.fade-up')
})

const heroStats = [
  { value: '3+', label: 'Years Experience' },
  { value: '30–50%', label: 'Faster than estimates' },
  { value: '5+', label: 'Projects shipped' }
]

const featuredProjects = [
  {
    title: 'Shadow Anime',
    type: 'Personal · Full-Stack',
    tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'REST API'],
    description:
      'A self-built anime streaming platform with real-time data, search, and a clean UI. Built with Nuxt 3 and third-party anime API integration.',
    slug: 'shadow-anime',
    github: 'https://github.com/isaactan98/shadow-anime'
  },
  {
    title: 'Nuxt Video Chat',
    type: 'Personal · Real-Time',
    tags: ['Nuxt', 'Express', 'WebRTC', 'Socket.io'],
    description:
      'Peer-to-peer video chat web app built with WebRTC and Socket.io. No third-party video SDK — raw WebRTC implementation with Nuxt frontend and Express backend.',
    slug: 'nuxt-video-chat',
    github: 'https://github.com/isaactan98/nuxt_video_chat_app'
  },
  {
    title: 'Expense Tracker — Dual Currency PWA',
    type: 'Personal · Self-Hosted',
    tags: ['Nuxt 3', 'Express', 'SQLite', 'Docker'],
    description:
      'Self-hosted PWA for SGD/MYR expense tracking. Offline-first, zero cloud dependency. Runs entirely on a home server via Docker + Cloudflare Tunnel.',
    slug: 'expense-tracker',
    github: 'https://github.com/isaactan98/expense-tracker'
  }
]
</script>

<template>
  <div>
    <!-- Hero: split layout — text left, portrait photo + stats right -->
    <section class="relative min-h-[88vh] flex items-center hero-grid overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#e8ff5c]/4 via-transparent to-[#0f0f0f] pointer-events-none" />

      <div class="relative max-w-5xl mx-auto px-6 py-12 w-full">
        <div class="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">

          <!-- Left: text -->
          <div>
            <!-- Availability badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#e8ff5c]/25 bg-[#e8ff5c]/8 text-[#e8ff5c] text-xs font-medium mb-8">
              <span class="w-1.5 h-1.5 rounded-full bg-[#e8ff5c] animate-pulse" />
              Available for freelance projects
            </div>

            <!-- Headline: 3 lines, accent word in yellow-green -->
            <h1 class="text-[38px] md:text-[46px] font-extrabold tracking-tight leading-[1.1] text-white mb-5">
              Full-Stack Engineer<br />
              building
              <span class="text-[#e8ff5c] ml-2">enterprise</span><br />
              &amp; self-hosted systems
            </h1>

            <!-- Sub-headline -->
            <p class="text-base md:text-lg text-[#a3a3a3] mb-8">
              Enterprise Tech · Singapore · Nuxt 3 · FastAPI · TypeScript
            </p>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink
                to="/projects"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold bg-[#e8ff5c] hover:bg-[#d4eb4a] text-[#0c0c0c] transition-colors duration-200"
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

          <!-- Right: portrait photo + micro-stats below (desktop only) -->
          <div class="hidden md:flex flex-col gap-3 w-48 lg:w-52">
            <!-- Portrait photo -->
            <div class="relative">
              <div class="absolute inset-4 rounded-2xl bg-[#e8ff5c]/15 blur-3xl" />
              <img
                src="~/assets/images/me.png"
                alt="Isaac Tan"
                class="relative w-full h-64 lg:h-[272px] object-cover object-top rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
            <!-- Micro-stats below photo -->
            <div class="flex flex-col gap-1.5">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/8 bg-[#1a1a1a]"
              >
                <p class="text-xs text-[#6b6b6b]">{{ stat.label }}</p>
                <p class="text-lg font-bold text-[#e8ff5c]">{{ stat.value }}</p>
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

    <!-- Freelance: full-width border section -->
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
            I work with SME owners and startup founders to build practical software. Fast delivery, no fluff.
          </p>
        </div>
        <div class="flex-shrink-0">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold bg-[#e8ff5c] hover:bg-[#d4eb4a] text-[#0c0c0c] transition-colors duration-200 whitespace-nowrap"
          >
            Start a Conversation
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
