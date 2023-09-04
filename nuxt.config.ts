import glsl from 'vite-plugin-glsl';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: {
    enabled: false
  },
  css: ['@unocss/reset/eric-meyer.css', 'virtual:uno.css'],
  modules: [
    '@unocss/nuxt',
  ],
  vite: {
    plugins: [glsl()]
  },
  devtools: { enabled: false }
})
