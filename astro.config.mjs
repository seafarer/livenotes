// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://seafarer.github.io',
  base:
    process.env.BASE_PATH ||
    (process.env.NODE_ENV === 'production' ? '/livenotes' : '/'),

  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
