<template>
  <div
    class="
      h-[100vh]
      bg-gradient-to-t
      from-amber-500
      dark:from-slate-800 dark:to-slate-600
    "
  >
    <div class="absolute mt-[4rem] w-full" data-scroll-section>
      <h1 class="font-bold text-slate-700">Admin Page</h1>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
export default {
  head: {
    title: "Admin - Isaac Tan | Portfolio",
  },
  // middleware({ redirect }) {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (!user) {
  //       return redirect({ name: "admin-login" });
  //     }
  //   });
  // },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push({ name: "admin-login" });
      }
    });
  },
};
</script>

<style>
</style>