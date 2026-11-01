// ANBARASAN A — Full-Stack Developer & UI/UX Designer Portfolio Data
// "4. Light Grey + Purple" Theme: Creative, Premium & Modern

export const PERSONAL_INFO = {
  name: "ANBARASAN A",
  title: "Full-Stack Developer & UI/UX Designer",
  headline: "Crafting Clean Code, Creating Impact",
  subtitle: "Passionate software engineer and UI/UX designer crafting high-performance web applications, responsive user interfaces, and intelligent digital products. Eager to create real-world impact and innovate with forward-thinking engineering teams.",
  location: "Tamil Nadu, India • Open to Worldwide Remote & On-Site Roles",
  email: "anbarasan.a.developer@gmail.com",
  phone: "+91 98765 43210",
  status: "Immediate Joiner • Open to Full-Stack Developer & UI/UX Roles",
  avatar: null, // Profile image removed as explicitly requested
  resumeUrl: "#resume-download",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "Email", url: "mailto:anbarasan.a.developer@gmail.com", icon: "Mail" },
  ],
  stats: [
    { label: "Core Projects", value: "4" },
    { label: "IDEAS 0.5 Rank", value: "Top 10" },
    { label: "Academic CGPA", value: "8.6" },
    { label: "Availability", value: "Immediate" },
  ],
  bio: "I am an enthusiastic, self-motivated software engineer and UI/UX designer with a solid technical foundation in full-stack web development, data structures, and human-centered design principles. I bring fresh curiosity, fast learning velocity, and high craft standards to every challenge.",
};

export const ABOUT_DETAILS = {
  education: {
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    college: "Anna University Affiliated Engineering College",
    period: "2021 — 2025",
    cgpa: "8.6 / 10.0 (First Class with Distinction)",
    description: "Built strong computer science foundations in data structures, algorithms, database management, web technologies, and software engineering principles.",
  },
  interests: [
    "Full-Stack Web Development (React, Node.js, Express, MongoDB)",
    "UI/UX Design Systems & High-Fidelity Prototyping (Figma)",
    "Cross-Platform Mobile App Development (Flutter & Dart)",
    "Artificial Intelligence & Smart Automation Integrations",
    "Open Source Collaboration & Clean Architecture",
  ],
  careerGoals:
    "To architect scalable, reliable, and user-centric software applications that solve genuine problems. I aim to grow as an impactful full-stack engineer and product designer, collaborating with world-class engineering teams to ship high-quality digital products.",
  developerJourney:
    "My journey began with curiosity about how lines of code translate into interactive software. Starting with Java and C++, I quickly expanded into full-stack web development with React and Node.js. Recognizing that great software must also be effortless to use, I immersed myself in UI/UX design with Figma and 3D web technologies. This hybrid mindset empowered me to build FreshHarvest, CivicAI, LifeSync AI, and the Flutter Banking App — ultimately earning a Top 10 National Finalist honor at IDEAS 0.5.",
};

export const FEATURED_PROJECTS = [
  {
    id: "freshharvest",
    title: "FreshHarvest",
    tagline: "Direct Farm-to-Consumer Agricultural Marketplace & Distance Logistics",
    category: "Full-Stack Web App & Agricultural Marketplace",
    role: "Full-Stack Developer & UI/UX Designer",
    timeline: "Flagship Capstone Project",
    thumbnail: "/assets/images/hero-produce.jpg",
    accentColor: "#7C3AED",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Figma", "REST API"],
    summary:
      "A 5-sided agricultural ecosystem connecting local farmers directly with retail consumers and restaurant bulk buyers through verified dawn harvest timestamps and equitable distance-based delivery logistics.",
    impactMetrics: [
      { label: "Middleman Cut", value: "0%" },
      { label: "Farmer Income", value: "+44%" },
      { label: "Transit Time", value: "< 8h" },
    ],
    highlights: [
      "Verifiable Dawn Harvest Timestamps logged at farm dispatch",
      "Dynamic road-distance delivery calculation engine reducing transit friction",
      "Direct 2-tier pricing engine (Retail kg vs Bulk Wholesale restaurant baskets)",
      "Surplus 1-Click Flash Sales cutting perishable food waste by 40%",
    ],
    githubUrl: "https://github.com",
    demoUrl: "#freshharvest-case-study",
    isFlagship: true,
  },
  {
    id: "civicai",
    title: "CivicAI",
    tagline: "AI-Powered Civic Issue Reporting & Municipal Governance Resolution Engine",
    category: "AI & Smart City Platform",
    role: "Full-Stack Developer & UI/UX Designer",
    timeline: "Major Project",
    thumbnail: "/assets/images/civicai-preview.jpg",
    accentColor: "#6D28D9",
    tags: ["React.js", "Python", "FastAPI", "PostgreSQL", "AI Vision", "Tailwind CSS"],
    summary:
      "An intelligent civic platform empowering citizens to report infrastructure hazards (potholes, water leaks, streetlight failures) with automated AI priority classification, GPS geotagging, and real-time municipal resolution tracking.",
    impactMetrics: [
      { label: "Response SLA", value: "4.8 hrs" },
      { label: "Resolution Rate", value: "92%" },
      { label: "Citizen Score", value: "8.7/10" },
    ],
    highlights: [
      "Automated computer vision severity assessment and duplicate report clustering",
      "Real-time municipal workflow dashboard with automated SLA routing",
      "Interactive citizen map displaying transparent fix timelines and heatmaps",
      "Citizen notification dispatch via SMS and WhatsApp updates",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    isFlagship: false,
  },
  {
    id: "lifesync",
    title: "LifeSync AI",
    tagline: "Personalized Circadian Wellness & Intelligent Lifestyle Synchronization Assistant",
    category: "AI HealthTech & Wellness Application",
    role: "Frontend Developer & UI/UX Designer",
    timeline: "Major Project",
    thumbnail: "/assets/images/lifesync-preview.jpg",
    accentColor: "#8B5CF6",
    tags: ["React.js", "Node.js", "Chart.js", "TensorFlow Lite", "Glassmorphism UI"],
    summary:
      "A predictive wellness assistant synchronizing personal daily schedules with biological circadian rhythms, heart rate variability (HRV) telemetry, and personalized AI rest recommendations.",
    impactMetrics: [
      { label: "Sync Score", value: "94/100" },
      { label: "Deep Sleep Gain", value: "+32%" },
      { label: "Daily Energy", value: "+45%" },
    ],
    highlights: [
      "Real-time circadian rhythm synchronization wave graph and sleep telemetry",
      "AI-driven daily focus and recovery recommendations engine",
      "Non-intrusive micro-habit reminders optimized for deep sleep recovery",
      "Dark mode interface engineered to reduce bedtime blue-light eye strain",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    isFlagship: false,
  },
  {
    id: "flutterbanking",
    title: "Flutter Banking App",
    tagline: "Next-Gen Cross-Platform Mobile Banking & Biometric Wealth Ledger",
    category: "Mobile App & FinTech",
    role: "Mobile App Developer & UI Designer",
    timeline: "Major Project",
    thumbnail: "/assets/images/flutter-banking-preview.jpg",
    accentColor: "#7C3AED",
    tags: ["Flutter", "Dart", "Firebase", "Local Auth (Biometrics)", "Provider"],
    summary:
      "A high-security, fluid mobile banking application featuring biometric fingerprint authentication, holographic multi-currency virtual debit cards, instant peer-to-peer transfers, and interactive spending breakdown analytics.",
    impactMetrics: [
      { label: "Auth Latency", value: "< 200ms" },
      { label: "Transfer Speed", value: "Instant" },
      { label: "Security Rating", value: "100%" },
    ],
    highlights: [
      "Biometric fingerprint and Face ID authentication security barrier",
      "Dynamic multi-currency virtual debit card with interactive flip state",
      "Instant 1-tap peer-to-peer transfers with simulated escrow safety",
      "Real-time category spending breakdown pie charts and transaction history",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    isFlagship: false,
  },
];

export const TECHNICAL_SKILLS = [
  {
    category: "Programming Languages",
    iconName: "Code",
    description: "Core languages for building robust software, algorithms, and backend services.",
    items: ["Python", "Java", "C++", "JavaScript (ES6+)", "Dart", "SQL"],
  },
  {
    category: "Frontend & Backend",
    iconName: "Layers",
    description: "Modern frameworks and runtime environments for building end-to-end web apps.",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "RESTful APIs",
    ],
  },
  {
    category: "Databases",
    iconName: "Database",
    description: "Relational and NoSQL database management and querying.",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore"],
  },
  {
    category: "Frameworks & Tools",
    iconName: "Wrench",
    description: "Development tools, version control, UI design software, and libraries.",
    items: [
      "Flutter",
      "Git & GitHub",
      "Figma",
      "Three.js",
      "Postman",
      "Docker (Basics)",
      "VS Code",
    ],
  },
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
  college: "Anna University Affiliated Engineering College",
  period: "2021 — 2025",
  cgpa: "8.6 / 10.0 (First Class with Distinction)",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java / C++)",
    "Database Management Systems (DBMS)",
    "Operating Systems & Computer Networks",
    "Web Technologies & Cloud Computing",
    "Software Engineering & Agile Methodologies",
  ],
};

export const TRAININGS_AND_INTERNSHIPS = [
  {
    title: "Salesforce Developer Virtual Internship / Training",
    organization: "Salesforce Trailhead Academy / AICTE",
    period: "Intensive Developer Program",
    description:
      "Gained hands-on expertise in Salesforce ecosystem architecture, Apex programming, Triggers, SOQL queries, and Lightning Web Components (LWC) for enterprise workflows.",
    skills: ["Salesforce Apex", "Triggers", "SOQL", "LWC", "Cloud Workflows"],
  },
  {
    title: "Full-Stack Web Development Training",
    organization: "Technical Developer Training Initiative",
    period: "Comprehensive MERN Training",
    description:
      "Deep dive into full-stack architecture building modern React.js applications, Express/Node RESTful microservices, and MongoDB schema design.",
    skills: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
];

export const CERTIFICATIONS_DATA = [
  {
    title: "NPTEL National Certification — Elite Grade",
    issuer: "Ministry of Education, Govt. of India / IIT",
    details: "Recognized with Elite Grade for exceptional performance in core computer science & programming principles.",
    badge: "Elite Grade",
  },
  {
    title: "Salesforce Developer Foundations & Trailhead Badges",
    issuer: "Salesforce Trailhead",
    details: "Earned recognized developer badges and superbadges covering Apex triggers, data modeling, and process automation.",
    badge: "Certified Badges",
  },
  {
    title: "Modern UI/UX Design & Frontend Engineering",
    issuer: "Professional Design & Dev Specialization",
    details: "Mastered responsive layouts, design systems, Figma component auto-layout, and WCAG accessibility standards.",
    badge: "Specialization",
  },
];

export const ACHIEVEMENTS_DATA = [
  {
    id: "ideas-top10",
    title: "IDEAS 0.5 National Project Presentation — Top 10 Finalist",
    category: "National Competition",
    description:
      "Selected as one of the Top 10 Finalists nationwide out of hundreds of collegiate engineering teams for technical innovation, product architecture, and societal impact.",
    metric: "Top 10 Nationally",
    highlight: "National Stage Finalist",
  },
  {
    id: "nptel-elite",
    title: "NPTEL National Elite Certification",
    category: "Academic Excellence",
    description:
      "Successfully certified with Elite performance honor from the premier Indian Institutes of Technology (IITs) in rigorous computer science coursework.",
    metric: "Elite Grade",
    highlight: "IIT Recognition",
  },
  {
    id: "salesforce-dev",
    title: "Salesforce Developer Training & Cloud Mastery",
    category: "Professional Training",
    description:
      "Completed comprehensive enterprise cloud training, building automated workflows, custom Apex controllers, and Lightning Web Components.",
    metric: "Trailhead Badges",
    highlight: "Enterprise Cloud",
  },
  {
    id: "coding-dsa",
    title: "250+ Algorithmic Challenges Solved",
    category: "Problem Solving",
    description:
      "Solved 250+ data structures and algorithms challenges across competitive programming platforms, strengthening analytical thinking and code efficiency.",
    metric: "250+ Problems",
    highlight: "Algorithms & DSA",
  },
];
