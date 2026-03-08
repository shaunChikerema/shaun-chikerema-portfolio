'use client';
import {
  ArrowLeft, ExternalLink, FileText, Scan, Pen, Type,
  Square, Download, Layers, Shield, Zap, Eye
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ACCENT        = '#0ea5e9';
const ACCENT_PALE   = 'rgba(14,165,233,0.08)';
const ACCENT_BORDER = 'rgba(14,165,233,0.2)';

const project = {
  title: 'DocFlow',
  version: '1.0.0',
  built: 'Mar 2026',
  type: 'Browser PDF Editor',
  techStack: {
    Rendering:    ['PDF.js', 'HTML Canvas', 'Next.js'],
    OCR:          ['Tesseract.js', 'WebAssembly', 'Web Workers'],
    Export:       ['pdf-lib', 'Blob API', 'File System Access'],
    Frontend:     ['TypeScript', 'React', 'Tailwind CSS'],
  },
};

const features = [
  { icon: FileText, label: 'PDF Rendering',   desc: 'Every page rendered to canvas via PDF.js — pixel-accurate, no server required.' },
  { icon: Scan,     label: 'OCR Extraction',  desc: 'Tesseract.js runs in a Web Worker, scanning each page for text without any upload.' },
  { icon: Pen,      label: 'Freehand Draw',   desc: 'Pressure-sensitive canvas drawing with configurable stroke color and width.' },
  { icon: Type,     label: 'Text Annotations', desc: 'Click anywhere on a page to drop a sticky note or typed text overlay.' },
  { icon: Square,   label: 'Shape Tools',     desc: 'Rectangles and arrows drawn directly onto the canvas, fully resizable.' },
  { icon: Download, label: 'PDF Export',      desc: 'pdf-lib flattens all annotations into a new PDF file ready to download.' },
];

const challenges = [
  {
    problem: 'WASM bundle size',
    solution: 'Tesseract.js loads lazily on first OCR scan — the 10MB WASM binary only downloads when needed, keeping initial page load fast.',
  },
  {
    problem: 'Canvas annotation persistence',
    solution: 'Each page maintains its own annotation layer stored in a Map keyed by page number, so navigating between pages never loses work.',
  },
  {
    problem: 'PDF coordinate space',
    solution: 'PDF.js uses a bottom-left origin; canvas uses top-left. All annotation positions are transformed on export to land correctly in pdf-lib.',
  },
];

export default function DocFlowPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50"
        style={{
          background: 'rgba(245,240,232,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(26,23,20,0.1)',
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link
              href="/#work"
              className="group flex items-center gap-2 font-body text-sm font-medium transition-colors"
              style={{ color: 'var(--ink-muted)' }}
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <a
              href="/projects/docflow/app"
              className="group flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm font-medium text-white transition-all"
              style={{ background: ACCENT }}
            >
              <ExternalLink size={14} />
              Launch Editor
            </a>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#020f1a', borderBottom: `1px solid ${ACCENT_BORDER}` }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 55% at 70% 45%, rgba(14,165,233,0.1) 0%, transparent 70%)` }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28 max-w-7xl relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-body font-semibold px-3 py-1 rounded-full text-xs tracking-widest"
                style={{ background: ACCENT_PALE, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}>
                WEB APP
              </span>
              <span className="font-body text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
                v{project.version} · {project.built}
              </span>
              <span className="inline-flex items-center gap-1.5 font-body font-semibold px-3 py-1 rounded-full text-xs"
                style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                LIVE
              </span>
            </div>

            <h1 className="font-display font-bold mb-5 leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', letterSpacing: '-0.04em' }}>
              Doc<span style={{ color: ACCENT }}>Flow</span>
            </h1>

            <p className="font-body text-lg mb-10 max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              A browser-based PDF editor with OCR text extraction, annotation tools, and lossless export.
              Zero uploads. Zero backend. Everything runs in your browser.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="/projects/docflow/app"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-body font-semibold text-sm text-white transition-all hover:opacity-90"
                style={{ background: ACCENT }}>
                <ExternalLink size={15} />
                Open Editor
              </a>
              <a href="https://github.com/shaunChikerema/docflow" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-body font-semibold text-sm transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}>
                View Source
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Build metadata bar */}
      <div style={{ background: '#0a1929', borderBottom: `1px solid ${ACCENT_BORDER}` }}>
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-wrap gap-x-10 gap-y-2 py-3.5">
            {[
              { label: 'Rendering', value: 'PDF.js' },
              { label: 'OCR Engine', value: 'Tesseract.js' },
              { label: 'Export', value: 'pdf-lib' },
              { label: 'Runtime', value: 'Client-side only' },
              { label: 'Data policy', value: 'No uploads ever' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="font-body text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>{item.label}</span>
                <span className="font-body text-xs font-semibold" style={{ color: ACCENT }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--cream)' }}>
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
            <p className="eyebrow mb-4">Capabilities</p>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--ink)', letterSpacing: '-0.025em' }}>
              Everything in the browser
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div key={f.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
                className="card p-6"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: ACCENT_PALE, border: `1px solid ${ACCENT_BORDER}` }}>
                  <f.icon size={18} style={{ color: ACCENT }} />
                </div>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: 'var(--ink)' }}>{f.label}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--cream-mid)' }}>
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
            <p className="eyebrow mb-4">Architecture</p>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--ink)', letterSpacing: '-0.025em' }}>
              Fully client-side stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="space-y-4">
                {Object.entries(project.techStack).map(([layer, techs]) => (
                  <div key={layer} className="card p-5">
                    <p className="font-body font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: ACCENT }}>{layer}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {techs.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="card p-7 h-full">
                <h3 className="font-display font-bold text-lg mb-6" style={{ color: 'var(--ink)' }}>Data Flow</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', label: 'File picked', desc: 'FileReader reads the PDF as ArrayBuffer — never leaves the browser tab.' },
                    { step: '02', label: 'PDF.js parses', desc: 'Each page rendered to a canvas element at 1.5× device pixel ratio.' },
                    { step: '03', label: 'Annotation layer', desc: 'A transparent canvas sits above each page, capturing draw/text events.' },
                    { step: '04', label: 'OCR on demand', desc: 'Tesseract.js spins up a Web Worker and processes the page canvas as an image.' },
                    { step: '05', label: 'pdf-lib exports', desc: 'Annotations serialized to PDF operators, merged into original document bytes.' },
                  ].map(item => (
                    <div key={item.step} className="flex gap-4">
                      <span className="font-display font-bold text-sm flex-shrink-0 mt-0.5" style={{ color: ACCENT }}>{item.step}</span>
                      <div>
                        <p className="font-body font-semibold text-sm mb-0.5" style={{ color: 'var(--ink)' }}>{item.label}</p>
                        <p className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--cream)' }}>
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <p className="eyebrow mb-4">Engineering</p>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--ink)', letterSpacing: '-0.025em' }}>
              Hard problems solved
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {challenges.map((c, i) => (
              <motion.div key={c.problem}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                className="card p-6"
              >
                <p className="font-body font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--terra)' }}>Problem</p>
                <h3 className="font-display font-bold text-base mb-4" style={{ color: 'var(--ink)' }}>{c.problem}</h3>
                <div style={{ height: 1, background: 'var(--border)', marginBottom: '1rem' }} />
                <p className="font-body font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Solution</p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{c.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy callout */}
      <section className="py-16" style={{ background: 'var(--cream-mid)' }}>
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="card p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6"
            style={{ borderLeft: `3px solid ${ACCENT}` }}
          >
            <Shield size={32} style={{ color: ACCENT, flexShrink: 0 }} />
            <div>
              <h3 className="font-display font-bold text-xl mb-2" style={{ color: 'var(--ink)' }}>Your files never leave your device</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                DocFlow has no backend, no API calls, and no analytics. Every operation — rendering, OCR, annotation, export —
                happens inside your browser tab. Close the tab and the files are gone. No accounts, no storage, no tracking.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#020f1a' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 50% 80% at 50% 100%, rgba(14,165,233,0.1) 0%, transparent 65%)` }} />
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="font-body font-semibold text-xs tracking-widest uppercase mb-5" style={{ color: ACCENT }}>Try it now</p>
            <h2 className="font-display font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', letterSpacing: '-0.035em' }}>
              Drop a PDF. Start editing.
            </h2>
            <p className="font-body text-base mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              No sign-up. No install. Works on any modern browser.
            </p>
            <a href="/projects/docflow/app"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-body font-bold text-sm text-white transition-all hover:opacity-90"
              style={{ background: ACCENT }}>
              <ExternalLink size={16} />
              Open DocFlow Editor
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}