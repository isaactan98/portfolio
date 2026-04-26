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
    id: 'attendance-system',
    title: 'Low No Attendance System',
    category: 'Enterprise · Internal Tool',
    tags: ['Nuxt 3', 'FastAPI', 'PostgreSQL', 'TypeScript', 'Docker'],
    problem:
      'Manual tracking of low or no attendance records was error-prone and slow. Business analysts estimated a long delivery timeline across multiple phases — the complexity of multi-phase requirements made this a high-effort initiative.',
    solution:
      'A full-stack internal system covering Phases 1–3: automated attendance detection, data rectification workflows, and scheduled customizable reporting. Delivered end-to-end from frontend UI to backend API and database layer, working across the full stack independently.',
    tech:
      'Nuxt 3 frontend with TypeScript for the dashboard and data entry flows. FastAPI backend exposing REST endpoints for attendance logic and report generation. PostgreSQL database with optimised query patterns. Dockerized deployment within the enterprise environment.',
    impact: [
      'Delivered 30–50% ahead of Business Analyst time estimates',
      'Reduced manual effort significantly for the operations team',
      'Part of a larger suite of service requests totalling 300+ man-days'
    ],
    links: []
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker — Dual Currency PWA',
    category: 'Personal Tool · Self-Hosted',
    tags: ['Nuxt 3', 'Express.js', 'SQLite', 'Docker', 'Cloudflare Tunnel'],
    problem:
      'Living and commuting between Singapore and Johor Bahru means dealing with SGD and MYR daily. Existing expense apps either lack real dual-currency support, lock you into cloud accounts, or are too complex for everyday personal use.',
    solution:
      'A self-hosted Progressive Web App for personal expense tracking. Supports SGD/MYR dual currency with live conversion, works offline as a PWA, and runs entirely on a home server via Docker Compose and Cloudflare Tunnel — no third-party cloud dependency whatsoever.',
    tech:
      'Nuxt 3 frontend (port 18080) configured as a PWA with offline caching. Express.js REST API (port 3000) handling transactions and categories. SQLite for lightweight, file-based persistent storage. Docker Compose for local orchestration. Cloudflare Tunnel for secure remote access without opening ports.',
    impact: [
      'Fully operational daily driver — used personally every day',
      'Zero cloud dependency and complete data ownership',
      'Demonstrates end-to-end product ownership: architecture, build, deploy, and maintain'
    ],
    links: [{ label: 'Live demo available on request (self-hosted)', href: null }]
  },
  {
    id: 'miku-assistant',
    title: 'Miku AI Assistant — Raspberry Pi Voice & Display System',
    category: 'Hardware · Personal Project',
    tags: ['Raspberry Pi 5', 'Python', 'Local LLM', 'Waveshare LCD', '3D Printing'],
    problem:
      'Commercial AI assistants are cloud-dependent, always-listening, and feel generic. I wanted a local, always-on AI assistant with real physical presence — running entirely on my own hardware, without sending data to any external API.',
    solution:
      'An AI assistant built on a Raspberry Pi 5 with a Waveshare LCD display showing an animated Hatsune Miku character. Local LLM handles inference entirely on-device. The enclosure is a custom 3D-printed case with STL file modifications made using Python trimesh boolean operations to improve airflow and fit the specific hardware layout.',
    tech:
      'Raspberry Pi 5 (8GB RAM) as the compute platform. Waveshare LCD display for the animated character interface. Python for system integration, display control, and LLM interfacing. Local LLM for fully offline inference. Custom STL modifications via Python/trimesh for 3D enclosure design.',
    impact: [
      'Fully offline-capable local AI assistant — no internet required',
      'Demonstrates hardware + software integration depth beyond typical web dev scope',
      'Shows initiative: 3D mechanical design, embedded systems, local AI deployment all in one project'
    ],
    links: []
  }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <!-- Header -->
    <div class="fade-up mb-16">
      <p class="text-xs font-mono text-[#e8ff5c] font-medium tracking-widest uppercase mb-3">
        Work
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Projects</h1>
      <p class="text-lg text-[#a3a3a3]">
        Three case studies spanning enterprise systems, personal tooling, and hardware.
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

    <!-- CTA -->
    <div class="fade-up mt-16 text-center">
      <p class="text-[#a3a3a3] text-sm mb-4">
        Interested in working together on something similar?
      </p>
      <NuxtLink
        to="/contact"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#e8ff5c] hover:bg-[#d4eb4a] text-[#0f0f0f] transition-colors duration-200"
      >
        Let's talk
        <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4" />
      </NuxtLink>
    </div>
  </div>
</template>
