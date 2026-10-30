const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const MAX_BYTES = 148 * 1024; // 148 KB target (strictly under 150 KB)

async function getCandidateFiles() {
  const allFiles = [];
  function scan(dir) {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        scan(fullPath);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          allFiles.push({ fullPath, relPath: path.relative(ASSETS_DIR, fullPath), size: stat.size, ext });
        }
      }
    }
  }
  scan(ASSETS_DIR);
  return allFiles;
}

async function compressImage(fileInfo) {
  const { fullPath, ext } = fileInfo;
  // Read into memory buffer so Sharp does NOT lock the file on disk on Windows
  const inputBuffer = fs.readFileSync(fullPath);
  const meta = await sharp(inputBuffer).metadata();
  const hasAlpha = meta.hasAlpha;

  let bestBuffer = null;

  if (ext === '.jpg' || ext === '.jpeg') {
    const attempts = [
      { w: 1500, q: 82 },
      { w: 1280, q: 78 },
      { w: 1080, q: 74 },
      { w: 900,  q: 70 },
      { w: 750,  q: 66 }
    ];

    for (const att of attempts) {
      const buf = await sharp(inputBuffer)
        .resize({ width: Math.min(meta.width, att.w), withoutEnlargement: true })
        .jpeg({ quality: att.q, mozjpeg: true })
        .toBuffer();
      if (buf.length <= MAX_BYTES) {
        bestBuffer = buf;
        break;
      }
    }
  } else if (ext === '.png') {
    if (hasAlpha) {
      const attempts = [
        { w: 640, q: 82, c: 256 },
        { w: 560, q: 80, c: 240 },
        { w: 500, q: 78, c: 220 },
        { w: 450, q: 75, c: 200 },
        { w: 400, q: 72, c: 180 },
        { w: 360, q: 70, c: 160 }
      ];

      for (const att of attempts) {
        const buf = await sharp(inputBuffer)
          .resize({ width: Math.min(meta.width, att.w), withoutEnlargement: true })
          .png({ quality: att.q, compressionLevel: 9, palette: true, colours: att.c })
          .toBuffer();
        if (buf.length <= MAX_BYTES) {
          bestBuffer = buf;
          break;
        }
      }
    } else {
      const attempts = [
        { w: 1100, q: 82, c: 256 },
        { w: 900,  q: 78, c: 240 },
        { w: 750,  q: 75, c: 200 },
        { w: 650,  q: 72, c: 180 },
        { w: 550,  q: 70, c: 160 },
        { w: 450,  q: 68, c: 128 }
      ];

      for (const att of attempts) {
        const buf = await sharp(inputBuffer)
          .resize({ width: Math.min(meta.width, att.w), withoutEnlargement: true })
          .png({ quality: att.q, compressionLevel: 9, palette: true, colours: att.c })
          .toBuffer();
        if (buf.length <= MAX_BYTES) {
          bestBuffer = buf;
          break;
        }
      }
    }
  }

  return bestBuffer;
}

async function run() {
  const isApply = process.argv.includes('--apply');
  const files = await getCandidateFiles();
  const over150 = files.filter(f => f.size > 150 * 1024);
  console.log(`Mode: ${isApply ? 'APPLY' : 'DRY RUN'}`);
  console.log(`Found ${files.length} total images, ${over150.length} are over 150 KB.\n`);

  let successCount = 0;
  for (const f of over150) {
    const origKB = (f.size / 1024).toFixed(1);
    const buf = await compressImage(f);
    if (buf) {
      const newKB = (buf.length / 1024).toFixed(1);
      if (isApply) {
        fs.writeFileSync(f.fullPath, buf);
        console.log(`✓ [SAVED] ${f.relPath}: ${origKB} KB -> ${newKB} KB`);
      } else {
        console.log(`✓ [READY] ${f.relPath}: ${origKB} KB -> ${newKB} KB`);
      }
      successCount++;
    } else {
      console.log(`✗ [FAILED] ${f.relPath}: ${origKB} KB could not be compressed under 148 KB`);
    }
  }

  console.log(`\nCompleted: ${successCount} / ${over150.length} images processed.`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
