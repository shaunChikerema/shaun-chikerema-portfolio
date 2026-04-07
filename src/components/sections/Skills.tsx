'use client';
import { motion } from 'framer-motion';
import { Cpu, Smartphone, Server, Cloud } from 'lucide-react';

const SKILLS = [
  {
    icon: Cpu,
    accent: '#6366f1',
    title: 'AI & RAG Engineering',
    body: 'Built a full Retrieval-Augmented Generation pipeline in Python — scraping, chunking, embedding with pgvector, and grounded LLM responses with source citations.',
    tech: ['Python', 'FastAPI', 'LangChain', 'pgvector', 'OpenAI', 'BeautifulSoup'],
  },
  {
    icon: Cpu,
    accent: '#3ECF8E',
    title: 'Full-Stack Web',
    body: 'Built three production web apps — a multi-tenant real estate marketplace, an insurance SaaS, and a client marketing site. Comfortable owning the entire stack.',
    tech: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Node.js', 'Tailwind CSS'],
  },
  {
    icon: Server,
    accent: '#3ECF8E',
    title: 'Backend & Data',
    body: 'Designed multi-tenant schemas, built REST APIs, handled auth and role-based access, automated document generation, and set up audit logging.',
    tech: ['Express', 'REST APIs', 'Redis', 'Puppeteer', 'Firebase', 'Prisma'],
  },
  {
    icon: Cloud,
    accent: '#16a34a',
    title: 'Deployment & DevOps',
    body: 'Every project is in production. CI/CD via GitHub Actions, deployments on Vercel and EAS, environment management, and performance monitoring.',
    tech: ['Vercel', 'GitHub Actions', 'Docker', 'EAS Build', 'AWS'],
  },
  {
    icon: Smartphone,
    accent: '#e63946',
    title: 'Mobile (Android)',
    body: 'Two Android apps shipped via EAS Build. Native device APIs for audio playback, media library scanning, background tasks, and offline-first storage.',
    tech: ['React Native', 'Expo SDK 54', 'expo-av', 'expo-media-library', 'AsyncStorage', 'expo-router'],
  },
];

const APPROACHES = [
  {
    title: 'Ship real things',
    body: 'Every project I touch goes live. No abandoned demos, no endless iterations in dev.',
  },
  {
    title: 'Production mindset',
    body: 'Security, monitoring, and performance are part of the build — not afterthoughts.',
  },
  {
    title: 'Self-directed',
    body: 'Self-taught, fast to pick up new tools. I learn by building and shipping.',
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: '#ffffff' }}>
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
                Built with,<br />
                <em style={{ color: '#3ECF8E' }}>shipped with.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
                Every tool listed here has been used in a deployed production project — not tutorials, not toy apps.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skill cards — 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-14">
          {SKILLS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="card p-7"
                style={{ borderTop: `2px solid ${s.accent}` }}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.accent}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: s.accent }} />
                  </div>
                  <h3
                    className="font-display font-bold"
                    style={{ fontSize: '1.05rem', color: 'var(--ink)', letterSpacing: '-0.015em' }}
                  >
                    {s.title}
                  </h3>
                </div>

                {/* Body */}
                <p
                  className="font-body text-sm leading-relaxed mb-5"
                  style={{ color: 'var(--ink-muted)', lineHeight: 1.75 }}
                >
                  {s.body}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {s.tech.map(t => (
                    <span
                      key={t}
                      style={{
                        padding: '3px 10px',
                        borderRadius: 6,
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        fontFamily: "'DM Sans', sans-serif",
                        background: `${s.accent}10`,
                        border: `1px solid ${s.accent}30`,
                        color: s.accent,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="divider mb-14" />

        {/* How I work — dark strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="card-ink p-8 lg:p-10 relative overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(135deg, rgba(255,255,255,0.018) 25%, transparent 25%),
                linear-gradient(225deg, rgba(255,255,255,0.018) 25%, transparent 25%),
                linear-gradient(315deg, rgba(255,255,255,0.018) 25%, transparent 25%),
                linear-gradient(45deg,  rgba(255,255,255,0.018) 25%, transparent 25%)
              `,
              backgroundSize: '28px 28px',
              backgroundPosition: '0 0, 14px 0, 14px -14px, 0 14px',
            }}
          >
            <p className="eyebrow mb-8" style={{ color: 'rgba(62,207,142,0.7)' }}>
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
                  <div
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(62,207,142,0.7)' }}
                  />
                  <div>
                    <h4
                      className="font-display font-semibold text-base mb-1.5"
                      style={{ color: 'var(--cream)', letterSpacing: '-0.01em' }}
                    >
                      {a.title}
                    </h4>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: 'rgba(246,241,234,0.55)' }}
                    >
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