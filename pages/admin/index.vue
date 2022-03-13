<template>
  <div
    class="
      h-[100vh]
      bg-gradient-to-t
      from-amber-500
      dark:from-slate-800 dark:to-slate-600
    "
  >
    <div v-if="fetching" class="absolute mt-[4rem] w-full">
      <h1>Loading...</h1>
    </div>
    <div v-else class="absolute mt-[4rem] w-full" data-scroll-section>
      <h1 class="font-bold text-slate-700 dark:text-white">Admin Page</h1>
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
  data() {
    return {
      authUser: null,
      fetching: false,
    };
  },
  // middleware: "firebase-auth"
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      this.fetching = true;
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.fetching = false;
          this.authUser = user;
        } else {
          this.fetching = false;
          this.$router.push({ name: "admin-login" });
        }
      });
    },
  },
};
</script>

<style>
</style>