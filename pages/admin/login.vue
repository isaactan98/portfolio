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
      <div
        class="
          w-1/2
          mx-auto
          p-10
          mt-10
          rounded-3xl
          bg-white/50
          dark:bg-gray-700/30
          backdrop-blur-md
          shadow-xl
        "
      >
        <h1 class="text-center text-gray-700 dark:text-white">Login - Admin</h1>
        <form @submit.prevent="submitForm">
          <div class="mt-5">
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="floating_email"
                v-model="email"
                class="
                  block
                  py-2.5
                  px-0
                  w-full
                  text-sm text-gray-900
                  bg-transparent
                  border-0 border-b-2 border-gray-300
                  appearance-none
                  dark:text-white
                  dark:border-gray-600
                  dark:focus:border-gray-300
                  focus:outline-none focus:ring-0 focus:border-gray-300
                  peer
                "
                placeholder=" "
                required
                autocomplete="off"
              />
              <label
                for="floating_email"
                class="
                  absolute
                  text-sm text-gray-500
                  dark:text-gray-400
                  duration-300
                  transform
                  -translate-y-6
                  scale-75
                  top-3
                  -z-10
                  origin-[0]
                  peer-focus:left-0
                  peer-focus:text-gray-800
                  peer-focus:dark:text-gray-300
                  peer-placeholder-shown:scale-100
                  peer-placeholder-shown:translate-y-0
                  peer-focus:scale-75 peer-focus:-translate-y-6
                "
                >Email address</label
              >
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                v-model="password"
                type="password"
                name="floating_password"
                id="floating_password"
                class="
                  block
                  py-2.5
                  px-0
                  w-full
                  text-sm text-gray-900
                  bg-transparent
                  border-0 border-b-2 border-gray-300
                  appearance-none
                  dark:text-white
                  dark:border-gray-600
                  dark:focus:border-gray-300
                  focus:outline-none focus:ring-0 focus:border-gray-300
                  peer
                "
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="
                  absolute
                  text-sm text-gray-500
                  dark:text-gray-400
                  duration-300
                  transform
                  -translate-y-6
                  scale-75
                  top-3
                  -z-10
                  origin-[0]
                  peer-focus:left-0
                  peer-focus:text-gray-800
                  peer-focus:dark:text-gray-300
                  peer-placeholder-shown:scale-100
                  peer-placeholder-shown:translate-y-0
                  peer-focus:scale-75 peer-focus:-translate-y-6
                "
                >Password</label
              >
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="
                  py-2.5
                  px-5
                  rounded-lg
                  shadow-lg
                  bg-slate-700
                  text-gray-100
                  dark:bg-slate-200 dark:text-gray-700
                  hover:bg-slate-100
                  hover:text-gray-700
                  hover:dark:bg-slate-500
                  hover:dark:text-white
                "
              >
                <svg
                  v-if="loading"
                  role="status"
                  class="
                    inline
                    mr-2
                    w-4
                    h-4
                    text-gray-200
                    animate-spin
                    dark:text-gray-600
                  "
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#fff"
                  />
                </svg>
                Submit
              </button>
            </div>
          </div>
        </form>
        <div v-if="error" class="mt-5">
          <p class="text-red-500 text-xs font-bold">{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
export default {
  data() {
    return {
      email: null,
      password: null,
      error: false,
      message: null,
      loading: false,
    };
  },
  head: {
    title: "Login - Admin - Isaac Tan | Portfolio",
  },
  methods: {
    submitForm() {
      this.loading = true;
      this.error = false;
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
              this.$router.push({ name: "admin" });
              this.loading = false;
            })
            .catch((er) => {
              console.log(er);
              this.error = true;
              this.message = er.message.replace("Firebase: ", "");
              this.loading = false;
            });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push({ name: "admin" });
      }
    });
  },
};
</script>

<style>
</style>