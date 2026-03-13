import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: '/dist/',
  build: {
    outDir: 'dist',
  },
});
