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
