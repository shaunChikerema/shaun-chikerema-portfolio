'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { MAILTO_HREF } from '@/lib/site-config';

const SOCIALS = [
  { href: 'https://github.com/shaunChikerema',      icon: Github,   label: 'GitHub' },
  { href: 'https://linkedin.com/in/shaunchikerema', icon: Linkedin, label: 'LinkedIn' },
  { href: MAILTO_HREF,                              icon: Mail,     label: 'Email' },
];

const STACK = ['Python', 'LangChain', 'Next.js', 'TypeScript', 'React Native', 'Supabase'];

const PROOF = [
  { n: '7', label: 'projects shipped' },
  { n: '2', label: 'client sites live' },
  { n: '2', label: 'Android apps' },
];

const G      = '#3ECF8E';
const G_DARK = '#2db87a';

const PLAYFAIR: React.CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" };
const DM: React.CSSProperties       = { fontFamily: "'DM Sans', sans-serif" };

export default function Hero() {
  const [downloading, setDownloading] = useState(false);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const reduced = useReducedMotion();

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

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-x-hidden"
      style={{ background: 'var(--bg-page)' }}
      itemScope itemType="https://schema.org/Person"
    >
      {/* Green top accent */}
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

      {/* ── Main content — full width, left-anchored ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-6 lg:px-14 py-16">

        {/* Eyebrow */}
        <motion.p {...fade(0.1)} style={{
          fontSize: '0.67rem', letterSpacing: '0.22em', textTransform: 'uppercase',
          color: G, ...DM, fontWeight: 700, marginBottom: '1.6rem',
        }}>
          Software Engineer · Botswana
        </motion.p>

        {/* Name — large, takes ownership of the page */}
        <div style={{ overflow: 'hidden', marginBottom: '0.05rem' }}>
          <motion.h1
            initial={{ opacity: 0, y: reduced ? 0 : 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            style={{
              ...PLAYFAIR, fontWeight: 700,
              fontSize: 'clamp(4rem, 10vw, 8.5rem)',
              letterSpacing: '-0.04em', lineHeight: 0.9,
              color: 'var(--ink)',
            }}
            itemProp="name"
          >
            Shaun
          </motion.h1>
        </div>

        <div style={{ overflow: 'hidden', marginBottom: '2.4rem' }}>
          <motion.h1
            initial={{ opacity: 0, y: reduced ? 0 : 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              ...PLAYFAIR, fontWeight: 700, fontStyle: 'italic',
              fontSize: 'clamp(4rem, 10vw, 8.5rem)',
              letterSpacing: '-0.04em', lineHeight: 0.9,
              color: G,
            }}
          >
            Chikerema
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: 1, background: 'var(--border)', marginBottom: '2rem', transformOrigin: 'left', maxWidth: 560 }}
        />

        {/* Bio + proof in a two-col on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start" style={{ maxWidth: 860 }}>

          {/* Bio */}
          <motion.div {...fade(0.36)}>
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'var(--ink)',
              lineHeight: 1.75, ...DM, marginBottom: '2rem',
            }}>
              From an AI/RAG pipeline to a multi-tenant real estate marketplace — I build and deploy full-stack products end to end.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToWork}
                style={{
                  padding: '12px 26px', borderRadius: 6, background: G, color: '#000',
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
                  padding: '12px 26px', borderRadius: 6, background: 'transparent',
                  color: 'var(--ink)', fontSize: '0.75rem', fontWeight: 600, ...DM,
                  border: '1px solid var(--border-mid)', cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(62,207,142,0.5)'; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-mid)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)'; }}
              >
                <Download size={13} className={downloading ? 'animate-bounce' : ''} />
                {downloading ? 'Downloading...' : 'Resume'}
              </button>
            </div>
          </motion.div>

          {/* Right col — proof + stack */}
          <motion.div {...fade(0.44)}>
            {/* Proof numbers */}
            <div
              className="grid grid-cols-3 gap-4 mb-7 pb-7"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              {PROOF.map(({ n, label }) => (
                <div key={label}>
                  <p style={{
                    ...PLAYFAIR, fontWeight: 700, fontStyle: 'italic',
                    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                    color: G, lineHeight: 1, marginBottom: '0.35rem',
                    letterSpacing: '-0.03em',
                  }}>
                    {n}
                  </p>
                  <p style={{ fontSize: '0.68rem', color: 'var(--ink-muted)', ...DM, lineHeight: 1.4 }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-1.5">
              {STACK.map(t => (
                <span key={t} style={{
                  padding: '4px 11px', borderRadius: 4,
                  fontSize: '0.63rem', fontWeight: 600,
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
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          onClick={scrollToWork}
          style={{
            color: 'var(--ink-muted)', fontSize: '0.52rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', ...DM, background: 'none', border: 'none',
            cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          }}
          aria-label="Scroll down"
        >
          scroll
          <div style={{ width: 1, height: 20, background: 'linear-gradient(to bottom, var(--ink-muted), transparent)' }} />
        </button>
      </motion.div>
    </section>
  );
}
