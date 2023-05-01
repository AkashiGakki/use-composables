import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
// import libCss from 'vite-plugin-libcss'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: '@use-composable/components',
      fileName: 'index',
    },
  },
  plugins: [
    vue(),
    dts({
      outputDir: 'dist/types',
    }),
    // libCss(),
  ],
})
