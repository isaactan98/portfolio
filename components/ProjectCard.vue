<script setup lang="ts">
const props = defineProps<{
  title: string
  tags: string[]
  description: string
  slug: string
}>()

const visibleTags = computed(() => props.tags.slice(0, 3))
const extraCount = computed(() => Math.max(0, props.tags.length - 3))
</script>

<template>
  <div
    class="group relative p-6 rounded-xl border border-white/8 bg-[#1a1a1a] hover:border-indigo-500/40 hover:bg-[#1d1d2e] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)] transition-all duration-300 flex flex-col h-full"
  >
    <div class="flex flex-wrap gap-2 mb-4 items-center">
      <TechBadge v-for="tag in visibleTags" :key="tag" :label="tag" />
      <span
        v-if="extraCount > 0"
        class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/5 text-[#6b6b6b] border border-white/8"
      >
        +{{ extraCount }}
      </span>
    </div>

    <h3 class="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
      {{ title }}
    </h3>

    <p class="text-sm text-[#a3a3a3] leading-relaxed flex-1 mb-5">
      {{ description }}
    </p>

    <NuxtLink
      :to="`/projects#${slug}`"
      class="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
    >
      View case study
      <UIcon
        name="i-heroicons-arrow-right-20-solid"
        class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
      />
    </NuxtLink>
  </div>
</template>
