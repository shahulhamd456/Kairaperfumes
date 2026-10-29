import sharp from 'sharp';

async function brandAsKaira() {
  const src = './src/assets/hero.png';
  const meta = await sharp(src).metadata();

  const svgOverlay = Buffer.from(`
    <svg width="${meta.width}" height="${meta.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blurSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <linearGradient id="redGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4a060d" />
          <stop offset="100%" stop-color="#580810" />
        </linearGradient>
        <linearGradient id="pinkGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f2d3cc" />
          <stop offset="100%" stop-color="#eabfb7" />
        </linearGradient>
        <linearGradient id="goldGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f5eedc" />
          <stop offset="100%" stop-color="#ede0c7" />
        </linearGradient>
        <linearGradient id="bgParaVeloura" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e2c5bc" />
          <stop offset="50%" stop-color="#ecd6cd" />
          <stop offset="100%" stop-color="#e8cdc4" />
        </linearGradient>
        <linearGradient id="bgParaFem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#baa098" />
          <stop offset="50%" stop-color="#b49a92" />
          <stop offset="100%" stop-color="#af948c" />
        </linearGradient>
      </defs>

      <!-- 1. Paragraph Text: Cover 'Veloura' and write 'Kaira' -->
      <rect x="123" y="183" width="48" height="13.5" rx="1.5" fill="url(#bgParaVeloura)" filter="url(#blurSoft)" />
      <text x="124" y="193.5" font-family="'Libre Baskerville', Garamond, Georgia, serif" font-size="11.5px" font-weight="400" fill="#6a534d">Kaira</text>

      <!-- 2. Paragraph Text: Cover 'femininity,' and write 'refinement,' for pure Unisex prestige -->
      <rect x="222" y="195" width="58" height="13" rx="1.5" fill="url(#bgParaFem)" filter="url(#blurSoft)" />
      <text x="223" y="205" font-family="'Libre Baskerville', Garamond, Georgia, serif" font-size="10.5px" font-weight="400" fill="#6a534d">refinement,</text>

      <!-- 3. Bottle 1 (Red Flacon): Cover 'Veloura' and write 'Kaira' -->
      <rect x="543" y="196" width="63" height="16" fill="url(#redGlass)" rx="2" />
      <text x="574.5" y="209" text-anchor="middle" font-family="'Libre Baskerville', Garamond, serif" font-size="14.5px" font-weight="500" letter-spacing="0.04em" fill="#e0b97a">Kaira</text>

      <!-- 4. Bottle 2 (Pink Crystal): Cover 'Veloura' and write 'Kaira' -->
      <rect x="652" y="187" width="64" height="16" fill="url(#pinkGlass)" rx="2" />
      <text x="684" y="200" text-anchor="middle" font-family="'Libre Baskerville', Garamond, serif" font-size="14.5px" font-weight="500" letter-spacing="0.04em" fill="#421219">Kaira</text>

      <!-- 5. Bottle 3 (Champagne Gold): Cover 'Veloura' and write 'Kaira' -->
      <rect x="764" y="206" width="60" height="15" fill="url(#goldGlass)" rx="2" />
      <text x="794" y="218" text-anchor="middle" font-family="'Libre Baskerville', Garamond, serif" font-size="13.5px" font-weight="500" letter-spacing="0.04em" fill="#403328">Kaira</text>
    </svg>
  `);

  await sharp(src)
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .resize({ width: 2048, height: 772, kernel: 'lanczos3' })
    .jpeg({ quality: 96 })
    .toFile('src/assets/kaira_full_hero_exact.jpg');

  console.log('✓ Successfully created kaira_full_hero_exact.jpg with 2048x772 resolution!');
}

brandAsKaira().catch(console.error);
