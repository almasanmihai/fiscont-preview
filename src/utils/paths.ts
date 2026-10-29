/** BASE_URL fără slash final când trailingSlash e never — lipim mereu un separator. */
export function withBase(path = ''): string {
  const root = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const clean = path.replace(/^\//, '');
  if (!clean) return root.replace(/\/$/, '') || '/';
  return `${root}${clean}`;
}

export function assetUrl(path: string): string {
  return withBase(path.replace(/^\//, ''));
}

/** URL absolut al paginii, fără „.html” (build.format: 'file'), la fel ca în sitemap. */
export function pageUrl(pathname: string, site: URL | undefined): string {
  let clean = pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
  if (clean === withBase()) clean = `${clean.replace(/\/$/, '')}/`;
  return new URL(clean, site).href;
}
