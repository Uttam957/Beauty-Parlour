// pages/sitemap.xml.js
// Server-side dynamically generated XML sitemap for search engine indexing

import siteConfig from '../lib/site';

const routes = [
  '',
  '/about',
  '/services',
  '/services/makeup',
  '/services/facial',
  '/services/hair',
  '/services/hair-removal',
  '/services/massage',
  '/services/mani-pedi',
  '/academy',
  '/gallery',
  '/contact',
];

function generateSiteMap() {
  const baseUrl = siteConfig.siteUrl;
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
      <priority>${route === '' ? '1.0' : route.startsWith('/services') ? '0.8' : '0.7'}</priority>
    </url>
  `;
    })
    .join('')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  // getServerSideProps will handle the XML response
  return null;
}
