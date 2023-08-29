// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: "127.0.0.1", 
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
