<script setup lang="ts">
useHead({ title: 'About — Isaac Tan' })

const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.fade-up')
})

const timeline = [
  {
    year: '1998',
    title: 'Born in Melaka, Malaysia'
  },
  {
    year: '2018',
    title: 'Diploma in Computer Science (IT)',
    description: 'Universiti Teknologi Malaysia (UTM)'
  },
  {
    year: '2019',
    title: 'Internship @ ABS Software Sdn Bhd',
    description: 'First enterprise software development experience'
  },
  {
    year: '2022',
    title: 'Internship @ Webby Group Sdn Bhd',
    description: 'Web development and client-facing product work'
  },
  {
    year: '2022',
    title: 'B.Sc Computer Science (Software Engineering)',
    description: 'Universiti Teknologi Malaysia (UTM)'
  },
  {
    year: '2023 – Present',
    title: 'Software Engineer @ Enterprise Tech Company, Singapore',
    description:
      'Enterprise systems development — internal tools, service delivery, full-stack feature ownership',
    current: true
  }
]

const techStack = [
  {
    category: 'Frontend',
    items: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Nuxt UI']
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Express.js', 'Node.js']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'SQLite']
  },
  {
    category: 'Infra & DevOps',
    items: ['Docker', 'Cloudflare Tunnel', 'Tailscale', 'CasaOS']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'GitHub Actions']
  }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <!-- Header -->
    <div class="fade-up mb-16">
      <div class="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
        <!-- Profile photo -->
        <div class="relative flex-shrink-0 self-start">
          <div class="absolute inset-0 rounded-full bg-[#e8ff5c]/15 blur-xl scale-125" />
          <img
            src="~/assets/images/me.png"
            alt="Isaac Tan"
            class="relative w-20 h-20 object-cover object-top rounded-full border border-white/15"
          />
        </div>
        <!-- Name + headline -->
        <div>
          <p class="text-xs font-mono text-[#e8ff5c] font-medium tracking-widest uppercase mb-2">
            About
          </p>
          <p class="text-sm font-medium text-[#a3a3a3] mb-1">Isaac Tan Yu Hao</p>
          <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineer who ships<br />
            <span class="gradient-text">full-stack and hardware</span>
          </h1>
        </div>
      </div>
      <p class="text-lg text-[#a3a3a3] max-w-2xl leading-relaxed">
        Full-Stack Software Engineer based in Singapore, originally from Melaka, Malaysia. 3+ years of enterprise software development in Singapore. I build internal systems, self-hosted tools, and side projects that solve real problems.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-16">
      <!-- Timeline -->
      <div class="fade-up">
        <h2 class="text-xl font-semibold text-white mb-8">Experience &amp; Background</h2>
        <div>
          <TimelineItem
            v-for="item in timeline"
            :key="item.year + item.title"
            :year="item.year"
            :title="item.title"
            :description="item.description"
            :current="item.current"
          />
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="fade-up" style="transition-delay: 150ms">
        <h2 class="text-xl font-semibold text-white mb-8">Tech Stack</h2>
        <div class="flex flex-col gap-6">
          <div v-for="group in techStack" :key="group.category">
            <p class="text-xs font-mono text-[#5c5c5c] tracking-widest uppercase mb-3">
              {{ group.category }}
            </p>
            <div class="flex flex-wrap gap-2">
              <TechBadge
                v-for="item in group.items"
                :key="item"
                :label="item"
              />
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-10 pt-8 border-t border-white/8">
          <p class="text-sm text-[#a3a3a3] mb-4">
            Open to freelance projects and interesting collaborations.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#e8ff5c] hover:bg-[#d4eb4a] text-[#0f0f0f] transition-colors duration-200"
          >
            Get in touch
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
