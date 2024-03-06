import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";

const option = {
  basedir: "./**/*",
  pretty: true,
};
const locals = {};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePugPlugin(option, locals)
  ],
  build: {
    brotliSize: false,
    minify: true,
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
  esbuild: {
    // Используйте синтаксис ES6 для JavaScript файлов
    target: 'esnext'
  }
});
