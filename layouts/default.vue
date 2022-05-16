<template>
  <main
    class="
      relative
      grid
      bg-gradient-to-t
      from-amber-100
      dark:from-zinc-900 dark:to-zinc-800
    "
  >
    <Navbar />
    <div id="my-scrollbar" class="lg:h-screen">
      <HeroImg />
    </div>
    <Bottonnav />
  </main>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Bottonnav from "~/components/Bottomnav.vue";
import HeroImg from "~/components/HeroImg.vue";
import Scrollbar from "smooth-scrollbar";

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

    // this.locomotiveScrollInit();
    if (window.matchMedia("(min-width: 1024px)").matches) {
      let scrollvar = Scrollbar.init(document.getElementById("my-scrollbar"), {
        damping: 0.05,
      });
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