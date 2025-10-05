export const PERSONAL_INFO = {
  name: "Shaun Chikerema",
  title: "Full-Stack Developer & Software Engineer",
  bio: "I create exceptional digital experiences using modern technologies. Specializing in React, Next.js, TypeScript, and scalable cloud solutions. Passionate about building products that make a difference.",
  email: "shaun@example.com",
  location: "Harare, Zimbabwe",
  phone: "+263 XXX XXX XXX"
};

export const SKILLS = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 92 },
    { name: "HTML/CSS", level: 98 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Express.js", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "PostgreSQL", level: 75 },
    { name: "Firebase", level: 85 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 75 },
    { name: "Figma", level: 80 },
    { name: "Jest", level: 78 },
    { name: "Webpack", level: 72 }
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/project2.jpg",
    technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/project3.jpg",
    technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimized performance.",
    image: "/project4.jpg",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  }
];

export const EXPERIENCE = [
  {
    position: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    achievements: [
      "Led development of a scalable e-commerce platform serving 50,000+ users",
      "Implemented microservices architecture reducing API response time by 40%",
      "Mentored 3 junior developers and established coding standards",
      "Integrated payment systems and improved transaction success rate by 25%"
    ]
  },
  {
    position: "Full-Stack Developer",
    company: "Digital Innovations Ltd",
    period: "2020 - 2022",
    achievements: [
      "Developed 15+ web applications using React and Node.js",
      "Collaborated with UX team to improve user engagement by 35%",
      "Optimized application performance, reducing load times by 60%",
      "Implemented CI/CD pipelines reducing deployment time by 70%"
    ]
  },
  {
    position: "Frontend Developer",
    company: "Web Creators Agency",
    period: "2019 - 2020",
    achievements: [
      "Built responsive websites for 20+ clients across various industries",
      "Transformed design mockups into functional, accessible web applications",
      "Improved website accessibility scores to 95+ on Lighthouse",
      "Collaborated with backend team to design and implement RESTful APIs"
    ]
  }
];