'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const SOCIALS = [
  { href: 'https://github.com/shaunChikerema',      icon: Github,   label: 'GitHub' },
  { href: 'https://linkedin.com/in/shaunchikerema', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:sschikerema@gmail.com',           icon: Mail,     label: 'Email' },
];

const STACK = ['Python', 'LangChain', 'Next.js', 'TypeScript', 'React Native', 'Supabase'];

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
      setImgSrc('https://placehold.co/600x600/f1f5f9/3ECF8E?text=SC&font=playfair-display');
      setImgLoaded(true);
    };
  }, []);

  const fade = (delay = 0, y = 20) => ({
    initial:    { opacity: 0, y: reduced ? 0 : y },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
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
      {/* Top accent line */}
      <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${G}, transparent)`, zIndex: 30 }} />

      {/* Subtle background glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(62,207,142,0.06) 0%, transparent 70%)' }} />

      {/* ── Top bar ── */}
      <motion.div {...fade(0, 0)} className="relative z-20 flex items-center justify-between px-6 lg:px-14 pt-8">
        <div className="flex items-center gap-2">
          <div style={{ position: 'relative', width: 8, height: 8 }}>
            <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: G, opacity: 0.3, animation: 'pulse 2.5s ease-in-out infinite' }} />
            <span style={{ position: 'absolute', inset: 1.5, borderRadius: '50%', background: G }} />
          </div>
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
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto w-full px-6 lg:px-14 pb-12 items-center gap-12 lg:gap-0">

        {/* Left: Text */}
        <div className="lg:col-span-7 flex flex-col justify-center pt-10 lg:pt-0 order-2 lg:order-1">

          {/* Eyebrow */}
          <motion.p {...fade(0.1)} style={{ fontSize: '0.67rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: G, ...DM, fontWeight: 700, marginBottom: '1.5rem' }}>
            Software Engineer · Botswana
          </motion.p>

          {/* Name */}
          <div style={{ overflow: 'hidden', marginBottom: '0.1rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ ...PLAYFAIR, fontWeight: 700, fontSize: 'clamp(3.4rem, 8vw, 7rem)', letterSpacing: '-0.04em', lineHeight: 0.92, color: INK }}
              itemProp="name"
            >
              Shaun
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', marginBottom: '1.8rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{ ...PLAYFAIR, fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(3.4rem, 8vw, 7rem)', letterSpacing: '-0.04em', lineHeight: 0.92, color: G }}
            >
              Chikerema
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: 1, background: BORDER, marginBottom: '1.6rem', transformOrigin: 'left' }}
          />

          {/* Bio */}
          <motion.p {...fade(0.42)} style={{ fontSize: 'clamp(0.88rem, 1.3vw, 1rem)', color: INK_MID, lineHeight: 1.8, maxWidth: '42ch', ...DM, marginBottom: '1.6rem' }}>
            I build AI-powered products that ship — from LangChain pipelines to deployed React Native apps.
          </motion.p>

          {/* Stats */}
          <motion.div {...fade(0.48)} className="flex items-center gap-5" style={{ marginBottom: '1.8rem' }}>
            {[['3+', 'years exp'], ['8', 'projects shipped'], ['Open', 'to remote']].map(([val, label]) => (
              <div key={label} className="flex flex-col">
                <span style={{ fontSize: '1rem', fontWeight: 700, color: INK, ...DM, lineHeight: 1 }}>{val}</span>
                <span style={{ fontSize: '0.62rem', color: INK_SOFT, ...DM, letterSpacing: '0.04em', marginTop: 2 }}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Stack pills */}
          <motion.div {...fade(0.52)} style={{ marginBottom: '2.2rem' }}>
            <div className="flex flex-wrap gap-1.5">
              {STACK.map(t => (
                <span key={t} style={{ padding: '3px 10px', borderRadius: 4, fontSize: '0.63rem', fontWeight: 600, ...DM, letterSpacing: '0.04em', background: `${G}12`, border: `1px solid ${G}35`, color: G_DARK }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fade(0.57)} className="flex flex-wrap gap-3">
            <button
              onClick={scrollToWork}
              style={{ padding: '11px 24px', borderRadius: 6, background: G, color: '#fff', fontSize: '0.75rem', fontWeight: 700, ...DM, letterSpacing: '0.02em', border: 'none', cursor: 'pointer', transition: 'background 0.2s, transform 0.15s', boxShadow: `0 4px 18px ${G}38`, display: 'inline-flex', alignItems: 'center', gap: 8 }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = G_DARK; b.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = G; b.style.transform = 'translateY(0)'; }}
            >
              View my work <ArrowRight size={14} />
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              style={{ padding: '11px 24px', borderRadius: 6, background: 'transparent', color: INK_MID, fontSize: '0.75rem', fontWeight: 600, ...DM, border: `1px solid ${BORDER}`, cursor: 'pointer', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = `${G}50`; b.style.color = INK; b.style.background = `${G}08`; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = BORDER; b.style.color = INK_MID; b.style.background = 'transparent'; }}
            >
              <Download size={13} className={downloading ? 'animate-bounce' : ''} />
              {downloading ? 'Downloading...' : 'Resume'}
            </button>
          </motion.div>
        </div>

        {/* Right: Circle Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2 pt-8 lg:pt-0"
        >
          <div style={{ position: 'relative' }}>

            {/* Outer decorative ring */}
            <div aria-hidden style={{
              position: 'absolute',
              inset: -16,
              borderRadius: '50%',
              border: `1px dashed ${G}40`,
            }} />

            {/* Middle ring */}
            <div aria-hidden style={{
              position: 'absolute',
              inset: -8,
              borderRadius: '50%',
              border: `1px solid ${G}25`,
            }} />

            {/* Photo circle */}
            <div style={{
              width: 'clamp(220px, 28vw, 340px)',
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              overflow: 'hidden',
              border: `3px solid ${G}60`,
              boxShadow: `0 0 0 1px ${G}20, 0 20px 60px rgba(62,207,142,0.15), 0 4px 20px rgba(15,23,42,0.08)`,
              background: '#f1f5f9',
              position: 'relative',
            }}>
              {!imgLoaded && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9' }}>
                  <div style={{ width: 24, height: 24, border: `2px solid ${G}30`, borderTopColor: G, borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                </div>
              )}
              <img
                src={imgSrc}
                alt="Shaun Chikerema"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 10%', opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
                onLoad={() => setImgLoaded(true)}
                itemProp="image"
              />
            </div>

            {/* Small accent dot — top right */}
            <div aria-hidden style={{
              position: 'absolute',
              top: -4,
              right: 16,
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: G,
              boxShadow: `0 0 8px ${G}`,
            }} />

            {/* Small accent dot — bottom left */}
            <div aria-hidden style={{
              position: 'absolute',
              bottom: 8,
              left: -8,
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: G,
              opacity: 0.5,
            }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
      >
        <button
          onClick={scrollToWork}
          style={{ color: INK_SOFT, fontSize: '0.52rem', letterSpacing: '0.22em', textTransform: 'uppercase', ...DM, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
          aria-label="Scroll down"
        >
          scroll
          <div style={{ width: 1, height: 20, background: `linear-gradient(to bottom, ${G}70, transparent)` }} />
        </button>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(2); opacity: 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}