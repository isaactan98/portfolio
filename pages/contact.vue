<template>
  <div class="grid p-5 sm:m-auto">
    <div class="min-h-screen">
      <div
        class="
          p-5
          sm:p-10
          rounded-lg
          shadow-lg
          bg-gray-100/30
          dark:bg-zinc-500/30
          backdrop-blur-lg
        "
      >
        <div class="text-zinc-800 dark:text-white font-bold text-2xl">
          Contact Me
        </div>
        <form ref="form" @submit.prevent="sendEmail">
          <div class="py-3">
            <div class="my-3">
              <input
                name="title"
                type="text"
                class="p-2 border w-full shadow-md rounded-md"
                placeholder="A title here, cuz why not"
              />
            </div>
            <div class="my-3">
              <input
                name="email"
                type="email"
                class="p-2 border w-full shadow-md rounded-md"
                placeholder="Your email, so I can contact you back."
              />
            </div>
            <div class="my-3">
              <textarea
                name="message"
                class="p-2 border w-full shadow-md rounded-md"
                placeholder="Write your message here."
              ></textarea>
            </div>
            <div class="my-3 flex justify-end">
              <button type="submit" id="submit" class="btn">Submit Here</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  head: {
    title: "Contact - Isaac Tan | Portfolio",
  },
  data() {
    return {
      lmS: null,
    };
  },
  mounted() {
    const e = document.querySelector("span.c-scrollbar");
    if (e != null) {
      e.parentElement.removeChild(e);
    }
  },
  methods: {
    sendEmail() {
      const submit_btn = document.getElementById("submit");

      submit_btn.classList.add("loading");

      emailjs
        .sendForm(
          process.env.EMAIL_JS_SERVICE_ID,
          process.env.EMAIL_JS_TEMPLATE_ID,
          this.$refs.form,
          process.env.EMAIL_JS_PUBLIC_KEY
        )
        .then((s) => {
          submit_btn.classList.remove("loading");
          console.log(s);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>