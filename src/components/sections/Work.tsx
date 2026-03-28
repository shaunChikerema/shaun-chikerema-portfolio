'use client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, ArrowRight, Calendar, Download,
  Smartphone, X, ChevronLeft, ChevronRight, Images,
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

/* ─── Types ─── */
type Screenshot = { src: string; caption: string };
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
  screenshots: Screenshot[];
};

/* ─── Data ─── */
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Keyat',
    slug: 'keyat',
    type: 'Real Estate Platform',
    description:
      'Full-stack property marketplace connecting buyers, sellers, and agents. Multi-tenant architecture with role-based access, real-time search, secure authentication, and a mobile-first UI.',
    url: 'https://keyat.vercel.app',
    accent: '#1A4D6D',
    stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
    features: [
      'Advanced property search with filters',
      'Role-based access — buyers, sellers, agents',
      'Live listing updates',
      'Secure auth & encrypted data',
      'Agent analytics dashboard',
    ],
    screenshots: [
      { src: '/screenshots/keyat/keyat-1.jpg', caption: 'Landing page — property search hero' },
      { src: '/screenshots/keyat/keyat-2.jpg', caption: 'Tenant dashboard — featured listings' },
      { src: '/screenshots/keyat/keyat-3.jpg', caption: 'Tenant dashboard — mobile view' },
      { src: '/screenshots/keyat/keyat-4.jpg', caption: 'Agent dashboard — listings & market' },
      { src: '/screenshots/keyat/keyat-5.jpg', caption: 'Browse listings — search results' },
      { src: '/screenshots/keyat/keyat-6.jpg', caption: 'Landlord dashboard — property management' },
      { src: '/screenshots/keyat/keyat-7.jpg', caption: 'Landlord dashboard — mobile view' },
      { src: '/screenshots/keyat/keyat-8.jpg', caption: 'Add property — step 1 of 3 form' },
      { src: '/screenshots/keyat/keyat-9.jpg', caption: 'Add property — photo upload step' },
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
      { src: '/screenshots/paragon/paragon-1.jpg', caption: 'Homepage hero' },
      { src: '/screenshots/paragon/paragon-2.jpg', caption: 'Insurance providers section' },
      { src: '/screenshots/paragon/paragon-3.jpg', caption: 'Contact & quote flow' },
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
      { src: '/screenshots/policybridge/policybridge-1.jpg', caption: 'Broker dashboard' },
      { src: '/screenshots/policybridge/policybridge-2.jpg', caption: 'Policy workflow view' },
      { src: '/screenshots/policybridge/policybridge-3.jpg', caption: 'Document generation' },
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
      { src: '/screenshots/blackdice/blackdice-1.jpg', caption: 'Now playing — vinyl UI' },
      { src: '/screenshots/blackdice/blackdice-2.jpg', caption: 'Library & queue' },
      { src: '/screenshots/blackdice/blackdice-3.jpg', caption: 'EQ visualizer' },
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
      { src: '/screenshots/yonder/yonder-1.jpg', caption: 'Bookshelf view' },
      { src: '/screenshots/yonder/yonder-2.jpg', caption: 'Now playing — chapter view' },
      { src: '/screenshots/yonder/yonder-3.jpg', caption: 'Bookmarks & sleep timer' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   Lightbox — uses vanilla JS DOM append to guarantee
   true fullscreen fixed overlay, bypassing all React
   stacking context issues entirely.
──────────────────────────────────────────────────────────── */
function Lightbox({
  project,
  startIndex,
  onClose,
}: {
  project: Project;
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const shots = project.screenshots;
  const shot = shots[idx];

  const prev = useCallback(
    () => setIdx(i => (i - 1 + shots.length) % shots.length),
    [shots.length],
  );
  const next = useCallback(
    () => setIdx(i => (i + 1) % shots.length),
    [shots.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  // Inject a style tag that forces the lightbox above everything
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'lb-fix';
    style.textContent = `
      #lb-root {
        position: fixed !important;
        top: 0 !important; left: 0 !important;
        width: 100vw !important; height: 100vh !important;
        z-index: 2147483647 !important;
        background: rgba(8,6,4,0.97) !important;
        display: flex !important;
        flex-direction: column !important;
        transform: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => { document.getElementById('lb-fix')?.remove(); };
  }, []);

  return (
    <div id="lb-root" onClick={onClose}>
      {/* Top bar */}
      <div onClick={e => e.stopPropagation()} style={{ flexShrink: 0, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderBottom: '1px solid rgba(246,241,234,0.08)' }}>
        <div>
          <p style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 14, color: '#F6F1EA', margin: 0 }}>{project.title}</p>
          <p style={{ fontSize: 11, color: 'rgba(246,241,234,0.4)', margin: 0 }}>{idx + 1} / {shots.length}</p>
        </div>
        <button type="button" onClick={onClose} style={{ width: 36, height: 36, borderRadius: 6, background: 'rgba(246,241,234,0.08)', border: '1px solid rgba(246,241,234,0.15)', color: '#F6F1EA', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <X size={16} />
        </button>
      </div>

      {/* Image row */}
      <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '16px' }}>
        {shots.length > 1 && (
          <button type="button" onClick={e => { e.stopPropagation(); prev(); }} style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 6, background: 'rgba(246,241,234,0.08)', border: '1px solid rgba(246,241,234,0.15)', color: '#F6F1EA', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ChevronLeft size={20} />
          </button>
        )}
        <div onClick={e => e.stopPropagation()} style={{ flex: 1, minWidth: 0, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            key={idx}
            src={shot.src}
            alt={shot.caption}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 6, display: 'block' }}
          />
        </div>
        {shots.length > 1 && (
          <button type="button" onClick={e => { e.stopPropagation(); next(); }} style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 6, background: 'rgba(246,241,234,0.08)', border: '1px solid rgba(246,241,234,0.15)', color: '#F6F1EA', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* Caption + dots */}
      <div onClick={e => e.stopPropagation()} style={{ flexShrink: 0, padding: '12px 20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <p style={{ fontSize: 13, color: 'rgba(246,241,234,0.45)', textAlign: 'center', margin: 0 }}>{shot.caption}</p>
        {shots.length > 1 && (
          <div style={{ display: 'flex', gap: 6 }}>
            {shots.map((_, i) => (
              <button key={i} type="button" onClick={() => setIdx(i)} style={{ width: i === idx ? 20 : 6, height: 6, borderRadius: 999, background: i === idx ? project.accent : 'rgba(246,241,234,0.25)', border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.2s ease' }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Work section
──────────────────────────────────────────────────────────── */
export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  return (
    <>
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
                  style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', color: 'var(--ink)', letterSpacing: '-0.025em' }}
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

          {/* Cards */}
          <div className="space-y-4 mb-16">
            {PROJECTS.map((p, cardIdx) => {
              const isOpen     = expanded === p.id;
              const hasLiveUrl = p.url !== '#';

              return (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: cardIdx * 0.07 }}
                  className="card overflow-hidden"
                >
                  <div style={{ height: 2, background: p.accent }} />

                  <div className="p-7 lg:p-9">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">

                      {/* Info */}
                      <div className="lg:col-span-8">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="project-number" aria-hidden>
                            {String(cardIdx + 1).padStart(2, '0')}
                          </span>
                          <p className="font-body font-medium" style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
                            {p.type}
                          </p>
                          {p.isApp && (
                            <span
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-body font-semibold"
                              style={{
                                fontSize: '0.6rem',
                                background: p.accent === '#f5a623' ? 'rgba(245,166,35,0.12)' : 'rgba(230,57,70,0.1)',
                                color: p.accent === '#f5a623' ? '#b8760a' : '#c0222e',
                                letterSpacing: '0.08em',
                              }}
                            >
                              <Smartphone size={9} /> ANDROID
                            </span>
                          )}
                        </div>

                        <h3 className="font-display font-bold mb-4" style={{ fontSize: '1.4rem', color: 'var(--ink)', letterSpacing: '-0.02em' }}>
                          {p.title}
                        </h3>

                        <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--ink-muted)', lineHeight: 1.75 }}>
                          {p.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="lg:col-span-4 flex flex-col gap-2 lg:justify-start lg:pt-7">

                        {p.isApp ? (
                          hasLiveUrl ? (
                            <a href={p.url} download className="btn btn-dark text-xs py-3" style={{ background: p.accent, borderColor: p.accent }}>
                              <Download className="w-3.5 h-3.5" /> Download APK
                            </a>
                          ) : (
                            <span className="btn btn-dark text-xs py-3" style={{ background: p.accent, borderColor: p.accent, opacity: 0.4, cursor: 'not-allowed' }}>
                              <Download className="w-3.5 h-3.5" /> Coming Soon
                            </span>
                          )
                        ) : (
                          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark text-xs py-3" style={{ background: p.accent, borderColor: p.accent }}>
                            <ExternalLink className="w-3.5 h-3.5" /> Visit Site
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => setLightbox({ project: p, index: 0 })}
                          className="btn btn-ghost text-xs py-3"
                        >
                          <Images className="w-3.5 h-3.5" /> Screenshots
                        </button>

                        <a href={`/projects/${p.slug}`} className="btn btn-ghost group text-xs py-3">
                          Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>

                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : p.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '8px 0', fontFamily: "'DM Sans',sans-serif", fontSize: '0.75rem', fontWeight: 500, color: 'var(--ink-muted)' }}
                        >
                          {isOpen ? 'Hide features ↑' : 'Key features ↓'}
                        </button>
                      </div>
                    </div>

                    {/* Features */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="features"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="mt-7 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
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
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="divider mb-16" />

          {/* Background */}
          <motion.p
            className="eyebrow mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Background
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="card p-7"
            >
              <div className="flex items-start justify-between mb-5 gap-4">
                <div>
                  <h3 className="font-display font-bold text-lg mb-0.5" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>Independent Developer</h3>
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

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="card p-7 flex flex-col justify-between"
            >
              <div>
                <p className="eyebrow mb-5" style={{ fontSize: '0.6rem' }}>Education</p>
                <h3 className="font-display font-bold leading-snug mb-2" style={{ fontSize: '1.1rem', color: 'var(--ink)', letterSpacing: '-0.015em' }}>
                  BSc Software Engineering<br />with Multimedia
                </h3>
                <p className="font-body text-sm mb-1" style={{ color: 'var(--ink-muted)' }}>Limkokwing University of Creative Technology</p>
                <p className="font-body text-xs" style={{ color: 'var(--ink-muted)' }}>2019 – 2024</p>
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

      {/* Lightbox — outside section so no overflow:hidden clips it */}
      {lightbox && (
        <Lightbox
          project={lightbox.project}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}