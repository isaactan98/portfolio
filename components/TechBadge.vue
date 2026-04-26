<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#e8ff5c]/10 text-[#e8ff5c] border border-[#e8ff5c]/20"
  >
    {{ label }}
  </span>
</template>
