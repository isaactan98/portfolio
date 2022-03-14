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
    <div data-scroll-section></div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Works - Isaac Tan | Portfolio",
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

<style>
</style>