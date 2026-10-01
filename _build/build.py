"""Generează paginile site-ului Fiscont din conținutul de mai jos.

Rulare (din folderul site-nou):  python _build/build.py
Antetul, subsolul și echipa sunt definite o singură dată aici.
"""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent
V = "11"  # versiunea fișierelor CSS/JS; se crește la fiecare modificare

TODO = lambda s: f'<span class="todo">{s}</span>'

# ---------------------------------------------------------------- date comune
# Nume, roluri și fotografii preluate de pe fiscontsrl.ro/team-1 (sept. 2026);
# Ludmila Prisacariu și Andreea Iordache vin din bannerele Fiscont și nu au încă fotografie.
TEAM = [
    # nume, rol, domeniu, pe scurt, fotografie
    ("Gabriela Dacu", "Fondator și CEO", "Contabilitate, consultanță financiară",
     "Peste 20 de ani de experiență în contabilitate. A fondat Fiscont în 2012.", "gabriela-dacu.jpg"),
    ("Ileana Hagi", "Economist senior și consultant fiscal", "Fiscalitate",
     "Ghidează clienții prin legislația fiscală.", "ileana-hagi.jpg"),
    ("Luminița Gazi", "Expert în legislația muncii, responsabil cu protecția datelor", "Resurse umane, GDPR",
     "În echipa Fiscont din 2016.", "luminita-gazi.jpg"),
    ("Carmen Ioana", "Economist senior, șef birou operațiuni clienți", "Relația cu clienții",
     "Coordonează operațiunile cu clienții.", "carmen-ioana.jpg"),
    ("Rareș Andreescu", "Expert contabil", "Contabilitate",
     "Expert contabil în echipa Fiscont.", "rares-andreescu.jpg"),
    ("Ludmila Prisacariu", "Specialist contabil", "Contabilitate", TODO("2 rânduri despre parcurs"), None),
    ("Andreea Iordache", "Specialist contabil", "Contabilitate", TODO("2 rânduri despre parcurs"), None),
]
ROLE = {n: r for n, r, *_ in TEAM}
PHOTO = {n: p for n, *_, p in TEAM}


def photo(name, cls="photo"):
    file = PHOTO.get(name)
    if file:
        return f'<span class="{cls}"><img src="assets/echipa/{file}" width="360" height="360" alt="{name}" loading="lazy"></span>'
    return f'<span class="{cls} empty">foto­grafie reală</span>'

POSTS = [
    # dată, titlu, categorie (cheie), rezumat
    ("31 aug. 2026", "Despre parteneriate în 2026", "leadership",
     "De la „facem totul” la un model în care colaborezi cu parteneri, într-un mediu fiscal greu de anticipat."),
    ("8 iun. 2026", "Antreprenorul și contabilul: vorbim aceeași limbă, dar nu mereu același limbaj?", "leadership",
     "Unde apar neînțelegerile când discutăm cifrele firmei și cum le evităm."),
    ("8 apr. 2026", "Cei 3D ai lunii martie: decizie, delegare, determinare", "leadership",
     "Despre decizii luate fără toate informațiile pe masă."),
    ("10 mar. 2026", "Cum măsori fermitatea în business?", "leadership",
     "Fermitatea ca abilitate care se învață, nu doar ca trăsătură de caracter."),
    ("7 feb. 2026", "Între a face ce îți place și a face ce are nevoie business-ul de la tine", "leadership", ""),
    ("6 ian. 2026", "Retrospectiva anului 2025", "leadership", ""),
    ("25 iun. 2025", "Reziliență, adaptare și lucruri care nu se negociază", "leadership", ""),
    ("5 mai 2025", "Între încredere și verificare", "leadership", ""),
    ("24 apr. 2025", "Cum am redescoperit pasiunea pentru contabilitate", "leadership", ""),
]

DRAFTS = [
    ("Ce se schimbă atunci când ANAF te invită la audiere", "alerte", "din bannerul „Alertă informativă”"),
    ("Amortizare, TVA, cheltuială deductibilă: diferențele care contează", "talks", "din seria FISCONT Talks"),
    ("Ce majorări de taxe aduce 2026", "talks", "din seria FISCONT Talks"),
    ("Resurse umane și REGES-ONLINE: de ce contează timpul", "talks", "din seria FISCONT Talks"),
    ("Cum construiești un buget realist: de la cifra de afaceri la obiective financiare", "leadership", "material de Gabriela Dacu"),
    ("Cum pregătești documentele lunare pentru contabil", "fiscal", "articol demonstrativ din șablon"),
]

CATS = {
    "fiscal": "Fiscal",
    "hr": "Resurse umane",
    "legislatie": "Legislație",
    "alerte": "Alerte fiscale",
    "talks": "FISCONT Talks",
    "leadership": "Leadership",
}

SERVICES = [
    # fișier, titlu, rezumat, listă
    ("contabilitate.html", "Contabilitate și fiscalitate",
     "Evidența completă a firmei, de la documentele lunare la situațiile financiare anuale, cu informații fiscale ținute la zi.",
     ["Evidență contabilă lunară", "Declarații fiscale", "Situații financiare anuale", "Consultanță fiscală"]),
    ("consultanta.html", "Consultanță și analiză financiară",
     "Cifrele devin un instrument de decizie: înțelegi businessul, vezi oportunitățile și îți stabilești obiectivele.",
     ["Analiză financiară pe înțelesul tău", "Bugete și obiective realiste", "Management financiar-strategic"]),
    ("resurse-umane.html", "Resurse umane și salarizare",
     "Partea salarială și administrativă a echipei tale, în acord cu legislația muncii.",
     ["Contracte de muncă", "REGES-ONLINE", "Stat de plată", "Dosare de personal"]),
    ("juridic.html", "Juridic",
     "Contracte, Registrul Comerțului și întrebările juridice curente, împreună cu juriștii cu care colaborăm.",
     ["Revizuirea contractelor", "Asistență la ONRC", "Consultanță punctuală sau lunară"]),
]

NAV = [("despre", "despre.html", "Despre noi"), ("servicii", "servicii.html", "Servicii"),
       ("blog", "blog.html", "Blog"), ("contact", "contact.html", "Contact")]


# ---------------------------------------------------------------- șablon
def page(filename, title, description, section, body):
    nav = "\n".join(
        f'    <li><a href="{href}"{" aria-current=\"page\"" if key == section else ""}>{label}</a></li>'
        for key, href, label in NAV)
    html = f"""<!doctype html>
<html lang="ro" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<meta name="robots" content="noindex, nofollow"><!-- previzualizare: se scoate la lansare -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Poppins:ital,wght@0,500;0,600;0,700;1,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/styles.css?v={V}">
<link rel="icon" href="assets/favicon-64.png" type="image/png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<script>document.documentElement.className='js'</script>
</head>
<body>
<a class="skip" href="#continut">Sari la conținut</a>

<header class="site-head"><div class="wrap">
  <a class="wordmark" href="index.html" aria-label="Fiscont, contabilitate dincolo de cifre. Pagina de acasă">
    <img class="logo" src="assets/logo-fiscont.png" width="180" height="47" alt="">
  </a>
  <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav">Meniu</button>
  <nav class="nav" id="nav" aria-label="Principal"><ul>
{nav}
  </ul></nav>
</div></header>

<main id="continut">
{body}
</main>

<footer class="site-foot"><div class="wrap">
  <div class="foot-grid">
    <div><img class="logo" src="assets/logo-fiscont.png" width="150" height="39" alt="Fiscont, contabilitate dincolo de cifre"><p>Fiscont Expert Consulting Solution SRL<br>CUI 30138979<br>Nr. Reg. Com. J2012001192237<br>Sediu social: Str. Smîrdan nr. 30, Bragadiru, jud. Ilfov<br>Membru CECCAR, autorizația nr. 8032</p></div>
    <div><h2>Birou</h2><p>Bd. Unirii nr. 64, Bloc K4,<br>scara 4, etaj 3, București<br>Luni–vineri, 9:00–18:00</p></div>
    <div><h2>Contact</h2><ul><li><a href="tel:+40759011054">+40 759 011 054</a></li><li><a href="mailto:office@fiscontsrl.ro">office@fiscontsrl.ro</a></li><li><a href="contact.html#programare">Programează o discuție</a></li></ul></div>
    <div><h2>Informații</h2><ul><li><a href="servicii.html">Servicii</a></li><li><a href="confidentialitate.html">Confidențialitate și cookie-uri</a></li><li><a href="https://ceccar.ro/ro/?page_id=97">Verificare membri CECCAR</a></li></ul></div>
  </div>
  <div class="foot-meta"><span>© 2012–2026 Fiscont Expert Consulting Solution SRL</span><span>Conținut actualizat în septembrie 2026</span></div>
</div></footer>

<div class="consent" id="consent" role="region" aria-label="Acord pentru cookie-uri" hidden>
  <p>Folosim cookie-uri de analiză doar dacă ești de acord. Site-ul funcționează la fel și dacă refuzi. Detalii în <a href="confidentialitate.html#cookie">politica de confidențialitate</a>.</p>
  <div class="actions"><button class="btn btn-line" type="button" data-consent="refuz">Refuz</button><button class="btn btn-line" type="button" data-consent="accept">Accept</button></div>
</div>
<script src="assets/site.js?v={V}" defer></script>
</body>
</html>
"""
    (OUT / filename).write_text(html, encoding="utf-8", newline="\n")
    print("scris", filename)


def page_head(crumb, h1, lead, extra=""):
    return f"""<header class="page-head"><div class="wrap">
  <p class="crumbs"><a href="index.html">Acasă</a> / {crumb}</p>
  <h1>{h1}</h1>
  <p class="lead">{lead}</p>{extra}
</div></header>"""


def team_ledger(label, last_col="Domeniu", bios=False):
    rows = []
    for name, role, area, bio, _ in TEAM:
        third = bio if bios else area
        rows.append(f'    <div class="r" role="row"><span role="cell">{photo(name)}</span>'
                    f'<span role="cell" class="name">{name}</span><span role="cell">{role}</span>'
                    f'<span role="cell" class="muted">{third}</span></div>')
    return f"""  <div class="ledger" role="table" aria-label="{label}">
    <div class="r head" role="row"><span role="columnheader"><span class="sr">Fotografie</span></span><span role="columnheader">Nume</span><span role="columnheader">Rol</span><span role="columnheader">{last_col}</span></div>
{chr(10).join(rows)}
  </div>"""


def post_rows(posts, with_excerpt=True):
    out = []
    for date, title, cat, excerpt in posts:
        ex = f"<p>{excerpt}</p>" if (with_excerpt and excerpt) else ""
        cls = "c cat-alerta" if cat == "alerte" else "c"
        out.append(f'    <div class="r" role="row" data-cat="{cat}"><span role="cell" class="d">{date}</span>'
                   f'<span role="cell" class="t"><a href="articol.html">{title}</a>{ex}</span>'
                   f'<span role="cell" class="{cls}">{CATS[cat]}</span></div>')
    return "\n".join(out)


def side(people, heading="Cine se ocupă"):
    """people: nume din TEAM (rolul se ia automat) sau perechi (nume, rol) pentru colaboratori."""
    rows = []
    for p in people:
        n, r = (p, ROLE[p]) if isinstance(p, str) else p
        rows.append(f'    <div class="r">{photo(n, "photo on-paper")}<div><b>{n}</b><span>{r}</span></div></div>')
    rows = "\n".join(rows)
    return f"""  <aside class="side" aria-labelledby="cine">
    <h2 id="cine">{heading}</h2>
{rows}
    <div class="r cta"><div><a class="btn" href="contact.html#programare">Programează o discuție</a></div></div>
  </aside>"""


def faq(items):
    return "\n".join(f"      <details><summary>{q}</summary><p>{a}</p></details>" for q, a in items)


def service_page(filename, h1, lead, crumb, desc, covers, extra_sections, faqs, people):
    lis = "\n".join(f"      <li>{c}</li>" for c in covers)
    body = f"""{page_head(f'<a href="servicii.html">Servicii</a> / {crumb}', h1, lead)}

<section class="section"><div class="wrap body-grid">
  <div class="text">
    <h2>Ce acoperim</h2>
    <ul>
{lis}
    </ul>
{extra_sections}
    <h2 id="intrebari">Întrebări frecvente</h2>
    <div class="faq">
{faq(faqs)}
    </div>
  </div>
{side(people)}
</div></section>"""
    page(filename, f"{h1} | Fiscont", desc, "servicii", body)


# ---------------------------------------------------------------- pagini
def build_index():
    cols = "\n".join(f"""    <div>
      <h3>{t}</h3>
      <p>{s}</p>
      <ul>{"".join(f"<li>{i}</li>" for i in items)}</ul>
      <a href="{f}">Despre {t[0].lower() + t[1:]}</a>
    </div>""" for f, t, s, items in SERVICES)
    body = f"""<section class="hero" aria-labelledby="titlu"><div class="wrap hero-grid">
  <div>
    <h1 id="titlu">Contabilitate dincolo de cifre.</h1>
    <p class="lead">Ținem contabilitatea firmei tale corectă și la zi, apoi te ajutăm să înțelegi ce spun cifrele. Așa iei decizii fundamentate, nu doar depui declarații la termen.</p>
    <div class="actions">
      <a class="btn" href="contact.html#programare">Programează o discuție</a>
      <a href="despre.html#echipa">Cunoaște echipa</a>
    </div>
  </div>

  <aside class="sheet" aria-labelledby="fisa">
    <div class="sheet-title"><h2 id="fisa">Fișa firmei</h2><span>date publice</span></div>
    <dl>
      <div class="row"><dt>Denumire</dt><dd>Fiscont Expert Consulting Solution SRL</dd></div>
      <div class="row"><dt>CUI</dt><dd>30138979</dd></div>
      <div class="row"><dt>Activă din</dt><dd>2012</dd></div>
      <div class="row"><dt>Birou</dt><dd>Bd. Unirii nr. 64, București</dd></div>
      <div class="row"><dt>Echipă</dt><dd>Experți contabili, economiști, specialiști în resurse umane</dd></div>
      <div class="row total"><dt>Membru CECCAR</dt><dd>Autorizația nr. 8032, filiala Ilfov</dd></div>
    </dl>
    <p class="note">Statutul de membru se poate verifica pe <a href="https://ceccar.ro/ro/?page_id=97">ceccar.ro</a>.</p>
  </aside>
</div></section>

<section class="section" aria-labelledby="ce-facem"><div class="wrap">
  <div class="sec-head">
    <h2 id="ce-facem">De la contabilitate la parteneriat financiar</h2>
    <p>Pe măsură ce afacerea crește, cifrele devin mai mult decât raportări. Te sprijinim în patru domenii, cu aceeași echipă, ca informația să circule o singură dată și să fie aceeași peste tot.</p>
  </div>
  <div class="cols">
{cols}
  </div>
</div></section>

<section class="team on-blue" aria-labelledby="echipa"><div class="wrap">
  <div class="sec-head">
    <h2 id="echipa">Oamenii care îți răspund</h2>
    <p>Fiecare client știe cine se ocupă de firma lui. Aici sunt, cu rolul și domeniul fiecăruia.</p>
  </div>
{team_ledger("Echipa Fiscont")}
  <p class="actions"><a href="despre.html#echipa">Mai multe despre echipă</a></p>
</div></section>

<section class="section" aria-labelledby="clienti"><div class="wrap split">
  <figure class="quote">
    <h2 id="clienti" class="sr">Ce spun clienții</h2>
    <blockquote><q>Totul a funcționat foarte bine. Întreaga colaborare a decurs impecabil, fără probleme. Nu am simțit niciodată nevoia să cer simplificarea proceselor sau a procedurilor, ceea ce, pentru mine, este un semn clar că lucrurile sunt bine gândite și eficient implementate.</q></blockquote>
    <figcaption><b>Magic Speed SRL</b><span class="muted small">client Fiscont</span></figcaption>
  </figure>
  <div>
    <div class="aside-block">
      <h3>Domenii în care lucrăm</h3>
      <p>Agricultură, servicii, comerț, transporturi, birouri notariale și cabinete medicale. Pentru fiecare urmărim regulile fiscale specifice activității.</p>
    </div>
    <div class="aside-block">
      <h3>Recenzii independente</h3>
      <p>Părerile clienților, publicate direct de ei, sunt pe profilul nostru Google.</p>
      <p><a href="#">Citește recenziile pe Google</a> {TODO("link de completat")}</p>
    </div>
  </div>
</div></section>

<section class="section tinted" aria-labelledby="talks"><div class="wrap talks">
  <div>
    <h2 id="talks">FISCONT Talks</h2>
    <p class="tagline">Fiscalitatea poate fi clară. <span>Trebuie doar să fie înțeleasă corect.</span></p>
    <p style="margin-top:var(--sp-2);max-width:48ch">Seria noastră de educație financiară aplicată pentru antreprenori: explicăm pe înțeles termenii, schimbările și deciziile care contează.</p>
    <p class="actions"><a class="btn btn-line" href="blog.html?categorie=talks">Articole FISCONT Talks</a></p>
  </div>
  <div class="ledger" role="table" aria-label="Teme FISCONT Talks">
    <div class="r head" role="row" style="grid-template-columns:1fr"><span role="columnheader">Teme din serie</span></div>
    <div class="r" role="row" style="grid-template-columns:1fr"><span role="cell">Amortizare, TVA, cheltuială deductibilă: când le confundăm apar frustrări, când le înțelegem, deciziile devin mai așezate.</span></div>
    <div class="r" role="row" style="grid-template-columns:1fr"><span role="cell">Aceeași afacere, dar cu taxe mai mari? Ce majorări de taxe aduce 2026.</span></div>
    <div class="r" role="row" style="grid-template-columns:1fr"><span role="cell">Contabilitatea este colaborare și predictibilitate: resurse umane, REGES-ONLINE și timpul.</span></div>
    <div class="r" role="row" style="grid-template-columns:1fr"><span role="cell">Diferența dintre o contabilitate de conformare și un partener financiar.</span></div>
  </div>
</div></section>

<section class="section" aria-labelledby="din-blog"><div class="wrap">
  <div class="sec-head">
    <h2 id="din-blog">Din blog</h2>
    <p>Alerte fiscale, articole practice și textele Gabrielei Dacu despre ce înseamnă să conduci o firmă.</p>
  </div>
  <div class="ledger posts" role="table" aria-label="Articole recente">
    <div class="r head" role="row"><span role="columnheader">Data</span><span role="columnheader">Titlu</span><span role="columnheader">Categorie</span></div>
{post_rows(POSTS[:3], with_excerpt=False)}
  </div>
  <p class="actions"><a href="blog.html">Toate articolele</a></p>
</div></section>

<section class="section" aria-labelledby="unde"><div class="wrap split">
  <div>
    <h2 id="unde">Unde ne găsești</h2>
    <p class="lead" style="margin-top:var(--sp-2)">Ne poți suna, scrie sau vizita la birou. Pentru o primă discuție, alege o oră care ți se potrivește.</p>
    <div class="actions"><a class="btn" href="contact.html#programare">Programează o discuție</a></div>
  </div>
  <dl class="ledger kv">
    <div class="r"><dt>Telefon</dt><dd><a href="tel:+40759011054">+40 759 011 054</a></dd></div>
    <div class="r"><dt>E-mail</dt><dd><a href="mailto:office@fiscontsrl.ro">office@fiscontsrl.ro</a></dd></div>
    <div class="r"><dt>Program</dt><dd>Luni–vineri, 9:00–18:00</dd></div>
    <div class="r"><dt>Birou</dt><dd>Bd. Unirii nr. 64, Bloc K4, scara 4, etaj 3, București</dd></div>
  </dl>
</div></section>"""
    page("index.html", "Fiscont | Contabilitate dincolo de cifre, București",
         "Fiscont Expert Consulting Solution: contabilitate, consultanță financiară, resurse umane și juridic pentru antreprenori. Membru CECCAR, activă din 2012, București.",
         "", body)


def build_despre():
    values = ["Integritate", "Transparență", "Calitate", "Orientare către client", "Flexibilitate", "Noutate", "Servicii complete"]
    body = f"""{page_head("Despre noi", "O echipă care îți explică cifrele",
        "Fiscont a fost înființată în 2012 de Gabriela Dacu, care are peste 20 de ani de experiență în contabilitate. Credem că informația contabilă și fiscală, de multe ori complexă, trebuie să fie ușor de înțeles și de aplicat. De aceea explicăm lucrurile simplu, fără să complicăm mesajul.")}

<section class="section" aria-labelledby="cum-lucram"><div class="wrap body-grid">
  <div class="text">
    <h2 id="cum-lucram">Cum începe o colaborare</h2>
    <ol class="steps">
      <li><div><b>Discuția inițială</b>Aflăm cum funcționează firma, ce documente există și ce termene se apropie.</div></li>
      <li><div><b>Preluarea evidenței</b>Preluăm documentele de la tine sau de la contabilul anterior și verificăm situația înainte de prima lună de lucru.</div></li>
      <li><div><b>Lucrul lunar</b>Primim documentele, le înregistrăm și depunem declarațiile la termen. Știi mereu cine se ocupă de firma ta.</div></li>
      <li><div><b>Discuții periodice</b>Îți explicăm rezultatele pe înțeles și ce urmează, fiscal și financiar.</div></li>
    </ol>
    <p class="small muted" style="margin-top:1rem">{TODO("Pași de validat cu echipa")}</p>
  </div>
  <aside>
    <dl class="ledger kv" aria-label="Date de identificare">
      <div class="r"><dt>Denumire</dt><dd>Fiscont Expert Consulting Solution SRL</dd></div>
      <div class="r"><dt>CUI</dt><dd>30138979</dd></div>
      <div class="r"><dt>Nr. Reg. Com.</dt><dd>J2012001192237</dd></div>
      <div class="r"><dt>Sediu social</dt><dd>Str. Smîrdan nr. 30, Bragadiru, jud. Ilfov</dd></div>
      <div class="r"><dt>Înființare</dt><dd>2012</dd></div>
      <div class="r"><dt>CECCAR</dt><dd>Membru, autorizația nr. 8032, filiala Ilfov, viză la zi<br><a class="small" href="https://ceccar.ro/ro/?page_id=97">Verifică pe ceccar.ro</a></dd></div>
      <div class="r"><dt>Protecția datelor</dt><dd>Responsabil: Luminița Gazi</dd></div>
    </dl>
  </aside>
</div></section>

<section class="section tinted" aria-labelledby="valori"><div class="wrap split">
  <div>
    <h2 id="valori">Ce ne ghidează</h2>
    <p style="margin-top:.6em;max-width:52ch">Nu comunicăm ca să arătăm cât de multe știm, ci ca să te ajutăm să înțelegi, simplu și rapid.</p>
    <ul class="values" style="margin-top:var(--sp-3)">
{chr(10).join(f"      <li>{v}</li>" for v in values)}
    </ul>
  </div>
  <figure class="quote">
    <blockquote><q>Cred în puterea cifrelor bine înțelese. Ele pot schimba modul în care îți conduci afacerea.</q></blockquote>
    <figcaption><b>Gabriela Dacu</b><span class="muted small">fondator Fiscont {TODO("atribuire de confirmat")}</span></figcaption>
  </figure>
</div></section>

<section class="team on-blue" id="echipa" aria-labelledby="h-echipa"><div class="wrap">
  <div class="sec-head">
    <h2 id="h-echipa">Echipa</h2>
    <p>Fotografiile și prezentările sunt ale oamenilor reali care lucrează la Fiscont.</p>
  </div>
{team_ledger("Echipa Fiscont", "Pe scurt", bios=True)}
</div></section>

<section class="section" aria-labelledby="domenii"><div class="wrap split">
  <div class="text">
    <h2 id="domenii">Domenii în care lucrăm</h2>
    <p style="margin-top:.6em">Avem experiență cu firme din agricultură, servicii, comerț, transporturi, precum și cu birouri notariale și cabinete medicale. Fiecare domeniu are reguli fiscale proprii, iar noi le urmărim pentru tine.</p>
  </div>
  <div class="aside-block">
    <h3>Clientul Fiscont</h3>
    <p>Antreprenorul care vrea mai mult decât contabilitate: direcție, stabilitate și creștere, construite cu claritate financiară.</p>
  </div>
</div></section>"""
    page("despre.html", "Despre noi | Fiscont",
         "Fiscont Expert Consulting Solution SRL: activă din 2012, membru CECCAR, echipă de contabili, economiști și specialiști în resurse umane.",
         "despre", body)


def build_servicii():
    rows = "\n".join(
        f'    <div class="r" role="row"><span role="cell"><h3><a href="{f}">{t}</a></h3></span><span role="cell">{s}</span>'
        f'<span role="cell" class="muted">{", ".join(items[:2])}</span></div>'
        for f, t, s, items in SERVICES)
    body = f"""{page_head("Servicii", "Servicii",
        "Patru domenii, o singură echipă. Nu publicăm prețuri: ele depind de firma ta și se discută la o întâlnire.")}

<section class="section"><div class="wrap">
  <div class="ledger svc" role="table" aria-label="Servicii Fiscont">
    <div class="r head" role="row"><span role="columnheader">Domeniu</span><span role="columnheader">Ce înseamnă</span><span role="columnheader">De exemplu</span></div>
{rows}
  </div>
  <div class="actions"><a class="btn" href="contact.html#programare">Programează o discuție</a></div>
</div></section>"""
    page("servicii.html", "Servicii | Fiscont",
         "Contabilitate și fiscalitate, consultanță și analiză financiară, resurse umane și salarizare, juridic. Fiscont, București.",
         "servicii", body)


def build_services():
    service_page(
        "contabilitate.html", "Contabilitate și fiscalitate",
        "Evidența completă a firmei tale, indiferent de mărime sau de domeniu, cu informații fiscale ținute la zi. Tu te ocupi de afacere; noi ne asigurăm că cifrele sunt corecte și la termen.",
        "Contabilitate și fiscalitate",
        "Evidență contabilă, declarații fiscale, situații financiare și consultanță fiscală. Fiscont, membru CECCAR, București.",
        ["Înregistrarea lunară a documentelor: facturi, extrase de cont, bonuri, contracte.",
         "Declarațiile fiscale și relația curentă cu ANAF.",
         "Situațiile financiare anuale.",
         "Consultanță fiscală pentru deciziile de zi cu zi ale firmei.",
         "Sprijin la verificările autorităților."],
        """
    <h2>Pentru cine</h2>
    <p>Lucrăm cu firme de mărimi diferite, din agricultură, servicii, comerț și transporturi, precum și cu birouri notariale și cabinete medicale.</p>
""",
        [("Cum schimb firma de contabilitate fără să pierd nimic?",
          "Stabilim împreună luna de la care preluăm evidența. Obținem documentele și balanțele de la contabilul anterior și verificăm situația înainte să începem lucrul lunar."),
         ("Ce documente trebuie să trimit?",
          "La începutul colaborării îți spunem exact ce documente ne trebuie, în ce formă și până la ce dată din lună, în funcție de activitatea firmei tale."),
         ("Cât costă?",
          "Depinde de volumul de documente, de numărul de angajați și de serviciile de care ai nevoie. Discutăm la prima întâlnire, după ce înțelegem cum funcționează firma.")],
        ["Gabriela Dacu", "Ileana Hagi", "Rareș Andreescu", "Ludmila Prisacariu", "Andreea Iordache"])

    service_page(
        "consultanta.html", "Consultanță și analiză financiară",
        "Un partener financiar transformă cifrele din simple raportări într-un instrument pentru creștere: înțelegi businessul, vezi oportunitățile și iei decizii fundamentate.",
        "Consultanță financiară",
        "Analiză financiară, bugete realiste și management financiar-strategic pentru antreprenori. Fiscont, București.",
        ["Analiza rezultatelor firmei, explicată pe înțelesul tău.",
         "Bugete realiste: de la cifra de afaceri la obiective financiare.",
         "Management financiar-strategic pentru creștere și scalare sustenabilă.",
         "Structurarea proceselor financiare din firmă."],
        """
    <h2>Pentru cine</h2>
    <p>Pentru antreprenorii care vor mai mult decât contabilitate: direcție, stabilitate și creștere. Diferența față de o contabilitate de conformare apare atunci când cifrele devin mai mult decât raportări.</p>
""",
        [("Care e diferența față de contabilitatea obișnuită?",
          "Contabilitatea de conformare se asigură că totul e înregistrat și declarat corect. Consultanța folosește aceleași cifre ca să te ajute să decizi: unde câștigi, unde pierzi și ce poți face diferit."),
         ("Cât costă?",
          "Depinde de ce ai nevoie: o analiză punctuală sau un sprijin constant. Discutăm la prima întâlnire.")],
        ["Gabriela Dacu", "Ileana Hagi"])

    service_page(
        "resurse-umane.html", "Resurse umane și salarizare",
        "Ne ocupăm de partea salarială și administrativă a echipei tale, în acord cu legislația muncii și cu regulile fiscale pentru salarii.",
        "Resurse umane",
        "Contracte de muncă, REGES-ONLINE, stat de plată, dosare de personal și documentație pentru indemnizații. Fiscont, București.",
        ["Contracte individuale de muncă și acte adiționale.",
         "Evidența salariaților în REGES-ONLINE, sistemul care a înlocuit REVISAL din 2026.",
         "Statul de plată și declarațiile legate de salarii.",
         "Dosarele de personal.",
         "Documentația pentru indemnizații.",
         "Protecția datelor personale ale angajaților."],
        "",
        [("Ce se întâmplă când angajez pe cineva?",
          "Ne trimiți datele persoanei și data la care începe. Pregătim contractul și ne ocupăm de înregistrarea în REGES-ONLINE în termenul prevăzut de lege."),
         ("Cine se ocupă de protecția datelor angajaților?",
          "Luminița Gazi, responsabilul nostru cu protecția datelor, te ajută cu documentele necesare pentru datele personale ale angajaților."),
         ("Pot externaliza doar salarizarea?",
          "Da. Resursele umane se pot contracta separat sau împreună cu contabilitatea. Discutăm la prima întâlnire ce se potrivește firmei tale.")],
        ["Luminița Gazi", "Carmen Ioana"])

    service_page(
        "juridic.html", "Juridic",
        "Revizuirea contractelor, asistență la Registrul Comerțului și răspunsuri la întrebările juridice ale firmei, împreună cu juriștii cu care colaborăm.",
        "Juridic",
        "Revizuirea contractelor, asistență la Registrul Comerțului și consultanță juridică punctuală sau lunară, prin juriști colaboratori.",
        ["Revizuirea contractelor comerciale.",
         "Asistență pentru înregistrări și modificări la Registrul Comerțului (ONRC).",
         "Consultanță punctuală, pentru o situație anume.",
         "Consultanță lunară, pentru firmele care au nevoie constant de sprijin."],
        """
    <h2>Cum lucrăm</h2>
    <p>Partea juridică o asigură juriști colaboratori, prin echipa Fiscont. Așa, informația contabilă, cea de resurse umane și cea juridică despre firma ta rămâne aceeași, iar tu ai un singur punct de contact.</p>
""",
        [("Cine îmi răspunde la întrebările juridice?",
          "Un jurist colaborator, prin intermediul echipei noastre. Îți spunem de la început cine este și cum lucrează."),
         ("Pot cere doar o consultanță, fără un contract lunar?",
          "Da. Poți alege o consultanță punctuală sau un pachet lunar.")],
        [("Juriști colaboratori", TODO("nume și calitate profesională")), "Luminița Gazi"])


def build_blog():
    filters = '    <button type="button" data-filter="toate" aria-pressed="true">Toate</button>\n' + "\n".join(
        f'    <button type="button" data-filter="{k}" aria-pressed="false">{v}</button>' for k, v in CATS.items())
    drafts = "\n".join(
        f'    <div class="r" role="row"><span role="cell" class="t"><a href="articol.html">{t}</a></span>'
        f'<span role="cell" class="{"c cat-alerta" if c == "alerte" else "c"}">{CATS[c]}</span><span role="cell" class="muted small">{src}</span></div>'
        for t, c, src in DRAFTS)
    body = f"""{page_head("Blog", "Blog",
        "Alerte fiscale, articole practice, seria FISCONT Talks și textele Gabrielei Dacu despre felul în care conduci o firmă.")}

<section class="section"><div class="wrap">
  <div class="filters" role="group" aria-label="Filtrează după categorie">
{filters}
  </div>
  <p id="filter-status" class="small muted" aria-live="polite" style="margin-bottom:1rem">{len(POSTS)} articole</p>

  <div class="ledger posts" role="table" aria-label="Articole">
    <div class="r head" role="row"><span role="columnheader">Data</span><span role="columnheader">Articol</span><span role="columnheader">Categorie</span></div>
{post_rows(POSTS)}
  </div>

  <div class="draft-note">
    <h2>Articole propuse, încă nepublicate</h2>
    <p class="small muted" style="margin-top:.4rem">Vizibile doar în această propunere. Temele vin din bannerele și materialele Fiscont; pe site apar după ce sunt scrise și verificate.</p>
    <div class="ledger posts" role="table" aria-label="Articole propuse">
      <div class="r head" role="row" style="grid-template-columns:minmax(0,1fr) 10rem 14rem"><span role="columnheader">Titlu propus</span><span role="columnheader">Categorie</span><span role="columnheader">Sursa temei</span></div>
{drafts.replace('class="r" role="row"', 'class="r" role="row" style="grid-template-columns:minmax(0,1fr) 10rem 14rem"')}
    </div>
  </div>
</div></section>"""
    page("blog.html", "Blog | Fiscont",
         "Alerte fiscale, FISCONT Talks, articole despre fiscalitate, resurse umane, legislație și leadership.",
         "blog", body)


def build_articol():
    body = f"""<article>
  <header class="article-head"><div class="wrap">
    <p class="small muted"><a class="muted" href="index.html">Acasă</a> / <a class="muted" href="blog.html">Blog</a> / Fiscal</p>
    <h1 style="margin-top:1rem">Cum pregătești documentele lunare pentru contabil</h1>
    <p class="deck">Un mod simplu de a strânge și trimite documentele, ca evidența firmei să fie completă și la termen, fără mesaje trimise în grabă la final de lună.</p>
    <div class="byline">
      <div class="who">{photo("Gabriela Dacu", "photo on-paper")}<div><b>Gabriela Dacu</b><span class="small muted">Fondator și CEO</span></div></div>
      <dl>
        <div><dt>Publicat</dt><dd>{TODO("data")}</dd></div>
        <div><dt>Citire</dt><dd data-reading-time>~2 min</dd></div>
        <div><dt>Categorie</dt><dd>Fiscal</dd></div>
      </dl>
    </div>
    <p class="small" style="margin-top:.8rem">{TODO("Articol demonstrativ pentru șablon, de revizuit de echipă înainte de publicare")}</p>
  </div></header>

  <div class="wrap body-grid article-body">
    <div class="prose">
      <p>Cele mai multe întârzieri într-o evidență contabilă nu vin din calcule greșite, ci din documente care ajung târziu sau incomplete. Vestea bună este că un obicei simplu, păstrat în fiecare lună, rezolvă aproape toată problema.</p>

      <h2>Grupează documentele pe tipuri</h2>
      <p>Ține separat facturile emise, facturile primite, extrasele de cont, bonurile și contractele noi. Când fiecare tip are locul lui, observi imediat dacă lipsește ceva, iar contabilul nu trebuie să ghicească ce reprezintă un document.</p>

      <h2>Folosește un singur canal</h2>
      <p>Documentele trimise o dată pe e-mail, o dată pe telefon și o dată printr-o aplicație se pierd ușor. Alege împreună cu contabilul un singur canal și folosește-l tot timpul.</p>
      <blockquote><p>Un document care lipsește se poate recupera. Un document despre care nu știe nimeni este cel care creează probleme.</p></blockquote>

      <h2>Respectă data convenită</h2>
      <p>La începutul colaborării stabilim o dată din lună până la care primim documentele. Dacă o respecți, avem timp să verificăm totul înainte de termenele de declarare, nu doar să înregistrăm în grabă.</p>

      <h2>Spune când lipsește ceva</h2>
      <p>Dacă un furnizor întârzie o factură sau un extras nu e încă disponibil, anunță-ne. Așa putem planifica, în loc să descoperim golul la final de lună.</p>

      <p class="source">Acest articol descrie bune practici de lucru, nu obligații legale. Pentru termenele și documentele care se aplică firmei tale, întreabă-ne direct.</p>
    </div>

    <aside aria-labelledby="pe-scurt">
      <div class="summary">
        <h2 id="pe-scurt">Pe scurt</h2>
        <dl>
          <div><dt>Ce trimiți</dt><dd>Facturi emise și primite, extrase, bonuri, contracte noi</dd></div>
          <div><dt>Cum</dt><dd>Grupate pe tipuri, pe un singur canal</dd></div>
          <div><dt>Când</dt><dd>Până la data convenită în fiecare lună</dd></div>
          <div><dt>Dacă lipsește ceva</dt><dd>Anunță-ne din timp</dd></div>
        </dl>
      </div>
    </aside>
  </div>

  <div class="wrap" style="padding-bottom:var(--sp-5)">
    <section class="author" aria-label="Despre autor">
      {photo("Gabriela Dacu", "photo on-paper lg")}
      <div>
        <h2 style="font-size:1.25rem">Gabriela Dacu</h2>
        <p class="muted small" style="margin-top:.2rem">Fondator și CEO Fiscont</p>
        <p style="margin-top:.8rem;max-width:60ch">Are peste 20 de ani de experiență în contabilitate și a fondat Fiscont în 2012. Scrie despre contabilitate, finanțe și ce înseamnă să conduci o firmă.</p>
      </div>
    </section>
    <p class="disclaimer">Articolele au caracter informativ și nu înlocuiesc consultanța pentru situația concretă a firmei tale. Legislația se schimbă; verifică data publicării sau întreabă-ne.</p>

    <section style="margin-top:var(--sp-5)" aria-labelledby="similare">
      <h2 id="similare" style="font-size:1.3rem;margin-bottom:1rem">Alte articole</h2>
      <div class="ledger posts" role="table" aria-label="Alte articole">
{post_rows(POSTS[:2], with_excerpt=False)}
      </div>
    </section>
  </div>
</article>"""
    page("articol.html", "Cum pregătești documentele lunare pentru contabil | Blog Fiscont",
         "Un mod simplu de a strânge și trimite documentele lunare, ca evidența firmei să fie completă și la termen.",
         "blog", body)


def build_contact():
    body = f"""{page_head("Contact", "Contact",
        "Sună-ne, scrie-ne sau alege o oră pentru o discuție online. Răspundem în timpul programului, de luni până vineri.")}

<section class="section"><div class="wrap split">
  <dl class="ledger kv">
    <div class="r"><dt>Telefon</dt><dd><a href="tel:+40759011054">+40 759 011 054</a></dd></div>
    <div class="r"><dt>E-mail</dt><dd><a href="mailto:office@fiscontsrl.ro">office@fiscontsrl.ro</a></dd></div>
    <div class="r"><dt>Program</dt><dd>Luni–vineri, 9:00–18:00</dd></div>
    <div class="r"><dt>Birou</dt><dd>Bd. Unirii nr. 64, Bloc K4, scara 4, etaj 3, București</dd></div>
  </dl>
  <div class="aside-block" id="programare">
    <h2 style="font-size:1.4rem">Discuție online</h2>
    <p style="margin-top:.5rem">Alege o oră liberă din calendar. Discuția durează {TODO("__ minute")} și ne ajută să înțelegem firma ta înainte de orice propunere.</p>
    <div class="actions"><a class="btn" href="#">Alege o oră în calendar</a></div>
    <p class="small muted" style="margin-top:.75rem">{TODO("link Calendly real")} Programarea se face pe calendly.com, care are propria politică de confidențialitate.</p>
  </div>
</div></section>

<section class="section" aria-labelledby="harta"><div class="wrap">
  <h2 id="harta">Cum ajungi la birou</h2>
  <div class="map">
    <div>
      <p>Harta este furnizată de Google și se încarcă doar dacă apeși butonul, ca să nu trimitem date către Google fără acordul tău.</p>
      <button class="btn btn-line" type="button" data-load-map>Afișează harta</button>
      <p class="small" style="margin-top:1rem;margin-bottom:0"><a href="https://www.google.com/maps/search/?api=1&amp;query=Bulevardul+Unirii+64+Bucuresti">Deschide adresa în Google Maps</a></p>
    </div>
  </div>
</div></section>

<section class="section" aria-labelledby="date"><div class="wrap split">
  <div>
    <h2 id="date">Date de identificare</h2>
    <p class="muted" style="margin-top:.5rem">Pentru contracte, facturi și corespondență oficială.</p>
  </div>
  <dl class="ledger kv">
    <div class="r"><dt>Denumire</dt><dd>Fiscont Expert Consulting Solution SRL</dd></div>
    <div class="r"><dt>CUI</dt><dd>30138979</dd></div>
    <div class="r"><dt>Nr. Reg. Com.</dt><dd>J2012001192237</dd></div>
    <div class="r"><dt>Sediu social</dt><dd>Str. Smîrdan nr. 30, Bragadiru, jud. Ilfov</dd></div>
    <div class="r"><dt>CECCAR</dt><dd>Membru, autorizația nr. 8032, filiala Ilfov, viză la zi</dd></div>
  </dl>
</div></section>"""
    page("contact.html", "Contact | Fiscont",
         "Telefon +40 759 011 054, office@fiscontsrl.ro, Bd. Unirii nr. 64, București. Luni–vineri, 9:00–18:00.",
         "contact", body)


def build_confidentialitate():
    body = f"""{page_head("Confidențialitate", "Confidențialitate și cookie-uri",
        "Ce date prelucrăm când ne vizitezi site-ul sau ne contactezi, de ce le prelucrăm și ce drepturi ai.",
        f'\n  <p class="small" style="margin-top:1rem">{TODO("Proiect de text, de validat de responsabilul cu protecția datelor înainte de publicare")}</p>')}

<section class="section"><div class="wrap">
  <div class="text">
    <h2>Cine prelucrează datele</h2>
    <p>Fiscont Expert Consulting Solution SRL, CUI 30138979, Nr. Reg. Com. J2012001192237, cu sediul social în Str. Smîrdan nr. 30, Bragadiru, jud. Ilfov și biroul în Bd. Unirii nr. 64, București. Pentru orice întrebare despre datele tale, scrie-ne la <a href="mailto:office@fiscontsrl.ro">office@fiscontsrl.ro</a>. Responsabilul nostru cu protecția datelor este Luminița Gazi.</p>

    <h2>Ce date prelucrăm</h2>
    <ul>
      <li>Datele pe care ni le trimiți când ne scrii sau ne suni: nume, e-mail, telefon, conținutul mesajului.</li>
      <li>Datele pe care le completezi când programezi o discuție online prin Calendly.</li>
      <li>Date statistice despre folosirea site-ului, doar dacă accepți cookie-urile de analiză.</li>
    </ul>

    <h2>De ce le prelucrăm</h2>
    <p>Ca să îți răspundem, să organizăm discuția pe care ai cerut-o și, dacă devii client, să îndeplinim contractul și obligațiile legale. Nu vindem datele și nu le folosim pentru reclame.</p>

    <h2>Cât timp le păstrăm</h2>
    <p>{TODO("de completat, pe categorii de date")}</p>

    <h2 id="cookie">Cookie-uri</h2>
    <p>Site-ul folosește cookie-uri strict necesare pentru funcționare. Cookie-urile de analiză se activează doar dacă apeși „Accept” în mesajul afișat la prima vizită. Harta Google de pe pagina de contact se încarcă doar dacă o ceri.</p>

    <h2>Drepturile tale</h2>
    <p>Ai dreptul să ceri acces la datele tale, rectificarea, ștergerea sau restricționarea lor, portabilitatea lor și să te opui prelucrării. Dacă nu ești mulțumit de răspunsul nostru, poți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).</p>
  </div>
</div></section>"""
    page("confidentialitate.html", "Confidențialitate și cookie-uri | Fiscont",
         "Cum prelucrează Fiscont datele personale ale vizitatorilor și ale persoanelor care ne contactează.",
         "", body)


if __name__ == "__main__":
    build_index()
    build_despre()
    build_servicii()
    build_services()
    build_blog()
    build_articol()
    build_contact()
    build_confidentialitate()
