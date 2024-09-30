import React, { createContext, useContext, useState } from 'react';

// Create a context
const LanguageContext = createContext();

const translations = {
    en: {
      welcome: "Welcome",
      service: "Services",
      contact: "Contact",
      about: "About Us",
      client_review: "Client Review",
      projects: "Projects",
      approach: "Approach",
      CHero_trans: "Transforming Ideas into Innovative Software",
      CHero_across: "Across All Platforms",
      CHero_our: "Our development doesn't stop until our",
      CHero_our2: "clients are completely satisfied across all over the world",
  
      CApproach: "Our Approach",
  
      CApproach_client: "Client-Centric",
      CApproach_client_content: "We tailor solutions to your needs, ensuring they fit your requirements.",
      CApproach_innovation: "Innovation-Driven",
      CApproach_innovation_content: "We prioritize innovative solutions to drive success.",
      CApproach_collaborative: "Collaborative",
      CApproach_collaborative_content: "We work closely with you, ensuring transparency throughout.",
      CApproach_quality: "Quality-Focused",
      CApproach_quality_content: "We prioritize quality, ensuring robust and reliable software.",
  
      our_service: "Our Services",
  
      service_1_title: "Web Development",
      service_1_details_1: "Responsive Design",
      service_1_details_2: "E-commerce Solutions",
      service_1_details_3: "SEO Optimization",
      service_1_details_4: "CMS",
  
      service_2_title: "App Development",
      service_2_details_1: "Cross-Platform Apps",
      service_2_details_2: "User Experience Design",
      service_2_details_3: "API Integration",
      service_2_details_4: "Performance Optimization", 
  
      service_3_title: "Machine Learning",
      service_3_details_1: "Predictive Analytics",
      service_3_details_2: "NLP",
      service_3_details_3: "Computer Vision",
      service_3_details_4: "Automation",
  
      service_4_title: "DevOps",
      service_4_details_1: "CI/CD",
      service_4_details_2: "Infrastructure as Code",
      service_4_details_3: "Monitoring and Logging",
      service_4_details_4: "Automated Testing",
      
      visit_site: "Visit Site",
      our_tech_leads: "Our Tech Leads",
      
      cyber: "Cybersecurity Offerings",
  
      cyber_1: "Cybersecurity Governance",
      cyber_1_content: "We assist organizations in establishing robust policies and governance frameworks to ensure regulatory compliance and protect information assets. This includes risk assessments, policy development, and employee training.",
  
      cyber_2: "Cybersecurity Project Management",
      cyber_2_content: "Our certified project management team oversees the implementation of cybersecurity solutions, ensuring adherence to timelines and budgets. We guarantee transparent communication and effective coordination among stakeholders.",
      
      cyber_3: "Security Audits",
      cyber_3_content: "We offer comprehensive security audits to identify vulnerabilities and assess the effectiveness of existing controls. Our detailed reports provide practical recommendations to enhance your organization’s security posture.",
      
      cyber_4: "Technical Assistance",
      cyber_4_content: "We provide specialized technical support for the implementation and management of cybersecurity solutions. Our experts are available to quickly resolve issues and ensure the smooth operation of your security systems.",
      
      cyber_5: "Training and Awareness",
      cyber_5_content: "We offer tailored training programs to raise awareness among your teams about cybersecurity challenges. Our interactive sessions cover best practices, threat detection, and behaviors to adopt to minimize risks, thereby strengthening the culture of security within your organization.",
      
      cyber_6: "Incident Management and Remediation",
      cyber_6_content: "We provide a structured approach to incident management, helping organizations respond effectively to security breaches. Our services include incident detection, analysis, containment, and recovery, along with remediation strategies to prevent future occurrences.", 
      
      discover: "Discover Our Flagship Product",
      revolution: "Revolutionizing technology in one powerful application.",
      our_address: "Our Address",
      contact_us: "Contact Us",
      copyright: "Cybermatris. All rights reserved.",  
    },
    fr: {
      welcome: "Bienvenue",
      service: "Services",
      contact: "Contact",
      about: "À propos de nous",
      client_review: "Avis Client",
      projects: "Projets",
      approach: "Approche",
      CHero_trans: "Transformer des idées en logiciels innovants",
      CHero_across: "Sur toutes les plateformes",
      CHero_our: "Notre développement ne s'arrête pas tant que nos",
      CHero_our2: "clients ne sont pas complètement satisfaits dans le monde entier",
  
      CApproach: "Notre Approche",
  
      CApproach_client: "Centré sur le Client",
      CApproach_client_content: "Nous adaptons des solutions à vos besoins, en veillant à ce qu'elles répondent à vos exigences.",
      CApproach_innovation: "Axé sur l'Innovation",
      CApproach_innovation_content: "Nous priorisons des solutions innovantes pour réussir.",
      CApproach_collaborative: "Collaboratif",
      CApproach_collaborative_content: "Nous travaillons en étroite collaboration avec vous, en garantissant la transparence tout au long.",
      CApproach_quality: "Axé sur la Qualité",
      CApproach_quality_content: "Nous privilégions la qualité, garantissant des logiciels robustes et fiables.",
  
      our_service: "Nos Services",
  
      service_1_title: "Développement Web",
      service_1_details_1: "Design Réactif",
      service_1_details_2: "Solutions E-commerce",
      service_1_details_3: "Optimisation SEO",
      service_1_details_4: "CMS",
  
      service_2_title: "Développement d'Applications",
      service_2_details_1: "Applications Cross-Platform",
      service_2_details_2: "Conception de l'Expérience Utilisateur",
      service_2_details_3: "Intégration API",
      service_2_details_4: "Optimisation des Performances",
  
      service_3_title: "Apprentissage Automatique",
      service_3_details_1: "Analyse Prédictive",
      service_3_details_2: "PNL",
      service_3_details_3: "Vision par Ordinateur",
      service_3_details_4: "Automatisation",
  
      service_4_title: "DevOps",
      service_4_details_1: "CI/CD",
      service_4_details_2: "Infrastructure as Code",
      service_4_details_3: "Surveillance et Journalisation",
      service_4_details_4: "Tests Automatisés",
      
      visit_site: "Visitez le Site",
      our_tech_leads: "Nos Chefs Techniques",
      
      cyber: "Offres de Cybersécurité",
  
      cyber_1: "Gouvernance en Cybersécurité",
      cyber_1_content: "Nous aidons les organisations à établir des politiques robustes et des cadres de gouvernance pour assurer la conformité réglementaire et protéger les actifs d'information. Cela inclut des évaluations des risques, le développement de politiques et la formation des employés.",
  
      cyber_2: "Gestion de Projet en Cybersécurité",
      cyber_2_content: "Notre équipe certifiée de gestion de projet supervise la mise en œuvre des solutions de cybersécurité, garantissant le respect des délais et des budgets. Nous garantissons une communication transparente et une coordination efficace entre les parties prenantes.",
      
      cyber_3: "Audits de Sécurité",
      cyber_3_content: "Nous proposons des audits de sécurité complets pour identifier les vulnérabilités et évaluer l'efficacité des contrôles existants. Nos rapports détaillés fournissent des recommandations pratiques pour améliorer la posture de sécurité de votre organisation.",
      
      cyber_4: "Assistance Technique",
      cyber_4_content: "Nous fournissons un support technique spécialisé pour la mise en œuvre et la gestion des solutions de cybersécurité. Nos experts sont disponibles pour résoudre rapidement les problèmes et garantir le bon fonctionnement de vos systèmes de sécurité.",
      
      cyber_5: "Formation et Sensibilisation",
      cyber_5_content: "Nous proposons des programmes de formation adaptés pour sensibiliser vos équipes aux défis de la cybersécurité. Nos sessions interactives couvrent les meilleures pratiques, la détection des menaces et les comportements à adopter pour minimiser les risques, renforçant ainsi la culture de la sécurité au sein de votre organisation.",
      
      cyber_6: "Gestion et Remédiation des Incidents",
      cyber_6_content: "Nous fournissons une approche structurée pour la gestion des incidents, aidant les organisations à répondre efficacement aux violations de sécurité. Nos services comprennent la détection, l'analyse, la containment et la récupération des incidents, ainsi que des stratégies de remédiation pour prévenir de futures occurrences.", 
      
      discover: "Découvrez Notre Produit Phare",
      revolution: "Révolutionner la technologie dans une application puissante.",
      our_address: "Notre Adresse",
      contact_us: "Contactez-nous",
      copyright: "Cybermatris. Tous droits réservés.",  
    },
    es: {
      welcome: "Bienvenido",
      service: "Servicio",
      contact: "Contacto",
      about: "Acerca de Nosotros",
      client_review: "Opinión del Cliente",
      projects: "Proyectos",
      approach: "Enfoque",
      CHero_trans: "Transformando Ideas en Software Innovador",
      CHero_across: "En Todas las Plataformas",
      CHero_our: "Nuestro desarrollo no se detiene hasta que nuestros",
      CHero_our2: "clientes están completamente satisfechos en todo el mundo",
  
      CApproach: "Nuestro Enfoque",
  
      CApproach_client: "Centrado en el Cliente",
      CApproach_client_content: "Adaptamos soluciones a sus necesidades, asegurando que se ajusten a sus requisitos.",
      CApproach_innovation: "Impulsado por la Innovación",
      CApproach_innovation_content: "Priorizamos soluciones innovadoras para impulsar el éxito.",
      CApproach_collaborative: "Colaborativo",
      CApproach_collaborative_content: "Trabajamos estrechamente con usted, asegurando transparencia en todo momento.",
      CApproach_quality: "Enfocado en la Calidad",
      CApproach_quality_content: "Priorizamos la calidad, asegurando software robusto y confiable.",
  
      our_service: "Nuestros Servicios",
  
      service_1_title: "Desarrollo Web",
      service_1_details_1: "Diseño Responsivo",
      service_1_details_2: "Soluciones de Comercio Electrónico",
      service_1_details_3: "Optimización SEO",
      service_1_details_4: "CMS",
  
      service_2_title: "Desarrollo de Aplicaciones",
      service_2_details_1: "Aplicaciones Multiplataforma",
      service_2_details_2: "Diseño de Experiencia de Usuario",
      service_2_details_3: "Integración de API",
      service_2_details_4: "Optimización del Rendimiento",
  
      service_3_title: "Aprendizaje Automático",
      service_3_details_1: "Análisis Predictivo",
      service_3_details_2: "PNL",
      service_3_details_3: "Visión por Computadora",
      service_3_details_4: "Automatización",
  
      service_4_title: "DevOps",
      service_4_details_1: "CI/CD",
      service_4_details_2: "Infraestructura como Código",
      service_4_details_3: "Monitoreo y Registro",
      service_4_details_4: "Pruebas Automatizadas",
      
      visit_site: "Visitar Sitio",
      our_tech_leads: "Nuestros Líderes Técnicos",
      
      cyber: "Ofertas de Ciberseguridad",
  
      cyber_1: "Gobernanza en Ciberseguridad",
      cyber_1_content: "Ayudamos a las organizaciones a establecer políticas sólidas y marcos de gobernanza para garantizar el cumplimiento regulatorio y proteger los activos de información. Esto incluye evaluaciones de riesgos, desarrollo de políticas y capacitación de empleados.",
  
      cyber_2: "Gestión de Proyectos de Ciberseguridad",
      cyber_2_content: "Nuestro equipo de gestión de proyectos certificado supervisa la implementación de soluciones de ciberseguridad, garantizando el cumplimiento de plazos y presupuestos. Garantizamos comunicación transparente y coordinación efectiva entre las partes interesadas.",
      
      cyber_3: "Auditorías de Seguridad",
      cyber_3_content: "Ofrecemos auditorías de seguridad completas para identificar vulnerabilidades y evaluar la efectividad de los controles existentes. Nuestros informes detallados brindan recomendaciones prácticas para mejorar la postura de seguridad de su organización.",
      
      cyber_4: "Asistencia Técnica",
      cyber_4_content: "Proporcionamos soporte técnico especializado para la implementación y gestión de soluciones de ciberseguridad. Nuestros expertos están disponibles para resolver problemas rápidamente y garantizar el funcionamiento fluido de sus sistemas de seguridad.",
      
      cyber_5: "Capacitación y Concienciación",
      cyber_5_content: "Ofrecemos programas de capacitación adaptados para aumentar la concienciación de sus equipos sobre los desafíos de ciberseguridad. Nuestras sesiones interactivas cubren las mejores prácticas, la detección de amenazas y los comportamientos que se deben adoptar para minimizar riesgos, fortaleciendo así la cultura de seguridad dentro de su organización.",
      
      cyber_6: "Gestión y Remediación de Incidentes",
      cyber_6_content: "Proporcionamos un enfoque estructurado para la gestión de incidentes, ayudando a las organizaciones a responder de manera efectiva a las brechas de seguridad. Nuestros servicios incluyen detección, análisis, contención y recuperación de incidentes, junto con estrategias de remediación para prevenir futuras ocurrencias.", 
      
      discover: "Descubre Nuestro Producto Principal",
      revolution: "Revolucionando la tecnología en una aplicación poderosa.",
      our_address: "Nuestra Dirección",
      contact_us: "Contáctanos",
      copyright: "Cybermatris. Todos los derechos reservados.",  
    },
    de: {
      welcome: "Willkommen",
      service: "Dienstleistung",
      contact: "Kontakt",
      about: "Über Uns",
      client_review: "Kundenbewertung",
      projects: "Projekte",
      approach: "Ansatz",
      CHero_trans: "Ideen in innovative Software umwandeln",
      CHero_across: "Über alle Plattformen",
      CHero_our: "Unsere Entwicklung hört nicht auf, bis unsere",
      CHero_our2: "Kunden rund um die Welt völlig zufrieden sind",
  
      CApproach: "Unser Ansatz",
  
      CApproach_client: "Kundenorientiert",
      CApproach_client_content: "Wir passen Lösungen an Ihre Bedürfnisse an, um sicherzustellen, dass sie Ihren Anforderungen entsprechen.",
      CApproach_innovation: "Innovationsgetrieben",
      CApproach_innovation_content: "Wir priorisieren innovative Lösungen für den Erfolg.",
      CApproach_collaborative: "Kollaborativ",
      CApproach_collaborative_content: "Wir arbeiten eng mit Ihnen zusammen und gewährleisten Transparenz während des gesamten Prozesses.",
      CApproach_quality: "Qualitätsorientiert",
      CApproach_quality_content: "Wir priorisieren Qualität und sorgen für robuste und zuverlässige Software.",
  
      our_service: "Unsere Dienstleistungen",
  
      service_1_title: "Webentwicklung",
      service_1_details_1: "Reaktionsschnelles Design",
      service_1_details_2: "E-Commerce-Lösungen",
      service_1_details_3: "SEO-Optimierung",
      service_1_details_4: "CMS",
  
      service_2_title: "App-Entwicklung",
      service_2_details_1: "Cross-Plattform-Apps",
      service_2_details_2: "Benutzererfahrung Design",
      service_2_details_3: "API-Integration",
      service_2_details_4: "Leistungsoptimierung",
  
      service_3_title: "Maschinelles Lernen",
      service_3_details_1: "Prädiktive Analytik",
      service_3_details_2: "NLP",
      service_3_details_3: "Computer Vision",
      service_3_details_4: "Automatisierung",
  
      service_4_title: "DevOps",
      service_4_details_1: "CI/CD",
      service_4_details_2: "Infrastruktur als Code",
      service_4_details_3: "Überwachung und Protokollierung",
      service_4_details_4: "Automatisierte Tests",
      
      visit_site: "Website Besuchen",
      our_tech_leads: "Unsere Technikleiter",
      
      cyber: "Angebote zur Cybersicherheit",
  
      cyber_1: "Cybersicherheits-Governance",
      cyber_1_content: "Wir unterstützen Organisationen bei der Etablierung robuster Richtlinien und Governance-Frameworks, um die Einhaltung von Vorschriften sicherzustellen und Informationen zu schützen. Dazu gehören Risikoanalysen, Richtlinienentwicklung und Schulungen für Mitarbeiter.",
  
      cyber_2: "Projektmanagement für Cybersicherheit",
      cyber_2_content: "Unser zertifiziertes Projektmanagement-Team überwacht die Implementierung von Cybersicherheitslösungen und gewährleistet die Einhaltung von Zeitplänen und Budgets. Wir garantieren transparente Kommunikation und effektive Koordination zwischen den Beteiligten.",
      
      cyber_3: "Sicherheitsaudits",
      cyber_3_content: "Wir bieten umfassende Sicherheitsaudits an, um Schwachstellen zu identifizieren und die Wirksamkeit bestehender Kontrollen zu bewerten. Unsere detaillierten Berichte enthalten praktische Empfehlungen zur Verbesserung der Sicherheitslage Ihrer Organisation.",
      
      cyber_4: "Technische Unterstützung",
      cyber_4_content: "Wir bieten spezialisierte technische Unterstützung für die Implementierung und Verwaltung von Cybersicherheitslösungen. Unsere Experten stehen zur Verfügung, um Probleme schnell zu lösen und den reibungslosen Betrieb Ihrer Sicherheitssysteme zu gewährleisten.",
      
      cyber_5: "Schulung und Sensibilisierung",
      cyber_5_content: "Wir bieten maßgeschneiderte Schulungsprogramme an, um das Bewusstsein Ihrer Teams für Herausforderungen in der Cybersicherheit zu schärfen. Unsere interaktiven Sitzungen behandeln Best Practices, Bedrohungserkennung und Verhaltensweisen, die zu minimieren sind, um die Sicherheitskultur in Ihrer Organisation zu stärken.",
      
      cyber_6: "Vorfallmanagement und -behebung",
      cyber_6_content: "Wir bieten einen strukturierten Ansatz für das Vorfallmanagement, der Organisationen hilft, effektiv auf Sicherheitsverletzungen zu reagieren. Unsere Dienstleistungen umfassen die Erkennung, Analyse, Eindämmung und Wiederherstellung von Vorfällen sowie Remediationsstrategien zur Verhinderung zukünftiger Vorkommen.", 
      
      discover: "Entdecken Sie Unser Flaggschiff-Produkt",
      revolution: "Revolutionierung der Technologie in einer leistungsstarken Anwendung.",
      our_address: "Unsere Adresse",
      contact_us: "Kontaktieren Sie uns",
      copyright: "Cybermatris. Alle Rechte vorbehalten.",  
    },
    it: {
      welcome: "Benvenuto",
      service: "Servizio",
      contact: "Contatto",
      about: "Chi Siamo",
      client_review: "Recensione del Cliente",
      projects: "Progetti",
      approach: "Approccio",
      CHero_trans: "Trasformare Idee in Software Innovativo",
      CHero_across: "Su Tutte le Piattaforme",
      CHero_our: "Il nostro sviluppo non si ferma fino a quando i nostri",
      CHero_our2: "clienti non sono completamente soddisfatti in tutto il mondo",
  
      CApproach: "Il Nostro Approccio",
  
      CApproach_client: "Centrato sul Cliente",
      CApproach_client_content: "Adattiamo soluzioni alle tue esigenze, assicurandoci che soddisfino i tuoi requisiti.",
      CApproach_innovation: "Guidato dall'Innovazione",
      CApproach_innovation_content: "Prioritizziamo soluzioni innovative per il successo.",
      CApproach_collaborative: "Collaborativo",
      CApproach_collaborative_content: "Lavoriamo a stretto contatto con te, garantendo trasparenza durante tutto il processo.",
      CApproach_quality: "Focalizzato sulla Qualità",
      CApproach_quality_content: "Prioritizziamo la qualità, assicurando software robusti e affidabili.",
  
      our_service: "I Nostri Servizi",
  
      service_1_title: "Sviluppo Web",
      service_1_details_1: "Design Responsivo",
      service_1_details_2: "Soluzioni E-commerce",
      service_1_details_3: "Ottimizzazione SEO",
      service_1_details_4: "CMS",
  
      service_2_title: "Sviluppo di App",
      service_2_details_1: "App Cross-Platform",
      service_2_details_2: "Design dell'Esperienza Utente",
      service_2_details_3: "Integrazione API",
      service_2_details_4: "Ottimizzazione delle Prestazioni",
  
      service_3_title: "Apprendimento Automatico",
      service_3_details_1: "Analisi Predittiva",
      service_3_details_2: "PNL",
      service_3_details_3: "Visione Artificiale",
      service_3_details_4: "Automazione",
  
      service_4_title: "DevOps",
      service_4_details_1: "CI/CD",
      service_4_details_2: "Infrastruttura come Codice",
      service_4_details_3: "Monitoraggio e Registrazione",
      service_4_details_4: "Test Automatizzati",
      
      visit_site: "Visita il Sito",
      our_tech_leads: "I Nostri Leader Tecnici",
      
      cyber: "Offerte di Cybersecurity",
  
      cyber_1: "Governance della Cybersecurity",
      cyber_1_content: "Assistiamo le organizzazioni a stabilire politiche solide e quadri di governance per garantire la conformità normativa e proteggere gli asset informativi. Ciò include valutazioni dei rischi, sviluppo di politiche e formazione dei dipendenti.",
  
      cyber_2: "Gestione dei Progetti di Cybersecurity",
      cyber_2_content: "Il nostro team di gestione dei progetti certificato supervisiona l'implementazione delle soluzioni di cybersecurity, garantendo il rispetto di tempi e budget. Garantiamo comunicazione trasparente e coordinamento efficace tra le parti interessate.",
      
      cyber_3: "Audit di Sicurezza",
      cyber_3_content: "Offriamo audit di sicurezza completi per identificare vulnerabilità e valutare l'efficacia dei controlli esistenti. I nostri rapporti dettagliati forniscono raccomandazioni pratiche per migliorare la postura di sicurezza della tua organizzazione.",
      
      cyber_4: "Assistenza Tecnica",
      cyber_4_content: "Forniamo supporto tecnico specializzato per l'implementazione e la gestione delle soluzioni di cybersecurity. I nostri esperti sono disponibili per risolvere rapidamente i problemi e garantire il funzionamento fluido dei tuoi sistemi di sicurezza.",
      
      cyber_5: "Formazione e Consapevolezza",
      cyber_5_content: "Offriamo programmi di formazione personalizzati per aumentare la consapevolezza dei tuoi team sulle sfide della cybersecurity. Le nostre sessioni interattive coprono le migliori pratiche, la rilevazione delle minacce e i comportamenti da adottare per ridurre al minimo i rischi, rafforzando così la cultura della sicurezza all'interno della tua organizzazione.",
      
      cyber_6: "Gestione e Remediazione degli Incidenti",
      cyber_6_content: "Forniamo un approccio strutturato alla gestione degli incidenti, aiutando le organizzazioni a rispondere in modo efficace alle violazioni della sicurezza. I nostri servizi includono la rilevazione, l'analisi, la contenimento e il recupero degli incidenti, insieme a strategie di remediazione per prevenire futuri eventi.", 
      
      discover: "Scopri il Nostro Prodotto di Punta",
      revolution: "Rivoluzionare la tecnologia in un'applicazione potente.",
      our_address: "Il Nostro Indirizzo",
      contact_us: "Contattaci",
      copyright: "Cybermatris. Tutti i diritti riservati.",  
    },
  };
  

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};
