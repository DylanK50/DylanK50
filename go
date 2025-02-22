import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // This tells Vite not to bundle go (or go@1.19)
      external: ['go@1.19']  // or ['go'] if that's how it's referenced in your code
    }
  }
});
