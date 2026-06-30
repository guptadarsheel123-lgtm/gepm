// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// `site` and `base` can be overridden via env vars so the same code deploys to
// the production root domain (default) and to a GitHub Pages sub-path preview.
//   - Production:    site=https://guptaenterprise.in  base=/
//   - Pages preview: PAGES_SITE + PAGES_BASE set by the deploy workflow
export default defineConfig({
  site: process.env.PAGES_SITE || 'https://guptaenterprise.in',
  base: process.env.PAGES_BASE || '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
