// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to your production domain before deploying.
export default defineConfig({
  site: 'https://guptaenterprise.in',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
