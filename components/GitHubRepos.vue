<script setup lang="ts">
const props = defineProps<{ username: string }>()

const { fetchUserRepos } = useGitHub()

interface GHRepo {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  html_url: string
  updated_at: string
}

// Repos hidden from the grid — the site itself and already-featured case studies
const HIDDEN = new Set([
  'portfolio',
  'map-e3-pp',
  'shadow-anime',
  'nuxt_video_chat_app',
  'expense-tracker'
])

const repos = ref<GHRepo[]>([])
const visible = ref(false)

const shouldHide = (r: GHRepo): boolean => {
  if (HIDDEN.has(r.name)) return true
  if (r.name.toLowerCase().includes('test')) return true
  if (r.stargazers_count === 0 && new Date(r.updated_at).getFullYear() < 2022) return true
  return false
}

const toTitle = (name: string): string =>
  name
    .replace(/[-_]+/g, ' ')
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')

const langColor: Record<string, string> = {
  Vue: '#41b883',
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  CSS: '#1572b6',
  HTML: '#e34c26',
  Shell: '#89e051',
  Go: '#00add8',
  Rust: '#dea584',
}

onMounted(async () => {
  const data = await fetchUserRepos(props.username)
  if (data) {
    repos.value = (data as GHRepo[]).filter((r) => !shouldHide(r))
    if (repos.value.length > 0) visible.value = true
  }
})
</script>

<template>
  <Transition name="section-fade">
    <section v-if="visible" class="mt-16 pt-12 border-t border-white/8">
      <div class="mb-8">
        <p class="text-xs font-mono text-[#e8ff5c] font-medium tracking-widest uppercase mb-3">
          More on GitHub
        </p>
        <h2 class="text-2xl md:text-3xl font-bold text-white">
          Other public projects &amp; experiments.
        </h2>
        <p class="text-sm text-[#6b6b6b] mt-2">Direct links — no write-up, just the repos.</p>
      </div>

      <div class="grid sm:grid-cols-2 gap-3">
        <a
          v-for="repo in repos"
          :key="repo.id"
          :href="repo.html_url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col gap-2 p-5 rounded-xl border border-white/8 bg-[#141414] hover:border-[#e8ff5c]/20 hover:bg-[#1a1a12] transition-all duration-200"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 class="text-sm font-semibold text-white group-hover:text-[#e8ff5c] transition-colors leading-snug">
              {{ toTitle(repo.name) }}
            </h3>
            <span v-if="repo.stargazers_count > 0" class="flex-shrink-0 text-xs text-[#5c5c5c]">
              ★ {{ repo.stargazers_count }}
            </span>
          </div>

          <p v-if="repo.description" class="text-xs text-[#6b6b6b] leading-relaxed">
            {{ repo.description }}
          </p>

          <div v-if="repo.language" class="flex items-center gap-1.5 mt-auto pt-1">
            <span
              class="w-2 h-2 rounded-full flex-shrink-0"
              :style="{ backgroundColor: langColor[repo.language] ?? '#6b6b6b' }"
            />
            <span class="text-xs text-[#6b6b6b]">{{ repo.language }}</span>
          </div>
        </a>
      </div>
    </section>
  </Transition>
</template>

<style scoped>
.section-fade-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.section-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
</style>
