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
- `public/assets/` — CSS, JS, logo, poze echipă
- `_build/build.py` — generatorul vechi (referință; nu mai e folosit)

## Previzualizare online

- Adresa: https://almasanmihai.github.io/fiscont-preview/
- Repo: https://github.com/almasanmihai/fiscont-preview
- Paginile au `noindex, nofollow`; `robots.txt` blochează indexarea.

## Conținut blog

Câmpuri frontmatter (schema Astro):

| Câmp | Tip |
|------|-----|
| `title` | string |
| `description` | string (opțional) |
| `pubDate` | date |
| `category` | fiscal \| hr \| legislatie \| alerte \| talks \| leadership |
| `author` | string |
| `authorRole` | string |
| `draft` | boolean |

Corpul articolului e Markdown după frontmatter.
