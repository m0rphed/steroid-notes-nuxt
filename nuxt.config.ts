// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  pages: true,
  modules: ['@nuxt/ui', '@nuxtjs/eslint-module'],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/katex.min.css',
    '@milkdown/theme-nord/style.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
