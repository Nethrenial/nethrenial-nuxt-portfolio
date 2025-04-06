import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
  ],
  css: ["~/assets/css/main.css"],
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
