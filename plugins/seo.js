import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

/**
 * Build-time SEO + analytics wiring.
 *
 * Everything here is generated from `src/data/site.js`, so structured data can
 * never drift out of sync with the visible page content.
 *
 *   - JSON-LD (Organization, WebSite, FAQPage) injected into the HTML
 *   - analytics provider script injected when configured
 *   - sitemap.xml emitted for the deployed domain
 *   - 404.html written as a noindex copy of the page (needed on static hosts
 *     such as GitHub Pages, where unknown paths serve 404.html)
 *
 * Hook ordering matters: site data is loaded in `buildStart`, the HTML is
 * modified in `transformIndexHtml`, and 404.html is written in `closeBundle`
 * because Vite's own HTML asset only exists on disk after the bundle is
 * written — `generateBundle` runs too early to read it.
 */
export default function seo({ env = {} } = {}) {
  let data = null;
  let siteUrl = '';
  let outDir = 'dist';

  /**
   * Placeholder phone numbers must not end up in structured data, so real
   * numbers are required to look like real numbers:
   *   - at least 7 digits
   *   - not all the same digit
   *   - no run of 4+ identical digits (catches the "000-0000" placeholders)
   * Bump `company.phone` in src/data/site.js and it is included automatically.
   */
  function usablePhone(phone) {
    if (!phone) return null;
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 7) return null;
    if (new Set(digits).size === 1) return null;
    if (/(\d)\1{3,}/.test(digits)) return null;
    return phone;
  }

  function analyticsTags() {
    const provider = (env.VITE_ANALYTICS_PROVIDER || '').trim().toLowerCase();
    const explicit = (env.VITE_ANALYTICS_SCRIPT_SRC || '').trim();
    const src =
      explicit || (provider === 'simple' ? 'https://scripts.simpleanalyticscdn.com/latest.js' : '');
    if (!src) return [];

    const tags = [];

    // Events fired before the provider script loads must be queued, not lost.
    if (provider === 'simple') {
      tags.push({
        tag: 'script',
        injectTo: 'head-prepend',
        children:
          'window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q=window.sa_event.q||[];window.sa_event.q.push(a)};',
      });
    }

    const attrs = { async: true, defer: true, src };
    if (env.VITE_ANALYTICS_DOMAIN) attrs['data-domain'] = env.VITE_ANALYTICS_DOMAIN;
    tags.push({ tag: 'script', injectTo: 'head-prepend', attrs });

    return tags;
  }

  function structuredData() {
    const { company, services, faqs } = data;

    const org = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: company.name,
      alternateName: company.shortName,
      url: siteUrl,
      description: company.schemaDescription,
      logo: `${siteUrl}/favicon.svg`,
      knowsAbout: (services || []).map((service) => service.title),
    };

    const email = company.email;
    const phone = usablePhone(company.phone);
    if (email) org.email = email;
    if (phone) org.telephone = phone;
    org.contactPoint = [
      {
        '@type': 'ContactPoint',
        contactType: 'New business enquiries',
        areaServed: 'Worldwide',
        ...(email ? { email } : {}),
        ...(phone ? { telephone: phone } : {}),
      },
    ];

    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: company.name,
      url: siteUrl,
      publisher: { '@type': 'Organization', name: company.name },
    };

    const faqPage = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (faqs || []).map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    };

    return [org, website, faqPage];
  }

  return {
    name: 'flintwire-seo',

    async configResolved(config) {
      outDir = config.build.outDir;
      const dataFile = pathToFileURL(path.resolve(config.root, 'src/data/site.js')).href;
      data = await import(dataFile);
      siteUrl = (env.VITE_SITE_URL || data.company.url || '').replace(/\/$/, '');
    },

    transformIndexHtml(html) {
      // Keep canonical/og:url in sync when a custom domain is configured.
      let output = html;
      if (siteUrl && !siteUrl.includes('flintwire.com')) {
        output = output.split('https://flintwire.com').join(siteUrl);
      }

      return {
        html: output,
        tags: [
          ...structuredData().map((node) => ({
            tag: 'script',
            injectTo: 'head',
            attrs: { type: 'application/ld+json' },
            children: JSON.stringify(node),
          })),
          ...analyticsTags(),
        ],
      };
    },

    generateBundle() {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
    },

    closeBundle() {
      const indexPath = path.resolve(outDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const notFound = fs
        .readFileSync(indexPath, 'utf8')
        .replace(/<title>[\s\S]*?<\/title>/, '<title>Page not found — Flintwire Technologies</title>')
        .replace('</head>', '    <meta name="robots" content="noindex, follow" />\n  </head>');

      fs.writeFileSync(path.resolve(outDir, '404.html'), notFound);

      const provider = (env.VITE_ANALYTICS_PROVIDER || '').trim() || 'none';
      this.warn(
        `SEO: ${siteUrl}/ · sitemap.xml + 404.html written · ${data.faqs.length} FAQ entries · ` +
          `${data.services.length} services · analytics: ${provider}`
      );
    },
  };
}
