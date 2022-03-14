<template>
  <main
    class="
      relative
      grid
      bg-gradient-to-t
      from-amber-100
      dark:from-slate-900 dark:to-slate-700
    "
  >
    <Navbar />
    <Nuxt data-scroll-container />
    <Bottonnav />
  </main>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Bottonnav from "~/components/Bottomnav.vue";

export default {
  data() {
    return {
      lmS: null,
    };
  },
  components: {
    Navbar,
    Bottonnav,
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

    // this.locomotiveScrollInit();
  },
  methods: {
    locomotiveScrollInit() {
      this.lmS = new this.locomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        mobile: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });
    },
  },

  transition: "slide-bottom",
};
</script>

<style>
</style>