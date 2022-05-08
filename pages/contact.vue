<template>
  <div class="grid p-2 sm:m-auto sm:w-2/3">
    <div class="min-h-screen"></div>
  </div>
</template>

<script>
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

    // this.lmS = new this.locomotiveScroll({
    //   el: document.querySelector("[data-scroll-container]"),
    //   smooth: true,
    //   mobile: {
    //     smooth: true,
    //   },
    //   tablet: {
    //     smooth: true,
    //   },
    // });
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