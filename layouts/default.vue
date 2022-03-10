<template>
  <main>
    <Navbar />
    <Nuxt class="scroll-smooth" />
  </main>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  mounted() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.getItem("tcvDarkMode") === "true" ||
      (!("tcvDarkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
};
</script>

<style>
</style>