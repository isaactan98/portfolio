<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
  >
    {{ label }}
  </span>
</template>
