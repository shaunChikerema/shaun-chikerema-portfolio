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

// Plain counts, not a sequence: no zero-padding.
// `extra` only shows on lg+ ("6 projects shipped"); on mobile the label stays
// short so all three stats fit in one compact row.
const PROOF = [
  { n: '6', label: 'projects',     extra: ' shipped' },
  { n: '2', label: 'client sites', extra: ' live' },
  { n: '1', label: 'Android app',  extra: '' },
];

// Bright green: large/decorative use only (name, button fill, dot).
const G      = '#3ECF8E';
const G_DARK = '#2db87a';
// Darker green for anything small or text-like on light backgrounds
// (~5.3:1 on white, clears WCAG AA). Bright G is ~1.9:1.
const G_TEXT = '#1a7a52';

// Stacks are defined in globals.css (--ff-*) from the next/font variables in layout.tsx.
const PLAYFAIR: React.CSSProperties = { fontFamily: 'var(--ff-display)' };
const DM: React.CSSProperties       = { fontFamily: 'var(--ff-body)' };

const FOCUS_RING = '0 0 0 3px rgba(62,207,142,0.45)';

// Motion: the name reveal is the one deliberate moment. Everything else
// (eyebrow, divider, bio, stats, CTAs) fades in together right after it.
const GROUP_DELAY = 0.5;

// Soft green glow behind the surname. Set SHOW_GLOW to false to remove it,
// or tweak GLOW_ALPHA (0.06 subtle, 0.10 default, 0.14 strong).
const SHOW_GLOW  = true;
const GLOW_ALPHA = 0.10;

// Scoped to the hero. Move to globals.css if you want it site-wide.
const HERO_CSS = `
  #home ::selection { background: rgba(62,207,142,0.32); color: inherit; }
  #home .hero-bio   { text-wrap: balance; }
`;

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
      <style>{HERO_CSS}</style>

      {/* ── Top bar ── */}
      {/* pt-24 clears the fixed Header (h-[68px]) plus a small buffer. */}
      <motion.div {...fade(0, 0)} className="relative z-20 flex items-center justify-between px-6 lg:px-14 pt-24 lg:pt-28">
        <div className="flex items-center gap-2">
          <span aria-hidden style={{ width: 8, height: 8, borderRadius: '50%', background: G, display: 'inline-block' }} />
          <span
            style={{ fontSize: '0.78rem', letterSpacing: '0.02em', color: 'var(--ink-mid)', ...DM, fontWeight: 600 }}
          >
            Available for work
          </span>
        </div>

        {/* 40px hit areas. Icon stays visually small. */}
        <div className="flex items-center gap-2">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              itemProp={href.startsWith('http') ? 'sameAs' : undefined}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
              style={{ border: '1px solid var(--border-mid)', color: 'var(--ink-mid)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(62,207,142,0.5)'; el.style.color = G_TEXT; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--border-mid)'; el.style.color = 'var(--ink-mid)'; }}
              onFocus={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = FOCUS_RING; el.style.borderColor = 'rgba(62,207,142,0.6)'; }}
              onBlur={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = 'none'; el.style.borderColor = 'var(--border-mid)'; }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* ── Main content — left-anchored ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-start lg:justify-center max-w-5xl mx-auto w-full px-6 lg:px-14 pt-12 lg:py-16 pb-28 lg:pb-16">

        {/* Eyebrow */}
        <motion.p {...fade(GROUP_DELAY)} style={{
          fontSize: '0.78rem', letterSpacing: '0.03em',
          color: G_TEXT, ...DM, fontWeight: 700, marginBottom: '1.6rem',
        }}>
          <span itemProp="jobTitle">Software Engineer</span>, Botswana
        </motion.p>

        {/* Name — single h1, two lines. Capped at 7rem so it no longer
            spans the whole content column at laptop widths. */}
        <div style={{ position: 'relative' }}>
          {SHOW_GLOW && (
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduced ? 0 : 1.4, delay: reduced ? 0 : 0.3, ease: 'easeOut' }}
              style={{
                position: 'absolute', zIndex: -1, pointerEvents: 'none',
                left: '50%', top: '45%',
                width: 'min(130vw, 820px)', height: 'min(90vw, 460px)',
                x: '-50%', y: '-50%',
                background: `radial-gradient(ellipse at center, rgba(62,207,142,${GLOW_ALPHA}) 0%, rgba(62,207,142,0) 70%)`,
              }}
            />
          )}
          <h1 style={{ margin: 0, marginBottom: '2.4rem' }} itemProp="name">
            <span style={{ display: 'block', overflow: 'hidden', marginBottom: '0.05rem' }}>
              <motion.span
                initial={{ opacity: 0, y: reduced ? 0 : 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'block',
                  ...PLAYFAIR, fontWeight: 700,
                  fontSize: 'clamp(4rem, 10vw, 7rem)',
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
                  fontSize: 'clamp(4rem, 10vw, 7rem)',
                  letterSpacing: '-0.04em', lineHeight: 0.9,
                  color: G,
                }}
              >
                Chikerema
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Divider — one measure: full width of the content column. */}
        <motion.div
          {...fade(GROUP_DELAY, 0)}
          style={{ height: 1, background: 'var(--border)', marginBottom: '2rem' }}
        />

        {/* Bio, stats, CTAs.
            Mobile: single column in DOM order (bio, stats, CTAs).
            lg+: bio and CTAs stack on the left; stats sit on the right,
            bottom-aligned with the CTAs. */}
        <motion.div
          {...fade(GROUP_DELAY)}
          className="grid grid-cols-1 gap-y-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-8"
        >
          {/* Bio */}
          <p
            className="hero-bio lg:col-start-1 lg:row-start-1"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'var(--ink)',
              lineHeight: 1.75, ...DM, margin: 0, maxWidth: '38ch',
            }}
          >
            I build web and mobile products for founders and small teams
            who need something live.
          </p>

          {/* Stats — quiet, body font. Mobile: one compact row of three, number
              over label. lg+: vertical list with a left rule, number beside label.
              Numbers in G_TEXT (small text on light). */}
          <ul
            aria-label="Track record"
            className="grid grid-cols-3 gap-x-4 m-0 list-none lg:flex lg:flex-col lg:gap-y-3 lg:pl-8 lg:border-l lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-end"
            style={{ borderColor: 'var(--border)' }}
          >
            {PROOF.map(({ n, label, extra }) => (
              <li
                key={label}
                className="flex flex-col gap-1 text-[0.8rem] lg:flex-row lg:items-baseline lg:gap-0 lg:text-[0.92rem]"
                style={{ ...DM, lineHeight: 1.4, color: 'var(--ink-mid)' }}
              >
                <span
                  className="text-[1.35rem] leading-none lg:text-[0.92rem] lg:leading-[1.4] lg:inline-block lg:min-w-[1.3em]"
                  style={{ fontWeight: 700, color: G_TEXT, fontVariantNumeric: 'tabular-nums' }}
                >
                  {n}
                </span>
                <span>
                  {label}
                  <span className="hidden lg:inline">{extra}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs. id="hero-cta" is watched by WhatsAppFloat: the floating button
              stays hidden while these are on screen and appears once they scroll
              out of view, so it can never cover them. Keep the id in sync. */}
          <div
            id="hero-cta"
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 lg:col-start-1 lg:row-start-2"
          >
            <button
              onClick={scrollToWork}
              className="group justify-center sm:justify-start"
              style={{
                padding: '13px 26px', borderRadius: 6, background: G, color: '#000',
                fontSize: '0.8rem', fontWeight: 700, ...DM, letterSpacing: '0.02em',
                border: 'none', cursor: 'pointer', transition: 'background 0.2s, box-shadow 0.2s',
                display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 44,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G_DARK; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; }}
              onFocus={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = FOCUS_RING; }}
              onBlur={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
            >
              View my work
              <ArrowRight
                size={14}
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-[3px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              />
            </button>

            <button
              onClick={scrollToContact}
              className="justify-center sm:justify-start"
              style={{
                padding: '13px 22px', borderRadius: 6, background: 'transparent',
                color: 'var(--ink)', fontSize: '0.8rem', fontWeight: 600, ...DM,
                letterSpacing: '0.02em',
                border: '1.5px solid var(--border-mid)', cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
                display: 'inline-flex', alignItems: 'center', minHeight: 44,
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
    </section>
  );
}