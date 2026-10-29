import sharp from 'sharp';

async function generatePerfectCards() {
  console.log('=== Generating Seamless KAIRA Collection Cards ===');

  // =========================================================================
  // 1. FOR HER
  // =========================================================================
  {
    const bgMeta = await sharp('src/assets/card_bg_her.png').metadata();
    const cx = 585;
    const baseGroundY = 414;

    const patchSvg = Buffer.from(`
      <svg width="${bgMeta.width}" height="${bgMeta.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="herBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <!-- Seamless blurred dark patch to absorb old bottle -->
        <ellipse cx="${cx}" cy="220" rx="100" ry="165" fill="#110c0a" filter="url(#herBlur)" opacity="0.99" />
        <!-- Contact shadow under bottle on pedestal -->
        <ellipse cx="${cx}" cy="${baseGroundY + 1}" rx="105" ry="14" fill="#000000" filter="url(#herBlur)" opacity="0.8" />
      </svg>
    `);

    const bottle = await sharp('src/assets/KAIRA Imperial Mist Perfume Bottle.png')
      .resize({ height: 350, fit: 'inside' })
      .toBuffer();
    const bMeta = await sharp(bottle).metadata();

    const left = Math.round(cx - bMeta.width / 2);
    const top = baseGroundY - bMeta.height + 8;

    await sharp('src/assets/card_bg_her.png')
      .composite([
        { input: patchSvg, top: 0, left: 0 },
        { input: bottle, top, left }
      ])
      .toFile('src/assets/card_exact_her.png');
    console.log('✓ FOR HER: done');
  }

  // =========================================================================
  // 2. FOR HIM
  // =========================================================================
  {
    const bgMeta = await sharp('src/assets/card_bg_him.png').metadata();
    const cx = 688;
    const baseGroundY = 414;

    const patchSvg = Buffer.from(`
      <svg width="${bgMeta.width}" height="${bgMeta.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="himBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
        <!-- Seamless blurred dark patch to absorb old black bottle -->
        <ellipse cx="${cx}" cy="235" rx="110" ry="165" fill="#131315" filter="url(#himBlur)" opacity="0.99" />
        <!-- Contact shadow on slate -->
        <ellipse cx="${cx}" cy="${baseGroundY + 1}" rx="108" ry="15" fill="#000000" filter="url(#himBlur)" opacity="0.85" />
      </svg>
    `);

    const bottle = await sharp('src/assets/KAIRA Wave Blue Perfume Bottle.png')
      .resize({ height: 345, fit: 'inside' })
      .toBuffer();
    const bMeta = await sharp(bottle).metadata();

    const left = Math.round(cx - bMeta.width / 2);
    const top = baseGroundY - bMeta.height + 8;

    await sharp('src/assets/card_bg_him.png')
      .composite([
        { input: patchSvg, top: 0, left: 0 },
        { input: bottle, top, left }
      ])
      .toFile('src/assets/card_exact_him.png');
    console.log('✓ FOR HIM: done');
  }

  // =========================================================================
  // 3. UNISEX
  // =========================================================================
  {
    const bgMeta = await sharp('src/assets/card_bg_unisex.png').metadata();
    const cx = 608;
    const baseGroundY = 405;

    const patchSvg = Buffer.from(`
      <svg width="${bgMeta.width}" height="${bgMeta.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="unisexBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
        <!-- Seamless blurred dark patch to absorb old bottle -->
        <ellipse cx="${cx}" cy="245" rx="105" ry="155" fill="#15100c" filter="url(#unisexBlur)" opacity="0.99" />
        <!-- Contact shadow -->
        <ellipse cx="${cx}" cy="${baseGroundY + 1}" rx="100" ry="14" fill="#000000" filter="url(#unisexBlur)" opacity="0.8" />
      </svg>
    `);

    const bottle = await sharp('src/assets/Kaira Oud Zaffrow Luxury Perfume.png')
      .resize({ height: 345, fit: 'inside' })
      .toBuffer();
    const bMeta = await sharp(bottle).metadata();

    const left = Math.round(cx - bMeta.width / 2);
    const top = baseGroundY - bMeta.height + 8;

    await sharp('src/assets/card_bg_unisex.png')
      .composite([
        { input: patchSvg, top: 0, left: 0 },
        { input: bottle, top, left }
      ])
      .toFile('src/assets/card_exact_unisex.png');
    console.log('✓ UNISEX: done');
  }

  // =========================================================================
  // 4. DISCOVERY SETS
  // =========================================================================
  {
    const bgMeta = await sharp('src/assets/card_bg_discovery.png').metadata();
    const trayY = 338;

    const patchSvg = Buffer.from(`
      <svg width="${bgMeta.width}" height="${bgMeta.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="discBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <!-- Seamless blurred dark patch over the old small bottles -->
        <rect x="495" y="160" width="290" height="175" rx="20" fill="#161210" filter="url(#discBlur)" opacity="0.99" />
        <ellipse cx="628" cy="${trayY + 1}" rx="150" ry="12" fill="#000000" filter="url(#discBlur)" opacity="0.75" />
      </svg>
    `);

    const miniH = 148;
    const b1 = await sharp('src/assets/KAIRA Wave Blue Perfume Bottle.png').resize({ height: miniH, fit: 'inside' }).toBuffer();
    const b2 = await sharp('src/assets/KAIRA Imperial Mist Perfume Bottle.png').resize({ height: miniH, fit: 'inside' }).toBuffer();
    const b3 = await sharp('src/assets/Kaira Oud Zaffrow Luxury Perfume.png').resize({ height: miniH, fit: 'inside' }).toBuffer();
    const b4 = await sharp('src/assets/Luxury Amber Kaira Perfume Bottle.png').resize({ height: 138, fit: 'inside' }).toBuffer();

    const m1 = await sharp(b1).metadata();
    const m2 = await sharp(b2).metadata();
    const m3 = await sharp(b3).metadata();
    const m4 = await sharp(b4).metadata();

    const composites = [
      { input: patchSvg, top: 0, left: 0 },
      { input: b1, top: trayY - m1.height + 4, left: 495 },
      { input: b2, top: trayY - m2.height + 4, left: 562 },
      { input: b3, top: trayY - m3.height + 4, left: 630 },
      { input: b4, top: trayY - m4.height + 4, left: 698 },
    ];

    await sharp('src/assets/card_bg_discovery.png')
      .composite(composites)
      .toFile('src/assets/card_exact_discovery.png');
    console.log('✓ DISCOVERY SETS: done');
  }

  console.log('=== ALL 4 PERFECT CARDS GENERATED ===');
}

generatePerfectCards().catch(console.error);
