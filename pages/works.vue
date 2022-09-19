<template>
  <div class="grid p-5 w-full sm:m-auto sm:max-w-3xl">
    <div class="min-h-screen">
      <div class="flex mb-4">
        <h1 class="dark:text-gray-300 text-3xl font-bold">Github Repo</h1>
      </div>

      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2" v-if="loading == true">

        <div class="card bg-gray-100 shadow-xl h-40" v-for="x in 10" :key="x">
          <div class="card-body bg-zinc-500 animate-pulse">
            <div class="card-actions justify-end"></div>
          </div>
        </div>

      </div>

      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-10 sm:mb-0" v-else>

        <div class="card border border-black dark:border-white" v-for="x, key in repo" :key="key">
          <div class="card-body">
            <h2 class="card-title dark:text-white underline">{{ x.name }}</h2>
            <p class="dark:text-white">{{ x.description ?? 'No Description' }}</p>
            <div class="card-actions justify-between items-center mt-3">
              <span class="badge badge-primary dark:text-white">{{ x.language }}</span>
              <a :href="x.html_url" target="_blank" class="btn btn-sm btn-primary dark:text-white">View Repo</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Works - Isaac Tan | Portfolio",
  },
  data() {
    return {
      repo: [],
      loading: true
    }
  },
  mounted() {
    const url = "https://api.github.com/users/isaactan98/repos";

    const sortByDate = arr => {
      const sorter = (a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
      arr.sort(sorter);
    };

    fetch(url)
      .then(response => response.json())
      .then(data => {
        sortByDate(data)
        data.forEach(element => {
          this.loading = false;
          if (element.private == false) {
            this.repo.push(element);
          }
        });
      }).catch(e => console.log(e));
  },
};
</script>

<style>

</style>