import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['react-router', 'react-router-dom'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://url-shortener-production-3f34.up.railway.app',
        changeOrigin: true
      }
    }
  }
})