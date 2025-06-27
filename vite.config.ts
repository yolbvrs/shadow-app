import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // <- root should be current directory
  build: {
    outDir: 'dist',
  },
})
