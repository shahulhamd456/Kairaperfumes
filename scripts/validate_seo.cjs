const fs = require('fs');
const path = require('path');

function validate() {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // 1. Validate JSON-LD
  const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null) {
    count++;
    try {
      const json = JSON.parse(match[1]);
      console.log(`✓ Schema #${count} [${json['@type']}]: 100% Valid JSON!`);
    } catch (e) {
      console.error(`✗ Schema #${count} parse error: ${e.message}`);
      process.exit(1);
    }
  }

  // 2. Validate Sitemap
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const urlMatches = sitemapContent.match(/<loc>/g) || [];
    console.log(`✓ sitemap.xml exists with ${urlMatches.length} URLs!`);
  } else {
    console.error(`✗ sitemap.xml missing!`);
    process.exit(1);
  }

  // 3. Validate Robots.txt
  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    if (robotsContent.includes('Sitemap: https://kairaperfumes.com/sitemap.xml')) {
      console.log(`✓ robots.txt exists and points to sitemap.xml!`);
    } else {
      console.error(`✗ robots.txt missing Sitemap directive!`);
      process.exit(1);
    }
  } else {
    console.error(`✗ robots.txt missing!`);
    process.exit(1);
  }

  // 4. Validate OG Image
  const ogPath = path.join(__dirname, '..', 'public', 'og-image.jpg');
  if (fs.existsSync(ogPath)) {
    const stat = fs.statSync(ogPath);
    console.log(`✓ og-image.jpg exists (${(stat.size / 1024).toFixed(1)} KB)!`);
  } else {
    console.error(`✗ og-image.jpg missing!`);
    process.exit(1);
  }

  console.log(`\nALL TECHNICAL SEO ASSETS VALIDATED SUCCESSFULLY!`);
}

validate();

