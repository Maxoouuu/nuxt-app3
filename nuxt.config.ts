/* import { defineNuxtConfig } from "nuxt"; */

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
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
