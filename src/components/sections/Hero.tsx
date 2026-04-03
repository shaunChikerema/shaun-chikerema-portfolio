'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const SOCIALS = [
  { href: 'https://github.com/shaunChikerema',      icon: Github,   label: 'GitHub' },
  { href: 'https://linkedin.com/in/shaunchikerema', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:sschikerema@gmail.com',           icon: Mail,     label: 'Email' },
];

const STACK = ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'Supabase', 'React Native', 'Expo'];

// ── Palette ──────────────────────────────────────────────────────────────────
const G        = '#3ECF8E';
const G_DARK   = '#1a7a52';
const INK      = '#0f172a';
const INK_MID  = '#475569';
const INK_SOFT = '#94a3b8';
const BORDER   = 'rgba(15,23,42,0.1)';

const PLAYFAIR: React.CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" };
const DM: React.CSSProperties       = { fontFamily: "'DM Sans', sans-serif" };

export default function Hero() {
  const [imgLoaded,   setImgLoaded]   = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [imgSrc,      setImgSrc]      = useState('/images/shaun-profile-optimized.jpg');
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload  = () => setImgLoaded(true);
    img.onerror = () => {
      setImgSrc('https://placehold.co/600x800/f1f5f9/3ECF8E?text=SC&font=playfair-display');
      setImgLoaded(true);
    };
  }, []);

  const fade = (delay = 0, y = 24) => ({
    initial:    { opacity: 0, y: reduced ? 0 : y },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.75, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
  });

  const scrollToWork = () =>
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const res = await fetch('/shaun-chikerema-resume.pdf', { method: 'HEAD' });
      if (!res.ok) throw new Error();
      if (!linkRef.current) {
        const a = document.createElement('a');
        a.href     = '/shaun-chikerema-resume.pdf';
        a.download = 'Shaun_Chikerema_Resume.pdf';
        a.style.display = 'none';
        document.body.appendChild(a);
        linkRef.current = a;
      }
      linkRef.current.click();
    } catch { /* silent */ }
    finally { setTimeout(() => setDownloading(false), 1500); }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-x-hidden"
      style={{ background: '#ffffff' }}
      itemScope itemType="https://schema.org/Person"
    >
      {/* Green top accent bar */}
      <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${G}, transparent)`, zIndex: 30 }} />

      {/* Green glow behind photo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 50% 65% at 78% 55%, rgba(62,207,142,0.10) 0%, transparent 70%)' }} />

      {/* Light grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

      {/* ── Top bar ── */}
      <motion.div {...fade(0, 0)} className="relative z-20 flex items-center justify-between px-6 lg:px-14 pt-8">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: G, boxShadow: `0 0 6px ${G}` }} />
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: INK_MID, ...DM, fontWeight: 600 }}>
            Available for work
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a key={href} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
              style={{ border: `1px solid ${BORDER}`, color: INK_SOFT }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = `${G}60`; el.style.color = G_DARK; el.style.background = `${G}0f`; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = BORDER; el.style.color = INK_SOFT; el.style.background = 'transparent'; }}
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* ── Main grid ── */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto w-full px-6 lg:px-14 pb-12 items-end lg:items-stretch gap-0">

        {/* Left: Text */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:justify-end pb-0 lg:pb-16 pt-14 lg:pt-0">

          {/* Eyebrow */}
          <motion.p {...fade(0.1)} style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: G, ...DM, fontWeight: 700, marginBottom: '1.6rem' }}>
            Software Engineer · Botswana
          </motion.p>

          {/* ── Name block ── */}
          <div style={{ overflow: 'hidden', marginBottom: '0.15rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                ...PLAYFAIR,
                fontWeight: 700,
                fontSize: 'clamp(3.8rem, 9vw, 8rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                color: INK,
                WebkitTextFillColor: INK,
                whiteSpace: 'nowrap',
              }}
              itemProp="name"
            >
              Shaun
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.23, ease: [0.16, 1, 0.3, 1] }}
              style={{
                ...PLAYFAIR,
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'clamp(3.8rem, 9vw, 8rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                color: G,
                WebkitTextFillColor: G,
                whiteSpace: 'nowrap',
              }}
            >
              Chikerema
            </motion.h1>
          </div>

          {/* Thin rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: 1, background: BORDER, marginBottom: '1.8rem', transformOrigin: 'left' }}
          />

          {/* Bio */}
          <motion.p {...fade(0.44)} style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: INK_MID, lineHeight: 1.85, maxWidth: '44ch', ...DM, marginBottom: '2rem' }}>
            Full-stack web and native mobile — from database schema to deployed app, on any platform.
          </motion.p>

          {/* Stack pills */}
          <motion.div {...fade(0.5)} style={{ marginBottom: '2.5rem' }}>
            <div className="flex flex-wrap gap-1.5">
              {STACK.map(t => (
                <span key={t} style={{ padding: '3px 10px', borderRadius: 4, fontSize: '0.64rem', fontWeight: 600, ...DM, letterSpacing: '0.04em', background: `${G}12`, border: `1px solid ${G}35`, color: G_DARK }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fade(0.56)} className="flex flex-wrap gap-3">
            <button
              onClick={scrollToWork}
              style={{ padding: '11px 24px', borderRadius: 6, background: G, color: '#fff', fontSize: '0.76rem', fontWeight: 700, ...DM, letterSpacing: '0.02em', border: 'none', cursor: 'pointer', transition: 'background 0.2s, transform 0.15s', boxShadow: `0 4px 20px ${G}40`, display: 'inline-flex', alignItems: 'center', gap: 8 }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = G_DARK; b.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = G; b.style.transform = 'translateY(0)'; }}
            >
              View my work <ArrowRight size={14} />
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              style={{ padding: '11px 24px', borderRadius: 6, background: 'transparent', color: INK_MID, fontSize: '0.76rem', fontWeight: 600, ...DM, border: `1px solid ${BORDER}`, cursor: 'pointer', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = `${G}50`; b.style.color = INK; b.style.background = `${G}08`; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = BORDER; b.style.color = INK_MID; b.style.background = 'transparent'; }}
            >
              <Download size={13} className={downloading ? 'animate-bounce' : ''} />
              {downloading ? 'Downloading...' : 'Resume'}
            </button>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end items-end pt-14 lg:pt-0 lg:pb-16"
        >
          <div className="relative">
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, ${G}28 0%, transparent 70%)`, transform: 'scale(1.25)', filter: 'blur(32px)', zIndex: 0 }} />
            <div aria-hidden style={{ position: 'absolute', left: -14, top: '15%', bottom: '15%', width: 3, background: `linear-gradient(to bottom, transparent, ${G}, transparent)`, zIndex: 3, borderRadius: 2 }} />

            <div className="relative overflow-hidden"
              style={{ zIndex: 2, width: 'clamp(240px, 30vw, 400px)', aspectRatio: '2/3', borderRadius: 14, border: `1px solid ${G}35`, background: '#f1f5f9', boxShadow: `0 32px 80px rgba(62,207,142,0.15), 0 8px 24px rgba(15,23,42,0.10)` }}
            >
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: '#f1f5f9' }}>
                  <div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: `${G}25`, borderTopColor: G }} />
                </div>
              )}
              <img
                src={imgSrc} alt="Shaun Chikerema"
                className={`w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ objectPosition: '50% 5%' }}
                onLoad={() => setImgLoaded(true)}
                itemProp="image"
              />
              <div aria-hidden className="absolute bottom-0 left-0 right-0" style={{ height: '45%', background: 'linear-gradient(to top, rgba(8,12,24,0.72) 0%, rgba(8,12,24,0.2) 60%, transparent 100%)' }} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <motion.button
          onClick={scrollToWork}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: INK_SOFT, fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', ...DM, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
          aria-label="Scroll down"
        >
          scroll
          <div style={{ width: 1, height: 22, background: `linear-gradient(to bottom, ${G}80, transparent)` }} />
        </motion.button>
      </motion.div>
    </section>
  );
}