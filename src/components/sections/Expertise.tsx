'use client';
import { motion } from 'framer-motion';
import { Code2, Server, Zap, Cpu, Cloud } from 'lucide-react';

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Full-Stack Development",
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
      title: "Cloud Infrastructure",
      icon: Cloud,
      description: "Scalable deployment and DevOps",
      technologies: ["Vercel", "Docker", "GitHub Actions", "AWS", "Redis"],
      applications: [
        "CI/CD pipeline setup",
        "Performance optimization",
        "Monitoring & analytics",
        "Security implementation"
      ],
      projects: ["Keyat", "PolicyBridge"]
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
      projects: ["Keyat", "PolicyBridge"]
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
      projects: ["PolicyBridge", "Keyat"]
    }
  ];

  return (
    <section id="expertise" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Grid Pattern Only */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-200 text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Skills</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Technical
            </span>
            {' '}Expertise
          </h2>
          <p className="text-xl text-zinc-200 max-w-3xl leading-relaxed">
            Building and deploying production-ready applications
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {expertiseAreas.map((area, areaIndex) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: areaIndex * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/10 to-emerald-500/0 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg blur-md opacity-50" />
                      <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-zinc-300 text-sm">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 text-zinc-200 rounded-md text-xs font-medium border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                      Applications
                    </h4>
                    <ul className="space-y-2">
                      {area.applications.map((app) => (
                        <li key={app} className="flex items-start group/item">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-zinc-300 text-sm group-hover/item:text-zinc-200 transition-colors">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Applications */}
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                      Projects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {area.projects.map((project) => (
                        <span
                          key={project}
                          className="px-3 py-1 bg-white/5 text-zinc-300 rounded-md text-xs font-medium border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Methodology Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/10 to-cyan-500/0 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-8 text-center">
                Development Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "User-Focused",
                    description: "Building applications with real-world users and scalability in mind"
                  },
                  {
                    title: "Modern Stack",
                    description: "Using current technologies and best practices for maintainable code"
                  },
                  {
                    title: "Production-Ready",
                    description: "Delivering deployed applications with monitoring and performance optimization"
                  }
                ].map((principle, index) => (
                  <div key={index} className="text-center group/principle">
                    <div className="relative inline-block mb-3">
                      <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-0 group-hover/principle:opacity-50 transition-opacity" />
                      <div className="relative w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm group-hover/principle:text-cyan-400 transition-colors">
                      {principle.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}