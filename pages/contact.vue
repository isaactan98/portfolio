<script setup lang="ts">
useHead({ title: 'Contact — Isaac Tan' })

const { observeElements } = useScrollAnimation()

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const hasError = ref(false)

// TODO: Integrate your preferred email service here (e.g. EmailJS, Resend, or a Nuxt server route)
const handleSubmit = async () => {
  isSubmitting.value = true
  hasError.value = false

  try {
    // Placeholder: replace with actual email API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    isSubmitted.value = true
  }
  catch {
    hasError.value = true
  }
  finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  observeElements('.fade-up')
})

const contacts = [
  {
    label: 'Email',
    value: 'hello@isaactan.dev',
    href: 'mailto:hello@isaactan.dev',
    icon: 'i-heroicons-envelope-20-solid'
  },
  {
    label: 'GitHub',
    value: 'github.com/isaactan98',
    href: 'https://github.com/isaactan98',
    icon: 'i-simple-icons-github'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/isaactan98',
    href: 'https://linkedin.com/in/isaactan98',
    icon: 'i-heroicons-user-circle-20-solid'
  }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <!-- Header -->
    <div class="fade-up mb-16">
      <p class="text-xs font-mono text-[#e8ff5c] font-medium tracking-widest uppercase mb-3">
        Contact
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
        Let's talk.
      </h1>
      <p class="text-lg text-[#a3a3a3] max-w-lg leading-relaxed">
        Have a project in mind? I'm open to freelance work, interesting collaborations, and full-time opportunities in Singapore.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12 md:gap-16">
      <!-- Contact links -->
      <div class="fade-up flex flex-col gap-4">
        <a
          v-for="contact in contacts"
          :key="contact.label"
          :href="contact.href"
          :target="contact.href.startsWith('mailto:') ? '_self' : '_blank'"
          :rel="contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'"
          class="group flex items-center gap-4 p-5 rounded-xl border border-white/8 bg-[#1a1a1a] hover:border-[#e8ff5c]/25 hover:bg-[#1e1e1e] transition-all duration-200"
        >
          <div class="w-10 h-10 rounded-lg bg-[#e8ff5c]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8ff5c]/15 transition-colors">
            <UIcon :name="contact.icon" class="w-5 h-5 text-[#e8ff5c]" />
          </div>
          <div>
            <p class="text-xs text-[#5c5c5c] mb-0.5">{{ contact.label }}</p>
            <p class="text-sm font-medium text-white">{{ contact.value }}</p>
          </div>
        </a>

        <div class="mt-4 p-5 rounded-xl border border-white/8 bg-[#1a1a1a]">
          <p class="text-xs text-[#5c5c5c] mb-1">Location</p>
          <p class="text-sm font-medium text-white">Singapore 🇸🇬</p>
          <p class="text-xs text-[#a3a3a3] mt-1">Also works with clients in MY, remote worldwide</p>
        </div>
      </div>

      <!-- Contact form -->
      <div class="fade-up" style="transition-delay: 150ms">
        <Transition name="fade" mode="out-in">
          <div
            v-if="isSubmitted"
            key="success"
            class="flex flex-col items-center justify-center text-center p-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 min-h-[300px]"
          >
            <div class="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-check-20-solid" class="w-6 h-6 text-emerald-400" />
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Message sent!</h3>
            <p class="text-sm text-[#a3a3a3]">
              Thanks for reaching out. I'll get back to you within 1–2 business days.
            </p>
          </div>

          <form
            v-else
            key="form"
            class="flex flex-col gap-5"
            @submit.prevent="handleSubmit"
          >
            <div>
              <label for="contact-name" class="block text-xs font-medium text-[#a3a3a3] mb-2 tracking-wide">
                Name
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                required
                placeholder="Your name"
                class="w-full px-4 py-3 rounded-lg border border-white/15 bg-[#181818] text-white placeholder-[#5c5c5c] text-sm focus:outline-none focus:border-[#e8ff5c]/50 focus:ring-1 focus:ring-[#e8ff5c]/20 focus:bg-[#1a1a1a] transition-all"
              />
            </div>

            <div>
              <label for="contact-email" class="block text-xs font-medium text-[#a3a3a3] mb-2 tracking-wide">
                Email
              </label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                required
                placeholder="your@email.com"
                class="w-full px-4 py-3 rounded-lg border border-white/15 bg-[#181818] text-white placeholder-[#5c5c5c] text-sm focus:outline-none focus:border-[#e8ff5c]/50 focus:ring-1 focus:ring-[#e8ff5c]/20 focus:bg-[#1a1a1a] transition-all"
              />
            </div>

            <div>
              <label for="contact-message" class="block text-xs font-medium text-[#a3a3a3] mb-2 tracking-wide">
                Message
              </label>
              <textarea
                id="contact-message"
                v-model="form.message"
                required
                rows="5"
                placeholder="Tell me about your project or what you're working on..."
                class="w-full px-4 py-3 rounded-lg border border-white/15 bg-[#181818] text-white placeholder-[#5c5c5c] text-sm focus:outline-none focus:border-[#e8ff5c]/50 focus:ring-1 focus:ring-[#e8ff5c]/20 focus:bg-[#1a1a1a] transition-all resize-none"
              />
            </div>

            <p v-if="hasError" class="text-sm text-red-400">
              Something went wrong. Please try emailing me directly.
            </p>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#e8ff5c] hover:bg-[#d4eb4a] disabled:opacity-60 disabled:cursor-not-allowed text-[#0f0f0f] transition-colors duration-200"
            >
              <UIcon
                v-if="isSubmitting"
                name="i-heroicons-arrow-path-20-solid"
                class="w-4 h-4 animate-spin"
              />
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
