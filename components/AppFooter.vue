<template>
  <footer class="border-t border-white/10 py-10 mt-24">
    <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#6b6b6b]">
      <div class="flex flex-col gap-1">
        <span class="text-white font-medium text-sm">Isaac Tan</span>
        <span>Full-Stack Engineer · Singapore</span>
      </div>
      <div class="flex items-center gap-6">
        <a href="https://github.com/isaactan98" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/isaactan98" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">LinkedIn</a>
        <NuxtLink to="/contact" class="hover:text-white transition-colors">Contact</NuxtLink>
      </div>
      <span class="text-[#3d3d3d] text-xs">© {{ new Date().getFullYear() }} Isaac Tan</span>
    </div>
  </footer>
</template>
