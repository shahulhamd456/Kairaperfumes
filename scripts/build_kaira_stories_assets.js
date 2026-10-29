import sharp from 'sharp';

async function buildStoriesAssets() {
  console.log('=== Generating Authentic KAIRA Stories in Scent Assets ===');
  const w = 800;
  const h = 520;

  // -------------------------------------------------------------------------
  // 1. STORY 1: FRAGRANCE LAYERING (Imperial Mist + Luxury Amber Kaira)
  // -------------------------------------------------------------------------
  {
    const bgSvg = Buffer.from(`
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgLayer" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#faf5ef" />
            <stop offset="50%" stop-color="#f5ebe0" />
            <stop offset="100%" stop-color="#ecdcce" />
          </linearGradient>
          <radialGradient id="lightGlow" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#f5ebe0" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="marbleBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f6ece3" />
            <stop offset="100%" stop-color="#e2cfbf" />
          </linearGradient>
          <filter id="softBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#bgLayer)" />
        <rect width="${w}" height="${h}" fill="url(#lightGlow)" />
        <path d="M 0,380 L ${w},365 L ${w},${h} L 0 neck,${h} Z" fill="url(#marbleBase)" />
        <!-- Contact shadows -->
        <ellipse cx="320" cy="425" rx="90" ry="16" fill="#2d1c15" filter="url(#softBlur)" opacity="0.45" />
        <ellipse cx="480" cy="425" rx="90" ry="16" fill="#2d1c15" filter="url(#softBlur)" opacity="0.45" />
      </svg>
    `);

    const b1 = await sharp('src/assets/KAIRA Imperial Mist Perfume Bottle.png')
      .trim()
      .resize({ height: 320 })
      .toBuffer();
    const b1Meta = await sharp(b1).metadata();

    const b2 = await sharp('src/assets/Luxury Amber Kaira Perfume Bottle.png')
      .trim()
      .resize({ height: 320 })
      .toBuffer();
    const b2Meta = await sharp(b2).metadata();

    const base = await sharp(bgSvg).png().toBuffer();

    await sharp(base)
      .composite([
        { input: b1, top: 420 - b1Meta.height, left: Math.round(320 - b1Meta.width / 2) },
        { input: b2, top: 420 - b2Meta.height, left: Math.round(480 - b2Meta.width / 2) }
      ])
      .jpeg({ quality: 94 })
      .toFile('src/assets/kaira_story_layering.jpg');

    console.log('✓ Created src/assets/kaira_story_layering.jpg');
  }

  // -------------------------------------------------------------------------
  // 2. STORY 2: BAKHOOR OUD RITUAL (Authentic Kaira Bakhoor Jar & Props)
  // -------------------------------------------------------------------------
  {
    const bgSvg = Buffer.from(`
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgBakhoor" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f7f0e7" />
            <stop offset="50%" stop-color="#eedfcf" />
            <stop offset="100%" stop-color="#e4cebb" />
          </linearGradient>
          <radialGradient id="smokeGlow" cx="50%" cy="35%" r="55%">
            <stop offset="0%" stop-color="#fff8f0" stop-opacity="0.9" />
            <stop offset="40%" stop-color="#faeee0" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#eedfcf" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="woodTable" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#eddccb" />
            <stop offset="100%" stop-color="#d8c0aa" />
          </linearGradient>
          <filter id="softBlur2" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#bgBakhoor)" />
        <rect width="${w}" height="${h}" fill="url(#smokeGlow)" />
        <path d="M 0,390 L ${w},375 L ${w},${h} L 0,${h} Z" fill="url(#woodTable)" />
        <!-- Contact shadow -->
        <ellipse cx="400" cy="435" rx="190" ry="24" fill="#291a13" filter="url(#softBlur2)" opacity="0.45" />
      </svg>
    `);

    const bakhoorImg = await sharp('src/assets/Kaira Bakhoor Oud Jar with Incense Props.png')
      .trim()
      .resize({ height: 350 })
      .toBuffer();
    const bMeta = await sharp(bakhoorImg).metadata();

    const base = await sharp(bgSvg).png().toBuffer();

    await sharp(base)
      .composite([
        { input: bakhoorImg, top: 430 - bMeta.height, left: Math.round(400 - bMeta.width / 2) }
      ])
      .jpeg({ quality: 94 })
      .toFile('src/assets/kaira_story_bakhoor.jpg');

    console.log('✓ Created src/assets/kaira_story_bakhoor.jpg');
  }

  // -------------------------------------------------------------------------
  // 3. STORY 3: 35% EXTRAIT MASTERY (Kaira Oud Zaffrow Bottle)
  // -------------------------------------------------------------------------
  {
    const bgSvg = Buffer.from(`
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgExtrait" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fcf6f0" />
            <stop offset="50%" stop-color="#f6ebdf" />
            <stop offset="100%" stop-color="#ebd9c9" />
          </linearGradient>
          <radialGradient id="goldGlow" cx="50%" cy="35%" r="60%">
            <stop offset="0%" stop-color="#fffdf7" stop-opacity="0.95" />
            <stop offset="35%" stop-color="#faedd8" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#ebd9c9" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="pedestalBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f5ebd8" />
            <stop offset="100%" stop-color="#decaa9" />
          </linearGradient>
          <filter id="softBlur3" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#bgExtrait)" />
        <rect width="${w}" height="${h}" fill="url(#goldGlow)" />
        <path d="M 0,385 L ${w},370 L ${w},${h} L 0,${h} Z" fill="url(#pedestalBase)" />
        <!-- Contact shadow -->
        <ellipse cx="400" cy="425" rx="120" ry="18" fill="#2d1c12" filter="url(#softBlur3)" opacity="0.45" />
      </svg>
    `);

    const extraitBottle = await sharp('src/assets/Kaira Oud Zaffrow Luxury Perfume.png')
      .trim()
      .resize({ height: 330 })
      .toBuffer();
    const bMeta = await sharp(extraitBottle).metadata();

    const base = await sharp(bgSvg).png().toBuffer();

    await sharp(base)
      .composite([
        { input: extraitBottle, top: 420 - bMeta.height, left: Math.round(400 - bMeta.width / 2) }
      ])
      .jpeg({ quality: 94 })
      .toFile('src/assets/kaira_story_extrait.jpg');

    console.log('✓ Created src/assets/kaira_story_extrait.jpg');
  }

  console.log('=== All 3 KAIRA Story Assets Built Successfully ===');
}

buildStoriesAssets().catch(console.error);

