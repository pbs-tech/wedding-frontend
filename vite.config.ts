import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    ViteImageOptimizer()
    ],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      '@': '/src'
    }
  }
})
