'use client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, ArrowRight, Calendar, Download,
  Smartphone, X, ChevronLeft, ChevronRight, Images, ArrowUpRight,
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

/* ─── Types ─── */
type Screenshot = { src: string; caption: string; view?: 'desktop' | 'mobile' };
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
    url: 'https://paragoninsurancebrokers.co.bw',
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
      // Desktop (19)
      { src: '/screenshots/paragon/desktop/paragon-1.png',  caption: 'Homepage hero',                     view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-2.png',  caption: 'Get a quote CTA section',           view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-3.png',  caption: 'Protect your family section',       view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-4.png',  caption: 'Free guides section',               view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-5.png',  caption: 'Compare leading insurers',          view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-6.png',  caption: 'Insurance providers grid',          view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-7.png',  caption: 'Your trusted insurance partner',    view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-8.png',  caption: 'How it works',                      view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-9.png',  caption: 'Ready to protect your team',        view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-10.png', caption: 'Testimonials section',              view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-11.png', caption: 'About Paragon',                     view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-12.png', caption: 'We work for you section',           view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-13.png', caption: 'Ready to get started',              view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-14.png', caption: 'Chalice re-insurance partner',      view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-15.png', caption: 'Get a quote form',                  view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-16.png', caption: 'Contact page — map & details',      view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-17.png', caption: 'Contact form',                      view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-18.png', caption: 'Footer — dark',                     view: 'desktop' },
      { src: '/screenshots/paragon/desktop/paragon-19.png', caption: 'Footer — links & info',             view: 'desktop' },
      // Mobile (27)
      { src: '/screenshots/paragon/mobile/paragon-1.png',   caption: 'Homepage hero — mobile',            view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-2.png',   caption: 'Get a quote CTA — mobile',          view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-3.png',   caption: 'Protect your family — mobile',      view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-4.png',   caption: 'Free guides — mobile',              view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-5.png',   caption: 'Compare insurers — mobile',         view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-6.png',   caption: 'Providers grid — mobile',           view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-7.png',   caption: 'Trusted partner — mobile',          view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-8.png',   caption: 'How it works — mobile',             view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-9.png',   caption: 'Protect your team — mobile',        view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-10.png',  caption: 'Testimonials — mobile',             view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-11.png',  caption: 'About Paragon — mobile',            view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-12.png',  caption: 'We work for you — mobile',          view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-13.png',  caption: 'Ready to get started — mobile',     view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-14.png',  caption: 'Chalice partner — mobile',          view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-15.png',  caption: 'Get a quote form — mobile',         view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-16.png',  caption: 'Contact map — mobile',              view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-17.png',  caption: 'Contact form — mobile',             view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-18.png',  caption: 'About page — mobile',               view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-19.png',  caption: 'Paragon logo section — mobile',     view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-20.png',  caption: 'Ready to be insured — mobile',      view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-21.png',  caption: 'Nav menu open — mobile',            view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-22.png',  caption: 'Nav menu links — mobile',           view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-23.png',  caption: 'Contact us — mobile',               view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-24.png',  caption: 'Quote form step 2 — mobile',        view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-25.png',  caption: 'Map view — mobile',                 view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-26.png',  caption: 'Footer links — mobile',             view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-27.png',  caption: 'Footer bottom — mobile',            view: 'mobile' },
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
    id: 5,
    title: 'BITROOT',
    slug: 'bitroot',
    type: 'Tech Startup · Agency & SaaS Studio',
    description:
      'My own tech startup — a software studio building products and delivering client work across web and mobile. BITROOT is the umbrella under which all these projects were conceived, designed, and shipped.',
    url: 'https://bitroot-dev.vercel.app',
    accent: '#16a34a',
    stack: ['Next.js', 'TypeScript', 'React Native', 'Supabase', 'Vercel'],
    features: [
      'Founder-led product studio',
      'Full-stack web & mobile development',
      'Client work & proprietary SaaS products',
      'End-to-end — design, build, deploy, maintain',
      'Based in Botswana, building for the world',
    ],
    screenshots: [],
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

/* ─── Lightbox ─── */
function Lightbox({ project, startIndex, onClose }: { project: Project; startIndex: number; onClose: () => void }) {
  const allShots = project.screenshots;
  const hasViews = allShots.some(s => s.view === 'desktop') && allShots.some(s => s.view === 'mobile');
  const startView = allShots[startIndex]?.view ?? (hasViews ? 'desktop' : undefined);
  const [activeView, setActiveView] = useState<'desktop' | 'mobile' | undefined>(startView as any);

  const shots = hasViews ? allShots.filter(s => s.view === activeView) : allShots;
  const [idx, setIdx] = useState(() => {
    if (!hasViews) return startIndex;
    const filtered = allShots.filter(s => s.view === startView);
    const match = filtered.findIndex(s => s.src === allShots[startIndex]?.src);
    return match >= 0 ? match : 0;
  });

  // reset idx when switching tabs
  const switchView = (v: 'desktop' | 'mobile') => { setActiveView(v); setIdx(0); };

  const shot = shots[idx];

  const prev = useCallback(() => setIdx(i => (i - 1 + shots.length) % shots.length), [shots.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % shots.length), [shots.length]);

  /* keyboard nav */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  /* scroll lock */
  useEffect(() => {
    const saved = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = saved; };
  }, []);

  const HEADER = 56;
  const FOOTER = 70;

  const overlay = (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100dvh',
        zIndex: 2147483647,
        background: 'rgba(8,6,4,0.97)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          flexShrink: 0,
          height: HEADER,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          borderBottom: '1px solid rgba(246,241,234,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div>
            {project.slug === 'paragon' ? (
              <img
                src="/images/paragon-logo.jpeg"
                alt="Paragon Insurance Brokers"
                style={{ height: 32, width: 'auto', objectFit: 'contain', display: 'block', borderRadius: 3 }}
              />
            ) : (
              <p style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 14, color: '#F6F1EA', margin: 0 }}>{project.title}</p>
            )}
            <p style={{ fontSize: 11, color: 'rgba(246,241,234,0.4)', margin: 0 }}>{idx + 1} / {shots.length}</p>
          </div>
          {hasViews && (
            <div style={{ display: 'flex', gap: 4, background: 'rgba(246,241,234,0.08)', borderRadius: 6, padding: 3 }}>
              {(['desktop', 'mobile'] as const).map(v => (
                <button
                  key={v} type="button" onClick={() => switchView(v)}
                  style={{
                    padding: '3px 10px', borderRadius: 4, border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 600,
                    background: activeView === v ? 'rgba(246,241,234,0.18)' : 'transparent',
                    color: activeView === v ? '#F6F1EA' : 'rgba(246,241,234,0.4)',
                    textTransform: 'capitalize', transition: 'all 0.15s ease',
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          type="button" onClick={onClose}
          style={{ width: 36, height: 36, borderRadius: 6, background: 'rgba(246,241,234,0.08)', border: '1px solid rgba(246,241,234,0.15)', color: '#F6F1EA', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
          <X size={16} />
        </button>
      </div>

      {/* 
        Image stage — uses flex:1 so it fills ALL remaining height between header and footer.
        The key insight: we set height explicitly via style so that children with
        max-height:100% can resolve against a real pixel value.
      */}
      <div
        style={{
          flex: 1,
          minHeight: 0,           /* ← critical: allows flex child to shrink below content size */
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 56px',  /* horizontal pad clears the abs-positioned arrows */
          overflow: 'hidden',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Prev arrow */}
        {shots.length > 1 && (
          <button
            type="button"
            onClick={e => { e.stopPropagation(); prev(); }}
            style={{
              position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
              zIndex: 2, width: 40, height: 40, borderRadius: 6,
              background: 'rgba(246,241,234,0.10)', border: '1px solid rgba(246,241,234,0.18)',
              color: '#F6F1EA', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/*
          The image itself.
          - width: 100% + height: 100% fills the stage
          - object-fit: contain scales it correctly within those bounds
          This is the most reliable cross-browser approach — avoids the
          max-width/max-height double-constraint that was shrinking landscape images.
        */}
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={shot.src}
            alt={shot.caption}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 6,
            }}
          />
        </AnimatePresence>

        {/* Next arrow */}
        {shots.length > 1 && (
          <button
            type="button"
            onClick={e => { e.stopPropagation(); next(); }}
            style={{
              position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
              zIndex: 2, width: 40, height: 40, borderRadius: 6,
              background: 'rgba(246,241,234,0.10)', border: '1px solid rgba(246,241,234,0.18)',
              color: '#F6F1EA', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* Footer */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          flexShrink: 0,
          height: FOOTER,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          padding: '0 20px',
        }}
      >
        <p style={{ fontSize: 13, color: 'rgba(246,241,234,0.45)', textAlign: 'center', margin: 0 }}>{shot.caption}</p>
        {shots.length > 1 && (
          <div style={{ display: 'flex', gap: 6 }}>
            {shots.map((_, i) => (
              <button
                key={i} type="button" onClick={() => setIdx(i)}
                style={{ width: i === idx ? 20 : 6, height: 6, borderRadius: 999, background: i === idx ? project.accent : 'rgba(246,241,234,0.25)', border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.2s ease' }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(overlay, document.body) : null;
}

/* ─── Work Section ─── */
export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

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
            className="mb-10"
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
                  Five production projects across web and mobile — architected, built, and shipped end-to-end.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="space-y-4 mb-12">
            {PROJECTS.map((p, cardIdx) => {
              const isOpen = expanded === p.id;
              const hasLiveUrl = p.url !== '#';
              const isHovered = hovered === p.id;

              return (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: cardIdx * 0.07 }}
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    borderRadius: 16,
                    background: 'var(--cream)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: isHovered
                      ? `0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px ${p.accent}30`
                      : '0 2px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Accent bar */}
                  <div style={{ height: 3, background: `linear-gradient(90deg, ${p.accent}, ${p.accent}80)` }} />

                  <div className="p-7 lg:p-9">
                    {/* Top row: type + badge */}
                    <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        fontFamily: 'monospace',
                        color: p.accent,
                        letterSpacing: '0.04em',
                      }}>
                        {String(cardIdx + 1).padStart(2, '0')}
                      </span>
                      <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--ink-muted)', opacity: 0.4, display: 'inline-block' }} />
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        letterSpacing: '0.09em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-muted)',
                        fontFamily: "'DM Sans', sans-serif",
                      }}>
                        {p.type}
                      </span>
                      {p.isApp && (
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          padding: '2px 8px',
                          borderRadius: 999,
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          background: `${p.accent}15`,
                          color: p.accent,
                        }}>
                          <Smartphone size={9} /> Android
                        </span>
                      )}
                    </div>

                    {/* Main grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10">

                      {/* Left: title + description + stack */}
                      <div className="lg:col-span-8">
                        <h3
                          className="font-display font-bold mb-3"
                          style={{ fontSize: 'clamp(1.25rem,2.5vw,1.55rem)', color: 'var(--ink)', letterSpacing: '-0.025em', lineHeight: 1.2 }}
                        >
                          {p.title}
                        </h3>

                        <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--ink-muted)', lineHeight: 1.8, maxWidth: '52ch' }}>
                          {p.description}
                        </p>

                        {/* Stack pills */}
                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.map(t => (
                            <span
                              key={t}
                              style={{
                                padding: '3px 10px',
                                borderRadius: 6,
                                fontSize: '0.68rem',
                                fontWeight: 600,
                                fontFamily: "'DM Sans', sans-serif",
                                background: `${p.accent}10`,
                                border: `1px solid ${p.accent}30`,
                                color: p.accent,
                                letterSpacing: '0.01em',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: action buttons */}
                      <div className="lg:col-span-4 flex flex-col gap-2.5 lg:justify-start lg:pt-1">

                        {/* Primary CTA */}
                        {p.isApp ? (
                          hasLiveUrl ? (
                            <a
                              href={p.url}
                              download
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 7,
                                padding: '10px 16px',
                                borderRadius: 10,
                                background: p.accent,
                                color: '#fff',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                fontFamily: "'DM Sans', sans-serif",
                                textDecoration: 'none',
                                letterSpacing: '0.01em',
                                transition: 'opacity 0.2s ease',
                              }}
                              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.88')}
                              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                            >
                              <Download size={13} /> Download APK
                            </a>
                          ) : (
                            <span style={{
                              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                              padding: '10px 16px', borderRadius: 10, background: p.accent,
                              color: '#fff', fontSize: '0.75rem', fontWeight: 600,
                              fontFamily: "'DM Sans', sans-serif", opacity: 0.35, cursor: 'not-allowed',
                            }}>
                              <Download size={13} /> Coming Soon
                            </span>
                          )
                        ) : (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 7,
                              padding: '10px 16px',
                              borderRadius: 10,
                              background: p.accent,
                              color: '#fff',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              fontFamily: "'DM Sans', sans-serif",
                              textDecoration: 'none',
                              letterSpacing: '0.01em',
                              transition: 'opacity 0.2s ease',
                            }}
                            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.88')}
                            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                          >
                            <ArrowUpRight size={13} /> Visit Site
                          </a>
                        )}

                        {/* Screenshots */}
                        {p.screenshots.length > 0 && (
                          <button
                            type="button"
                            onClick={() => setLightbox({ project: p, index: 0 })}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 7,
                              padding: '10px 16px',
                              borderRadius: 10,
                              background: 'transparent',
                              border: '1px solid var(--border)',
                              color: 'var(--ink)',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              fontFamily: "'DM Sans', sans-serif",
                              letterSpacing: '0.01em',
                              cursor: 'pointer',
                              transition: 'background 0.2s ease, border-color 0.2s ease',
                            }}
                            onMouseEnter={e => {
                              (e.currentTarget as HTMLButtonElement).style.background = 'var(--cream-mid)';
                              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--ink-muted)';
                            }}
                            onMouseLeave={e => {
                              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
                            }}
                          >
                            <Images size={13} /> Screenshots
                          </button>
                        )}

                        {/* Secondary: Case Study */}
                        <a
                          href={`/projects/${p.slug}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 7,
                            padding: '10px 16px',
                            borderRadius: 10,
                            background: 'transparent',
                            border: '1px solid var(--border)',
                            color: 'var(--ink)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            fontFamily: "'DM Sans', sans-serif",
                            textDecoration: 'none',
                            letterSpacing: '0.01em',
                            transition: 'background 0.2s ease, border-color 0.2s ease',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'var(--cream-mid)';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--ink-muted)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                          }}
                        >
                          Case Study <ArrowRight size={13} />
                        </a>

                        {/* Tertiary: Features toggle */}
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : p.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 6,
                            padding: '9px 16px',
                            borderRadius: 10,
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--ink-muted)',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            fontFamily: "'DM Sans', sans-serif",
                            cursor: 'pointer',
                            transition: 'color 0.2s ease',
                          }}
                          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)')}
                          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--ink-muted)')}
                        >
                          {isOpen ? 'Hide features ↑' : 'Key features ↓'}
                        </button>
                      </div>
                    </div>

                    {/* Features expandable */}
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
                          <div
                            className="mt-7 pt-6"
                            style={{ borderTop: '1px solid var(--border)' }}
                          >
                            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 12, fontFamily: "'DM Sans', sans-serif" }}>
                              Key Features
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {p.features.map((f, fi) => (
                                <li key={fi} className="flex items-start gap-2.5">
                                  <div
                                    style={{
                                      marginTop: 6,
                                      width: 6,
                                      height: 6,
                                      borderRadius: 2,
                                      flexShrink: 0,
                                      background: p.accent,
                                    }}
                                  />
                                  <span className="font-body text-sm" style={{ color: 'var(--ink-muted)', lineHeight: 1.7 }}>{f}</span>
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
                  <h3 className="font-display font-bold text-lg mb-0.5" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>Founder & Software Engineer</h3>
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
                    <span key={t} className="tag" style={{ background: 'rgba(26,77,109,0.08)', borderColor: 'rgba(26,77,109,0.25)', color: '#1A4D6D', fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
        <div className="divider" />
      </section>

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