'use client';
import { motion } from 'framer-motion';
import { Code2, Server, Cpu, Cloud } from 'lucide-react';

const AREAS = [
  {
    icon: Cpu,
    title: 'Full-Stack Development',
    desc: 'End-to-end system design — from schema to shipped UI.',
    tech: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase'],
  },
  {
    icon: Code2,
    title: 'Frontend Engineering',
    desc: 'Performant, accessible interfaces built mobile-first.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'React Native'],
  },
  {
    icon: Server,
    title: 'Backend & Data',
    desc: 'Robust APIs, multi-tenant architecture, and secure data models.',
    tech: ['Express', 'REST APIs', 'Firebase', 'Puppeteer', 'Redis'],
  },
  {
    icon: Cloud,
    title: 'Deployment & DevOps',
    desc: 'Production infrastructure, CI/CD, and monitoring.',
    tech: ['Vercel', 'Docker', 'GitHub Actions', 'AWS'],
  },
];

const APPROACHES = [
  { title: 'Ship real things', body: 'Every project I touch goes live. No abandoned demos, no endless iterations in dev.' },
  { title: 'Production mindset', body: 'Security, monitoring, and performance are part of the build — not afterthoughts.' },
  { title: 'Self-directed', body: 'Self-taught developer who learns by doing. Fast to pick up new tools and adapt.' },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--cream)' }}>
      <div className="divider" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Technical Skills</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">
            <div className="lg:col-span-6">
              <h2
                className="font-display font-bold leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--ink)', letterSpacing: '-0.025em' }}
              >
                What I work<br />
                <em style={{ color: 'var(--terra)' }}>with</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                Focused on the modern full-stack. Every tool below has been used in a deployed production project.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skill areas — 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: i * 0.07 }}
                className="card p-6"
              >
                <div className="flex items-start gap-3.5 mb-4">
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--terra-pale)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: 'var(--terra)' }} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base mb-0.5" style={{ color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                      {area.title}
                    </h3>
                    <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                      {area.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {area.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="divider mb-14" />

        {/* Working style — dark strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-ink p-8 lg:p-10">
            <p className="eyebrow mb-8" style={{ color: 'var(--terra-dim)' }}>
              How I work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {APPROACHES.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--terra-dim)' }} />
                  <div>
                    <h4 className="font-display font-semibold text-base mb-1.5" style={{ color: 'var(--cream)', letterSpacing: '-0.01em' }}>
                      {a.title}
                    </h4>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(246,241,234,0.5)' }}>
                      {a.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
      <div className="divider" />
    </section>
  );
}