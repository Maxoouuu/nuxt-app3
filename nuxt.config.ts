/* import { defineNuxtConfig } from "nuxt"; */



// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: process.env.npm_package_name || "",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico?v2" }],
    },
  },
 
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "@nuxt/image-edge",],
  /* plugins: ["~plugins/geolib.ts"], */
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
