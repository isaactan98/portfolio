<template>
  <div class="grid p-5 w-full sm:m-auto sm:max-w-3xl">
    <div class="min-h-screen">
      <div class="flex mb-4">
        <h1 class="dark:text-gray-300 text-3xl font-bold">Github Repo</h1>
      </div>

      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2" v-if="loading == true">
        <div class="card bg-gray-100 shadow-xl h-40" v-for="x in 6" :key="x">
          <div class="card-body bg-zinc-200 dark:bg-zinc-800 animate-pulse">
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-10 sm:mb-0" v-else>
        <div class="card border border-black dark:border-white" v-for="(x, key) in repo" :key="key">
          <div class="card-body">
            <h2 class="card-title dark:text-white underline">{{ x.name }}</h2>
            <p class="dark:text-white">
              {{ x.description ?? "No Description" }}
            </p>
            <div class="card-actions justify-between items-center mt-3">
              <span class="badge badge-primary dark:text-white">{{
              x.language
              }}</span>
              <a :href="x.html_url" target="_blank" class="btn btn-sm btn-primary dark:text-white">View Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div id="load_more" class="w-full text-center mt-8">
        <label for="" class="btn btn-ghost dark:text-white" v-if="load_more">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 animate-spin">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Projects - Isaac Tan | Portfolio",
  },
  data() {
    return {
      repo: [],
      loading: true,
      url: "https://api.github.com/users/isaactan98/repos",
      counter: 0,
      load_more: false,
      data_length: 0,
    };
  },
  mounted() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.sortByDate(data);
        this.data_length = data.length;
        data.forEach((element) => {
          this.loading = false;
          if (this.counter < 6) {
            if (element.private == false) {
              this.repo.push(element);
              this.counter++;
            }
          }
        });
      })
      .then(() => {
        this.counter = 0;
      })
      .catch((e) => console.log(e));

    const load = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (this.repo.length < this.data_length) {
            this.load_more = true;
            this.loadMore();
          }
        }
      });
    });

    load.observe(document.querySelector("#load_more"));

  },
  methods: {
    sortByDate(arr) {
      const sorter = (a, b) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      };
      arr.sort(sorter);
    },

    loadMore() {
      setTimeout(() => {
        fetch(this.url)
          .then((response) => response.json())
          .then((data) => {
            this.sortByDate(data);
            data.forEach((element) => {
              if (this.repo.length < data.length) {
                this.repo.forEach((r) => {
                  if (element != null && element.id == r.id) {
                    element = null;
                  }
                });
                if (element != null && this.counter < 6) {
                  if (element.private == false) {
                    this.repo.push(element);
                    this.counter++;
                  }
                }
              }
            });
            // console.log(this.repo.length, data.length);
            this.load_more = false;
          })
          .then(() => {
            this.counter = 0;
          })
          .catch((e) => console.log(e));
      }, 1000);
    },
  },
};
</script>

<style>

</style>
