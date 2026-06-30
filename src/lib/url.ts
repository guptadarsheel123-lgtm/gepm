/**
 * Prefix internal, root-relative links with the site's base path.
 *
 * Astro derives `import.meta.env.BASE_URL` from the `base` option in
 * astro.config.mjs. Locally / on the real root domain this is "/", so url()
 * is a no-op. On GitHub Pages it is "/gepm/", so links resolve correctly.
 *
 * External links (http:, mailto:, tel:, #anchors, //protocol-relative) and
 * already-relative paths are returned untouched.
 */
const BASE = import.meta.env.BASE_URL;

export function url(path: string): string {
  if (!path) return path;
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path; // scheme, //, or #anchor
  if (!path.startsWith('/')) return path; // relative path
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  return base + path;
}
