import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:4001',
        secure: false,
        changeOrigin: true
      }
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})