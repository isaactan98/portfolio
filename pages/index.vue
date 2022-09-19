<template>
  <div class="grid p-5 w-full sm:m-auto sm:max-w-3xl">
    <div class="mb-16 sm:m-0 w-full grid gap-8">
      <div class="min-h-full w-full">
        <div class="
            bg-zinc-300/50
            dark:bg-zinc-500/50
            backdrop-blur
            text-center
            p-3
            rounded-lg
            dark:text-white
          ">
          >_ Hello, I'm Isaac Tan here_
        </div>
        <div class="sm:flex mt-6">
          <div class="grow">
            <h2 class="text-4xl leading-5 dark:text-white mb-6">
              Isaac Tan Yu Hao
            </h2>
            <p class="dark:text-white">
              Freelancer in Web Development & Photography
            </p>
          </div>
          <div class="
              mt-4
              flex-shrink-0 flex
              justify-center
              sm:block sm:mt-0 sm:ml-6
            ">
            <div class="
                w-[100px]
                h-[100px]
                inline-block
                overflow-hidden
                rounded-full
                border-white border-2 border-solid
                relative
              ">
              <img src="~/assets/img/IMG_0023-p.png" alt="" class="absolute -top-4" />
            </div>
          </div>
        </div>
        <div class="mb-6" style="opacity: 1; transform: none">
          <h3 class="
              leading-5
              text-2xl
              my-5
              underline underline-offset-4
              decoration-4
              dark:text-white
            ">
            About Me
          </h3>
          <div v-if="aboutMe != null">
            <p class="text-justify indent-4 dark:text-white"
              v-html="aboutMe.fields.aboutMe.content[0].content[0].value">
            </p>
          </div>
          <div class="min-h-[30vh] w-full border-none dark:text-white btn loading" v-else>

          </div>
          <div align="center" class="css-1v7r4tf"></div>
        </div>
        <div class="mb-6" style="opacity: 1; transform: none">
          <h3 class="
              leading-5
              text-2xl
              text-justify
              my-5
              underline underline-offset-4
              decoration-4
              dark:text-white
            ">
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
    </div>
  </div>
</template>

<script>
var contentful = require('contentful')

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default {
  components: {},
  data() {
    return {
      lmS: null,
      aboutMe: null,
    };
  },

  mounted() {

    client.getEntry(process.env.CONTENTFUL_ENTRY_ID).then((entry) => {
      // // logs the entry metadata
      // console.log(entry.sys);

      // // logs the field with ID title
      // console.log(entry.fields.aboutMe);
      this.aboutMe = entry;

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
