import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Alberto Rescigno",
  initials: "AR",
  url: "https://www.arescigno.dev/",
  location: "Durham, UK",
  locationLink: "https://www.google.com/maps/place/durham",
  description: "MSci Maths and Computer Science @ Durham University",
  summary:
    "Ambitious and driven student with a passion for mathematics, technology, and finance. Currently studying Mathematics & Computer Science at Durham University, where I focus on quantitative methods, algorithmic thinking, and software development. My academic interests lie in quantitative research, AI/ML, and high-performance software engineering, with a particular focus on how mathematical modelling can be applied to financial markets and decision-making. \n\nBeyond academics, I am a national-level swimmer who has competed at British Nationals and World Trials, experiences that have taught me resilience, discipline, and the importance of consistent improvement. I am also a competitive chess player, constantly refining my problem-solving and strategic skills. Outside of sport and study, I actively explore projects in coding, trading, and fintech—building automation tools, data-driven applications, and financial models. \n\nCurrently, I am developing a quant research project in Python that applies backtesting, statistical arbitrage, and algorithmic trading strategies to real market data. This blends my mathematical background with my programming expertise, allowing me to explore the real-world challenges of quantitative finance while strengthening my technical and analytical capabilities.",
  avatarUrl: "/me.png",
} as const;

export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "SQL", icon: "ph:file-sql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Flask", icon: "logos:flask" },
      { name: "Django", icon: "logos:django-icon" },
      { name: "REST APIs", icon: "lucide:cloud-cog" },
      { name: "Pandas", icon: "logos:pandas-icon" },
      { name: "NumPy", icon: "logos:numpy" },
      { name: "Redis", icon: "logos:redis" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Redux", icon: "logos:redux" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Framer Motion", icon: "logos:framer" },
      { name: "Responsive Design", icon: "material-symbols:responsive-layout" },
      { name: "Component Libraries", icon: "lucide:layout" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "CI/CD Pipelines", icon: "material-symbols:sync" },
      { name: "Render / Vercel / Fly.io", icon: "lucide:server" },
      { name: "Infrastructure as Code", icon: "material-symbols:code" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database Design", icon: "material-symbols:database" },
      { name: "Event-Driven Architecture", icon: "lucide:share-2" },
      { name: "Agile / Iterative Learning", icon: "lucide:repeat" },
      { name: "OOP", icon: "material-symbols:code" },
      { name: "Functional Programming", icon: "lucide:function-square" },
      { name: "TDD", icon: "lucide:flask-conical" },
      { name: "Quantitative Modelling", icon: "mdi:function-variant" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "macOS", icon: "logos:apple" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Git / GitHub", icon: "logos:git-icon" },
      { name: "GitHub Copilot", icon: "lucide:bot" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "Cursor", icon: "lucide:terminal" },
      { name: "Jupyter Notebooks", icon: "logos:jupyter" },
      { name: "Notion", icon: "lucide:notebook-text" },
      { name: "Excel", icon: "material-symbols:table-rows-rounded" },
      { name: "Markdown", icon: "mdi:language-markdown" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "Slack ", icon: "logos:slack-icon" },
      { name: "Office Suite", icon: "logos:microsoft-teams" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Vim", icon: "lucide:terminal" },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
] as const;

export const contactData = {
  email: "rescignoalbe@gmail.com",
  tel: "+44 7516 950958",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/albystack",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/resci/",
      icon: Icons.linkedin,
      navbar: true,
    },
    email: {
      name: "Send Email",
      url: "#",
      icon: Icons.email,
      navbar: false,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "Panoraxis",
    href: "https://panoraxis.tech",
    location: "Remote",
    title: "Co-Founder | AI & Automation Agency",
    logoUrl: "/panoraxis-logo.png",
    start: "2024",
    end: "Present",
    description: [
      "Co-founded an AI and automation agency helping SMEs scale with custom chatbots, process automation, and workflow optimisation.",
      "Designed and deployed client-ready AI chatbots with embeddings and RAG, improving FAQ handling and lead conversion.",
      "Built and maintained the agency website using Next.js, React, and TailwindCSS, ensuring a professional, conversion-focused brand.",
      "Worked on large-scale lead generation scrapers (Google Maps, LinkedIn, websites) with email extraction and validation pipelines.",
      "Developed pricing structures, client demos, and long-term SaaS strategy for scalable recurring revenue.",
    ],
  },
  {
    company: "Freelance Development",
    href: "#",
    location: "Remote",
    title: "Full-Stack Developer",
    logoUrl: "/freelance.png",
    start: "2022",
    end: "Present",
    description: [
      "Built custom websites and web applications for small businesses and individuals using React, Next.js, TypeScript, and TailwindCSS.",
      "Developed automation scripts for clients including data scraping, lead generation, and backend process optimisation.",
      "Implemented deployment pipelines using Vercel, Render, and Fly.io for reliable and cost-efficient hosting.",
      "Delivered projects end-to-end: scoping requirements, building MVPs, and iterating with client feedback.",
    ],
  },
  {
    company: "Private Tutoring",
    href: "#",
    location: "UK",
    title: "Maths & Computer Science Tutor",
    logoUrl: "/tutoring.png",
    start: "2023",
    end: "Present",
    description: [
      "Tutored GCSE Maths and Computer Science to GCSE students, with tailored lessons and problem-solving strategies.",
      "Created resources including practice sheets, algorithm walkthroughs, and exam-focused revision guides.",
      "Helped students improve confidence, grades, and preparation for competitive university applications.",
      "Applied advanced concepts such as algorithms, probability, and mechanics in an accessible and structured way.",
    ],
  },
] as const;

export const educationData = [
  {
    school: "Durham University",
    href: "https://www.durham.ac.uk/",
    degree: "MSci Mathematics & Computer Science",
    logoUrl: "/durham.png",
    start: "Sep 2025",
    end: "Present",
    description: [
      "Part of Grey College",
    ],
  },
  {
    school: "Ellesmere College",
    href: "https://www.ellesmere.com/",
    degree: "A-Levels",
    logoUrl: "/ellesmere.png",
    start: "Sep 2023",
    end: "Jun 2025",
    description: [
      "A-Levels: Mathematics (AQA), Further Mathematics (AQA), Physics (OCR), Computer Science (AQA).",
      "Extended Project Qualification (EPQ).",
      "Achievements: Competed at World Trials in London, competitive chess player, active in STEM projects.",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "AQA A-Level Computer Science NEA",
    href: "https://github.com/albystack/cs-nea", 
    dates: "2024–2025",
    active: true,
    description:
      "Coursework project focused on maze generation and pathfinding algorithms. Implemented multiple algorithms (DFS, BFS, A*, Dijkstra) to compare efficiency and visualise paths. Built in Python with a strong emphasis on algorithm design, optimisation, and evaluation for A* grade criteria.",
    technologies: ["Python", "Algorithms", "Data Structures"],
    links: [
      {
        type: "Github",
        href: "https://github.com/albystack/cs-nea",
        icon: "github",
      },
    ],
    image: "/nea-maze.png",
    video: "",
    imageWidth: 600,
    imageHeight: 400,
  },
  {
    title: "Extended Project Qualification (EPQ)",
    href: "",
    dates: "2024–2025",
    active: true,
    description:
      "Independent research project exploring advanced concepts in mathematics, computer science, and their applications. Focused on critical analysis, academic writing, and structured project planning. Achieved significant insights into applying theoretical knowledge to practical contexts.",
    technologies: ["Research", "Academic Writing", "Data Analysis"],
    links: [],
    image: "/epq.png",
    video: "",
    imageWidth: 500,
    imageHeight: 350,
  },
  {
    title: "Carbon Footprint Estimator",
    href: "https://github.com/albystack/epq-code", 
    dates: "2024",
    active: true,
    description:
      "Full-stack React Native application that uses machine learning models to estimate a user’s carbon footprint based on lifestyle inputs. Integrated a Python backend for model training and REST API endpoints. Designed with modern UI for mobile usability and educational impact.",
    technologies: ["React Native", "Python", "Machine Learning", "REST API"],
    links: [
      {
        type: "Github",
        href: "https://github.com/albystack/epq-code",
        icon: "github",
      },
    ],
    image: "/carbon-app.png",
    video: "",
    imageWidth: 550,
    imageHeight: 300,
  },
  {
    title: "Portfolio Website",
    href: "https://arescigno.dev",
    dates: "2025",
    active: true,
    description:
      "Personal portfolio website designed as an interactive showcase of projects, skills, and experiences. Built with Next.js, React, and TailwindCSS, featuring a clean and professional UI with AI-powered chatbot functionality for recruiters to ask questions directly.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    links: [
      {
        type: "Demo",
        href: "https://arescigno.dev:",
        icon: "globe",
      },
    ],
    image: "/portfolio.png",
    video: "",
    imageWidth: 500,
    imageHeight: 300,
  },
  {
    title: "Panoraxis Website",
    href: "https://panoraxis.tech",
    dates: "2024–2025",
    active: true,
    description:
      "Co-developed and deployed the official website for Panoraxis, an AI and automation agency. Built with Next.js and TailwindCSS, with a focus on sleek design, branding, and client conversion. Integrated demos, pricing, and service explanations tailored for SMEs.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    links: [
      {
        type: "Demo",
        href: "https://panoraxis.tech",
        icon: "globe",
      },
    ],
    image: "/panoraxis-website.png",
    video: "",
    imageWidth: 500,
    imageHeight: 300,
  },
] as const;
