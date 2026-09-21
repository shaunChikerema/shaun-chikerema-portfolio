'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { MAILTO_HREF } from '@/lib/site-config';
import { scrollToId } from '@/lib/scroll';

const SOCIALS = [
  { href: 'https://github.com/shaunChikerema',      icon: Github,   label: 'GitHub' },
  { href: 'https://linkedin.com/in/shaunchikerema', icon: Linkedin, label: 'LinkedIn' },
  { href: MAILTO_HREF,                              icon: Mail,     label: 'Email' },
];

const PROOF = [
  { n: '6', label: 'projects shipped' },
  { n: '2', label: 'client sites live' },
  { n: '1', label: 'Android app' },
];

// Bright green: large/decorative use (name, button fill, dot, pulse).
const G      = '#3ECF8E';
const G_DARK = '#2db87a';
// Darker green for small text on light backgrounds. Bright G is ~1.9:1 on white;
// this is ~5.3:1, which clears WCAG AA (4.5:1) at body size. (The previous
// #1FAE6E only reached ~2.9:1.)
const G_TEXT = '#1a7a52';

const PLAYFAIR: React.CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" };
const DM: React.CSSProperties       = { fontFamily: "'DM Sans', sans-serif" };
const MONO: React.CSSProperties     = { fontFamily: "'JetBrains Mono', 'SF Mono', Consolas, monospace" };

const FOCUS_RING = '0 0 0 3px rgba(62,207,142,0.45)';

export default function Hero() {
  const reduced = useReducedMotion();

  const fade = (delay = 0, y = 16) => ({
    initial:    { opacity: 0, y: reduced ? 0 : y },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
  });

  // Shared helper accounts for the fixed header, so sections don't land under it.
  const scrollToWork    = () => scrollToId('work');
  const scrollToContact = () => scrollToId('contact');

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
      {/* pt-24 clears the fixed Header (h-[68px]) plus a small buffer — this row was
          previously rendering underneath the header and was invisible on load. */}
      <motion.div {...fade(0, 0)} className="relative z-20 flex items-center justify-between px-6 lg:px-14 pt-24 lg:pt-28">
        <div className="flex items-center gap-2">
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: G, display: 'inline-block' }} />
          <span
            style={{ fontSize: '0.68rem', letterSpacing: '0.04em', color: 'var(--ink-muted)', ...DM, fontWeight: 600 }}
          >
            Available for work
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              itemProp={href.startsWith('http') ? 'sameAs' : undefined}
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
              style={{ border: '1px solid var(--border-mid)', color: 'var(--ink-mid)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(62,207,142,0.5)'; el.style.color = G_TEXT; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--border-mid)'; el.style.color = 'var(--ink-mid)'; }}
              onFocus={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = FOCUS_RING; el.style.borderColor = 'rgba(62,207,142,0.6)'; }}
              onBlur={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = 'none'; el.style.borderColor = 'var(--border-mid)'; }}
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* ── Main content — full width, left-anchored ── */}
      {/* justify-start + pt-12 on mobile anchors content near the top instead of vertically
          centering into dead space; lg breakpoint restores the centered desktop layout */}
      <div className="relative z-20 flex-1 flex flex-col justify-start lg:justify-center max-w-5xl mx-auto w-full px-6 lg:px-14 pt-12 lg:py-16 pb-32 lg:pb-16">

        {/* Eyebrow */}
        <motion.p {...fade(0.1)} style={{
          fontSize: '0.68rem', letterSpacing: '0.04em',
          color: G_TEXT, ...DM, fontWeight: 700, marginBottom: '1.6rem',
        }}>
          <span itemProp="jobTitle">Software Engineer</span>, Botswana
        </motion.p>

        {/* Name — single h1, two lines, takes ownership of the page */}
        <h1 style={{ margin: 0, marginBottom: '2.4rem' }} itemProp="name">
          <span style={{ display: 'block', overflow: 'hidden', marginBottom: '0.05rem' }}>
            <motion.span
              initial={{ opacity: 0, y: reduced ? 0 : 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'block',
                ...PLAYFAIR, fontWeight: 700,
                fontSize: 'clamp(3.2rem, 10vw, 8.5rem)',
                letterSpacing: '-0.04em', lineHeight: 0.9,
                color: 'var(--ink)',
              }}
            >
              Shaun
            </motion.span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span
              initial={{ opacity: 0, y: reduced ? 0 : 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'block',
                ...PLAYFAIR, fontWeight: 700, fontStyle: 'italic',
                fontSize: 'clamp(3.2rem, 10vw, 8.5rem)',
                letterSpacing: '-0.04em', lineHeight: 0.9,
                color: G,
              }}
            >
              Chikerema
            </motion.span>
          </span>
        </h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: 1, background: 'var(--border)', marginBottom: '2rem', transformOrigin: 'left', maxWidth: 560 }}
        />

        {/* Bio, proof, CTA — single column now that the tech-stack list (duplicated
            in Skills.tsx anyway) has been removed, along with the empty second
            column and the WhatsApp-corner collision it kept causing. */}
        <motion.div {...fade(0.36)} style={{ maxWidth: 480 }}>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'var(--ink)',
            lineHeight: 1.75, ...DM, marginBottom: '1.75rem', maxWidth: '38ch',
          }}>
            I build web and mobile products for founders and small teams
            who need something live.
          </p>

          {/* Proof numbers — set in monospace as a "readout" rather than reusing the
              name's italic serif, so they read as a technical/precise counterpoint
              to the display type instead of a smaller echo of it. */}
          <div
            className="grid grid-cols-3 gap-3 mb-7 pb-7"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            {PROOF.map(({ n, label }) => (
              <div key={label}>
                <p style={{
                  ...MONO, fontWeight: 700,
                  fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
                  color: G, lineHeight: 1, marginBottom: '0.4rem',
                  letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums',
                }}>
                  {n.padStart(2, '0')}
                </p>
                <p style={{
                  fontSize: '0.63rem', color: 'var(--ink-muted)', ...MONO, lineHeight: 1.35,
                  fontWeight: 500, letterSpacing: '0.02em',
                  textTransform: 'uppercase', whiteSpace: 'normal', wordBreak: 'break-word',
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs — Resume lives in the Header only, not duplicated here.
              Stacked full-width on mobile (instead of flex-wrap) so "Get in
              touch" doesn't get orphaned onto its own line at an odd width;
              this also removes the need for the old pr-16 WhatsApp-dodge
              padding, since there's nothing left for the float button to
              collide with. */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <button
              onClick={scrollToWork}
              className="justify-center sm:justify-start"
              style={{
                padding: '12px 26px', borderRadius: 6, background: G, color: '#000',
                fontSize: '0.75rem', fontWeight: 700, ...DM, letterSpacing: '0.02em',
                border: 'none', cursor: 'pointer', transition: 'background 0.2s, box-shadow 0.2s',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G_DARK; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; }}
              onFocus={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = FOCUS_RING; }}
              onBlur={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
            >
              View my work <ArrowRight size={14} />
            </button>

            <button
              onClick={scrollToContact}
              className="justify-center sm:justify-start"
              style={{
                padding: '12px 22px', borderRadius: 6, background: 'transparent',
                color: 'var(--ink)', fontSize: '0.75rem', fontWeight: 600, ...DM,
                letterSpacing: '0.02em',
                border: '1.5px solid var(--border-mid)', cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
                display: 'inline-flex', alignItems: 'center',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = 'rgba(62,207,142,0.6)'; el.style.color = G_TEXT; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = 'var(--border-mid)'; el.style.color = 'var(--ink)'; }}
              onFocus={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = FOCUS_RING; }}
              onBlur={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
            >
              Get in touch
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          onClick={scrollToWork}
          style={{
            color: 'var(--ink-muted)', fontSize: '0.6rem', letterSpacing: '0.1em',
            ...DM, background: 'none', border: 'none',
            cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            padding: 4, borderRadius: 4,
          }}
          onFocus={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = FOCUS_RING; }}
          onBlur={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
          aria-label="Scroll down"
        >
          scroll
          <div style={{ width: 1, height: 20, background: 'linear-gradient(to bottom, var(--ink-muted), transparent)' }} />
        </button>
      </motion.div>
    </section>
  );
}