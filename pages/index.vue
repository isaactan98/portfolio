<template>
  <div
    class="
      h-[200vh]
      bg-gradient-to-t
      from-amber-100
      dark:from-slate-900 dark:to-slate-600
    "
  >
  </div>
</template>

<script>
export default {
  components: {  },
  name: "IndexPage",
  watch: {
    "$route.params.index": function(val) {
      console.log(val);
    }
  }
};
</script>
