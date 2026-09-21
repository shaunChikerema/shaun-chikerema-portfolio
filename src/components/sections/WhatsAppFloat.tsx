'use client';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { WA_HREF } from '@/lib/site-config';

// Must match the id on the CTA row in Hero.tsx.
const HERO_CTA_ID = 'hero-cta';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);
  // Hidden until the hero CTAs scroll out of view. Starts false so the button
  // never flashes on top of them during load.
  const [visible, setVisible] = useState(false);
  const [pulseDone, setPulseDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const target = document.getElementById(HERO_CTA_ID);

    // No hero on this page (or the id changed): just show the button.
    if (!target || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Don't leave a tooltip stranded if the button hides while hovered.
  useEffect(() => {
    if (!visible) setHovered(false);
  }, [visible]);

  return (
    <div
      // Smaller offset on mobile so it hugs the corner instead of sitting mid-screen.
      // z-40: above page content, below the mobile nav drawer (z-[60]/z-[70] in Header.tsx).
      className="fixed z-40 flex items-center gap-2.5 bottom-4 right-4 sm:bottom-7 sm:right-7"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && visible && (
          <motion.div
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--ink)',
              color: 'var(--bg-page)',
              fontSize: '0.72rem',
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              padding: '7px 12px',
              borderRadius: 8,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              letterSpacing: '0.01em',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
          >
            Chat on WhatsApp
            <div style={{
              position: 'absolute',
              right: -5,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '5px solid transparent',
              borderBottom: '5px solid transparent',
              borderLeft: '5px solid var(--ink)',
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button — 48px on mobile, 56px from sm up */}
      <motion.a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
        whileHover={visible && !reduced ? { scale: 1.08 } : undefined}
        whileTap={visible ? { scale: 0.95 } : undefined}
        className="relative flex items-center justify-center flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full"
        style={{
          background: '#25D366',
          color: '#ffffff', // icon uses currentColor
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        {/* Attention pulse: 3 cycles the first time the button appears, then stops
            for good. An endless pulse becomes noise. Skipped for reduced motion. */}
        {!reduced && visible && !pulseDone && (
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: 2, ease: 'easeOut' }}
            onAnimationComplete={() => setPulseDone(true)}
            style={{ background: '#25D366', pointerEvents: 'none' }}
          />
        )}
        <span className="relative flex">
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        </span>
      </motion.a>
    </div>
  );
}