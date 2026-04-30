'use client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, ArrowRight, Calendar, Download,
  Smartphone, X, ChevronLeft, ChevronRight, Images, ArrowUpRight, ChevronDown,
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
  architectureUrl?: string;
  accent: string;
  bgFrom: string;
  bgTo: string;
  previewImage?: string;
  previewPosition?: string;
  isApp?: boolean;
  stack: string[];
  features: string[];
  screenshots: Screenshot[];
};

/* ─── Data ─── */
const PROJECTS: Project[] = [
  // 1 — AI/RAG (leads with hottest skill)
  {
    id: 7,
    title: 'Ragify',
    slug: 'ragify',
    type: 'AI Engineering · Python + React',
    description: 'Full RAG pipeline built from scratch — scrape → chunk (2k chars, 200-char overlap) → embed (Gemini, 768-dim) → pgvector cosine search → grounded generation (Llama 3.3 70B). Tunable retrieval, multi-turn conversation, and inline citations tied to source URLs.',
    url: 'https://ragify.vercel.app',
    architectureUrl: 'https://ragify.vercel.app/architecture.html',
    accent: '#3ECF8E',
    bgFrom: '#0f172a',
    bgTo: '#1e293b',
    stack: ['Python', 'FastAPI', 'Gemini', 'Groq', 'pgvector', 'Supabase', 'React'],
    features: [
      'Scrape any HTML URL → clean text → overlapping chunks at word boundaries',
      'Gemini gemini-embedding-001 — 768-dim vectors, batched 50 at a time with deduplication',
      'pgvector cosine similarity via Supabase RPC — vector math stays in the DB, not Python',
      'Llama 3.3 70B on Groq at ~800 tok/s — temperature 0.2 for grounded, natural answers',
      'Configurable top-k and similarity threshold exposed in the UI settings tab',
      'Full multi-turn conversation history passed on every query',
    ],
    screenshots: [
      { src: '/screenshots/rag/mobile/rag-1.png', caption: 'Query tab — ask anything from your knowledge base', view: 'mobile' },
      { src: '/screenshots/rag/mobile/rag-2.png', caption: 'RAG answer with inline citations from sources', view: 'mobile' },
      { src: '/screenshots/rag/mobile/rag-3.png', caption: 'Ingest tab — scrape any URL into the vector DB', view: 'mobile' },
      { src: '/screenshots/rag/mobile/rag-4.png', caption: 'Settings — tune retrieval and manage the database', view: 'mobile' },
    ],
  },
  // 2 — Most complex production app (anchors credibility)
  {
    id: 1,
    title: 'Keyat',
    slug: 'keyat',
    type: 'Real Estate Platform',
    description: 'Property marketplace for buyers, sellers, and agents — multi-tenant, role-based access, real-time search.',
    url: 'https://keyat.vercel.app',
    accent: '#3ECF8E',
    bgFrom: '#e8f5ee',
    bgTo: '#d4efe2',
    previewImage: '/screenshots/keyat/mobile/keyat-m-1.png',
    previewPosition: '50% 40%',
    stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
    features: [
      'Advanced property search with filters',
      'Role-based access — buyers, sellers, agents',
      'Live listing updates',
      'Secure auth & encrypted data',
      'Agent analytics dashboard',
    ],
    screenshots: [
      { src: '/screenshots/keyat/mobile/keyat-m-1.png',  caption: 'Homepage hero — find your dream home',     view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-2.png',  caption: 'Homepage hero — apartment slide',           view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-3.png',  caption: 'Sign in — Google, Facebook or email',       view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-4.png',  caption: 'Create account',                            view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-5.png',  caption: 'Tenant dashboard — featured properties',    view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-6.png',  caption: 'Latest listings feed',                      view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-7.png',  caption: 'Landlord dashboard — my listings',          view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-8.png',  caption: 'My Properties — all 11 listings',           view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-9.png',  caption: 'Agent dashboard — listings & market',       view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-10.png', caption: 'Public browse — featured properties',       view: 'mobile' },
    ],
  },
  // 3 — Enterprise SaaS (shows backend depth)
  {
    id: 2,
    title: 'PolicyBridge',
    slug: 'policybridge',
    type: 'Insurance Automation SaaS',
    description: 'Enterprise SaaS automating policy workflows, document generation, renewal tracking, and compliance logging for insurance brokers.',
    url: 'https://policybridge.vercel.app',
    accent: '#3ECF8E',
    bgFrom: '#e8f5ee',
    bgTo: '#d4efe2',
    previewImage: '/screenshots/policybridge/mobile/policybridge-m-1.png',
    previewPosition: '50% 20%',
    stack: ['Next.js 15', 'PostgreSQL', 'Node.js', 'Puppeteer', 'Redis'],
    features: [
      'Automated policy document generation',
      'Renewal tracking & notifications',
      'Audit trail & compliance logging',
      'Client portal with dashboard',
      'Bulk document processing',
    ],
    screenshots: [
      { src: '/screenshots/policybridge/mobile/policybridge-m-1.png',  caption: 'Landing — the modern way to run your brokerage',  view: 'mobile' },
      { src: '/screenshots/policybridge/mobile/policybridge-m-2.png',  caption: 'Hero — policy renewed notification',               view: 'mobile' },
      { src: '/screenshots/policybridge/mobile/policybridge-m-3.png',  caption: 'What we do — client management',                  view: 'mobile' },
      { src: '/screenshots/policybridge/mobile/policybridge-m-4.png',  caption: 'Policy tracking & payment receipts',              view: 'mobile' },
      { src: '/screenshots/policybridge/mobile/policybridge-m-5.png',  caption: 'Payment receipts — how it works',                 view: 'mobile' },
      { src: '/screenshots/policybridge/mobile/policybridge-m-6.png',  caption: 'How it works — steps 01, 02, 03',                 view: 'mobile' },
      { src: '/screenshots/policybridge/mobile/policybridge-m-7.png',  caption: 'Generate receipts — built for brokers',           view: 'mobile' },
      { src: '/screenshots/policybridge/mobile/policybridge-m-8.png',  caption: 'Ready to modernise your brokerage',               view: 'mobile' },
      { src: '/screenshots/policybridge/mobile/policybridge-m-9.png',  caption: 'Sign in to your account',                        view: 'mobile' },
      { src: '/screenshots/policybridge/mobile/policybridge-m-10.png', caption: 'Create your brokerage account',                  view: 'mobile' },
    ],
  },
  // 4 — Real client work (shows commercial delivery)
  {
    id: 3,
    title: 'Paragon Insurance Brokers',
    slug: 'paragon',
    type: 'Client Work · Marketing Site',
    description: 'Marketing site for a licensed NBFIRA broker — WhatsApp quote flow, provider showcase, and scroll animations.',
    url: 'https://paragoninsurancebrokers.co.bw',
    accent: '#3ECF8E',
    bgFrom: '#e8f5ee',
    bgTo: '#c8e6d4',
    previewImage: '/screenshots/paragon/mobile/paragon-1.png',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    features: [
      'WhatsApp quote request integration',
      'Provider comparison section',
      'Scroll-triggered animations',
      'Responsive mobile navigation',
      'Multi-page site with contact & about',
    ],
    screenshots: [
      { src: '/screenshots/paragon/mobile/paragon-1.png',  caption: 'Homepage hero',              view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-2.png',  caption: 'Get your quote in 1 hour',   view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-3.png',  caption: 'Compare leading insurers',   view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-4.png',  caption: 'Hollard Life & Bona Life',   view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-5.png',  caption: 'How it works — steps 1 & 2', view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-6.png',  caption: 'Step 3 & CTA section',       view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-7.png',  caption: 'About Paragon',              view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-8.png',  caption: 'We work for you',            view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-9.png',  caption: 'Contact us',                 view: 'mobile' },
      { src: '/screenshots/paragon/mobile/paragon-10.png', caption: 'Office location — map',      view: 'mobile' },
    ],
  },
  // 5 — Client work (Alfa First)
  {
    id: 8,
    title: 'Alfa First Projects',
    slug: 'alfa-first',
    type: 'Client Work · Insurance Agency Site',
    description: 'Marketing site for a licensed NBFIRA independent insurance agency in Gaborone — WhatsApp quote flow, animated hero, service breakdowns, and a fully responsive mobile layout.',
    url: 'https://alfa-first.vercel.app',
    accent: '#cc1f1f',
    bgFrom: '#1a1f5e',
    bgTo: '#2a3080',
    previewImage: '/screenshots/alfa-first/mobile/alfa-first-1.png',
    previewPosition: '50% 20%',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    features: [
      'WhatsApp quote request modal with service selection',
      'Animated hero with NBFIRA licensed badge',
      'Service cards — life, funeral, motor, home, business & medical',
      'Floating WhatsApp button with pulse ring animation',
      'Fully responsive — mobile-first layout',
      'Top bar with phone, email and quick-quote CTA',
    ],
    screenshots: [
      { src: '/screenshots/alfa-first/mobile/alfa-first-1.png', caption: 'Hero — Your Insurance. Our Priority.',         view: 'mobile' },
      { src: '/screenshots/alfa-first/mobile/alfa-first-2.png', caption: 'About — Independent Agency Working for You',   view: 'mobile' },
      { src: '/screenshots/alfa-first/mobile/alfa-first-3.png', caption: 'Footer — full services & quick links',         view: 'mobile' },
      { src: '/screenshots/alfa-first/mobile/alfa-first-4.png', caption: 'Services — life, funeral, motor & more',       view: 'mobile' },
      { src: '/screenshots/alfa-first/mobile/alfa-first-5.png', caption: 'Contact — We\'re Here to Help',                view: 'mobile' },
    ],
  },
  // 6 — Studio (context/backstory)
  {
    id: 5,
    title: 'BITROOT',
    slug: 'bitroot',
    type: 'Tech Startup · Agency & SaaS Studio',
    description: 'My own software studio — building proprietary products and delivering client work across web and mobile.',
    url: 'https://bitroot-dev.vercel.app',
    accent: '#16a34a',
    bgFrom: '#e8f5ee',
    bgTo: '#c8e6d4',
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
  // 6 — Mobile (shows breadth)
  {
    id: 4,
    title: 'BlackDice',
    slug: 'blackdice',
    type: 'Mobile App · Local Music Player',
    description: 'Offline-first Android music player — scans device storage, vinyl-themed UI, EQ visualizer, and persistent queue management.',
    url: 'https://expo.dev/artifacts/eas/eca90fc4-8707-470e-b804-4ae59e23edb1.apk',
    accent: '#e63946',
    bgFrom: '#1a0a0b',
    bgTo: '#2d1014',
    previewImage: '/screenshots/blackdice/mobile/blackdice-m-1.png',
    previewPosition: '50% 30%',
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
      { src: '/screenshots/blackdice/mobile/blackdice-m-1.png',  caption: 'Now Playing — album art & controls',       view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-2.png',  caption: 'Library — MiniPlayer active',              view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-3.png',  caption: 'Library — songs list',                     view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-4.png',  caption: 'Library — 48 tracks loaded',               view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-5.png',  caption: 'Albums grid view',                         view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-6.png',  caption: 'Folders — 54 total tracks',                view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-7.png',  caption: 'Smart Playlists — favorites, recent, more', view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-8.png',  caption: 'Settings — app info & library stats',      view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-9.png',  caption: 'Scanning Library — 100% complete',         view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-10.png', caption: 'Library — continued scroll',               view: 'mobile' },
    ],
  },
  // 7 — Second mobile app
  {
    id: 6,
    title: 'Yonder',
    slug: 'yonder',
    type: 'Mobile App · Audiobook Player',
    description: 'Audiobook player streaming LibriVox recordings — chapter nav, sleep timer, bookmarks, amber-themed UI.',
    url: '#',
    accent: '#f5a623',
    bgFrom: '#2a1f0a',
    bgTo: '#3d2e0e',
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
    screenshots: [],
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

  const switchView = (v: 'desktop' | 'mobile') => { setActiveView(v); setIdx(0); };
  const shot = shots[idx];
  const prev = useCallback(() => setIdx(i => (i - 1 + shots.length) % shots.length), [shots.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % shots.length), [shots.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

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
        position: 'fixed', inset: 0, width: '100vw', height: '100dvh',
        zIndex: 2147483647, background: 'rgba(8,6,4,0.97)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          flexShrink: 0, height: HEADER, display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
          padding: '0 20px', borderBottom: '1px solid rgba(246,241,234,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {project.slug === 'paragon' ? (
              <img src="/images/paragon-logo.jpeg" alt="Paragon" style={{ height: 28, width: 'auto', objectFit: 'contain', borderRadius: 3 }} />
            ) : (
              <p style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 14, color: '#F6F1EA', margin: 0 }}>{project.title}</p>
            )}
            <p style={{ fontSize: 11, color: 'rgba(246,241,234,0.4)', margin: 0 }}>{idx + 1} / {shots.length}</p>
          </div>
          {hasViews && (
            <div style={{ display: 'flex', gap: 4, background: 'rgba(246,241,234,0.08)', borderRadius: 6, padding: 3 }}>
              {(['desktop', 'mobile'] as const).map(v => (
                <button key={v} type="button" onClick={() => switchView(v)}
                  style={{
                    padding: '3px 10px', borderRadius: 4, border: 'none', cursor: 'pointer',
                    fontSize: 11, fontWeight: 600,
                    background: activeView === v ? 'rgba(246,241,234,0.18)' : 'transparent',
                    color: activeView === v ? '#F6F1EA' : 'rgba(246,241,234,0.4)',
                    textTransform: 'capitalize', transition: 'all 0.15s ease',
                  }}
                >{v}</button>
              ))}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {project.url && project.url !== '#' && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', height: 36,
                borderRadius: 6, background: 'rgba(246,241,234,0.08)', border: '1px solid rgba(246,241,234,0.15)',
                color: '#F6F1EA', fontSize: 12, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap',
              }}
            >Visit Site <ExternalLink size={12} /></a>
          )}
          <button type="button" onClick={onClose}
            style={{ width: 36, height: 36, borderRadius: 6, background: 'rgba(246,241,234,0.08)', border: '1px solid rgba(246,241,234,0.15)', color: '#F6F1EA', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          ><X size={16} /></button>
        </div>
      </div>

      <div
        style={{ flex: 1, minHeight: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 56px', overflow: 'hidden' }}
        onClick={e => e.stopPropagation()}
      >
        {shots.length > 1 && (
          <button type="button" onClick={e => { e.stopPropagation(); prev(); }}
            style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 2, width: 40, height: 40, borderRadius: 6, background: 'rgba(246,241,234,0.10)', border: '1px solid rgba(246,241,234,0.18)', color: '#F6F1EA', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          ><ChevronLeft size={20} /></button>
        )}
        <AnimatePresence mode="wait">
          <motion.img key={idx} src={shot.src} alt={shot.caption}
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain', borderRadius: 6 }}
          />
        </AnimatePresence>
        {shots.length > 1 && (
          <button type="button" onClick={e => { e.stopPropagation(); next(); }}
            style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 2, width: 40, height: 40, borderRadius: 6, background: 'rgba(246,241,234,0.10)', border: '1px solid rgba(246,241,234,0.18)', color: '#F6F1EA', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          ><ChevronRight size={20} /></button>
        )}
      </div>

      <div onClick={e => e.stopPropagation()}
        style={{ flexShrink: 0, height: FOOTER, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '0 20px' }}
      >
        <p style={{ fontSize: 13, color: 'rgba(246,241,234,0.45)', textAlign: 'center', margin: 0 }}>{shot.caption}</p>
        {shots.length > 1 && (
          <div style={{ display: 'flex', gap: 6 }}>
            {shots.map((_, i) => (
              <button key={i} type="button" onClick={() => setIdx(i)}
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

/* ─── Visual Panel ─── */

// Pick up to 5 screenshots evenly spaced from the full set
function pickSlides(screenshots: Screenshot[], max = 5): Screenshot[] {
  if (screenshots.length === 0) return [];
  if (screenshots.length <= max) return screenshots;
  const step = (screenshots.length - 1) / (max - 1);
  return Array.from({ length: max }, (_, i) => screenshots[Math.round(i * step)]);
}

function ProjectSlideshow({ project, onOpenLightbox }: { project: Project; onOpenLightbox: () => void }) {
  const slides = pickSlides(project.screenshots);
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx(i => (i + 1) % slides.length);
        setFading(false);
      }, 280);
    }, 3200);
    return () => clearInterval(t);
  }, [slides.length]);

  const goTo = (i: number) => {
    if (i === idx) return;
    setFading(true);
    setTimeout(() => { setIdx(i); setFading(false); }, 280);
  };

  // No screenshots — keep original placeholder
  if (slides.length === 0) {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${project.bgFrom}, ${project.bgTo})` }}
      >
        <div className="flex flex-col items-center gap-3 opacity-40">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: project.accent + '20', border: `1px solid ${project.accent}40` }}
          >
            <span style={{ fontSize: 28 }}>
              {project.slug === 'bitroot' ? '⚡' : project.isApp ? '📱' : '🌐'}
            </span>
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: project.accent, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {project.title}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden cursor-pointer group/panel"
      style={{ background: `linear-gradient(135deg, ${project.bgFrom}, ${project.bgTo})` }}
      onClick={onOpenLightbox}
    >
      {/* Stacked slides — crossfade */}
      {slides.map((shot, i) => (
        <img
          key={shot.src}
          src={shot.src}
          alt={shot.caption}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: project.previewPosition ?? '50% 35%',
            opacity: i === idx ? (fading ? 0 : 1) : 0,
            transition: 'opacity 0.28s ease',
          }}
        />
      ))}

      {/* Bottom gradient for dot legibility */}
      <div style={{ position: 'absolute', inset: '60% 0 0 0', background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)', pointerEvents: 'none' }} />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/panel:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.32)' }}
      >
        <div
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-white text-xs font-semibold"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}
        >
          <Images size={14} /> View {project.screenshots.length} Screenshots
        </div>
      </div>

      {/* Dots + label */}
      {slides.length > 1 && (
        <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, pointerEvents: 'none' }}>
          <span style={{ fontSize: 9, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {slides[idx].caption.split('—')[0].trim()}
          </span>
          <div style={{ display: 'flex', gap: 5, pointerEvents: 'auto' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={e => { e.stopPropagation(); goTo(i); }}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === idx ? 16 : 6, height: 6, borderRadius: 999, border: 'none', padding: 0, cursor: 'pointer',
                  background: i === idx ? '#fff' : 'rgba(255,255,255,0.38)',
                  transition: 'all 0.25s ease',
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Work Section ─── */
export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  return (
    <>
      <section id="work" style={{ background: '#ffffff' }}>
        <div className="divider" />

        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          {/* ── Header ── */}
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
                  <em style={{ color: '#3ECF8E' }}>Projects</em>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                  Six production projects across web and mobile — architected, built, and shipped end-to-end.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Project Rows ── */}
          <div className="space-y-5 mb-14">
            {PROJECTS.map((p, cardIdx) => {
              const isOpen = expanded === p.id;
              const hasLiveUrl = p.url !== '#';

              return (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: cardIdx * 0.06 }}
                  className="group"
                  style={{
                    borderRadius: 18,
                    background: '#f8fafc',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
                  }}
                  whileHover={{
                    y: -3,
                    boxShadow: `0 24px 64px rgba(0,0,0,0.09), 0 0 0 1px ${p.accent}28`,
                    borderColor: p.accent + '50',
                  }}
                >
                  {/* Accent top bar */}
                  <div style={{ height: 3, background: `linear-gradient(90deg, ${p.accent}, ${p.accent}55)` }} />

                  {/* Two-column layout — alternating image side */}
                  <div className={`grid grid-cols-1 ${cardIdx % 2 === 0 ? 'lg:grid-cols-[1fr_380px]' : 'lg:grid-cols-[380px_1fr]'}`}>

                    {/* ── Visual Panel (left on even cardIdx, right on odd) ── */}
                    {cardIdx % 2 !== 0 && (
                      <div
                        className="relative overflow-hidden order-last lg:order-first"
                        style={{
                          minHeight: 'clamp(260px, 50vw, 340px)',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        <ProjectSlideshow
                          project={p}
                          onOpenLightbox={() => p.screenshots.length > 0 && setLightbox({ project: p, index: 0 })}
                        />
                      </div>
                    )}

                    {/* ── Info ── */}
                    <div className="flex flex-col justify-between p-6 lg:p-9">
                      <div>
                        {/* Number + type + badge row */}
                        <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                          <span style={{ fontSize: '0.65rem', fontWeight: 700, fontFamily: 'monospace', color: p.accent, letterSpacing: '0.04em' }}>
                            {String(cardIdx + 1).padStart(2, '0')}
                          </span>
                          <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--ink-muted)', opacity: 0.35, display: 'inline-block' }} />
                          <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontFamily: "'DM Sans', sans-serif" }}>
                            {p.type}
                          </span>
                          {p.isApp && (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 999, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: `${p.accent}15`, color: p.accent }}>
                              <Smartphone size={9} /> Android
                            </span>
                          )}
                          {!p.isApp && hasLiveUrl && (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', borderRadius: 999, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#16a34a14', color: '#16a34a' }}>
                              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#16a34a', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                              Live
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3
                          className="font-display font-bold mb-2"
                          style={{ fontSize: 'clamp(1.3rem,2.5vw,1.65rem)', color: 'var(--ink)', letterSpacing: '-0.025em', lineHeight: 1.15 }}
                        >
                          {p.title}
                        </h3>

                        {/* Description — tighter, max 2 lines */}
                        <p className="font-body text-sm mb-5" style={{ color: 'var(--ink-muted)', lineHeight: 1.7, maxWidth: '52ch' }}>
                          {p.description}
                        </p>

                        {/* Stack pills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {p.stack.map(t => (
                            <span key={t} style={{ padding: '3px 10px', borderRadius: 6, fontSize: '0.68rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", background: `${p.accent}10`, border: `1px solid ${p.accent}28`, color: p.accent, letterSpacing: '0.01em' }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* ── Action buttons ── */}
                      <div className="flex flex-col gap-2">
                        {/* Primary CTA — full width on mobile */}
                        <div className="flex flex-wrap gap-2">
                          {p.isApp ? (
                            hasLiveUrl ? (
                              <a href={p.url} download
                                className="inline-flex items-center justify-center gap-2 flex-1 lg:flex-none"
                                style={{ padding: '10px 20px', borderRadius: 10, background: p.accent, color: '#fff', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', letterSpacing: '0.01em', transition: 'opacity 0.2s ease' }}
                                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
                                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                              >
                                <Download size={13} /> Download APK
                              </a>
                            ) : (
                              <span className="inline-flex items-center justify-center gap-2 flex-1 lg:flex-none" style={{ padding: '10px 20px', borderRadius: 10, background: p.accent, color: '#fff', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", opacity: 0.35, cursor: 'not-allowed' }}>
                                <Download size={13} /> Coming Soon
                              </span>
                            )
                          ) : (
                            <a href={p.url} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 flex-1 lg:flex-none"
                              style={{ padding: '10px 20px', borderRadius: 10, background: p.accent, color: '#fff', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', letterSpacing: '0.01em', transition: 'opacity 0.2s ease' }}
                              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
                              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                            >
                              <ArrowUpRight size={13} /> Visit Site
                            </a>
                          )}
                        </div>

                        {/* Secondary row — Screenshots + Case Study + Features toggle */}
                        <div className="flex flex-wrap gap-2 items-center">
                          {p.screenshots.length > 0 && (
                            <button type="button" onClick={() => setLightbox({ project: p, index: 0 })}
                              className="inline-flex items-center gap-2"
                              style={{ padding: '8px 16px', borderRadius: 10, background: 'transparent', border: '1px solid var(--border)', color: 'var(--ink)', fontSize: '0.72rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', transition: 'background 0.2s ease, border-color 0.2s ease' }}
                              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#f1f5f9'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#94a3b8'; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'; }}
                            >
                              <Images size={12} /> Screenshots
                            </button>
                          )}

                          <a href={`/projects/${p.slug}`}
                            className="inline-flex items-center gap-2"
                            style={{ padding: '8px 16px', borderRadius: 10, background: 'transparent', border: '1px solid var(--border)', color: 'var(--ink)', fontSize: '0.72rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', transition: 'background 0.2s ease, border-color 0.2s ease' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#f1f5f9'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#94a3b8'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; }}
                          >
                            Case Study <ArrowRight size={12} />
                          </a>

                          {p.architectureUrl && (
                            <a href={p.architectureUrl} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                              style={{ padding: '8px 16px', borderRadius: 10, background: 'rgba(62,207,142,0.06)', border: '1px solid rgba(62,207,142,0.3)', color: '#1a7a52', fontSize: '0.72rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', transition: 'background 0.2s ease, border-color 0.2s ease' }}
                              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(62,207,142,0.12)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(62,207,142,0.5)'; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(62,207,142,0.06)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(62,207,142,0.3)'; }}
                            >
                              Architecture <ArrowUpRight size={12} />
                            </a>
                          )}

                          <button type="button" onClick={() => setExpanded(isOpen ? null : p.id)}
                            className="inline-flex items-center gap-1.5"
                            style={{ padding: '8px 14px', borderRadius: 10, background: 'transparent', border: 'none', color: 'var(--ink-muted)', fontSize: '0.72rem', fontWeight: 500, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', transition: 'color 0.2s ease' }}
                            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)')}
                            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--ink-muted)')}
                          >
                            Features
                            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'flex' }}>
                              <ChevronDown size={13} />
                            </motion.span>
                          </button>
                        </div>
                      </div>

                      {/* ── Expandable features ── */}
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
                            <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {p.features.map((f, fi) => (
                                  <li key={fi} className="flex items-start gap-2">
                                    <div style={{ marginTop: 6, width: 5, height: 5, borderRadius: 2, flexShrink: 0, background: p.accent }} />
                                    <span className="font-body text-sm" style={{ color: 'var(--ink-muted)', lineHeight: 1.65 }}>{f}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* ── Visual Panel (right side — only on even cardIdx) ── */}
                    {cardIdx % 2 === 0 && (
                    <div
                      className="relative overflow-hidden"
                      style={{
                        minHeight: 'clamp(260px, 50vw, 340px)',
                        borderTop: '1px solid var(--border)',
                      }}
                    >
                      <ProjectSlideshow
                        project={p}
                        onOpenLightbox={() => p.screenshots.length > 0 && setLightbox({ project: p, index: 0 })}
                      />
                    </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="divider mb-16" />

          {/* ── Background ── */}
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
                  <p className="font-body font-semibold text-sm" style={{ color: '#3ECF8E' }}>BITROOT</p>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                  <Calendar className="w-3 h-3" style={{ color: '#3ECF8E' }} />
                  <span className="font-body text-xs" style={{ color: 'var(--ink-muted)' }}>2024 – Present</span>
                </div>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Architected and shipped seven production projects from scratch — including an AI/RAG pipeline',
                  'Two Android apps built with React Native, Expo SDK, and EAS Build',
                  'Multi-tenant database design with complete tenant data isolation',
                  'CI/CD pipelines, Vercel deployments, performance monitoring',
                  'Secure authentication, role-based access, audit logging',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#3ECF8E' }} />
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
                  {['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Node.js', 'React Native', 'Python', 'LangChain'].map(t => (
                    <span key={t} className="tag" style={{ background: 'rgba(62,207,142,0.08)', borderColor: 'rgba(62,207,142,0.25)', color: '#1a7a52', fontWeight: 600 }}>{t}</span>
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