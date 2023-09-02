// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: {
    enabled: false
  },
  css: ['@unocss/reset/eric-meyer.css', 'virtual:uno.css'],
  modules: [
    '@unocss/nuxt',
  ],
  devtools: { enabled: true },
})
