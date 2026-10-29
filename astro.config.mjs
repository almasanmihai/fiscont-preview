// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import { rehypeBaseUrls } from './src/utils/rehype-base-urls.js';
import { site, base } from './site.config.mjs';

export default defineConfig({
  site,
  base,
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'file',
  },
  markdown: {
    processor: unified({ rehypePlugins: [rehypeBaseUrls(base)] }),
  },
});
