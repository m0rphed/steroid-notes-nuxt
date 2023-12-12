// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  pages: true,
  modules: ['@nuxt/ui'],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/katex.min.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
})
