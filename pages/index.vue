<template>
  <div
    class="
      grid
      p-2
      sm:m-auto sm:w-2/3
      bg-gradient-to-t
      from-amber-100
      dark:from-slate-900 dark:to-slate-600
    "
  >
    <div class="mt-[4rem] w-full" data-scroll-section>
      <div class="h-[100vh] bg-slate-500 w-full" data-scroll>
        <h1 class="text-white" data-scroll>Hello</h1>
        <h2 class="text-white" data-scroll>Hello</h2>
        <h2 class="text-white" data-scroll>Hello</h2>
        <h2 class="text-white" data-scroll>Hello</h2>
        <h2 class="text-white" data-scroll>Hello</h2>
      </div>
    </div>
    <div class="h-[100vh] w-full" data-scroll-section>
      <h2>Its me</h2>
    </div>
    <div class="h-[100vh] w-full bg-slate-600" data-scroll-section>
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
