# Fiscont: propunere de site nou

Site static de prezentare și blog, responsive, în 11 pagini, pe brandul Fiscont (sigla și fonturile din „Branding FISCONT_ppt site”), cu paleta petrol pe alb murdar.

## Cum se lucrează cu el

Paginile se generează din `_build/build.py`, unde antetul, subsolul, echipa, serviciile și articolele sunt definite o singură dată:

```
python _build/build.py
```

Nu editați direct fișierele `.html`: se suprascriu la următoarea generare. Pentru vizualizare, din folderul părinte:

```
python -m http.server 8765 --directory site-nou
```

La modificări în `assets/styles.css` sau `assets/site.js`, creșteți `V` din `build.py`, ca browserele să nu păstreze fișierele vechi.

| Pagină | Conținut |
|--------|----------|
| `index.html` | Acasă: slogan, fișa firmei, cele 4 domenii, echipa, testimonial, FISCONT Talks, blog, contact |
| `despre.html` | Cum începe o colaborare, date de identificare, valori, echipa, domenii |
| `servicii.html` | Prezentarea celor 4 domenii |
| `contabilitate.html`, `consultanta.html`, `resurse-umane.html`, `juridic.html` | Pagini de serviciu fără prețuri, cu „cine se ocupă” și întrebări frecvente |
| `blog.html` | Cele 9 articole reale, filtre pe 6 categorii, articole propuse; `blog.html?categorie=talks` deschide direct o categorie |
| `articol.html` | Șablon de articol (text demonstrativ) |
| `contact.html` | Contact, programare online, hartă încărcată doar la cerere |
| `confidentialitate.html` | Proiect de politică GDPR și cookie-uri |

## Previzualizare online (GitHub Pages)

- Adresa: https://almasanmihai.github.io/fiscont-preview/
- Repo (public): https://github.com/almasanmihai/fiscont-preview
- Paginile au `noindex, nofollow`, iar `robots.txt` blochează indexarea, ca previzualizarea să nu apară în Google și să nu concureze cu fiscontsrl.ro. La lansarea reală se scot amândouă (tag-ul `robots` din `_build/build.py` și `robots.txt`).

Pentru a actualiza previzualizarea după o modificare, din folderul `site-nou`:

```
python _build/build.py
git add -A
git commit -m "Descrierea modificării"
git push
```

GitHub Pages republică site-ul în 1–2 minute.

## Design

Paleta: **petrol pe alb murdar**, aleasă din patru variante (albastru, bleumarin, grafit, petrol). Documentul de branding cere „nuanțe de albastru cu alb și negru” și lasă loc de propuneri; petrolul e un albastru-verzui închis, iar sigla neagră cu roșu rămâne neschimbată.

| Token | Valoare | Rol |
|-------|---------|-----|
| Petrol titluri | `#0F4A59` | titluri, blocul echipei |
| Petrol | `#0F5E70` | linkuri, butoane, linia de sus a fișei |
| Petrol închis | `#0B4957` | hover |
| Petrol deschis | `#7FB3BF` | doar decor (nu are contrast suficient pentru text) |
| Roșu | `#F60015` | accent rar, ca în siglă: linia dublă a „totalului” din fișa firmei |
| Roșu pentru text | `#C4000F` | eticheta „Alerte fiscale” |
| Text | `#13262D` | text de bază |
| Fundal | `#ECE9E2` | alb murdar, fundalul paginii |
| Suprafețe | `#F6F4EF` | fișa firmei, butoanele de filtrare, bannerul de cookie-uri |
| Benzi | `#E1DDD4` | primul ecran, antetul paginilor, FISCONT Talks |
| Linii | `#CFC9BC` | liniile registrului |

- **Fonturi:** Poppins (titluri, butoane, meniu) și DM Sans (text, date, formulare), cum cere documentul de branding.
- **Sigla:** `assets/logo-fiscont.png` este redimensionată din „logo Fiscont_bot cover.png”. Favicon-ul folosește litera F din aceeași siglă. Pentru Wix e mai bine un SVG vectorial al siglei, dacă îl are designerul.
- **Element distinctiv:** registrul contabil. În primul ecran apare o „fișă a firmei” cu CUI, anul înființării, birou, echipă și CECCAR, cu link de verificare, încheiată cu linie dublă roșie, ca un total. Același motiv de registru se repetă la servicii, echipă, blog și contact.
- **Ton:** clar, profesionist și uman, ca în document. Mesajele-cheie folosite: „Contabilitate dincolo de cifre”, „De la contabilitate la parteneriat financiar”, „Fiscalitatea poate fi clară. Trebuie doar să fie înțeleasă corect.”, regula „Nu comunicăm ca să arătăm cât știm, ci ca să te ajutăm să înțelegi.”
- **Mișcare:** doar liniile fișei firmei, la încărcare; dezactivată cu `prefers-reduced-motion`.
- **Ce am evitat intenționat:** gradientele, benzile diagonale și grilele de puncte din bannere. Merg pe rețele sociale, dar pe site ar concura cu conținutul. Tot intenționat, pe site nu apar poze de stoc, emoji, prețuri și formulare de ofertă.

## De completat înainte de publicare

Căutați `TODO(` în `_build/build.py` sau marcajele hașurate din pagini.

- [ ] **Fotografii lipsă:** Ludmila Prisacariu și Andreea Iordache. Opțional, o poză de la birou.
- [ ] Câte 2 rânduri de prezentare pentru Ludmila și Andreea
- [ ] Linkul Calendly real și durata discuției
- [ ] Linkul către profilul Google Business (recenzii)
- [ ] Numele și calitatea profesională a juriștilor colaboratori
- [ ] Durata de păstrare a datelor în politica de confidențialitate
- [ ] Linkurile reale ale articolelor de blog (acum duc toate la șablon)

## De verificat de voi

- **Echipa:** numele complete, rolurile și portretele pentru Gabriela Dacu, Ileana Hagi, Luminița Gazi, Carmen Ioana și Rareș Andreescu vin de pe fiscontsrl.ro/team-1. Fiecare poză e potrivită cu persoana după textul alternativ și citatul de lângă ea de pe acea pagină. Ludmila Prisacariu și Andreea Iordache vin din bannere. Confirmați că lista și rolurile sunt la zi.
- **Portrete:** originalele (800×800) sunt în `assets/echipa/original`. Pe site folosesc decupaje pătrate de 360 px, afișate în cerc, ca să ascundă decorul cu dungi din colțul pozelor. Rezumatele scurte din coloana „Pe scurt” sunt extrase din textele lor de pe site; Gabriela are „peste 20 de ani de experiență”, Luminița e „în echipă din 2016”.
- **Roluri schimbate față de propunerea anterioară:** Gabriela Dacu apare ca „Fondator și CEO” (nu „contabil autorizat”), Rareș Andreescu ca „Expert contabil”, cum scrie pe pagina echipei.
- **Citatul „Cred în puterea cifrelor bine înțelese…”** apare într-un banner fără nume. L-am atribuit Gabrielei Dacu cu marcaj „de confirmat”.
- **Numele fondatoarei:** „Gabriela Dacu, Founder Fiscont” apare într-un banner, deci forma „Dacu” e confirmată.
- **CECCAR:** autorizația nr. 8032, filiala Ilfov, viză la zi (date de la client). În fișa firmei, subsol, „Despre noi” și „Contact”. Mențiunea „viză la zi” trebuie actualizată dacă viza expiră.
- **Sediul social:** Str. Smîrdan nr. 30, Bragadiru, jud. Ilfov (confirmat de client), diferit de biroul din Bd. Unirii nr. 64. Apare în subsol, pe „Despre noi”, „Contact” și în politica de confidențialitate.
- **REGES-ONLINE:** din 1 ianuarie 2026 a înlocuit complet REVISAL (sursă: cursdeguvernare.ro, 2 ianuarie 2026). Am actualizat pagina de resurse umane; formularea despre termenul de înregistrare e generală („în termenul prevăzut de lege”).
- **Juridic:** în România consultanța juridică e rezervată în principal avocaților (Legea nr. 51/1995). Verificați cu un avocat formularea „consultanță juridică prin juriști colaboratori”.
- **Texte scrise de mine**, de validat de echipă: pașii „Cum începe o colaborare”, răspunsurile la întrebările frecvente, pagina de consultanță financiară, articolul demonstrativ și proiectul de politică de confidențialitate.
- **Articolele propuse** din blog au ca sursă temele din bannere (alerta ANAF, FISCONT Talks, bugetul realist). Pe site-ul real apar doar după ce sunt scrise.

## Implementare în Wix

Structura, culorile și tipografia se pot reface în Wix Studio după `../ghid-implementare-wix.md`. Verificați dacă Poppins și DM Sans sunt în biblioteca de fonturi Wix; dacă nu, se încarcă (ambele au licență liberă OFL). Registrul se construiește din containere cu grilă și borduri de 1px. Pe mobil grila trece la o coloană, ca în `assets/styles.css` (`@media (max-width:760px)`).
