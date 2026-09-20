// One-off generator for labeled placeholder images used by src/content/content.js.
// Run with: node scripts/generate-placeholders.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");
mkdirSync(outDir, { recursive: true });

const palette = [
  ["#3457FF", "#1F3AC7"],
  ["#0E1116", "#2B303B"],
  ["#5B67F1", "#2F3ACB"],
  ["#232A3B", "#0E1116"],
  ["#4A5CFF", "#2138C9"],
  ["#111827", "#1F2A44"],
];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

function svgPlaceholder({ name, label, w, h }) {
  const [from, to] = palette[hashString(name) % palette.length];
  // Label sits in the bottom-left corner (not centered) so it never collides
  // with real headline/CTA text that sections overlay on top of these images.
  const fontSize = Math.max(13, Math.round(Math.min(w, h) / 22));
  const pad = Math.round(Math.min(w, h) * 0.06);
  const badgeW = Math.min(w - pad * 2, Math.round(label.length * fontSize * 0.62) + pad * 2);
  const badgeH = Math.round(fontSize * 2.6);
  const badgeY = h - pad - badgeH;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
    <pattern id="p" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M0 28L28 0" stroke="#ffffff" stroke-opacity="0.06" stroke-width="2"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#p)"/>
  <rect x="${pad}" y="${badgeY}" width="${badgeW}" height="${badgeH}" rx="${Math.round(badgeH / 2)}" fill="#000000" opacity="0.35"/>
  <text x="${pad + badgeW / 2}" y="${badgeY + badgeH / 2}" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="#ffffff" opacity="0.95">${label}</text>
</svg>`;
}

function svgQr({ name, w, h }) {
  const seed = hashString(name);
  const cells = 21;
  const cell = Math.floor(Math.min(w, h) / cells);
  const size = cell * cells;
  let rand = seed;
  const next = () => {
    rand = (rand * 1103515245 + 12345) >>> 0;
    return rand / 0xffffffff;
  };
  let squares = "";
  for (let y = 0; y < cells; y++) {
    for (let x = 0; x < cells; x++) {
      const isFinder =
        (x < 7 && y < 7) || (x > cells - 8 && y < 7) || (x < 7 && y > cells - 8);
      const on = isFinder ? (x % 6 === 0 || y % 6 === 0 || (x > 1 && x < 5 && y > 1 && y < 5)) : next() > 0.55;
      if (on) squares += `<rect x="${x * cell}" y="${y * cell}" width="${cell}" height="${cell}" fill="#0E1116"/>`;
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#ffffff"/>
  ${squares}
</svg>`;
}

const images = [
  { name: "hero-bg", label: "Hero — City Drive", w: 1600, h: 1000 },
  { name: "car-type-sports", label: "Sports", w: 600, h: 450 },
  { name: "car-type-convertible", label: "Convertible", w: 600, h: 450 },
  { name: "car-type-electric", label: "Electric", w: 600, h: 450 },
  { name: "car-type-luxury", label: "Luxury", w: 600, h: 450 },
  { name: "about-team", label: "Our Team", w: 900, h: 700 },
  { name: "fleet-e-tron-gt", label: "E-Tron GT", w: 600, h: 400 },
  { name: "fleet-s5-sportback", label: "S5 Sportback", w: 600, h: 400 },
  { name: "fleet-lancer-cedia", label: "Lancer Cedia", w: 600, h: 400 },
  { name: "fleet-roxx-xev-9e", label: "Roxx XEV 9e", w: 600, h: 400 },
  { name: "fleet-lx500d-iv7", label: "LX500d IV7", w: 600, h: 400 },
  { name: "fleet-benz-s-class-amg", label: "Benz S Class AMG", w: 600, h: 400 },
  { name: "services-main", label: "Intercity Rides", w: 900, h: 700 },
  { name: "services-secondary", label: "Chauffeur Service", w: 700, h: 700 },
  { name: "promo-card", label: "Affordable Rentals", w: 700, h: 500 },
  { name: "promo-secondary-1", label: "Key Handoff", w: 500, h: 300 },
  { name: "promo-secondary-2", label: "SUV Landscape", w: 700, h: 700 },
  { name: "stats-experience", label: "10+ Years", w: 400, h: 160 },
  { name: "amenities-interior-1", label: "Interior — Rear Seats", w: 700, h: 600 },
  { name: "amenities-interior-2", label: "Interior — Dashboard", w: 700, h: 600 },
  { name: "testimonial-avatar", label: "Avatar", w: 100, h: 100 },
  { name: "testimonial-video", label: "Video Testimonial", w: 700, h: 600 },
  { name: "blog-post-1", label: "Blog — Road Trips", w: 600, h: 400 },
  { name: "blog-post-2", label: "Blog — Eco Friendly", w: 600, h: 400 },
  { name: "blog-post-3", label: "Blog — Safe Driving", w: 600, h: 400 },
  { name: "app-phone", label: "App Preview", w: 500, h: 600 },
];

for (const img of images) {
  const content = svgPlaceholder(img);
  writeFileSync(join(outDir, `${img.name}.svg`), content, "utf8");
}
writeFileSync(join(outDir, "app-qr.svg"), svgQr({ name: "app-qr", w: 220, h: 220 }), "utf8");

console.log(`Generated ${images.length + 1} placeholder images in ${outDir}`);
