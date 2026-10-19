import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages deployment - change this to match your repo name
  // Your repo: https://github.com/21housam/Aurora-Photography
  base: '/Aurora-Photography/',
})
