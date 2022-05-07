<template>
  <nav
    class="bg-white/30 dark:bg-zinc-900/10 fixed w-full z-[1]"
    style="backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px)"
  >
    <div
      class="w-full flex max-w-2xl p-2 justify-center inline-se"
      wrap="wrap"
      align="center"
    >
      <div class="flex items-center mr-5">
        <h1 class="leading-5 font-bold">
          <nuxt-link to="/">
            <span>
              <p class="opacity-100 text-gray-800 dark:text-white">Isaac Tan</p>
            </span>
          </nuxt-link>
        </h1>
      </div>
      <div class="hidden sm:flex flex-row w-auto items-center grow">
        <nuxt-link
          no-prefetch
          class="
            p-3
            dark:text-white
            hover:underline
            underline-offset-4
            text-gray-700
          "
          to="/works"
          >Works</nuxt-link
        >
        <nuxt-link
          no-prefetch
          class="
            p-3
            dark:text-white
            hover:underline
            underline-offset-4
            text-gray-700
          "
          to="/contact"
          >Contact</nuxt-link
        >
        <a
          target="_blank"
          class="
            inline-flex
            items-center
            pl-2
            p-3
            text-gray-700
            dark:text-white
            hover:underline
            underline-offset-4
          "
          style="gap: 4px"
          href="https://github.com/isaactan98"
          ><svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
            ></path></svg
          >GIT
        </a>
      </div>
      <div class="flex-1" align="right">
        <ChangeThemeButton />
        <button
          v-if="checkauth"
          @click="signOut"
          class="rounded-lg text-sm p-2.5 shadow-lg"
        >
          <svg
            class="h-5 w-5 dark:text-white"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490.3 490.3"
            style="enable-background: new 0 0 490.3 490.3"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
			s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
			c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
			C27.9,58.95,0,86.75,0,121.05z"
                />
                <path
                  d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9
			c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63
			C380.6,325.15,380.6,332.95,385.4,337.65z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import ChangeThemeButton from "~/components/ChangeThemeButton.vue";
import firebase from "firebase/compat/app";
export default {
  data() {
    return {
      checkauth: false,
    };
  },
  components: {
    ChangeThemeButton,
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "admin-login" });
          this.checkauth = false;
        })
        .catch((er) => {});
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.checkauth = true;
      }
    });
  },
};
</script>

<style>
.inline-se {
  margin-inline-start: auto;
  margin-inline-end: auto;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
}
</style>