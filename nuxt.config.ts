// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/eslint'],
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.VITE_API_URL,
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});
