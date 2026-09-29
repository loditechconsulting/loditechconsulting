/**
 * Post-build step: renders each page to static HTML so crawlers and link
 * previews see real content, then injects SEO tags that need the public URL
 * and writes robots.txt / sitemap.xml.
 *
 * Runs after `vite build` (client) and `vite build --ssr src/entry-server.jsx`.
 */
import { readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = new URL('../dist/', import.meta.url);
const ssrEntry = new URL('../dist-ssr/entry-server.js', import.meta.url);

const env = loadEnv('production', root, 'VITE_');
const siteUrl = (env.VITE_SITE_URL || '').trim().replace(/\/+$/, '');

const { render, company, services } = await import(ssrEntry.href);

const pages = [
  { page: 'home', file: 'index.html', path: '/', priority: '1.0' },
  { page: 'privacy', file: 'privacy/index.html', path: '/privacy/', priority: '0.3' },
];

// Preload the Latin subset of the self-hosted font so text renders in the brand face immediately
const fontFile = readdirSync(new URL('assets/', dist)).find((f) => /plus-jakarta-sans-latin-wght-normal.*\.woff2$/.test(f));
const fontPreload = fontFile
  ? `<link rel="preload" href="/assets/${fontFile}" as="font" type="font/woff2" crossorigin />`
  : '';

function structuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.legalName,
    alternateName: company.name,
    email: company.email,
    telephone: company.phone.e164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.countryCode,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: company.hours.opens,
      closes: company.hours.closes,
    },
    areaServed: 'Worldwide',
    knowsAbout: services.map((s) => s.title),
    ...(siteUrl && {
      url: `${siteUrl}/`,
      logo: `${siteUrl}/brand/lodi-logo.png`,
      image: `${siteUrl}/og-image.jpg`,
    }),
    sameAs: Object.values(company.social).filter(Boolean),
  };
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

function headTags({ page, path }) {
  const tags = [fontPreload];
  if (siteUrl) {
    const url = `${siteUrl}${path}`;
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${siteUrl}/og-image.jpg" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta property="og:image:alt" content="LoDi Tech Consulting: Enterprise SAP, Cloud & AI Consulting" />`,
      `<meta name="twitter:image" content="${siteUrl}/og-image.jpg" />`,
    );
  }
  if (page === 'home') tags.push(structuredData());
  return tags.filter(Boolean).join('\n    ');
}

for (const entry of pages) {
  const fileUrl = new URL(entry.file, dist);
  const template = readFileSync(fileUrl, 'utf8');
  if (!template.includes('<!--app-html-->')) throw new Error(`Missing <!--app-html--> in ${entry.file}`);

  const html = template
    .replace('<!--app-head-->', headTags(entry))
    .replace('<!--app-html-->', render(entry.page));

  writeFileSync(fileUrl, html);
  console.log(`prerendered  ${entry.file}`);
}

writeFileSync(
  new URL('robots.txt', dist),
  `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ''}`,
);

if (siteUrl) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((p) => `  <url><loc>${siteUrl}${p.path}</loc><lastmod>${lastmod}</lastmod><priority>${p.priority}</priority></url>`)
    .join('\n');
  writeFileSync(
    new URL('sitemap.xml', dist),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  console.log('wrote        sitemap.xml, robots.txt');
} else {
  console.warn('\n⚠  VITE_SITE_URL is not set: skipped canonical/Open Graph image tags and sitemap.xml.\n   Set it in .env.local (see .env.example) before deploying.\n');
}

rmSync(new URL('../dist-ssr/', import.meta.url), { recursive: true, force: true });
