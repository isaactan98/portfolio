<template>
  <div class="grid p-5 w-full sm:m-auto sm:max-w-3xl">
    <div class="mt-[4rem] w-full" data-scroll-section>
      <div class="h-[100vh] w-full" data-scroll>
        <div
          class="
            bg-zinc-300/50
            dark:bg-zinc-500/50
            backdrop-blur
            text-center
            p-3
            rounded-lg
            dark:text-white
          "
        >
          >_ Hello, I'm Isaac Tan here_
        </div>
        <div class="flex mt-6">
          <div class="grow">
            <h2 class="text-4xl leading-5 dark:text-white mb-6">
              Isaac Tan Yu Hao
            </h2>
            <p class="dark:text-white">
              Freelancer in Web Development & Photography
            </p>
          </div>
          <div></div>
        </div>
        <div class="mb-6" style="opacity: 1; transform: none">
          <h3
            class="
              leading-5
              text-2xl
              my-5
              underline underline-offset-4
              decoration-4
              dark:text-white
            "
          >
            Work
          </h3>
          <p class="text-justify indent-4 dark:text-white">
            Isaac Tan is a freelancer doing web development and designing, also
            has a passion in photography. He is based in Malaysia, Johor Bahru
            and now studying Computer Science Software Enginering at Universiti
            Teknologi Malaysia. He will be graduating on the year of 2022. Do
            check out the other portfolio on photography at
            <a class="underline text-violet-500 cursor-pointer">
              Adobe Portfolio </a
            >.
          </p>
          <div align="center" class="css-1v7r4tf"></div>
        </div>
      </div>
    </div>
    <div class="h-[100vh] w-full" data-scroll-section>
      <h2>Its me</h2>
    </div>
    <div class="h-[100vh] w-full" data-scroll-section>
      <h2>End</h2>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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

    this.lmS = new this.locomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      mobile: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });
  },
  // methods: {
  //   locomotiveScrollInit() {
  //     this.scroll = new this.$LocomotiveScroll({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true,
  //       mobile: {
  //         smooth: true,
  //       },
  //       tablet: {
  //         smooth: true,
  //       },
  //     });
  //   },
  // },
};
</script>
