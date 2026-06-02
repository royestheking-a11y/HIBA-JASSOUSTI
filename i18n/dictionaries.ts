export type Language = 'en' | 'fr';

export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    research: 'Research',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  loading: {
    subtitle: 'Architect · Designer · Researcher'
  },
  sectionCards: {
    quote: 'Architecture is the thoughtful making of space.',
    basedIn: 'Based in Tunis, Tunisia',
    cards: [
      {
        num: '01',
        title: 'ABOUT ME',
        desc: 'Get to know my journey, passion and design philosophy.',
        cta: 'Discover',
      },
      {
        num: '02',
        title: 'PROJECTS',
        desc: 'Architectural, interior and academic works.',
        cta: 'Explore',
      },
      {
        num: '03',
        title: 'EXPERIENCE',
        desc: 'My professional experience and collaborations.',
        cta: 'More',
      },
      {
        num: '04',
        title: 'DESIGN JOURNAL',
        desc: 'Research, thoughts and inspirations.',
        cta: 'Read',
      },
    ]
  },
  hero: {
    subtitle: 'ARCHITECT & DESIGNER',
    description: 'Crafting spaces that resonate with history while embracing modern elegance. Specialized in high-end residential and cultural architecture.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
  },
  about: {
    sectionNum: '01 · ABOUT',
    titleLine1: 'Designing with',
    titleLine2: 'Purpose',
    description1: 'I am a Tunisian architect deeply inspired by the rich cultural tapestry of North Africa. My work explores the delicate balance between preserving ancestral heritage and creating spaces that respond to modern needs.',
    description2: 'With experience spanning from traditional Djerbian restoration to contemporary urban interventions, I approach each project as a unique narrative waiting to be told through materials, light, and form.',
    stat1Value: '5+',
    stat1Label: 'Years Experience',
    stat2Value: '20+',
    stat2Label: 'Projects Completed',
    stat3Value: '3',
    stat3Label: 'Awards Won',
    downloadCv: 'Download CV',
    architectTitle: 'Architect · Tunis, Tunisia',
    journeyTitle: 'My Journey',
    journey: [
      { year: '2019', title: 'Architecture Studies Begin', desc: 'Enrolled at the National School of Architecture and Urban Planning (ENAU), Tunis.', color: '#7a8c7b' },
      { year: '2021', title: 'First Internship', desc: 'Worked with a leading Tunis architecture studio on residential and commercial projects.', color: '#9a946b' },
      { year: '2022', title: 'Restoration Project', desc: 'Led documentation and design for heritage restoration in the Djerba medina.', color: '#c47d78' },
      { year: '2023', title: 'AUDA Collaboration', desc: 'Collaborated with the Tunisian Urban Development Agency on urban regeneration studies.', color: '#7a8c7b' },
      { year: '2026', title: 'A4 Architecture', desc: 'Joined A4 Architecture as a project designer, focusing on cultural and heritage projects.', color: '#628096' },
    ]
  },
  skills: {
    sectionNum: '06 · SKILLS',
    titleLine1: 'Tools &',
    titleLine2: 'Expertise',
    architectTitle: 'Architect',
    coreCompetencies: 'Core Competencies',
    languagesTitle: 'Languages',
    softSkills: [
      'Critical Thinking', 'Design Research', 'Project Management',
      'Heritage Conservation', 'Bioclimatic Design', 'Urban Analysis',
      '3D Visualization', 'Client Presentation',
    ],
    languages: [
      { lang: 'Arabic', level: 'Native', pct: 100, color: 'var(--fern)' },
      { lang: 'French', level: 'Fluent', pct: 90, color: 'var(--pistachio)' },
      { lang: 'English', level: 'Professional', pct: 80, color: 'var(--bluebell)' },
    ]
  },
  experience: {
    sectionNum: '03 · EXPERIENCE',
    titleLine1: 'Professional',
    titleLine2: 'Journey',
    downloadCv: 'Download Full CV',
    keyResponsibilities: 'Key Responsibilities',
    list: [
      {
        id: 1,
        company: 'A4 Architecture',
        role: 'Project Designer',
        period: '2026 – Present',
        location: 'Tunis, Tunisia',
        description: 'Designing cultural and heritage-focused architectural projects. Leading concept development and 3D visualization.',
        responsibilities: [
          'Developing architectural concepts for residential and hospitality projects',
          'Producing technical drawings using AutoCAD and Revit',
          '3D modeling and visualization with SketchUp, Lumion, and D5 Render',
          'Client presentations and design development',
        ],
        skills: ['AutoCAD', 'Revit', 'SketchUp', 'D5 Render', 'Lumion'],
      },
      {
        id: 2,
        company: 'AUDA',
        role: 'Research Collaborator',
        period: '2023',
        location: 'Tunis, Tunisia',
        description: 'Collaborated on urban regeneration studies for the Tunisian Urban Development Agency.',
        responsibilities: [
          'Urban site analysis and mapping',
          'Heritage building documentation',
          'Developing urban design proposals',
          'Research report writing and visualization',
        ],
        skills: ['Urban Design', 'GIS', 'Heritage Documentation', 'AutoCAD'],
      },
      {
        id: 3,
        company: 'Architecture Studio Internship',
        role: 'Architectural Intern',
        period: '2021 – 2022',
        location: 'Tunis, Tunisia',
        description: 'Worked across residential, commercial and restoration projects under senior architects.',
        responsibilities: [
          'Assisting with concept design and schematic design phases',
          'Producing construction drawings and details',
          'Site visits and construction supervision support',
          'Model making and physical prototyping',
        ],
        skills: ['AutoCAD', 'Photoshop', 'Illustrator', 'Model Making'],
      }
    ]
  },
  research: {
    sectionNum: '04 · RESEARCH',
    titleLine1: 'Research &',
    titleLine2: 'Scholarship',
    description: 'My research explores the intersection of heritage architecture, bioclimatic design, and cultural identity in the Mediterranean North African context.',
    featured: 'Featured Research',
    featuredTitle: 'Rehabilitation of a Menzel in Djerba',
    featuredDesc: 'A comprehensive study of the Menzel typology in Djerba, examining bioclimatic strategies, spatial organization, and material culture. The research proposes a rehabilitation methodology that balances conservation with adaptive reuse for contemporary living.',
    viewFull: 'View Full Research',
    beforeAfterTitle: 'Before & After Restoration',
    sliderHint: 'Drag the slider to compare the historic building and the restored design',
    papers: 'papers',
    categories: [
      { cat: 'Heritage', count: 4, color: 'var(--fern)' },
      { cat: 'Urbanism', count: 3, color: 'var(--pistachio)' },
      { cat: 'Culture & Tourism', count: 2, color: 'var(--peony)' },
    ]
  },
  projects: {
    sectionNum: '05 · SELECTED WORKS',
    titleLine1: 'Featured',
    titleLine2: 'Projects',
    viewAll: 'Explore All Projects',
    subtitle: 'A curated selection\nof my work.',
    explore: 'Explore',
    list: [
      {
        id: 1,
        num: '01',
        name: 'Menzel Djerba',
        category: 'Restoration',
        year: '2023',
        location: 'Djerba, Tunisia',
        desc: 'Heritage rehabilitation of a traditional Tunisian Menzel, preserving cultural identity through contemporary intervention.',
        img: '/images/project_restoration_1780327598333.png',
        color: 'var(--fern)',
      },
      {
        id: 2,
        num: '02',
        name: 'Coastal Residence',
        category: 'Residential',
        year: '2022',
        location: 'Tunis, Tunisia',
        desc: 'A luxury private residence merging North African architectural language with modern Mediterranean living.',
        img: '/images/project_residential_1780327581514.png',
        color: 'var(--pistachio)',
      },
      {
        id: 3,
        num: '03',
        name: 'Riad Hospitality',
        category: 'Hospitality',
        year: '2021',
        location: 'Sousse, Tunisia',
        desc: 'Boutique hotel design rooted in Tunisian courtyard typology, zellige craftsmanship and biophilic design.',
        img: '/images/project_hospitality_1780327670356.png',
        color: 'var(--cherry-blossom)',
      },
      {
        id: 4,
        num: '04',
        name: 'AUDA Urban Study',
        category: 'Urban Research',
        year: '2023',
        location: 'Tunis, Tunisia',
        desc: 'Collaborative urban development research with the Tunisian Urban Development Agency.',
        img: '/images/hero section.png',
        color: 'var(--bluebell)',
      },
    ]
  },
  projectExplorer: {
    sectionNum: '06 · ARCHIVE',
    featuredProject: 'Featured Project',
    titleLine1: 'Project',
    titleLine2: 'Explorer',
    exploreProject: 'Explore project',
    all: 'All',
    architecture: 'Architecture',
    interior: 'Interior',
    heritage: 'Heritage',
    urban: 'Urban Design',
    hoverHint: '🖱 Hover hotspots to explore',
    projectName: 'Menzel Djerba',
    projectMeta: 'Menzel Djerba · Restoration · 2023',
    tabs: [
      {
        id: 'concept',
        label: 'Concept',
        color: 'var(--fern)',
        content: {
          title: 'Design Concept',
          text: 'Inspired by the traditional Djerba Menzel typology — compact courtyards, thick limestone walls protecting from heat, pointed arches framing views to the sea. The project proposes a dialogue between memory and the contemporary, maintaining the proportions of heritage while introducing light through carefully placed openings.',
          tag: 'Heritage × Contemporary',
        },
      },
      {
        id: 'plans',
        label: 'Plans',
        color: 'var(--pistachio)',
        content: {
          title: 'Floor Plans',
          text: 'Ground floor: entrance riad, salon, kitchen and service area. First floor: three bedrooms with private terraces. Roof: communal terrace with pergola and panoramic views. The circulation flows around a central courtyard that acts as the bioclimatic heart of the building.',
          tag: 'Ground + First + Roof',
        },
      },
      {
        id: 'renders',
        label: 'Renders',
        color: 'var(--peony)',
        content: {
          title: '3D Visualizations',
          text: 'Photorealistic renders produced in D5 Render, showing the building at different times of day — dawn light catching the limestone texture, golden hour reflections on the pool, and the warm glow of lanterns at night. Vegetation is native Mediterranean species.',
          tag: 'D5 Render · Lumion',
        },
      },
      {
        id: 'research',
        label: 'Research',
        color: 'var(--bluebell)',
        content: {
          title: 'Research Background',
          text: 'Based on field studies of traditional Menzel typologies across Djerba island, documenting 47 heritage structures. Analysis of bioclimatic strategies: courtyard orientation, wall thickness, wind-catcher placement, and the relationship between built form and landscape.',
          tag: 'Heritage Documentation',
        },
      },
    ]
  },
  gallery: {
    sectionNum: '07 · GALLERY',
    titleLine1: 'Visual',
    titleLine2: 'Archive',
    viewMore: 'View More on Instagram',
    categories: ['All', 'Sketches', 'Models', 'Renders', 'Construction', 'Site Visits'],
    items: [
      { id: 1, src: '/images/project_residential_1780327581514.png', alt: 'Coastal residence render', cat: 'Renders', height: 'tall' },
      { id: 2, src: '/images/exploreproject.png', alt: 'Menzel Djerba 3D model', cat: 'Models', height: 'normal' },
      { id: 3, src: '/images/project_hospitality_1780327670356.png', alt: 'Boutique hotel courtyard', cat: 'Renders', height: 'normal' },
      { id: 4, src: '/images/project_menzel_before_1780327703098.png', alt: 'Menzel before restoration', cat: 'Site Visits', height: 'short' },
      { id: 5, src: '/images/project_restoration_1780327598333.png', alt: 'Heritage restoration', cat: 'Construction', height: 'tall' },
      { id: 6, src: '/images/hero section.png', alt: 'Villa architecture in Djerba', cat: 'Renders', height: 'normal' },
    ]
  },
  contact: {
    sectionNum: '08 · CONTACT',
    titleLine1: "Let's",
    titleLine2: 'Connect',
    quote: 'Architecture is the thoughtful making of space. Every conversation is the beginning of a new idea.',
    email: 'Email',
    linkedin: 'LinkedIn',
    location: 'Location',
    downloadCv: 'Download CV',
    sendMessageTitle: 'Send a Message',
    messageSent: 'Message Sent!',
    messageThanks: "Thank you — I'll be in touch soon.",
    yourName: 'Your Name',
    emailAddress: 'Email Address',
    message: 'Message',
    placeholderName: 'Hiba Jassousti',
    placeholderEmail: 'hello@example.com',
    placeholderMessage: 'Tell me about your project...',
    sendBtn: 'Send Message',
    footerName: 'HIBA JASSOUSTI',
    rights: 'All rights reserved',
    designedBy: 'Designed and Developed by'
  }
};

export const fr = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    experience: 'Expérience',
    research: 'Recherche',
    gallery: 'Galerie',
    contact: 'Contact',
  },
  loading: {
    subtitle: 'Architecte · Designer · Chercheur'
  },
  sectionCards: {
    quote: 'L\'architecture est la création réfléchie de l\'espace.',
    basedIn: 'Basé à Tunis, Tunisie',
    cards: [
      {
        num: '01',
        title: 'À PROPOS',
        desc: 'Découvrez mon parcours, ma passion et ma philosophie de design.',
        cta: 'Découvrir',
      },
      {
        num: '02',
        title: 'PROJETS',
        desc: 'Travaux architecturaux, d\'intérieur et académiques.',
        cta: 'Explorer',
      },
      {
        num: '03',
        title: 'EXPÉRIENCE',
        desc: 'Mon expérience professionnelle et mes collaborations.',
        cta: 'Plus',
      },
      {
        num: '04',
        title: 'JOURNAL DE DESIGN',
        desc: 'Recherches, réflexions et inspirations.',
        cta: 'Lire',
      },
    ]
  },
  hero: {
    subtitle: 'ARCHITECTE & DESIGNER',
    description: "Créer des espaces qui résonnent avec l'histoire tout en adoptant l'élégance moderne. Spécialisée dans l'architecture résidentielle et culturelle haut de gamme.",
    viewProjects: 'Voir les Projets',
    contactMe: 'Me Contacter',
  },
  about: {
    sectionNum: '01 · À PROPOS',
    titleLine1: 'Concevoir avec',
    titleLine2: 'Intention',
    description1: "Je suis une architecte tunisienne profondément inspirée par la riche tapisserie culturelle de l'Afrique du Nord. Mon travail explore l'équilibre délicat entre la préservation de l'héritage ancestral et la création d'espaces qui répondent aux besoins modernes.",
    description2: 'Avec une expérience allant de la restauration traditionnelle djerbienne aux interventions urbaines contemporaines, j\'aborde chaque projet comme un récit unique qui attend d\'être raconté à travers les matériaux, la lumière et la forme.',
    stat1Value: '5+',
    stat1Label: "Années d'expérience",
    stat2Value: '20+',
    stat2Label: 'Projets Réalisés',
    stat3Value: '3',
    stat3Label: 'Prix Remportés',
    downloadCv: 'Télécharger le CV',
    architectTitle: 'Architecte · Tunis, Tunisie',
    journeyTitle: 'Mon Parcours',
    journey: [
      { year: '2019', title: 'Début des Études', desc: "Inscrite à l'École Nationale d'Architecture et d'Urbanisme (ENAU), Tunis.", color: '#7a8c7b' },
      { year: '2021', title: 'Premier Stage', desc: 'A travaillé avec un cabinet d\'architecture de premier plan à Tunis sur des projets résidentiels et commerciaux.', color: '#9a946b' },
      { year: '2022', title: 'Projet de Restauration', desc: 'A dirigé la documentation et la conception de la restauration du patrimoine dans la médina de Djerba.', color: '#c47d78' },
      { year: '2023', title: 'Collaboration AUDA', desc: 'A collaboré avec l\'Agence Tunisienne de Développement Urbain sur des études de régénération urbaine.', color: '#7a8c7b' },
      { year: '2026', title: 'A4 Architecture', desc: 'A rejoint A4 Architecture en tant que conceptrice de projets, en se concentrant sur les projets culturels et patrimoniaux.', color: '#628096' },
    ]
  },
  skills: {
    sectionNum: '06 · COMPÉTENCES',
    titleLine1: 'Outils &',
    titleLine2: 'Expertise',
    architectTitle: 'Architecte',
    coreCompetencies: 'Compétences de Base',
    languagesTitle: 'Langues',
    softSkills: [
      'Pensée Critique', 'Recherche en Design', 'Gestion de Projet',
      'Conservation du Patrimoine', 'Design Bioclimatique', 'Analyse Urbaine',
      'Visualisation 3D', 'Présentation Client',
    ],
    languages: [
      { lang: 'Arabe', level: 'Natif', pct: 100, color: 'var(--fern)' },
      { lang: 'Français', level: 'Courant', pct: 90, color: 'var(--pistachio)' },
      { lang: 'Anglais', level: 'Professionnel', pct: 80, color: 'var(--bluebell)' },
    ]
  },
  experience: {
    sectionNum: '03 · EXPÉRIENCE',
    titleLine1: 'Parcours',
    titleLine2: 'Professionnel',
    downloadCv: 'Télécharger le CV',
    keyResponsibilities: 'Responsabilités Clés',
    list: [
      {
        id: 1,
        company: 'A4 Architecture',
        role: 'Concepteur de Projet',
        period: '2026 – Présent',
        location: 'Tunis, Tunisie',
        description: 'Conception de projets architecturaux axés sur la culture et le patrimoine. Direction du développement de concepts et de la visualisation 3D.',
        responsibilities: [
          'Développement de concepts architecturaux pour des projets résidentiels et hôteliers',
          'Production de dessins techniques à l\'aide d\'AutoCAD et Revit',
          'Modélisation et visualisation 3D avec SketchUp, Lumion et D5 Render',
          'Présentations aux clients et développement de la conception',
        ],
        skills: ['AutoCAD', 'Revit', 'SketchUp', 'D5 Render', 'Lumion'],
      },
      {
        id: 2,
        company: 'AUDA',
        role: 'Collaborateur de Recherche',
        period: '2023',
        location: 'Tunis, Tunisie',
        description: 'Collaboration à des études de régénération urbaine pour l\'Agence de Développement Urbain Tunisienne.',
        responsibilities: [
          'Analyse et cartographie de sites urbains',
          'Documentation de bâtiments patrimoniaux',
          'Développement de propositions de design urbain',
          'Rédaction de rapports de recherche et visualisation',
        ],
        skills: ['Design Urbain', 'SIG', 'Documentation du Patrimoine', 'AutoCAD'],
      },
      {
        id: 3,
        company: 'Stage en Studio d\'Architecture',
        role: 'Stagiaire en Architecture',
        period: '2021 – 2022',
        location: 'Tunis, Tunisie',
        description: 'Travail sur des projets résidentiels, commerciaux et de restauration sous la direction d\'architectes confirmés.',
        responsibilities: [
          'Assistance aux phases de conception et d\'avant-projet',
          'Production de dessins de construction et de détails',
          'Visites de chantiers et soutien à la supervision de la construction',
          'Fabrication de maquettes et prototypage physique',
        ],
        skills: ['AutoCAD', 'Photoshop', 'Illustrator', 'Maquettisme'],
      }
    ]
  },
  research: {
    sectionNum: '04 · RECHERCHE',
    titleLine1: 'Recherche &',
    titleLine2: 'Érudition',
    description: 'Ma recherche explore l\'intersection de l\'architecture patrimoniale, du design bioclimatique et de l\'identité culturelle dans le contexte méditerranéen nord-africain.',
    featured: 'Recherche Phare',
    featuredTitle: 'Réhabilitation d\'un Menzel à Djerba',
    featuredDesc: 'Une étude complète de la typologie du Menzel à Djerba, examinant les stratégies bioclimatiques, l\'organisation spatiale et la culture matérielle. La recherche propose une méthodologie de réhabilitation qui équilibre la conservation avec la réutilisation adaptative pour la vie contemporaine.',
    viewFull: 'Voir la Recherche Complète',
    beforeAfterTitle: 'Avant & Après Restauration',
    sliderHint: 'Faites glisser le curseur pour comparer le bâtiment historique et le design restauré',
    papers: 'articles',
    categories: [
      { cat: 'Patrimoine', count: 4, color: 'var(--fern)' },
      { cat: 'Urbanisme', count: 3, color: 'var(--pistachio)' },
      { cat: 'Culture & Tourisme', count: 2, color: 'var(--peony)' },
    ]
  },
  projects: {
    sectionNum: '05 · SÉLECTION',
    titleLine1: 'Projets',
    titleLine2: 'Phares',
    viewAll: 'Explorer Tous les Projets',
    subtitle: 'Une sélection minutieuse\nde mon travail.',
    explore: 'Explorer',
    list: [
      {
        id: 1,
        num: '01',
        name: 'Menzel Djerba',
        category: 'Restauration',
        year: '2023',
        location: 'Djerba, Tunisie',
        desc: 'Réhabilitation patrimoniale d\'un Menzel tunisien traditionnel, préservant l\'identité culturelle par une intervention contemporaine.',
        img: '/images/project_restoration_1780327598333.png',
        color: 'var(--fern)',
      },
      {
        id: 2,
        num: '02',
        name: 'Résidence Côtière',
        category: 'Résidentiel',
        year: '2022',
        location: 'Tunis, Tunisie',
        desc: 'Une résidence privée de luxe fusionnant le langage architectural nord-africain avec la vie méditerranéenne moderne.',
        img: '/images/project_residential_1780327581514.png',
        color: 'var(--pistachio)',
      },
      {
        id: 3,
        num: '03',
        name: 'Hospitalité Riad',
        category: 'Hôtellerie',
        year: '2021',
        location: 'Sousse, Tunisie',
        desc: 'Design d\'hôtel boutique enraciné dans la typologie de la cour tunisienne, l\'artisanat du zellige et le design biophilique.',
        img: '/images/project_hospitality_1780327670356.png',
        color: 'var(--cherry-blossom)',
      },
      {
        id: 4,
        num: '04',
        name: 'Étude Urbaine AUDA',
        category: 'Recherche Urbaine',
        year: '2023',
        location: 'Tunis, Tunisie',
        desc: 'Recherche collaborative en développement urbain avec l\'Agence de Développement Urbain Tunisienne.',
        img: '/images/hero section.png',
        color: 'var(--bluebell)',
      },
    ]
  },
  projectExplorer: {
    sectionNum: '06 · ARCHIVES',
    featuredProject: 'Projet Phare',
    titleLine1: 'Explorateur',
    titleLine2: 'De Projets',
    exploreProject: 'Explorer le projet',
    all: 'Tous',
    architecture: 'Architecture',
    interior: 'Intérieur',
    heritage: 'Patrimoine',
    urban: 'Design Urbain',
    hoverHint: '🖱 Survolez les points pour explorer',
    projectName: 'Menzel Djerba',
    projectMeta: 'Menzel Djerba · Restauration · 2023',
    tabs: [
      {
        id: 'concept',
        label: 'Concept',
        color: 'var(--fern)',
        content: {
          title: 'Concept de Design',
          text: 'Inspiré par la typologie traditionnelle du Menzel djerbien — cours compactes, murs épais en pierre calcaire protégeant de la chaleur, arcs brisés encadrant les vues sur la mer. Le projet propose un dialogue entre la mémoire et le contemporain, en conservant les proportions du patrimoine tout en introduisant la lumière par des ouvertures soigneusement placées.',
          tag: 'Patrimoine × Contemporain',
        },
      },
      {
        id: 'plans',
        label: 'Plans',
        color: 'var(--pistachio)',
        content: {
          title: 'Plans d\'étage',
          text: 'Rez-de-chaussée : riad d\'entrée, salon, cuisine et espace de service. Premier étage : trois chambres avec terrasses privées. Toit : terrasse commune avec pergola et vues panoramiques. La circulation s\'articule autour d\'une cour centrale qui agit comme le cœur bioclimatique du bâtiment.',
          tag: 'RDC + 1er + Toit',
        },
      },
      {
        id: 'renders',
        label: 'Rendus',
        color: 'var(--peony)',
        content: {
          title: 'Visualisations 3D',
          text: 'Rendus photoréalistes produits dans D5 Render, montrant le bâtiment à différents moments de la journée — la lumière de l\'aube accrochant la texture du calcaire, les reflets de l\'heure dorée sur la piscine, et la lueur chaude des lanternes la nuit. La végétation est composée d\'espèces méditerranéennes indigènes.',
          tag: 'D5 Render · Lumion',
        },
      },
      {
        id: 'research',
        label: 'Recherche',
        color: 'var(--bluebell)',
        content: {
          title: 'Contexte de Recherche',
          text: 'Basé sur des études de terrain des typologies de Menzel traditionnelles à travers l\'île de Djerba, documentant 47 structures patrimoniales. Analyse des stratégies bioclimatiques : orientation de la cour, épaisseur des murs, placement des capteurs de vent, et relation entre la forme bâtie et le paysage.',
          tag: 'Documentation du Patrimoine',
        },
      },
    ]
  },
  gallery: {
    sectionNum: '07 · GALERIE',
    titleLine1: 'Archive',
    titleLine2: 'Visuelle',
    viewMore: 'Voir Plus sur Instagram',
    categories: ['Tous', 'Croquis', 'Maquettes', 'Rendus', 'Construction', 'Visites de Site'],
    items: [
      { id: 1, src: '/images/project_residential_1780327581514.png', alt: 'Rendu de résidence côtière', cat: 'Rendus', height: 'tall' },
      { id: 2, src: '/images/exploreproject.png', alt: 'Modèle 3D Menzel Djerba', cat: 'Maquettes', height: 'normal' },
      { id: 3, src: '/images/project_hospitality_1780327670356.png', alt: 'Cour d\'hôtel boutique', cat: 'Rendus', height: 'normal' },
      { id: 4, src: '/images/project_menzel_before_1780327703098.png', alt: 'Menzel avant restauration', cat: 'Visites de Site', height: 'short' },
      { id: 5, src: '/images/project_restoration_1780327598333.png', alt: 'Restauration du patrimoine', cat: 'Construction', height: 'tall' },
      { id: 6, src: '/images/hero section.png', alt: 'Architecture de villa Djerba', cat: 'Rendus', height: 'normal' },
    ]
  },
  contact: {
    sectionNum: '08 · CONTACT',
    titleLine1: "Restons en",
    titleLine2: 'Contact',
    quote: '"L\'architecture est la création réfléchie de l\'espace. Chaque conversation est le début d\'une nouvelle idée."',
    email: 'Email',
    linkedin: 'LinkedIn',
    location: 'Localisation',
    downloadCv: 'Télécharger le CV',
    sendMessageTitle: 'Envoyer un Message',
    messageSent: 'Message Envoyé !',
    messageThanks: "Merci — Je vous contacterai bientôt.",
    yourName: 'Votre Nom',
    emailAddress: 'Adresse Email',
    message: 'Message',
    placeholderName: 'Hiba Jassousti',
    placeholderEmail: 'bonjour@exemple.com',
    placeholderMessage: 'Parlez-moi de votre projet...',
    sendBtn: 'Envoyer le Message',
    footerName: 'HIBA JASSOUSTI',
    rights: 'Tous droits réservés',
    designedBy: 'Conçu et Développé par'
  }
};

export const dictionaries = {
  en,
  fr
};

export type Dictionary = typeof en;
export type TranslationKey = 
  | keyof Dictionary
  | `nav.${keyof typeof en.nav}`
  | `hero.${keyof typeof en.hero}`
  | `about.${keyof typeof en.about}`
  | `skills.${keyof typeof en.skills}`
  | `experience.${keyof typeof en.experience}`
  | `research.${keyof typeof en.research}`
  | `projects.${keyof typeof en.projects}`
  | `projectExplorer.${keyof typeof en.projectExplorer}`
  | `gallery.${keyof typeof en.gallery}`
  | `contact.${keyof typeof en.contact}`
  | `sectionCards.${keyof typeof en.sectionCards}`
  | `loading.${keyof typeof en.loading}`;
