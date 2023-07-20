// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,
  dev: true,
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'dayjs-nuxt'],
  app: {
    baseURL: '/'
  },
  vite: {
    vue: {
      isProduction: false
    }
  },
  pinia: {
    autoImports: [
      ['defineStore', 'definePiniaStore'],
    ],
  },
})