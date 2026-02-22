'use client';
import { motion } from 'framer-motion';
import { Code2, Server, Cpu, Cloud } from 'lucide-react';

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Full-Stack Development",
      icon: Cpu,
      description: "End-to-end system design and implementation",
      technologies: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
      applications: ["Multi-tenant SaaS platforms", "Real-time applications", "API design & integration", "Database architecture"],
      projects: ["Keyat", "PolicyBridge"]
    },
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      description: "Scalable deployment and DevOps",
      technologies: ["Vercel", "Docker", "GitHub Actions", "AWS", "Redis"],
      applications: ["CI/CD pipeline setup", "Performance optimization", "Monitoring & analytics", "Security implementation"],
      projects: ["Keyat", "PolicyBridge"]
    },
    {
      title: "Frontend Engineering",
      icon: Code2,
      description: "Modern, responsive user interfaces",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"],
      applications: ["Component architecture", "State management", "Performance optimization", "Mobile-responsive design"],
      projects: ["Keyat", "PolicyBridge"]
    },
    {
      title: "Backend Systems",
      icon: Server,
      description: "Robust server-side solutions",
      technologies: ["Node.js", "Express", "PostgreSQL", "Firebase", "REST APIs"],
      applications: ["API development", "Database design", "Authentication systems", "Third-party integrations"],
      projects: ["PolicyBridge", "Keyat"]
    }
  ];

  return (
    <section id="expertise" className="relative overflow-hidden" style={{ background: 'var(--cream)' }}>
      <div className="rule-ornate" />

      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="section-label mb-5">
            <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
            Technical Skills
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight" style={{ color: 'var(--ink)' }}>
            Technical <em style={{ color: 'var(--terra)' }}>Expertise</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {expertiseAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-warm p-8 group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--terra-pale)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'var(--terra)' }} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-0.5 group-hover:transition-colors"
                      style={{ color: 'var(--ink)' }}>
                      {area.title}
                    </h3>
                    <p className="font-body text-sm" style={{ color: 'var(--ink-faint)' }}>
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-5">
                  <div className="section-label mb-3">Technologies</div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-sm text-xs font-body font-medium"
                        style={{ background: 'var(--cream)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-5">
                  <div className="section-label mb-3">Applications</div>
                  <ul className="space-y-1.5">
                    {area.applications.map(app => (
                      <li key={app} className="flex items-start gap-2.5">
                        <div className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--terra)' }} />
                        <span className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                <div>
                  <div className="section-label mb-3">Projects</div>
                  <div className="flex gap-2">
                    {area.projects.map(p => (
                      <span
                        key={p}
                        className="px-3 py-1 rounded-sm text-xs font-body font-medium"
                        style={{ background: 'var(--terra-pale)', color: 'var(--terra)' }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Development Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-10 rounded-sm"
          style={{ background: 'var(--ink)' }}
        >
          <div className="section-label mb-8 justify-center" style={{ color: 'var(--terra-light)' }}>
            <span className="w-4 h-px inline-block" style={{ background: 'var(--terra-light)' }} />
            Development Approach
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "User-Focused", description: "Building applications with real-world users and scalability in mind" },
              { title: "Modern Stack", description: "Using current technologies and best practices for maintainable code" },
              { title: "Production-Ready", description: "Delivering deployed applications with monitoring and performance optimization" }
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-1.5 h-1.5 rounded-full mx-auto mb-4" style={{ background: 'var(--terra-light)' }} />
                <h4 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--cream)' }}>{p.title}</h4>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>{p.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="rule-ornate" />
    </section>
  );
}