/* import { defineNuxtConfig } from "nuxt"; */

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {
            // Options
          },
          autoprefixer: {},
        },
      },
    },
  },
});
  