import sharp from 'sharp';
import fs from 'fs';

async function buildKairaHeroScene() {
  console.log('=== Building Bespoke KAIRA Hero Banner (Authentic Bottles + Boudoir Stage) ===');

  const width = 2048;
  const height = 800;

  // 1. Prepare the 3 authentic KAIRA bottles
  // - Center: Luxury Amber Kaira Perfume Bottle (warm golden amber elixir, wood cap)
  // - Left: KAIRA Imperial Mist Perfume Bottle (emerald green crystal, gold collar)
  // - Right: KAIRA Wave Blue Perfume Bottle (sapphire blue crystal, black cap)

  const amberRaw = await sharp('src/assets/Luxury Amber Kaira Perfume Bottle.png').trim().toBuffer();
  const imperialRaw = await sharp('src/assets/KAIRA Imperial Mist Perfume Bottle.png').trim().toBuffer();
  const waveRaw = await sharp('src/assets/KAIRA Wave Blue Perfume Bottle.png').trim().toBuffer();

  // Target sizing for balanced, majestic trio:
  // Center bottle: height 440px
  // Left and Right flacons: height 390px
  const centerH = 440;
  const sideH = 390;

  const centerBottle = await sharp(amberRaw)
    .resize({ height: centerH })
    .toBuffer();
  const centerMeta = await sharp(centerBottle).metadata();

  const leftBottle = await sharp(imperialRaw)
    .resize({ height: sideH })
    .toBuffer();
  const leftMeta = await sharp(leftBottle).metadata();

  const rightBottle = await sharp(waveRaw)
    .resize({ height: sideH })
    .toBuffer();
  const rightMeta = await sharp(rightBottle).metadata();

  // Coordinates on the vanity table:
  // Vanity surface horizon is at y=520
  // Bottle bases will rest at ground baseline y=590
  const groundY = 590;

  const centerX = 1530; // Center bottle x center
  const centerLeft = Math.round(centerX - centerMeta.width / 2);
  const centerTop = groundY - centerMeta.height + 15;

  const leftX = 1270; // Left bottle x center
  const leftLeft = Math.round(leftX - leftMeta.width / 2);
  const leftTop = groundY - leftMeta.height + 15;

  const rightX = 1770; // Right bottle x center
  const rightLeft = Math.round(rightX - rightMeta.width / 2);
  const rightTop = groundY - rightMeta.height + 15;

  // 2. Generate reflections (inverted + faded)
  async function makeReflection(buffer, h, opacity = 0.28) {
    const meta = await sharp(buffer).metadata();
    const flipped = await sharp(buffer)
      .flip()
      .resize({ height: Math.round(h * 0.45) })
      .toBuffer();
    const flipMeta = await sharp(flipped).metadata();

    const fadeMaskSvg = Buffer.from(`
      <svg width="${flipMeta.width}" height="${flipMeta.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fadeRef" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="${opacity}" />
            <stop offset="60%" stop-color="#ffffff" stop-opacity="${opacity * 0.3}" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
          </linearGradient>
        </defs>
        <rect width="${flipMeta.width}" height="${flipMeta.height}" fill="url(#fadeRef)" />
      </svg>
    `);

    const fadeMask = await sharp(fadeMaskSvg).toBuffer();

    return await sharp(flipped)
      .composite([{ input: fadeMask, blend: 'dest-in' }])
      .toBuffer();
  }

  const centerRef = await makeReflection(centerBottle, centerH, 0.32);
  const centerRefMeta = await sharp(centerRef).metadata();

  const leftRef = await makeReflection(leftBottle, sideH, 0.28);
  const leftRefMeta = await sharp(leftRef).metadata();

  const rightRef = await makeReflection(rightBottle, sideH, 0.28);
  const rightRefMeta = await sharp(rightRef).metadata();

  // 3. Construct Luxury Boudoir & Vanity SVG Stage
  const stageSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Warm Boudoir Ambient Background -->
        <linearGradient id="bgWall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fdf8f4" />
          <stop offset="30%" stop-color="#f9f0e7" />
          <stop offset="65%" stop-color="#f2e4d7" />
          <stop offset="100%" stop-color="#e8d5c4" />
        </linearGradient>

        <!-- Soft champagne radiant illumination from top-left/center -->
        <radialGradient id="sunGlow" cx="45%" cy="20%" r="75%">
          <stop offset="0%" stop-color="#fffdfa" stop-opacity="0.9" />
          <stop offset="45%" stop-color="#fcf2e6" stop-opacity="0.45" />
          <stop offset="100%" stop-color="#ebd8c7" stop-opacity="0" />
        </radialGradient>

        <!-- Polished Warm Alabaster Marble Vanity Slab -->
        <linearGradient id="marbleTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fbf5ef" />
          <stop offset="8%" stop-color="#f5ece3" />
          <stop offset="30%" stop-color="#eee1d4" />
          <stop offset="70%" stop-color="#e4d2c2" />
          <stop offset="100%" stop-color="#d7c0ae" />
        </linearGradient>

        <!-- Subtle Marble Veining -->
        <linearGradient id="veinGold" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stop-color="#d5bfae" stop-opacity="0.25" />
          <stop offset="50%" stop-color="#c4a794" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#e6d4c5" stop-opacity="0.1" />
        </linearGradient>

        <!-- Gold bevel highlight along marble vanity edge -->
        <linearGradient id="bevelEdge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#eed8c8" stop-opacity="0.4" />
          <stop offset="30%" stop-color="#ffffff" stop-opacity="0.9" />
          <stop offset="70%" stop-color="#fcf6f0" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#e8cfbd" stop-opacity="0.3" />
        </linearGradient>

        <!-- Soft depth-of-field filters -->
        <filter id="ultraBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="60" />
        </filter>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="25" />
        </filter>
        <filter id="contactShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="deepBaseShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" />
        </filter>

        <!-- Petal gradient for delicate scattered petals on vanity -->
        <linearGradient id="rosePetalGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f4c9c2" />
          <stop offset="50%" stop-color="#dc9388" />
          <stop offset="100%" stop-color="#a6444b" />
        </linearGradient>
      </defs>

      <!-- 1. Background Wall Canvas -->
      <rect width="${width}" height="${height}" fill="url(#bgWall)" />

      <!-- Soft architectural boudoir background forms -->
      <circle cx="1520" cy="240" r="420" fill="#f8ece0" filter="url(#ultraBlur)" opacity="0.8" />
      <circle cx="1780" cy="310" r="350" fill="#f4dfcf" filter="url(#ultraBlur)" opacity="0.7" />
      <circle cx="500" cy="220" r="480" fill="#ffffff" filter="url(#ultraBlur)" opacity="0.6" />
      <rect width="${width}" height="${height}" fill="url(#sunGlow)" />

      <!-- Subtle background arch motif (boudoir architecture) -->
      <path d="M 1250,510 L 1250,180 A 280,280 0 0,1 1810,180 L 1810,510 Z" fill="#faeee3" opacity="0.35" filter="url(#softGlow)" />

      <!-- 2. Polished Marble Vanity Surface (Horizon line y=515) -->
      <path d="M 0,515 L ${width},495 L ${width},${height} L 0,${height} Z" fill="url(#marbleTop)" />

      <!-- Natural soft marble veins across vanity -->
      <path d="M 300,530 Q 800,600 1350,560 T 2048,680" stroke="url(#veinGold)" stroke-width="4" fill="none" opacity="0.4" />
      <path d="M 900,515 Q 1200,680 1700,620" stroke="url(#veinGold)" stroke-width="2.5" fill="none" opacity="0.35" />

      <!-- Polished Marble Bevel Top Edge Line -->
      <line x1="0" y1="515" x2="${width}" y2="495" stroke="url(#bevelEdge)" stroke-width="2.5" />

      <!-- 3. Ambient Back-Glow Behind Bottles -->
      <ellipse cx="${centerX}" cy="480" rx="420" ry="160" fill="#fff5ea" filter="url(#softGlow)" opacity="0.85" />
      <ellipse cx="${centerX}" cy="480" rx="260" ry="90" fill="#fde6cf" filter="url(#softGlow)" opacity="0.5" />

      <!-- 4. Ground Contact Shadows for the 3 Bottles -->
      <!-- Center (Amber) Shadow -->
      <ellipse cx="${centerX}" cy="${groundY + 14}" rx="135" ry="24" fill="#382115" filter="url(#contactShadow)" opacity="0.55" />
      <ellipse cx="${centerX}" cy="${groundY + 10}" rx="105" ry="12" fill="#180c06" filter="url(#deepBaseShadow)" opacity="0.75" />

      <!-- Left (Imperial Mist) Shadow -->
      <ellipse cx="${leftX}" cy="${groundY + 14}" rx="120" ry="22" fill="#2d2218" filter="url(#contactShadow)" opacity="0.5" />
      <ellipse cx="${leftX}" cy="${groundY + 10}" rx="90" ry="11" fill="#120c08" filter="url(#deepBaseShadow)" opacity="0.7" />

      <!-- Right (Wave Blue) Shadow -->
      <ellipse cx="${rightX}" cy="${groundY + 14}" rx="120" ry="22" fill="#242226" filter="url(#contactShadow)" opacity="0.5" />
      <ellipse cx="${rightX}" cy="${groundY + 10}" rx="90" ry="11" fill="#0d0d12" filter="url(#deepBaseShadow)" opacity="0.7" />

      <!-- 5. Scattered Silk Rose Petals on Vanity (boudoir theme) -->
      <!-- Petal 1 (foreground left) -->
      <path d="M 1120,670 C 1135,650 1175,655 1180,675 C 1185,695 1145,705 1125,690 Z" fill="url(#rosePetalGrad)" opacity="0.75" />
      <!-- Petal 2 (near wave bottle) -->
      <path d="M 1910,640 C 1930,625 1960,635 1962,655 C 1965,675 1930,680 1915,665 Z" fill="url(#rosePetalGrad)" opacity="0.65" />
      <!-- Petal 3 (soft background) -->
      <path d="M 1420,535 C 1432,525 1455,530 1455,542 C 1455,555 1430,558 1420,548 Z" fill="url(#rosePetalGrad)" opacity="0.5" />
    </svg>
  `);

  const stageBase = await sharp(stageSvg).png().toBuffer();

  // Composite reflections first (so they are under the bottles), then the bottles
  const finalComposite = await sharp(stageBase)
    .composite([
      // Reflections
      { input: leftRef, top: groundY + 12, left: leftLeft, blend: 'over' },
      { input: rightRef, top: groundY + 12, left: rightLeft, blend: 'over' },
      { input: centerRef, top: groundY + 12, left: centerLeft, blend: 'over' },

      // Flacons
      { input: leftBottle, top: leftTop, left: leftLeft },
      { input: rightBottle, top: rightTop, left: rightLeft },
      { input: centerBottle, top: centerTop, left: centerLeft }
    ])
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile('src/assets/kaira_bespoke_hero_stage.jpg');

  console.log('✓ Successfully created src/assets/kaira_bespoke_hero_stage.jpg (2048 x 800 Ultra-HD)!');
}

buildKairaHeroScene().catch(console.error);

