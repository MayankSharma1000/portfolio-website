import smartMoneyDashboard from "../assets/projects/smartmoney/dashboard.png";
import smartMoneyExpenses from "../assets/projects/smartmoney/expenses.png";
import smartMoneyAnalytics from "../assets/projects/smartmoney/analytics.png";
import smartMoneySavings from "../assets/projects/smartmoney/savings.png";
import smartMoneyInvestments from "../assets/projects/smartmoney/investments.png";
import smartMoneyRecurring from "../assets/projects/smartmoney/recurring-expenses.png";
import supportDeflector from "../assets/projects/customer-support-deflector.png";

export const fileProcessingSystem = {
  title: "File Processing System",
  subtitle: "Scalable CSV Processing Backend",
  type: "Backend Project",
  status: "In Development",
  year: "2026",

  description:
    "A backend system designed to process large batches of CSV files, compute row-wise aggregates across files, and track processing through persistent batch and job state.",

  github: null,

  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
  ],

  flow: [
    {
      number: "01",
      title: "Batch",
      text: "A processing request groups related input files into a single batch.",
    },
    {
      number: "02",
      title: "Files",
      text: "File metadata and file-to-job relationships are persisted for tracking.",
    },
    {
      number: "03",
      title: "Jobs",
      text: "Individual processing work is represented and tracked independently.",
    },
    {
      number: "04",
      title: "Aggregation",
      text: "Corresponding row values are combined across the input files.",
    },
  ],

  engineering: [
    {
      number: "01",
      title: "Batch-oriented design",
      text: "Separates a collection of input files from the individual work performed on each file.",
    },
    {
      number: "02",
      title: "Persistent state",
      text: "MongoDB stores batch, file, job, and processing-state information so progress is not purely in memory.",
    },
    {
      number: "03",
      title: "Job visibility",
      text: "Batch-level and file-level state provide a clear model for understanding what is being processed.",
    },
    {
      number: "04",
      title: "Backend-first architecture",
      text: "The system is being built around APIs, data models, request handling, and processing workflows rather than a presentation layer.",
    },
  ],
};

export const smartMoney = {
  title: "SmartMoney",
  subtitle: "Full-Stack Personal Finance Platform",
  type: "Flagship Project",
  status: "Completed",
  year: "2026",

  description:
    "A full-stack personal finance platform bringing expenses, budgets, savings, investments, recurring payments, analytics, and financial reporting into one secure dashboard.",

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
      title: "Backend Security",
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
    ],
  },
  {
    title: "Database & Security",
    skills: [
      "MongoDB",
      "Mongoose",
      "Data Modeling",
      "JWT Authentication",
      "Protected Routes",
      "bcrypt",
      "Helmet",
      "Rate Limiting",
      "CORS",
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
      "Separation of Concerns",
      "Feature-Oriented Design",
      "Debugging",
      "API Testing",
      "Integration Troubleshooting",
    ],
  },
  {
    title: "AI & Developer Tools",
    skills: [
      "LLM Integration",
      "OpenRouter API",
      "Prompt Engineering",
      "AI Workflows",
      "Sentiment Analysis",
      "Text Categorization",
      "Git",
      "GitHub",
      "Postman",
      "NPM",
      "VS Code",
      "Chrome DevTools",
      "Docker",
      "Docker Compose",
      "Vercel",
    ],
  },
  {
    title: "Programming Foundations",
    skills: [
      "C++",
      "Python",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Asynchronous Programming",
      "Problem Solving",
    ],
  },
];
