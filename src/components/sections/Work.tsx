'use client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Calendar, Download,
  Smartphone, X, ChevronLeft, ChevronRight, Images, ArrowUpRight, Play,
} from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
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
  demoNote?: string;
  videoUrl?: string; // short walkthrough clip — shown when the live demo isn't reliably available
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
  // 1 — Most complex production app (anchors credibility)
  {
    id: 1,
    title: 'Keyat',
    slug: 'keyat',
    type: 'Real Estate Platform',
    description: 'Property marketplace for buyers, sellers, and agents — multi-tenant, role-based access, real-time search.',
    url: 'https://keyat.vercel.app',
    videoUrl: '/videos/keyat-demo.mp4',
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
      // NOTE: keyat-m-2.png is referenced but was not part of the screenshot
      // batch delivered — this slide will currently be skipped (see the
      // onError fallback below) until a real "apartment slide" screenshot is
      // captured and dropped at this path. Remove this comment once fixed.
      { src: '/screenshots/keyat/mobile/keyat-m-2.png',  caption: 'Homepage hero — apartment slide',           view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-3.png',  caption: 'Sign in — Google or email',                 view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-4.png',  caption: 'Add Property — Step 1 of 3',                view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-5.png',  caption: 'Tenant dashboard — featured properties',    view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-6.png',  caption: 'Home feed — featured & latest listings',    view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-7.png',  caption: 'Landlord dashboard — 11 listings',          view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-8.png',  caption: 'Agent dashboard — 3 listings',              view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-9.png',  caption: 'Agent dashboard — listings & market',       view: 'mobile' },
      { src: '/screenshots/keyat/mobile/keyat-m-10.png', caption: 'Search results — 18 properties found',      view: 'mobile' },
    ],
  },
  // 3 — AI/RAG (backend live on Render, no longer paused)
  {
    id: 7,
    title: 'Ragify',
    slug: 'ragify',
    type: 'AI Engineering · Python + React',
    description: 'Full RAG pipeline built from scratch — scrape → chunk (2k chars, 200-char overlap) → embed (Gemini, 768-dim) → pgvector cosine search → grounded generation (GPT-OSS 120B via Groq). Tunable retrieval, multi-turn conversation, and inline citations tied to source URLs.',
    url: 'https://askragify.vercel.app',
    architectureUrl: 'https://ragify.vercel.app/architecture.html',
    videoUrl: '/videos/ragify-demo.mp4',
    accent: '#6366f1',
    bgFrom: '#0f0f1a',
    bgTo: '#1a1a35',
    stack: ['Python', 'FastAPI', 'Gemini', 'Groq', 'pgvector', 'Supabase', 'React'],
    features: [
      'Scrape any HTML URL → clean text → overlapping chunks at word boundaries',
      'Gemini gemini-embedding-001 — 768-dim vectors, batched 50 at a time with deduplication',
      'pgvector cosine similarity via Supabase RPC — vector math stays in the DB, not Python',
      'GPT-OSS 120B on Groq — temperature 0.2 for grounded, natural answers',
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
  // 2 — Enterprise SaaS (shows backend depth)
  {
    id: 2,
    title: 'PolicyBridge',
    slug: 'policybridge',
    type: 'Insurance Automation SaaS',
    description: 'Enterprise SaaS automating policy workflows, document generation, renewal tracking, and compliance logging for insurance brokers.',
    url: 'https://policybridge.vercel.app',
    accent: '#f59e0b',
    bgFrom: '#1a1200',
    bgTo: '#2a1e00',
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
  // 5 — Mobile (shows breadth)
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
    videoUrl: '/videos/blackdice-demo.mp4',
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
      { src: '/screenshots/blackdice/mobile/blackdice-m-1.png',  caption: 'Now Playing — album art & controls',        view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-2.png',  caption: 'Library — MiniPlayer active',               view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-3.png',  caption: 'Library — songs list',                     view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-4.png',  caption: 'Edit Tags — write metadata to file',        view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-5.png',  caption: 'Albums grid view',                         view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-6.png',  caption: 'Folders — 64 total tracks',                 view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-7.png',  caption: 'Smart Playlists — favorites, recent, more', view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-8.png',  caption: 'Settings — app info & library stats',      view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-9.png',  caption: 'Scanning Library — 100% complete',         view: 'mobile' },
      { src: '/screenshots/blackdice/mobile/blackdice-m-10.png', caption: 'Smart Playlists — Recently Added, 50 tracks', view: 'mobile' },
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

function ProjectSlideshow({ project, onOpenLightbox, flagship = false }: { project: Project; onOpenLightbox: () => void; flagship?: boolean }) {
  const allSlides = pickSlides(project.screenshots);

  // FIX: track which slide src's have actually failed to load (e.g. a typo'd
  // path or a screenshot that was never captured, like keyat-m-2.png right
  // now). Previously a 404 just rendered a broken-image icon squashed into
  // the phone frame — which is very likely what looked "squished/stretched"
  // in the screenshot. Broken slides are filtered out of rotation entirely
  // instead of ever being shown.
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());
  const slides = allSlides.filter(s => !failedSrcs.has(s.src));
  const markFailed = (src: string) =>
    setFailedSrcs(prev => (prev.has(src) ? prev : new Set(prev).add(src)));

  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep idx in range if the slide count shrinks after a load failure
  useEffect(() => {
    if (idx >= slides.length && slides.length > 0) setIdx(0);
  }, [slides.length, idx]);

  // Only start playing when the card is scrolled into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || !inView) return;
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx(i => (i + 1) % slides.length);
        setFading(false);
      }, 280);
    }, 3200);
    return () => clearInterval(t);
  }, [slides.length, inView]);

  const goTo = (i: number) => {
    if (i === idx) return;
    setFading(true);
    setTimeout(() => { setIdx(i); setFading(false); }, 280);
  };

  // No screenshots (or every screenshot failed to load) — keep original placeholder
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
      ref={containerRef}
      className="absolute inset-0 overflow-hidden cursor-pointer group/panel flex flex-col items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${project.bgFrom}, ${project.bgTo})`, padding: '20px 20px 16px', gap: 14 }}
      onClick={onOpenLightbox}
    >
      {/* Phone frame — screenshots are portrait, so we show them in a phone
          mockup at their native aspect ratio instead of cropping them into
          a landscape panel (which was cutting off most of each screen).
          object-fit: cover here means the screenshot is scaled uniformly
          (no distortion) and only cropped top/bottom to fill the frame —
          it is never stretched. */}
      <div
        style={{
          position: 'relative',
          width: flagship ? 'clamp(170px, 38vw, 220px)' : 'clamp(140px, 32vw, 182px)',
          // FIX: this was '9 / 19.5' (a tall notch-phone shape), but every
          // screenshot in the Keyat set is a real 720x1280 capture — a 9:16
          // ratio. That mismatch forced object-fit: cover to crop into the
          // top and bottom of every slide to fill the taller frame, cutting
          // off the header and footer content. Matching the frame ratio to
          // the actual screenshot ratio means nothing needs to be cropped.
          aspectRatio: '9 / 16',
          flexShrink: 0,
          borderRadius: 22,
          background: '#0a0a0a',
          padding: '10px 5px 5px',
          boxShadow: '0 20px 44px rgba(0,0,0,0.28), 0 2px 10px rgba(0,0,0,0.18)',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 16, overflow: 'hidden', background: '#111' }}>
          {slides.map((shot, i) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.caption}
              onError={() => markFailed(shot.src)}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                // 'contain' is the safety net here: since the frame ratio now
                // matches the screenshots, contain and cover render
                // identically for on-ratio images, but contain guarantees no
                // cropping even if a future screenshot comes in slightly off
                // (e.g. a different phone's status bar height).
                objectFit: 'contain', objectPosition: 'top center',
                opacity: i === idx ? (fading ? 0 : 1) : 0,
                transition: 'opacity 0.28s ease',
              }}
            />
          ))}
        </div>
        {/* Notch */}
        <div
          aria-hidden
          style={{
            position: 'absolute', top: 3, left: '50%', transform: 'translateX(-50%)',
            width: '26%', height: 5, background: '#000', borderRadius: 999, zIndex: 2,
          }}
        />
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/panel:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.28)' }}
      >
        <div
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-white text-xs font-semibold"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}
        >
          <Images size={14} /> View {project.screenshots.length} Screenshots
        </div>
      </div>

      {/* Caption + dots — on their own dark chip so they stay legible
          whether the project's gradient (bgFrom/bgTo) is light or dark. */}
      {slides.length > 1 && (
        <div
          className="flex flex-col items-center gap-2"
          style={{ padding: '8px 14px', borderRadius: 12, background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(6px)', pointerEvents: 'none' }}
        >
          <span style={{ fontSize: 9, fontWeight: 600, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'center', maxWidth: 220 }}>
            {slides[idx]?.caption.split('—')[0].trim()}
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
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  return (
    <>
      <section id="work" style={{ background: 'var(--bg-section)' }}>
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
                  Six production projects across web and mobile — from polished client work to an AI pipeline and mobile apps.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Project Rows ── */}
          <div className="space-y-5 mb-14">
            {PROJECTS.map((p, cardIdx) => {
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
                    background: 'var(--bg-card)',
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

                  {/* Two-column layout — alternating image side. The flagship
                      project (cardIdx 0, Keyat) gets a wider image panel than
                      the rest so it doesn't read as visually equal to every
                      other card — it's the most complex piece of work here
                      and should look like it. */}
                  <div className={`grid grid-cols-1 ${cardIdx % 2 === 0 ? (cardIdx === 0 ? 'lg:grid-cols-[1fr_460px]' : 'lg:grid-cols-[1fr_380px]') : 'lg:grid-cols-[380px_1fr]'}`}>

                    {/* ── Visual Panel (left on odd cardIdx) ── */}
                    {cardIdx % 2 !== 0 && (
                      <div
                        className="relative overflow-hidden order-last lg:order-first"
                        style={{
                          minHeight: 'clamp(340px, 55vw, 420px)',
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
                        {/* Type + status row — dropped the "01" index (this
                            is a list, not a real sequence) and the tracked
                            all-caps/middle-dot meta string. Category is now
                            a small tinted label chip; status stays a
                            separate dot+word badge. */}
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                          <span
                            style={{
                              padding: '3px 10px', borderRadius: 999,
                              fontSize: '0.68rem', fontWeight: 600,
                              fontFamily: "'DM Sans', sans-serif",
                              background: `${p.accent}14`, color: p.accent,
                            }}
                          >
                            {p.type}
                          </span>
                          {p.isApp && (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 999, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: `${p.accent}15`, color: p.accent }}>
                              <Smartphone size={9} /> Android
                            </span>
                          )}
                          {!p.isApp && hasLiveUrl && (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', borderRadius: 999, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#16a34a14', color: '#16a34a' }}>
                              <span className="dot-pulse" style={{ width: 5, height: 5, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
                              Live
                            </span>
                          )}
                          {p.demoNote && (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', borderRadius: 999, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.06em', background: 'rgba(99,102,241,0.1)', color: '#6366f1', border: '1px solid rgba(99,102,241,0.25)' }}>
                              {p.demoNote}
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

                        {/* Description — enforced 2-line clamp so longer
                            descriptions (e.g. Ragify's) don't inflate the card;
                            the rest is one click away via Case Study. */}
                        <p
                          className="font-body text-sm mb-5"
                          style={{
                            color: 'var(--ink-muted)', lineHeight: 1.7, maxWidth: '52ch',
                            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {p.description}
                        </p>

                        {/* Stack pills — neutral gray, capped at 3 for most
                            cards so the row stays scannable. The flagship
                            project (Keyat) shows its full stack instead of
                            being capped like everything else, since it's the
                            card meant to carry the most technical weight. */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {p.stack.slice(0, cardIdx === 0 ? p.stack.length : 3).map(t => (
                            <span key={t} style={{ padding: '3px 10px', borderRadius: 6, fontSize: '0.68rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", background: 'var(--bg-field)', border: '1px solid var(--border)', color: 'var(--ink-mid)', letterSpacing: '0.01em' }}>
                              {t}
                            </span>
                          ))}
                          {cardIdx !== 0 && p.stack.length > 3 && (
                            <span style={{ padding: '3px 10px', borderRadius: 6, fontSize: '0.68rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", background: 'var(--bg-field)', border: '1px solid var(--border)', color: 'var(--ink-muted)' }}>
                              +{p.stack.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* ── Action buttons ── */}
                      <div className="flex flex-col gap-3">
                        {/* Primary CTA — full width on mobile, the only solid button on the card */}
                        <div className="flex flex-col sm:flex-row gap-2">
                          {p.isApp ? (
                            <>
                              {hasLiveUrl ? (
                                <a href={p.url} download
                                  className="inline-flex items-center justify-center gap-2 flex-1 lg:flex-none"
                                  style={{ padding: '10px 20px', borderRadius: 10, background: p.accent, color: '#fff', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', letterSpacing: '0.01em', whiteSpace: 'nowrap', transition: 'opacity 0.2s ease' }}
                                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
                                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                                >
                                  <Download size={13} /> Download APK
                                </a>
                              ) : (
                                <span className="inline-flex items-center justify-center gap-2 flex-1 lg:flex-none" style={{ padding: '10px 20px', borderRadius: 10, background: p.accent, color: '#fff', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", opacity: 0.35, cursor: 'not-allowed' }}>
                                  <Download size={13} /> Coming Soon
                                </span>
                              )}
                              {p.videoUrl && (
                                <a href={p.videoUrl} target="_blank" rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 flex-1 lg:flex-none"
                                  style={{ padding: '10px 20px', borderRadius: 10, background: 'transparent', border: `1.5px solid ${p.accent}`, color: p.accent, fontSize: '0.75rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', letterSpacing: '0.01em', whiteSpace: 'nowrap', transition: 'background-color 0.2s ease, color 0.2s ease' }}
                                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = p.accent; el.style.color = '#fff'; }}
                                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.color = p.accent; }}
                                >
                                  <Play size={13} /> Watch Demo
                                </a>
                              )}
                            </>
                          ) : (
                            <>
                              <a href={p.url} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 flex-1 lg:flex-none"
                                style={{ padding: '10px 20px', borderRadius: 10, background: p.accent, color: '#fff', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', letterSpacing: '0.01em', whiteSpace: 'nowrap', transition: 'opacity 0.2s ease' }}
                                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
                                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                              >
                                <ArrowUpRight size={13} /> Visit Site
                              </a>
                              {/* Watch Demo is a real (outlined) button everywhere, not a
                                  text link — a plain link next to a solid Visit Site button
                                  reads as "less important" or gets skipped as non-clickable.
                                  Case Study / Architecture stay as text links below since
                                  they're optional deep-dives, not primary content. */}
                              {p.videoUrl && (
                                <a href={p.videoUrl} target="_blank" rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 flex-1 lg:flex-none"
                                  style={{ padding: '10px 20px', borderRadius: 10, background: 'transparent', border: `1.5px solid ${p.accent}`, color: p.accent, fontSize: '0.75rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', letterSpacing: '0.01em', whiteSpace: 'nowrap', transition: 'background-color 0.2s ease, color 0.2s ease' }}
                                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = p.accent; el.style.color = '#fff'; }}
                                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.color = p.accent; }}
                                >
                                  <Play size={13} /> Watch Demo
                                </a>
                              )}
                            </>
                          )}
                        </div>

                        {/* Secondary row — just Case Study, plus Architecture
                            when a project has one. Watch Demo now lives above,
                            as a real button next to Visit Site / Download,
                            since a text link there was easy to miss or mistake
                            for non-clickable — this row is for optional
                            deep-dives only, so a quiet text-link treatment
                            still fits. */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <a href={`/projects/${p.slug}`}
                            style={{ color: 'var(--ink-mid)', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'color 0.2s ease, border-color 0.2s ease', paddingBottom: 1 }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = 'var(--ink)'; el.style.borderColor = 'var(--ink)'; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = 'var(--ink-mid)'; el.style.borderColor = 'transparent'; }}
                          >
                            Case Study
                          </a>

                          {p.architectureUrl && (
                            <a href={p.architectureUrl} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5"
                              style={{ color: '#1a7a52', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', transition: 'opacity 0.2s ease' }}
                              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
                              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                            >
                              Architecture <ArrowUpRight size={13} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* ── Visual Panel (right side — only on even cardIdx) ── */}
                    {cardIdx % 2 === 0 && (
                    <div
                      className="relative overflow-hidden"
                      style={{
                        minHeight: cardIdx === 0 ? 'clamp(380px, 58vw, 480px)' : 'clamp(340px, 55vw, 420px)',
                        borderTop: '1px solid var(--border)',
                      }}
                    >
                      <ProjectSlideshow
                        project={p}
                        flagship={cardIdx === 0}
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
                  'Architected and shipped six production projects from scratch — including an AI/RAG pipeline',
                  'Android app built with React Native, Expo SDK, and EAS Build',
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