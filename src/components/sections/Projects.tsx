'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, FileText, ArrowRight, Shield, Zap, Database, TrendingUp, Target } from 'lucide-react';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'Keyat',
    tagline: 'Real Estate Platform for Botswana',
    description: 'A full-stack property marketplace connecting buyers, sellers, and agents. Multi-tenant architecture with role-based access, real-time search, and a mobile-first design built for the Botswana market.',
    status: 'Live',
    category: 'Real Estate',
    liveUrl: 'https://keyat.vercel.app',
    accentColor: 'var(--terra)',
    accentPale: 'var(--terra-pale)',
    accentText: 'var(--terra)',
    icon: Building2,
    metrics: [
      { label: 'Multi-tenant', detail: 'Full data isolation', icon: Shield },
      { label: 'Real-time search', detail: 'Optimised queries', icon: Zap },
      { label: 'Mobile-first', detail: 'Responsive design', icon: Target },
    ],
    stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
    features: [
      'Advanced property search with filters',
      'Role-based access (buyers, sellers, agents)',
      'Live listing updates',
      'Secure authentication & encryption',
      'Agent dashboard with analytics',
      'Mobile-responsive design',
    ],
  },
  {
    id: 2,
    title: 'PolicyBridge',
    tagline: 'Insurance Automation SaaS',
    description: 'Enterprise SaaS for insurance brokers to automate policy workflows, generate documents, and manage client renewals. Built for brokers managing high volumes of policies across multiple clients.',
    status: 'Live',
    category: 'Insurance Tech',
    liveUrl: 'https://policybridge.vercel.app',
    accentColor: 'var(--gold)',
    accentPale: 'var(--gold-pale)',
    accentText: 'var(--gold)',
    icon: FileText,
    metrics: [
      { label: 'PDF automation', detail: 'Document generation', icon: Zap },
      { label: 'Renewal tracking', detail: 'Workflow alerts', icon: TrendingUp },
      { label: 'Multi-tenant', detail: 'Per-broker isolation', icon: Database },
    ],
    stack: ['Next.js 15', 'PostgreSQL', 'Node.js', 'Puppeteer', 'Redis'],
    features: [
      'Automated policy document generation',
      'Multi-tenant broker management',
      'Renewal tracking & notifications',
      'Audit trail & compliance logging',
      'Client portal with dashboard',
      'Bulk document processing',
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" style={{ background: 'var(--cream-mid)' }}>
      <div className="rule-thin" />

      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-28 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <div className="section-label mb-4">
            <span style={{ width: 20, height: 1, background: 'var(--terra)', display: 'inline-block' }} />
            Featured Work
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-6">
              <h2
                className="font-display font-bold leading-tight"
                style={{ color: 'var(--ink)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
              >
                <em style={{ color: 'var(--terra)' }}>Production</em><br />Projects
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-body text-base" style={{ color: 'var(--ink-muted)' }}>
                Two full-stack applications built independently, deployed, and serving real users.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            const isExpanded = expanded === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="card overflow-hidden"
              >
                {/* Top accent line */}
                <div className="h-[3px]" style={{ background: project.accentColor }} />

                <div className="p-7 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left: content */}
                    <div className="lg:col-span-8">
                      {/* Title row */}
                      <div className="flex items-start gap-4 mb-5">
                        <div
                          className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                          style={{ background: project.accentPale }}
                        >
                          <Icon className="w-5 h-5" style={{ color: project.accentColor }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-0.5">
                            <h3
                              className="font-display font-bold"
                              style={{ color: 'var(--ink)', fontSize: '1.5rem' }}
                            >
                              {project.title}
                            </h3>
                            <span
                              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-xs font-body font-medium"
                              style={{ background: project.accentPale, color: project.accentText }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.accentColor }} />
                              {project.status}
                            </span>
                          </div>
                          <p className="font-body text-sm" style={{ color: 'var(--ink-faint)' }}>{project.tagline}</p>
                        </div>
                      </div>

                      <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-muted)' }}>
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-5 mb-6">
                        {project.metrics.map((m) => {
                          const MIcon = m.icon;
                          return (
                            <div key={m.label} className="flex items-center gap-2">
                              <MIcon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: project.accentColor }} />
                              <span className="font-body text-xs font-medium" style={{ color: 'var(--ink)' }}>{m.label}</span>
                              <span className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>— {m.detail}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Right: actions */}
                    <div className="lg:col-span-4 flex flex-col gap-2.5 lg:items-stretch">
                      <a
                        href={`/projects/${project.title.toLowerCase()}`}
                        className="btn-primary justify-center group text-sm py-3"
                      >
                        Case Study
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline justify-center text-sm py-3"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Live
                      </a>
                      <button
                        onClick={() => setExpanded(isExpanded ? null : project.id)}
                        className="px-4 py-2.5 rounded-sm font-body text-xs font-medium tracking-wide uppercase transition-all"
                        style={{
                          color: project.accentText,
                          background: project.accentPale,
                          border: '1px solid transparent',
                        }}
                      >
                        {isExpanded ? 'Hide Features' : 'Key Features'}
                      </button>
                    </div>
                  </div>

                  {/* Expandable features */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-7 pt-7" style={{ borderTop: '1px solid var(--border)' }}>
                      <p className="section-label mb-4">Key Features</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {project.features.map((f, fi) => (
                          <div key={fi} className="flex items-start gap-2.5">
                            <div className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                            <span className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{f}</span>
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

        {/* Summary block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 card-dark p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Stack', value: 'Next.js 15 + PostgreSQL' },
              { label: 'Architecture', value: 'Multi-tenant, isolated data' },
              { label: 'Deployment', value: 'Live on Vercel' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--terra-light)' }} />
                <div>
                  <p className="font-body text-xs font-medium mb-0.5" style={{ color: 'rgba(247,243,236,0.45)' }}>{item.label}</p>
                  <p className="font-display text-base font-semibold" style={{ color: 'var(--cream)' }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="rule-thin" />
    </section>
  );
}