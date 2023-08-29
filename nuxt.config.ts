// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: {
    enabled: false
  },
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0", 
  },
  vite: {
    server: {
      hmr: {
        host: "ws://24678.ibexcode.gray/",
        port: 24678,
        clientPort: 80
      }
    }
  }
})
