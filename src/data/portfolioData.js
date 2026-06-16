import expenseTracker from "../assets/projects/expense-tracker.png";
import supportDeflector from "../assets/projects/customer-support-deflector.png";
import hireJourney from "../assets/projects/hirejourney.png";
import portfolioWebsite from "../assets/projects/portfolio-website.png";

export const projects = [
  {
    title: "Smart Expense Tracker",
    subtitle: "Full-Stack Finance Dashboard",
    type: "Featured Project",
    image: expenseTracker,
    featured: true,
    status: "Completed",
    year: "2026",
    description:
      "A full-stack personal finance platform featuring expense tracking, budget management, savings goals, investment monitoring, analytics dashboards, JWT authentication, and intelligent financial insights.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Framer Motion",
    ],
    github: "https://github.com/MayankSharma1000/Smart-expense-tracker",
  },
  {
    title: "Customer Support Deflector",
    subtitle: "AI-Powered Email Assistant",
    type: "AI Project",
    image: supportDeflector,
    featured: true,
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
    featured: false,
    status: "Completed",
    year: "2026",
    description:
      "A modern job application management platform that helps candidates track applications, interview stages, follow-ups, deadlines, recruiter interactions, and overall hiring progress through a centralized dashboard.",
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
    subtitle: "Premium Developer Portfolio",
    type: "Frontend Project",
    image: portfolioWebsite,
    featured: false,
    status: "Live",
    year: "2026",
    description:
      "A premium Apple-inspired developer portfolio built with React, Vite, and Framer Motion. Redesigned from a basic portfolio into a modern interactive experience with smooth scrolling, animated project showcases, technology displays, certification galleries, floating contact dock, project image previews, custom loader, responsive layouts, and polished UI/UX interactions.",
    tech: [
      "React.js",
      "Vite",
      "Framer Motion",
      "CSS",
      "Responsive Design",
      "UI/UX Design"
    ],
    github: "https://github.com/MayankSharma1000/portfolio-website",
    live: "https://portfolio-website-2jyd.vercel.app"
  },
];

export const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Protected Routes",
  "bcrypt.js",
  "Git & GitHub",
  "Postman",
  "VS Code",
  "NPM",
  "C++",
  "Python",
  "AI Integration",
  "OpenRouter API",
  "Prompt Engineering",
  "Framer Motion",
  "Responsive Design",
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