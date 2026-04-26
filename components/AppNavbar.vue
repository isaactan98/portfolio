<script setup lang="ts">
const route = useRoute()
const isMenuOpen = ref(false)
const scrollProgress = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    const el = document.documentElement
    scrollProgress.value = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
  }, { passive: true })
})

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
]

watch(route, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <header class="relative sticky top-0 z-50 border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-md">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <NuxtLink
        to="/"
        class="text-lg font-semibold tracking-tight text-white hover:text-[#e8ff5c] transition-colors duration-200"
      >
        Isaac Tan
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm transition-colors duration-200"
          :class="
            route.path === link.to
              ? 'text-white font-medium'
              : 'text-[#a3a3a3] hover:text-white'
          "
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-medium bg-[#e8ff5c] hover:bg-[#d4eb4a] text-[#0f0f0f] transition-colors duration-200"
        >
          Hire Me
        </NuxtLink>
      </nav>

      <!-- Mobile menu toggle -->
      <button
        class="md:hidden p-2 -mr-2 text-[#a3a3a3] hover:text-white transition-colors"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <UIcon
          :name="isMenuOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'"
          class="w-6 h-6"
        />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div
        v-if="isMenuOpen"
        class="md:hidden border-t border-white/5 bg-[#0f0f0f] px-6 py-5 flex flex-col gap-5"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm transition-colors duration-200"
          :class="
            route.path === link.to
              ? 'text-white font-medium'
              : 'text-[#a3a3a3] hover:text-white'
          "
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="inline-flex w-fit items-center px-4 py-2 rounded-lg text-sm font-medium bg-[#e8ff5c] hover:bg-[#d4eb4a] text-[#0f0f0f] transition-colors"
        >
          Hire Me
        </NuxtLink>
      </div>
    </Transition>

    <div
      class="absolute bottom-0 left-0 h-[2px] bg-[#e8ff5c] transition-[width] duration-150"
      :style="{ width: scrollProgress + '%' }"
    />
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
