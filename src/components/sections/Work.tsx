'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Calendar, Download, Smartphone, Images, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

type Project = {
  id: number;
  title: string;
  slug: string;
  type: string;
  description: string;
  url: string;
  accent: string;
  isApp?: boolean;
  stack: string[];
  features: string[];
  screenshots: { src: string; caption: string }[];
};

const PROJECTS: Project[] = [
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
    screenshots: [
      { src: '/screenshots/keyat-1.jpg', caption: 'Property listings overview' },
      { src: '/screenshots/keyat-2.jpg', caption: 'Property detail page' },
      { src: '/screenshots/keyat-3.jpg', caption: 'Agent dashboard' },
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
    screenshots: [
      { src: '/screenshots/paragon-1.jpg', caption: 'Homepage hero' },
      { src: '/screenshots/paragon-2.jpg', caption: 'Insurance providers section' },
      { src: '/screenshots/paragon-3.jpg', caption: 'Contact & quote flow' },
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
    screenshots: [
      { src: '/screenshots/policybridge-1.jpg', caption: 'Broker dashboard' },
      { src: '/screenshots/policybridge-2.jpg', caption: 'Policy workflow view' },
      { src: '/screenshots/policybridge-3.jpg', caption: 'Document generation' },
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
    screenshots: [
      { src: '/screenshots/blackdice-1.jpg', caption: 'Now playing — vinyl UI' },
      { src: '/screenshots/blackdice-2.jpg', caption: 'Library & queue' },
      { src: '/screenshots/blackdice-3.jpg', caption: 'EQ visualizer' },
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
    screenshots: [
      { src: '/screenshots/yonder-1.jpg', caption: 'Bookshelf view' },
      { src: '/screenshots/yonder-2.jpg', caption: 'Now playing — chapter view' },
      { src: '/screenshots/yonder-3.jpg', caption: 'Bookmarks & sleep timer' },
    ],
  },
];

/* ── Lightbox ── */
function Lightbox({
  project,
  initialIndex,
  onClose,
}: {
  project: Project;
  initialIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initialIndex);
  const shots = project.screenshots;

  const prev = useCallback(() => setIdx(i => (i - 1 + shots.length) % shots.length), [shots.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % shots.length), [shots.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(10,8,6,0.92)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-9 h-9 rounded-sm flex items-center justify-center transition-colors"
        style={{ background: 'rgba(246,241,234,0.08)', color: 'rgba(246,241,234,0.7)' }}
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Project title + counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
        <span className="font-display font-semibold text-sm" style={{ color: 'rgba(246,241,234,0.8)' }}>
          {project.title}
        </span>
        <span className="font-body text-xs" style={{ color: 'rgba(246,241,234,0.35)', letterSpacing: '0.1em' }}>
          {idx + 1} / {shots.length}
        </span>
      </div>

      {/* Prev */}
      {shots.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); prev(); }}
          className="absolute left-4 w-10 h-10 rounded-sm flex items-center justify-center transition-colors"
          style={{ background: 'rgba(246,241,234,0.08)', color: 'rgba(246,241,234,0.7)' }}
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Image */}
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.22 }}
        className="flex flex-col items-center gap-4 px-16"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '90vw', maxHeight: '90vh' }}
      >
        <div
          className="rounded-sm overflow-hidden"
          style={{ border: '1px solid rgba(246,241,234,0.1)', maxHeight: '75vh' }}
        >
          <img
            src={shots[idx].src}
            alt={shots[idx].caption}
            style={{ maxWidth: '80vw', maxHeight: '75vh', objectFit: 'contain', display: 'block' }}
            onError={e => {
              (e.target as HTMLImageElement).src =
                `https://placehold.co/1200x800/1a1714/BE5430?text=${encodeURIComponent(shots[idx].caption)}&font=playfair-display`;
            }}
          />
        </div>
        <p className="font-body text-sm text-center" style={{ color: 'rgba(246,241,234,0.55)' }}>
          {shots[idx].caption}
        </p>

        {/* Dot indicators */}
        {shots.length > 1 && (
          <div className="flex gap-1.5 items-center">
            {shots.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === idx ? 18 : 6,
                  height: 6,
                  background: i === idx ? project.accent : 'rgba(246,241,234,0.25)',
                }}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Next */}
      {shots.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); next(); }}
          className="absolute right-4 w-10 h-10 rounded-sm flex items-center justify-center transition-colors"
          style={{ background: 'rgba(246,241,234,0.08)', color: 'rgba(246,241,234,0.7)' }}
          aria-label="Next screenshot"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </motion.div>
  );
}

/* ── Work section ── */
export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

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
            const hasLiveUrl = p.url !== '#';
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
                        {p.isApp && (
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-body font-semibold"
                            style={{
                              fontSize: '0.6rem',
                              background: p.accent === '#f5a623' ? 'rgba(245,166,35,0.12)' : 'rgba(230,57,70,0.1)',
                              color: p.accent === '#f5a623' ? '#f5a623' : '#e63946',
                              letterSpacing: '0.08em',
                            }}
                          >
                            <Smartphone size={9} /> ANDROID
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

                      {/* 1. Primary — live site / download APK */}
                      {p.isApp ? (
                        hasLiveUrl ? (
                          <a
                            href={p.url}
                            download
                            className="btn btn-dark text-xs py-3"
                            style={{ background: p.accent, borderColor: p.accent }}
                          >
                            <Download className="w-3.5 h-3.5" />
                            Download APK
                          </a>
                        ) : (
                          <span
                            className="btn btn-dark text-xs py-3 opacity-40 cursor-not-allowed"
                            style={{ background: p.accent, borderColor: p.accent }}
                          >
                            <Download className="w-3.5 h-3.5" />
                            Coming Soon
                          </span>
                        )
                      ) : (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-dark text-xs py-3"
                          style={{ background: p.accent, borderColor: p.accent }}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Visit Site
                        </a>
                      )}

                      {/* 2. Secondary — screenshots */}
                      <button
                        onClick={() => setLightbox({ project: p, index: 0 })}
                        className="btn btn-ghost text-xs py-3"
                      >
                        <Images className="w-3.5 h-3.5" />
                        Screenshots
                      </button>

                      {/* 3. Tertiary — case study */}
                      <a href={`/projects/${p.slug}`} className="btn btn-ghost group text-xs py-3">
                        Case Study
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>

                      {/* 4. Lowest — feature toggle */}
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
                'Architected and shipped five production projects from scratch',
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            project={lightbox.project}
            initialIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}