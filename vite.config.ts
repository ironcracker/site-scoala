import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/site-scoala/',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    },
})
