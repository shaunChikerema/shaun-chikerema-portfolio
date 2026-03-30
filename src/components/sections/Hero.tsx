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
      setImgSrc('https://placehold.co/600x800/0a0a0a/d4a96a?text=SC&font=playfair-display');
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
        a.href = '/shaun-chikerema-resume.pdf';
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
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#080808' }}
      itemScope itemType="https://schema.org/Person"
    >
      {/* Grain texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Warm glow behind photo */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 80% 50%, rgba(180,130,60,0.13) 0%, transparent 65%)' }}
      />

      {/* ── Top bar ── */}
      <motion.div
        {...fade(0, 0)}
        className="relative z-20 flex items-center justify-between px-6 lg:px-14 pt-8"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
            Available for work
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={href} href={href} aria-label={label}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.38)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,169,106,0.5)';
                (e.currentTarget as HTMLAnchorElement).style.color = '#d4a96a';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.38)';
              }}
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto w-full px-6 lg:px-14 pb-12 items-end lg:items-stretch gap-0">

        {/* ── Left: Text ── */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:justify-end pb-0 lg:pb-16 pt-14 lg:pt-0">

          {/* Eyebrow */}
          <motion.p {...fade(0.1)} style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#d4a96a', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, marginBottom: '1.6rem' }}>
            Software Engineer · Botswana
          </motion.p>

          {/* Name — split lines for stagger */}
          <div style={{ overflow: 'hidden', marginBottom: '0.2rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold"
              style={{ fontSize: 'clamp(4.8rem, 11.5vw, 9.5rem)', letterSpacing: '-0.04em', lineHeight: 0.88, color: '#f5f0e8' }}
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
              className="font-display font-bold"
              style={{ fontSize: 'clamp(4.8rem, 11.5vw, 9.5rem)', letterSpacing: '-0.04em', lineHeight: 0.88, fontStyle: 'italic', color: '#d4a96a' }}
            >
              Chikerema
            </motion.h1>
          </div>

          {/* Thin rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: '1.8rem', transformOrigin: 'left' }}
          />

          {/* Bio */}
          <motion.p {...fade(0.44)} style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: 'rgba(245,240,232,0.5)', lineHeight: 1.85, maxWidth: '44ch', fontFamily: "'DM Sans', sans-serif", marginBottom: '2rem' }}>
            Full-stack web and native mobile — from database schema to deployed app, on any platform.
          </motion.p>

          {/* Stack pills */}
          <motion.div {...fade(0.5)} style={{ marginBottom: '2.5rem' }}>
            <div className="flex flex-wrap gap-1.5">
              {STACK.map(t => (
                <span key={t} style={{ padding: '3px 10px', borderRadius: 4, fontSize: '0.64rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.04em', background: 'rgba(212,169,106,0.09)', border: '1px solid rgba(212,169,106,0.22)', color: '#d4a96a' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fade(0.56)} className="flex flex-wrap gap-3">
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 group"
              style={{ padding: '11px 24px', borderRadius: 6, background: '#d4a96a', color: '#080808', fontSize: '0.76rem', fontWeight: 700, fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.02em', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
            >
              View my work <ArrowRight size={14} />
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-2"
              style={{ padding: '11px 24px', borderRadius: 6, background: 'transparent', color: 'rgba(245,240,232,0.7)', fontSize: '0.76rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", border: '1px solid rgba(255,255,255,0.14)', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,169,106,0.4)'; (e.currentTarget as HTMLButtonElement).style.color = '#f5f0e8'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.14)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(245,240,232,0.7)'; }}
            >
              <Download size={13} className={downloading ? 'animate-bounce' : ''} />
              {downloading ? 'Downloading...' : 'Resume'}
            </button>
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end items-end pt-14 lg:pt-0 lg:pb-16"
        >
          <div className="relative">

            {/* Ambient glow */}
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(212,169,106,0.18) 0%, transparent 70%)', transform: 'scale(1.2)', filter: 'blur(28px)', zIndex: 0 }} />

            {/* Gold vertical accent */}
            <div aria-hidden style={{ position: 'absolute', left: -14, top: '20%', bottom: '20%', width: 2, background: 'linear-gradient(to bottom, transparent, #d4a96a80, transparent)', zIndex: 3, borderRadius: 2 }} />

            {/* Photo frame */}
            <div
              className="relative overflow-hidden"
              style={{ zIndex: 2, width: 'clamp(230px, 28vw, 370px)', aspectRatio: '3/4', borderRadius: 6, border: '1px solid rgba(212,169,106,0.18)', background: '#111' }}
            >
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: '#111' }}>
                  <div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(212,169,106,0.15)', borderTopColor: '#d4a96a' }} />
                </div>
              )}
              <img
                src={imgSrc}
                alt="Shaun Chikerema"
                className={`w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ objectPosition: '50% 12%' }}
                onLoad={() => setImgLoaded(true)}
                itemProp="image"
              />
              {/* Bottom fade into dark */}
              <div aria-hidden className="absolute bottom-0 left-0 right-0" style={{ height: '40%', background: 'linear-gradient(to top, rgba(8,8,8,0.75) 0%, transparent 100%)' }} />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'absolute', bottom: 28, left: -32, zIndex: 10, background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(16px)', border: '1px solid rgba(212,169,106,0.18)', borderRadius: 8, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 14 }}
            >
              {[{ num: '6', label: 'Projects' }, { num: '2', label: 'Android apps' }, { num: '1+', label: 'Client' }].map((s, i) => (
                <>
                  {i > 0 && <div key={`d${i}`} style={{ width: 1, height: 26, background: 'rgba(255,255,255,0.07)' }} />}
                  <div key={s.label}>
                    <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#d4a96a', lineHeight: 1, fontFamily: 'serif' }}>{s.num}</p>
                    <p style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.09em', textTransform: 'uppercase', marginTop: 3 }}>{s.label}</p>
                  </div>
                </>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <motion.button
          onClick={scrollToWork}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
          aria-label="Scroll down"
        >
          scroll
          <div style={{ width: 1, height: 22, background: 'linear-gradient(to bottom, rgba(212,169,106,0.5), transparent)' }} />
        </motion.button>
      </motion.div>
    </section>
  );
}