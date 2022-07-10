module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fade 1s'
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
  daisyui: {
    themes: [],
  },
}
