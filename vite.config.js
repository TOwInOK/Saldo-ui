import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";

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
});
