import { Project, SkillCategory, TimelineMilestone, RecruiterQuickGlance } from '../types';

export const PERSONAL_INFO = {
  name: "Muhammad Bashir",
  avatar: "https://i.ibb.co/XZrvvvcR/passport.png",
  roleTitles: [
    "Full-Stack Developer",
    "Data Analyst",
    "Financial Analyst",
    "Business Intelligence Specialist"
  ],
  tagline: "Engineering Scalable Software & Quantitative Intelligence",
  valueProposition: "Bridging robust full-stack web engineering with quantitative data modeling and financial intelligence to build scalable, high-ROI digital solutions.",
  email: "bashman858061@gmail.com",
  phone: "08147196040",
  whatsappNumber: "08147196040",
  whatsappUrl: "https://wa.me/2348147196040",
  snapchatUsername: "basheer_man",
  snapchatUrl: "https://www.snapchat.com/add/basheer_man",
  instagramUsername: "bash_mhan",
  instagramUrl: "https://instagram.com/bash_mhan",
  xUsername: "Basheer_mhan",
  xUrl: "https://x.com/Basheer_mhan",
  twitter: "https://x.com/Basheer_mhan",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Available for Remote & Hybrid Roles Worldwide",
  availability: "Open to Full-Time Roles & Consulting Projects",
};

export const RECRUITER_GLANCE: RecruiterQuickGlance[] = [
  {
    label: "Core Value",
    value: "Engineering + Finance",
    subtext: "Bridges technical code with financial logic"
  },
  {
    label: "Proven ROI",
    value: "35%+ Efficiency",
    subtext: "Documented gains across deployed platforms"
  },
  {
    label: "Tech Scope",
    value: "End-to-End Stack",
    subtext: "React, Node, Python, SQL, Financial Models"
  },
  {
    label: "Delivery Rate",
    value: "100% On-Time",
    subtext: "Production-grade, clean architecture"
  }
];

export const BIO_LINES = [
  "I am a multi-disciplinary technologist operating at the exact intersection of modern software development and quantitative data analytics.",
  "With end-to-end expertise across React, TypeScript, Node.js, Python, and enterprise databases, I build performant web applications backed by resilient backend architectures.",
  "Concurrently, my background in corporate finance, valuation modeling, and business intelligence allows me to design systems that directly optimize revenue and operational efficiency.",
  "Whether engineering complex data pipelines or building interactive analytical dashboards, I focus on ruthless code quality, mathematical precision, and rapid time-to-value."
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "finflow-nexus",
    title: "FinFlow Nexus",
    subtitle: "Enterprise Treasury & Real-Time Cash Flow Analytics",
    tagline: "Autonomous multi-currency reconciliation & predictive liquidity forecasting",
    category: "Full-Stack",
    description: "Architected a full-stack financial control plane automating real-time liquidity tracking across 12 currencies. Integrated automated ledger reconciliation, eliminating 18 hours of weekly manual reporting and accelerating executive cash forecasting by 42%.",
    keyMetric: "42% Faster Forecasts • $2.4M/mo Reconciled",
    metrics: [
      { label: "Forecast Speedup", value: "+42%", trend: "up" },
      { label: "Audit Overhead", value: "-75%", trend: "down" },
      { label: "Query Latency", value: "<95ms", trend: "up" }
    ],
    techStack: ["React 19", "TypeScript", "Node.js", "Python FastAPI", "PostgreSQL", "Tailwind CSS", "Recharts"],
    liveUrl: "https://finflow-nexus-demo.example.com",
    githubUrl: "https://github.com/example/finflow-nexus",
    accentColor: "emerald",
    accentBg: "from-emerald-500/10 to-teal-500/5",
    highlights: [
      "Sub-second aggregation across 50,000+ daily multi-currency transactions",
      "Dynamic sensitivity scenario sliders for interest rate & FX fluctuations",
      "Role-based audit trails and compliant ledger export engine"
    ],
    thumbnailType: "fintech"
  },
  {
    id: "omnisight-bi",
    title: "OmniSight BI",
    subtitle: "Predictive Business Intelligence & Demand Engine",
    tagline: "Machine learning demand forecasting with executive decision dashboards",
    category: "Data & BI",
    description: "Built an end-to-end business intelligence engine combining automated ETL pipelines with Python time-series models (SARIMAX & Prophet). Delivered 94.2% forecast accuracy on quarterly inventory demand, saving over 280 analyst hours monthly.",
    keyMetric: "94.2% Forecast Accuracy • 280+ Hrs Saved/mo",
    metrics: [
      { label: "Forecast Accuracy", value: "94.2%", trend: "up" },
      { label: "Hours Saved", value: "280+/mo", trend: "up" },
      { label: "Data Pipeline", value: "Automated ETL", trend: "up" }
    ],
    techStack: ["Next.js", "Python", "Pandas", "Scikit-learn", "PostgreSQL", "Docker", "D3.js", "Tailwind CSS"],
    liveUrl: "https://omnisight-bi-demo.example.com",
    githubUrl: "https://github.com/example/omnisight-bi",
    accentColor: "sky",
    accentBg: "from-sky-500/10 to-blue-500/5",
    highlights: [
      "Automated ingest of ERP sales data with automated anomaly detection",
      "Interactive cohort retention analysis and revenue attribution modeling",
      "Executive summary exports with one-click PDF and CSV generation"
    ],
    thumbnailType: "bi-dashboard"
  },
  {
    id: "valumetrics-pro",
    title: "ValuMetrics Pro",
    subtitle: "Multi-Asset Valuation & Portfolio Optimization Suite",
    tagline: "Institutional-grade DCF, LBO, and Monte Carlo risk simulations",
    category: "Financial Analysis",
    description: "Engineered a high-performance quantitative valuation engine executing Monte Carlo simulations (10,000 iterations) and Discounted Cash Flow (DCF) models in under 800ms. Empowered investment teams to stress-test assets with instant visual variance analysis.",
    keyMetric: "800ms Monte Carlo Runtime • 99.9% Model Fidelity",
    metrics: [
      { label: "Compute Time", value: "<800ms", trend: "down" },
      { label: "Iterations", value: "10,000 runs", trend: "up" },
      { label: "Model Fidelity", value: "99.9%", trend: "up" }
    ],
    techStack: ["React", "TypeScript", "Python NumPy", "Express", "Redis", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://valumetrics-pro-demo.example.com",
    githubUrl: "https://github.com/example/valumetrics-pro",
    accentColor: "amber",
    accentBg: "from-amber-500/10 to-orange-500/5",
    highlights: [
      "Real-time WACC, Beta, and Gordon Growth Terminal Value sensitivity matrices",
      "Probabilistic Value at Risk (VaR) distribution curves with confidence bounds",
      "Clean modular architecture with zero server-side latency bottlenecks"
    ],
    thumbnailType: "valuation-engine"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    iconName: "Code2",
    description: "Building responsive, resilient, and type-safe web applications from database schemas to interactive frontends.",
    skills: [
      { name: "TypeScript & JavaScript (ES6+)", level: "Expert", badge: "Core" },
      { name: "React 19 & Next.js", level: "Expert", badge: "Frontend" },
      { name: "Node.js & Express", level: "Advanced", badge: "Backend" },
      { name: "Python & FastAPI / Flask", level: "Advanced", badge: "APIs" },
      { name: "PostgreSQL & Supabase", level: "Advanced", badge: "Databases" },
      { name: "MongoDB & NoSQL", level: "Proficient", badge: "Databases" },
      { name: "RESTful & GraphQL APIs", level: "Advanced", badge: "Architecture" },
      { name: "Tailwind CSS & UI Systems", level: "Expert", badge: "Design" }
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Engineering",
    iconName: "Database",
    description: "Extracting actionable intelligence from raw data through robust ETL, statistical modeling, and interactive visualization.",
    skills: [
      { name: "Python (Pandas, NumPy)", level: "Expert", badge: "Analysis" },
      { name: "Advanced SQL & Query Optimization", level: "Expert", badge: "Data" },
      { name: "ETL / ELT Pipeline Design", level: "Advanced", badge: "Pipelines" },
      { name: "Data Visualization (D3.js, Recharts)", level: "Advanced", badge: "BI" },
      { name: "Power BI & Tableau Dashboarding", level: "Advanced", badge: "Reporting" },
      { name: "Statistical Modeling & Forecasting", level: "Advanced", badge: "Stats" },
      { name: "Scikit-Learn & Predictive Models", level: "Proficient", badge: "ML" },
      { name: "Data Cleaning & Anomaly Detection", level: "Expert", badge: "Quality" }
    ]
  },
  {
    id: "financial-analysis",
    title: "Financial & Business Analysis",
    iconName: "TrendingUp",
    description: "Translating fiscal objectives and corporate performance into rigorous financial models and actionable strategies.",
    skills: [
      { name: "Discounted Cash Flow (DCF) Modeling", level: "Expert", badge: "Valuation" },
      { name: "Financial Statement Analysis (3-Statement)", level: "Expert", badge: "Finance" },
      { name: "Budgeting, Forecasting & Variance", level: "Advanced", badge: "Planning" },
      { name: "Monte Carlo & Risk Sensitivity", level: "Advanced", badge: "Risk" },
      { name: "KPI & Unit Economics Architecture", level: "Expert", badge: "Strategy" },
      { name: "Capital Budgeting & NPV / IRR", level: "Advanced", badge: "Decision" },
      { name: "SaaS Metrics (LTV, CAC, NRR)", level: "Advanced", badge: "Metrics" },
      { name: "Executive Stakeholder Storytelling", level: "Expert", badge: "Impact" }
    ]
  },
  {
    id: "tools-devops",
    title: "DevOps, Cloud & Workflow",
    iconName: "Terminal",
    description: "Ensuring continuous reliability, smooth deployment cycles, and structured project execution.",
    skills: [
      { name: "Git, GitHub & Version Control", level: "Expert", badge: "DevOps" },
      { name: "Docker & Containerization", level: "Advanced", badge: "Infra" },
      { name: "Cloud Platforms (GCP / AWS)", level: "Proficient", badge: "Cloud" },
      { name: "CI/CD & Automated Testing (Vitest)", level: "Advanced", badge: "QA" },
      { name: "Linux, Bash & Shell Scripting", level: "Advanced", badge: "CLI" },
      { name: "Postman & API Testing Suites", level: "Expert", badge: "Testing" },
      { name: "Agile, Scrum & Sprint Execution", level: "Expert", badge: "Process" },
      { name: "Performance Profiling & Optimization", level: "Advanced", badge: "Speed" }
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: "exp-1",
    period: "2023 — Present",
    role: "Lead Full-Stack & Data Solutions Engineer",
    organization: "Independent Consultant & Tech Advisor",
    location: "Global / Remote",
    type: "experience",
    summary: "Architecting bespoke web applications, automated business intelligence dashboards, and financial modeling tools for high-growth tech startups and financial services clients.",
    impactMetrics: "+35% client process automation, delivered 12+ production web & BI systems",
    achievements: [
      "Engineered 5 scalable full-stack React/Node.js web applications with 99.9% uptime SLA and sub-100ms response times.",
      "Developed automated Python data pipelines processing 2M+ records monthly, cutting client manual data wrangling by 30+ hours per week.",
      "Built executive-facing financial dashboards combining live ERP feeds with predictive cash-flow forecasting algorithms."
    ],
    skills: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Power BI", "Financial Modeling"]
  },
  {
    id: "exp-2",
    period: "2021 — 2023",
    role: "Full-Stack Developer & Quantitative Analyst",
    organization: "Apex Analytics & Digital Systems",
    location: "Hybrid",
    type: "experience",
    summary: "Spearheaded frontend and backend development for client-facing financial analytics platforms while conducting quantitative risk and valuation analysis.",
    impactMetrics: "Reduced report generation latency by 60%, improved model forecast accuracy to 93%",
    achievements: [
      "Designed and deployed responsive web portals for portfolio tracking, featuring dynamic interactive charts with Recharts and D3.js.",
      "Constructed multi-scenario DCF and LBO financial models directly integrated into client web portals via RESTful APIs.",
      "Collaborated closely with cross-functional product, finance, and engineering teams to translate business requirements into technical specs."
    ],
    skills: ["TypeScript", "Next.js", "Python FastAPI", "Financial Statements", "SQL", "Tailwind CSS"]
  },
  {
    id: "exp-3",
    period: "2019 — 2021",
    role: "Data & Business Analyst",
    organization: "Horizon Financial & Advisory Group",
    location: "On-site / Hybrid",
    type: "experience",
    summary: "Conducted in-depth operational audits, financial variance analyses, and built automated SQL/Excel reporting systems for corporate stakeholders.",
    impactMetrics: "Identified $450k in cost-optimization opportunities; automated 15+ recurring reports",
    achievements: [
      "Developed automated business KPI trackers analyzing revenue trends, gross margins, and customer acquisition efficiency.",
      "Authored weekly executive intelligence memos summarizing market risk, cash burn rate, and capital expenditure forecasts.",
      "Modernized legacy spreadsheet workflows into structured relational SQL databases with automated error handling."
    ],
    skills: ["Advanced SQL", "Business Intelligence", "Financial Modeling", "Data Wrangling", "Excel VBA"]
  },
  {
    id: "edu-1",
    period: "Academic & Certifications",
    role: "B.Sc. in Computer Science & Financial Analytics Track",
    organization: "Higher Education & Professional Institutes",
    location: "Distinction",
    type: "education",
    summary: "Rigorous academic training in algorithms, software engineering principles, distributed systems, applied statistics, and corporate finance.",
    achievements: [
      "Core coursework: Data Structures, Database Management, Quantitative Finance, Econometrics, and Applied Machine Learning.",
      "Continuous professional training in Financial Modeling & Valuation Analyst (FMVA) and Modern Full-Stack Web Development."
    ],
    skills: ["Algorithms", "Database Design", "Quantitative Economics", "Statistical Analysis"]
  }
];
