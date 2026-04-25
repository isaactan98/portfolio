<template>
  <div class="min-h-screen flex flex-col bg-[#0f0f0f] text-[#f5f5f5]">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
