// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import { rehypeBaseUrls } from './src/utils/rehype-base-urls.js';
import { privateClients } from './src/utils/private-clients.mjs';
import { site, base } from './site.config.mjs';

export default defineConfig({
  site,
  base,
  trailingSlash: 'never',
  integrations: [privateClients(), sitemap()],
  build: {
    format: 'file',
  },
  markdown: {
    processor: unified({ rehypePlugins: [rehypeBaseUrls(base)] }),
  },
});
