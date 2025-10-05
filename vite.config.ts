import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? '/my-portfolio/' : '/', // <-- automatically adjusts paths
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
});
