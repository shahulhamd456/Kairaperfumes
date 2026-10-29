import fs from 'fs';
import sharp from 'sharp';

async function downloadAndProcess() {
  console.log('=== Downloading Editorial Sensory Imagery (No Bottles) ===');

  const targets = [
    {
      name: 'kaira_journal_layering.jpg',
      url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&q=85&auto=format&fit=crop',
      desc: 'Golden amber oil droplet & botanical essence formulation'
    },
    {
      name: 'kaira_journal_bakhoor.jpg',
      url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&q=85&auto=format&fit=crop',
      desc: 'Aromatic curls of sacred oud wood incense smoke in warm light'
    },
    {
      name: 'kaira_journal_rose.jpg',
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=85&auto=format&fit=crop',
      desc: 'Dawn-picked velvety Damask rose petals with morning dewdrops'
    }
  ];

  for (const t of targets) {
    console.log(`Downloading ${t.name}...`);
    const res = await fetch(t.url);
    if (!res.ok) throw new Error(`Failed to fetch ${t.url}`);
    const buffer = Buffer.from(await res.arrayBuffer());

    // Resize and crop to 800 x 520 (16:10.4 aspect ratio)
    await sharp(buffer)
      .resize({ width: 800, height: 520, fit: 'cover', position: 'center' })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(`src/assets/${t.name}`);

    console.log(`✓ Saved src/assets/${t.name}`);
  }

  console.log('=== All 3 editorial lifestyle images ready! ===');
}

downloadAndProcess().catch(console.error);

