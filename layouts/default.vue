<template>
  <main class="
      transition-colors
      duration-300
      relative
      sm:grid
      bg-zinc-100
      dark:bg-zinc-900
    ">
    <Navbar />
    <div>
      <HeroImg />
    </div>
    <div class="pb-20 sm:my-10 sm:pb-0 text-center dark:text-zinc-300">
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

    const get_year = document.getElementById("get_year");
    get_year.innerHTML = new Date().getFullYear();

  },

  transition: "slide-bottom",
};
</script>

<style>

</style>