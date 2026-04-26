<script setup lang="ts">
defineProps<{
  year: string
  title: string
  description?: string
  current?: boolean
}>()
</script>

<template>
  <div class="relative pl-8 pb-8 last:pb-0 [&:last-child>div:first-child]:hidden">
    <!-- Vertical connector line -->
    <div class="absolute left-[10px] top-5 bottom-0 w-px bg-white/8" />

    <!-- Timeline dot -->
    <div
      class="absolute left-0 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
      :class="
        current
          ? 'border-[#e8ff5c] bg-[#e8ff5c]/10'
          : 'border-white/15 bg-[#1a1a1a]'
      "
    >
      <div
        v-if="current"
        class="w-2 h-2 rounded-full bg-[#e8ff5c] animate-pulse"
      />
    </div>

    <div>
      <span class="text-xs font-mono text-[#e8ff5c] font-medium">{{ year }}</span>
      <h4 class="text-sm font-semibold text-[#f5f5f5] mt-0.5 leading-snug">{{ title }}</h4>
      <p v-if="description" class="text-xs text-[#a3a3a3] mt-1 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>
