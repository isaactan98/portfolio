<template>
  <div class="grid p-5 w-full sm:m-auto sm:max-w-3xl">
    <div class="mb-16 sm:m-0 w-full grid gap-8">
      <div class="min-h-full w-full">
        <div
          class="
            bg-zinc-500/50
            dark:bg-black
            backdrop-blur
            text-center
            p-3
            rounded-lg
            dark:text-white
          "
        >
          <span id="hello"></span><span id="flash">_</span>
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
          <div
            class="
              mt-4
              flex-shrink-0 flex
              justify-center
              sm:block sm:mt-0 sm:ml-6
            "
          >
            <div
              class="
                w-[100px]
                h-[100px]
                inline-block
                overflow-hidden
                rounded-full
                border-white border-2 border-solid
                relative
              "
            >
              <img
                src="~/assets/img/IMG_0023-p.png"
                alt=""
                class="absolute -top-4"
              />
            </div>
          </div>
        </div>

        <div class="mb-12" style="opacity: 1; transform: none">
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
            About Me
          </h3>
          <div v-if="aboutMe != null">
            <p
              class="text-justify indent-4 dark:text-white"
              v-html="aboutMe.fields.aboutMe.content[0].content[0].value"
            ></p>
          </div>
          <div
            class="min-h-[30vh] w-full border-none dark:text-white btn loading"
            v-else
          ></div>
        </div>

        <div class="mb-12" style="opacity: 1; transform: none">
          <h3
            class="
              leading-5
              text-2xl text-justify
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
            Fresh Graduated from Computer Science in Software Engineering at UTM
          </div>
        </div>
        <!--  -->
        <div class="mb-12">
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
            Tech Stack
          </h3>
          <div v-if="techStack != null" class="relative">
            <div v-for="(a, k) in techStack" :key="k" class="mb-4">
              <div
                class="flex stacks"
                :class="
                  a.type == 'language'
                    ? 'justify-start stacks-l'
                    : 'justify-end mt-4 stacks-r'
                "
              >
                <div class="flex">
                  <div class="mr-4">
                    <img :src="a.icon" class="w-10 h-10" :alt="a.name" />
                  </div>
                  <div class="flex flex-col justify-center">
                    <div class="font-bold dark:text-white">{{ a.name }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="
                absolute
                border-l-2 border-zinc-500
                top-0
                left-1/2
                md:left-1/3
              "
              id="lang_section"
            >
              <div
                class="
                  absolute
                  animate-pulse
                  top-1/2
                  ml-8
                  dark:text-white
                  text-2xl
                  font-bold
                "
              >
                Language
              </div>
            </div>

            <div
              class="
                block
                absolute
                h-[10%]
                md:h-[5%]
                w-1/4
                left-1/2
                md:left-1/3 md:border-b-2
                border-l-2 border-zinc-500
                md:rounded-bl-full
              "
              id="first_section"
            ></div>

            <div
              class="
                hidden
                md:block
                absolute
                h-[6%]
                left-1/2
                md:right-1/3 md:border-t-2
                border-r-2 border-zinc-500
                md:rounded-tr-full
              "
              id="second_section"
            ></div>

            <div
              class="
                absolute
                border-r-zinc-500 border-r-2
                left-1/2
                md:right-1/3
                top-1/2
                sm:top-1/3
              "
              id="framework_section"
            >
              <div
                class="
                  animate-pulse
                  dark:text-white
                  text-2xl
                  font-bold
                  absolute
                  top-1/2
                  right-0
                  mr-8
                "
              >
                Framework
              </div>
            </div>
          </div>
          <div v-else class="min-h-[30vh] min-w-full btn loading"></div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
var contentful = require("contentful");

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
      techStack: null,
      counter: {
        lang: 0,
        framework: 0,
      },
    };
  },

  mounted() {
    const hello = document.querySelector("#hello");
    const txt = ">_ Hello, I'm Isaac Tan here";

    if (hello) {
      let i = 0;
      const typeWriter = () => {
        if (i < txt.length) {
          hello.innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      typeWriter();
    }

    const flash = document.querySelector("#flash");
    if (flash) {
      setInterval(() => {
        flash.classList.toggle("opacity-0");
      }, 500);
    }

    client.getEntry(process.env.CONTENTFUL_ENTRY_ID).then((entry) => {
      this.aboutMe = entry;
    });

    client
      .getEntry("56ZOVSw8Spo7dvYSGMYlsp")
      .then((entry) => {
        this.techStack = entry.fields.techStack.stack;

        this.techStack.forEach((a) => {
          if (a.type == "language") {
            this.counter.lang += 1;
          } else {
            this.counter.framework += 1;
          }
        });
      })
      .then(() => {
        const lang_section = document.getElementById("lang_section");
        const framework_section = document.getElementById("framework_section");

        lang_section.style.minHeight = `${
          (this.counter.lang / (this.counter.lang + this.counter.framework)) *
            100 -
          5
        }%`;

        framework_section.style.top = `${
          (this.counter.lang / (this.counter.lang + this.counter.framework)) *
            100 +
          5
        }%`;

        framework_section.style.minHeight = `${
          (this.counter.framework /
            (this.counter.lang + this.counter.framework)) *
            100 -
          5
        }%`;

        const first_section = document.getElementById("first_section");
        const second_section = document.getElementById("second_section");

        first_section.style.top = `${
          (this.counter.lang / (this.counter.lang + this.counter.framework)) *
            100 -
          5
        }%`;

        second_section.style.top = `${
          (this.counter.lang / (this.counter.lang + this.counter.framework)) *
            100 -
          0.3
        }%`;

        const obs = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            } else {
              entry.target.classList.remove("show");
            }
          });
        });

        const qr = document.querySelectorAll(".stacks");
        qr.forEach((a) => {
          obs.observe(a);
        });
      });
  },
};
</script>

<style scoped>
.stacks {
  width: 50%;
}

.stacks-l {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.5s ease-in-out 0.5s;
}

.stacks-r {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s ease-in-out 0.5s;
}

.show {
  opacity: 1;
  transform: translateX(0px);
  width: 100%;
}
</style>