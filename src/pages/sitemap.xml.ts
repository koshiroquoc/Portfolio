const pages = [
  '/',
  '/projects/bikelane-causal/',
  '/projects/bikeshare-forecast/',
  '/projects/danang-rag/',
];

export function GET({ site }: { site: URL | undefined }) {
  const base = site ?? new URL('https://quoc-nguyen-portfolio-six.vercel.app');
  const urls = pages
    .map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
