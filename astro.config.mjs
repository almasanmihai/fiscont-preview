// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeBaseUrls } from './src/utils/rehype-base-urls.js';

const base = '/fiscont-preview';

export default defineConfig({
  site: 'https://almasanmihai.github.io',
  base,
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'file',
  },
  markdown: {
    rehypePlugins: [rehypeBaseUrls(base)],
  },
});
