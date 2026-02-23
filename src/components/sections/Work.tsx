'use client';
import { motion } from 'framer-motion';
import {
  ExternalLink, ArrowRight, Building2, FileText,
  Shield, Zap, Database, TrendingUp, Target, Calendar,
} from 'lucide-react';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'Keyat',
    tagline: 'Real Estate Platform · Botswana',
    description:
      'Full-stack property marketplace connecting buyers, sellers, and agents. Multi-tenant architecture with role-based access, real-time search, secure authentication, and a mobile-first UI built for the local market.',
    url: 'https://keyat.vercel.app',
    icon: Building2,
    accent: 'var(--terra)',
    accentPale: 'var(--terra-pale)',
    stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
    metrics: [
      { label: 'Multi-tenant',   detail: 'Full data isolation',  icon: Shield },
      { label: 'Real-time search', detail: 'Optimised queries', icon: Zap },
      { label: 'Mobile-first',   detail: 'Responsive design',    icon: Target },
    ],
    features: [
      'Advanced property search with filters',
      'Role-based access — buyers, sellers, agents',
      'Live listing updates',
      'Secure auth & encrypted data',
      'Agent analytics dashboard',
    ],
  },
  {
    id: 2,
    title: 'PolicyBridge',
    tagline: 'Insurance Automation SaaS',
    description:
      'Enterprise SaaS for insurance brokers to automate policy workflows and document generation. Handles renewal tracking, compliance logging, and bulk PDF processing for brokers managing high client volumes.',
    url: 'https://policybridge.vercel.app',
    icon: FileText,
    accent: '#7A5C2E',
    accentPale: 'var(--cream-dark)',
    stack: ['Next.js 15', 'PostgreSQL', 'Node.js', 'Puppeteer', 'Redis'],
    metrics: [
      { label: 'PDF automation',   detail: 'Document generation',    icon: Zap },
      { label: 'Renewal tracking', detail: 'Workflow alerts',         icon: TrendingUp },
      { label: 'Multi-tenant',     detail: 'Per-broker isolation',    icon: Database },
    ],
    features: [
      'Automated policy document generation',
      'Renewal tracking & notifications',
      'Audit trail & compliance logging',
      'Client portal with dashboard',
      'Bulk document processing',
    ],
  },
];

export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="work" style={{ background: 'var(--cream-mid)' }}>
      <div className="divider" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Featured Work</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">
            <div className="lg:col-span-6">
              <h2
                className="font-display font-bold leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--ink)', letterSpacing: '-0.025em' }}
              >
                Production<br />
                <em style={{ color: 'var(--terra)' }}>Projects</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                Two full-stack applications built independently from scratch — architected, coded, deployed, and maintained by me.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Project cards ── */}
        <div className="space-y-5 mb-16">
          {PROJECTS.map((p, idx) => {
            const Icon = p.icon;
            const isOpen = expanded === p.id;
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: idx * 0.1 }}
                className="card overflow-hidden"
              >
                {/* Accent bar */}
                <div style={{ height: 3, background: p.accent }} />

                <div className="p-7 lg:p-9">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">

                    {/* Content */}
                    <div className="lg:col-span-8">
                      <div className="flex items-start gap-4 mb-5">
                        <div
                          className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                          style={{ background: p.accentPale }}
                        >
                          <Icon className="w-5 h-5" style={{ color: p.accent }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5 mb-0.5 flex-wrap">
                            <h3
                              className="font-display font-bold"
                              style={{ fontSize: '1.35rem', color: 'var(--ink)', letterSpacing: '-0.02em' }}
                            >
                              {p.title}
                            </h3>
                            <span
                              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm font-body font-medium"
                              style={{ fontSize: '0.65rem', background: p.accentPale, color: p.accent }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: p.accent }} />
                              Live
                            </span>
                          </div>
                          <p className="font-body font-medium" style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', letterSpacing: '0.04em' }}>
                            {p.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-muted)', lineHeight: 1.72 }}>
                        {p.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-5 mb-5">
                        {p.metrics.map(m => {
                          const MIcon = m.icon;
                          return (
                            <div key={m.label} className="flex items-center gap-1.5">
                              <MIcon className="w-3.5 h-3.5" style={{ color: p.accent }} />
                              <span className="font-body font-medium" style={{ fontSize: '0.76rem', color: 'var(--ink)' }}>{m.label}</span>
                              <span className="font-body" style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>· {m.detail}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="lg:col-span-4 flex flex-col gap-2">
                      <a href={`/projects/${p.title.toLowerCase()}`} className="btn btn-dark group text-xs py-3">
                        Case Study
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-xs py-3">
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Live
                      </a>
                      <button
                        onClick={() => setExpanded(isOpen ? null : p.id)}
                        className="btn text-xs py-2.5 font-medium"
                        style={{ background: p.accentPale, color: p.accent, border: 'none' }}
                      >
                        {isOpen ? 'Hide details' : 'Key features'}
                      </button>
                    </div>
                  </div>

                  {/* Expandable features */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-7 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                      <p className="eyebrow mb-4" style={{ fontSize: '0.6rem' }}>Key Features</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {p.features.map((f, fi) => (
                          <li key={fi} className="flex items-start gap-2.5">
                            <div className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: p.accent }} />
                            <span className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ── Divider ── */}
        <div className="divider mb-16" />

        {/* ── Background strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="eyebrow mb-8">Background</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="card p-7"
          >
            <div className="flex items-start justify-between mb-5 gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-0.5" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>
                  Independent Developer
                </h3>
                <p className="font-body font-semibold text-sm" style={{ color: 'var(--terra)' }}>BITROOT</p>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5" style={{ color: 'var(--ink-muted)' }}>
                <Calendar className="w-3 h-3" style={{ color: 'var(--terra)' }} />
                <span className="font-body text-xs">2024 – Present</span>
              </div>
            </div>
            <ul className="space-y-2.5">
              {[
                'Architected and shipped two production platforms from scratch',
                'Multi-tenant database design with complete tenant data isolation',
                'CI/CD pipelines, Vercel deployments, performance monitoring',
                'Secure authentication, role-based access, audit logging',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--terra)' }} />
                  <span className="font-body text-sm" style={{ color: 'var(--ink-muted)', lineHeight: 1.65 }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="card p-7 flex flex-col justify-between"
          >
            <div>
              <p className="eyebrow mb-5" style={{ fontSize: '0.6rem' }}>Education</p>
              <h3
                className="font-display font-bold leading-snug mb-2"
                style={{ fontSize: '1.1rem', color: 'var(--ink)', letterSpacing: '-0.015em' }}
              >
                BSc Software Engineering<br />with Multimedia
              </h3>
              <p className="font-body text-sm mb-1" style={{ color: 'var(--ink-muted)' }}>
                Limkokwing University of Creative Technology
              </p>
              <p className="font-body text-xs" style={{ color: 'var(--ink-muted)' }}>
                Gaborone, Botswana · 2019 – 2024
              </p>
            </div>

            {/* Stack summary */}
            <div className="mt-7 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
              <p className="eyebrow mb-3" style={{ fontSize: '0.6rem' }}>Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Node.js', 'Vercel'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
      <div className="divider" />
    </section>
  );
}