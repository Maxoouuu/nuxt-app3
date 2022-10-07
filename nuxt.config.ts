/* import { defineNuxtConfig } from "nuxt"; */

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss",'@nuxt/image-edge'],
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
