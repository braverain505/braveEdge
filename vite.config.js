import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import seo from './plugins/seo.js';

export default defineConfig(({ mode }) => {
  // Load every env var (not just VITE_-prefixed) so the SEO plugin can read
  // build-time configuration such as the deployed domain.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), seo({ env })],
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});
