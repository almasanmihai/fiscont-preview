// Datele despre clienți stau într-un repo privat, adus la build în folderul private/
// (vezi .github/workflows/deploy.yml). Fără el, site-ul se construiește cu tot ascuns.
import { existsSync, readFileSync, readdirSync, rmSync, copyFileSync, mkdirSync } from 'node:fs';
import { extname, join } from 'node:path';

const root = process.cwd();
const privateDir = join(root, 'private');
const logoDir = join(root, 'public', 'assets', 'clienti');

/** @returns {{ recenzii: Record<string, { autor: string, acord: boolean }>, logouri: Record<string, { nume: string, fisier: string, acord: boolean }> }} */
export function loadPrivateClients() {
  const file = join(privateDir, 'clienti.json');
  if (!existsSync(file)) return { recenzii: {}, logouri: {} };
  const data = JSON.parse(readFileSync(file, 'utf8'));
  return { recenzii: data.recenzii ?? {}, logouri: data.logouri ?? {} };
}

/** Extensia sub care se publică logo-ul original al unui client cu acord. */
export function approvedLogoExt(entry) {
  return extname(entry.fisier).toLowerCase();
}

/**
 * Copiază în public/assets/clienti/ doar logo-urile cu acord, sub numele `<id>.<ext>`,
 * și șterge orice original rămas de la un build anterior. Folderul blur/ rămâne neatins.
 */
export function syncApprovedLogos() {
  mkdirSync(logoDir, { recursive: true });
  for (const f of readdirSync(logoDir)) {
    if (f !== 'blur' && f !== '.gitkeep') rmSync(join(logoDir, f), { recursive: true, force: true });
  }
  const { logouri } = loadPrivateClients();
  for (const [id, entry] of Object.entries(logouri)) {
    if (!entry.acord) continue;
    const src = join(privateDir, 'clienti', entry.fisier);
    if (existsSync(src)) copyFileSync(src, join(logoDir, `${id}${approvedLogoExt(entry)}`));
  }
}

/** Integrare Astro: sincronizează logo-urile înainte de dev și de build. */
export function privateClients() {
  return {
    name: 'fiscont-private-clients',
    hooks: {
      'astro:config:setup': () => syncApprovedLogos(),
    },
  };
}
