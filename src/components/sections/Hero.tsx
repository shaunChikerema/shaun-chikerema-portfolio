'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const SOCIALS = [
  { href: 'https://github.com/shaunChikerema',       icon: Github,   label: 'GitHub' },
  { href: 'https://linkedin.com/in/shaunchikerema',  icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:sschikerema@gmail.com',            icon: Mail,     label: 'Email' },
];

const STACK_WEB    = ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'Supabase'];
const STACK_MOBILE = ['React Native', 'Expo'];

export default function Hero() {
  const [imgLoaded,     setImgLoaded]     = useState(false);
  const [downloading,   setDownloading]   = useState(false);
  const [imgSrc,        setImgSrc]        = useState('/images/shaun-profile-optimized.jpg');
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => setImgLoaded(true);
    img.onerror = () => {
      setImgSrc('https://placehold.co/600x800/E5DDD0/BE5430?text=SC&font=playfair-display');
      setImgLoaded(true);
    };
  }, []);

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.62, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  });

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

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
      className="min-h-screen flex items-center relative noise-overlay"
      style={{ background: 'var(--cream)' }}
      itemScope itemType="https://schema.org/Person"
    >
      {/* Primary depth glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 72% 24%, rgba(26,77,109,0.09) 0%, transparent 68%)' }}
      />
      {/* Secondary corner accent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 30% 40% at 18% 82%, rgba(26,77,109,0.045) 0%, transparent 60%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full relative z-10 py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* ── Text ── */}
          <div className="lg:col-span-7">

            {/* Availability */}
            <motion.div {...fade(0)} className="mb-7">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm font-body font-medium"
                style={{ fontSize: '0.7rem', background: 'var(--terra-pale)', color: 'var(--terra)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full dot-pulse" style={{ background: 'var(--terra)' }} />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fade(0.07)}
              className="font-display font-bold leading-[0.92] mb-4"
              style={{
                fontSize: 'clamp(3.8rem, 9vw, 7rem)',
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
              }}
              itemProp="name"
            >
              Shaun<br />
              <em style={{ color: 'var(--terra)', fontStyle: 'italic' }}>Chikerema</em>
            </motion.h1>

            {/* Role line */}
            <motion.p
              {...fade(0.14)}
              className="font-body font-bold mb-6"
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
              itemProp="jobTitle"
            >
              Software Engineer
            </motion.p>

            {/* Value prop */}
            <motion.div {...fade(0.26)} className="mb-6 max-w-lg">
              <p
                className="font-body"
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                  color: 'var(--ink-mid)',
                  lineHeight: 1.85,
                  fontWeight: 500,
                }}
              >
                Full-stack web and native mobile — from database schema to deployed app, on any platform.
              </p>
            </motion.div>

            {/* Stack — label pinned left, badges wrap independently below it on overflow */}
            <motion.div {...fade(0.32)} className="mb-9 flex flex-col gap-2.5">

              {/* Web row */}
              <div className="flex items-start gap-2">
                {/* Label — fixed width, top-aligned so it stays put when badges wrap */}
                <span
                  className="shrink-0 pt-[3px]"
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-muted)',
                    fontFamily: "'DM Sans', sans-serif",
                    width: 36,
                  }}
                >
                  Web
                </span>
                {/* Badges — wrap freely within remaining space */}
                <div className="flex flex-wrap gap-1.5">
                  {STACK_WEB.map(t => (
                    <span
                      key={t}
                      className="tag"
                      style={{
                        background: 'rgba(26,77,109,0.08)',
                        borderColor: 'rgba(26,77,109,0.25)',
                        color: '#1A4D6D',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* App row */}
              <div className="flex items-start gap-2">
                <span
                  className="shrink-0 pt-[3px]"
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-muted)',
                    fontFamily: "'DM Sans', sans-serif",
                    width: 36,
                  }}
                >
                  App
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {STACK_MOBILE.map(t => (
                    <span
                      key={t}
                      className="tag"
                      style={{
                        background: 'rgba(26,77,109,0.08)',
                        borderColor: 'rgba(26,77,109,0.25)',
                        color: '#1A4D6D',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.38)} className="flex flex-wrap gap-3 mb-9">
              <button onClick={scrollToWork} className="btn btn-dark group">
                View my work
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button onClick={handleDownload} disabled={downloading} className="btn btn-ghost disabled:opacity-50" style={{ border: '1.5px solid var(--ink)', color: 'var(--ink)', fontWeight: 600 }}>
                <Download className={`w-3.5 h-3.5 ${downloading ? 'animate-bounce' : ''}`} />
                {downloading ? 'Downloading...' : 'Resume'}
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div {...fade(0.44)} className="flex gap-2">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={href} href={href} aria-label={label}
                  target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-sm transition-all hover:-translate-y-0.5"
                  style={{ border: '1px solid var(--border)', color: 'var(--ink-muted)', background: 'var(--cream-mid)' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Deep offset block — bottom-right */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 16,
                  right: -16,
                  background: 'var(--terra-pale)',
                  zIndex: 0,
                  borderRadius: 3,
                }}
              />
              {/* Thin accent border block */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 8,
                  right: -8,
                  background: 'transparent',
                  border: '1.5px solid var(--terra)',
                  opacity: 0.35,
                  zIndex: 1,
                  borderRadius: 3,
                }}
              />

              {/* Photo frame */}
              <div
                className="relative overflow-hidden rounded-sm"
                style={{
                  zIndex: 2,
                  width: 'clamp(200px, 26vw, 340px)',
                  aspectRatio: '3/4',
                  border: '1px solid var(--border)',
                  background: 'var(--cream-dark)',
                }}
              >
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'var(--cream-dark)' }}>
                    <div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--terra-pale)', borderTopColor: 'var(--terra)' }} />
                  </div>
                )}
                <img
                  src={imgSrc}
                  alt="Shaun Chikerema"
                  className={`w-full h-full object-cover object-top transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImgLoaded(true)}
                  itemProp="image"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToWork}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 font-body"
          style={{ color: 'var(--ink-muted)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          aria-label="Scroll down"
        >
          Scroll
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.button>
      </motion.div>
    </section>
  );
}