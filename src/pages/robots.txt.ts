import type { APIRoute } from 'astro';

/** Pe fiscontsrl.ro permite indexarea și indică sitemap-ul; previzualizarea rămâne blocată. */
export const GET: APIRoute = ({ site }) => {
  const body =
    site?.hostname === 'fiscontsrl.ro'
      ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`
      : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
