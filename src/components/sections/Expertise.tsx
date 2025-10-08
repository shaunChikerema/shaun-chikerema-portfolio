//src/components/sections/Expertise.tsx
'use client';
import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, Database, Zap, Cpu, GitBranch, Cloud } from 'lucide-react';

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Full-Stack Architecture",
      icon: Cpu,
      description: "End-to-end system design and implementation",
      technologies: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
      applications: [
        "Multi-tenant SaaS platforms",
        "Real-time applications", 
        "API design & integration",
        "Database architecture"
      ],
      projects: ["Keyat", "PolicyBridge"]
    },
    {
      title: "Production Deployment",
      icon: Cloud,
      description: "Scalable infrastructure and DevOps",
      technologies: ["Vercel", "Docker", "GitHub Actions", "AWS", "Redis"],
      applications: [
        "CI/CD pipeline setup",
        "Performance optimization",
        "Monitoring & analytics",
        "Security implementation"
      ],
      projects: ["Keyat", "PolicyBridge", "Task Manager"]
    },
    {
      title: "Frontend Engineering",
      icon: Code2,
      description: "Modern, responsive user interfaces",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"],
      applications: [
        "Component architecture",
        "State management",
        "Performance optimization",
        "Mobile-responsive design"
      ],
      projects: ["Keyat", "PolicyBridge", "Fitness Tracker"]
    },
    {
      title: "Backend Systems",
      icon: Server,
      description: "Robust server-side solutions",
      technologies: ["Node.js", "Express", "PostgreSQL", "Firebase", "REST APIs"],
      applications: [
        "API development",
        "Database design",
        "Authentication systems",
        "Third-party integrations"
      ],
      projects: ["PolicyBridge", "Keyat", "Task Manager"]
    }
  ];

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Technical Capabilities
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
            Engineering Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            How I architect, build, and deploy production-ready applications
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {expertiseAreas.map((area, areaIndex) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: areaIndex * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600">
                    {area.description}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Applications
                </h4>
                <ul className="space-y-2">
                  {area.applications.map((app, appIndex) => (
                    <li key={app} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Applications */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Applied In
                </h4>
                <div className="flex flex-wrap gap-2">
                  {area.projects.map((project, projectIndex) => (
                    <span
                      key={project}
                      className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium border border-gray-300"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodology Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Engineering Methodology
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Production-First",
                  description: "Build for real users from day one with scalability and maintainability in mind"
                },
                {
                  title: "System Design",
                  description: "Architect solutions that handle growth and complexity without breaking"
                },
                {
                  title: "Local Context",
                  description: "Integrate Botswana-specific solutions and understand emerging market dynamics"
                }
              ].map((principle, index) => (
                <div key={index} className="text-center">
                  <div className="w-3 h-3 bg-gray-900 rounded-full mx-auto mb-3"></div>
                  <h4 className="font-semibold text-gray-900 mb-2">{principle.title}</h4>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}