export type TeamMember = {
  name: string;
  role: string;
  area: string;
  bio: string;
  photo: string | null;
  todoBio?: boolean;
};

export const team: TeamMember[] = [
  {
    name: 'Gabriela Dacu',
    role: 'Fondator și CEO, expert contabil, consultant fiscal',
    area: 'Contabilitate, consultanță financiară',
    bio: 'Peste 20 de ani de experiență în contabilitate. A fondat Fiscont în 2012, cu viziunea de a deveni un partener de încredere pentru afaceri.',
    photo: 'gabriela-dacu.jpg',
  },
  {
    name: 'Ileana Hagi',
    role: 'Senior contabil, departamentul de contabilitate',
    area: 'Fiscalitate',
    bio: 'Ghidează clienții prin complexitatea legislației fiscale, cu soluții clare și aplicate.',
    photo: 'ileana-hagi.jpg',
  },
  {
    name: 'Luminița Gazi',
    role: 'Expert legislația muncii, resurse umane și administrare contracte',
    area: 'Resurse umane, GDPR',
    bio: 'Din 2016, contribuie la aplicarea corectă a legislației muncii și a regulilor privind protecția datelor.',
    photo: 'luminita-gazi.jpg',
  },
  {
    name: 'Carmen Ioana',
    role: 'Team leader contabilitate, senior contabil',
    area: 'Relația cu clienții',
    bio: 'Coordonează operațiunile cu clienții, punând accent pe colaborare, organizare și calitatea serviciilor.',
    photo: 'carmen-ioana.jpg',
  },
  {
    name: 'Rareș Andreescu',
    role: 'Expert contabil senior, departamentul de contabilitate',
    area: 'Contabilitate',
    bio: 'De 9 ani în echipa Fiscont, contribuie la dezvoltarea companiei prin profesionalism, integritate și implicare.',
    photo: 'rares-andreescu.jpg',
  },
];

export const roleByName = Object.fromEntries(team.map((m) => [m.name, m.role]));
export const photoByName = Object.fromEntries(team.map((m) => [m.name, m.photo]));

export type Service = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
  lead: string;
  description: string;
  covers: string[];
  faqs: { q: string; a: string }[];
  people: (string | { name: string; role: string; todo?: boolean })[];
  extraHtml?: string;
};

export const services: Service[] = [
  {
    slug: 'contabilitate',
    title: 'Contabilitate și fiscalitate',
    summary:
      'Evidența completă a firmei, de la documentele lunare la situațiile financiare anuale, cu informații fiscale ținute la zi.',
    items: [
      'Evidență contabilă lunară',
      'Declarații fiscale',
      'Situații financiare anuale',
      'Consultanță fiscală',
    ],
    lead:
      'Evidența completă a firmei tale, indiferent de mărime sau de domeniu, cu informații fiscale ținute la zi. Tu te ocupi de afacere; noi ne asigurăm că cifrele sunt corecte și la termen.',
    description:
      'Evidență contabilă, declarații fiscale, situații financiare și consultanță fiscală. Fiscont, membru CECCAR, București.',
    covers: [
      'Înregistrarea lunară a documentelor: facturi, extrase de cont, bonuri, contracte.',
      'Declarațiile fiscale și relația curentă cu ANAF.',
      'Situațiile financiare anuale.',
      'Consultanță fiscală pentru deciziile de zi cu zi ale firmei.',
      'Sprijin la verificările autorităților.',
    ],
    faqs: [
      {
        q: 'Cum schimb firma de contabilitate fără să pierd nimic?',
        a: 'Stabilim împreună luna de la care preluăm evidența. Obținem documentele și balanțele de la contabilul anterior și verificăm situația înainte să începem lucrul lunar.',
      },
      {
        q: 'Ce documente trebuie să trimit?',
        a: 'La începutul colaborării îți spunem exact ce documente ne trebuie, în ce formă și până la ce dată din lună, în funcție de activitatea firmei tale.',
      },
      {
        q: 'Cât costă?',
        a: 'Depinde de volumul de documente, de numărul de angajați și de serviciile de care ai nevoie. Discutăm la prima întâlnire, după ce înțelegem cum funcționează firma.',
      },
    ],
    people: ['Gabriela Dacu', 'Ileana Hagi', 'Rareș Andreescu'],
    extraHtml: `<h2>Pentru cine</h2>
    <p>Lucrăm cu firme de mărimi diferite, din agricultură, servicii, comerț și transporturi, precum și cu birouri notariale și cabinete medicale.</p>`,
  },
  {
    slug: 'consultanta',
    title: 'Consultanță și analiză financiară',
    summary:
      'Cifrele devin un instrument de decizie: înțelegi businessul, vezi oportunitățile și îți stabilești obiectivele.',
    items: [
      'Analiză financiară pe înțelesul tău',
      'Bugete și obiective realiste',
      'Management financiar-strategic',
    ],
    lead:
      'Un partener financiar transformă cifrele din simple raportări într-un instrument pentru creștere: înțelegi businessul, vezi oportunitățile și iei decizii fundamentate.',
    description:
      'Analiză financiară, bugete realiste și management financiar-strategic pentru antreprenori. Fiscont, București.',
    covers: [
      'Analiza rezultatelor firmei, explicată pe înțelesul tău.',
      'Bugete realiste: de la cifra de afaceri la obiective financiare.',
      'Management financiar-strategic pentru creștere și scalare sustenabilă.',
      'Structurarea proceselor financiare din firmă.',
    ],
    faqs: [
      {
        q: 'Care e diferența față de contabilitatea obișnuită?',
        a: 'Contabilitatea de conformare se asigură că totul e înregistrat și declarat corect. Consultanța folosește aceleași cifre ca să te ajute să decizi: unde câștigi, unde pierzi și ce poți face diferit.',
      },
      {
        q: 'Cât costă?',
        a: 'Depinde de ce ai nevoie: o analiză punctuală sau un sprijin constant. Discutăm la prima întâlnire.',
      },
    ],
    people: ['Gabriela Dacu', 'Ileana Hagi'],
    extraHtml: `<h2>Pentru cine</h2>
    <p>Pentru antreprenorii care vor mai mult decât contabilitate: direcție, stabilitate și creștere. Diferența față de o contabilitate de conformare apare atunci când cifrele devin mai mult decât raportări.</p>`,
  },
  {
    slug: 'resurse-umane',
    title: 'Resurse umane și salarizare',
    summary:
      'Partea salarială și administrativă a echipei tale, în acord cu legislația muncii.',
    items: ['Contracte de muncă', 'REGES-ONLINE', 'Stat de plată', 'Dosare de personal'],
    lead:
      'Ne ocupăm de partea salarială și administrativă a echipei tale, în acord cu legislația muncii și cu regulile fiscale pentru salarii.',
    description:
      'Contracte de muncă, REGES-ONLINE, stat de plată, dosare de personal și documentație pentru indemnizații. Fiscont, București.',
    covers: [
      'Contracte individuale de muncă și acte adiționale.',
      'Evidența salariaților în REGES-ONLINE, sistemul care a înlocuit REVISAL din 2026.',
      'Statul de plată și declarațiile legate de salarii.',
      'Dosarele de personal.',
      'Documentația pentru indemnizații.',
      'Protecția datelor personale ale angajaților.',
    ],
    faqs: [
      {
        q: 'Ce se întâmplă când angajez pe cineva?',
        a: 'Ne trimiți datele persoanei și data la care începe. Pregătim contractul și ne ocupăm de înregistrarea în REGES-ONLINE în termenul prevăzut de lege.',
      },
      {
        q: 'Cine se ocupă de protecția datelor angajaților?',
        a: 'Luminița Gazi, responsabilul nostru cu protecția datelor, te ajută cu documentele necesare pentru datele personale ale angajaților.',
      },
      {
        q: 'Pot externaliza doar salarizarea?',
        a: 'Da. Resursele umane se pot contracta separat sau împreună cu contabilitatea. Discutăm la prima întâlnire ce se potrivește firmei tale.',
      },
    ],
    people: ['Luminița Gazi', 'Carmen Ioana'],
  },
];

export const drafts = [
  {
    title: 'Ce se schimbă atunci când ANAF te invită la audiere',
    category: 'alerte' as const,
    source: 'din bannerul „Alertă informativă”',
  },
  {
    title: 'Amortizare, TVA, cheltuială deductibilă: diferențele care contează',
    category: 'talks' as const,
    source: 'din seria FISCONT Talks',
  },
  {
    title: 'Ce majorări de taxe aduce 2026',
    category: 'talks' as const,
    source: 'din seria FISCONT Talks',
  },
  {
    title: 'Resurse umane și REGES-ONLINE: de ce contează timpul',
    category: 'talks' as const,
    source: 'din seria FISCONT Talks',
  },
  {
    title: 'Cum construiești un buget realist: de la cifra de afaceri la obiective financiare',
    category: 'leadership' as const,
    source: 'material de Gabriela Dacu',
  },
];

/** Subset pe homepage: oamenii cheie, fără registrul complet. */
export const homeTeam = team.filter((m) =>
  ['Gabriela Dacu', 'Ileana Hagi', 'Luminița Gazi', 'Carmen Ioana', 'Rareș Andreescu'].includes(
    m.name,
  ),
);

/** Stratul de decizie al ecosistemului — site dedicat fiscontprint.ro */
export const proiecte = {
  title: 'Fiscont Proiecte',
  lead:
    'Evidența contabilă rămâne la Fiscont. Proiecte preiau cifrele și le transformă în decizii, structură și oameni care știu ce au de făcut.',
  url: 'https://fiscontprint.ro/',
  items: [
    {
      title: 'Rapoarte de tip CFO',
      summary: 'Semnale lunare pentru conducere, din balanțe și note contabile.',
    },
    {
      title: 'Audit intern',
      summary: 'Controale, fluxuri și riscuri din zona financiară, pe hartă.',
    },
    {
      title: 'Reorganizare financiară',
      summary: 'Roluri, procese și raportări când businessul a crescut mai repede decât echipa.',
    },
    {
      title: 'Departament financiar de la zero',
      summary: 'Organigramă, proceduri și digitalizare până la autonomia echipei.',
    },
  ],
} as const;

/** SSM / PSI / SU — TCA SAFEWORK, parte din ecosistemul Fiscont */
export const ssm = {
  title: 'TCA SAFEWORK',
  lead:
    'Un singur furnizor pentru SSM și PSI / situații de urgență: un abonament, un contract, un om de contact — documentele nu se contrazic la control.',
  url: 'https://tcasafework.ro/',
  items: [
    {
      title: 'Documentație SSM',
      summary: 'Evaluare riscuri, plan de prevenire, fișe de instructaj.',
    },
    {
      title: 'PSI / situații de urgență',
      summary: 'Dosar PSI, plan de evacuare și documentație SU.',
    },
    {
      title: 'Instruiri și asistență',
      summary: 'Instruiri la termen și consultanță de specialitate.',
    },
    {
      title: 'Reprezentare la control',
      summary: 'La control, suntem acolo — documente actualizate.',
    },
  ],
} as const;

/** Recenzii publicate pe site-ul actual, în ordinea caruselului. */
export const reviews = [
  {
    quote:
      'Sunt foarte mulțumit de colaborarea cu FISCONT. De fiecare dată când am solicitat ceva, am primit rapid răspunsuri și soluții — uneori chiar mai mult decât am cerut. Apreciez mult faptul că am numerele de telefon ale colegilor și pot vorbi direct cu o persoană. În 2025, când multe companii mari folosesc doar roboți, e o reală diferență să poți avea o interacțiune umană. În toți acești ani, nu am încasat nicio amendă — ceea ce spune totul despre profesionalismul echipei.',
    author: 'Zeki Med SRL',
  },
  {
    quote:
      'Apreciez mult că am alături o echipă de încredere, că nu există întrebări „stupide” și că pot conta pe sprijinul lor oricând. Pentru mine, acest lucru este extrem de important. Momentan totul este în regulă — oameni foarte faini și o colaborare care îmi oferă liniște.',
    author: 'Develop Concept SRL',
  },
  {
    quote:
      'Colaborarea este foarte bună, lucrurile se desfășoară fluid și primim răspunsuri rapide. Ne bucurăm că totul ajunge la timp și că găsim întotdeauna soluții împreună. Pentru viitor, ne-ar ajuta și mai mult o consultanță proactivă pe partea financiar-contabilă — interpretarea rezultatelor, analiza balanței și evidențierea oportunităților de optimizare fiscală.',
    author: 'Cemado Trade International SRL',
  },
  {
    quote:
      'Doamna Carmen răspunde mereu prompt ori de câte ori sun, iar informațiile primite au fost întotdeauna corecte, complete și susținute legislativ. Totul la timp. Întreaga echipă FISCONT este, practic, interfața mea cu autoritățile, iar faptul că în toți acești ani nu am avut nicio problemă spune totul despre cât de mulțumit sunt. Chiar dacă ne leagă o prietenie veche, colaborarea noastră s-a construit profesional, iar astăzi pot spune cu toată sinceritatea că nu aș schimba nimic. Interacțiunea cu toți colegii este excelentă. Pe o scară de la 1 la 10, aleg 10 — fără ezitare.',
    author: 'Light Plus SRL',
  },
  {
    quote:
      'Totul este în regulă. Colegele sunt foarte profesioniste și prompte, iar faptul că m-ați sunat pentru a cere feedback mi-a arătat încă o dată atenția voastră la detalii. Apreciez!',
    author: 'Savu Tatiana',
  },
  {
    quote:
      'Apreciem mult eficiența colaborării cu FISCONT. Faptul că toate documentele sunt încărcate pe server face lucrurile mult mai rapide și mai simple. Nevoile noastre sunt acoperite complet, iar asta ne oferă încredere și liniște — nu simțim că ne lipsește ceva.',
    author: 'Dental Optim SRL',
  },
  {
    quote:
      'Totul a funcționat foarte bine. Întreaga colaborare a decurs impecabil, fără probleme. Nu am simțit niciodată nevoia să cer simplificarea proceselor sau a procedurilor — ceea ce, pentru mine, este un semn clar că lucrurile sunt bine gândite și eficient implementate.',
    author: 'Magic Speed SRL',
  },
] as const;

/** Logo-urile din caruselul de industrii de pe site-ul actual. */
export const industries = [
  { name: 'Turquoise Bakery', file: 'turquoise-bakery.png' },
  { name: 'Introlife', file: 'introlife.png' },
  { name: 'Bomar Solution', file: 'bomar-solution.png' },
  { name: 'Mostiro', file: 'mostiro.png' },
  { name: 'Pamro Solutions', file: 'pamro.png' },
  { name: 'Morem', file: 'morem.jpg' },
  { name: 'Global Fast', file: 'global-fast.png' },
  { name: 'Apa Cargo Services', file: 'apa-cargo.jpeg' },
  { name: 'Royal Trans', file: 'royal-trans.png' },
  { name: 'Fluid System', file: 'fluid-system.png' },
  { name: 'SSM Group', file: 'ssm-group.png' },
] as const;

export const nav = [
  { key: 'despre', href: '/despre', label: 'Despre noi' },
  { key: 'servicii', href: '/servicii', label: 'Servicii' },
  { key: 'blog', href: '/blog', label: 'Blog' },
  { key: 'contact', href: '/contact', label: 'Contact' },
] as const;
