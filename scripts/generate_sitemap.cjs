const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://kairaperfumes.com';
const TODAY = new Date().toISOString().split('T')[0];

const products = [
  {
    title: 'Bakhoor Oud Royal',
    path: '#bakhoor-oud-royal',
    category: 'Incense & Oud',
    price: '599',
    changefreq: 'weekly',
    priority: '0.9',
    image: 'https://kairaperfumes.com/assets/Kaira%20Bakhoor%20Oud%20Jar%20with%20Incense%20Props.png',
    caption: 'KAIRA Bakhoor Oud Royal 100% Pure Perfume Oil & Royal Incense'
  },
  {
    title: 'Wave Aqua Glaciale',
    path: '#wave-aqua-glaciale',
    category: 'Aquatic & Fresh',
    price: '599',
    changefreq: 'weekly',
    priority: '0.9',
    image: 'https://kairaperfumes.com/assets/KAIRA%20Wave%20Blue%20Perfume%20Bottle.png',
    caption: 'KAIRA Wave Aqua Glaciale 35% Pure Perfume Oil'
  },
  {
    title: 'Oud Zaffrow Imperial',
    path: '#oud-zaffrow-imperial',
    category: 'Warm & Oriental',
    price: '599',
    changefreq: 'weekly',
    priority: '0.9',
    image: 'https://kairaperfumes.com/assets/Kaira%20Oud%20Zaffrow%20Luxury%20Perfume.png',
    caption: 'KAIRA Oud Zaffrow Imperial 35% Pure Perfume Oil'
  },
  {
    title: 'Imperial Amber Noir',
    path: '#imperial-amber-noir',
    category: 'Woody & Cedar',
    price: '599',
    changefreq: 'weekly',
    priority: '0.9',
    image: 'https://kairaperfumes.com/assets/Luxury%20Amber%20Kaira%20Perfume%20Bottle.png',
    caption: 'KAIRA Imperial Amber Noir 35% Pure Perfume Oil'
  },
  {
    title: 'Velvet Oud & Roses',
    path: '#velvet-oud-roses',
    category: 'Floral & Rose',
    price: '599',
    changefreq: 'weekly',
    priority: '0.9',
    image: 'https://kairaperfumes.com/assets/KAIRA%20Imperial%20Mist%20Perfume%20Bottle.png',
    caption: 'KAIRA Velvet Oud & Roses 35% Pure Perfume Oil'
  },
  {
    title: 'Discovery Flacon Coffret',
    path: '#discovery-flacon-coffret',
    category: 'Discovery Sets',
    price: '599',
    changefreq: 'weekly',
    priority: '0.9',
    image: 'https://kairaperfumes.com/assets/flacon_discovery_set.png',
    caption: 'KAIRA Haute Parfumerie Discovery Flacon Coffret Set'
  }
];

const staticRoutes = [
  {
    loc: `${DOMAIN}/`,
    changefreq: 'daily',
    priority: '1.0',
    image: `${DOMAIN}/og-image.jpg`,
    caption: 'KAIRA Perfumes - 35% Pure Oil Luxury Perfumes & Arabian Bakhoor'
  },
  {
    loc: `${DOMAIN}/#all-products`,
    changefreq: 'daily',
    priority: '0.9',
    image: `${DOMAIN}/og-image.jpg`,
    caption: 'KAIRA Perfumes - All Fragrances & Haute Parfumerie Collection'
  },
  {
    loc: `${DOMAIN}/#nature-remembers`,
    changefreq: 'weekly',
    priority: '0.8',
    image: `${DOMAIN}/og-image.jpg`,
    caption: 'KAIRA Perfumes - Fragrance Notes Breakdown & Olfactory Pyramid'
  },
  {
    loc: `${DOMAIN}/#stories-in-scent`,
    changefreq: 'weekly',
    priority: '0.8',
    image: `${DOMAIN}/og-image.jpg`,
    caption: 'KAIRA Perfumes - Fragrance Guides, Stories & Scent Journal'
  },
  {
    loc: `${DOMAIN}/#founder-story`,
    changefreq: 'monthly',
    priority: '0.7',
    image: `${DOMAIN}/og-image.jpg`,
    caption: 'Meet Sirajudheen - Founder & Master Perfumer at KAIRA Perfumes'
  },
  {
    loc: `${DOMAIN}/#boutique-map`,
    changefreq: 'monthly',
    priority: '0.8',
    image: `${DOMAIN}/og-image.jpg`,
    caption: 'KAIRA Perfumes Boutique Store Location - Puthanathani, Kerala'
  }
];

function buildSitemapXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Static core routes
  for (const r of staticRoutes) {
    xml += `  <url>
    <loc>${r.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
    <image:image>
      <image:loc>${r.image}</image:loc>
      <image:title>${r.caption}</image:title>
      <image:caption>${r.caption}</image:caption>
    </image:image>
  </url>
`;
  }

  // Product routes
  for (const p of products) {
    xml += `  <url>
    <loc>${DOMAIN}/${p.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <image:image>
      <image:loc>${p.image}</image:loc>
      <image:title>${p.caption}</image:title>
      <image:caption>${p.caption}</image:caption>
    </image:image>
  </url>
`;
  }

  xml += `</urlset>\n`;
  return xml;
}

function main() {
  const dest = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const xml = buildSitemapXml();
  fs.writeFileSync(dest, xml, 'utf8');
  console.log(`✓ sitemap.xml generated successfully at ${dest} with ${staticRoutes.length + products.length} URLs!`);
}

main();

