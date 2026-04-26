<script setup lang="ts">
useHead({ title: 'Projects — Isaac Tan' })

const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.fade-up')
})

interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  problem: string
  solution: string
  tech: string
  impact: string[]
  links: { label: string; href: string | null }[]
}

const projects: Project[] = [
  {
    id: 'shadow-anime',
    title: 'Shadow Anime',
    category: 'Personal · Full-Stack',
    tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'REST API'],
    problem:
      'Most anime sites are either ad-heavy, unstable, or require accounts. I wanted a clean, fast, self-controlled streaming interface I could use daily — without ads, sign-ups, or unreliable third-party players.',
    solution:
      'A full anime streaming platform with search, genre filtering, episode tracking, and a clean dark UI. Pulls real-time data from a third-party anime API. Built as an iterative improvement over the first version (anime-nuxt-app), with a more polished UI and better data handling.',
    tech:
      'Nuxt 3 and Vue 3 for the frontend with TypeScript throughout. Tailwind CSS for styling. Third-party REST API (Jikan/AniList) for real-time anime metadata, episode data, and search. Deployed on Vercel.',
    impact: [
      '13+ GitHub stars on the original version',
      '7 forks — other developers actively building on top of it',
      'Actively used as a personal daily driver'
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/isaactan98/shadow-anime' }]
  },
  {
    id: 'nuxt-video-chat',
    title: 'Nuxt Video Chat',
    category: 'Personal · Real-Time',
    tags: ['Nuxt.js', 'Express.js', 'Socket.io', 'WebRTC', 'Node.js'],
    problem:
      'Most video chat tutorials rely on third-party SDKs — Daily.co, Twilio, Agora — which abstract away the hard parts. I wanted to understand WebRTC at a protocol level by building a working implementation from scratch, without any external video SDK.',
    solution:
      'A peer-to-peer video chat web application using raw WebRTC for media streaming and Socket.io for signaling. Nuxt.js handles the frontend; an Express backend manages the signaling server. No external video SDKs involved — ICE, SDP, and peer connections are all handled manually.',
    tech:
      'Nuxt.js frontend for the UI and room management. Express.js + Socket.io backend for WebRTC signaling (offer/answer exchange, ICE candidate relay). Native browser WebRTC API for peer connections and media streams. Node.js runtime.',
    impact: [
      'Demonstrates low-level networking and real-time systems knowledge beyond typical web dev scope',
      'Full understanding of signaling flows, ICE candidates, and SDP negotiation',
      'Working multi-user video sessions without any third-party video dependency'
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/isaactan98/nuxt_video_chat_app' }]
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker — Dual Currency PWA',
    category: 'Personal · Self-Hosted',
    tags: ['Nuxt 3', 'Express.js', 'SQLite', 'Docker', 'Cloudflare Tunnel'],
    problem:
      'Living and commuting between Singapore and Johor Bahru means dealing with SGD and MYR daily. Existing expense apps either lack real dual-currency support, lock data in the cloud, or are overly complex for everyday personal use.',
    solution:
      'A self-hosted Progressive Web App for personal expense tracking. Supports SGD/MYR with live conversion, works offline as a PWA, and runs entirely on a home server via Docker Compose + Cloudflare Tunnel — no third-party cloud dependency whatsoever.',
    tech:
      'Nuxt 3 frontend configured as a PWA with offline caching. Express.js REST API handling transactions and categories. SQLite for lightweight, file-based persistent storage. Docker Compose for local orchestration. Cloudflare Tunnel for secure remote access without opening ports.',
    impact: [
      'Fully operational personal daily driver — used every day',
      'Complete data ownership — no third-party cloud',
      'Demonstrates full product lifecycle: architecture, build, deploy, and maintain'
    ],
    links: [{ label: 'Live demo available on request (self-hosted)', href: null }]
  }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 pt-20 pb-10">
    <!-- Header -->
    <div class="fade-up mb-16">
      <p class="text-xs font-mono text-[#e8ff5c] font-medium tracking-widest uppercase mb-3">
        Work
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Projects</h1>
      <p class="text-lg text-[#a3a3a3]">
        Three case studies spanning full-stack web, real-time systems, and self-hosted tooling.
      </p>
    </div>

    <!-- Case Studies -->
    <div class="flex flex-col gap-12">
      <article
        v-for="(project, index) in projects"
        :id="project.id"
        :key="project.id"
        class="fade-up scroll-mt-20 rounded-2xl border border-white/8 bg-[#1a1a1a] p-8 md:p-10"
        :style="{ transitionDelay: `${index * 80}ms` }"
      >
        <!-- Header row -->
        <div class="flex items-start justify-between mb-6 gap-4">
          <span class="text-xs font-mono text-[#5c5c5c] font-medium">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <span class="text-xs text-[#6b6b6b] border border-white/8 px-3 py-1 rounded-full whitespace-nowrap">
            {{ project.category }}
          </span>
        </div>

        <!-- Title -->
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ project.title }}</h2>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-8">
          <TechBadge v-for="tag in project.tags" :key="tag" :label="tag" />
        </div>

        <!-- Problem + Solution grid -->
        <div class="grid md:grid-cols-2 gap-6 md:gap-8 mb-6">
          <div>
            <h3 class="text-xs font-mono text-[#e8ff5c] tracking-widest uppercase mb-3">
              The Problem
            </h3>
            <p class="text-sm text-[#c0c0c0] leading-relaxed">{{ project.problem }}</p>
          </div>
          <div>
            <h3 class="text-xs font-mono text-[#e8ff5c] tracking-widest uppercase mb-3">
              What I Built
            </h3>
            <p class="text-sm text-[#c0c0c0] leading-relaxed">{{ project.solution }}</p>
          </div>
        </div>

        <!-- Tech stack detail -->
        <div class="mb-6">
          <h3 class="text-xs font-mono text-[#e8ff5c] tracking-widest uppercase mb-3">
            Tech Stack
          </h3>
          <p class="text-sm text-[#c0c0c0] leading-relaxed">{{ project.tech }}</p>
        </div>

        <!-- Impact -->
        <div class="rounded-xl border border-[#e8ff5c]/15 bg-[#e8ff5c]/5 p-5 md:p-6">
          <h3 class="text-xs font-mono text-[#e8ff5c] tracking-widest uppercase mb-4">
            Impact / Result
          </h3>
          <ul class="flex flex-col gap-2.5">
            <li
              v-for="point in project.impact"
              :key="point"
              class="flex items-start gap-3 text-sm text-[#d4d4d4]"
            >
              <span class="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#e8ff5c] flex-shrink-0" />
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Links -->
        <div v-if="project.links.length" class="mt-6 flex flex-wrap gap-4">
          <template v-for="link in project.links" :key="link.label">
            <span v-if="!link.href" class="text-sm text-[#5c5c5c] italic">
              {{ link.label }}
            </span>
            <a
              v-else
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm text-[#e8ff5c] hover:text-[#d4eb4a] transition-colors"
            >
              {{ link.label }}
              <UIcon name="i-heroicons-arrow-top-right-on-square-20-solid" class="w-3.5 h-3.5" />
            </a>
          </template>
        </div>
      </article>
    </div>

    <!-- More on GitHub — dynamic, hidden if API fails -->
    <GitHubRepos username="isaactan98" />

    <!-- Footer CTA -->
    <div class="fade-up mt-12 pt-10 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p class="text-[#6b6b6b] text-sm">
        Interested in working together on something similar?
      </p>
      <NuxtLink
        to="/contact"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#e8ff5c] hover:bg-[#d4eb4a] text-[#0c0c0c] transition-colors duration-200 whitespace-nowrap"
      >
        Let's talk
        <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4" />
      </NuxtLink>
    </div>
  </div>
</template>
