// Unde se publică site-ul. Fără SITE_PROD: previzualizarea de pe GitHub Pages (noindex).
// Cu SITE_PROD=1: domeniul final, indexabil de motoarele de căutare.
// Folosit de astro.config.mjs și de tina/config.ts, ca cele două să nu se contrazică.
export const isProd = process.env.SITE_PROD === '1';

export const site = isProd ? 'https://fiscontsrl.ro' : 'https://almasanmihai.github.io';
export const base = isProd ? '/' : '/fiscont-preview';
