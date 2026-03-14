export type Lang = "en" | "fr";

export const translations = {
  nav: {
    home: { en: "Home", fr: "Accueil" },
    about: { en: "About", fr: "À propos" },
    services: { en: "Services", fr: "Services" },
    expertise: { en: "Expertise", fr: "Expertise" },
    startups: { en: "Startups", fr: "Startups" },
    outsourcing: { en: "Outsourcing", fr: "Externalisation" },
    space: { en: "Space", fr: "Espace" },
    programs: { en: "Programs", fr: "Programmes" },
    projects: { en: "Projects", fr: "Projets" },
    contact: { en: "Contact", fr: "Contact" },
    sales: { en: "Sales", fr: "Ventes" },
    startProject: { en: "Start a Project", fr: "Lancer un Projet" },
  },
  hero: {
    headline: {
      en: "Build Your Digital Products With Top African Tech Talent",
      fr: "Créez Vos Produits Numériques Avec les Meilleurs Talents Tech Africains",
    },
    subheadline: {
      en: "West Digital Hub helps startups and companies design, build and scale digital products through consulting, development and tech outsourcing.",
      fr: "West Digital Hub aide les startups et entreprises à concevoir, développer et mettre à l'échelle des produits numériques grâce au conseil, au développement et à l'externalisation technologique.",
    },
    cta1: { en: "Start a Project", fr: "Lancer un Projet" },
    cta2: { en: "Book a Call", fr: "Réserver un Appel" },
    cta3: { en: "View Services", fr: "Voir les Services" },
  },
  about: {
    title: { en: "Who We Are", fr: "Qui Sommes-Nous" },
    tagline: { en: "Build in Africa. Deliver to the World.", fr: "Construire en Afrique. Livrer au Monde." },
    description: {
      en: "West Digital Hub is a technology and innovation hub based in Bafoussam, Cameroon. We support startups, entrepreneurs and companies by providing consulting, digital product development and tech outsourcing services. Our mission is to help organizations build scalable digital products while leveraging Africa's growing tech talent.",
      fr: "West Digital Hub est un hub technologique et d'innovation basé à Bafoussam, Cameroun. Nous accompagnons les startups, entrepreneurs et entreprises en fournissant des services de conseil, de développement de produits numériques et d'externalisation technologique. Notre mission est d'aider les organisations à créer des produits numériques évolutifs en tirant parti du talent tech croissant de l'Afrique.",
    },
    stats: {
      countries: { en: "Countries Served", fr: "Pays Desservis" },
      projects: { en: "Projects Delivered", fr: "Projets Livrés" },
      developers: { en: "Developers", fr: "Développeurs" },
      clients: { en: "Happy Clients", fr: "Clients Satisfaits" },
    },
  },
  services: {
    title: { en: "Our Services", fr: "Nos Services" },
    subtitle: { en: "High-quality development at competitive cost", fr: "Développement de haute qualité à un coût compétitif" },
    consulting: {
      title: { en: "IT Consulting", fr: "Conseil IT" },
      description: { en: "Strategic guidance for your digital transformation journey", fr: "Accompagnement stratégique pour votre transformation numérique" },
      items: {
        en: ["Product strategy", "Technology architecture", "Digital transformation", "Startup MVP roadmap"],
        fr: ["Stratégie produit", "Architecture technologique", "Transformation digitale", "Feuille de route MVP startup"],
      },
    },
    development: {
      title: { en: "Product Development", fr: "Développement Produit" },
      description: { en: "End-to-end product design, development and deployment", fr: "Conception, développement et déploiement de produits de bout en bout" },
      items: {
        en: ["Web applications", "Mobile apps", "SaaS platforms", "AI solutions", "Blockchain development"],
        fr: ["Applications web", "Applications mobiles", "Plateformes SaaS", "Solutions IA", "Développement blockchain"],
      },
    },
    outsourcing: {
      title: { en: "Tech Outsourcing", fr: "Externalisation Tech" },
      description: { en: "Scale your team with top African developers", fr: "Renforcez votre équipe avec les meilleurs développeurs africains" },
      items: {
        en: ["Dedicated developers", "Remote engineering teams", "Project-based development", "CTO as a service"],
        fr: ["Développeurs dédiés", "Équipes d'ingénierie à distance", "Développement par projet", "CTO en tant que service"],
      },
    },
  },
  whyUs: {
    title: { en: "Why Work With Us", fr: "Pourquoi Travailler Avec Nous" },
    items: [
      { en: "Access to top African tech talent", fr: "Accès aux meilleurs talents tech africains", icon: "Users" as const },
      { en: "Cost-effective development", fr: "Développement à coût compétitif", icon: "TrendingDown" as const },
      { en: "Agile product development", fr: "Développement produit agile", icon: "Zap" as const },
      { en: "International collaboration", fr: "Collaboration internationale", icon: "Globe" as const },
      { en: "Scalable tech teams", fr: "Équipes tech évolutives", icon: "Scale" as const },
    ],
  },
  expertise: {
    title: { en: "Expertise & Technologies", fr: "Expertise & Technologies" },
    items: [
      { en: "Artificial Intelligence", fr: "Intelligence Artificielle", icon: "Brain" as const },
      { en: "Web Development", fr: "Développement Web", icon: "Globe" as const },
      { en: "Mobile Development", fr: "Développement Mobile", icon: "Smartphone" as const },
      { en: "Blockchain", fr: "Blockchain", icon: "Link" as const },
      { en: "Cloud Infrastructure", fr: "Infrastructure Cloud", icon: "Cloud" as const },
      { en: "Cybersecurity", fr: "Cybersécurité", icon: "Shield" as const },
      { en: "Data & Analytics", fr: "Data & Analytique", icon: "BarChart3" as const },
      { en: "DevOps", fr: "DevOps", icon: "Settings" as const },
    ],
  },
  startups: {
    title: { en: "Build Your Startup With Us", fr: "Construisez Votre Startup Avec Nous" },
    description: {
      en: "West Digital Hub helps founders validate their ideas, build MVPs, develop scalable platforms and launch products faster. From concept to market, we are your technology partner.",
      fr: "West Digital Hub aide les fondateurs à valider leurs idées, construire des MVPs, développer des plateformes évolutives et lancer des produits plus rapidement. Du concept au marché, nous sommes votre partenaire technologique.",
    },
    features: {
      en: ["Idea validation & strategy", "MVP development", "Scalable platform architecture", "Go-to-market tech support"],
      fr: ["Validation d'idées & stratégie", "Développement MVP", "Architecture de plateforme évolutive", "Support tech pour la mise sur le marché"],
    },
    cta: { en: "Launch Your Startup", fr: "Lancez Votre Startup" },
  },
  outsourcingSection: {
    title: { en: "Scale Your Tech Team Globally", fr: "Développez Votre Équipe Tech à l'Échelle Mondiale" },
    description: {
      en: "International companies can work with West Digital Hub to access skilled developers and reduce development costs. Build dedicated remote teams tailored to your project needs.",
      fr: "Les entreprises internationales peuvent travailler avec West Digital Hub pour accéder à des développeurs qualifiés et réduire les coûts de développement. Constituez des équipes distantes dédiées adaptées à vos besoins.",
    },
    cta: { en: "Hire Developers", fr: "Recruter des Développeurs" },
  },
  space: {
    title: { en: "West Digital Hub Space", fr: "Espace West Digital Hub" },
    subtitle: { en: "Innovation meets collaboration", fr: "L'innovation rencontre la collaboration" },
    items: {
      en: ["Coworking space", "Private offices", "Meeting rooms", "Innovation programs", "Hackathons", "Tech events"],
      fr: ["Espace coworking", "Bureaux privés", "Salles de réunion", "Programmes d'innovation", "Hackathons", "Événements tech"],
    },
  },
  projects: {
    title: { en: "Our Projects", fr: "Nos Projets" },
    subtitle: { en: "Digital products and startup collaborations", fr: "Produits numériques et collaborations startup" },
    items: [
      {
        title: { en: "FinTech Payment Platform", fr: "Plateforme de Paiement FinTech" },
        desc: { en: "A mobile-first payment solution for cross-border transactions in Africa.", fr: "Une solution de paiement mobile-first pour les transactions transfrontalières en Afrique." },
        tags: ["React Native", "Node.js", "Stripe"],
        image: "fintech",
      },
      {
        title: { en: "AgriTech Marketplace", fr: "Marketplace AgriTech" },
        desc: { en: "Connecting farmers directly to buyers through an intelligent supply chain platform.", fr: "Connecter les agriculteurs directement aux acheteurs via une plateforme intelligente de chaîne d'approvisionnement." },
        tags: ["Next.js", "Python", "AI/ML"],
        image: "agritech",
      },
      {
        title: { en: "HealthTech Telemedicine App", fr: "Application de Télémédecine HealthTech" },
        desc: { en: "Enabling remote medical consultations across rural communities.", fr: "Permettre des consultations médicales à distance dans les communautés rurales." },
        tags: ["Flutter", "Firebase", "WebRTC"],
        image: "healthtech",
      },
      {
        title: { en: "EdTech Learning Platform", fr: "Plateforme d'Apprentissage EdTech" },
        desc: { en: "An AI-powered learning management system for African universities.", fr: "Un système de gestion d'apprentissage alimenté par l'IA pour les universités africaines." },
        tags: ["React", "Django", "PostgreSQL"],
        image: "edtech",
      },
    ],
  },
  programs: {
    title: { en: "Programs", fr: "Programmes" },
    subtitle: { en: "Join our training and internship programs to kickstart your tech career", fr: "Rejoignez nos programmes de formation et de stage pour lancer votre carrière tech" },
    bootcamp: {
      title: { en: "Bootcamp Programs", fr: "Programmes Bootcamp" },
      description: {
        en: "Intensive training programs designed to transform beginners into job-ready developers. Learn from industry experts and work on real-world projects.",
        fr: "Des programmes de formation intensifs conçus pour transformer les débutants en développeurs prêts pour l'emploi. Apprenez des experts de l'industrie et travaillez sur des projets réels.",
      },
      items: [
        {
          title: { en: "Full-Stack Web Development", fr: "Développement Web Full-Stack" },
          duration: { en: "12 weeks", fr: "12 semaines" },
          description: { en: "Master React, Node.js, databases and deployment. Build 5+ real projects.", fr: "Maîtrisez React, Node.js, les bases de données et le déploiement. Construisez 5+ projets réels." },
          skills: ["React", "Node.js", "PostgreSQL", "Docker"],
        },
        {
          title: { en: "Mobile App Development", fr: "Développement d'Applications Mobiles" },
          duration: { en: "10 weeks", fr: "10 semaines" },
          description: { en: "Build cross-platform mobile apps with React Native and Flutter.", fr: "Construisez des applications mobiles multiplateformes avec React Native et Flutter." },
          skills: ["React Native", "Flutter", "Firebase", "APIs"],
        },
        {
          title: { en: "AI & Machine Learning", fr: "IA & Machine Learning" },
          duration: { en: "8 weeks", fr: "8 semaines" },
          description: { en: "Learn Python, data science fundamentals, and build AI-powered applications.", fr: "Apprenez Python, les fondamentaux de la data science et construisez des applications alimentées par l'IA." },
          skills: ["Python", "TensorFlow", "Pandas", "NLP"],
        },
      ],
    },
    internship: {
      title: { en: "Internship Program", fr: "Programme de Stage" },
      description: {
        en: "Gain hands-on experience working on real client projects alongside our senior developers. Our internship program provides mentorship, training and the opportunity to contribute to production-level software.",
        fr: "Acquérez une expérience pratique en travaillant sur de vrais projets clients aux côtés de nos développeurs seniors. Notre programme de stage offre du mentorat, de la formation et l'opportunité de contribuer à des logiciels de niveau production.",
      },
      benefits: {
        en: ["Mentorship from senior developers", "Work on real client projects", "Professional development workshops", "Certificate of completion", "Job placement assistance", "Networking with industry professionals"],
        fr: ["Mentorat par des développeurs seniors", "Travail sur de vrais projets clients", "Ateliers de développement professionnel", "Certificat de fin de stage", "Aide au placement professionnel", "Réseautage avec des professionnels de l'industrie"],
      },
      duration: { en: "3-6 months", fr: "3-6 mois" },
      applyBtn: { en: "Apply for Internship", fr: "Postuler pour un Stage" },
    },
    applyBtn: { en: "Apply Now", fr: "Postuler Maintenant" },
    applyDescription: { en: "Applications are processed through our partner platform", fr: "Les candidatures sont traitées via notre plateforme partenaire" },
  },
  cta: {
    title: { en: "Ready to Build Your Next Digital Product?", fr: "Prêt à Construire Votre Prochain Produit Numérique ?" },
    subtitle: {
      en: "Let's turn your vision into a world-class digital product.",
      fr: "Transformons votre vision en un produit numérique de classe mondiale.",
    },
    btn1: { en: "Start Your Project", fr: "Lancez Votre Projet" },
    btn2: { en: "Contact Us", fr: "Contactez-Nous" },
  },
  contact: {
    title: { en: "Get in Touch", fr: "Contactez-Nous" },
    subtitle: { en: "Have a project in mind? Let's discuss how we can help.", fr: "Vous avez un projet en tête ? Discutons de la façon dont nous pouvons vous aider." },
    bookCall: { en: "Book a Call", fr: "Réserver un Appel" },
    bookCallDesc: { en: "Schedule a free 30-minute consultation to discuss your project.", fr: "Planifiez une consultation gratuite de 30 minutes pour discuter de votre projet." },
    info: { en: "Contact Information", fr: "Informations de Contact" },
  },
  footer: {
    description: {
      en: "Technology consulting, product development and tech outsourcing from Cameroon to the world.",
      fr: "Conseil technologique, développement de produits et externalisation tech du Cameroun vers le monde.",
    },
    quickLinks: { en: "Quick Links", fr: "Liens Rapides" },
    servicesTitle: { en: "Services", fr: "Services" },
    contactTitle: { en: "Contact", fr: "Contact" },
    newsletter: { en: "Newsletter", fr: "Newsletter" },
    newsletterPlaceholder: { en: "Your email address", fr: "Votre adresse email" },
    subscribe: { en: "Subscribe", fr: "S'abonner" },
    rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
    location: { en: "Bafoussam, Cameroon", fr: "Bafoussam, Cameroun" },
  },
};

export function t(obj: Record<string, string> | undefined, lang: Lang): string {
  if (!obj) return "";
  return obj[lang] || obj["en"] || "";
}

export function tArr(obj: Record<string, string[]> | undefined, lang: Lang): string[] {
  if (!obj) return [];
  return obj[lang] || obj["en"] || [];
}
