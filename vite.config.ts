import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    target: 'modules',
    outDir: 'dist',
    minify: false,
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue'],
      input: ['./src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: 'editor-components.js',
          name: 'editor-components',
          dir: './dist'
        },
        {
          format: 'umd',
          entryFileNames: 'editor-components.umd.js',
          name: 'editor-components',
          dir: './dist'
        }
      ]
    },
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'editor-components'
    }
  },
  plugins: [
    dts({
      outDir: './dist/'
    }),
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
