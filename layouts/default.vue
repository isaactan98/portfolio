<template>
  <main class="
      relative
      sm:grid
      bg-gradient-to-t
      dark:from-zinc-900 dark:to-zinc-800
    ">
    <Navbar />
    <div>
      <HeroImg />
    </div>
    <div class="pb-20 sm:my-10 sm:pb-0 text-center dark:text-zinc-600">
      @ <span id="get_year"></span> Isaac Tan. All Right Reserved.
    </div>
    <Bottonnav />
  </main>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Bottonnav from "~/components/Bottomnav.vue";
import HeroImg from "~/components/HeroImg.vue";

export default {
  data() {
    return {
      lmS: null,
    };
  },
  components: {
    Navbar,
    Bottonnav,
    HeroImg,
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
  methods: {
    // locomotiveScrollInit() {
    //   this.lmS = new this.locomotiveScroll({
    //     el: document.querySelector("[data-scroll-container]"),
    //     smooth: true,
    //     mobile: {
    //       smooth: true,
    //     },
    //     tablet: {
    //       smooth: true,
    //     },
    //   });
    // },
  },

  transition: "slide-bottom",
};
</script>

<style>
</style>