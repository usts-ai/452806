export interface Article {
  id: number;
  titre: string;
  contenu: string;
  codeName: string;
  section: string;
  datePublication: string;
  isAbonne: boolean;
}

export const articlesJuridiques: Article[] = [
  {
    id: 1,
    titre: "Article 1 - Dispositions générales",
    contenu: "Les présentes dispositions s'appliquent aux sociétés commerciales et aux groupements d'intérêt économique soumis aux dispositions du présent Acte uniforme.",
    codeName: "Code OHADA",
    section: "Droit des sociétés commerciales",
    datePublication: "17 avril 1997",
    isAbonne: false
  },
  {
    id: 2,
    titre: "Article 2 - Forme des sociétés commerciales",
    contenu: "Les sociétés commerciales peuvent être créées sous la forme de société en nom collectif, de société en commandite simple, de société à responsabilité limitée ou de société anonyme.",
    codeName: "Code OHADA",
    section: "Droit des sociétés commerciales",
    datePublication: "17 avril 1997",
    isAbonne: false
  },
  {
    id: 3,
    titre: "Article 3 - Définition de la société",
    contenu: "La société commerciale est créée par deux ou plusieurs personnes qui conviennent, par un contrat, d'affecter à une activité des biens en numéraire ou en nature, dans le but de partager le bénéfice ou de profiter de l'économie qui pourra en résulter.",
    codeName: "Code OHADA",
    section: "Droit des sociétés commerciales",
    datePublication: "17 avril 1997",
    isAbonne: true
  },
  {
    id: 4,
    titre: "Article 4 - Personnalité juridique",
    contenu: "Toute société commerciale a la personnalité juridique à compter de son immatriculation au registre du commerce et du crédit mobilier, à moins que le présent Acte uniforme en dispose autrement.",
    codeName: "Code OHADA",
    section: "Droit des sociétés commerciales",
    datePublication: "17 avril 1997",
    isAbonne: true
  },
  {
    id: 5,
    titre: "Article 5 - Siège social",
    contenu: "Le siège social doit être fixé par les statuts sur le territoire d'un des États parties. Il constitue le domicile juridique de la société.",
    codeName: "Code OHADA",
    section: "Droit des sociétés commerciales",
    datePublication: "17 avril 1997",
    isAbonne: true
  }
];

export const codesOHADA = [
  { id: 1, nom: "Droit Commercial Général", articleCount: 97 },
  { id: 2, nom: "Droit des Sociétés Commerciales", articleCount: 146 },
  { id: 3, nom: "Organisation des Procédures Collectives", articleCount: 258 },
  { id: 4, nom: "Procédures Simplifiées de Recouvrement", articleCount: 66 },
  { id: 5, nom: "Droit de l'Arbitrage", articleCount: 51 },
  { id: 6, nom: "Droit Comptable", articleCount: 113 },
  { id: 7, nom: "Contrats de Transport de Marchandises", articleCount: 29 },
  { id: 8, nom: "Sociétés Coopératives", articleCount: 397 }
];

export const actualitesJuridiques = [
  {
    id: 1,
    titre: "Nouvelle réforme du droit OHADA des sûretés",
    resume: "L'OHADA a adopté un nouvel Acte uniforme portant organisation des sûretés qui modernise l'approche juridique des garanties dans l'espace OHADA.",
    date: "15 avril 2025",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    titre: "Conférence internationale sur le droit OHADA à Dakar",
    resume: "Les experts juridiques de 17 pays se réunissent pour discuter de l'évolution du droit OHADA et son impact sur l'économie africaine.",
    date: "3 mars 2025",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    titre: "Jurisprudence récente sur les sociétés commerciales",
    resume: "Une décision importante de la Cour Commune de Justice clarifie l'interprétation des dispositions relatives à la responsabilité des dirigeants.",
    date: "28 février 2025",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export const prixAbonnements = [
  {
    id: 1,
    titre: "Formule Découverte",
    prix: 29.99,
    periode: "mois",
    description: "Accès limité au Code OHADA",
    caracteristiques: [
      "Consultation des articles de base",
      "Recherche simple",
      "Mises à jour trimestrielles"
    ]
  },
  {
    id: 2,
    titre: "Formule Professionnel",
    prix: 79.99,
    periode: "mois",
    description: "Accès complet au Code OHADA",
    caracteristiques: [
      "Consultation intégrale de tous les articles",
      "Recherche avancée",
      "Téléchargement d'articles (limité)",
      "Mises à jour mensuelles",
      "Actualités juridiques exclusives"
    ]
  },
  {
    id: 3,
    titre: "Formule Cabinet",
    prix: 199.99,
    periode: "mois",
    description: "Solution complète pour cabinets juridiques",
    caracteristiques: [
      "Tout ce qu'inclut la formule Professionnel",
      "Accès multi-utilisateurs (jusqu'à 5)",
      "API d'intégration",
      "Support prioritaire 24/7",
      "Formations et webinaires exclusifs"
    ]
  }
];

export const temoignages = [
  {
    id: 1,
    nom: "Me. Amadou Diallo",
    fonction: "Avocat, Cabinet Diallo & Associés",
    texte: "Ce service a révolutionné ma pratique juridique. L'accès facile aux textes OHADA me permet de gagner un temps précieux dans mes recherches et consultations.",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    id: 2,
    nom: "Mme. Fatou Ndiaye",
    fonction: "Juriste d'entreprise, Groupe Sonatel",
    texte: "Indispensable pour tout professionnel du droit en Afrique. L'interface intuitive et la richesse du contenu en font un outil de travail quotidien pour notre équipe juridique.",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    id: 3,
    nom: "M. Jean-Pierre Kouassi",
    fonction: "Professeur de Droit, Université d'Abidjan",
    texte: "Je recommande cette plateforme à tous mes étudiants. Elle offre une approche moderne de l'apprentissage du droit OHADA avec des contenus toujours à jour.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg"
  }
];
