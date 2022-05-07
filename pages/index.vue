<template>
  <div class="grid p-5 w-full sm:m-auto sm:max-w-3xl">
    <div class="my-16 w-full grid gap-8" data-scroll-section>
      <div class="mb-5" data-scroll>
        <img src="~/assets/img/IMG_0094.jpeg" alt="" />
      </div>
      <div class="h-screen w-full" data-scroll>
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
            Isaac Tan is a freelancer doing web development and designing, and
            also has a passion for photography. He is based in Johor
            Bahru(新山), Malaysia(马来西亚) 🇲🇾 and currently pursuing a
            Bachelor's Degree in Computer Science (Software Engineering) at
            Universiti Teknologi Malaysia (UTM). He will be graduating in the
            year 2022. Do check out the other portfolio on photography at
            <a
              class="underline text-violet-500 cursor-pointer"
              id="adobe-portfolio"
            >
              Adobe Portfolio </a
            >.
          </p>
          <div align="center" class="css-1v7r4tf"></div>
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
            Bio
          </h3>
          <div class="pl-14 -indent-14 dark:text-white">
            <span class="font-bold mr-4">1998</span>
            Born in Melaka(马六甲), Malaysia(马来西亚)
          </div>
          <div class="pl-14 -indent-14 dark:text-white">
            <span class="font-bold mr-4">2018</span>
            Graduated: Diploma in Computer Science (Information Technology) at
            UTM
          </div>
          <div class="pl-14 -indent-14 dark:text-white">
            <span class="font-bold mr-4">2019</span>
            Finished Internship at ABS Software Sdn Bhd
          </div>
          <div class="pl-14 -indent-14 dark:text-white">
            <span class="font-bold mr-4">2022</span>
            Finished Internship at Webby Group Sdn Bhd
          </div>
          <div class="pl-14 -indent-14 dark:text-white">
            <span class="font-bold mr-4">2022</span>
            Studying Computer Science in Software Engineering at UTM
          </div>
          <div></div>
        </div>
      </div>
      <div class="my-10 text-center dark:text-zinc-600" data-scroll="">
        @ <span id="get_year"></span> Isaac Tan. All Right Reserved.
      </div>
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

    let adobe_portfolio = document.getElementById("adobe-portfolio");
    adobe_portfolio.addEventListener("click", () => {
      window.open("https://iztan98.myportfolio.com/photography", "_blank");
    });

    const get_year = document.getElementById('get_year');
    get_year.innerHTML = new Date().getFullYear();
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
