export const PERSONAL_INFO = {
  name: "Shaun Chikerema",
  title: "Full-Stack Developer & Software Engineer",
  email: "shaun@chikerema.com",
  location: "Harare, Zimbabwe",
  bio: "Passionate about creating elegant solutions to complex problems. Specializing in modern web technologies and scalable architecture.",
};

export const EXPERTISE = [
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Linux"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Enterprise SaaS Platform",
    description: "Scalable B2B solution with real-time analytics and multi-tenant architecture",
    longDescription: "Built a comprehensive SaaS platform serving 50+ enterprise clients with features including real-time dashboards, automated reporting, and secure multi-tenancy isolation.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    github: "#",
    live: "#",
    image: "/images/projects/saas-platform.jpg",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Machine learning insights with predictive analytics and custom reporting",
    technologies: ["React", "Python", "FastAPI", "TensorFlow", "D3.js"],
    github: "#",
    live: "#",
    image: "/images/projects/ai-dashboard.jpg",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Microservices",
    description: "Distributed system with event-driven architecture",
    technologies: ["Microservices", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
    github: "#",
    live: "#",
    image: "/images/projects/ecommerce.jpg",
    featured: false
  }
];

export const EXPERIENCE = [
  {
    company: "Tech Solutions Inc.",
    position: "Senior Full Stack Developer",
    period: "2022 - Present",
    achievements: [
      "Led development of microservices architecture serving 1M+ users",
      "Reduced page load times by 60% through performance optimization",
      "Mentored 3 junior developers and established coding standards"
    ]
  },
  {
    company: "Digital Agency",
    position: "Frontend Developer",
    period: "2020 - 2022",
    achievements: [
      "Developed 15+ client websites with modern React/Next.js stack",
      "Implemented responsive designs with 99% cross-browser compatibility",
      "Improved Core Web Vitals scores by 40% across all projects"
    ]
  }
];