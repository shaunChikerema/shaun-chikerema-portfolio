// lib/constants.ts

export const PERSONAL_INFO = {
  name: "Shaun Chikerema",
  title: "Full-Stack & Mobile Developer",
  bio: "Recent BSc (Hons) Software Engineering with Multimedia graduate specializing in React, React Native, and full-stack development. Passionate about creating exceptional digital experiences across web and mobile platforms.",
  email: "sschikerema@gmail.com",
  location: "Gaborone, Botswana",
  phone: "+267 76 051 623",
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
  mobile: [
    { name: "React Native", level: 82 },
    { name: "Expo", level: 75 },
    { name: "Mobile UI/UX", level: 78 },
    { name: "App Store Deployment", level: 70 },
    { name: "Native Modules", level: 65 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Figma", level: 75 },
    { name: "VS Code", level: 90 },
    { name: "Jest", level: 70 },
    { name: "Webpack", level: 65 },
    { name: "Docker", level: 60 },
    { name: "Adobe Creative Suite", level: 75 }
  ]
};

export const EXPERIENCE = [
  {
    position: "Software Engineer & Full Stack Developer",
    company: "Freelance & Personal Projects",
    period: "2023 - Present",
    achievements: [
      "Developed Keyat - Botswana's first comprehensive real estate platform connecting landlords, tenants, and agents",
      "Built PolicyBridge - a comprehensive insurance management SaaS platform with automated payslip generation",
      "Created multiple full-stack applications using modern technologies like Next.js, TypeScript, and Supabase",
      "Developed cross-platform mobile applications with React Native and Expo",
      "Implemented responsive designs and smooth animations for enhanced user experiences across web and mobile",
      "Collaborated with clients to understand requirements and deliver tailored solutions"
    ]
  },
  {
    position: "Software Engineering Student",
    company: "Limkokwing University of Creative Technology",
    period: "2021 - 2024",
    achievements: [
      "Graduated with BSc (Hons) in Software Engineering with Multimedia (November 2024)",
      "Completed comprehensive coursework in software development, web technologies, and mobile development",
      "Developed multiple academic projects including web applications, mobile apps, and multimedia presentations",
      "Gained expertise in both technical development and creative design principles across multiple platforms"
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
    title: "Keyat - Home Rentals & Real Estate Platform",
    description: "Botswana's first comprehensive real estate platform connecting landlords, tenants, agents, and service providers. A complete ecosystem for property rentals, sales, moving services, and financial solutions.",
    longDescription: "Keyat revolutionizes Botswana's real estate market by providing a unified platform for all property-related needs. From finding rental properties and connecting with verified agents to booking moving services and applying for mortgages, Keyat serves as the complete real estate solution for Botswana. The platform features intelligent user onboarding, local payment integration, and a multi-sided marketplace architecture designed to scale across major Botswana cities.",
    image: "/projects/keyat-dashboard.jpg",
    technologies: [
      "Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", 
      "PostgreSQL", "Framer Motion", "React Hook Form", "Zod",
      "Stripe", "Orange Money API", "Map Integration", "Real-time Chat",
      "Payment Processing", "Mobile Responsive", "PWA", "SEO Optimized"
    ],
    githubUrl: "https://github.com/shaunChikerema/keyat-web",
    liveUrl: "https://keyat.vercel.app",
    featured: true,
    category: "Full-Stack Real Estate Platform",
    status: "Live Production",
    duration: "4 months",
    teamSize: "Solo Full-Stack Developer",
    
    highlights: [
      "Multi-sided marketplace for real estate ecosystem",
      "Botswana-specific payment integration (Orange Money, Mascom MyZaka)",
      "Intelligent splash screen with user behavior tracking",
      "Complete property lifecycle management",
      "Real-time notifications and messaging system",
      "Advanced search with geolocation and filters",
      "Secure authentication with role-based access",
      "Mobile-first responsive design with PWA capabilities"
    ],
    
    features: [
      {
        title: "Property Marketplace",
        description: "Complete rental and sales platform with advanced search, filters, and property comparisons",
        icon: "🏠"
      },
      {
        title: "Agent Network",
        description: "Verified real estate agents with ratings, reviews, and commission management",
        icon: "🤝"
      },
      {
        title: "Moving Services",
        description: "Integrated moving company bookings with quotes and scheduling",
        icon: "🚛"
      },
      {
        title: "Payment Integration",
        description: "Local Botswana payment methods including Orange Money and Mascom MyZaka",
        icon: "💰"
      },
      {
        title: "Financial Services",
        description: "Mortgage applications, insurance, and rent-to-own options",
        icon: "📊"
      },
      {
        title: "Intelligent UX",
        description: "Smart splash screens, personalized recommendations, and behavior tracking",
        icon: "🎯"
      }
    ],

    challenges: [
      "Building a multi-tenant architecture for different user types",
      "Implementing Botswana-specific payment gateways",
      "Creating intelligent user onboarding flows",
      "Handling real-time property availability updates",
      "Ensuring data security and privacy compliance"
    ],

    solutions: [
      "Implemented role-based access control with Supabase RLS",
      "Integrated local payment APIs with fallback options",
      "Created intelligent splash screens that adapt to user behavior",
      "Used real-time subscriptions for instant updates",
      "Implemented comprehensive data encryption and validation"
    ],

    metrics: {
      performance: "2.1s initial load time",
      reliability: "99.9% uptime",
      users: "10,000+ target users",
      transactions: "500+ monthly target"
    },

    techStack: {
      frontend: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Supabase", "PostgreSQL", "Node.js", "Redis"],
      mobile: ["PWA", "React Native Ready"],
      tools: ["Git", "Vercel", "GitHub Actions", "Supabase CLI"],
      integrations: ["Stripe", "Orange Money API", "Mapbox", "Resend"]
    },

    screenshots: [
      "/projects/keyat-landing.jpg",
      "/projects/keyat-search.jpg",
      "/projects/keyat-property.jpg",
      "/projects/keyat-dashboard.jpg"
    ],

    testimonials: [
      {
        quote: "Keyat has transformed how we handle property rentals in Botswana. The platform is intuitive and covers all our needs.",
        author: "Real Estate Agent",
        company: "Gaborone Properties"
      }
    ],

    businessImpact: {
      market: "First comprehensive real estate platform in Botswana",
      revenue: "Multiple streams: commissions, subscriptions, ads",
      scalability: "Designed to handle 100,000+ users across Botswana",
      innovation: "Local payment integration and multi-service ecosystem"
    }
  },
  {
    id: 2,
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
  },
  {
    id: 4,
    title: "Mobile Fitness Tracker",
    description: "A React Native fitness tracking app with workout plans, progress analytics, and social features.",
    longDescription: "A comprehensive fitness tracking mobile application built with React Native and Expo. Features include personalized workout plans, progress tracking, social challenges, and integration with health APIs for a complete fitness experience.",
    image: "/projects/fitness-tracker.jpg",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Chart.js", "Health APIs"],
    githubUrl: "https://github.com/shaunChikerema/fitness-tracker",
    liveUrl: "#",
    featured: false,
    category: "Mobile Application",
    status: "In Development",
    duration: "2 months",
    teamSize: "Solo Developer",
    
    highlights: [
      "Cross-platform mobile app (iOS & Android)",
      "Personalized workout plans and tracking",
      "Progress analytics with charts and insights",
      "Social challenges and community features",
      "Health API integration for data sync",
      "Offline functionality"
    ],
    
    features: [
      {
        title: "Workout Plans",
        description: "Customized workout routines based on fitness goals",
        icon: "💪"
      },
      {
        title: "Progress Tracking",
        description: "Visual progress analytics with charts and insights",
        icon: "📊"
      },
      {
        title: "Social Features",
        description: "Challenges and community engagement",
        icon: "👥"
      },
      {
        title: "Health Integration",
        description: "Sync with device health data and APIs",
        icon: "❤️"
      }
    ],

    challenges: [
      "Building smooth animations for workout tracking",
      "Handling offline data synchronization",
      "Optimizing performance for low-end devices",
      "Implementing complex gesture controls"
    ],

    solutions: [
      "Used Reanimated for smooth animations",
      "Implemented offline-first architecture",
      "Optimized bundle size and lazy loading",
      "Created custom gesture handlers"
    ],

    metrics: {
      performance: "60fps animations",
      reliability: "Offline capable",
      users: "Beta testing",
      features: "20+ workout types"
    },

    techStack: {
      frontend: ["React Native", "Expo", "Reanimated", "Redux"],
      backend: ["Firebase", "Node.js", "Express.js"],
      tools: ["Git", "Expo CLI", "Firebase Console", "VS Code"],
      integrations: ["Health APIs", "Push Notifications", "Social Auth"]
    },

    screenshots: [
      "/projects/fitness-home.jpg",
      "/projects/fitness-workout.jpg",
      "/projects/fitness-progress.jpg",
      "/projects/fitness-social.jpg"
    ],

    testimonials: [
      {
        quote: "The fitness tracker makes staying motivated easy with its beautiful interface and social features.",
        author: "Beta Tester",
        company: "Fitness Enthusiast"
      }
    ]
  }
];