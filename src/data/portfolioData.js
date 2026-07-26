import smartMoneyDashboard from "../assets/projects/smartmoney/dashboard.png";
import smartMoneyExpenses from "../assets/projects/smartmoney/expenses.png";
import smartMoneyAnalytics from "../assets/projects/smartmoney/analytics.png";
import smartMoneySavings from "../assets/projects/smartmoney/savings.png";
import smartMoneyInvestments from "../assets/projects/smartmoney/investments.png";
import smartMoneyRecurring from "../assets/projects/smartmoney/recurring-expenses.png";

import supportDeflector from "../assets/projects/customer-support-deflector.png";
import hireJourney from "../assets/projects/hirejourney.png";
import portfolioWebsite from "../assets/projects/portfolio-website.png";

export const smartMoney = {
  title: "SmartMoney",
  subtitle: "Full-Stack Personal Finance Platform",
  type: "Flagship Project",
  status: "Completed",
  year: "2026",

  description:
    "A full-stack personal finance platform designed to bring expenses, budgets, savings, investments, recurring payments, analytics, and financial reporting into one secure dashboard.",

  overview:
    "SmartMoney evolved from an expense tracker into a modular finance application with authenticated user flows, reusable frontend architecture, REST APIs, financial analytics, security middleware, and exportable reports.",

  github: "https://github.com/MayankSharma1000/SmartMoney",

  tech: [
    "React.js",
    "Vite",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "REST APIs",
  ],

  capabilities: [
    {
      label: "Finance",
      value: "Expenses · Budgets · Savings · Investments",
    },
    {
      label: "Security",
      value: "JWT · Protected Routes · Helmet · Rate Limiting",
    },
    {
      label: "Architecture",
      value: "Reusable Hooks · Modular Components · REST APIs",
    },
    {
      label: "Reporting",
      value: "Analytics · Financial Insights · PDF · Excel",
    },
  ],

  engineering: [
    {
      number: "01",
      title: "Authenticated Application",
      text: "JWT-based authentication, protected application routes, password security, and controlled access to user financial data.",
    },
    {
      number: "02",
      title: "Financial Management",
      text: "Expense tracking, monthly budgets, savings goals, investment monitoring, and recurring expense workflows.",
    },
    {
      number: "03",
      title: "Analytics & Insights",
      text: "Dashboard statistics, financial visualizations, derived calculations, and insight generation from user finance data.",
    },
    {
      number: "04",
      title: "Production-Minded Security",
      text: "Helmet security headers, rate limiting, MongoDB sanitization, CORS configuration, and defensive backend middleware.",
    },
    {
      number: "05",
      title: "Reusable React Architecture",
      text: "Feature-oriented components, reusable hooks, shared utilities, protected routing, and maintainable frontend data flows.",
    },
    {
      number: "06",
      title: "Financial Reporting",
      text: "PDF and Excel report exports designed to turn tracked financial data into portable, useful reports.",
    },
  ],

  gallery: [
    {
      label: "Dashboard",
      image: smartMoneyDashboard,
      description:
        "Unified financial overview with high-level metrics, budgets, spending, savings, investments, and insights.",
    },
    {
      label: "Expenses",
      image: smartMoneyExpenses,
      description:
        "Expense management interface for tracking and organizing transactions.",
    },
    {
      label: "Analytics",
      image: smartMoneyAnalytics,
      description:
        "Visual analytics for understanding financial activity and spending patterns.",
    },
    {
      label: "Savings",
      image: smartMoneySavings,
      description:
        "Goal-based savings tracking with progress visibility.",
    },
    {
      label: "Investments",
      image: smartMoneyInvestments,
      description:
        "Investment monitoring integrated into the wider personal finance experience.",
    },
    {
      label: "Recurring",
      image: smartMoneyRecurring,
      description:
        "Recurring expense management for predictable financial commitments.",
    },
  ],
};

export const projects = [
  {
    title: "Customer Support Deflector",
    subtitle: "AI-Powered Email Assistant",
    type: "AI Project",
    image: supportDeflector,
    status: "Completed",
    year: "2026",
    description:
      "An AI-powered customer support assistant that analyzes incoming emails, detects sentiment, categorizes support issues, and generates professional response drafts using LLM-powered workflows.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "OpenRouter API",
      "AI Integration",
    ],
    github: "https://github.com/MayankSharma1000/Gmail-support-deflector",
  },
  {
    title: "HireJourney",
    subtitle: "Job Application CRM",
    type: "Career Management Platform",
    image: hireJourney,
    status: "Completed",
    year: "2026",
    description:
      "A job application management platform for tracking applications, interview stages, follow-ups, deadlines, recruiter interactions, and hiring progress from a centralized dashboard.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Responsive UI",
    ],
    github: "https://github.com/MayankSharma1000/Hire_Journey",
  },
  {
    title: "Portfolio Website",
    subtitle: "Interactive Developer Portfolio",
    type: "Frontend Project",
    image: portfolioWebsite,
    status: "Live",
    year: "2026",
    description:
      "A React portfolio focused on product presentation, responsive layouts, motion, smooth navigation, and polished interaction design.",
    tech: [
      "React.js",
      "Vite",
      "Framer Motion",
      "CSS",
      "Responsive Design",
    ],
    github: "https://github.com/MayankSharma1000/portfolio-website",
    live: "https://portfolio-website-2jyd.vercel.app",
  },
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
      "Framer Motion",
      "Responsive Design",
      "Component Architecture",
      "Reusable Components",
      "React Hooks",
      "State Management",
      "UI/UX Implementation",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "CRUD Operations",
      "Middleware",
      "Routing",
      "Server-Side Logic",
      "API Integration",
      "Async JavaScript",
      "Promises",
      "Event Loop",
    ],
  },
  {
    title: "Database & Data",
    skills: [
      "MongoDB",
      "Data Modeling",
      "Database Integration",
      "Application Data Flows",
      "Financial Analytics",
      "Derived Calculations",
      "PDF Reporting",
      "Excel Reporting",
    ],
  },
  {
    title: "Authentication & Security",
    skills: [
      "JWT Authentication",
      "Protected Routes",
      "bcrypt.js",
      "Password Hashing",
      "Helmet",
      "Rate Limiting",
      "Mongo Sanitization",
      "CORS",
      "Security Middleware",
      "Access Control",
    ],
  },
  {
    title: "Architecture & Engineering",
    skills: [
      "Full-Stack Architecture",
      "REST Architecture",
      "Modular Components",
      "Reusable Hooks",
      "Shared Utilities",
      "Separation of Concerns",
      "Feature-Oriented Design",
      "Debugging",
      "API Testing",
      "Integration Troubleshooting",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "LLM Integration",
      "OpenRouter API",
      "Prompt Engineering",
      "AI Workflows",
      "Sentiment Analysis",
      "Text Categorization",
      "AI Draft Generation",
      "NLP",
      "Python",
    ],
  },
  {
    title: "Developer Tools & Delivery",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "NPM",
      "VS Code",
      "Chrome DevTools",
      "Vercel",
      "Docker",
      "Build Debugging",
      "Production Builds",
      "Deployment Workflows",
    ],
  },
  {
    title: "Programming & Foundations",
    skills: [
      "JavaScript",
      "Python",
      "C++",
      "OOP",
      "DSA",
      "Asynchronous Programming",
      "Problem Solving",
      "Software Debugging",
      "Responsive Web Development",
    ],
  },
];

export const certifications = [
  {
    title: "MLOps Tools: MLflow and Hugging Face",
    issuer: "Coursera",
    link: "https://coursera.org/share/97816713f79e3771dbcb27929b1dccf8",
  },
  {
    title: "Natural Language Processing with Sequence Models",
    issuer: "Coursera",
    link: "https://coursera.org/share/b4323a22bccb3c039c82a1f29cbadc41",
  },
  {
    title: "Natural Language Processing with Attention Models",
    issuer: "Coursera",
    link: "https://coursera.org/share/796d47aa02eabdb24dee2822f82bd44a",
  },
  {
    title: "Natural Language Processing with Probabilistic Models",
    issuer: "Coursera",
    link: "https://coursera.org/share/062921565ef53b0895982637b9776160",
  },
];
