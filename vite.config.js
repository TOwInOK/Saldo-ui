import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";
import tailwindcss from "tailwindcss";

const option = {
  basedir: "./**/*",
  pretty: true,
};
const locals = {};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePugPlugin(option, locals)],
  base: "./",
  build: {
    brotliSize: false,
    minify: false,
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({}),
        tailwindcss({
          config: {
            content: ["./index.html", "./src/**/*.{js,html,pug}"],
            theme: {
              extend: {
                colors: {
                  "saldo": "#3E5DA7",
                  "saldo-300": "#9EAED3",
                  "saldo-100": "#E6EDFF",
                  "saldo-600": "#1D2848",
                },
              },
            },
            plugins: [],
          },
        }),
      ],
    },
  },
});
