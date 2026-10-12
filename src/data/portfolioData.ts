export interface Project {
  id: string;
  title: string;
  category: 'Logistics & Systems' | 'Full-Stack Web' | 'Desktop & Automation' | 'Architecture & APIs';
  badge: string;
  previewImage: string;
  images: string[];
  imageType: 'actual' | 'illustrative_architecture';
  description: string;
  fullOverview: string;
  technologies: string[];
  role: string;
  keyContributions: string[];
  challengesSolved: string[];
  businessImpact?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  statusNote?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyType: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    iconUrl?: string;
    iconName?: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  description: string;
  credlyUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'lm-dashboard',
    title: 'LM-Dashboard — Last-Mile Logistics Management Platform',
    category: 'Logistics & Systems',
    badge: 'Production Logistics Platform',
    previewImage: '/int_dashboard/Screenshot 2025-12-04 163448.png',
    images: [
      '/int_dashboard/Screenshot 2025-12-04 163448.png',
      '/int_dashboard/Screenshot 2025-12-04 163437.png',
      '/int_dashboard/Screenshot 2025-12-04 163521.png',
      '/int_dashboard/Screenshot 2025-12-04 163502.png',
      '/int_dashboard/Screenshot 2025-12-04 163538.png',
      '/int_dashboard/Screenshot 2025-12-04 163419.png',
      '/int_dashboard/Screenshot 2025-12-04 163629.png'
    ],
    imageType: 'actual',
    description: 'Enterprise logistics operations dashboard built to monitor real-time parcel throughput, hub performance metrics, delivery success rates, and backlogs across distribution hubs.',
    fullOverview: 'LM-Dashboard serves as the central command center for last-mile logistics operations across distribution hubs including Bago Aplaya, OP Toril, OP Wangan, and Panabo. It continuously aggregates delivery attempts, outbound handovers, failed deliveries, and Same-Day Out Delivery (SDOD) metrics, providing operations supervisors with actionable visibility into station throughput.',
    technologies: ['Laravel', 'React', 'Next.js', 'PHP', 'MySQL', 'RESTful APIs', 'Tailwind CSS'],
    role: 'Full-Stack Developer (INT Logistics)',
    keyContributions: [
      'Built interactive analytics tracking 25,000+ inbound and 28,000+ outbound parcels per week across regional hubs.',
      'Designed normalized MySQL schemas and indexed queries for sub-second retrieval of operational telemetry.',
      'Engineered automated hub reporting modules with dynamic template generation and Excel import capabilities.',
      'Developed role-based authentication and hub filtering allowing station managers to view only their localized metrics while providing executives with system-wide oversight.',
      'Implemented key performance indicators including Same-Day Out Delivery (SDOD Rate), Parcel On Floor (POF), and failure classification breakdowns.'
    ],
    challengesSolved: [
      'Optimizing query aggregation performance over massive operational tables to eliminate report generation lag during peak morning sortation shifts.',
      'Handling messy courier manifest discrepancies by introducing standardized import validation rules.'
    ],
    businessImpact: 'Transformed operational reporting from manual spreadsheets to real-time automated hub dashboards, cutting daily reconciliation time by hours.',
    githubUrl: 'https://github.com/Charles787205/LM-Dashboard.git'
  },
  {
    id: 'transport-system',
    title: 'Transportation Management System (TMS)',
    category: 'Logistics & Systems',
    badge: 'Fleet & Dispatch Architecture',
    previewImage: '/transport_system/transport_bg.png',
    images: [
      '/transport_system/transport_bg.png',
      '/transport_system/workflow.svg'
    ],
    imageType: 'actual',
    description: 'Comprehensive transport and fleet management system built to automate corporate vehicle dispatches, multi-leg linehaul trip runs, waypoint drops, and driver duty shifts.',
    fullOverview: 'Developed at Resolvify to manage end-to-end transportation workflows across clients, vendors, drivers, and vehicles. The system handles daily planned capacity versus actual dispatches, tracks multi-leg trip lifecycles, and maintains granular waypoints for intermediate parcel drop-offs along routes.',
    technologies: ['Laravel 11', 'React', 'Inertia.js', 'TypeScript', 'MySQL', 'Clean Architecture', 'REST APIs'],
    role: 'Software Developer (Resolvify)',
    keyContributions: [
      'Engineered the core Dispatch engine managing duty shifts per client, service type (regular vs on-call), and odometer validation.',
      'Architected multi-leg trip execution (`trip_legs`) supporting flexible origin-destination reversals and sequential leg progression.',
      'Developed waypoint drop management (`drops`) allowing drivers and dispatchers to record parcel counts, arrival timestamps, and departure confirmations at intermediate client docks.',
      'Implemented role-based permissions (RBAC) ensuring strict separation between dispatchers, drivers, vendors, and corporate clients.',
      'Designed indexed relational database models optimized for route telemetry, mileage auditing, and trip status tracking.'
    ],
    challengesSolved: [
      'Accommodating flexible multi-hop trip routing without rigid schema constraints through a unified swappable Locations entity.',
      'Ensuring immutable odometer and timestamp trails to prevent dispatch discrepancies and billing disputes.'
    ],
    businessImpact: 'Streamlined dispatch dispatching from ad-hoc communications into a structured digital pipeline with real-time duty visibility.',
    statusNote: 'Commercial enterprise platform. Shown via production visuals and architectural workflow blueprints.'
  },
  {
    id: 'naya-platform',
    title: 'Naya — Home Services Platform',
    category: 'Architecture & APIs',
    badge: 'Modular Monolith Blueprint',
    previewImage: '/naya/architecture.svg',
    images: [
      '/naya/architecture.svg'
    ],
    imageType: 'illustrative_architecture',
    description: 'Backend architectural blueprint and implementation for an on-demand home services marketplace, crafted as a Modular Monolith adhering to Clean Architecture and DDD principles.',
    fullOverview: 'Naya is an architectural implementation exploring enterprise software design patterns for marketplace ecosystems. Built using ASP.NET Core, it structures business capabilities into isolated modules—Auth, Catalog, Orders, and Users—with strict Clean Architecture boundaries and decoupled contract communication.',
    technologies: ['C#', 'ASP.NET Core', 'Clean Architecture', 'Domain-Driven Design (DDD)', 'Entity Framework Core', 'PostgreSQL', 'Docker'],
    role: 'Backend Architect & Systems Engineer',
    keyContributions: [
      'Engineered decoupled modular monolith architecture containing Auth, Catalog, Orders, and Users modules.',
      'Enforced Clean Architecture layers (Domain, Application, Infrastructure, Public Contracts) with dependency inversion inside each module.',
      'Designed contract-based inter-module communication using DTO interfaces to avoid database-level coupling between bounded contexts.',
      'Implemented ASP.NET Identity with JWT authentication, custom claim policies, and role-based access control.',
      'Structured Domain-Driven Design aggregates, value objects, and repository patterns for robust business invariants.'
    ],
    challengesSolved: [
      'Designing clean communication boundaries between modules without introducing microservice operational complexity.',
      'Keeping domain logic pure and independent of database or external framework concerns.'
    ],
    statusNote: 'Backend architecture and domain modules implemented in C# / .NET. Architectural blueprint visual represents implemented software design.'
  },
  {
    id: 'int-audit-app',
    title: 'INT Audit Application',
    category: 'Desktop & Automation',
    badge: 'Desktop Logistics Tool',
    previewImage: '/int_audit_app/Screenshot 2025-12-04 164629.png',
    images: [
      '/int_audit_app/Screenshot 2025-12-04 164629.png',
      '/int_audit_app/Screenshot 2025-12-04 164640.png',
      '/int_audit_app/Screenshot 2025-12-04 164652.png',
      '/int_audit_app/Screenshot 2025-12-04 164705.png',
      '/int_audit_app/Screenshot 2025-12-04 164727.png',
      '/int_audit_app/Screenshot 2025-12-04 164741.png',
      '/int_audit_app/Screenshot 2025-12-04 164811.png'
    ],
    imageType: 'actual',
    description: 'High-performance desktop auditing application built with Electron and SQLite to reconcile thousands of client courier records (Shopee, Lazada) against physical hub dispatch logs.',
    fullOverview: 'Developed to eliminate manual parcel audit errors in logistics hubs. The application ingests massive client manifest databases and compares each tracking record against warehouse scan events, instantly isolating discrepancies such as unreturned parcels, delayed linehauls, and missing handovers.',
    technologies: ['Electron', 'TypeScript', 'React', 'Prisma ORM', 'SQLite', 'Tailwind CSS', 'Node.js'],
    role: 'Desktop Application Developer',
    keyContributions: [
      'Architected local-first desktop application with SQLite database and Prisma ORM capable of offline execution.',
      'Built automated reconciliation engine cross-referencing thousands of Shopee and Lazada records with internal hub events.',
      'Developed visual status dashboard featuring volume trend analysis, pending handover counters, and instant search.',
      'Optimized memory usage and file ingestion pipelines to process large carrier spreadsheets without UI stutter.'
    ],
    challengesSolved: [
      'Handling massive Excel and CSV datasets locally on warehouse desktop machines without crashing browser or Node processes.',
      'Providing instantaneous full-text tracking number search across hundreds of thousands of historical audit entries.'
    ],
    businessImpact: 'Enabled warehouse supervisors to complete daily multi-thousand parcel audits in minutes rather than manual full-day checks.',
    githubUrl: 'https://github.com/Charles787205/IntAuditApp.git'
  },
  {
    id: 'dakflo',
    title: 'Dakflo — Medical Sample Management System',
    category: 'Full-Stack Web',
    badge: 'Clinical Laboratory System',
    previewImage: '/dakflo/Screenshot 2025-12-04 172618 - Copy.png',
    images: [
      '/dakflo/Screenshot 2025-12-04 172618 - Copy.png',
      '/dakflo/Screenshot 2025-12-04 172624 - Copy.png',
      '/dakflo/Screenshot 2025-12-04 172630 - Copy.png',
      '/dakflo/Screenshot 2025-12-04 172732 - Copy.png',
      '/dakflo/Screenshot 2025-12-04 173539 - Copy.png',
      '/dakflo/Screenshot 2025-12-04 173649 - Copy.png'
    ],
    imageType: 'actual',
    description: 'Web application designed for medical diagnostic clinics to manage patient sample intake, chain of custody tracking, technician role approvals, and laboratory test workflows.',
    fullOverview: 'Dakflo streamlines clinical laboratory operations by providing strict accountability from the moment a biological sample is collected in the field until final laboratory test results are certified by medical experts.',
    technologies: ['React', 'Node.js', 'Express', 'AWS', 'REST APIs', 'Tailwind CSS'],
    role: 'Full-Stack Developer',
    keyContributions: [
      'Implemented role-based workflow separating Field Collectors, Lab Techs, External Experts, and Clinic Administrators.',
      'Built interactive administrative approval queue for verifying and granting system credentials to clinic personnel.',
      'Engineered sample tracking pipeline maintaining strict timestamped audit trails of specimen custody.',
      'Configured cloud hosting on AWS infrastructure with secure API endpoints and optimized asset delivery.'
    ],
    challengesSolved: [
      'Implementing strict status validation transitions preventing samples from being marked as verified without lab technician review.',
      'Creating an intuitive, clean interface tailored for rapid entry by medical staff under high-volume laboratory conditions.'
    ],
    githubUrl: 'https://github.com/Charles787205/dakflo.git'
  },
  {
    id: 'cookery-borrowing',
    title: 'Cookery Borrowing & Inventory System',
    category: 'Desktop & Automation',
    badge: 'Desktop Asset Management',
    previewImage: '/cookery_borrowing_system/Screenshot 2026-01-05 124000.png',
    images: [
      '/cookery_borrowing_system/Screenshot 2026-01-05 124000.png',
      '/cookery_borrowing_system/Screenshot 2026-01-05 123648.png',
      '/cookery_borrowing_system/Screenshot 2026-01-05 131705.png',
      '/cookery_borrowing_system/Screenshot 2026-01-05 131720.png',
      '/cookery_borrowing_system/Screenshot 2026-01-05 131854.png',
      '/cookery_borrowing_system/Screenshot 2026-01-05 131948.png',
      '/cookery_borrowing_system/Screenshot 2026-01-05 132022.png'
    ],
    imageType: 'actual',
    description: 'Desktop asset management system built with Python and PyQt for culinary departments to track cooking utensils, student borrowings, returns, and inventory status.',
    fullOverview: 'Built to replace fragile paper-based checkouts in school culinary laboratories. Enables departmental staff to track expensive culinary equipment, view real-time student borrowings, and automatically flag overdue or damaged utensils.',
    technologies: ['Python', 'PyQt', 'MySQL', 'Relational Database Design'],
    role: 'Desktop Application Developer',
    keyContributions: [
      'Built complete desktop application with PyQt featuring custom themed authentication, inventory catalogs, and checkout logs.',
      'Designed relational database schema enforcing foreign key integrity across students, equipment, and borrowing records.',
      'Implemented automated logic for calculating borrowing durations, return status, and penalty fees for damaged assets.'
    ],
    challengesSolved: [
      'Preventing concurrent duplicate borrowing of limited specialized kitchen equipment through atomic database transaction locks.'
    ],
    githubUrl: 'https://github.com/Charles787205/CookeryBorrowingSystem.git'
  },
  {
    id: 'spx-helper',
    title: 'SPX Tracking Helper',
    category: 'Desktop & Automation',
    badge: 'Browser Automation Extension',
    previewImage: '/SPX Tracking Helper/Screenshot 2025-12-04 165706.png',
    images: [
      '/SPX Tracking Helper/Screenshot 2025-12-04 165706.png'
    ],
    imageType: 'actual',
    description: 'Browser extension built to streamline logistics portal interactions, automating barcode verification, batch tracking, and status retrieval for warehouse dispatch operators.',
    fullOverview: 'Designed for logistics staff handling barcode handovers on carrier web portals. The extension injects automated scanning listeners, reduces redundant manual clicks, and parses carrier responses into clear status indicators.',
    technologies: ['JavaScript', 'React', 'Chrome Extension APIs', 'CSS'],
    role: 'Frontend & Automation Developer',
    keyContributions: [
      'Built Chrome extension interface enabling warehouse personnel to batch scan tracking numbers without manual input re-focusing.',
      'Integrated DOM mutation listeners to instantly catch verification responses from carrier web apps.'
    ],
    challengesSolved: [
      'Injecting robust script automation that remained resilient across carrier web portal UI updates.'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'resolvify',
    role: 'Software Developer — Transport Management System',
    company: 'Resolvify',
    companyType: 'Logistics Software & Systems Development',
    location: 'Remote / Davao City, Philippines',
    period: '2025 – Present',
    current: true,
    description: 'Engineering enterprise transportation and fleet management software designed to automate day-to-day haulage, driver duty shifts, and route drop workflows for corporate clients.',
    responsibilities: [
      'Designed and developed core modules for clients, locations, vehicles, drivers, vendors, and multi-leg trips.',
      'Built duty dispatch engine matching daily client vehicle plans with real-world dispatches and driver assignments.',
      'Architected sequential trip leg execution and waypoint drop records with odometer and arrival/departure verification.',
      'Designed RESTful APIs and backend services using Laravel 11 and TypeScript with Inertia.js React views.',
      'Implemented robust Role-Based Access Control (RBAC) ensuring strict role and data boundary segregation across dispatchers and clients.',
      'Optimized database indexes and relational schemas to handle high-frequency operational updates seamlessly.'
    ],
    technologies: ['Laravel 11', 'React', 'Inertia.js', 'TypeScript', 'MySQL', 'RESTful APIs', 'Tailwind CSS']
  },
  {
    id: 'int-logistics',
    role: 'Software Developer — Logistics Management System',
    company: 'INT Logistics',
    companyType: 'Last-Mile Logistics Operations',
    location: 'Remote / Davao City, Philippines',
    period: '2024 – 2025',
    description: 'Developed and maintained the LM-Dashboard, an operational platform monitoring delivery performance, station throughput, and failed parcel workflows across distribution hubs.',
    responsibilities: [
      'Engineered real-time logistics dashboard tracking tens of thousands of parcels daily across distribution hubs.',
      'Built backend APIs and automated data pipelines to compute Same-Day Out Delivery (SDOD Rate) and Parcel On Floor (POF) metrics.',
      'Developed interactive station analytics that enabled supervisors to spot delivery bottlenecks and underperforming routes.',
      'Designed normalized MySQL schemas and optimized queries for rapid generation of hub reports.',
      'Implemented Excel and PDF export/import workflows supporting operational reporting requirements.'
    ],
    technologies: ['Next.js', 'React', 'Laravel', 'PHP', 'MySQL', 'REST APIs', 'Tailwind CSS']
  },
  {
    id: 'mediaone',
    role: 'Web Development Intern',
    company: 'Media One Solutions',
    companyType: 'Software & Digital Agency',
    location: 'Davao City, Philippines',
    period: '2024',
    description: 'Contributed to the development of dynamic web applications, focusing on real-time interactive forms, authentication, and server-side rendering.',
    responsibilities: [
      'Collaborated on building DynaForm, a dynamic form-builder platform using HTMX for real-time hypermedia interactions.',
      'Engineered drag-and-drop form creation interface supporting custom field types and real-time preview.',
      'Integrated Google OAuth 2.0 authentication using Passport.js and secure session handling.',
      'Developed server-rendered routes with Node.js and Express.js paired with MongoDB document storage.',
      'Optimized client performance by utilizing hypermedia controls without heavy client framework bloat.'
    ],
    technologies: ['HTMX', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Google OAuth 2.0', 'EJS']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    field: 'Computer Science',
    institution: 'University of Mindanao',
    location: 'Davao City, Philippines',
    period: '2021 – 2025',
    highlights: [
      'Specialized in Software Engineering, Database Systems, Web Application Architecture, and Algorithms.',
      'Served as a Student Mentor in the CCE Skills Clinic program, coaching fellow students in programming and databases.',
      'Represented institution in the MCITS IT Olympiad ACM Programming Competition.',
      'Developed full-stack time-series forecasting and business systems projects as capstone and independent studies.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive, and type-safe user interfaces',
    skills: [
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Inertia.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'HTML5 & CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' }
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'Robust server-side services, APIs, and business workflows',
    skills: [
      { name: 'Laravel (PHP)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'Node.js & Express', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'C# & ASP.NET Core', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'Python (FastAPI / Django)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'RESTful API Design', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' }
    ]
  },
  {
    title: 'Databases & ORMs',
    description: 'Relational modeling, indexing, and high-volume persistence',
    skills: [
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'MariaDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg' },
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'SQLite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
      { name: 'Prisma ORM', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
      { name: 'Entity Framework Core', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' }
    ]
  },
  {
    title: 'Cloud, DevOps & Tools',
    description: 'Deployment, containers, Linux environments, and source control',
    skills: [
      { name: 'AWS (EC2 & RDS)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Linux Server', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Nginx', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
      { name: 'Git & GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Electron', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg' }
    ]
  },
  {
    title: 'Architecture & Practices',
    description: 'Architectural patterns and engineering discipline',
    skills: [
      { name: 'Clean Architecture', iconName: 'Layers' },
      { name: 'Modular Monoliths', iconName: 'Boxes' },
      { name: 'Role-Based Access Control (RBAC)', iconName: 'ShieldCheck' },
      { name: 'Database Normalization & Indexing', iconName: 'Database' },
      { name: 'Logistics Workflow Automation', iconName: 'Truck' },
      { name: 'Service-Repository Pattern', iconName: 'Workflow' }
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'certiport-databases',
    title: 'IT Specialist — Databases',
    issuer: 'Certiport (Pearson VUE)',
    date: '2024',
    credentialId: 'fdd1ce6d-af0c-4115-aea8-681b38673300',
    image: '/certificates/database.png',
    description: 'Validates fundamental database concepts including core database objects, DDL/DML query optimization, data manipulation, constraints, and relational storage management.',
    credlyUrl: 'https://www.credly.com/badges/fdd1ce6d-af0c-4115-aea8-681b38673300/linked_in_profile'
  },
  {
    id: 'certiport-html-css',
    title: 'IT Specialist — HTML and CSS',
    issuer: 'Certiport (Pearson VUE)',
    date: '2023',
    credentialId: 'd13049c9-3105-4654-9546-5cceee396523',
    image: '/certificates/html_css.png',
    description: 'Validates foundational knowledge of HTML5 and CSS3, including responsive design, accessible markup, document structure, and cross-browser styling.',
    credlyUrl: 'https://www.credly.com/badges/d13049c9-3105-4654-9546-5cceee396523/linked_in_profile'
  },
  {
    id: 'mentor-clinic',
    title: 'CCE Skills Clinic Mentor Certificate',
    issuer: 'University of Mindanao',
    date: '2024',
    credentialId: 'MENTOR-001',
    image: '/certificates/certificate of mentor.jpg',
    description: 'Awarded for serving as a student mentor in the CCE Skills Clinic program, coaching fellow computer science students in core programming and database concepts.'
  },
  {
    id: 'mcits-olympiad',
    title: 'IT Olympiad ACM Programming Competition',
    issuer: 'MCITS (Mindanao Conference on IT Students)',
    date: '2024',
    credentialId: 'MCITS-001',
    image: '/certificates/mcits.jpg',
    description: 'Certificate of competitive participation in algorithmic programming and problem solving at the regional IT Olympiad.'
  },
  {
    id: 'stacktrek',
    title: 'StackTrek Programming Certification',
    issuer: 'StackTrek',
    date: '2024',
    credentialId: 'STREK-001',
    image: '/certificates/stacktrek.png',
    description: 'Certificate of completion for intensive technical programming and algorithmic problem solving assessment.'
  },
  {
    id: 'psits',
    title: 'Certificate of Participation — PSITS',
    issuer: 'Philippine Society of Information Technology Students',
    date: '2024',
    credentialId: 'PSITS-001',
    image: '/certificates/certificate of participation psits.jpg',
    description: 'Participation in national and regional Information Technology leadership conventions and technical seminars.'
  }
];

export const PROFILE = {
  name: 'Jovian Charles Cañedo',
  shortName: 'Charles Cañedo',
  monogram: 'JCC',
  title: 'Junior Full-Stack Developer specializing in logistics systems and automation',
  summary: 'Computer Science graduate with practical experience building web applications, internal business systems, logistics platforms, operational dashboards, APIs, and database-driven applications. Specializing in high-throughput workflows, fleet dispatching, and process automation.',
  location: 'Davao City, Philippines',
  email: 'joviancharles1210@gmail.com',
  phone: '+63 916 678 7205',
  github: 'https://github.com/Charles787205',
  linkedin: 'https://www.linkedin.com/in/jovian-charles-cañedo',
  resumePdf: '/Jovian Charles Cañedo - Resume.pdf',
  resumeFileName: 'Jovian_Charles_Canedo_Resume.pdf',
  stats: [
    { label: 'Business Systems Built', value: '5+' },
    { label: 'Daily Parcels Monitored', value: '25k+' },
    { label: 'Relational DBs Architected', value: '8+' },
    { label: 'BS in Computer Science', value: '2025' }
  ]
};
