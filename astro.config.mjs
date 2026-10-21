// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeBaseUrls } from './src/utils/rehype-base-urls.js';

const base = '/fiscont-preview';

export default defineConfig({
  site: 'https://almasanmihai.github.io',
  base,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  markdown: {
    rehypePlugins: [rehypeBaseUrls(base)],
  },
});
