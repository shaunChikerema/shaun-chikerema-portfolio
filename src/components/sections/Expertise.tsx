'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const techStack = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'Firebase', category: 'Services' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Puppeteer', category: 'Automation' },
];

const highlights = [
  { label: 'Full-stack web apps', sub: 'End-to-end development from schema to UI' },
  { label: 'Multi-tenant SaaS', sub: 'Isolated data architecture per tenant' },
  { label: 'Real estate platforms', sub: 'Property search, listings & dashboards' },
  { label: 'Business automation', sub: 'Document generation & workflow management' },
  { label: 'Mobile-first design', sub: 'Responsive across all screen sizes' },
  { label: 'Production deployments', sub: 'Vercel, monitoring, CI/CD pipelines' },
];

export default function About() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <section id="about" style={{ background: 'var(--cream-mid)' }}>
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
            About
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h2
                className="font-display font-bold leading-tight"
                style={{ color: 'var(--ink)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
              >
                Building software that<br />
                <em style={{ color: 'var(--terra)' }}>ships and scales</em>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                Software engineering graduate with hands-on experience building and deploying full-stack platforms. I learn by building real things — two production applications shipped since graduating in 2024.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="rule-thin mb-16" />

        {/* What I build grid */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-16"
        >
          <div className="section-label mb-6">
            <span style={{ width: 20, height: 1, background: 'var(--terra)', display: 'inline-block' }} />
            What I Build
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--terra)' }} />
                  <div>
                    <p className="font-body font-semibold text-sm mb-0.5" style={{ color: 'var(--ink)' }}>{item.label}</p>
                    <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--ink-faint)' }}>{item.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-16"
        >
          <div className="section-label mb-6">
            <span style={{ width: 20, height: 1, background: 'var(--terra)', display: 'inline-block' }} />
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <motion.button
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onMouseEnter={() => setActiveTech(tech.name)}
                onMouseLeave={() => setActiveTech(null)}
                className="px-3.5 py-2 rounded-sm font-body text-xs font-medium transition-all duration-150"
                style={{
                  background: activeTech === tech.name ? 'var(--terra)' : 'var(--cream)',
                  color: activeTech === tech.name ? 'var(--cream)' : 'var(--ink)',
                  border: '1px solid var(--border)',
                }}
              >
                <span className="block">{tech.name}</span>
                <span
                  className="block text-[10px] mt-0.5"
                  style={{ opacity: 0.65, color: activeTech === tech.name ? 'rgba(247,243,236,0.8)' : 'var(--ink-faint)' }}
                >
                  {tech.category}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <div className="section-label mb-6">
            <span style={{ width: 20, height: 1, background: 'var(--terra)', display: 'inline-block' }} />
            Education
          </div>
          <div
            className="p-6 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{ background: 'var(--cream)', border: '1px solid var(--border)' }}
          >
            <div>
              <p className="font-display font-semibold text-lg mb-1" style={{ color: 'var(--ink)' }}>
                BSc Software Engineering with Multimedia
              </p>
              <p className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>
                Limkokwing University of Creative Technology
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="font-body text-sm font-medium" style={{ color: 'var(--ink-faint)' }}>2019 – 2024</p>
              <p className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>Gaborone, Botswana</p>
            </div>
          </div>
        </motion.div>

      </div>
      <div className="rule-thin" />
    </section>
  );
}