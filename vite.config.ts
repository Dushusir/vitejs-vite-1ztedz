import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { univerPlugin } from "@univerjs/vite-plugin";
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [univerPlugin(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
