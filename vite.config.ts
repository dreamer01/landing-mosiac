import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

export default {
  plugins: [
    ssr({
      prerender: true,
    }),
    react(),
  ],
  optimizeDeps: { include: ['cross-fetch'] },
} as UserConfig;
