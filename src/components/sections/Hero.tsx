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

const G      = '#3ECF8E';
const G_DARK = '#2db87a';

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
      setImgSrc('https://placehold.co/600x600/111111/3ECF8E?text=SC&font=playfair-display');
      setImgLoaded(true);
    };
  }, []);

  const fade = (delay = 0, y = 16) => ({
    initial:    { opacity: 0, y: reduced ? 0 : y },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
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

  const CTAButtons = () => (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={scrollToWork}
        style={{
          padding: '11px 24px', borderRadius: 6, background: G, color: '#000',
          fontSize: '0.75rem', fontWeight: 700, ...DM, letterSpacing: '0.02em',
          border: 'none', cursor: 'pointer', transition: 'background 0.2s',
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G_DARK; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; }}
      >
        View my work <ArrowRight size={14} />
      </button>
      <button
        onClick={handleDownload}
        disabled={downloading}
        style={{
          padding: '11px 24px', borderRadius: 6, background: 'transparent',
          color: 'var(--ink)', fontSize: '0.75rem', fontWeight: 600, ...DM,
          border: '1px solid var(--border-mid)', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s',
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(62,207,142,0.5)'; (e.currentTarget as HTMLButtonElement).style.color = G; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-mid)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)'; }}
      >
        <Download size={13} className={downloading ? 'animate-bounce' : ''} />
        {downloading ? 'Downloading...' : 'Resume'}
      </button>
    </div>
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-x-hidden"
      style={{ background: 'var(--bg-page)' }}
      itemScope itemType="https://schema.org/Person"
    >
      {/* Thin green top accent */}
      <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: G, zIndex: 30 }} />

      {/* ── Top bar ── */}
      <motion.div {...fade(0, 0)} className="relative z-20 flex items-center justify-between px-6 lg:px-14 pt-8">
        <div className="flex items-center gap-2">
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: G, display: 'inline-block' }} />
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', ...DM, fontWeight: 600 }}>
            Available for work
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a key={href} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
              style={{ border: '1px solid var(--border-mid)', color: 'var(--ink-muted)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(62,207,142,0.5)'; el.style.color = G; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--border-mid)'; el.style.color = 'var(--ink-muted)'; }}
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* ── Main grid ── */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto w-full px-6 lg:px-14 pb-12 items-center gap-8 lg:gap-0">

        {/* Left: Text */}
        <div className="lg:col-span-7 flex flex-col justify-center pt-10 lg:pt-0 order-2 lg:order-1">

          {/* Eyebrow */}
          <motion.p {...fade(0.1)} style={{ fontSize: '0.67rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: G, ...DM, fontWeight: 700, marginBottom: '1.4rem' }}>
            Software Engineer · Botswana
          </motion.p>

          {/* Name */}
          <div style={{ overflow: 'hidden', marginBottom: '0.1rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ ...PLAYFAIR, fontWeight: 700, fontSize: 'clamp(3.4rem, 8vw, 7rem)', letterSpacing: '-0.04em', lineHeight: 0.92, color: 'var(--ink)' }}
              itemProp="name"
            >
              Shaun
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', marginBottom: '1.6rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{ ...PLAYFAIR, fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(3.4rem, 8vw, 7rem)', letterSpacing: '-0.04em', lineHeight: 0.92, color: G }}
            >
              Chikerema
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: 1, background: 'var(--border)', marginBottom: '1.5rem', transformOrigin: 'left' }}
          />

          {/* Bio */}
          <motion.p {...fade(0.34)} style={{ fontSize: 'clamp(0.88rem, 1.3vw, 1rem)', color: 'var(--ink)', lineHeight: 1.8, maxWidth: '42ch', ...DM, marginBottom: '1.6rem' }}>
            I build AI-powered products that ship — from LangChain pipelines to deployed React Native apps.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.4)} style={{ marginBottom: '1.8rem' }}>
            <CTAButtons />
          </motion.div>

          {/* Stats */}
          <motion.div {...fade(0.46)} className="flex items-center gap-6" style={{ marginBottom: '1.8rem' }}>
            {[['3+', 'years exp'], ['8', 'projects shipped'], ['Open', 'to remote']].map(([val, label]) => (
              <div key={label} className="flex flex-col">
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', ...DM, lineHeight: 1 }}>{val}</span>
                <span style={{ fontSize: '0.62rem', color: 'var(--ink-muted)', ...DM, letterSpacing: '0.04em', marginTop: 3 }}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Stack pills */}
          <motion.div {...fade(0.52)}>
            <div className="flex flex-wrap gap-1.5">
              {STACK.map(t => (
                <span key={t} style={{
                  padding: '4px 11px', borderRadius: 4, fontSize: '0.63rem', fontWeight: 600,
                  ...DM, letterSpacing: '0.04em',
                  background: 'transparent',
                  border: '1px solid var(--border-mid)',
                  color: 'var(--ink-mid)',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Circle Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2 pt-8 lg:pt-0"
        >
          <div style={{
            width: 'clamp(200px, 26vw, 320px)',
            aspectRatio: '1 / 1',
            borderRadius: '50%',
            overflow: 'hidden',
            border: `2px solid rgba(62,207,142,0.35)`,
            background: 'var(--bg-field)',
            position: 'relative',
          }}>
            {!imgLoaded && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-field)' }}>
                <div style={{ width: 22, height: 22, border: `2px solid rgba(62,207,142,0.2)`, borderTopColor: G, borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
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
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
      >
        <button
          onClick={scrollToWork}
          style={{ color: 'var(--ink-muted)', fontSize: '0.52rem', letterSpacing: '0.22em', textTransform: 'uppercase', ...DM, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
          aria-label="Scroll down"
        >
          scroll
          <div style={{ width: 1, height: 20, background: `linear-gradient(to bottom, var(--ink-muted), transparent)` }} />
        </button>
      </motion.div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}