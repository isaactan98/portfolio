<template>
  <div
    class="
      h-[100vh]
      bg-gradient-to-tr
      from-indigo-100
      dark:from-slate-800 dark:to-slate-500
    "
  >
    <ChangeThemeButton />
  </div>
</template>

<script>
import ChangeThemeButton from "~/components/ChangeThemeButton.vue";
export default {
  components: { ChangeThemeButton },
  name: "IndexPage",
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
