import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'src',
  envDir: '..',
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  build: {
    outDir: '../dist',
  },
})
