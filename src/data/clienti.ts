import { reviews, industries } from './site';
import { approvedLogoExt, loadPrivateClients } from '../utils/private-clients.mjs';

/**
 * Recenziile și logo-urile gata de afișat. Numele și logo-urile originale apar doar pentru
 * clienții cu `acord: true` în private/clienti.json; ceilalți rămân anonimi și blurați.
 */
const { recenzii, logouri } = loadPrivateClients();

export const shownReviews = reviews.map((r) => {
  const p = recenzii[r.id];
  return { quote: r.quote, author: p?.acord ? p.autor : null };
});

export const shownLogos = industries.map(({ id }) => {
  const p = logouri[id];
  return p?.acord
    ? { file: `assets/clienti/${id}${approvedLogoExt(p)}`, name: p.nume }
    : { file: `assets/clienti/blur/${id}.jpg`, name: null };
});
