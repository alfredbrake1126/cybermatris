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
      CHero_trans: "Transforming ideas into innovative software solutions, available on all platforms",
      CHero_across: "and secured through strong cybersecurity expertise.",
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

      cyber_7: "GRC",
      cyber_7_content: "Governance support to help companies structure and optimize their strategic decision-making. The approach includes the evaluation of internal processes, the implementation of adapted policies and procedures, as well as the creation of effective governance committees.", 
      
      dpo_1: "Management of Data Subject Requests",
      dpo_1_content: "Assist your clients in managing user rights (right of access, rectification, erasure, etc.).",
    
      dpo_2: "Develop Custom Tools",
      dpo_2_content: "Tailored solutions: Create solutions adapted to each client's needs, such as simplified processing records, automated impact assessments, or standard procedures to respond to user rights.",
    
      penTest_1: "Web Application Pentest",
      penTest_1_content: "Identifying vulnerabilities in web applications and their infrastructures.",
    
      penTest_2: "Network Pentest",
      penTest_2_content: "Analysis of security flaws in internal and external networks.",
    
      penTest_3: "Mobile Pentest",
      penTest_3_content: "Testing mobile applications to detect environment-specific vulnerabilities.",
    
      penTest_4: "Embedded Systems Pentest",
      penTest_4_content: "Test the security of IoT devices or specific systems.",
    
      penTest_5: "Social Engineering Pentest",
      penTest_5_content: "Simulate social engineering attacks to assess employee awareness.",
    
      penTest_6: "Periodic Intrusion Tests",
      penTest_6_content: "Offer regular pentest services to continuously assess security.",
    
      penTest_7: "White Box, Black Box, or Grey Box Pentest",
      penTest_7_content: "Differentiate your services based on the level of information provided for each test (full, partial, or no knowledge of the infrastructure).",
    
      penTest_8: "Red Teaming",
      penTest_8_content: "A more aggressive and realistic approach, simulating an enterprise-wide attack to test the responsiveness of defense systems.",
    
      penTest_9: "Technical and Executive Report",
      penTest_9_content: "Provide a clear and understandable report for both technical teams and management, with an analysis of identified vulnerabilities and recommendations for remediation.",
    
      penTest_10: "Proof of Concept (PoC)",
      penTest_10_content: "For each critical vulnerability, provide a proof of concept demonstrating the feasibility of the attack.",
    
      penTest_11: "Remediation Plan",
      penTest_11_content: "Help your clients implement corrective solutions after a pentest.",
    
      penTest_12: "Post-Remediation Pentest",
      penTest_12_content: "Perform tests after the vulnerabilities are fixed to verify the effectiveness of the implemented measures.",
    
      penTest_13: "GDPR Compliance",
      penTest_13_content: "Combine your pentest services with data protection to identify and fix security flaws that may impact data confidentiality.",
    
      penTest_14: "Vulnerability Reports",
      penTest_14_content: "Offer intrusion tests as part of GDPR compliance, particularly for impact assessments related to the processing of personal data.",

      discover: "Discover Our Flagship Product",
      revolution: "Revolutionizing technology in one powerful application.",
      our_address: "Our Address",
      contact_us: "Contact Us",
      copyright: "Cybermatris. All rights reserved.",  
      number_siren: "Number of Siren",
    },
    fr: {
      welcome: "Bienvenue",
      service: "Services",
      contact: "Contact",
      about: "À propos de nous",
      client_review: "Avis Client",
      projects: "Projets",
      approach: "Approche",
      CHero_trans: "Transformer des idées en solutions logicielles innovantes, disponibles sur toutes les plateformes et",
      CHero_across: "sécurisées grâce à une forte expertise en cybersécurité.",
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

      cyber_7: "GRC",
      cyber_7_content: "Un accompagnement en gouvernance pour aider les entreprises à structurer et à optimiser leur prise de décision stratégique. L’approche inclut l’évaluation des processus internes, la mise en place de politiques et de procédures adaptées, ainsi que la création de comités de gouvernance efficaces.", 

      dpo_1: "Gestion des demandes des personnes concernées",
      dpo_1_content: "Assistez vos clients dans la gestion des droits des utilisateurs (droit d’accès, de rectification, d’effacement, etc.).", 

      dpo_2: "Développer des outils personnalisés",
      dpo_2_content: "Solutions sur mesure : Créez des solutions adaptées aux besoins de chaque client, comme des registres de traitement simplifiés, des analyses d'impact automatisées, ou des procédures standard pour répondre aux droits des utilisateurs.", 


      penTest_1: "Pentest d’applications web",
      penTest_1_content: " Identification des vulnérabilités dans les applications web et leurs infrastructures.",

      penTest_2: "Pentest réseau",
      penTest_2_content: "Analyse des failles de sécurité dans les réseaux internes et externes.", 

      penTest_3: "Pentest mobile",
      penTest_3_content: "Tests sur les applications mobiles pour détecter des vulnérabilités spécifiques à ces environnements.", 

      penTest_4: "Pentest de systèmes embarqués",
      penTest_4_content: "Tester la sécurité des dispositifs IoT ou des systèmes spécifiques.", 

      penTest_5: "Pentest social engineering",
      penTest_5_content: "Simuler des attaques basées sur l'ingénierie sociale pour évaluer la sensibilisation des employés.", 

      penTest_6: "Tests d’intrusion périodiques",
      penTest_6_content: "Offrez des services de pentest réguliers pour évaluer la sécurité de façon continue.", 

      penTest_7: "Pentest en boîte blanche, boîte noire ou boîte grise",
      penTest_7_content: "Différenciez vos services selon les niveaux d’information fournis pour chaque test (connaissance totale, partielle, ou aucune sur l'infrastructure).", 

      penTest_8: "Red Teaming",
      penTest_8_content: "Une approche plus agressive et réaliste, simulant une attaque à l’échelle de l’entreprise pour tester la réactivité des systèmes de défense.", 

      penTest_9: "Rapport technique et exécutif",
      penTest_9_content: "Fournissez un rapport clair et compréhensible aussi bien pour les équipes techniques que pour la direction, avec une analyse des vulnérabilités identifiées et des recommandations pour les corriger.", 

      penTest_10: "Preuves de concept (PoC) ",
      penTest_10_content: "Pour chaque vulnérabilité critique, fournissez une preuve de concept démontrant la faisabilité de l'attaque.", 

      penTest_11: "Plan de remédiation",
      penTest_11_content: "Aidez vos clients à implémenter des solutions correctives après un pentest.", 

      penTest_12: "Pentest post-remédiation",
      penTest_12_content: " Effectuez des tests après la correction des vulnérabilités pour vérifier l'efficacité des mesures mises en place.", 

      penTest_13: "Conformité RGPD",
      penTest_13_content: "Associez vos services de pentest à la protection des données pour identifier et corriger les failles de sécurité pouvant impacter la confidentialité des données.", 

      penTest_14: "Rapports de vulnérabilités",
      penTest_14_content: "Proposez des tests d’intrusion dans le cadre de la mise en conformité RGPD, en particulier pour les analyses d’impact liées aux traitements de données personnelles.", 

      discover: "Découvrez Notre Produit Phare",
      revolution: "Révolutionner la technologie dans une application puissante.",
      our_address: "Notre Adresse",
      contact_us: "Contactez-nous",
      copyright: "Cybermatris. Tous droits réservés.",
      number_siren: "Nombre de sirènes",  
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

      cyber_7: "GRC",
      cyber_7_content: "Un acompañamiento en gobernanza para ayudar a las empresas a estructurar y optimizar su toma de decisiones estratégicas. El enfoque incluye la evaluación de los procesos internos, la implementación de políticas y procedimientos adecuados, así como la creación de comités de gobernanza eficaces.",
      
      dpo_1: "Gestión de las solicitudes de los interesados",
      dpo_1_content: "Ayuda a tus clientes a gestionar los derechos de los usuarios (derecho de acceso, rectificación, supresión, etc.).",
    
      dpo_2: "Desarrollar herramientas personalizadas",
      dpo_2_content: "Soluciones a medida: Crea soluciones adaptadas a las necesidades de cada cliente, como registros de tratamiento simplificados, evaluaciones de impacto automatizadas o procedimientos estándar para responder a los derechos de los usuarios.",
    
      penTest_1: "Pentest de aplicaciones web",
      penTest_1_content: "Identificación de vulnerabilidades en aplicaciones web y sus infraestructuras.",
    
      penTest_2: "Pentest de red",
      penTest_2_content: "Análisis de fallos de seguridad en redes internas y externas.",
    
      penTest_3: "Pentest móvil",
      penTest_3_content: "Pruebas en aplicaciones móviles para detectar vulnerabilidades específicas de estos entornos.",
    
      penTest_4: "Pentest de sistemas embebidos",
      penTest_4_content: "Probar la seguridad de dispositivos IoT o sistemas específicos.",
    
      penTest_5: "Pentest de ingeniería social",
      penTest_5_content: "Simular ataques basados en ingeniería social para evaluar la concienciación de los empleados.",
    
      penTest_6: "Pruebas de intrusión periódicas",
      penTest_6_content: "Ofrece servicios de pentest regulares para evaluar la seguridad continuamente.",
    
      penTest_7: "Pentest en modo White Box, Black Box o Grey Box",
      penTest_7_content: "Diferencia tus servicios según el nivel de información proporcionado para cada prueba (conocimiento total, parcial o ninguno sobre la infraestructura).",
    
      penTest_8: "Red Teaming",
      penTest_8_content: "Un enfoque más agresivo y realista, simulando un ataque a gran escala para probar la capacidad de respuesta de los sistemas de defensa.",
    
      penTest_9: "Informe técnico y ejecutivo",
      penTest_9_content: "Proporciona un informe claro y comprensible tanto para los equipos técnicos como para la dirección, con un análisis de las vulnerabilidades identificadas y recomendaciones para corregirlas.",
    
      penTest_10: "Proof of Concept (PoC)",
      penTest_10_content: "Para cada vulnerabilidad crítica, proporciona una prueba de concepto demostrando la viabilidad del ataque.",
    
      penTest_11: "Plan de remediación",
      penTest_11_content: "Ayuda a tus clientes a implementar soluciones correctivas después de un pentest.",
    
      penTest_12: "Pentest post-remediación",
      penTest_12_content: "Realiza pruebas después de la corrección de las vulnerabilidades para verificar la eficacia de las medidas adoptadas.",
    
      penTest_13: "Conformidad RGPD",
      penTest_13_content: "Asocia tus servicios de pentest a la protección de datos para identificar y corregir las vulnerabilidades que puedan afectar la confidencialidad de los datos.",
    
      penTest_14: "Informes de vulnerabilidades",
      penTest_14_content: "Ofrece pruebas de intrusión en el marco de la conformidad RGPD, especialmente para las evaluaciones de impacto relacionadas con el tratamiento de datos personales.",
      
      discover: "Descubre Nuestro Producto Principal",
      revolution: "Revolucionando la tecnología en una aplicación poderosa.",
      our_address: "Nuestra Dirección",
      contact_us: "Contáctanos",
      copyright: "Cybermatris. Todos los derechos reservados.",
      number_siren: "Número de sirenas",  
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
      
      cyber_7: "GRC",
      cyber_7_content: "Eine Begleitung in der Governance, um Unternehmen dabei zu unterstützen, ihre strategische Entscheidungsfindung zu strukturieren und zu optimieren. Der Ansatz umfasst die Bewertung interner Prozesse, die Einführung geeigneter Richtlinien und Verfahren sowie die Einrichtung effektiver Governance-Ausschüsse.",      

      dpo_1: "Management von Anfragen der betroffenen Personen",
      dpo_1_content: "Unterstützen Sie Ihre Kunden bei der Verwaltung der Nutzerrechte (Zugriffsrecht, Berichtigungsrecht, Löschrecht, etc.).",

      dpo_2: "Entwicklung maßgeschneiderter Werkzeuge",
      dpo_2_content: "Maßgeschneiderte Lösungen: Erstellen Sie Lösungen, die an die Bedürfnisse jedes Kunden angepasst sind, wie z.B. vereinfachte Verarbeitungsvorgänge, automatisierte Auswirkungenabschätzungen oder Standardverfahren zur Beantwortung von Nutzerrechten.",

      penTest_1: "Pentest von Webanwendungen",
      penTest_1_content: "Identifizierung von Schwachstellen in Webanwendungen und deren Infrastrukturen.",

      penTest_2: "Pentest von Netzwerken",
      penTest_2_content: "Analyse von Sicherheitslücken in internen und externen Netzwerken.",

      penTest_3: "Pentest von mobilen Geräten",
      penTest_3_content: "Tests an mobilen Anwendungen zur Erkennung umgebungsspezifischer Schwachstellen.",

      penTest_4: "Pentest von eingebetteten Systemen",
      penTest_4_content: "Testen Sie die Sicherheit von IoT-Geräten oder spezifischen Systemen.",

      penTest_5: "Pentest mit sozialer Manipulation",
      penTest_5_content: "Simulieren Sie Angriffe mit sozialer Manipulation, um das Bewusstsein der Mitarbeiter zu bewerten.",

      penTest_6: "Periodische Eindringtests",
      penTest_6_content: "Bieten Sie regelmäßige Pentest-Dienste an, um die Sicherheit kontinuierlich zu bewerten.",

      penTest_7: "Pentest in Weißbox-, Schwarzbox- oder Graubox-Form",
      penTest_7_content: "Differenzieren Sie Ihre Dienste je nach dem Informationsniveau, das für jeden Test bereitgestellt wird (vollständiges Wissen, teilweise Kenntnis oder keine Kenntnis der Infrastruktur).",

      penTest_8: "Red Teaming",
      penTest_8_content: "Ein aggressiver und realistischeren Ansatz, der einen groß angelegten Angriff simuliert, um die Reaktionsfähigkeit der Abwehrsysteme zu testen.",

      penTest_9: "Technischer und exekutiver Bericht",
      penTest_9_content: "Liefern Sie einen klaren und verständlichen Bericht sowohl für technische Teams als auch für das Management mit einer Analyse der identifizierten Schwachstellen und Empfehlungen zur Behebung.",

      penTest_10: "Proof of Concept (PoC)",
      penTest_10_content: "Für jede kritische Schwachstelle liefern Sie einen Proof of Concept, der die Machbarkeit des Angriffs demonstriert.",

      penTest_11: "Remediationsplan",
      penTest_11_content: "Helfen Sie Ihren Kunden, nach einem Pentest Korrekturmaßnahmen umzusetzen.",

      penTest_12: "Pentest nach Remedation",
      penTest_12_content: "Führen Sie Tests nach der Behebung der Schwachstellen durch, um die Wirksamkeit der umgesetzten Maßnahmen zu überprüfen.",

      penTest_13: "GDPR-Konformität",
      penTest_13_content: "Kombinieren Sie Ihre Pentest-Dienste mit Datenschutz, um Sicherheitslücken zu identifizieren und zu beheben, die die Vertraulichkeit von Daten beeinträchtigen könnten.",

      penTest_14: "Schwachstellenberichte",
      penTest_14_content: "Bieten Sie Eindringtests im Rahmen der GDPR-Konformität an, insbesondere für die Auswirkungenabschätzungen im Zusammenhang mit der Verarbeitung personenbezogener Daten.",

      discover: "Entdecken Sie Unser Flaggschiff-Produkt",
      revolution: "Revolutionierung der Technologie in einer leistungsstarken Anwendung.",
      our_address: "Unsere Adresse",
      contact_us: "Kontaktieren Sie uns",
      copyright: "Cybermatris. Alle Rechte vorbehalten.",
      number_siren: "Anzahl der Sirenen",  
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
      
      cyber_7: "GRC",
      cyber_7_content: "Un supporto nella governance per aiutare le aziende a strutturare e ottimizzare il processo decisionale strategico. L'approccio include la valutazione dei processi interni, l'implementazione di politiche e procedure adeguate e la creazione di comitati di governance efficaci.",      

      dpo_1: "Gestione delle richieste degli interessati",
      dpo_1_content: "Assisti i tuoi clienti nella gestione dei diritti degli utenti (diritto di accesso, rettifica, cancellazione, ecc.).",
    
      dpo_2: "Sviluppare strumenti personalizzati",
      dpo_2_content: "Soluzioni su misura: Crea soluzioni adattate alle esigenze di ogni cliente, come registri di trattamento semplificati, valutazioni d'impatto automatizzate o procedure standard per rispondere ai diritti degli utenti.",
    
      penTest_1: "Pentest di applicazioni web",
      penTest_1_content: "Identificazione delle vulnerabilità nelle applicazioni web e nelle loro infrastrutture.",
    
      penTest_2: "Pentest di rete",
      penTest_2_content: "Analisi delle vulnerabilità nelle reti interne ed esterne.",
    
      penTest_3: "Pentest mobile",
      penTest_3_content: "Test delle applicazioni mobili per rilevare vulnerabilità specifiche di questi ambienti.",
    
      penTest_4: "Pentest di sistemi embedded",
      penTest_4_content: "Testare la sicurezza dei dispositivi IoT o di sistemi specifici.",
    
      penTest_5: "Pentest di ingegneria sociale",
      penTest_5_content: "Simulare attacchi basati sull'ingegneria sociale per valutare la consapevolezza dei dipendenti.",
    
      penTest_6: "Test di intrusione periodici",
      penTest_6_content: "Offri servizi di pentest regolari per valutare la sicurezza in modo continuo.",
    
      penTest_7: "Pentest in modalità White Box, Black Box o Grey Box",
      penTest_7_content: "Differenzia i tuoi servizi in base al livello di informazioni fornito per ogni test (conoscenza totale, parziale o nessuna dell'infrastruttura).",
    
      penTest_8: "Red Teaming",
      penTest_8_content: "Un approccio più aggressivo e realistico, simulando un attacco a livello aziendale per testare la reattività dei sistemi di difesa.",
    
      penTest_9: "Rapporto tecnico ed esecutivo",
      penTest_9_content: "Fornisci un rapporto chiaro e comprensibile sia per i team tecnici che per la direzione, con un'analisi delle vulnerabilità identificate e raccomandazioni per correggerle.",
    
      penTest_10: "Proof of Concept (PoC)",
      penTest_10_content: "Per ogni vulnerabilità critica, fornisci una proof of concept che dimostri la fattibilità dell'attacco.",
    
      penTest_11: "Piano di remediation",
      penTest_11_content: "Aiuta i tuoi clienti a implementare soluzioni correttive dopo un pentest.",
    
      penTest_12: "Pentest post-remediation",
      penTest_12_content: "Esegui test dopo la correzione delle vulnerabilità per verificare l'efficacia delle misure adottate.",
    
      penTest_13: "Conformità GDPR",
      penTest_13_content: "Associa i tuoi servizi di pentest alla protezione dei dati per identificare e correggere le vulnerabilità che potrebbero compromettere la riservatezza dei dati.",
    
      penTest_14: "Rapporti di vulnerabilità",
      penTest_14_content: "Offri test di intrusione nell'ambito della conformità GDPR, in particolare per le valutazioni d'impatto relative al trattamento dei dati personali.",

      discover: "Scopri il Nostro Prodotto di Punta",
      revolution: "Rivoluzionare la tecnologia in un'applicazione potente.",
      our_address: "Il Nostro Indirizzo",
      contact_us: "Contattaci",
      copyright: "Cybermatris. Tutti i diritti riservati.",
      number_siren: "Numero di sirene",  
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
