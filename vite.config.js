import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";
import flowbite from "flowbite";

const option = {
  basedir: "./**/*",
  pretty: true,
};
const locals = {};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePugPlugin(option, locals), flowbite],
  base: "./",
  build: {
    brotliSize: false,
    minify: false,
    rollupOptions: {
      input: {
        main: "./index.html",
        catalog: "./catalog.html",
      },
    },
  },
});
