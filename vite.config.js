import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Pastane-sitesi/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    cssCodeSplit: false
  }
});
