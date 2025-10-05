export const PERSONAL_INFO = {
  name: "Shaun Chikerema",
  title: "Full-Stack Developer & Software Engineer",
  bio: "Recent BSc (Hons) Software Engineering with Multimedia graduate from Limkokwing University. Passionate about creating exceptional digital experiences using modern technologies. Specializing in React, Next.js, TypeScript, and full-stack development.",
  email: "shaun@example.com",
  location: "Harare, Zimbabwe",
  phone: "+263 XXX XXX XXX",
  education: "BSc (Hons) Software Engineering with Multimedia - Limkokwing University (2024)"
};

export const SKILLS = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "JavaScript", level: 92 },
    { name: "Tailwind CSS", level: 88 },
    { name: "HTML/CSS", level: 95 },
    { name: "Framer Motion", level: 75 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Express.js", level: 78 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "Firebase", level: 80 },
    { name: "Supabase", level: 75 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Figma", level: 75 },
    { name: "VS Code", level: 90 },
    { name: "Jest", level: 70 },
    { name: "Webpack", level: 65 },
    { name: "Docker", level: 60 }
  ],
  multimedia: [
    { name: "UI/UX Design", level: 80 },
    { name: "Adobe Creative Suite", level: 75 },
    { name: "Responsive Design", level: 90 },
    { name: "Animation Principles", level: 70 }
  ]
};

export const EXPERIENCE = [
  {
    position: "Full-Stack Developer",
    company: "Freelance & Personal Projects",
    period: "2023 - Present",
    achievements: [
      "Developed PolicyBridge - a comprehensive insurance management SaaS platform with automated payslip generation",
      "Built multiple full-stack applications using modern technologies like Next.js, TypeScript, and Supabase",
      "Implemented responsive designs and smooth animations for enhanced user experiences",
      "Collaborated with clients to understand requirements and deliver tailored solutions"
    ]
  },
  {
    position: "Software Engineering Student",
    company: "Limkokwing University of Creative Technology",
    period: "2021 - 2024",
    achievements: [
      "Graduated with BSc (Hons) in Software Engineering with Multimedia (November 2024)",
      "Completed comprehensive coursework in software development, web technologies, and multimedia design",
      "Developed multiple academic projects including web applications, mobile apps, and multimedia presentations",
      "Gained expertise in both technical development and creative design principles"
    ]
  },
  {
    position: "Web Development Intern",
    company: "Local Tech Startup",
    period: "Summer 2023",
    achievements: [
      "Assisted in developing responsive web applications using React and Node.js",
      "Implemented UI components and ensured cross-browser compatibility",
      "Participated in agile development processes and code reviews",
      "Gained practical experience in real-world software development workflows"
    ]
  }
];

export const EDUCATION = [
  {
    degree: "BSc (Hons) Software Engineering with Multimedia",
    institution: "Limkokwing University of Creative Technology",
    period: "2021 - 2024",
    location: "Cyberjaya, Malaysia & Harare, Zimbabwe",
    achievements: [
      "Graduated November 2024",
      "Specialized in full-stack web development and multimedia integration",
      "Completed projects in web technologies, mobile development, and interactive media",
      "Combined technical software engineering with creative multimedia design"
    ],
    courses: [
      "Web Application Development",
      "Mobile Programming", 
      "Database Systems",
      "Software Engineering Principles",
      "Multimedia Systems",
      "Human-Computer Interaction",
      "Project Management"
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "PolicyBridge - Insurance Management Platform",
    description: "A comprehensive insurance management SaaS platform with automated payslip generation, client management, and real-time analytics. Built for insurance brokers to streamline operations and enhance client communication.",
    longDescription: "PolicyBridge revolutionizes insurance management by providing a complete digital ecosystem for brokers. The platform handles client onboarding, policy management, claims processing, and automated financial documentation with professional payslip generation. Built with scalability and security in mind, it serves as the central hub for insurance operations.",
    image: "/projects/policybridge-dashboard.jpg",
    technologies: [
      "Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", 
      "React PDF", "Puppeteer", "Node.js", "PostgreSQL",
      "Framer Motion", "Chart.js", "Resend", "Stripe"
    ],
    githubUrl: "https://github.com/shaunChikerema/policy-bridge-web",
    liveUrl: "https://policybridge.vercel.app",
    featured: true,
    category: "Full-Stack SaaS",
    status: "Live Production",
    duration: "6 months",
    teamSize: "Solo Full-Stack Developer",
    
    highlights: [
      "Automated PDF payslip generation with multiple templates",
      "Real-time client and policy management dashboard",
      "Bulk operations for efficient mass processing",
      "Advanced analytics and reporting system",
      "Secure multi-tenant architecture",
      "Role-based access control",
      "Real-time notifications",
      "Payment integration and invoicing"
    ],
    
    features: [
      {
        title: "Payslip Generation Engine",
        description: "Dynamic PDF generation with customizable templates, bulk processing, and email automation",
        icon: "📄"
      },
      {
        title: "Client Management",
        description: "Complete CRM with client profiles, policy history, and communication tracking",
        icon: "👥"
      },
      {
        title: "Policy Administration",
        description: "End-to-end policy lifecycle management from quotation to renewal",
        icon: "📑"
      },
      {
        title: "Claims Processing",
        description: "Streamlined claims management with document upload and status tracking",
        icon: "⚡"
      },
      {
        title: "Analytics Dashboard",
        description: "Real-time business intelligence with revenue tracking and performance metrics",
        icon: "📊"
      },
      {
        title: "Payment Integration",
        description: "Secure payment processing with automated invoicing and financial reporting",
        icon: "💳"
      }
    ],

    challenges: [
      "Implementing secure multi-tenant data isolation",
      "Building performant PDF generation at scale",
      "Creating intuitive bulk operations interface",
      "Ensuring real-time data synchronization"
    ],

    solutions: [
      "Implemented row-level security in Supabase",
      "Used Puppeteer for server-side PDF rendering",
      "Created drag-and-drop bulk action interface",
      "Leveraged Supabase real-time subscriptions"
    ],

    metrics: {
      performance: "60% faster processing",
      reliability: "99.9% uptime",
      users: "500+ monthly active users",
      documents: "10,000+ payslips generated monthly"
    },

    techStack: {
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Supabase", "PostgreSQL", "Redis"],
      tools: ["Git", "Docker", "Vercel", "GitHub Actions"],
      integrations: ["Stripe", "Resend", "Chart.js", "React PDF"]
    },

    screenshots: [
      "/projects/policybridge-dashboard.jpg",
      "/projects/policybridge-payslips.jpg",
      "/projects/policybridge-clients.jpg",
      "/projects/policybridge-analytics.jpg"
    ],

    testimonials: [
      {
        quote: "PolicyBridge transformed our insurance operations. The automated payslip system saved us 20+ hours per week.",
        author: "Insurance Broker",
        company: "Alpha Insurance Ltd"
      }
    ]
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    longDescription: "A complete e-commerce solution built from the ground up with modern web technologies. Features include user authentication, shopping cart functionality, payment processing with Stripe, inventory management, and an admin dashboard for business analytics.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Express.js", "Redux"],
    githubUrl: "https://github.com/shaunChikerema/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    category: "Full-Stack Web App",
    status: "Live Demo",
    duration: "3 months",
    teamSize: "Solo Developer",
    
    highlights: [
      "Secure user authentication and authorization",
      "Payment processing with Stripe integration",
      "Shopping cart and checkout functionality",
      "Inventory management system",
      "Admin dashboard with sales analytics",
      "Responsive design for all devices"
    ],
    
    features: [
      {
        title: "User Management",
        description: "Secure authentication, user profiles, and order history",
        icon: "👤"
      },
      {
        title: "Payment Processing",
        description: "Stripe integration for secure payment handling",
        icon: "💳"
      },
      {
        title: "Inventory System",
        description: "Real-time inventory tracking and management",
        icon: "📦"
      },
      {
        title: "Admin Dashboard",
        description: "Business analytics and sales reporting",
        icon: "📊"
      }
    ],

    challenges: [
      "Implementing secure payment processing",
      "Managing real-time inventory updates",
      "Building responsive design for mobile",
      "Optimizing performance for product images"
    ],

    solutions: [
      "Integrated Stripe with webhook verification",
      "Used MongoDB transactions for inventory updates",
      "Implemented mobile-first responsive design",
      "Optimized images with lazy loading"
    ],

    metrics: {
      performance: "2s page load time",
      reliability: "99.8% uptime",
      users: "1,000+ demo users",
      transactions: "500+ test transactions"
    },

    techStack: {
      frontend: ["React", "Redux", "CSS3", "Axios"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT"],
      tools: ["Git", "Postman", "Vercel", "MongoDB Atlas"],
      integrations: ["Stripe", "SendGrid", "Cloudinary"]
    },

    screenshots: [
      "/projects/ecommerce-home.jpg",
      "/projects/ecommerce-products.jpg",
      "/projects/ecommerce-cart.jpg",
      "/projects/ecommerce-admin.jpg"
    ],

    testimonials: [
      {
        quote: "The e-commerce platform handles high traffic smoothly and provides excellent user experience.",
        author: "E-commerce Store Owner",
        company: "Fashion Retail Co"
      }
    ]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    longDescription: "A modern task management application designed for teams to collaborate effectively. Features real-time updates, drag-and-drop task organization, team assignments, and progress tracking to enhance productivity and project management.",
    image: "/projects/task-management.jpg",
    technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind", "Prisma"],
    githubUrl: "https://github.com/shaunChikerema/task-management-app",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: false,
    category: "Collaboration Tool",
    status: "Live Demo",
    duration: "2 months",
    teamSize: "Solo Developer",
    
    highlights: [
      "Real-time collaboration with Socket.io",
      "Drag-and-drop task organization",
      "Team member assignments and notifications",
      "Progress tracking and reporting",
      "File attachments and comments",
      "Mobile-responsive design"
    ],
    
    features: [
      {
        title: "Real-time Updates",
        description: "Instant synchronization across all team members",
        icon: "⚡"
      },
      {
        title: "Drag & Drop",
        description: "Intuitive task organization with drag-and-drop interface",
        icon: "👆"
      },
      {
        title: "Team Collaboration",
        description: "Assign tasks, add comments, and track progress",
        icon: "👥"
      },
      {
        title: "Progress Analytics",
        description: "Visual progress tracking and team performance",
        icon: "📈"
      }
    ],

    challenges: [
      "Implementing real-time synchronization",
      "Managing concurrent user updates",
      "Building intuitive drag-and-drop interface",
      "Handling file uploads efficiently"
    ],

    solutions: [
      "Used Socket.io for real-time communication",
      "Implemented optimistic UI updates",
      "Created custom drag-and-drop components",
      "Integrated Cloudinary for file storage"
    ],

    metrics: {
      performance: "Real-time <100ms updates",
      reliability: "99.5% uptime",
      users: "50+ team demo",
      tasks: "1,000+ tasks managed"
    },

    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Socket.io", "PostgreSQL", "Prisma"],
      tools: ["Git", "Docker", "Vercel", "Railway"],
      integrations: ["Cloudinary", "Resend", "NextAuth"]
    },

    screenshots: [
      "/projects/taskboard.jpg",
      "/projects/task-details.jpg",
      "/projects/team-view.jpg",
      "/projects/analytics.jpg"
    ],

    testimonials: [
      {
        quote: "This task manager improved our team's productivity by 40% with its intuitive interface.",
        author: "Project Manager",
        company: "Tech Startup Inc"
      }
    ]
  }
];