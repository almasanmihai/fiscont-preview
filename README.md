# Fiscont: propunere de site nou (Astro)

Site de prezentare și blog pe brandul Fiscont, acum pe **Astro**, cu previzualizare pe GitHub Pages.

## Dezvoltare locală

```bash
npm install
npm run dev
```

Site-ul: http://localhost:4321/fiscont-preview/

## Build

```bash
npm run build
```

Ieșirea e în `dist/`. Deploy pe GitHub Pages prin `.github/workflows/deploy.yml`.

## Structură

- `src/pages/` — paginile site-ului
- `src/content/blog/` — articolele (Markdown + frontmatter)
- `src/content.config.ts` — schema colecției `blog`
- `src/data/site.ts` — echipă, servicii, navigare
- `public/assets/` — CSS, JS, fonturi, logo, poze echipă
- `originale/` — fișierele sursă ale pozelor (nu se publică)

## Previzualizare online

- Adresa: https://almasanmihai.github.io/fiscont-preview/
- Repo: https://github.com/almasanmihai/fiscont-preview
- Paginile au `noindex, nofollow`; `robots.txt` blochează indexarea.

## Date private despre clienți

Numele din recenzii, numele și logo-urile originale ale clienților nu stau în acest repo (care e
public), ci în repo-ul privat `almasanmihai/fiscont-privat`:

- `clienti.json` — pentru fiecare `id` din `src/data/site.ts`: autorul sau numele și `acord`;
- `clienti/` — logo-urile originale.

La build, workflow-ul îl aduce în `private/` cu cheia de deploy din secretul `PRIVATE_DEPLOY_KEY`.
Pe site apar doar clienții cu `"acord": true`; ceilalți rămân anonimi, cu logo blurat.
Fără folderul `private/`, site-ul se construiește cu toți clienții ascunși.

Local: `gh repo clone almasanmihai/fiscont-privat private`.

## Lansare pe fiscontsrl.ro

Adresa și calea de bază sunt într-un singur loc, `site.config.mjs`, citit de Astro și de Tina.
Variabila `SITE_PROD=1` comută build-ul pe domeniul final:

- `site: https://fiscontsrl.ro`, `base: /` (fără `/fiscont-preview`);
- dispare `noindex`, iar `robots.txt` permite indexarea și indică sitemap-ul;
- adminul Tina se construiește pentru rădăcina domeniului.

Pași la lansare:

1. În `.github/workflows/deploy.yml`, la `env` pe jobul `build`, adaugă `SITE_PROD: '1'`.
2. Leagă domeniul de hosting (pentru GitHub Pages: `public/CNAME` cu `fiscontsrl.ro` și DNS-ul domeniului).
3. În Tina Cloud, actualizează adresa site-ului la `https://fiscontsrl.ro`.
4. Trimite `https://fiscontsrl.ro/sitemap-index.xml` în Google Search Console.

Local: `SITE_PROD=1 npm run build` arată exact ce se va publica.

## Conținut blog

Câmpuri frontmatter (schema Astro):

| Câmp | Tip |
|------|-----|
| `title` | string |
| `description` | string (opțional) |
| `pubDate` | date |
| `category` | fiscal \| hr \| legislatie \| alerte \| talks \| leadership \| business |
| `author` | string |
| `authorRole` | string |
| `draft` | boolean |

Corpul articolului e Markdown după frontmatter.
