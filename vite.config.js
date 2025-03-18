import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: resolve(__dirname, 'src'),
  base: '/vite_portfolio_demo/',
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
})
