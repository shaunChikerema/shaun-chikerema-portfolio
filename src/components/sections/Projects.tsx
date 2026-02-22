'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, ArrowRight, Shield, Zap, Target, TrendingUp, Database, FileText, Code2, Rocket } from 'lucide-react';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: "Keyat",
    tagline: "Real Estate Platform for Botswana",
    description: "Full-stack property marketplace connecting buyers, sellers, and agents across Botswana.",
    longDescription: "Multi-tenant architecture with role-based access control. Real-time property search with advanced filters, secure authentication, and mobile-responsive design.",
    status: "Live",
    category: "Real Estate",
    liveUrl: "https://keyat.vercel.app",
    accent: 'var(--terra)',
    accentPale: 'var(--terra-pale)',
    icon: Building2,
    metrics: [
      { label: "Multi-tenant", value: "Data isolation", icon: Shield },
      { label: "Fast Search", value: "Optimized queries", icon: Zap },
      { label: "Mobile-first", value: "Responsive design", icon: Target }
    ],
    techStack: ["Next.js 15", "PostgreSQL", "TypeScript", "Supabase", "Tailwind CSS"],
    keyFeatures: [
      "Advanced property search with filters",
      "Role-based access control (buyers, sellers, agents)",
      "Real-time listings with live updates",
      "Secure authentication & data encryption",
      "Mobile-responsive design",
      "Agent dashboard with analytics"
    ]
  },
  {
    id: 2,
    title: "PolicyBridge",
    tagline: "Insurance Automation Platform",
    description: "Enterprise SaaS for insurance brokers to automate workflows and document generation.",
    longDescription: "Streamlines policy processing with automated PDF generation, renewal tracking, and compliance management. Built for brokers managing multiple clients.",
    status: "Live",
    category: "Insurance Tech",
    liveUrl: "https://policybridge.vercel.app",
    accent: 'var(--gold)',
    accentPale: 'var(--gold-pale)',
    icon: FileText,
    metrics: [
      { label: "Automation", value: "PDF generation", icon: Zap },
      { label: "Workflow", value: "Process tracking", icon: TrendingUp },
      { label: "Multi-tenant", value: "Broker isolation", icon: Database }
    ],
    techStack: ["Next.js 15", "PostgreSQL", "Node.js", "Puppeteer", "Redis"],
    keyFeatures: [
      "Automated policy document generation",
      "Multi-tenant broker management",
      "Renewal tracking & notifications",
      "Audit trail & compliance logging",
      "Client portal with dashboard",
      "Bulk document processing"
    ]
  }
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden" style={{ background: 'var(--cream-dark)' }}>
      <div className="rule-ornate" />

      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20"
        >
          <div>
            <div className="section-label mb-5">
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
              Featured Work
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight" style={{ color: 'var(--ink)' }}>
              <em style={{ color: 'var(--terra)' }}>Production</em><br />Projects
            </h2>
          </div>
          <p className="font-body text-base leading-relaxed max-w-xs lg:text-right" style={{ color: 'var(--ink-muted)' }}>
            Two full-stack web applications built from scratch, deployed, and serving real users.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            const isExpanded = expandedProject === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="overflow-hidden rounded-sm"
                style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}
              >
                {/* Accent top bar */}
                <div className="h-1 w-full" style={{ background: project.accent }} />

                <div className="p-8 lg:p-12">
                  {/* Project header */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                    <div className="lg:col-span-8">
                      <div className="flex items-start gap-5 mb-5">
                        <div
                          className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                          style={{ background: project.accentPale }}
                        >
                          <Icon className="w-6 h-6" style={{ color: project.accent }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-display text-3xl font-bold" style={{ color: 'var(--ink)' }}>{project.title}</h3>
                            <span
                              className="px-2 py-0.5 rounded-sm text-xs font-body font-medium flex items-center gap-1"
                              style={{ background: project.accentPale, color: project.accent }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.accent }} />
                              {project.status}
                            </span>
                          </div>
                          <p className="font-body text-sm font-medium" style={{ color: 'var(--ink-faint)' }}>{project.tagline}</p>
                        </div>
                      </div>

                      <p className="font-body text-base leading-relaxed mb-5" style={{ color: 'var(--ink-muted)' }}>
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        {project.metrics.map(m => {
                          const MIcon = m.icon;
                          return (
                            <div key={m.label} className="flex items-center gap-2">
                              <MIcon className="w-3.5 h-3.5" style={{ color: project.accent }} />
                              <span className="font-body text-sm font-medium" style={{ color: 'var(--ink)' }}>{m.label}</span>
                              <span className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>— {m.value}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-sm text-xs font-body font-medium"
                            style={{ background: 'var(--cream-dark)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                      <a
                        href={`/projects/${project.title.toLowerCase()}`}
                        className="group flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm text-sm font-medium font-body text-white transition-all"
                        style={{ background: 'var(--ink)' }}
                      >
                        Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm text-sm font-medium font-body transition-all"
                        style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid rgba(26,23,20,0.2)' }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                      <button
                        onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                        className="px-5 py-3 rounded-sm text-xs font-body font-medium tracking-wide uppercase transition-all"
                        style={{ color: project.accent, background: project.accentPale, border: 'none' }}
                      >
                        {isExpanded ? 'Hide Features' : 'Key Features'}
                      </button>
                    </div>
                  </div>

                  {/* Expandable features */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t" style={{ borderColor: 'rgba(26,23,20,0.1)' }}>
                      <div className="section-label mb-4">Key Features</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {project.keyFeatures.map((feature, fi) => (
                          <div key={fi} className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                            <span className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Shared infrastructure note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-10 rounded-sm text-center"
          style={{ background: 'var(--ink)' }}
        >
          <div className="w-10 h-10 rounded-sm flex items-center justify-center mx-auto mb-5" style={{ background: 'var(--terra)' }}>
            <Code2 className="w-5 h-5" style={{ color: 'var(--cream)' }} />
          </div>
          <h3 className="font-display text-2xl font-bold mb-3" style={{ color: 'var(--cream)' }}>Shared Infrastructure</h3>
          <p className="font-body text-sm leading-relaxed max-w-xl mx-auto mb-8" style={{ color: 'rgba(245,240,232,0.65)' }}>
            Both platforms built on modern stack with multi-tenant architecture, complete data isolation, and production-grade security. Deployed on Vercel with continuous monitoring.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { icon: Code2, label: "Full-Stack", value: "Next.js 15 + PostgreSQL" },
              { icon: Database, label: "Multi-Tenant", value: "Isolated data per user" },
              { icon: Rocket, label: "Production", value: "Live on Vercel" }
            ].map((item, i) => {
              const IIcon = item.icon;
              return (
                <div key={i} className="text-center">
                  <IIcon className="w-5 h-5 mx-auto mb-2" style={{ color: 'var(--terra-light)' }} />
                  <div className="font-body text-sm font-medium" style={{ color: 'var(--cream)' }}>{item.label}</div>
                  <div className="font-body text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>{item.value}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div className="rule-ornate" />
    </section>
  );
}