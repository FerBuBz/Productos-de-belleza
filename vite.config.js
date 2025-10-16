import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base para GitHub Pages en repo "Productos-de-belleza"
  base: '/Productos-de-belleza/',
  plugins: [react()],
})
