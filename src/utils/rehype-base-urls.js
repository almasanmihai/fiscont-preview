import { visit } from 'unist-util-visit';

/**
 * Tina / Markdown scriu căi absolute (/uploads/...), dar pe GitHub Pages
 * site-ul stă sub base (/fiscont-preview). Prefixăm img/src și a/href interne.
 */
export function rehypeBaseUrls(basePath) {
  const base = (basePath || '/').replace(/\/$/, '') || '';

  return () => (tree) => {
    if (!base || base === '/') return;

    visit(tree, 'element', (node) => {
      for (const attr of ['src', 'href']) {
        const value = node.properties?.[attr];
        if (typeof value !== 'string') continue;
        if (!value.startsWith('/') || value.startsWith('//')) continue;
        if (value === base || value.startsWith(`${base}/`)) continue;
        node.properties[attr] = `${base}${value}`;
      }
    });
  };
}
