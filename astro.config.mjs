// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://almasanmihai.github.io',
  base: '/fiscont-preview',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
