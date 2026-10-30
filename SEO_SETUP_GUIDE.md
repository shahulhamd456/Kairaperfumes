# KAIRA Perfumes — Technical SEO & Google Search Console Setup Guide

This document outlines the full technical SEO configuration implemented for **KAIRA Perfumes** and provides step-by-step instructions for Google Search Console (GSC) verification, sitemap submission, and search indexing.

---

## 1. What Has Been Configured

### A. Meta Tags & Crawl Directives (`index.html`)
- **Title Tag**: `KAIRA Perfumes | 35% Pure Oil Luxury Perfumes & Arabian Bakhoor`
- **Meta Description**: Optimized for click-through rate, highlighting the 35% concentration, 14-hour longevity, and signature blends.
- **Canonical URL**: `<link rel="canonical" href="https://kairaperfumes.com/" />` to prevent duplicate content issues.
- **Robots Directive**: `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />` ensuring high-resolution image previews on Google Discover and Rich Snippets.
- **Geographic Local SEO Tags**: Tagged for Puthanathani, Kerala (`10.9379° N, 76.0046° E`).

### B. Social & Rich Previews (Open Graph & Twitter Cards)
- **`og:image` & `twitter:image`**: Pre-rendered 1200×630px high-resolution banner (`/og-image.jpg` at 54 KB) for crisp preview cards across WhatsApp, Facebook, LinkedIn, X/Twitter, and iMessage.

### C. Schema.org JSON-LD Structured Data
Three complete schemas embedded directly into `index.html`:
1. **`Store` / `LocalBusiness`**:
   - Business name: KAIRA Haute Parfumerie
   - Founder: Sirajudheen (Master Perfumer)
   - Store Address: AAK Hypermarket, NH 66, Puthanathani, Kurumbathur, Kerala 676552
   - Phone & WhatsApp: `+91 80867 12325`
   - Coordinates & Google Maps Link
   - Business Hours: 10:00 AM – 9:30 PM (Daily)
2. **`WebSite`**:
   - Site name, URL, and Sitelinks Searchbox (`SearchAction`) schema.
3. **`ItemList` / `Product`**:
   - Structured product catalog covering all 6 creations (`Bakhoor Oud Royal`, `Wave Aqua Glaciale`, `Oud Zaffrow Imperial`, `Imperial Amber Noir`, `Velvet Oud & Roses`, `Discovery Flacon Coffret`).
   - Includes aggregate ratings (4.9–5.0 stars with 160–340 customer reviews), INR pricing (₹349–₹599), and in-stock availability for Google Shopping & rich product search results.

### D. Automated Sitemap Generation (`public/sitemap.xml`)
- Sitemaps.org compliant XML sitemap covering all pages, product deep-links, scent breakdown, and boutique map.
- Includes `<image:image>` tags with titles and captions for Google Image search indexing.
- Automatically generated on every `npm run build` via `scripts/generate_sitemap.cjs`.

### E. Crawler Instructions (`public/robots.txt`)
- Allows full site indexing with polite throughput directives (`Crawl-delay: 1`).
- Direct pointer to `https://kairaperfumes.com/sitemap.xml`.

---

## 2. Google Search Console Integration Steps

### Step 1: Add Your Property in Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **"Add Property"**.
3. Choose **"URL prefix"** and enter your production domain (e.g., `https://kairaperfumes.com/`).

### Step 2: Verify Ownership (Choose Either Method)

#### Method A: HTML Tag (Recommended)
1. In Google Search Console, select **"HTML tag"** as the verification method.
2. Copy the `content` attribute from the tag provided by Google (e.g. `google-site-verification=abc123xyz...`).
3. In `index.html`, locate line 27:
   ```html
   <meta name="google-site-verification" content="google-site-verification=YOUR_GSC_VERIFICATION_TOKEN" />
   ```
4. Replace `YOUR_GSC_VERIFICATION_TOKEN` with your code, save, deploy, and click **Verify** in Search Console.

#### Method B: HTML File Upload
1. In Google Search Console, select **"HTML file"**.
2. Download the verification file (e.g. `google1234567890abcdef.html`).
3. Place that file in the `public/` directory of this project.
4. Deploy to your hosting provider and click **Verify** in Search Console.

---

## 3. Submitting the Sitemap in Google Search Console

Once verified:
1. In Google Search Console, click **"Sitemaps"** from the left navigation menu.
2. Under **"Add a new sitemap"**, enter:
   ```
   sitemap.xml
   ```
3. Click **Submit**.
4. Status will change to **"Success"**, and Google will automatically crawl all 12 submitted URLs and their associated images.

---

## 4. Requesting Immediate Indexing (URL Inspection)
1. In Google Search Console, click the top search bar: **"Inspect any URL in https://kairaperfumes.com/"**.
2. Paste `https://kairaperfumes.com/` and press Enter.
3. Click **"Request Indexing"** to prioritize the initial crawl.

---

## 5. Testing & Verification Tools
- **Rich Results Test**: Test structured data at [Google Rich Results Test](https://search.google.com/test/rich-results) by pasting your URL or code snippet from `index.html`.
- **Schema Validator**: Validate Schema.org formatting at [validator.schema.org](https://validator.schema.org/).
- **Robots Tester**: Verify that Googlebot can access all assets without restriction.
