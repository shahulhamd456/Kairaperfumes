const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function buildHeroImages() {
  console.log('=== Building Ultra-HD Luxury Hero Images (Desktop + Mobile) ===');

  // Master asset paths (read-only from works/perfume/src)
  const masterDir = 'C:/Users/Shahul hameed/Desktop/works/perfume/src';
  const amberMaster = path.join(masterDir, 'Luxury Amber Kaira Perfume Bottle.png');
  const imperialMaster = path.join(masterDir, 'KAIRA Imperial Mist Perfume Bottle.png');
  const waveMaster = path.join(masterDir, 'KAIRA Wave Blue Perfume Bottle.png');

  // Helper to make reflection
  async function makeReflection(buffer, targetH, opacity = 0.28) {
    const flipped = await sharp(buffer)
      .flip()
      .resize({ height: Math.round(targetH * 0.45) })
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

  // =========================================================================
  // 1. DESKTOP HERO BANNER (2048 x 850)
  // =========================================================================
  {
    const width = 2048;
    const height = 850;
    const centerH = 470;
    const sideH = 415;
    const groundY = 620;

    const amberRaw = await sharp(amberMaster).trim().toBuffer();
    const imperialRaw = await sharp(imperialMaster).trim().toBuffer();
    const waveRaw = await sharp(waveMaster).trim().toBuffer();

    const centerBottle = await sharp(amberRaw).resize({ height: centerH }).toBuffer();
    const centerMeta = await sharp(centerBottle).metadata();

    const leftBottle = await sharp(imperialRaw).resize({ height: sideH }).toBuffer();
    const leftMeta = await sharp(leftBottle).metadata();

    const rightBottle = await sharp(waveRaw).resize({ height: sideH }).toBuffer();
    const rightMeta = await sharp(rightBottle).metadata();

    const centerX = 1530;
    const centerLeft = Math.round(centerX - centerMeta.width / 2);
    const centerTop = groundY - centerMeta.height + 15;

    const leftX = 1270;
    const leftLeft = Math.round(leftX - leftMeta.width / 2);
    const leftTop = groundY - leftMeta.height + 15;

    const rightX = 1770;
    const rightLeft = Math.round(rightX - rightMeta.width / 2);
    const rightTop = groundY - rightMeta.height + 15;

    const centerRef = await makeReflection(centerBottle, centerH, 0.32);
    const leftRef = await makeReflection(leftBottle, sideH, 0.28);
    const rightRef = await makeReflection(rightBottle, sideH, 0.28);

    const desktopSvg = Buffer.from(`
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgWallD" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fdf8f4" />
            <stop offset="30%" stop-color="#f9f0e7" />
            <stop offset="65%" stop-color="#f2e4d7" />
            <stop offset="100%" stop-color="#e8d5c4" />
          </linearGradient>
          <radialGradient id="sunGlowD" cx="45%" cy="20%" r="75%">
            <stop offset="0%" stop-color="#fffdfa" stop-opacity="0.9" />
            <stop offset="45%" stop-color="#fcf2e6" stop-opacity="0.45" />
            <stop offset="100%" stop-color="#ebd8c7" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="marbleTopD" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fbf5ef" />
            <stop offset="8%" stop-color="#f5ece3" />
            <stop offset="30%" stop-color="#eee1d4" />
            <stop offset="70%" stop-color="#e4d2c2" />
            <stop offset="100%" stop-color="#d7c0ae" />
          </linearGradient>
          <linearGradient id="bevelEdgeD" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#eed8c8" stop-opacity="0.4" />
            <stop offset="30%" stop-color="#ffffff" stop-opacity="0.9" />
            <stop offset="70%" stop-color="#fcf6f0" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#e8cfbd" stop-opacity="0.3" />
          </linearGradient>
          <filter id="ultraBlurD" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="60" />
          </filter>
          <filter id="softGlowD" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
          <filter id="contactShadowD" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="deepBaseShadowD" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <rect width="${width}" height="${height}" fill="url(#bgWallD)" />
        <circle cx="1520" cy="260" r="450" fill="#f8ece0" filter="url(#ultraBlurD)" opacity="0.8" />
        <circle cx="1780" cy="330" r="380" fill="#f4dfcf" filter="url(#ultraBlurD)" opacity="0.7" />
        <circle cx="500" cy="240" r="500" fill="#ffffff" filter="url(#ultraBlurD)" opacity="0.6" />
        <rect width="${width}" height="${height}" fill="url(#sunGlowD)" />

        <!-- Architectural arch behind bottles -->
        <path d="M 1230,545 L 1230,190 A 300,300 0 0,1 1830,190 L 1830,545 Z" fill="#faeee3" opacity="0.4" filter="url(#softGlowD)" />

        <!-- Polished Marble Vanity -->
        <path d="M 0,545 L ${width},525 L ${width},${height} L 0,${height} Z" fill="url(#marbleTopD)" />
        <line x1="0" y1="545" x2="${width}" y2="525" stroke="url(#bevelEdgeD)" stroke-width="2.5" />

        <!-- Back-Glow Behind Bottles -->
        <ellipse cx="${centerX}" cy="510" rx="440" ry="170" fill="#fff5ea" filter="url(#softGlowD)" opacity="0.9" />
        <ellipse cx="${centerX}" cy="510" rx="280" ry="100" fill="#fde6cf" filter="url(#softGlowD)" opacity="0.55" />

        <!-- Ground Shadows -->
        <ellipse cx="${centerX}" cy="${groundY + 14}" rx="145" ry="26" fill="#382115" filter="url(#contactShadowD)" opacity="0.55" />
        <ellipse cx="${centerX}" cy="${groundY + 10}" rx="115" ry="13" fill="#180c06" filter="url(#deepBaseShadowD)" opacity="0.75" />

        <ellipse cx="${leftX}" cy="${groundY + 14}" rx="130" ry="24" fill="#2d2218" filter="url(#contactShadowD)" opacity="0.5" />
        <ellipse cx="${leftX}" cy="${groundY + 10}" rx="100" ry="12" fill="#120c08" filter="url(#deepBaseShadowD)" opacity="0.7" />

        <ellipse cx="${rightX}" cy="${groundY + 14}" rx="130" ry="24" fill="#242226" filter="url(#contactShadowD)" opacity="0.5" />
        <ellipse cx="${rightX}" cy="${groundY + 10}" rx="100" ry="12" fill="#0d0d12" filter="url(#deepBaseShadowD)" opacity="0.7" />
      </svg>
    `);

    const stageBase = await sharp(desktopSvg).png().toBuffer();

    const desktopBuffer = await sharp(stageBase)
      .composite([
        { input: leftRef, top: groundY + 12, left: leftLeft, blend: 'over' },
        { input: rightRef, top: groundY + 12, left: rightLeft, blend: 'over' },
        { input: centerRef, top: groundY + 12, left: centerLeft, blend: 'over' },

        { input: leftBottle, top: leftTop, left: leftLeft },
        { input: rightBottle, top: rightTop, left: rightLeft },
        { input: centerBottle, top: centerTop, left: centerLeft }
      ])
      .jpeg({ quality: 88, mozjpeg: true })
      .toBuffer();

    fs.writeFileSync('src/assets/kaira_bespoke_hero_stage.jpg', desktopBuffer);
    console.log(`✓ Desktop Hero saved: ${(desktopBuffer.length / 1024).toFixed(1)} KB (2048 x 850)`);
  }

  // =========================================================================
  // 2. MOBILE HERO BANNER (900 x 1350 Portrait)
  // =========================================================================
  {
    const width = 900;
    const height = 1350;
    const centerH = 480;
    const sideH = 420;
    const groundY = 1120; // Bottles sit majestically in lower half

    const amberRaw = await sharp(amberMaster).trim().toBuffer();
    const imperialRaw = await sharp(imperialMaster).trim().toBuffer();
    const waveRaw = await sharp(waveMaster).trim().toBuffer();

    const centerBottle = await sharp(amberRaw).resize({ height: centerH }).toBuffer();
    const centerMeta = await sharp(centerBottle).metadata();

    const leftBottle = await sharp(imperialRaw).resize({ height: sideH }).toBuffer();
    const leftMeta = await sharp(leftBottle).metadata();

    const rightBottle = await sharp(waveRaw).resize({ height: sideH }).toBuffer();
    const rightMeta = await sharp(rightBottle).metadata();

    // Horizontal centering on mobile:
    const centerX = 450;
    const centerLeft = Math.round(centerX - centerMeta.width / 2);
    const centerTop = groundY - centerMeta.height + 15;

    const leftX = 220;
    const leftLeft = Math.round(leftX - leftMeta.width / 2);
    const leftTop = groundY - leftMeta.height + 15;

    const rightX = 680;
    const rightLeft = Math.round(rightX - rightMeta.width / 2);
    const rightTop = groundY - rightMeta.height + 15;

    const centerRef = await makeReflection(centerBottle, centerH, 0.32);
    const leftRef = await makeReflection(leftBottle, sideH, 0.28);
    const rightRef = await makeReflection(rightBottle, sideH, 0.28);

    const mobileSvg = Buffer.from(`
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgWallM" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fdf8f4" />
            <stop offset="40%" stop-color="#f9f1e8" />
            <stop offset="70%" stop-color="#f2e4d6" />
            <stop offset="100%" stop-color="#e8d5c4" />
          </linearGradient>
          <radialGradient id="sunGlowM" cx="50%" cy="25%" r="65%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
            <stop offset="50%" stop-color="#fdf4e8" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#ebd8c7" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="marbleTopM" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fcf7f1" />
            <stop offset="6%" stop-color="#f6ede4" />
            <stop offset="25%" stop-color="#eee2d5" />
            <stop offset="65%" stop-color="#e4d2c2" />
            <stop offset="100%" stop-color="#d6c0ae" />
          </linearGradient>
          <linearGradient id="bevelEdgeM" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#eed8c8" stop-opacity="0.4" />
            <stop offset="50%" stop-color="#ffffff" stop-opacity="0.95" />
            <stop offset="100%" stop-color="#eed8c8" stop-opacity="0.4" />
          </linearGradient>
          <filter id="ultraBlurM" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="50" />
          </filter>
          <filter id="softGlowM" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
          <filter id="contactShadowM" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="deepBaseShadowM" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <rect width="${width}" height="${height}" fill="url(#bgWallM)" />
        <circle cx="450" cy="350" r="380" fill="#ffffff" filter="url(#ultraBlurM)" opacity="0.75" />
        <rect width="${width}" height="${height}" fill="url(#sunGlowM)" />

        <!-- Luxury Arch Motif behind bottles -->
        <path d="M 120,1040 L 120,680 A 330,330 0 0,1 780,680 L 780,1040 Z" fill="#faeee3" opacity="0.45" filter="url(#softGlowM)" />

        <!-- Polished Marble Vanity Table -->
        <path d="M 0,1045 L ${width},1045 L ${width},${height} L 0,${height} Z" fill="url(#marbleTopM)" />
        <line x1="0" y1="1045" x2="${width}" y2="1045" stroke="url(#bevelEdgeM)" stroke-width="2.5" />

        <!-- Ambient Back-Glow Behind Bottles -->
        <ellipse cx="${centerX}" cy="1010" rx="380" ry="160" fill="#fff5ea" filter="url(#softGlowM)" opacity="0.9" />
        <ellipse cx="${centerX}" cy="1010" rx="240" ry="90" fill="#fde6cf" filter="url(#softGlowM)" opacity="0.55" />

        <!-- Ground Contact Shadows -->
        <ellipse cx="${centerX}" cy="${groundY + 14}" rx="145" ry="24" fill="#382115" filter="url(#contactShadowM)" opacity="0.55" />
        <ellipse cx="${centerX}" cy="${groundY + 10}" rx="115" ry="12" fill="#180c06" filter="url(#deepBaseShadowM)" opacity="0.75" />

        <ellipse cx="${leftX}" cy="${groundY + 14}" rx="125" ry="22" fill="#2d2218" filter="url(#contactShadowM)" opacity="0.5" />
        <ellipse cx="${leftX}" cy="${groundY + 10}" rx="95" ry="11" fill="#120c08" filter="url(#deepBaseShadowM)" opacity="0.7" />

        <ellipse cx="${rightX}" cy="${groundY + 14}" rx="125" ry="22" fill="#242226" filter="url(#contactShadowM)" opacity="0.5" />
        <ellipse cx="${rightX}" cy="${groundY + 10}" rx="95" ry="11" fill="#0d0d12" filter="url(#deepBaseShadowM)" opacity="0.7" />
      </svg>
    `);

    const stageBaseM = await sharp(mobileSvg).png().toBuffer();

    const mobileBuffer = await sharp(stageBaseM)
      .composite([
        { input: leftRef, top: groundY + 12, left: leftLeft, blend: 'over' },
        { input: rightRef, top: groundY + 12, left: rightLeft, blend: 'over' },
        { input: centerRef, top: groundY + 12, left: centerLeft, blend: 'over' },

        { input: leftBottle, top: leftTop, left: leftLeft },
        { input: rightBottle, top: rightTop, left: rightLeft },
        { input: centerBottle, top: centerTop, left: centerLeft }
      ])
      .jpeg({ quality: 88, mozjpeg: true })
      .toBuffer();

    fs.writeFileSync('src/assets/kaira_hero_mobile.jpg', mobileBuffer);
    console.log(`✓ Mobile Hero saved: ${(mobileBuffer.length / 1024).toFixed(1)} KB (900 x 1350)`);
  }
}

buildHeroImages().catch(console.error);
