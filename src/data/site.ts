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
    role: 'Fondator și CEO',
    area: 'Contabilitate, consultanță financiară',
    bio: 'Peste 20 de ani de experiență în contabilitate. A fondat Fiscont în 2012.',
    photo: 'gabriela-dacu.jpg',
  },
  {
    name: 'Ileana Hagi',
    role: 'Economist senior și consultant fiscal',
    area: 'Fiscalitate',
    bio: 'Ghidează clienții prin legislația fiscală.',
    photo: 'ileana-hagi.jpg',
  },
  {
    name: 'Luminița Gazi',
    role: 'Expert în legislația muncii, responsabil cu protecția datelor',
    area: 'Resurse umane, GDPR',
    bio: 'În echipa Fiscont din 2016.',
    photo: 'luminita-gazi.jpg',
  },
  {
    name: 'Carmen Ioana',
    role: 'Economist senior, șef birou operațiuni clienți',
    area: 'Relația cu clienții',
    bio: 'Coordonează operațiunile cu clienții.',
    photo: 'carmen-ioana.jpg',
  },
  {
    name: 'Rareș Andreescu',
    role: 'Expert contabil',
    area: 'Contabilitate',
    bio: 'Expert contabil în echipa Fiscont.',
    photo: 'rares-andreescu.jpg',
  },
  {
    name: 'Ludmila Prisacariu',
    role: 'Specialist contabil',
    area: 'Contabilitate',
    bio: '2 rânduri despre parcurs',
    photo: null,
    todoBio: true,
  },
  {
    name: 'Andreea Iordache',
    role: 'Specialist contabil',
    area: 'Contabilitate',
    bio: '2 rânduri despre parcurs',
    photo: null,
    todoBio: true,
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
    people: [
      'Gabriela Dacu',
      'Ileana Hagi',
      'Rareș Andreescu',
      'Ludmila Prisacariu',
      'Andreea Iordache',
    ],
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
  {
    slug: 'juridic',
    title: 'Juridic',
    summary:
      'Contracte, Registrul Comerțului și întrebările juridice curente, împreună cu juriștii cu care colaborăm.',
    items: [
      'Revizuirea contractelor',
      'Asistență la ONRC',
      'Consultanță punctuală sau lunară',
    ],
    lead:
      'Revizuirea contractelor, asistență la Registrul Comerțului și răspunsuri la întrebările juridice ale firmei, împreună cu juriștii cu care colaborăm.',
    description:
      'Revizuirea contractelor, asistență la Registrul Comerțului și consultanță juridică punctuală sau lunară, prin juriști colaboratori.',
    covers: [
      'Revizuirea contractelor comerciale.',
      'Asistență pentru înregistrări și modificări la Registrul Comerțului (ONRC).',
      'Consultanță punctuală, pentru o situație anume.',
      'Consultanță lunară, pentru firmele care au nevoie constant de sprijin.',
    ],
    faqs: [
      {
        q: 'Cine îmi răspunde la întrebările juridice?',
        a: 'Un jurist colaborator, prin intermediul echipei noastre. Îți spunem de la început cine este și cum lucrează.',
      },
      {
        q: 'Pot cere doar o consultanță, fără un contract lunar?',
        a: 'Da. Poți alege o consultanță punctuală sau un pachet lunar.',
      },
    ],
    people: [
      { name: 'Juriști colaboratori', role: 'nume și calitate profesională', todo: true },
      'Luminița Gazi',
    ],
    extraHtml: `<h2>Cum lucrăm</h2>
    <p>Partea juridică o asigură juriști colaboratori, prin echipa Fiscont. Așa, informația contabilă, cea de resurse umane și cea juridică despre firma ta rămâne aceeași, iar tu ai un singur punct de contact.</p>`,
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
  {
    title: 'Cum pregătești documentele lunare pentru contabil',
    category: 'fiscal' as const,
    source: 'articol demonstrativ din șablon',
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
  url: 'https://almasanmihai.github.io/ssm-su-expert-safetywork/',
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

export const nav = [
  { key: 'despre', href: '/despre', label: 'Despre noi' },
  { key: 'servicii', href: '/servicii', label: 'Servicii' },
  { key: 'blog', href: '/blog', label: 'Blog' },
  { key: 'contact', href: '/contact', label: 'Contact' },
] as const;
