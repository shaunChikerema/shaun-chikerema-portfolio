'use client';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Calendar, Download, Smartphone } from 'lucide-react';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'Keyat',
    slug: 'keyat',
    type: 'Real Estate Platform',
    description:
      'Full-stack property marketplace connecting buyers, sellers, and agents. Multi-tenant architecture with role-based access, real-time search, secure authentication, and a mobile-first UI.',
    url: 'https://keyat.vercel.app',
    accent: 'var(--terra)',
    stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
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
    slug: 'policybridge',
    type: 'Insurance Automation SaaS',
    description:
      'Enterprise SaaS for insurance brokers to automate policy workflows and document generation. Handles renewal tracking, compliance logging, and bulk PDF processing.',
    url: 'https://policybridge.vercel.app',
    accent: '#7A5C2E',
    stack: ['Next.js 15', 'PostgreSQL', 'Node.js', 'Puppeteer', 'Redis'],
    features: [
      'Automated policy document generation',
      'Renewal tracking & notifications',
      'Audit trail & compliance logging',
      'Client portal with dashboard',
      'Bulk document processing',
    ],
  },
  {
    id: 3,
    title: 'Paragon Insurance Brokers',
    slug: 'paragon',
    type: 'Client Work · Marketing Site',
    description:
      'Marketing website for a licensed NBFIRA insurance broker. Multi-page site with a WhatsApp-integrated quote request flow, provider showcase, scroll animations, and full mobile navigation.',
    url: 'https://paragon-insurance-official.vercel.app',
    accent: '#1A4D6D',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    features: [
      'WhatsApp quote request integration',
      'Provider comparison section',
      'Scroll-triggered animations',
      'Responsive mobile navigation',
      'Multi-page site with contact & about',
    ],
  },
  {
    id: 4,
    title: 'BlackDice',
    slug: 'blackdice',
    type: 'Mobile App · Local Music Player',
    description:
      'Offline-first Android music player built with React Native and Expo. Scans device storage for audio files, plays them with expo-av, and presents a polished vinyl-themed UI with EQ visualizer and queue management.',
    url: 'https://expo.dev/artifacts/eas/eca90fc4-8707-470e-b804-4ae59e23edb1.apk',
    accent: '#e63946',
    isApp: true,
    stack: ['React Native', 'Expo SDK 54', 'TypeScript', 'expo-av', 'expo-media-library'],
    features: [
      'Device audio scanning via expo-media-library',
      'Vinyl record UI with spinning animation',
      'EQ bar visualizer synced to playback',
      'Queue management & shuffle / repeat',
      'MiniPlayer persistent across all tabs',
    ],
  },
  {
    id: 6,
    title: 'Yonder',
    slug: 'yonder',
    type: 'Mobile App · Audiobook Player',
    description:
      'Public-domain audiobook player built with React Native and Expo. Streams real LibriVox recordings from archive.org with chapter navigation, playback speed, sleep timer, bookmarks, and a warm amber-themed UI.',
    url: '#',
    accent: '#f5a623',
    isApp: true,
    stack: ['React Native', 'Expo SDK 54', 'TypeScript', 'expo-av', 'AsyncStorage'],
    features: [
      '8 pre-loaded public domain audiobooks via LibriVox',
      'Chapter navigation with persistent progress tracking',
      'Playback speed control — 0.5× to 2×',
      'Sleep timer with live countdown',
      'Bookmarks with timestamps and notes',
      'MiniPlayer persistent across all tabs',
    ],
  },
  {
    id: 5,
    title: 'DocFlow',
    slug: 'docflow',
    type: 'Web App · PDF Editor',
    description:
      'Browser-based PDF editor with OCR text extraction, annotation tools, freehand drawing, and export. Built entirely client-side — no uploads, no backend, no data leaves the browser.',
    url: '/projects/docflow/app',
    accent: '#0ea5e9',
    isLive: true,
    stack: ['Next.js', 'PDF.js', 'pdf-lib', 'Tesseract.js', 'TypeScript'],
    features: [
      'PDF rendering via PDF.js — all pages',
      'OCR text extraction with Tesseract.js',
      'Highlight, text note & freehand draw tools',
      'Shape overlays — rectangles & arrows',
      'Export annotated PDF via pdf-lib',
    ],
  },
];

export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="work" style={{ background: 'var(--cream-mid)' }}>
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
                Five web and mobile projects built from scratch — architected, coded, deployed, and maintained by me.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-4 mb-16">
          {PROJECTS.map((p, idx) => {
            const isOpen = expanded === p.id;
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: idx * 0.08 }}
                className="card overflow-hidden"
              >
                {/* Accent bar */}
                <div style={{ height: 2, background: p.accent }} />

                <div className="p-7 lg:p-9">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">

                    {/* Content */}
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <p
                          className="font-body font-medium"
                          style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}
                        >
                          {p.type}
                        </p>
                        {(p as any).isApp && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-body font-semibold"
                            style={{ fontSize: '0.6rem', background: p.accent === '#f5a623' ? 'rgba(245,166,35,0.12)' : 'rgba(230,57,70,0.1)', color: p.accent === '#f5a623' ? '#f5a623' : '#e63946', letterSpacing: '0.08em' }}>
                            <Smartphone size={9} /> ANDROID
                          </span>
                        )}
                        {(p as any).isLive && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-body font-semibold"
                            style={{ fontSize: '0.6rem', background: 'rgba(14,165,233,0.1)', color: '#0ea5e9', letterSpacing: '0.08em' }}>
                            ● LIVE APP
                          </span>
                        )}
                      </div>
                      <h3
                        className="font-display font-bold mb-4"
                        style={{ fontSize: '1.4rem', color: 'var(--ink)', letterSpacing: '-0.02em' }}
                      >
                        {p.title}
                      </h3>

                      <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-muted)', lineHeight: 1.75 }}>
                        {p.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="lg:col-span-4 flex flex-col gap-2 lg:justify-start lg:pt-7">
                      <a href={`/projects/${p.slug}`} className="btn btn-dark group text-xs py-3">
                        Case Study
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>

                      {(p as any).isApp ? (
                        <a href={p.url} download className="btn btn-ghost text-xs py-3"
                          style={{ borderColor: '#e63946', color: '#e63946' }}>
                          <Download className="w-3.5 h-3.5" />
                          Download APK
                        </a>
                      ) : (p as any).isLive ? (
                        <a href={p.url} className="btn btn-ghost text-xs py-3"
                          style={{ borderColor: '#0ea5e9', color: '#0ea5e9' }}>
                          <ExternalLink className="w-3.5 h-3.5" />
                          Launch App
                        </a>
                      ) : (
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-xs py-3">
                          <ExternalLink className="w-3.5 h-3.5" />
                          View Live
                        </a>
                      )}

                      <button
                        onClick={() => setExpanded(isOpen ? null : p.id)}
                        className="font-body text-xs font-medium py-2.5 transition-colors"
                        style={{ color: 'var(--ink-muted)' }}
                      >
                        {isOpen ? 'Hide features ↑' : 'Key features ↓'}
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
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {p.features.map((f, fi) => (
                          <li key={fi} className="flex items-start gap-2.5">
                            <div className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: p.accent }} />
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

        {/* Divider */}
        <div className="divider mb-16" />

        {/* Background */}
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
              <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                <Calendar className="w-3 h-3" style={{ color: 'var(--terra)' }} />
                <span className="font-body text-xs" style={{ color: 'var(--ink-muted)' }}>2024 – Present</span>
              </div>
            </div>
            <ul className="space-y-2.5">
              {[
                'Architected and shipped six production projects from scratch',
                'Two Android apps built with React Native, Expo SDK, and EAS Build',
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
                2019 – 2024
              </p>
            </div>

            <div className="mt-7 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
              <p className="eyebrow mb-3" style={{ fontSize: '0.6rem' }}>Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Node.js', 'React Native', 'Vercel'].map(t => (
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