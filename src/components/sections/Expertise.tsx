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
    <section id="expertise" className="py-24 lg:py-32 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 max-w-3xl">
            Engineering Expertise
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            How I architect, build, and deploy production-ready applications
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {expertiseAreas.map((area, areaIndex) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: areaIndex * 0.1 }}
              className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <area.icon className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {area.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {area.description}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs font-medium border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">
                  Applications
                </h4>
                <ul className="space-y-2">
                  {area.applications.map((app) => (
                    <li key={app} className="flex items-start">
                      <div className="w-1 h-1 bg-zinc-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-zinc-400 text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Applications */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">
                  Applied In
                </h4>
                <div className="flex flex-wrap gap-2">
                  {area.projects.map((project) => (
                    <span
                      key={project}
                      className="px-3 py-1 bg-zinc-800/50 text-zinc-400 rounded-md text-xs font-medium border border-zinc-800"
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
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800">
            <h3 className="text-xl font-semibold text-white mb-8 text-center">
              Engineering Methodology
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className="w-2 h-2 bg-white rounded-full mx-auto mb-3"></div>
                  <h4 className="font-semibold text-white mb-2 text-sm">{principle.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}