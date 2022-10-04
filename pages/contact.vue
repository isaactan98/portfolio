<template>
  <div class="grid p-5 sm:m-auto min-h-[70vh]">
    <div class="">
      <div class="text-zinc-800 dark:text-white font-bold text-2xl">
        Contact Me
      </div>
      <form ref="form" @submit.prevent="sendEmail">
        <div class="p-5 mt-3 mockup-code bg-slate-50 dark:bg-zinc-700">
          <pre data-prefix="1" class="my-2"><code><input
              id="title"
              name="title"
              type="text"
              class="w-2/3 bg-transparent outline-none dark:text-white"
              placeholder="Enter title here." autofocus autocomplete="off"
            /></code></pre>
          <pre data-prefix="2" class="my-2"><code><input
              id="email"
              name="email"
              type="email"
              class="w-2/3 bg-transparent outline-none dark:text-white"
              placeholder="Enter your email here." autocomplete="off"
            /></code></pre>
          <pre data-prefix="3"><code></code></pre>
          <pre data-prefix="" class="my-2"><code><textarea
              id="message"
              name="message"
              class="w-2/3 bg-transparent outline-none dark:text-white"
              placeholder="Write your message here."
            ></textarea></code></pre>
          <pre data-prefix=">" class="text-green-500" id="show_msg"><code>Done!</code></pre>
          <!--  -->
          <div class="my-3 flex justify-end">
            <button type="submit" id="submit" class="btn bg-black text-white hover:text-black hover:bg-white border-0">
              Submit
            </button>
          </div>
        </div>
      </form>
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
    const show_msg = document.getElementById("show_msg");
    show_msg.classList.add("hidden");
  },
  methods: {
    sendEmail() {
      const submit_btn = document.getElementById("submit");
      const input_title = document.getElementById("title");
      const input_email = document.getElementById("email");
      const input_message = document.getElementById("message");
      const show_msg = document.getElementById("show_msg");

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
          input_title.value = "";
          input_email.value = "";
          input_message.value = "";
          show_msg.classList.remove("hidden");

          setTimeout(() => {
            show_msg.classList.add("hidden");
          }, 10000);
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